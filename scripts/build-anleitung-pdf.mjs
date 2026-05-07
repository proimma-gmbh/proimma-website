// Anleitungs-PDF-Generator
// Stand 05.05.2026, Compliance-Korrektur 1.3 v25-Nachzug.
//
// Erzeugt /public/anleitungen/hausverwalter-wechseln-fuenf-schritte.pdf
// aus der korrigierten Markdown-Quelle. Pipeline:
//   1. Markdown via marked → HTML
//   2. HTML mit Print-CSS (Hanken Grotesk via @fontsource WOFF2 base64-eingebettet,
//      DIN-A4-Seitenformat, Editorial-Bold-Designtokens)
//   3. HTML in temp-Datei
//   4. System-Chrome im headless-Modus mit --print-to-pdf
//
// Pandoc + LaTeX wäre die spec-bevorzugte Pipeline, aber weder pandoc noch
// LaTeX-Engines sind auf dem System installiert (auch kein brew zum
// Nachinstallieren). System-Chrome ist die pragmatische Alternative ohne
// größeren Tool-Stack-Eingriff.

import { marked } from 'marked';
import { readFile, writeFile, mkdtemp } from 'node:fs/promises';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { tmpdir } from 'node:os';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const exec = promisify(execFile);
const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');

const MD_SRC = '/Users/andredieckmann/Desktop/Proimma GmbH/00_Projekt_Setup_2026/Anleitungen/Anleitung_Hausverwalter-wechseln-in-fuenf-Schritten_2026-05-05.md';
const PDF_OUT = resolve(REPO_ROOT, 'public/anleitungen/hausverwalter-wechseln-fuenf-schritte.pdf');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const HANKEN_TTF = resolve(REPO_ROOT, 'scripts/fonts/HankenGrotesk-Variable.ttf');

console.log(`Lese Markdown: ${MD_SRC}`);
const md = await readFile(MD_SRC, 'utf8');
console.log(`Markdown-Länge: ${md.length} Zeichen`);

// Variable TTF als base64 für @font-face inline (Chrome lädt das ohne externe Datei)
const fontBuffer = await readFile(HANKEN_TTF);
const fontBase64 = fontBuffer.toString('base64');

// Markdown → HTML-Body
const htmlBody = marked.parse(md, { gfm: true, breaks: false });

// HTML mit Print-CSS für DIN-A4. Editorial-Bold-Designtokens minimal.
// Off-White-Hintergrund, Schwarzgrau-Text, Hanken Grotesk, sparsame Hairlines,
// Hellblau ausschließlich für Accent-Bordeaux am Sektions-H2.
const html = `<!doctype html>
<html lang="de">
<head>
<meta charset="UTF-8">
<title>Hausverwalter wechseln in fünf Schritten</title>
<style>
@font-face {
  font-family: "Hanken Grotesk";
  src: url(data:font/ttf;base64,${fontBase64}) format("truetype-variations");
  font-weight: 100 900;
  font-style: normal;
}
@page {
  size: A4;
  margin: 22mm 18mm 22mm 18mm;
}
* { box-sizing: border-box; }
html, body {
  margin: 0;
  padding: 0;
  font-family: "Hanken Grotesk", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 10.5pt;
  line-height: 1.55;
  color: #1A1A1A;
  background: #FAFAF8;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}
h1 {
  font-size: 26pt;
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: -0.4pt;
  margin: 0 0 14mm 0;
  page-break-after: avoid;
  text-wrap: balance;
}
h1:first-of-type {
  border-bottom: 0.4pt solid #1A1A1A;
  padding-bottom: 4mm;
}
h2 {
  font-size: 16pt;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.2pt;
  margin: 12mm 0 4mm 0;
  page-break-after: avoid;
  text-wrap: balance;
}
h2::before {
  content: "";
  display: inline-block;
  width: 18mm;
  height: 0.6pt;
  background: #34AEEB;
  vertical-align: middle;
  margin-right: 4mm;
  margin-bottom: 1.5mm;
}
h3 {
  font-size: 12pt;
  font-weight: 500;
  margin: 8mm 0 3mm 0;
  page-break-after: avoid;
}
p {
  margin: 0 0 4mm 0;
  text-align: justify;
  hyphens: auto;
  orphans: 3;
  widows: 3;
}
ul, ol {
  margin: 0 0 4mm 6mm;
  padding: 0;
}
li {
  margin: 0 0 2mm 0;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin: 4mm 0;
  font-size: 9.5pt;
}
th, td {
  text-align: left;
  padding: 2mm 3mm;
  border-bottom: 0.3pt solid #D9D9D9;
  vertical-align: top;
}
th {
  font-weight: 500;
  border-bottom: 0.6pt solid #1A1A1A;
}
strong { font-weight: 500; }
em { font-style: italic; }
a {
  color: #1A1A1A;
  text-decoration: none;
  border-bottom: 0.3pt solid #D9D9D9;
}
hr {
  border: 0;
  border-top: 0.3pt solid #D9D9D9;
  margin: 8mm 0;
}
blockquote {
  margin: 4mm 0;
  padding: 2mm 4mm;
  border-left: 1pt solid #34AEEB;
  color: #1A1A1A;
  background: rgba(52, 174, 235, 0.04);
}
code, pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 9pt;
}
pre {
  padding: 3mm;
  background: #FFFFFF;
  border: 0.3pt solid #D9D9D9;
  overflow: hidden;
  white-space: pre-wrap;
}
/* Footer mit Wortmarke und Versionierung am Seitenende, gerendert über
   running-Element von CSS Paged Media. Chrome-headless unterstützt das
   begrenzt; Wortmarke ist deshalb am Markdown-Ende inline. */
</style>
</head>
<body>
${htmlBody}
</body>
</html>`;

// Temp-HTML schreiben
const tmpDir = await mkdtemp(join(tmpdir(), 'anleitung-pdf-'));
const tmpHtml = join(tmpDir, 'anleitung.html');
await writeFile(tmpHtml, html, 'utf8');
console.log(`Temp-HTML: ${tmpHtml} (${html.length} Zeichen)`);

// Chrome headless --print-to-pdf
console.log(`Chrome-Headless-Render → ${PDF_OUT}`);
const { stdout, stderr } = await exec(CHROME, [
  '--headless=new',
  '--no-sandbox',
  '--disable-gpu',
  '--no-pdf-header-footer',
  '--virtual-time-budget=10000',
  `--print-to-pdf=${PDF_OUT}`,
  `file://${tmpHtml}`,
], { timeout: 60000 });

if (stderr) console.log('Chrome stderr:', stderr.split('\n').slice(0, 5).join('\n'));

const fsPromises = await import('node:fs/promises');
const finalSize = (await fsPromises.stat(PDF_OUT)).size;
console.log(`PDF erzeugt: ${PDF_OUT}`);
console.log(`Datei-Größe: ${(finalSize / 1024).toFixed(1)} KB`);
