#!/usr/bin/env node
// create-snapshot.mjs
// Erzeugt einen frischen Upload-Snapshot aus dem aktuellen dist-Verzeichnis.
// Pflicht-Folge nach jedem npm run build plus node scripts/local-preview-pathfix.mjs.
//
// Aufruf: node scripts/create-snapshot.mjs <versionsnummer>
// Beispiel: node scripts/create-snapshot.mjs 42
//
// Was das Skript macht:
//   1. Prüft, dass /dist/ existiert (Build wurde gelaufen).
//   2. Berechnet den Ziel-Ordner upload-vN-JJJJ-MM-TT (Datum aus Europe/Berlin).
//   3. Entfernt einen vorhandenen Ziel-Ordner gleichen Namens (idempotent).
//   4. Kopiert /dist/ in den Ziel-Ordner rekursiv.
//   5. Räumt iCloud-Duplikat-Ordner mit "  2"-Suffix automatisch weg
//      (Befund 13.05.2026, macOS-iCloud-Sync auf Andrés Schreibtisch).
//   6. Räumt versteckte .DS_Store-Dateien rekursiv weg.
//   7. Druckt Bilanz mit Datei-Zahl, Verzeichnis-Zahl und Top-Level-Bytes-Summe.
//
// Verankerung: tools-workflows.md, Snapshot-Hygiene-Konvention vom 13.05.2026.

import { existsSync, rmSync, readdirSync, statSync, mkdirSync, cpSync } from 'node:fs';
import { join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const distDir = join(projectRoot, 'dist');

// --- Schritt 1: Eingaben prüfen ---
const versionArg = process.argv[2];
if (!versionArg || !/^\d+$/.test(versionArg)) {
  console.error('Fehler: Versionsnummer fehlt oder ungültig.');
  console.error('Aufruf: node scripts/create-snapshot.mjs <versionsnummer>');
  console.error('Beispiel: node scripts/create-snapshot.mjs 42');
  process.exit(1);
}

if (!existsSync(distDir)) {
  console.error('Fehler: /dist/ existiert nicht. Bitte zuerst npm run build ausführen.');
  process.exit(1);
}

// --- Schritt 2: Ziel-Ordner-Name berechnen mit Europe/Berlin-Datum ---
const berlinDate = new Date().toLocaleString('de-DE', {
  timeZone: 'Europe/Berlin',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});
// de-DE liefert "DD.MM.YYYY", wir brauchen "YYYY-MM-DD"
const [day, month, year] = berlinDate.split('.');
const dateSuffix = `${year}-${month}-${day}`;
const snapshotName = `upload-v${versionArg}-${dateSuffix}`;
const snapshotDir = join(projectRoot, snapshotName);

console.log(`Snapshot-Erstellung: ${snapshotName}`);

// --- Schritt 3: Alten Ziel-Ordner entfernen ---
if (existsSync(snapshotDir)) {
  console.log(`Vorhandenen Ordner ${snapshotName} wird zur Sicherheit entfernt ...`);
  rmSync(snapshotDir, { recursive: true, force: true });
}

// --- Schritt 4: dist rekursiv in Ziel kopieren ---
console.log('Kopiere /dist/ in den neuen Snapshot-Ordner ...');
cpSync(distDir, snapshotDir, { recursive: true });

// --- Schritt 5: iCloud-Duplikat-Ordner mit " 2"-Suffix weg ---
function removeIcloudDuplicates(dir) {
  let removedCount = 0;
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      // " 2" am Ende = iCloud-Sync-Duplikat
      if (entry.name.endsWith(' 2')) {
        rmSync(fullPath, { recursive: true, force: true });
        console.log(`  Duplikat entfernt: ${fullPath.replace(projectRoot + '/', '')}`);
        removedCount += 1;
      } else {
        removedCount += removeIcloudDuplicates(fullPath);
      }
    }
  }
  return removedCount;
}
const icloudCount = removeIcloudDuplicates(snapshotDir);

// --- Schritt 6: .DS_Store-Dateien rekursiv weg ---
function removeDSStore(dir) {
  let removedCount = 0;
  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isFile() && entry.name === '.DS_Store') {
      rmSync(fullPath, { force: true });
      removedCount += 1;
    } else if (entry.isDirectory()) {
      removedCount += removeDSStore(fullPath);
    }
  }
  return removedCount;
}
const dsStoreCount = removeDSStore(snapshotDir);

// --- Schritt 7: Bilanz ---
const topLevelEntries = readdirSync(snapshotDir, { withFileTypes: true });
let topLevelFiles = 0;
let topLevelDirs = 0;
let topLevelBytes = 0;
for (const entry of topLevelEntries) {
  if (entry.isDirectory()) {
    topLevelDirs += 1;
  } else if (entry.isFile()) {
    topLevelFiles += 1;
    topLevelBytes += statSync(join(snapshotDir, entry.name)).size;
  }
}

console.log('');
console.log(`Snapshot fertig: ${snapshotName}`);
console.log(`  Top-Level-Dateien: ${topLevelFiles}`);
console.log(`  Top-Level-Verzeichnisse: ${topLevelDirs}`);
console.log(`  Top-Level-Bytes: ${topLevelBytes.toLocaleString('de-DE')}`);
console.log(`  iCloud-Duplikat-Ordner entfernt: ${icloudCount}`);
console.log(`  .DS_Store-Dateien entfernt: ${dsStoreCount}`);
console.log('');
console.log('Bereit für FileZilla-Upload.');
