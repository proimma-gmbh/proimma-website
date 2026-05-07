# Beitrags-Konvention

Diese Konvention regelt die Versions-Verwaltung der proimma-Website. Sie ist verbindlich für alle Bauschritte ab Phase 5 Live-Gang-Vorbereitung.

## Conventional Commits

Jede Commit-Nachricht beginnt mit einem Typ in Kleinschreibung, optional gefolgt von einem Scope in runden Klammern, einem Doppelpunkt und einer kurzen Beschreibung in Imperativ.

Acht erlaubte Typen.

feat: Neue Funktion oder neues sichtbares Verhalten.
fix: Fehler-Behebung.
docs: Änderung an Dokumentation oder README.
style: Formatierungs-Änderung ohne Code-Wirkung (Whitespace, Komma, Einrückung).
refactor: Code-Umbau ohne neues Verhalten und ohne Fehler-Behebung.
perf: Performance-Verbesserung.
test: Test-Code hinzugefügt oder geändert.
chore: Wartungs-Arbeit ohne Code-Wirkung (Abhängigkeits-Update, Konfig-Datei, Initial-Setup).

Beispiele.

`feat(hero): editorial display headline`
`fix(footer): impressum link korrigiert`
`docs(readme): lighthouse-ci-hinweis ergänzt`
`chore(initial): kompletter Astro-Build-Stand v25 plus Pflege-Skripte`
`feat(ci): Lighthouse-CI mit Hard-Fail unter Score 0.95`

## Versions-Tags

Tags folgen Semantic Versioning im Schema vMAJOR.MINOR.PATCH. Der initiale Live-Gang-Tag der Phase 1 ist `v1.0.0`. Patch-Erhöhung bei rückwärtskompatiblen Fehler-Behebungen, Minor-Erhöhung bei rückwärtskompatiblen neuen Funktionen, Major-Erhöhung bei brechenden Änderungen.

## Pull-Request-Workflow

Direkt-Commits auf den main-Branch sind ausgeschlossen. Jede Änderung läuft über einen Pull-Request von dev nach main. Der Lighthouse-CI-Workflow prüft jeden Pull-Request automatisch gegen den Score 0.95 in allen vier Kategorien. Erst nach grünem Lighthouse-Lauf darf gemerged werden.

## Branch-Konvention

Der dev-Branch ist die Arbeits-Linie für laufende Bau-Schritte. Der main-Branch trägt ausschließlich Stände, die für den Live-Gang oder die Live-Vorschau auf relaunch.proimma.de bzw. später www.proimma.de freigegeben sind.
