// Lokal-Sicht-Pfad-Cleanup für Vorschau-Builds
// Stand 06.05.2026, Diagnose-und-Korrektur-Auftrag.
//
// Iteriert über alle dist/**/*.html und dist/_astro/*.css und stellt
// absolute Asset-Pfade tiefen-bewusst auf relative Pfade um, sodass das
// Vorschau-Build per file://-Doppelklick funktioniert. Beruht auf der
// Memory-Lehre vom 03.05.2026 (Sektion „Browser-Sicherheits-Lehren für
// Vorschau-Builds" in 00_Headquarter/tools-workflows.md):
//   Lehre 1: Asset-Pfade strikt relativ in HTML und CSS-url
//   Lehre 3: Interne Routen-Links bleiben absolut, weil das BaseLayout-
//            Inline-Script sie zur file://-Laufzeit dynamisch umschreibt.
//
// Aufruf nach jedem Astro-Build, der lokal per Doppelklick geprüft wird:
//   npm run build && node scripts/local-preview-pathfix.mjs
//
// Idempotent: doppelter Lauf ändert nichts und liefert die gleichen
// Soll-Pfade. Routen-Links wie href="/hausverwaltung" werden bewusst
// nicht angefasst, weil das BaseLayout-Inline-Script sie zur Laufzeit
// tiefen-bewusst auf ./hausverwaltung/index.html (Tiefe 0) oder
// ../hausverwaltung/index.html (Tiefe 1) usw. umschreibt.
//
// Was wird umgestellt?
//   In HTML-Dateien:
//     ="/_astro/...     →  ="<up>_astro/...
//     ="/favicon...     →  ="<up>favicon...
//     ="/img/...        →  ="<up>img/...
//     ="/og-images/...  →  ="<up>og-images/...
//     ="/anleitungen/...→  ="<up>anleitungen/...
//   In CSS-Dateien (alle in dist/_astro/, immer im selben Verzeichnis
//   wie die referenzierten WOFF2-Dateien):
//     url(/_astro/...)  →  url(./...)
//
// Tiefen-Berechnung: für eine HTML-Datei dist/<segment-1>/.../<segment-n>/index.html
// ist die Tiefe n und der up-Präfix = '../' wiederholt n-mal.
//   dist/index.html                         → Tiefe 0 → up = './'
//   dist/hausverwaltung/index.html          → Tiefe 1 → up = '../'
//   dist/wissen/verwalterwechsel/index.html → Tiefe 2 → up = '../../'

import { readFile, writeFile, readdir, stat } from 'node:fs/promises';
import { resolve, dirname, relative, sep, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const DIST_DIR = resolve(REPO_ROOT, 'dist');

// Asset-Präfixe, die in HTML-Attributen tiefen-bewusst umgestellt werden.
// Reihenfolge spielt keine Rolle, jeder Präfix wird einzeln per Regex ersetzt.
const ASSET_PREFIXES = [
  '_astro/',
  'favicon.svg',
  'favicon.ico',
  'img/',
  'og-images/',
  'anleitungen/',
];

async function walkHtml(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = resolve(dir, e.name);
    if (e.isDirectory()) {
      out.push(...await walkHtml(full));
    } else if (e.isFile() && e.name.endsWith('.html')) {
      out.push(full);
    }
  }
  return out;
}

function depthFromDist(htmlPath) {
  // Pfad relativ zu dist/, Backslash-zu-Slash für Plattform-Robustheit.
  const rel = relative(DIST_DIR, htmlPath).split(sep).join(posix.sep);
  // dist/index.html → 'index.html' → 0 Slashes → Tiefe 0.
  // dist/hausverwaltung/index.html → 'hausverwaltung/index.html' → 1 Slash → Tiefe 1.
  // dist/wissen/verwalterwechsel/index.html → 'wissen/verwalterwechsel/index.html' → 2 Slashes → Tiefe 2.
  const slashes = (rel.match(/\//g) || []).length;
  return slashes;
}

function upPrefix(depth) {
  if (depth === 0) return './';
  return '../'.repeat(depth);
}

function fixHtmlContent(html, up) {
  let out = html;
  let count = 0;
  for (const prefix of ASSET_PREFIXES) {
    // Wir matchen ="/<prefix> als Attribute-Wert-Beginn und ersetzen die
    // führende '/' durch den tiefen-bewussten up-Präfix.
    const needle = `="/${prefix}`;
    const replacement = `="${up}${prefix}`;
    const before = out.length;
    out = out.split(needle).join(replacement);
    const after = out.length;
    if (after !== before) {
      // Anzahl der Treffer aus Längenunterschied geteilt durch Längengewinn pro Treffer.
      const gainPerHit = replacement.length - needle.length;
      if (gainPerHit > 0) count += (after - before) / gainPerHit;
    }
  }
  return { out, count };
}

function fixCssContent(css) {
  // url(/_astro/foo.woff2) → url(./foo.woff2)
  // CSS und WOFF2 liegen beide in dist/_astro/, deshalb ist der relative
  // Pfad immer ./ relativ zur CSS-Datei.
  const before = css.length;
  const out = css.split('url(/_astro/').join('url(./');
  const after = out.length;
  const count = (before - after) / ('url(/_astro/'.length - 'url(./'.length);
  return { out, count };
}

console.log(`Lokal-Sicht-Pfad-Cleanup, Stand 06.05.2026`);
console.log(`Quelle: ${DIST_DIR}`);
console.log('');

// HTML-Dateien
const htmlFiles = await walkHtml(DIST_DIR);
console.log(`HTML-Dateien gefunden: ${htmlFiles.length}`);
let htmlTotalReplacements = 0;
for (const f of htmlFiles) {
  const depth = depthFromDist(f);
  const up = upPrefix(depth);
  const html = await readFile(f, 'utf8');
  const { out, count } = fixHtmlContent(html, up);
  if (out !== html) {
    await writeFile(f, out, 'utf8');
  }
  htmlTotalReplacements += count;
  const rel = relative(DIST_DIR, f).split(sep).join(posix.sep);
  console.log(`  Tiefe ${depth}  up='${up}'  ${count} Treffer  ${rel}`);
}

// CSS-Dateien in dist/_astro/
console.log('');
const astroDir = resolve(DIST_DIR, '_astro');
const astroEntries = await readdir(astroDir);
const cssFiles = astroEntries.filter(n => n.endsWith('.css')).map(n => resolve(astroDir, n));
console.log(`CSS-Dateien in dist/_astro/: ${cssFiles.length}`);
let cssTotalReplacements = 0;
for (const f of cssFiles) {
  const css = await readFile(f, 'utf8');
  const { out, count } = fixCssContent(css);
  if (out !== css) {
    await writeFile(f, out, 'utf8');
  }
  cssTotalReplacements += count;
  console.log(`  ${count} Treffer  _astro/${f.split(sep).pop()}`);
}

console.log('');
console.log(`HTML: ${htmlTotalReplacements} Asset-Pfad-Ersetzungen über ${htmlFiles.length} Dateien.`);
console.log(`CSS:  ${cssTotalReplacements} url()-Ersetzungen über ${cssFiles.length} Dateien.`);
console.log('Fertig. Vorschau per file://-Doppelklick auf jede dist/.../index.html möglich.');
