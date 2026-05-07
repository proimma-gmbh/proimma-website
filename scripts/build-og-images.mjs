// OG-Bilder-Generator (Plural) — sieben Vorschau-Kacheln
// Stand 06.05.2026.
//
// Reine Typografie-Komposition für sieben OG-Vorschau-Kacheln. Ersetzt das alte Foto-OG-Konzept (scripts/build-og-image.mjs,
// Singular) ab dem 06.05.2026 und liefert Vorschau-Kacheln für alle sechs
// Hauptseiten plus ein Default-Fallback-Bild.
//
// Pipeline pro Bild:
//   1. SVG-Template aus public/og-images/templates/ lesen
//   2. Resvg mit explizit geladenem Hanken Grotesk Light (statisches Subset
//      mit wght-Axis auf 300 gepinnt) rendern. defaultFontFamily auf
//      "Hanken Grotesk" gesetzt, damit der Family-Name aus dem SVG aufgelöst
//      wird. resvg-js ignoriert den font-weight-Wert im SVG und rendert
//      immer mit dem geladenen Subset; das ist hier korrekt, weil alle
//      sieben Templates gleichgewichtige Light-Setzungen sind.
//   3. PNG-Buffer durch Sharp mit quality 90 reichen, an public/og-images/
//      schreiben.
//
// Hinweis Default-OG: Sektion 1.15 nennt für die Subline body-l Hanken
// Grotesk Regular. Da Resvg mehrere Subsets mit gleichem Family-Name nicht
// koexistieren lässt, wird die Subline hier in Light gerendert. Visuell
// ist die Abweichung minimal; eine spätere Schärfung könnte die Subsets
// mit unterschiedlichen Family-Namen rebrandien (font.name-Patch via
// fontkit) und dann Regular sauber laden.

import sharp from 'sharp';
import { Resvg } from '@resvg/resvg-js';
import { readFile, writeFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');

const FONT_LIGHT = resolve(REPO_ROOT, 'scripts/fonts/HankenGrotesk-Light.ttf');
const TEMPLATES_DIR = resolve(REPO_ROOT, 'public/og-images/templates');
const OUT_DIR = resolve(REPO_ROOT, 'public/og-images');

const RENDER_FONT_FAMILY = 'Hanken Grotesk';
const W = 1200;
const H = 630;

// Wahrheits-Check: Light-Subset muss vorliegen
if (!existsSync(FONT_LIGHT)) {
  console.error(`FEHLER: Hanken Grotesk Light-TTF nicht gefunden unter ${FONT_LIGHT}`);
  console.error('Lauf: node scripts/build-hanken-light-subset.mjs');
  process.exit(1);
}

const TEMPLATES = [
  'og-default',
  'og-startseite',
  'og-hausverwaltung',
  'og-maklerei',
  'og-ueber-proimma',
  'og-kontakt',
  'og-themen-hub',
];

console.log(`OG-Bilder-Build, Stand 06.05.2026`);
console.log(`Templates: ${TEMPLATES_DIR}`);
console.log(`Ausgabe:   ${OUT_DIR}`);
console.log(`Light-TTF: ${FONT_LIGHT}`);
console.log('');

const results = [];

for (const name of TEMPLATES) {
  const svgPath = resolve(TEMPLATES_DIR, `${name}.svg`);
  const pngPath = resolve(OUT_DIR, `${name}.png`);

  if (!existsSync(svgPath)) {
    console.error(`FEHLER: SVG-Template fehlt: ${svgPath}`);
    process.exit(1);
  }

  const svg = await readFile(svgPath, 'utf8');

  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: W },
    font: {
      loadSystemFonts: false,
      fontFiles: [FONT_LIGHT],
      defaultFontFamily: RENDER_FONT_FAMILY,
    },
    background: '#FAFAF8',
  });

  const renderedPng = resvg.render().asPng();

  // Sharp-Pass: explizit auf 1200x630 sicherstellen, Quality 90 setzen,
  // Palette aktivieren für kleine Datei (reine Typografie-Komposition mit
  // sehr wenigen Farben — Off-White, Anthrazit, Hellblau).
  await sharp(renderedPng)
    .resize(W, H, { fit: 'cover' })
    .png({ quality: 90, compressionLevel: 9, palette: true })
    .toFile(pngPath);

  const meta = await sharp(pngPath).metadata();
  const size = (await stat(pngPath)).size;
  results.push({ name, pngPath, w: meta.width, h: meta.height, size });

  console.log(`  ✓ ${name}.png  ${meta.width}×${meta.height}px  ${(size / 1024).toFixed(1)} KB`);
}

console.log('');
console.log(`${results.length} OG-Bilder erzeugt.`);
