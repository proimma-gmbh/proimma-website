# DESIGN.md Webseiten-Relaunch Proimma GmbH Phase 1

Designsprache, Komponenten-Bibliothek, Animation-Logik, SEO-Architektur, DSGVO-Architektur, Performance-Budget, Accessibility-Spezifikation, Browser-Support, Versionierung.

Stand 28.04.2026. Verbindliche Spezifikation für den späteren Bau-Chat „Webseiten-Relaunch Proimma Phase 1". Grundlage für alle Bauentscheidungen, die nach Abschluss des Konzept-Pakets im Bau-Chat getroffen werden. Bei Widerspruch zwischen einer Detailaussage in diesem Dokument und einer Aussage aus den Memory-Kerndateien gilt die Memory; bei Widerspruch zwischen DESIGN.md und Bau-Auswahl-2026.md gilt Bau-Auswahl-2026.md, weil dort die Bauempfehlung der Vorschläge entschieden ist.

## 1. Designprinzipien Editorial Bold

Sechs Prinzipien tragen alle Detailentscheidungen. Sie sind aus den Designgrundsätzen vom 26.04.2026, dem Markenkern vom 27.04.2026 und der Premium-Inspirations-Recherche vom 28.04.2026 destilliert.

Erstens, Komposition vor Bildgewicht. Die Marke trägt sich über asymmetrische Layouts, XXL-Display-Typografie und Hairline-Sektionierung, nicht über Foto-Hero oder Markenrot-Akzente. Wer das Logo abdeckt, soll Editorial-Disziplin sehen, nicht Branchenkonvention. Diese Linie hebt sich messbar von den Stufe-0-Wettbewerbern (Engel & Völkers, von Poll, Sotheby's, McMakler, Homeday, Vonovia, Adler, GHV, MoWo, PELA, HIK, Bülow) ab und steht in der Tradition der Stufe-1-Premium-B2B-Vorbilder (PAISANA, Norgram, GKC Architecture, Saisei, dhk, Vita Architecture, Telha Clarke).

Zweitens, Substanz vor Behauptung. Vertrauen entsteht über Editorial-Datenpunkte mit Tabular Nums, sichtbar gemachte Mechanik, transparente Stamm-Daten und namentliche Verantwortung. Trustpilot-Sterne, Bestandszahlen-Werbung, Drittanbieter-Zertifikate als Hero-Element sind ausgeschlossen.

Drittens, Verzicht als Stilcode. Was Proimma bewusst nicht macht, gehört in den sichtbaren Auftritt (V14 Editorial-Verzichtsblock aus Bau-Auswahl-2026.md). Profil entsteht durch Reduktion, nicht durch Sortimentsbreite.

Viertens, Sachlichkeit vor Verkaufsrhetorik. Markenkern-Tonalität norddeutsch-direkt, persönlich, ohne Floskeln. Sie-Anrede, „mehr als zwanzig Jahre" als belegbare Erfahrungsangabe, „Proimma" mit kleinem i in jedem textlichen Element.

Fünftens, Performance ist Designqualität. Lighthouse 95 in allen vier Kategorien auf Mobile ist Bauauflage, nicht Komfort. Animationen ausschließlich nativ (CSS Scroll-driven Animations, Astro View Transitions), keine GSAP, keine Framer Motion, keine Three.js in Phase 1.

Sechstens, Wahrheitsregel ist Designauflage. Keine erfundenen Klientenzitate, keine Phantasie-Referenzen, keine Bestandszahlen, keine Selbstdarstellungen ohne Beleg. Inhaltlich auf Maklerei-Seite ausschließlich echte Google-Bewertungen mit Quellenangabe „Google-Bewertung", auf Hausverwaltungs-Seite ausschließlich belegbare Mechanik ohne fingierte Eigentümerstimmen.

## 2. Farbsystem

Sieben Werte als CSS Custom Properties im Astro-Layout-Head. Die Anwendungsregel ist strenger als die Werteliste; Verstöße gegen die Anwendungsregel entwerten das System.

| Token | HEX | Anwendung |
|---|---|---|
| color-bg-primary | #FAFAF8 | Primärer Hintergrund auf Body und Sektionen, gesamte Webseite außer Footer |
| color-bg-elevated | #FFFFFF | Sekundärer Hintergrund für hervorgehobene Editorial-Bänder, sehr sparsam |
| color-fg-primary | #1A1A1A | Body-Text, Display-Headlines auf hellem Grund, primäre Schriftfarbe |
| color-fg-secondary | #717171 | Sub-Texte, sekundäre Informationen, Editorial-Marginalien |
| color-line | #D9D9D9 | Hairline-Trenner zwischen Sektionen und in Editorial-Bändern |
| color-line-faint | #EBEBEB | Sehr dezente Hairlines auf engerem Grid, optional |
| color-accent | #34AEEB | Hellblau, sparsamer Akzent (Editorial-Strich, einzelner Datenpunkt-Highlight, Focus-State, Hover-Pfeil) |
| color-footer-bg | #242E4F | Dunkelblau, ausschließlich Footer-Hintergrund |
| color-footer-fg | #FAFAF8 | Off-White auf Footer-Hintergrund, primäre Footer-Schriftfarbe |

Anwendungsregel Hellblau (#34AEEB). Niemals als Body-Text-Farbe, weil Kontrast zu Off-White unter WCAG-AA-Minimum für Body. Niemals als Flächenfarbe größer als 20 Prozent einer Sektion. Erlaubt für Focus-Outline (3 Pixel), Hairline-Akzent (1 Pixel über 2 Spalten Breite), einzelner Editorial-Index, Hover-Pfeil-Verschiebung, Link-Underline. In Auszeichnungen ausschließlich auf Off-White-Grund, niemals auf Hellgrau.

Anwendungsregel Dunkelblau (#242E4F). Ausschließlich Footer-Hintergrund. Niemals als Sektions-Band auf der Hauptseite, niemals als Hero-Hintergrund, niemals als Akzentfläche im Body-Bereich. Diese Strenge ist Designgrundsatz aus den andre-preferences vom 26.04.2026 und nicht verhandelbar.

Anwendungsregel Hairline. Standard 1 Pixel #D9D9D9. Optional 1 Pixel #EBEBEB für engere Editorial-Indizes. In Magazin-Bändern Hairline horizontal über 100 Prozent Sektions-Breite, in Datenpunkt-Sektionen Hairline vertikal zwischen Spalten in halber Höhe.

Kontrast-Verifikation. Alle Schriftfarbe-Hintergrund-Kombinationen sind WCAG-2.2-AA-konform. #1A1A1A auf #FAFAF8 erreicht 16,3 zu 1 (AAA für Body). #717171 auf #FAFAF8 erreicht 4,7 zu 1 (AA für Body). #FAFAF8 auf #242E4F erreicht 13,0 zu 1 (AAA). Hellblau #34AEEB auf #FAFAF8 erreicht 2,5 zu 1 (unter AA für Body, deshalb Anwendungsregel-Beschränkung auf Akzente und Focus-Indikatoren mit Mindestgröße 3 Pixel).

## 3. Typografie-System

Schrift Hanken Grotesk Variable, kostenlos und Open-Source, self-hosted via @fontsource-variable/hanken-grotesk im Astro-Build mit font-display swap. Kein Google-Fonts-Aufruf, keine externen Schrift-CDN-Aufrufe, DSGVO-konform ohne Drittanbieter-Datentransfer.

Drei Schnitte aktiv: Light (300), Regular (400), Medium (500). Keine Italic in der Phase-1-Bibliothek, keine Bold (700), weil Bold die Editorial-Ruhe stört.

Type-Scale als CSS Custom Properties, Modular Scale 1.250 (Major Third) auf Desktop, 1.200 auf Mobile. Tabular Nums Pflicht für alle Datenpunkte, Preise (intern), Datumsangaben, Telefonnummern, Stamm-Daten.

| Token | Desktop | Mobile | Schnitt | Anwendung |
|---|---|---|---|---|
| display-xxl | 128 px | 56 px | Light 300 | Hero-Headline Startseite |
| display-xl | 96 px | 48 px | Light 300 | Hero-Headline Säulen-Seiten |
| display-l | 72 px | 40 px | Light 300 | Sektions-Eröffnung Magazin-Band |
| h1 | 56 px | 36 px | Light 300 | Seiten-H1 außerhalb Hero |
| h2 | 40 px | 30 px | Light 300 | Sektions-Überschrift |
| h3 | 28 px | 22 px | Regular 400 | Untersektion |
| h4 | 22 px | 19 px | Medium 500 | Datenpunkt-Label, Service-Punkt |
| body-l | 19 px | 18 px | Regular 400 | Editorial-Absätze Magazin-Band |
| body-m | 17 px | 17 px | Regular 400 | Standard-Body, Mindestgröße auf Mobile für WCAG |
| body-s | 15 px | 15 px | Regular 400 | Sub-Text, Marginalien |
| caption | 13 px | 13 px | Medium 500 | Editorial-Index 01, 02, 03, Tabular-Nums-Beschriftung |

Line-Height-Regel. Display-xxl bis display-l in 1.05 (sehr eng, Editorial-Setzung). H1 bis H3 in 1.15. Body-l und body-m in 1.55 (großzügig für Lesefluss). Body-s und caption in 1.45.

Letter-Spacing-Regel. Display-Schnitte (display-xxl, display-xl, display-l) mit -0.02em (leicht enger gesetzt für Editorial-Wirkung). H1 bis H3 mit -0.01em. Body-Schnitte mit 0. Caption mit 0.02em (leicht offener für tabular-nums-Klarheit).

Editorial-Index. Numerische Marken 01, 02, 03 als Magazin-Anker auf Sektions-Eröffnungen und in Datenpunkt-Sektionen. Schnitt Medium, caption-Größe (13 Pixel), Akzent-Hellblau, vertikal über der Headline gesetzt mit 1.5 rem Abstand zur Headline-Baseline.

## 4. Spacing- und Grid-System

Spacing-Tokens basierend auf 8-Pixel-Raster. Vertikale Sektions-Abstände sind großzügiger als horizontale Padding-Werte, weil Editorial-Whitespace zwischen Sektionen die wirksamste Premium-Mechanik ist (Stufe-3-Empfehlung Nr. 13).

| Token | Wert | Anwendung |
|---|---|---|
| space-2xs | 4 px | Inline-Mikro-Abstand zwischen Editorial-Index und Headline |
| space-xs | 8 px | Mikro-Abstand zwischen Datenpunkt und Klartext-Erläuterung |
| space-s | 16 px | Standard-Absatz-Abstand |
| space-m | 24 px | Sub-Sektions-Abstand |
| space-l | 48 px | Sektions-internes Block-Trennen |
| space-xl | 96 px | Sektions-Abstand auf Mobile |
| space-2xl | 144 px | Sektions-Abstand auf Tablet |
| space-3xl | 192 px | Sektions-Abstand auf Desktop |
| space-4xl | 240 px | Großzügige Sektions-Pause vor Footer |

Grid-System. CSS Grid mit asymmetrischen Spaltenkonfigurationen pro Sektion. Standard-Container max-width 1280 Pixel, Padding horizontal 24 Pixel auf Mobile, 48 Pixel auf Tablet, 96 Pixel auf Desktop. Asymmetrische Editorial-Raster nutzen 12-Spalten-Basis mit ungleichen Block-Verteilungen, etwa Headline auf Spalten 1 bis 8 und Editorial-Index auf Spalten 1 bis 2 mit Versatz, oder Magazin-Band mit Klartext auf Spalten 1 bis 7 und Datenpunkt auf Spalten 9 bis 12.

Mobile-First-Pflicht. Alle Layouts werden zuerst für 375 Pixel Viewport-Breite entworfen, dann für Tablet (768 Pixel) und Desktop (1280 Pixel) erweitert. Reduktion auf Mobile erfolgt durch Wegfall der Asymmetrie und Stapelung der Blöcke; Editorial-Indizes bleiben sichtbar.

## 5. Komponenten-Bibliothek mit States

Pro Komponente die Bau-Spezifikation und alle States. Default ist der Ruhezustand ohne Interaktion. Hover gilt nur auf Pointer-Geräten. Focus gilt für Tastatur-Navigation, Mindest-Outline 3 Pixel in Akzent-Hellblau, Outline-Offset 2 Pixel. Active gilt während Tap oder Click. Disabled für nicht aktivierbare Elemente. Loading für Asynchronität.

### 5.1 Header

Default. Wortmarke „Proimma" links in 24 Pixel Light, Topnavigation rechts mit fünf Punkten (Hausverwaltung, Maklerei, Themen-Hub, Über Proimma, Kontakt) in 17 Pixel Regular, Hairline 1 Pixel #D9D9D9 unten. Hintergrund #FAFAF8. Header-Höhe 80 Pixel auf Desktop, 64 Pixel auf Mobile.

Scrolled. Header-Höhe schrumpft auf 64 Pixel Desktop und 56 Pixel Mobile via Astro View Transitions. Wortmarke verkleinert sich auf 20 Pixel Light. Hairline wird sichtbar. Übergang 0.3 Sekunden ease-out.

Open Menu (Mobile). Hamburger-Icon links, beim Antippen öffnet sich Vollbild-Overlay auf #FAFAF8 mit fünf Navigationspunkten in display-l Größe (40 Pixel auf Mobile), Light. Schließen-Icon oben rechts. Tab-Reihenfolge: Schließen-Icon, dann fünf Navigationspunkte in Reihenfolge.

Hover (Desktop). Hairline 1 Pixel #34AEEB unter dem aktiven Navigationspunkt, plus Pfeil-Verschiebung um 2 Pixel nach rechts. Übergang 0.2 Sekunden ease-out.

Focus. Outline 3 Pixel #34AEEB mit Outline-Offset 2 Pixel, sichtbar bei Tab-Navigation. Body-Skip-Link „Zum Hauptinhalt springen" sichtbar bei Tab-Fokus an erster Position.

### 5.2 Buttons

Drei Button-Klassen. Primär für Hauptaktion (Termin buchen). Sekundär für alternative Aktion (E-Mail schreiben). Tertiär als reiner Textlink mit Pfeil.

Primär Default. Hintergrund #34AEEB, Schrift #1A1A1A, 17 Pixel Medium, Padding 16 Pixel vertikal und 32 Pixel horizontal, kein Border-Radius (Editorial-Strenge), keine Schatten.

Primär Hover. Hintergrund unverändert, Pfeil-Symbol rechts verschiebt sich um 4 Pixel nach rechts, Übergang 0.2 Sekunden.

Primär Focus. Outline 3 Pixel #1A1A1A mit Outline-Offset 2 Pixel.

Primär Active. Hintergrund leicht abgedunkelt auf #2D9CD3, kein Translate-Effekt.

Primär Disabled. Hintergrund #D9D9D9, Schrift #717171, kein Pfeil, keine Hover-Reaktion, cursor: not-allowed.

Primär Loading. Hintergrund #34AEEB unverändert, Pfeil ersetzt durch Inline-SVG-Spinner, 16 Pixel, in #1A1A1A, rotierend mit prefers-reduced-motion-Fallback (statisches Indikator-Quadrat).

Sekundär Default. Hintergrund transparent, Schrift #242E4F, Border 1 Pixel #242E4F, Padding wie Primär.

Sekundär Hover. Border verdickt sich auf 2 Pixel, kein Padding-Sprung durch box-sizing border-box.

Sekundär Focus. Outline 3 Pixel #34AEEB, Outline-Offset 2 Pixel.

Sekundär Disabled. Border #D9D9D9, Schrift #D9D9D9.

Tertiär Default. Reiner Textlink, Schrift #34AEEB, Underline 1 Pixel #34AEEB, Pfeil-Symbol rechts.

Tertiär Hover. Underline verdickt sich auf 2 Pixel, Pfeil verschiebt sich um 2 Pixel nach rechts.

Tertiär Focus. Outline 3 Pixel #34AEEB, Outline-Offset 2 Pixel.

### 5.3 Form-Inputs

Default. Hintergrund #FAFAF8, Border 1 Pixel #D9D9D9 unten (kein umschließender Border, Editorial-Linie), Schrift #1A1A1A, 17 Pixel Regular, Padding 16 Pixel vertikal und 0 Pixel horizontal (linksbündig zur Spalte).

Focus. Border-Bottom verdickt sich auf 2 Pixel #34AEEB, Outline 3 Pixel #34AEEB mit Outline-Offset 2 Pixel auf gesamten Input-Container.

Filled. Border-Bottom #1A1A1A, Schrift #1A1A1A.

Error. Border-Bottom 2 Pixel #C73E3E, Fehlermeldung darunter in 13 Pixel Medium #C73E3E mit aria-describedby-Verknüpfung.

Disabled. Hintergrund unverändert, Schrift #717171, Border-Bottom #EBEBEB, cursor: not-allowed.

Label. Schrift #717171, 13 Pixel Medium, oberhalb des Input-Feldes mit 4 Pixel Abstand. Pflichtfeld-Markierung: Asterisk in #C73E3E nach dem Label-Text.

Validation-Logik. Pflichtfeld-Prüfung clientseitig nach Blur-Event. E-Mail-Validierung gegen RFC-5321-Pattern. Fehlermeldungen sachlich, ohne Floskeln. Beispiele in Microcopy-Sektion (siehe 7).

### 5.4 Editorial-Index

Numerische Marke 01, 02, 03. Schrift Medium, 13 Pixel, Akzent-Hellblau #34AEEB, oberhalb der Headline mit space-m (24 Pixel) Abstand zur Headline-Baseline. Optional begleitet von einem Editorial-Strich 1 Pixel #34AEEB über 64 Pixel Breite, links neben der Marke.

### 5.5 Datenpunkt mit Tabular Nums

Default. Datenwert in display-l (72 Pixel Desktop, 40 Pixel Mobile), Light, font-feature-settings: „tnum" Pflicht. Daten-Label darunter in caption (13 Pixel Medium #717171). Klartext-Erläuterung darunter in body-m (17 Pixel Regular). Hairline 1 Pixel #D9D9D9 oberhalb des Daten-Werts, Breite 64 Pixel.

Hover. Hairline verlängert sich auf 96 Pixel und wechselt Farbe auf #34AEEB, Übergang 0.3 Sekunden.

Beispiel-Belegung mit den Pflicht-Vertrauenselementen aus dem Auftrag. Datenpunkt eins, „48 Stunden" mit Label „Antwortzeit werktags" und Klartext „Auf Eigentümer-Anfragen werktags innerhalb von 48 Stunden, verbindlich." Datenpunkt zwei, „24/7" mit Label „Notfall-Erreichbarkeit Mieter" und Klartext „Eine separate Notfall-Nummer für Mieter, unabhängig von Bürozeiten." Datenpunkt drei, „mehr als 20" mit Label „Jahre Branchenerfahrung" und Klartext „Stationen als Immobilienkaufmann, Asset Manager dänischer Fonds, Mitaufbau einer Hausverwaltung, Tätigkeit als Hausverwalter und Bewirtschafter."

### 5.6 Magazin-Band

Sektions-Komponente für V4 Mietenverwaltung und V6 Maklerei. Aufbau. Editorial-Index links oben (01, 02). Sektions-Headline in display-l. Klartext-Absatz in body-l auf Spalten 1 bis 7. Vier Service-Punkte rechts auf Spalten 9 bis 12, je mit Hairline-Trenner 1 Pixel #D9D9D9 oberhalb des Punkts, Service-Punkt-Headline in h4 (Medium 22 Pixel), Klartext in body-m. Optional Tabular-Nums-Datenpunkt rechts neben jedem Service-Punkt.

Reveal. Beim Scroll-In Opacity 0 zu 1, Translate-Y 1.5 rem zu 0, Übergang 0.6 Sekunden ease-out, mit prefers-reduced-motion-Fallback (kein Translate, nur Opacity).

### 5.7 Cal.com-Embed

Container mit max-width 800 Pixel, zentriert. Editorial-Headline darüber in h2 „Erstgespräch vereinbaren". Drei Datenpunkte darüber in einer Zeile (Dauer 30 Minuten, kostenfrei, Online via Zoom oder vor Ort in Rostock). Hairline 1 Pixel #D9D9D9 zwischen Datenpunkten und Cal.com-iFrame.

Loading-State. Während iFrame lädt: Editorial-Setzung mit Klartext „Termin-Anzeige wird geladen." in body-s #717171, kein animierter Spinner, weil Cal.com iFrame eigenen Loading-State liefert. Lazy-Load-Pflicht: iFrame wird erst geladen, wenn Container in Viewport sichtbar (Intersection Observer mit threshold 0.1).

Fallback. Unterhalb des iFrames in body-s ein Klartext-Hinweis: „Wenn die Termin-Anzeige nicht lädt, schreiben Sie uns an info@proimma.de oder rufen Sie unter 0173-6335917 an."

### 5.8 Hairline-Trenner

Standard 1 Pixel #D9D9D9, Breite 100 Prozent der Container-Breite, vertikaler Abstand space-l (48 Pixel) oberhalb und unterhalb. Akzent-Variante 1 Pixel #34AEEB, Breite 64 oder 96 Pixel, links- oder mittenausgerichtet, ausschließlich für Editorial-Setzungen (vor Hero-Headline, vor Sektions-Eröffnung).

### 5.9 Footer

Default. Hintergrund #242E4F, Schrift #FAFAF8, Padding vertikal space-3xl (192 Pixel Desktop, 96 Pixel Mobile), horizontal wie Container-Padding. Drei Spalten auf Desktop (Kontakt, Service, Rechtliches), gestapelt auf Mobile.

Spalte Kontakt. Wortmarke „Proimma" als Print-Echo in display-l (72 Pixel Light), darunter Adresse Bremer Straße 12, 18057 Rostock, Telefon 0173-6335917, info@proimma.de, jeweils in body-m. Cal.com-Termin-Link als Tertiär-Button-Variante in #FAFAF8 mit Underline.

Spalte Service. Verlinkungen Hausverwaltung, Maklerei, Über Proimma, Themen-Hub. Schrift body-m, Underline #FAFAF8 1 Pixel.

Spalte Rechtliches. Pflichtangaben in caption-Größe (13 Pixel Medium): „Erlaubnis nach § 34c Abs. 1 Satz 1 Nr. 1 und Nr. 4 GewO, Bescheid der Hansestadt Rostock vom 31.03.2026, Aktenzeichen gew-1270-2024-AD3231." Plus „Vermögensschadenhaftpflicht-Versicherung gemäß § 15 ImmVV." Plus Verlinkungen Impressum, Datenschutzerklärung, AGB Hausverwaltung, EU-Online-Streitbeilegung.

Hover auf Footer-Links. Underline verdickt sich auf 2 Pixel, Übergang 0.2 Sekunden.

Focus auf Footer-Links. Outline 3 Pixel #34AEEB, Outline-Offset 2 Pixel.

### 5.10 Edge-Case-Komponenten

404-Seite. Editorial-Hero mit Display-Headline „Diese Seite gibt es nicht.", Subline „Vermutlich ein Tippfehler oder eine veraltete Verlinkung.", darunter Tertiär-Button „Zur Startseite". Hintergrund #FAFAF8, kein Foto, kein Spektakel.

500-Seite. Editorial-Hero mit Display-Headline „Etwas hat nicht funktioniert.", Subline „Wir kümmern uns darum. Bitte versuchen Sie es in einigen Minuten erneut oder schreiben Sie an info@proimma.de.", darunter Tertiär-Button „Zur Startseite".

Maintenance-Mode. Editorial-Hero mit Display-Headline „Die Webseite ist kurz offline.", Subline „Wir aktualisieren Inhalte. Erreichbar sind wir unter 0173-6335917 und info@proimma.de." Kein Bauarbeiter-Klischee.

Loading-State Sektions-intern. Skeleton-Setzung in #EBEBEB, kein animierter Spinner, statt dessen Klartext-Hinweis „Inhalte werden geladen." in body-s #717171.

Empty-State Themen-Hub. Wenn ein Themen-Hub-Filter keine Treffer liefert (nicht in Phase 1 nötig, da nur vier Erstartikel): Editorial-Setzung mit Klartext „Zu diesem Filter ist aktuell kein Beitrag im Themen-Hub. Andere Beiträge unter [Verlinkung]."

### 5.11 Breadcrumb-Komponente

Anwendung. Auf den vier Themen-Hub-Artikel-Sub-Seiten und auf der Themen-Hub-Übersichtsseite. Pfad-Beispiel „Startseite, Themen-Hub, Wechsel der Hausverwaltung". Auf den anderen Hauptseiten (Startseite, Hausverwaltung, Maklerei, Über Proimma, Kontakt, Impressum, Datenschutz) keine Breadcrumb, weil flache Hierarchie.

Default. Editorial-Setzung in caption (13 Pixel Medium), Schrift #717171, Trennzeichen ein Mittelpunkt mit space-xs Abstand vor und nach dem Trennzeichen. Letzter Pfad-Eintrag (aktuelle Seite) in #1A1A1A, ohne Verlinkung. Übrige Einträge als Links in #717171 mit Underline #D9D9D9, Underline-Offset 2 Pixel.

Hover. Schrift wechselt auf #1A1A1A, Underline-Farbe wechselt auf #34AEEB, Übergang 0.2 Sekunden.

Focus. Outline 3 Pixel #34AEEB, Outline-Offset 2 Pixel.

Schema-Pflicht. Pro Breadcrumb wird das BreadcrumbList-Schema (siehe Sektion 8) als JSON-LD im Head der Seite ausgegeben.

### 5.12 Editorial-Karte für Themen-Hub-Übersicht

Anwendung. Listing der vier Erstartikel auf der Themen-Hub-Übersichtsseite. Bewusst keine klassische Karten-Optik mit weichen Schatten (Anti-Pattern aus den andre-preferences), sondern Editorial-Listing mit Hairline-Trenner zwischen den Einträgen.

Default. Pro Eintrag eine horizontale Editorial-Zeile auf 12-Spalten-Grid. Editorial-Index links auf Spalten 1 bis 1 (caption 13 Pixel Medium #34AEEB). Artikel-Titel auf Spalten 2 bis 8 (h3 28 Pixel Regular #1A1A1A). Lese-Dauer und Datum auf Spalten 10 bis 12 in caption #717171 mit Tabular Nums. Klartext-Anriss in body-m unter Titel auf Spalten 2 bis 8, zwei Zeilen mit Ellipsis nach 160 Zeichen. Hairline 1 Pixel #D9D9D9 unterhalb des Eintrags.

Hover. Hairline wechselt von #D9D9D9 auf #34AEEB, Editorial-Index verschiebt sich um 4 Pixel nach rechts, Titel-Schrift wechselt von #1A1A1A auf #34AEEB-Akzent. Übergang 0.3 Sekunden ease-out.

Focus. Outline 3 Pixel #34AEEB, Outline-Offset 4 Pixel auf gesamten Editorial-Eintrag.

Mobile-Reduktion. Stapelung der Spalten zu vertikaler Reihenfolge: Editorial-Index, Artikel-Titel, Klartext-Anriss, Lese-Dauer und Datum als Caption-Zeile am Schluss.

### 5.13 Bild-Komponente

Anwendung. Alle Bilder auf der Webseite (Portrait, Stadtmotive, Atmosphäre, OG-Bilder). Astro Assets nativ über die <Image>-Komponente, kein separates Plugin nötig in Astro 4.

Default. Container mit aspect-ratio CSS-Property fest gesetzt (zum Beispiel aspect-ratio: 4/5 für Portraits, 16/9 für Landscapes), Hintergrund #EBEBEB als Skeleton-Fläche während Lazy-Load. Bild als AVIF mit WebP-Fallback und JPEG-Last-Resort, Responsive-Srcset für Mobile, Tablet und Desktop.

Lazy-Loading. Loading-Attribut „lazy" für alle Bilder unterhalb der Fold. Hero-Bild und Above-the-Fold-Bilder mit loading=„eager" und fetchpriority=„high".

Loaded. Bild fadet mit 0.4 Sekunden Opacity-Übergang ein, kein Translate, weil die aspect-ratio den Container schon vorher reserviert hat (CLS-Schutz).

Error. Bei nicht-ladbarem Bild Fallback auf eine SVG-Editorial-Setzung mit Initialen oder einer Hairline-Box mit Klartext „Bild nicht verfügbar" in caption #717171, ohne Broken-Image-Symbol.

Alt-Text-Pflicht. Jeder Bild-Aufruf in Astro-Komponente verlangt das alt-Attribut explizit. Bauchef-Disziplin im Bau-Chat: kein Default-Wert „" (leer), sondern Klartext-Beschreibung. Beispiel-Alt-Texte siehe Bilder-Briefs Teil 4.

### 5.14 Newsletter-Anmelde-Formular

Anwendung. Phase-1-Vorbereitung als Footer-Element, in Phase 2 aktiviert mit Brevo-API-Anbindung. In Phase 1 ohne Backend-Anbindung, optisch sichtbar mit Klartext-Hinweis „Newsletter-Anmeldung folgt".

Default. Editorial-Headline in h4 (Medium 22 Pixel) „Updates zum Themen-Hub erhalten". Klartext-Begleitsatz in body-s #717171 „Wir senden gelegentlich Hinweise auf neue Beiträge. Keine Werbung, keine Drittweitergabe." Input-Feld nach Form-Input-Konvention, Label „Ihre E-Mail-Adresse", Primär-Button „Anmelden". Hinweis darunter in caption „Mit der Anmeldung stimmen Sie der Verarbeitung Ihrer E-Mail-Adresse durch Brevo (Sitz Berlin und Paris, EU-Hosting) gemäß Datenschutzerklärung zu."

Phase-1-State (vor Brevo-Aktivierung). Input-Feld als Disabled-State, Button als Disabled-State, Klartext-Hinweis ersetzt durch „Newsletter-Anmeldung folgt nach Aktivierung."

Submitted (nach Phase-2-Aktivierung). Input-Feld leert sich, Erfolgsmeldung in ARIA-Live-Region: „Bitte bestätigen Sie die Anmeldung über den Link in der gerade gesendeten E-Mail." Double-Opt-In über Brevo automatisch.

Error. Bei E-Mail-Validierungs-Fehler oder Server-Fehler Inline-Fehlermeldung gemäß Form-Error-Konvention.

### 5.15 Mobile-Hamburger-Menu mit Modal-Accessibility

Erweiterung der Header-Spezifikation aus Sektion 5.1, weil Modal-Accessibility ein eigener Disziplin-Bereich ist.

Open-State Implementation. Beim Öffnen wird das Vollbild-Overlay-Element mit role=„dialog", aria-modal=„true" und aria-labelledby=„hamburger-menu-headline" markiert. Der Body-Scroll wird durch overflow:hidden auf html und body verhindert. Der gesamte restliche Seiteninhalt unter dem Overlay erhält das inert-Attribut, sodass Screen-Reader und Tastatur-Navigation den Hintergrund nicht erreichen können.

Focus-Trap. Beim Öffnen wandert der Fokus automatisch auf das Schließen-Icon (erstes interaktives Element im Overlay). Tab-Navigation wandert in Reihenfolge Schließen-Icon, dann fünf Navigationspunkte, dann zurück zum Schließen-Icon (Trap durch JavaScript-Listener auf Tab und Shift-Tab).

Schließen-Verhalten. Schließen-Icon-Tap, Escape-Taste oder Tap auf einen Navigationspunkt schließen das Overlay. Beim Schließen wandert der Fokus zurück auf den Hamburger-Trigger-Button.

Reduced-Motion. Bei prefers-reduced-motion: reduce öffnet das Overlay ohne Slide-Animation, direkt sichtbar.

## 6. Animation-Sprache

Grundregel. Animationen sind Detail, nicht Effekt. Sie tragen Premium-Empfinden, nicht Aufmerksamkeit. Im Vergleich zur Schwestermarke Immobilien Ratgeber ruhiger, weil norddeutsch-sachliche Tonalität und höheres Vertrauensgewicht. Keine Parallax-Effekte, keine Sprung-Animationen, keine schweren JavaScript-Bibliotheken.

Reveal-Choreographie. Beim Eintritt einer Sektion in den Viewport: Opacity von 0 auf 1, Translate-Y von 1.5 rem auf 0, Filter blur(2px) auf blur(0). Dauer 0.6 Sekunden, Timing-Function ease-out, kein Stagger zwischen Elementen einer Sektion (Editorial-Ruhe). Implementiert via CSS Scroll-driven Animations mit @keyframes und animation-timeline: view(). Browser-Fallback für Safari (Polyfill nicht nötig, weil reines fade-in ohne Translate auch ohne Scroll-driven Animations greift via Intersection Observer als Mini-JS).

prefers-reduced-motion-Pflicht. CSS-Regel @media (prefers-reduced-motion: reduce) reduziert alle Animationen auf Opacity-Übergang ohne Translate, ohne Blur, mit Dauer 0.01s (technisch keine Animation, sondern direkter Wechsel).

Hover-Choreographie. Kontrollierte Mikro-Bewegung. Hairline-Drüber bei Navigation und Tertiär-Buttons (Underline-Wechsel von 1 Pixel auf 2 Pixel oder Farbe von #D9D9D9 auf #34AEEB). Pfeil-Verschiebung um 2 Pixel nach rechts bei Tertiär-Buttons und Datenpunkt-Hover. Niemals Skalierung, niemals Schatten-Animation, niemals Farbinversion.

View Transitions Astro-nativ. Auf Layout-Ebene aktiviert via <ViewTransitions /> in src/layouts/Layout.astro. Shared-element-Transitions für Wortmarke „Proimma" zwischen Hero und Header (Sektion 5.1 Scrolled-State). Page-Transitions zwischen Hauptseiten als fade-Übergang 0.3 Sekunden. Astro-Route-Announcer für Screen-Reader nativ aktiv ab Astro 3.2.0.

Lighthouse-Auflage. Cumulative Layout Shift unter 0.1 erreichen: alle Bild-Container mit aspect-ratio CSS-Property fest gesetzt, alle Reveal-Choreographien ausschließlich auf transform und opacity (GPU-beschleunigt, off-main-thread). Keine Animation auf width, height, top, left, margin, padding, weil diese Layout-Recalc auslösen.

Abgrenzung zur Schwestermarke Immobilien Ratgeber. Der Auftrag fordert ausdrücklich „ruhiger als bei Immobilien Ratgeber, weil Tonalität norddeutsch-sachlich". Konkrete Werte. Reveal-Dauer 0.6 Sekunden statt typischer 0.3 bis 0.4 Sekunden im Web-Standard, also bewusst gedehnt. Stagger zwischen Elementen einer Sektion gleich null, also keine Kettenreaktion, sondern simultane Setzung der Sektion. Hover-Verschiebung maximal 2 Pixel statt typischer 4 bis 8 Pixel. Reveal nur einmal pro Element pro Session, kein Loop, kein Re-Trigger beim Zurückscrollen. Keine Skalierung (transform: scale), keine Rotation, keine Schatten-Animation, keine Color-Shift-Animation. Cursor-Cursor-Effekte ausgeschlossen. Diese Disziplin trägt die Marken-Tonalität in der Bewegung selbst.

CSS-Snippet Reveal-Choreographie als Bau-Vorlage.

```css
@keyframes reveal-up {
  from {
    opacity: 0;
    transform: translateY(1.5rem);
    filter: blur(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.reveal {
  animation: reveal-up 0.6s ease-out forwards;
  animation-timeline: view();
  animation-range: entry 0% entry 50%;
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    animation: none;
    opacity: 1;
    transform: none;
    filter: none;
  }
}
```

CSS-Snippet View Transitions Astro-nativ. In src/layouts/Layout.astro im Head einfügen:

```astro
---
import { ViewTransitions } from 'astro:transitions';
---
<head>
  <ViewTransitions />
</head>
```

Page-Transition-Override per CSS für 0.3-Sekunden-Fade:

```css
::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 0.3s;
  animation-timing-function: ease-out;
}
```

## 7. Microcopy in der Markenstimme

Vorgaben. Sie-Anrede ohne Ausnahme. Sachlich, norddeutsch-direkt, persönlich. Keine Verkaufsrhetorik. Keine Floskeln aus der Verbots-Liste in andre-preferences.md. „Proimma" mit kleinem i. „mehr als zwanzig Jahre" exakt so. Konkrete Aussagen statt Adjektiv-Aneinanderreihung.

Buttons. Primär „Erstgespräch vereinbaren" auf Kontakt-Sektion. „Termin buchen" auf den Säulen-Seiten. Sekundär „E-Mail schreiben" verlinkt mailto:info@proimma.de mit vorausgefülltem Betreff. Tertiär „Mehr zur Mietenverwaltung" oder „Mehr zur Maklerei" je nach Sektion.

Form-Labels. „Ihr Name", „Ihre E-Mail-Adresse", „Ihr Anliegen". Pflichtfeld-Hinweis als caption unterhalb des Formulars: „Pflichtfelder sind mit einem Stern markiert."

Form-Errors. Pflichtfeld-leer „Bitte tragen Sie Ihren Namen ein." E-Mail-ungültig „Diese E-Mail-Adresse hat ein ungewöhnliches Format. Bitte prüfen Sie sie." Server-Fehler „Die Anfrage konnte nicht abgeschickt werden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an info@proimma.de."

Form-Success. „Ihre Anfrage ist eingegangen. Wir antworten werktags innerhalb von 48 Stunden."

Cookie-Banner. Hauptzeile „Diese Webseite verwendet ein cookieloses Analytics-Tool (Plausible) und keine Drittanbieter-Tracker. Details in der Datenschutzerklärung." Buttons „Verstanden" und „Datenschutz öffnen". Kein „Alle akzeptieren" mit voreingestellten Häkchen, weil keine Tracking-Cookies gesetzt werden.

Loading-Microcopy. „Termin-Anzeige wird geladen." statt „Lädt." oder „Bitte warten." Keine animierten Punkte „...".

Empty-States. „Zu diesem Filter ist aktuell kein Beitrag im Themen-Hub." statt „Keine Ergebnisse" oder „Sorry, nichts gefunden."

404. „Diese Seite gibt es nicht." statt „Seite nicht gefunden" oder „Oops". Subline „Vermutlich ein Tippfehler oder eine veraltete Verlinkung." Tertiär-Button „Zur Startseite".

500. „Etwas hat nicht funktioniert." Subline „Wir kümmern uns darum. Bitte versuchen Sie es in einigen Minuten erneut oder schreiben Sie an info@proimma.de."

Newsletter-Anmelde-Formular (Phase 2). „Updates zum Themen-Hub erhalten" als Headline, „Wir senden gelegentlich Hinweise auf neue Beiträge. Keine Werbung, keine Drittweitergabe." als Klartext-Begleitsatz, „Ihre E-Mail-Adresse" als Label, „Anmelden" als Primär-Button, Double-Opt-In-Hinweis nach Anmeldung „Bitte bestätigen Sie die Anmeldung über den Link in der gerade gesendeten E-Mail."

Skip-Link. „Zum Hauptinhalt springen" als erster Tab-Stop.

Footer-Microcopy. Erreichbarkeits-Zeile „Werktags 9 bis 17 Uhr unter 0173-6335917 erreichbar. Notfall-Erreichbarkeit für Mieter rund um die Uhr über die separate Notfall-Nummer im Mietvertrag." Diese Formulierung erfüllt die externe Kommunikationsregel ohne das interne 48-Stunden-Versprechen extern auszuspielen, gemäß Texter-Briefing 27.04.2026.

Title-Tag und Meta-Description-Beispiele für die sieben Hauptseiten. Schema „[Seitenfokus]. Proimma GmbH Rostock" mit Punkt-Trenner statt Pipe, Title-Maximallänge 60 Zeichen, Meta-Description 150 bis 160 Zeichen.

Startseite. Title „Hausverwaltung und Maklerei in Rostock. Proimma GmbH". Description „Mietenverwaltung und Vermarktung von Wohnimmobilien für Eigentümer in Rostock und Umgebung. Inhabergeführt, fokussiert. Erstgespräch online vereinbaren."

Hausverwaltung. Title „Mietenverwaltung Mehrfamilienhäuser. Proimma GmbH Rostock". Description „Mietenverwaltung für private Eigentümer von Mehrfamilienhäusern in Rostock und Umgebung. Inhabergeführt, mit klarer Mechanik der Bestandsübernahme."

Maklerei. Title „Wohnimmobilien verkaufen in Rostock. Proimma GmbH". Description „Vermarktung von Einfamilienhäusern, Eigentumswohnungen, Mehrfamilienhäusern und Grundstücken für Eigentümer in Rostock und Umgebung. Provision nach § 656c BGB."

Themen-Hub. Title „Wissen für Eigentümer. Proimma GmbH Rostock". Description „Fachartikel zu Hausverwaltungs-Wechsel, Bestandsübergabe, Maklerprovision und Verkauf einer Wohnimmobilie in Rostock. Belegbares Branchenwissen für Eigentümer."

Themen-Hub-Artikel-Beispiel (Wechsel der Hausverwaltung). Title „Hausverwaltung wechseln. Proimma GmbH Rostock". Description „Worauf Eigentümer beim Wechsel der Hausverwaltung achten sollten. Sieben Schritte für eine saubere Bestandsübergabe in Rostock und Umgebung."

Über Proimma. Title „André Dieckmann, Inhaber. Proimma GmbH Rostock". Description „Mehr als zwanzig Jahre Branchenerfahrung in der Immobilienwirtschaft. Stationen als Immobilienkaufmann, Asset Manager dänischer Fonds, Hausverwalter und Bewirtschafter."

Kontakt. Title „Erstgespräch vereinbaren. Proimma GmbH Rostock". Description „Termin online über Cal.com vereinbaren oder Anfrage an info@proimma.de senden. Werktags 9 bis 17 Uhr unter 0173-6335917 erreichbar."

Pflicht-Disziplin im Bau. Pro Seite ein eigener Title-Tag und eigene Meta-Description, niemals seitenübergreifend identisch (Google-Penalty-Risiko). Frontmatter pro Astro-Seiten-Datei mit title- und description-Feld, Layout liest die Werte und setzt sie im <head> ein.

## 8. SEO-Architektur

Meta-Tag-Strategie pro Seite. Title-Tag-Schema „[Seitenfokus] Proimma GmbH Rostock" mit maximaler Länge 60 Zeichen, ohne Pipe-Trenner, ohne Wiederholung von „Hausverwaltung" auf jeder Seite (Penalty-Risiko). Meta-Description in 150 bis 160 Zeichen, mit primärem Keyword und sachlicher Aussage, ohne „klicken Sie hier" oder „erfahren Sie mehr". Open-Graph-Tags pro Seite (og:title, og:description, og:image, og:url, og:type=website oder article), Twitter-Card als summary_large_image. Pro Seite ein eigenes 1200-mal-630-Pixel-Open-Graph-Bild im Editorial-Bold-Stil, statisch generiert im Astro-Build.

URL-Struktur. Sprechende URLs ohne Trailing-Slash. proimma.de/hausverwaltung, proimma.de/maklerei, proimma.de/themen-hub, proimma.de/themen-hub/wechsel-hausverwaltung, proimma.de/themen-hub/bestandsuebergabe, proimma.de/themen-hub/maklerprovision, proimma.de/themen-hub/verkauf-wohnimmobilie, proimma.de/ueber-proimma, proimma.de/kontakt, proimma.de/impressum, proimma.de/datenschutz. Canonical-Tag auf jeder Seite, selbst-referenzierend, ohne Tracking-Parameter.

Schema.org JSON-LD. Drei Schema-Typen pro Site, plus zwei Service-Schemas und ein Person-Schema.

LocalBusiness-Schema im Site-Root. Name „Proimma GmbH". Address StreetAddress „Bremer Straße 12", PostalCode „18057", AddressLocality „Rostock", AddressCountry „DE". Telephone „+49-173-6335917". Email „info@proimma.de". URL „https://www.proimma.de". OpeningHours „Mo-Fr 09:00-17:00". GeoCoordinates Latitude und Longitude für Bremer Straße 12 (vor Go-Live über Geocoding-Service prüfen). PriceRange entfällt (externe Kommunikationsregel: keine Preise sichtbar). FoundingDate „2024-08-21" (Eintragung HRB 16077). Founder als verschachteltes Person-Schema.

RealEstateAgent-Schema als Subtyp von LocalBusiness. AreaServed mit zwei Place-Einträgen: erstens „Rostock" als City, zweitens GeoShape mit GeoRadius 100 Kilometer um Rostock-Zentrum (für die Markenvorgabe „Schwerpunkt im Umkreis von etwa 100 Kilometern"). Knows About: „Mietenverwaltung", „Mehrfamilienhaus-Verwaltung", „Wohnimmobilien-Vermarktung", „§ 34c GewO", „§ 656c BGB". HasOfferCatalog mit zwei Service-Schemas (Mietenverwaltung, Maklerei).

Service-Schema Mietenverwaltung. ServiceType „Property Management". Provider verweist auf das LocalBusiness-Schema. AreaServed wie RealEstateAgent. Description „Mietenverwaltung für Mehrfamilienhäuser und Wohn- und Geschäftshäuser für private Eigentümer in Rostock und Umgebung." Offers entfällt, weil keine Preise sichtbar.

Service-Schema Maklerei. ServiceType „Real Estate Sales". Description „Vermarktung von Wohnimmobilien (Einfamilienhäuser, Doppel- und Reihenhäuser, Eigentumswohnungen, Mehrfamilienhäuser, Grundstücke) im Auftrag von Eigentümern." Provider, AreaServed wie oben. Termsofservice verweist auf § 656c BGB.

Person-Schema André Dieckmann. Name „André Dieckmann". JobTitle „Inhaber und Geschäftsführer". WorksFor verweist auf LocalBusiness. Image-URL des Über-Proimma-Portraits. SameAs mit LinkedIn-URL (sobald freigegeben).

Article-Schema für jeden Themen-Hub-Artikel. Headline, Author Person-Schema (André), DatePublished, DateModified, Image. Mainentity verweist auf den Artikel-Inhalt.

BreadcrumbList-Schema für die Themen-Hub-Übersicht und für jeden Themen-Hub-Artikel. ItemListElement mit Position, Item (URL und Name) für jede Pfad-Stufe. Beispiel-Skelett für „Startseite, Themen-Hub, Wechsel der Hausverwaltung":

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Startseite", "item": "https://www.proimma.de/"},
    {"@type": "ListItem", "position": 2, "name": "Themen-Hub", "item": "https://www.proimma.de/themen-hub"},
    {"@type": "ListItem", "position": 3, "name": "Hausverwaltung wechseln", "item": "https://www.proimma.de/themen-hub/wechsel-hausverwaltung"}
  ]
}
```

JSON-LD-Beispiel-Skelett für das LocalBusiness-Schema im Site-Root als Bau-Vorlage:

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RealEstateAgent"],
  "name": "Proimma GmbH",
  "url": "https://www.proimma.de",
  "telephone": "+49-173-6335917",
  "email": "info@proimma.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Bremer Straße 12",
    "addressLocality": "Rostock",
    "postalCode": "18057",
    "addressCountry": "DE"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "17:00"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {"@type": "GeoCoordinates", "latitude": "54.0887", "longitude": "12.1469"},
    "geoRadius": "100000"
  },
  "founder": {"@type": "Person", "name": "André Dieckmann", "jobTitle": "Inhaber und Geschäftsführer"},
  "foundingDate": "2024-08-21"
}
```

Geo-Koordinaten Rostock-Zentrum sind als Näherungswerte gesetzt; vor Go-Live über Geocoding-Service auf die exakte Position der Bremer Straße 12 prüfen und korrigieren.

OG-Image-Generierung. Statische SVG-Templates pro Seite im Editorial-Bold-Stil mit Headline und Editorial-Index, gerendert zu PNG 1200 mal 630 Pixel als Astro-Build-Schritt. Alternative dynamische Generierung über @vercel/og oder Astro-Satori-Integration; Empfehlung statische SVG-Templates, weil Wartungsfreiheit Vorrang hat und der Themen-Hub mit aktuell nur vier Erstartikeln plus Übersicht plus fünf Hauptseiten überschaubar bleibt. Pro Seite ein OG-Bild in /public/og-images/ mit sprechendem Dateinamen (og-startseite.png, og-hausverwaltung.png, og-maklerei.png, og-themen-hub.png, og-themen-hub-wechsel-hausverwaltung.png, og-ueber-proimma.png, og-kontakt.png). Astro-Layout setzt og:image-Meta-Tag pro Seite via Frontmatter-Feld ogImage.

Sitemap.xml-Skelett. Astro-Plugin @astrojs/sitemap automatisch generieren beim Build, lastmod aus Datei-Modifikations-Zeit, changefreq weekly für Themen-Hub-Artikel und monthly für Hauptseiten, priority 1.0 für Startseite, 0.9 für Hausverwaltung und Maklerei, 0.8 für Themen-Hub und Über Proimma, 0.7 für Themen-Hub-Artikel, 0.5 für Kontakt, 0.3 für Impressum und Datenschutz.

Robots.txt-Skelett für Live-Domain proimma.de:

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Sitemap: https://www.proimma.de/sitemap-index.xml
```

Robots.txt-Skelett für Bauphase relaunch.proimma.de während Verzeichnisschutz aktiv (Belt-and-Suspenders zusätzlich zum KAS-Verzeichnisschutz):

```
User-agent: *
Disallow: /
```

Sitemap.xml. Astro-Plugin @astrojs/sitemap automatisch generieren. Alle sieben Hauptseiten plus Themen-Hub-Übersicht plus vier Erstartikel plus Impressum und Datenschutz, exklusive Bauphase-Schutzbereich relaunch.proimma.de und exklusive 404, 500, Maintenance.

Robots.txt. Erlaubt alle User-Agents auf Hauptseiten, blockiert /admin/ falls Decap CMS später aktiviert wird, blockiert /api/ falls Endpoints existieren, verweist auf sitemap.xml. Während der Bauphase auf relaunch.proimma.de robots.txt mit „Disallow: /" plus Verzeichnisschutz auf KAS-Ebene (bereits am 26.04.2026 eingerichtet, Benutzer „proimma").

Bilder-SEO. Alle Bilder mit aussagekräftigem Alt-Text. Nicht „Bild von Hausverwaltung", sondern „André Dieckmann, Inhaber der Proimma GmbH, im Editorial-Portrait" oder „Mehrfamilienhaus in Rostock-Stadtmitte, beispielhaftes Verwaltungsobjekt". Bilder als AVIF mit WebP-Fallback und JPEG als Last-Resort, Astro-Plugin @astrojs/image oder Astro Assets nativ.

Local-SEO-Anbindung. Google Business Profile Eintrag „Proimma GmbH" mit Adresse Bremer Straße 12, 18057 Rostock, Kategorie „Hausverwaltung" und „Immobilienmakler", Telefonnummer 0173-6335917, Webseiten-URL proimma.de, Öffnungszeiten Mo-Fr 9-17 Uhr. Verifizierung über Postkarten-Versand, Aufwand zwei bis drei Wochen. Eintrag wird in Teil 5 (Lücken-Audit) als externer Vorbereitungs-Punkt geführt.

Core Web Vitals. Pflicht-Schwellen aus Auftrag eingehalten: LCP unter 2.5 Sekunden, CLS unter 0.1, INP unter 200 Millisekunden, FCP unter 1.8 Sekunden. Mess-Workflow nach Go-Live über PageSpeed Insights und Search Console, nicht über externe Drittanbieter-Tools mit eigenem Tracking.

## 9. DSGVO-Architektur

Tracking-Strategie. Vor und nach Consent klar getrennt. Vor Consent läuft ausschließlich Plausible Analytics (cookielos, DSGVO-konform, EU-Hosting in Frankfurt am Main, kein Cross-Site-Tracking, kein Browser-Fingerprinting). Nach Consent (in Phase 1 nicht relevant, weil keine Cookie-Tracker eingesetzt werden) wäre der Bereich für Re-Targeting-Pixel oder Conversion-Tracking, der in Phase 1 ausgeschlossen ist.

Analytics-Tool. Empfehlung Plausible (https://plausible.io). Begründung. EU-Hosting in Frankfurt, cookielos, DSGVO-konform ohne Cookie-Banner-Pflicht, kein User-Tracking auf Personen-Ebene, sondern aggregierte Statistiken. Monatliche Lizenzkosten ab 9 Euro für bis zu 10.000 Pageviews pro Monat. Alternative Matomo selbst-gehostet auf All-Inkl wäre kostenlos, aber höherer Wartungsaufwand und keine Tracking-Plug-and-Play. Empfehlung steht klar bei Plausible für Phase 1, weil Wartungsfreiheit Vorrang hat.

Cookie-Banner. Phase-1-Empfehlung minimaler Hinweis ohne Consent-Layer, weil keine Tracking-Cookies gesetzt werden. Klartext-Hinweis im Footer und auf der Datenschutzerklärung. Falls in Phase 2 Conversion-Tracking oder Re-Targeting eingeführt wird, dann Tool-Empfehlung Borlabs Cookie (deutsche Lösung, DSGVO-konform, Editorial-anpassbar, Lizenzkosten ab 39 Euro Einmal-Lizenz für eine Domain) oder Klaro (Open-Source, DSGVO-konform, Editorial-anpassbar). Begründung Borlabs für Phase 2: deutsche Lösung mit deutschsprachigem Support, robust gegen DSGVO-Änderungen, wartungsärmer als Open-Source-Alternative.

Newsletter-Tool. Empfehlung Brevo (vormals Sendinblue, Sitz Berlin und Paris, DSGVO-konform, EU-Hosting). Free-Plan deckt bis 300 Versendungen pro Tag, Phase-1-Bedarf darunter. Double-Opt-In Pflicht, Honeypot-Spamschutz Pflicht, Einbettung über Brevo-API oder eingebettetes Formular. Alternative Rapidmail (Sitz Freiburg, deutsche Lösung) bei höherem Versendungsvolumen ab Phase 2.

Hosting-Empfehlung. All-Inkl KAS auf Server w01a2159.kasserver.com, Stammverzeichnis /www/htdocs/w01a2159/. Server-Standort Deutschland, EU-DSGVO-konform. Bestehender Vertrag, Bauphase auf relaunch.proimma.de bereits am 26.04.2026 eingerichtet (siehe tools-workflows.md). Keine Hosting-Migration in Phase 1 nötig.

Domain-Konfiguration. HTTPS-Pflicht via Let's Encrypt automatisiert über All-Inkl KAS. www-zu-non-www-Redirect bevorzugt für proimma.de (Reduzierung auf eine Canonical-Domain). Während Bauphase relaunch.proimma.de mit Verzeichnisschutz, Benutzer „proimma", entfällt vor Go-Live. Zum Go-Live Verschieben des Astro-Builds in das Root-Verzeichnis von www.proimma.de, Verschieben der WordPress-Dateien in einen archivierten Unterordner (nicht löschen), DNS- und SSL-Validierung.

Kontaktformular. Felder Name, E-Mail, Anliegen, optional Telefonnummer. Honeypot-Feld „website" als versteckter Spam-Filter (Bot fühlt sich versucht, das Feld auszufüllen, echte Nutzer sehen es nicht). Server-Submission über Astro-API-Route oder externes Formular-Backend (FormSubmit oder Plunk, beide EU-Hosting). Empfehlung Plunk (https://www.useplunk.com), weil EU-Hosting in Frankfurt, kostenfrei für Phase-1-Volumen, Webhook-Anbindung für n8n in Phase 2 möglich. Empfangs-Adresse info@proimma.de. Double-Opt-In für Newsletter-Anmeldung über Brevo.

Datenschutzerklärung. Eigene Sub-Seite, vollständig DSGVO-konform. Pflichtinhalte: Verantwortlicher (Proimma GmbH, Bremer Straße 12, 18057 Rostock, vertreten durch André Dieckmann), Datenschutzbeauftragter (entfällt, weil unter Schwelle nach § 38 BDSG, sofern weniger als 20 Personen ständig mit personenbezogener Datenverarbeitung beschäftigt sind), erhobene Daten (Server-Logs, Plausible-Aggregat-Daten, Kontaktformular-Eingaben, Newsletter-Anmeldungen), Rechtsgrundlagen (Art. 6 Abs. 1 lit. b und f DSGVO), Speicherdauer, Rechte der Betroffenen, Drittlandübermittlung (entfällt, weil Plausible, Brevo, Plunk, All-Inkl alle EU-Hosting), Cookies-Sektion (in Phase 1 keine Tracking-Cookies, nur Session-Cookie für Cal.com-Embed nach iFrame-Aktivierung), Cal.com-Embed-Hinweis (Cal.com Inc., Sitz USA, EU-Daten-Verarbeitungs-Vereinbarung gemäß Cal.com-DPA, Standardvertragsklauseln). Letzter Punkt ist eine offene DSGVO-Stelle, die in Teil 5 Lücken-Audit bestätigt werden muss; Cal.com-Cloud-Hosting ist in den USA, Cal.com bietet EU-DPA an, aber Standardvertragsklauseln-Risiko ist seit Schrems-II-Urteil bekannt; Alternative wäre Cal.com self-hosted (Open-Source-Variante) mit höherem Wartungsaufwand.

Impressum. Eigene Sub-Seite mit allen Pflichtangaben aus dem Auftrag wörtlich übernommen. „Proimma GmbH, vertretungsberechtigter Geschäftsführer André Dieckmann, Bremer Straße 12, 18057 Rostock, HRB 16077 Amtsgericht Rostock, Umwandlungsurkunde UVZ 1891/2024 Notar Robert Boris Gaentzsch, USt-IdNr DE359185515, Steuernummer 079/116/01766, externe Kontaktadresse info@proimma.de." Plus „Erlaubnis nach § 34c Abs. 1 Satz 1 Nr. 1 und Nr. 4 GewO, Bescheid der Hansestadt Rostock vom 31.03.2026, Aktenzeichen gew-1270-2024-AD3231." Plus „Vermögensschadenhaftpflicht-Versicherung gemäß § 15 ImmVV mit Mindestsummen 500.000 Euro je Fall und eine Million Euro pro Jahr." Plus Aufsichtsbehörde Hansestadt Rostock. Plus Hinweis auf Verbraucherstreitbeilegung nach § 36 VSBG (Proimma nimmt nicht teil, Hinweispflicht erfüllt durch Klartext-Aussage). Plus EU-Online-Streitbeilegung-Link gemäß Art. 14 Abs. 1 ODR-Verordnung.

Provisionslogik. Auf Maklerei-Hauptseite und im Themen-Hub-Artikel zur Maklerprovision (Artikel 3) wörtlich umgesetzt. „Provision nach § 656c BGB, geteilt zwischen Verkäufer und Käufer. 7,14 Prozent inklusive Mehrwertsteuer vom notariellen Kaufpreis, je 3,57 Prozent inklusive Mehrwertsteuer auf Verkäufer- und Käuferseite. Fällig nur im Erfolgsfall."

Auftragsverarbeitungs-Verträge. Pflicht-Liste pro Anbieter mit personenbezogener Datenverarbeitung im Auftrag. Vor Go-Live müssen Auftragsverarbeitungs-Verträge gemäß Art. 28 DSGVO mit folgenden Anbietern geschlossen oder bestätigt sein. Plausible Analytics (Auftragsverarbeitungs-Vertrag im Plausible-Account-Bereich elektronisch abrufbar). Brevo (Auftragsverarbeitungs-Vertrag über Brevo-DPA-Modul mit elektronischer Signatur). Plunk als Kontaktformular-Backend (Auftragsverarbeitungs-Vertrag direkt mit Plunk, EU-Hosting Frankfurt). Cal.com (Auftragsverarbeitungs-Vertrag mit EU-Standardvertragsklauseln, weil Cal.com-Cloud in den USA hostet, Schrems-II-Restrisiko transparent in der Datenschutzerklärung). All-Inkl als Hosting-Anbieter (Auftragsverarbeitungs-Vertrag im KAS-Backend abrufbar, Server-Standort Deutschland). Liste in Teil 5 Lücken-Audit als externer Vorbereitungs-Punkt mit Verantwortungs-Zuordnung wiederholt.

Server-Logs-Aufbewahrung. All-Inkl speichert Standard-Server-Logs (Access-Logs, Error-Logs) gemäß Anbieter-Standard für sieben Tage rotierend, Aufbewahrungsdauer ist im KAS-Backend einsehbar. Für die Datenschutzerklärung wird die Speicherdauer der IP-Adressen mit Klartext genannt: „IP-Adressen werden in den Server-Logs für maximal sieben Tage gespeichert und danach automatisch gelöscht. Eine Verknüpfung mit anderen personenbezogenen Daten findet nicht statt. Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Server-Sicherheit und Fehler-Diagnose)."

Cookie-Banner-Hinweispflicht nach TTDSG. Auch ohne Tracking-Cookies kann eine Cookie-Hinweispflicht bestehen, wenn technisch notwendige Session-Cookies gesetzt werden. Cal.com-Embed setzt nach Aktivierung iFrame-eigene Session-Cookies, deren Setzen nach § 25 Abs. 2 Nr. 2 TTDSG einwilligungsfrei zulässig ist (technisch erforderlich für die Termin-Buchungs-Funktion), aber dennoch in der Datenschutzerklärung erklärt werden muss. Plausible-Cookies entfallen, weil Plausible cookielos arbeitet. Phase-1-Empfehlung. Klartext-Cookie-Hinweis im Footer und auf der Datenschutzerklärung, ohne aufdringlichen Cookie-Banner-Layer. Wortlaut Footer-Klartext „Diese Webseite verwendet ein cookieloses Analytics-Tool (Plausible) und keine Drittanbieter-Tracker. Der eingebettete Termin-Buchungs-Dienst (Cal.com) setzt nach Aktivierung technisch erforderliche Session-Cookies. Details in der Datenschutzerklärung." BGH-Urteil vom 28. Mai 2020 (Az. I ZR 7/16, Planet49) bezieht sich auf einwilligungspflichtige Cookies; bei Phase-1-Tool-Setup keine einwilligungspflichtigen Cookies vor Cal.com-iFrame-Aktivierung. Bei Phase-2-Erweiterung mit Conversion-Tracking oder Re-Targeting Pflicht-Upgrade auf vollständigen Consent-Layer (Borlabs Cookie wie in Sektion 9 oben empfohlen).

## 10. Performance-Budget

Schwellen aus Auftrag, gegengeprüft mit der Bauauswahl aus Bau-Auswahl-2026.md.

Lighthouse-Mindestziel 95 in allen vier Kategorien (Performance, Accessibility, Best Practices, SEO) auf Mobile via Google PageSpeed Insights gemessen. LCP unter 2.5 Sekunden. CLS unter 0.1. INP unter 200 Millisekunden. FCP unter 1.8 Sekunden.

KB-Budget initial. First-Load-JS unter 100 KB komprimiert (Astro liefert standardmäßig deutlich darunter, weil statisches HTML/CSS/JS mit Astro-Islands nur dort hydriert wird, wo nötig). CSS unter 30 KB komprimiert (Tailwind-Purge im Build-Prozess Pflicht, ungenutzte Klassen werden entfernt). Hero-Bild unter 200 KB als AVIF mit WebP-Fallback. Content-Bilder unter 80 KB im AVIF-Format. Total Page Weight initial unter 500 KB inklusive aller Assets above-the-fold.

Schrift-Strategie. Hanken Grotesk Variable als WOFF2, self-hosted, ein Font-File für alle drei Schnitte (Light, Regular, Medium) via Variable-Font-Technologie. Font-Display swap, font-feature-settings tnum für Tabular Nums. Preload für die Variable-Font-Datei im Astro-Layout-Head, weil sie LCP beeinflusst. Geschätzte Größe der Variable-Font-Datei rund 60 KB komprimiert.

Bilder-Strategie. AVIF als primäres Format, WebP als Fallback, JPEG als Last-Resort. Astro Assets nativ über Bild-Komponente <Image src={...} alt={...} widths={[...]} formats={['avif', 'webp', 'jpeg']} /> mit Responsive-Variants. Lazy-Load unterhalb der Fold (loading=„lazy" Attribut) Pflicht. Hero-Bild eager-loaded, alle anderen lazy. Aspect-Ratio CSS-Property auf jedem Bild-Container Pflicht, um CLS zu vermeiden.

iFrame-Strategie. Cal.com-iFrame ist die einzige Drittanbieter-Einbindung in Phase 1. Lazy-Load via Intersection Observer, iFrame wird erst geladen, wenn Container in Viewport sichtbar ist (threshold 0.1, rootMargin 200px). Pre-Load-Spinner während iFrame-Initialisierung Pflicht, weil Cal.com initial Loading-State eigene 200 bis 400 ms verbraucht.

JavaScript-Strategie. Astro-Default ist Zero-JS-Output für statische Seiten. JavaScript ausschließlich für: View Transitions Astro-nativ (eingebaut), Intersection Observer für Reveal-Choreographien (selbst geschrieben, unter 1 KB), Cookie-Banner (Phase 1 minimaler Klartext-Hinweis ohne Tracking-Logik, also kein JS), Cal.com-Embed (nach Lazy-Load aktiviert, unter 50 KB Cal.com-iFrame-Initialisierung, separat von First-Load gerechnet). Keine GSAP, keine Framer Motion, keine Three.js, keine jQuery.

CSS-Strategie. Tailwind 3 mit Just-in-Time-Modus, Build-Time-Purge entfernt ungenutzte Klassen. Custom-CSS-Variablen für Token-System (Farben, Spacing, Type-Scale). Kein Critical-CSS-Inline (Astro inlined automatisch, nicht nötig). Kein Dark-Mode-CSS (verworfen in Bau-Auswahl-2026.md).

Bau-Reviews. Pre-Deploy-Lighthouse-Lauf auf relaunch.proimma.de Pflicht vor jedem Tag-Release. Schwelle 95 ist hart, nicht weich; bei Unterschreitung Build-Stop und Diagnose vor Deploy.

## 11. Accessibility WCAG 2.2 AA

Pflicht-Disziplin. Erfüllung WCAG 2.2 Level AA in allen Hauptseiten. Tools für Verifikation: axe DevTools Browser-Extension, Lighthouse Accessibility-Audit, WAVE Web Accessibility Evaluation Tool, Tastatur-Test ohne Maus.

Tastatur-Navigation. Alle interaktiven Elemente (Links, Buttons, Inputs, Cal.com-Embed-Trigger) per Tab erreichbar in logischer Reihenfolge. Skip-Link „Zum Hauptinhalt springen" als erster Tab-Stop, sichtbar bei Fokus. Focus-Trap im Mobile-Hamburger-Menu (Tab-Reihenfolge Schließen-Icon, dann fünf Navigationspunkte, dann Schließen).

Sichtbare Focus-States. Outline 3 Pixel #34AEEB, Outline-Offset 2 Pixel auf jedem fokussierbaren Element. Niemals outline:none ohne Ersatz-Indikator.

Semantisches HTML. <header>, <main>, <nav>, <article>, <section>, <aside>, <footer>. Heading-Hierarchie ohne Sprünge: pro Seite genau ein <h1>, <h2> und <h3> in logischer Verschachtelung. <button> für Aktionen, <a href> für Navigation. <form> mit <label for=""> Verknüpfung Pflicht.

Aria-Konventionen. <button aria-label> bei Icon-only-Buttons (Hamburger-Menu, Schließen-Icon). <a aria-current=„page"> beim aktiven Navigationspunkt. <nav aria-label=„Hauptnavigation"> und <nav aria-label=„Footer-Navigation"> zur Disambiguierung. <form aria-describedby=„fehlermeldung-id"> bei Form-Errors. <button aria-busy=„true"> während Loading-State. ARIA-Live-Region für asynchrone Status-Meldungen (Form-Submit-Erfolg, Cal.com-Lade-Status).

Kontrast-Verifikation. Body-Text 17 Pixel mindestens 4,5 zu 1 Kontrast (WCAG AA Body). Large-Text 18,5 Pixel oder 14 Pixel Bold mindestens 3 zu 1 (WCAG AA Large). Hellblau-Akzent #34AEEB auf Off-White #FAFAF8 erreicht 2,5 zu 1, deshalb ausschließlich für Akzente und Focus-Indikatoren mit Mindestgröße 3 Pixel, niemals für Body-Text.

Reduced-Motion-Support. CSS-Regel @media (prefers-reduced-motion: reduce) reduziert alle Animationen auf einfache Opacity-Übergänge ohne Translate, ohne Blur, mit Dauer 0.01s. Trifft Reveals, Hover-Animationen, View Transitions.

Lang-Attribut. <html lang=„de"> auf jeder Seite. Bei Fremdsprachen-Begriffen (zum Beispiel englische Tech-Begriffe wie „Variable Font") <span lang=„en"> Markierung für Screen-Reader-Aussprache.

Tabulator-Reihenfolge. Logische DOM-Reihenfolge entspricht visueller Lesereihenfolge. Tabindex auf 0 oder -1 oder weglassen, niemals positive Tabindex-Werte (verletzt natürliche Reihenfolge).

Touch-Target-Mindestgröße. Alle interaktiven Elemente auf Mobile mindestens 44 mal 44 Pixel CSS-Pixel großer Touch-Target. Buttons mit Padding 16 Pixel vertikal erreichen das automatisch. Hamburger-Menu-Icon mit Padding 12 Pixel auf 20-Pixel-Icon erreicht 44 Pixel.

Reading-Order auf Mobile. Bei Reduktion asymmetrischer Editorial-Layouts auf Mobile bleibt die Lesereihenfolge im DOM identisch zur Desktop-Lesereihenfolge. CSS Grid order-Property nur in nicht-kritischen Zonen, niemals zur Umsortierung von Headline und Body-Text.

Audit-Schwelle. Lighthouse Accessibility-Score 95 plus axe DevTools null kritische Fehler vor Go-Live Pflicht. WAVE-Bericht ohne strukturelle Errors.

## 12. Browser-Support und Progressive Enhancement

Pflicht-Browser. Chrome, Safari, Firefox, Edge in den jeweils zwei aktuellsten Major-Versionen zum Zeitpunkt des Go-Live. Mobile Safari iOS 16 und neuer. Chrome Mobile Android in Versionen aus den letzten 24 Monaten.

Progressive-Enhancement-Strategie. Core-Funktionen (Inhalt lesen, Navigation klicken, Formular abschicken, Telefon anrufen, E-Mail schreiben) müssen ohne JavaScript funktionieren. Astro liefert Server-rendered HTML, JavaScript ist nur für Komfort-Features (View Transitions, Reveal-Choreographien, Cal.com-Lazy-Load). Bei deaktiviertem JavaScript bleibt die Webseite voll bedienbar mit fade-Eintritt statt Reveal-Choreographie und mit direkt geladenem Cal.com-iFrame.

CSS-Feature-Strategie. View Transitions API in Astro 4 bord-eigen, mit Fallback für ältere Browser (kein Übergang, direkter Wechsel). CSS Scroll-driven Animations native in Chrome, Edge, Opera ab 2026; Safari verlangt Polyfill (Scroll-driven Animations Polyfill von Bramus, unter 2 KB komprimiert), Firefox hinter Feature-Flag, dort Fallback Intersection Observer mit class-Toggle. CSS Container Queries native in allen Pflicht-Browsern ab Mobile Safari 16. CSS aspect-ratio Property native in allen Pflicht-Browsern.

Polyfill-Strategie. Scroll-driven Animations Polyfill nur wenn nötig, Lazy-Load via dynamisches Import. Keine Polyfill-Dump-Strategie wie polyfill.io, weil DSGVO-Risiko (CDN-Aufruf).

Test-Workflow. Pre-Deploy-Test in BrowserStack oder lokal mit aktuellen Builds der vier Pflicht-Browser. Mindesten ein Mobile-Safari-iOS-Test pro Major-Release, weil Safari-Eigenheiten am häufigsten Bugs erzeugen.

## 13. Versionierung und Changelog

GitHub-Repository als zentrale Wahrheitsquelle. Privates Repository mit Branches main (Live-Seite www.proimma.de) und dev (Bauphase relaunch.proimma.de). Pull-Request-Workflow von dev nach main vor jedem Live-Deploy. Commit-Convention nach Conventional Commits (feat, fix, docs, style, refactor, perf, test, chore) mit Scope, Beispiel „feat(hero): editorial display headline mit reveal".

Versions-Tags. Vor jedem Live-Deploy ein Tag in main mit Schema vMAJOR.MINOR.PATCH. v1.0.0 als initialer Go-Live Phase 1. v1.0.x für Bugfixes, v1.x.0 für neue Features ohne Breaking Changes, v2.0.0 für Phase-2-Empfangshalle. Tag-Annotation mit Changelog-Auszug.

Backup-Strategie. KAS-tägliches Backup über All-Inkl plus GitHub als Code-Quelle plus lokale Builds in /10_Webseite_Relaunch/dist/ und Upload-Pakete in /10_Webseite_Relaunch/upload-vN-JJJJ-MM-TT/ gemäß Build-Output-Konvention vom 26.04.2026.

Rollback-Plan. Bei kritischem Fehler nach Go-Live Verschieben des archivierten WordPress-Ordners zurück in das Root-Verzeichnis von www.proimma.de via FTP, Wiederherstellung innerhalb weniger Minuten möglich. Astro-Rollback auf vorigen Tag via FTP-Upload des Tag-spezifischen Build-Outputs. Beide Wege im Bau-Chat dokumentieren.

Changelog DESIGN.md. Eigener Abschnitt unten in dieser Datei, jede strukturelle Änderung mit Datum, Autor, Stichwort. Kein Diff, sondern Klartext-Aussage je Änderung.

## 14. Tech-Stack-Konkretisierung

Astro-Projekt-Datei-Struktur. Lokales Projektverzeichnis /Users/andredieckmann/Desktop/Proimma GmbH/10_Webseite_Relaunch/ mit folgender Struktur.

```
/10_Webseite_Relaunch/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
├── public/
│   ├── fonts/                       (Hanken Grotesk Variable WOFF2)
│   ├── og-images/                   (statisch generierte OG-Bilder pro Seite)
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/                      (optimierte Content-Bilder)
├── src/
│   ├── pages/                       (Routen, je eine .astro-Datei pro Hauptseite)
│   │   ├── index.astro              (Startseite)
│   │   ├── hausverwaltung.astro
│   │   ├── maklerei.astro
│   │   ├── ueber-proimma.astro
│   │   ├── kontakt.astro
│   │   ├── impressum.astro
│   │   ├── datenschutz.astro
│   │   ├── 404.astro
│   │   ├── 500.astro
│   │   └── themen-hub/
│   │       ├── index.astro          (Übersichtsseite)
│   │       ├── wechsel-hausverwaltung.astro
│   │       ├── bestandsuebergabe.astro
│   │       ├── maklerprovision.astro
│   │       └── verkauf-wohnimmobilie.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro         (Site-Root mit ViewTransitions, SEO-Meta, Schema-JSON-LD)
│   │   └── ArticleLayout.astro      (Themen-Hub-Artikel mit Breadcrumb, Article-Schema)
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── EditorialIndex.astro
│   │   ├── Datenpunkt.astro
│   │   ├── MagazinBand.astro
│   │   ├── Hairline.astro
│   │   ├── Breadcrumb.astro
│   │   ├── EditorialKarte.astro
│   │   ├── Bild.astro
│   │   ├── NewsletterForm.astro
│   │   ├── CalEmbed.astro
│   │   ├── CookieHinweis.astro
│   │   └── SkipLink.astro
│   ├── styles/
│   │   ├── tokens.css               (CSS Custom Properties: Farben, Spacing, Type-Scale)
│   │   ├── fonts.css                (@font-face self-hosted)
│   │   └── global.css               (Reset, body-Defaults, Reveal-Choreographien)
│   └── content/
│       └── themen-hub/              (Markdown-Quellen der Themen-Hub-Artikel)
└── dist/                            (Build-Output, durch .gitignore ausgenommen)
```

Naming-Convention. Komponenten-Dateien in PascalCase (Header.astro, EditorialKarte.astro). Seiten-Dateien in kebab-case (ueber-proimma.astro, themen-hub/wechsel-hausverwaltung.astro). CSS-Klassen in BEM-light (block, block__element, block--modifier) oder Tailwind-Utility-Stack. CSS Custom Properties im Schema --color-fg-primary, --space-l, --font-display-xxl mit doppeltem Bindestrich-Präfix für Token-Disziplin.

Tailwind-Theme-Extension als tailwind.config.mjs-Auszug. Custom-Tokens werden in der theme.extend-Sektion definiert, damit die Tailwind-Default-Tokens nicht überschrieben werden, sondern ergänzt.

```javascript
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#FAFAF8',
        'bg-elevated': '#FFFFFF',
        'fg-primary': '#1A1A1A',
        'fg-secondary': '#717171',
        'line': '#D9D9D9',
        'line-faint': '#EBEBEB',
        'accent': '#34AEEB',
        'footer-bg': '#242E4F',
        'footer-fg': '#FAFAF8',
      },
      fontFamily: {
        sans: ['Hanken Grotesk Variable', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xxl': ['8rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl': ['6rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-l': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'h1': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h2': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'h3': ['1.75rem', { lineHeight: '1.15' }],
        'h4': ['1.375rem', { lineHeight: '1.4' }],
        'body-l': ['1.1875rem', { lineHeight: '1.55' }],
        'body-m': ['1.0625rem', { lineHeight: '1.55' }],
        'body-s': ['0.9375rem', { lineHeight: '1.45' }],
        'caption': ['0.8125rem', { lineHeight: '1.45', letterSpacing: '0.02em' }],
      },
      spacing: {
        '2xs': '0.25rem',
        'xs': '0.5rem',
        's': '1rem',
        'm': '1.5rem',
        'l': '3rem',
        'xl': '6rem',
        '2xl': '9rem',
        '3xl': '12rem',
        '4xl': '15rem',
      },
      maxWidth: {
        'container': '80rem',
      },
    },
  },
}
```

Die Werte in rem-Einheiten basieren auf 16-Pixel-Root, sodass die Pixel-Angaben aus Sektion 3 und 4 konsistent gespiegelt sind (4.5rem entspricht 72 Pixel und so weiter).

Astro-Konfiguration als astro.config.mjs-Auszug. Plugin @astrojs/tailwind, @astrojs/sitemap, @astrojs/check für Type-Checking, ViewTransitions ist als Astro-4-Bord-Werkzeug ohne separate Plugin-Anbindung verfügbar.

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.proimma.de',
  integrations: [tailwind(), sitemap()],
  prefetch: { defaultStrategy: 'viewport' },
  build: { inlineStylesheets: 'auto' },
});
```

Frontmatter-Konvention pro Astro-Seite. Title, Description, OG-Image und Canonical werden über Frontmatter-Felder gesetzt, die das BaseLayout liest.

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
const title = 'Hausverwaltung und Maklerei in Rostock. Proimma GmbH';
const description = 'Mietenverwaltung und Vermarktung von Wohnimmobilien für Eigentümer in Rostock und Umgebung. Inhabergeführt, fokussiert. Erstgespräch online vereinbaren.';
const ogImage = '/og-images/og-startseite.png';
---
<BaseLayout title={title} description={description} ogImage={ogImage}>
  <!-- Inhalt der Startseite -->
</BaseLayout>
```

## 15. Conversion-Architektur und Mess-Setup

Diese Sektion bildet die im Auftrag geforderten Conversion-Inhalte als zusammenhängende Architektur ab: Funnel-Stufen, Primär- und Sekundärziel, vier benannte Mikro-Conversions, Haupt-KPI-Berechnung, Plausible-Goals-Konfiguration mit konkretem Code, Pre-Deploy-Lighthouse-Workflow.

### 15.1 Funnel-Stufen

Vier Stufen vom ersten Kontakt zum gebuchten Termin. Jede Stufe ist mit konkreten Sektionen der Webseite verknüpft, sodass die Mess-Mechanik je Stufe zuordenbar wird.

Aufmerksamkeit. Erste zwei Sekunden auf der Webseite. Trägt sich über V1 Editorial-Header und V2 Editorial-Hero mit XXL-Display-Headline plus V3 Hero-Datenpunkte. Erfolgskriterium First Impression Premium-Empfindung, sichtbar über Verweildauer über zehn Sekunden auf der Startseite.

Vertrauen. Substanz-Wahrnehmung in den ersten dreißig Sekunden. Trägt sich über V7 Substanz-Datenpunkte, V9 Editorial-Personenprofil, V11 Erreichbarkeits-Versprechen, V12 Footer mit transparenten Stamm-Daten plus V14 Editorial-Verzichtsblock. Erfolgskriterium Sektions-View auf Vertrauenselemente, sichtbar über Plausible-Custom-Events sektion-view-vertrauen und sektion-view-personenprofil.

Verstehen. Inhaltliche Tiefe der jeweiligen Säule. Trägt sich über V4 Mietenverwaltungs-Magazin-Band oder V6 Maklerei-Magazin-Band, ergänzt um Themen-Hub-Artikel als SEO-getriebene Substanzlieferung. Erfolgskriterium Lese-Tiefe über fünfzig Prozent auf der jeweiligen Säulen-Seite oder Artikel-Seite.

Entscheidung. Termin-Buchung oder schriftliche Anfrage. Trägt sich über V10 Cal.com-Termin-Sektion plus Sekundär-Pfad E-Mail an info@proimma.de. Erfolgskriterium Plausible-Goal termin-buchung oder kontakt-formular-submit.

### 15.2 Primärziel und Mess-Mechanik

Primärziel. Erstkontakt-Termin über Cal.com für Bestandsobjekt-Übernahme oder Verkaufsmandat. Mess-Mechanik. Plausible-Goal termin-buchung als Outbound-Link-Klick auf die Cal.com-Domain (cal.com/proimma oder die konkrete Buchungs-URL nach Account-Setup). Sekundär-Mess-Mechanik bei Cal.com-iFrame-Embed: Plausible-Custom-Event termin-buchung-iframe ausgelöst durch postMessage-Listener auf Cal.com-Booking-Success-Event (Cal.com sendet bei Buchungs-Bestätigung ein postMessage mit type „bookingSuccessful").

### 15.3 Sekundärziel und Mess-Mechanik

Sekundärziel. Vertrauensaufbau für Empfehlungs-Netzwerk wie Steuerberater, Notare, Anwälte, Banken im regionalen Umfeld. Mess-Mechanik in Phase 1. Sektions-View auf den Empfehlungspartner-Bereich (in V8 vertagt nach Phase 2, in Phase 1 als Klartext-Erwähnung in V9 Personenprofil sichtbar) plus Lese-Tiefe auf der Über-Proimma-Seite. Plausible-Custom-Events sektion-view-empfehlungspartner und lese-tiefe-ueber-proimma-100. Mess-Mechanik in Phase 2 nach Ausbau der Empfehlungspartner-Wand. Eigenes Plausible-Goal empfehlungspartner-detail mit URL-Match auf die Detail-Sub-Seiten.

### 15.4 Vier Mikro-Conversions

Scroll-Tiefe. Plausible-Custom-Event scroll-tiefe pro Hauptseite mit prop-Wert tiefe (Werte 50 und 90 Prozent). Trigger über Intersection Observer auf Marker-Elemente, die in den Astro-Layouts an den entsprechenden Höhen-Positionen platziert werden.

Sektion-View. Plausible-Custom-Event sektion-view pro Hauptsektion (Hero, Datenpunkte, Magazin-Band Mietenverwaltung, Magazin-Band Maklerei, Vertrauen, Personenprofil, Cal.com-Embed, Footer, Verzichtsblock). Trigger Intersection Observer threshold 0.5, sodass die Sektion mindestens zur Hälfte sichtbar gewesen sein muss.

Hover auf CTA. Plausible-Custom-Event cta-hover pro Primär-Button und Tertiär-Button mit prop-Wert cta-name. Trigger erstes mouseenter-Event pro Button pro Session, einmaliges Tracking pro Button.

Lese-Tiefe Service-Seiten. Plausible-Custom-Event lese-tiefe pro Hausverwaltungs-, Maklerei- und Themen-Hub-Artikel-Seite mit prop-Werten 25, 50, 75, 100 Prozent. Trigger Intersection Observer auf Lese-Marker, die im Astro-Layout dynamisch nach Artikel-Länge gesetzt werden.

### 15.5 Plausible-Goals-Konfiguration

Vier Goals plus drei Custom-Events plus ein Outbound-Link-Goal als Konfigurations-Tabelle für das Plausible-Backend.

| Goal-Name | Typ | Definition |
|---|---|---|
| termin-buchung | Outbound Link | Klick auf cal.com-Domain |
| termin-buchung-iframe | Custom Event | postMessage-Listener auf Cal.com bookingSuccessful |
| kontakt-formular-submit | Custom Event | Erfolgreicher Submit des Kontakt-Formulars |
| newsletter-anmeldung | Custom Event | Erfolgreicher Submit des Newsletter-Formulars (Phase 2) |
| scroll-tiefe | Custom Event | Properties: tiefe (50, 90) |
| sektion-view | Custom Event | Properties: sektion (hero, datenpunkte, mietenverwaltung, maklerei, vertrauen, personenprofil, cal-embed, footer, verzichtsblock) |
| cta-hover | Custom Event | Properties: cta-name |
| lese-tiefe | Custom Event | Properties: seite (hausverwaltung, maklerei, themen-hub-artikel-name), prozent (25, 50, 75, 100) |

### 15.6 Haupt-KPI Termin-Conversion-Rate

Berechnung. Anzahl Plausible-Goal-Treffer termin-buchung plus termin-buchung-iframe pro Zeitraum, dividiert durch Anzahl Unique Visitors auf der Kontakt-Seite (/kontakt) plus Sektions-View auf den Cal.com-Embed-Bereich der Säulen-Seiten (sektion-view mit prop sektion=cal-embed) im selben Zeitraum, multipliziert mit hundert. Ergebnis als Prozent.

Beobachtungs-Zeitraum Phase 1. Dreißig Tage rollierend ab Go-Live. Erste belastbare Aussage über die Conversion-Rate erst nach dem ersten vollen Beobachtungs-Zyklus.

Schwellen-Festlegung. Keine externe Festlegung in Phase 1, weil Vergleichswerte aus dem Wettbewerb nicht öffentlich sind und Proimmas Bestandsgröße in der Aufbauphase die Aussagekraft der Conversion-Rate verzerrt. Interne Beobachtung als Trend, nicht als Schwellen-Vergleich.

### 15.7 Plausible-Anbindung als Code-Vorlage

Plausible-Script im BaseLayout.astro Head einfügen. data-domain wird auf den Live-Hostnamen gesetzt, in der Bauphase auf relaunch.proimma.de mit getrenntem Plausible-Site-Eintrag, sonst Bau-Daten und Live-Daten vermischen.

```html
<script defer data-domain="proimma.de" src="https://plausible.io/js/script.tagged-events.outbound-links.js"></script>
```

Custom-Event-Tracking erfolgt über window.plausible. Beispiel-Snippet für Scroll-Tiefe-Tracking als JavaScript in src/scripts/tracking.ts.

```javascript
const scrollMarkers = document.querySelectorAll('[data-scroll-marker]');
const seenMarkers = new Set();
const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !seenMarkers.has(entry.target)) {
      seenMarkers.add(entry.target);
      const tiefe = entry.target.getAttribute('data-scroll-marker');
      window.plausible?.('scroll-tiefe', { props: { tiefe } });
    }
  });
}, { threshold: 0 });
scrollMarkers.forEach(marker => scrollObserver.observe(marker));
```

Beispiel-Snippet für Sektion-View-Tracking.

```javascript
const sektionen = document.querySelectorAll('[data-sektion]');
sektionen.forEach(sektion => {
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const name = entry.target.getAttribute('data-sektion');
        window.plausible?.('sektion-view', { props: { sektion: name } });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  obs.observe(sektion);
});
```

Beispiel-Snippet für CTA-Hover-Tracking.

```javascript
document.querySelectorAll('[data-cta]').forEach(el => {
  el.addEventListener('mouseenter', () => {
    const name = el.getAttribute('data-cta');
    window.plausible?.('cta-hover', { props: { cta: name } });
  }, { once: true });
});
```

Beispiel-Snippet für Lese-Tiefe-Tracking.

```javascript
const leseMarker = document.querySelectorAll('[data-lese-marker]');
const seenLese = new Set();
const leseObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !seenLese.has(entry.target)) {
      seenLese.add(entry.target);
      const prozent = entry.target.getAttribute('data-lese-marker');
      const seite = document.body.getAttribute('data-page-slug');
      window.plausible?.('lese-tiefe', { props: { seite, prozent } });
    }
  });
}, { threshold: 0 });
leseMarker.forEach(marker => leseObserver.observe(marker));
```

Markup-Konvention. Im Astro-Layout werden die Marker und Sektions-Attribute deklarativ gesetzt. Beispiele.

```astro
<section data-sektion="hero">...</section>
<section data-sektion="datenpunkte">
  <div data-scroll-marker="50"></div>
</section>
<a href="/kontakt" data-cta="erstgespraech-vereinbaren-hero" class="btn-primary">Erstgespräch vereinbaren</a>
<article data-page-slug="hausverwaltung">
  <div data-lese-marker="25"></div>
  <div data-lese-marker="50"></div>
  <div data-lese-marker="75"></div>
  <div data-lese-marker="100"></div>
</article>
```

prefers-reduced-data-Pflicht. Tracking-Skripte werden geladen, weil Plausible cookielos und sehr leichtgewichtig ist (unter 1 KB). Bei prefers-reduced-data: reduce wird das Plausible-Script trotzdem geladen, weil aggregierte Daten ohne Personenbezug die Datenschutz-Schwelle nicht überschreiten.

### 15.8 Pre-Deploy-Lighthouse-Workflow

Empfehlung. Lighthouse CI über GitHub Actions, weil die harte Schwelle 95 in allen vier Kategorien automatisiert vor jedem Tag-Release verifiziert wird. Manuelle Lighthouse-Läufe sind anfällig für Vergessen und für Schwankungen je nach Mess-Umgebung.

GitHub-Actions-Workflow als .github/workflows/lighthouse.yml.

```yaml
name: Lighthouse CI
on:
  pull_request:
    branches: [main]
  push:
    tags: ['v*']
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: treosh/lighthouse-ci-action@v11
        with:
          urls: |
            https://relaunch.proimma.de/
            https://relaunch.proimma.de/hausverwaltung
            https://relaunch.proimma.de/maklerei
            https://relaunch.proimma.de/themen-hub
            https://relaunch.proimma.de/ueber-proimma
            https://relaunch.proimma.de/kontakt
          uploadArtifacts: true
          temporaryPublicStorage: true
          configPath: ./lighthouserc.json
```

Schwellen-Konfiguration als lighthouserc.json im Repository-Root.

```json
{
  "ci": {
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.95 }],
        "categories:accessibility": ["error", { "minScore": 0.95 }],
        "categories:best-practices": ["error", { "minScore": 0.95 }],
        "categories:seo": ["error", { "minScore": 0.95 }]
      }
    }
  }
}
```

Schwellen-Logik. Score unter 0.95 in einer der vier Kategorien führt zum Workflow-Fail, der Pull-Request kann nicht in main gemergt werden, der Tag-Push erzeugt keinen Release. Diese Härte ist die Bau-Disziplin, die das Lighthouse-Mindestziel 95 vom Versprechen zur Pflicht hebt.

Bauphase-Voraussetzung. Die Workflow-URL relaunch.proimma.de muss während der Bauphase über den Verzeichnisschutz hinaus eine Lighthouse-CI-Ausnahme bekommen, weil sonst der Verzeichnisschutz die Lighthouse-Messung blockiert. Lösung. Lighthouse-CI-User-Agent in der KAS-Verzeichnisschutz-Ausnahmeliste eintragen, oder alternativ ein temporärer öffentlicher Bauphase-Zugang über einen Token-basierten URL-Parameter (?lh-token=…) für die Lighthouse-CI-Läufe.

Manuelle Stichproben-Mess-Workflow nach Go-Live. Zusätzlich zum automatisierten Lighthouse CI eine wöchentliche manuelle Messung über PageSpeed Insights für die fünf wichtigsten URLs (Startseite, Hausverwaltung, Maklerei, Themen-Hub, Kontakt). Ergebnisse in einer einfachen Markdown-Tabelle in /00_Headquarter/lighthouse-stichproben/ rollierend protokolliert. Alarmierung bei Score-Fall unter 95 in einer Kategorie über zwei aufeinanderfolgende Wochen, mit Bau-Chat-Reaktivierung als Konsequenz.

## Changelog

28.04.2026, Top-Manager-Chat Proimma, Erstellung. Erstfassung der DESIGN.md auf Grundlage Bau-Auswahl-2026.md, Markenkern-Proimma-2026-04-27.md, andre-preferences.md (Designgrundsätze 26.04.2026), tools-workflows.md, Premium-Inspirations-Recherche-2026.md. Dreizehn Sektionen.

28.04.2026, Top-Manager-Chat Proimma, Schärfung nach Selbstprüfung. Sektion 5 erweitert um fünf Komponenten (5.11 Breadcrumb, 5.12 Editorial-Karte für Themen-Hub-Übersicht, 5.13 Bild-Komponente mit States, 5.14 Newsletter-Anmelde-Formular, 5.15 Modal-Accessibility für Mobile-Hamburger-Menu). Sektion 6 erweitert um explizite Abgrenzung zur Schwestermarke Immobilien Ratgeber mit konkreten Werten plus CSS-Snippets für Reveal-Choreographie und View Transitions. Sektion 7 erweitert um Title-Tag- und Meta-Description-Beispiele für alle sieben Hauptseiten plus Themen-Hub-Artikel-Beispiel. Sektion 8 erweitert um BreadcrumbList-Schema, JSON-LD-Beispiel-Skelett für LocalBusiness und RealEstateAgent, OG-Image-Generierungsstrategie konkret, Sitemap.xml- und Robots.txt-Skelette. Sektion 9 erweitert um Auftragsverarbeitungs-Vertrags-Pflicht-Liste pro Anbieter, Server-Logs-Aufbewahrung konkret, Cookie-Banner-Hinweispflicht nach TTDSG mit BGH-Urteil. Neue Sektion 14 Tech-Stack-Konkretisierung mit Astro-Projekt-Datei-Struktur, Naming-Convention, Tailwind-Theme-Extension, Astro-Konfiguration und Frontmatter-Konvention.

28.04.2026, Top-Manager-Chat Proimma, Lückenschluss Conversion-Architektur. Neue Sektion 15 Conversion-Architektur und Mess-Setup mit acht Unterabschnitten. Funnel-Stufen Aufmerksamkeit zu Vertrauen zu Verstehen zu Entscheidung mit Zuordnung zu den Bauauswahl-Vorschlägen. Primärziel Cal.com-Termin mit zweistufiger Mess-Mechanik (Outbound-Link-Klick und Cal.com-postMessage-Listener). Sekundärziel Empfehlungs-Netzwerk mit Phase-1- und Phase-2-Mess-Mechanik. Vier Mikro-Conversions (Scroll-Tiefe, Sektion-View, Hover auf CTA, Lese-Tiefe Service-Seiten) als Plausible-Custom-Events spezifiziert. Plausible-Goals-Konfiguration als Tabelle mit acht Goal-Definitionen. Haupt-KPI Termin-Conversion-Rate mit konkreter Berechnungsformel. Plausible-Anbindung mit Code-Vorlagen (Script-Einbindung, Scroll-Tiefe-, Sektion-View-, CTA-Hover-, Lese-Tiefe-Tracking) plus Markup-Konvention für die Astro-Layouts. Pre-Deploy-Lighthouse-Workflow als GitHub-Actions-YAML-Vorlage plus lighthouserc.json mit Score-Schwelle 0.95 in allen vier Kategorien als Hard-Fail. Status abnahmebereit für Teil 3 (Wireframes Mobile und Desktop).

## Selbstprüfung

Vollständigkeit. Alle im Auftrag geforderten Pflichtinhalte abgedeckt: Designprinzipien, Farbsystem mit allen States, Typografie-System, Spacing- und Grid-System, Conversion-Architektur als eigene Sektion mit Funnel-Stufen, Primär- und Sekundärziel, vier Mikro-Conversions, Plausible-Goals-Konfiguration, Haupt-KPI-Berechnung, Pre-Deploy-Lighthouse-Workflow, Komponenten-Bibliothek mit allen States für fünfzehn Komponenten plus fünf Edge-Case-Komponenten (Header, Buttons in drei Klassen, Form-Inputs, Editorial-Index, Datenpunkt mit Tabular Nums, Magazin-Band, Cal.com-Embed, Hairline, Footer, Edge-Case-Komponenten, Breadcrumb, Editorial-Karte für Themen-Hub-Übersicht, Bild-Komponente mit States, Newsletter-Anmelde-Formular, Modal-Accessibility für Mobile-Hamburger-Menu), Animation-Sprache mit Reveal- und Hover-Choreographie, prefers-reduced-motion-Pflicht, expliziter Abgrenzung zur Schwestermarke Immobilien Ratgeber mit konkreten Werten und CSS-Snippets, Microcopy in der Markenstimme mit Beispielen für alle Interaktionsstellen plus Title-Tag- und Meta-Description-Beispielen für alle sieben Hauptseiten und einen Themen-Hub-Artikel, SEO-Architektur mit Meta-Tags, URL-Struktur, Schema.org JSON-LD (LocalBusiness, RealEstateAgent, Service Mietenverwaltung, Service Maklerei, Person, Article, BreadcrumbList) mit Beispiel-Skeletten, Sitemap.xml und Robots.txt mit Skelett-Werten, Bilder-SEO, OG-Image-Generierungsstrategie, Local-SEO, Core Web Vitals, DSGVO-Architektur mit Tracking-Trennung, Analytics-Tool (Plausible) mit Begründung, Cookie-Banner-Strategie nach TTDSG, Newsletter-Tool (Brevo) mit Begründung, Hosting (All-Inkl), Domain-Konfiguration HTTPS und www-Redirect, Kontaktformular mit Honeypot, Datenschutzerklärung-Pflichtinhalte, Impressum-Pflichtinhalte wörtlich aus Auftrag, Auftragsverarbeitungs-Vertrags-Pflicht-Liste pro Anbieter, Server-Logs-Aufbewahrung konkret, Performance-Budget mit allen KB-Schwellen, Schrift-Strategie, Bilder-Strategie, iFrame-Strategie, JavaScript- und CSS-Strategie, Bau-Reviews, Accessibility WCAG 2.2 AA mit Tastatur-Navigation, Focus-States, Semantik, Aria, Kontrast, Reduced-Motion, Lang-Attribut, Tabulator-Reihenfolge, Touch-Targets, Reading-Order, Audit-Schwellen, Browser-Support mit Progressive Enhancement, Polyfill-Strategie, Versionierung mit GitHub-Workflow, Versions-Tags, Backup-Strategie, Rollback-Plan, Tech-Stack-Konkretisierung mit Astro-Projekt-Datei-Struktur, Naming-Convention, Tailwind-Theme-Extension, Astro-Konfiguration, Frontmatter-Konvention, Changelog.

Andre-Regeln Proimma. Sie-Form durchgehend (in technischer Spezifikation soweit semantisch sinnvoll), keine Trennstriche, keine strukturierende Fettschrift, Bullet-Points ausschließlich in numerierten Auswahl-Listen und Tabellen als Datenstruktur, keine verbotenen Floskeln. „Proimma" mit kleinem i durchgehend. „mehr als zwanzig Jahre" exakt so geschrieben (in Datenpunkt-Beispiel). Schwesterfirma Immobilien Ratgeber strikt ausgeklammert. Strikte Ausschlüsse eingehalten. Externe Kommunikationsregel eingehalten (info@proimma.de als einzige Adresse, einheitliche § 34c-Formulierung mit Aktenzeichen wörtlich, Provisionslogik § 656c BGB transparent, Vermögensschadenhaftpflicht-Mindestsummen aus § 15 ImmVV sachlich integriert, Erreichbarkeits-Versprechen sachlich ohne 48-Stunden-extern-Ausspielung gemäß Texter-Briefing 27.04.2026).

Schärfe. Pro Komponente alle States mit Bau-Spezifikation konkret. Pro Tool eine Empfehlung mit Begründung, nicht „prüfen Sie verschiedene Tools". Pro Schwelle ein konkreter Wert, nicht „möglichst niedrig". Pro Schema-Typ die geforderten Felder benannt, nicht „Schema.org einbinden". Wagemut-Setzungen aus Bau-Auswahl in der Komponenten-Bibliothek umgesetzt (Editorial-Index, Datenpunkt mit Tabular Nums, Hairline statt Schatten, Hellblau-Akzent ausschließlich auf Akzent-Funktion). Eine offene DSGVO-Stelle (Cal.com-Drittlandübermittlung) ist transparent als nachzuholend in Teil 5 markiert. Aussagen über Tool-Lizenzkosten sind als Schätzwerte erkennbar, weil Anbieter ihre Tarife ändern können.
