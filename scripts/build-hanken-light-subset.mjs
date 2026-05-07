// Hanken Grotesk Light (300) Static-Subset-Generator
// Stand 05.05.2026, OG-Bild v4 — Schärfung-Schritt für echtes Light-Rendering.
//
// resvg-js wertet den Variable-Weight-Axis nicht aus, alle font-weight-
// Werte rendern als Variable-Default (Regular ≈ 400). Workaround: wir
// erzeugen aus der Variable-TTF eine STATISCHE Light-Cut-TTF mit dem
// wght-Axis fest auf 300 gepinnt. Diese statische TTF rendert in resvg
// dann zuverlässig als Light, weil kein Variable-Axis mehr im Spiel ist.
//
// Verwendet subset-font (harfbuzz-WASM-Wrapper) mit variationAxes-Option.
// Das Subset enthält bewusst nur die Zeichen, die im Headline-Text der
// Startseite vorkommen — kleinere TTF, schnelleres resvg-Rendern.

import subsetFont from 'subset-font';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');

const SRC_TTF = resolve(REPO_ROOT, 'scripts/fonts/HankenGrotesk-Variable.ttf');
const LIGHT_TTF = resolve(REPO_ROOT, 'scripts/fonts/HankenGrotesk-Light.ttf');
const REGULAR_TTF = resolve(REPO_ROOT, 'scripts/fonts/HankenGrotesk-Regular.ttf');
const MEDIUM_TTF = resolve(REPO_ROOT, 'scripts/fonts/HankenGrotesk-Medium.ttf');

// Subset-Text: alle Zeichen die in Headline und Wortmarke vorkommen.
// Conservativ: zusätzlich alle Buchstaben des Alphabets plus Ziffern,
// damit zukünftige Headline-Varianten ohne Re-Subset funktionieren.
// Erweitert am 06.05.2026 (OG-Bilder-Bauauftrag) um „é" für „André",
// um „&" und „@" als typografische Reserve und um Regular (wght=400)
// für die Default-OG-Subline.
const SUBSET_TEXT =
  'Hausverwaltung und Maklerei in Rostock. Inhabergeführt. Fokussiert. Proimma' +
  ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzäöüÄÖÜßéÉ0123456789.,;:!?-—()/§&@';

console.log(`Subset-Text Länge: ${SUBSET_TEXT.length} Zeichen`);
console.log(`Source TTF: ${SRC_TTF}`);

const variableBuffer = await readFile(SRC_TTF);
console.log(`Source-Größe: ${variableBuffer.length} Bytes`);

// Light (300) für die XXL-Headline
const lightBuffer = await subsetFont(variableBuffer, SUBSET_TEXT, {
  targetFormat: 'sfnt',
  variationAxes: { wght: 300 },
});
await writeFile(LIGHT_TTF, lightBuffer);
console.log(`Light-TTF erzeugt: ${LIGHT_TTF} (${lightBuffer.length} Bytes)`);

// Regular (400) für die Default-OG-Subline (06.05.2026 ergänzt)
const regularBuffer = await subsetFont(variableBuffer, SUBSET_TEXT, {
  targetFormat: 'sfnt',
  variationAxes: { wght: 400 },
});
await writeFile(REGULAR_TTF, regularBuffer);
console.log(`Regular-TTF erzeugt: ${REGULAR_TTF} (${regularBuffer.length} Bytes)`);

// Medium (500) für die Wortmarke "Proimma" (v5-Schärfung)
const mediumBuffer = await subsetFont(variableBuffer, SUBSET_TEXT, {
  targetFormat: 'sfnt',
  variationAxes: { wght: 500 },
});
await writeFile(MEDIUM_TTF, mediumBuffer);
console.log(`Medium-TTF erzeugt: ${MEDIUM_TTF} (${mediumBuffer.length} Bytes)`);
