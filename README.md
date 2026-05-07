# proimma-Website

Webseite der Proimma GmbH, Bremer Straße 12, 18057 Rostock. Hausverwaltung und Maklerei.

## Tech-Stack

Astro 4.16.18 mit Tailwind CSS 3.4.17 und Hanken Grotesk Variable. Self-hosted via @fontsource-variable/hanken-grotesk, kein Google-Fonts-Aufruf.

## Entwicklung

Einmalig nach dem Klonen die Abhängigkeiten installieren mit `npm install`. Den Entwicklungs-Server starten mit `npm run dev` unter http://localhost:4321. Den statischen Build erzeugen mit `npm run build` in den Ordner `dist/`. Nach jedem Build einmal `node scripts/local-preview-pathfix.mjs` ausführen, damit die Asset-Pfade tiefen-bewusst auf relative Pfade umgestellt sind und die Vorschau per file://-Doppelklick funktioniert.

## Lighthouse-CI

Pull-Requests von dev nach main werden automatisch gegen einen Lighthouse-Score von 0.95 in allen vier Kategorien (Performance, Accessibility, Best Practices, SEO) geprüft. Liegt einer der Werte unter 0.95, scheitert der Workflow und der Pull-Request kann nicht gemerged werden.

## Conventional Commits

Commit-Nachrichten folgen der Conventional-Commits-Konvention mit den Typen feat, fix, docs, style, refactor, perf, test und chore. Vollständige Konvention plus Beispiele in CONTRIBUTING.md.
