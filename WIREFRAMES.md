# WIREFRAMES.md Webseiten-Relaunch Proimma GmbH Phase 1

Wireframe-Konzept Mobile und Desktop getrennt. Stand 28.04.2026. Verbindliche Layout-Spezifikation für den späteren Bau-Chat „Webseiten-Relaunch Proimma Phase 1". Grundlage Bau-Auswahl-2026.md (acht ÜBERNEHMEN-Vorschläge plus Synthese-Wagemut V14, Phasen-Sequenzierung 1a, 1b, 1c) und DESIGN.md (Komponenten-Bibliothek, Farb- und Typografie-Tokens, Spacing-System, Animation-Sprache, Conversion-Architektur in Sektion 15).

## Konventionen

Viewports. Mobile-Wireframe auf 375 Pixel Viewport-Breite, Desktop-Wireframe auf 1440 Pixel Viewport-Breite. Container-max-width auf Desktop 1280 Pixel mit horizontalem Padding 96 Pixel je Seite, Margin 80 Pixel links und rechts auf 1440-Pixel-Viewport. Container-Padding Mobile 24 Pixel je Seite. Tablet-Reduktion 768 Pixel im Bau-Chat über Tailwind-Breakpoints abgedeckt, Wireframe-Pflicht aber ausschließlich Mobile und Desktop gemäß Auftrag.

Komponenten-Verweise. Sektions-Komponenten aus Bau-Auswahl-2026.md werden mit V1 bis V14 referenziert (V1 Editorial-Header, V2 Editorial-Hero, V3 Hero-Datenpunkte, V4 Mietenverwaltung Magazin-Band, V5 SVG-Prozess-Visualisierung in Phase 1c, V6 Maklerei Magazin-Band, V7 Substanz-Datenpunkte, V8 Empfehlungspartner in Phase 2 vertagt, V9 Editorial-Personenprofil, V10 Cal.com-Termin-Sektion, V11 Erreichbarkeits-Versprechen, V12 Dunkelblauer Footer, V13 Print-Impressum-Wagemut in Phase 1c Stretch, V14 Editorial-Verzichtsblock). Bibliotheks-Komponenten aus DESIGN.md Sektion 5 werden mit Sektions-Nummer referenziert (5.1 Header, 5.2 Buttons, 5.3 Form-Inputs, 5.4 Editorial-Index, 5.5 Datenpunkt, 5.6 Magazin-Band, 5.7 Cal.com-Embed, 5.8 Hairline, 5.9 Footer, 5.10 Edge-Case-Komponenten, 5.11 Breadcrumb, 5.12 Editorial-Karte, 5.13 Bild-Komponente, 5.14 Newsletter-Form, 5.15 Modal-Hamburger-Menu).

Token-Verweise. Spacing-Tokens space-2xs bis space-4xl gemäß DESIGN.md Sektion 4. Type-Scale-Tokens display-xxl bis caption gemäß DESIGN.md Sektion 3. Farb-Tokens color-bg-primary, color-fg-primary, color-accent, color-footer-bg gemäß DESIGN.md Sektion 2.

Conversion-Tracking-Marker. Pro Sektion ein data-sektion-Attribut für Sektion-View-Tracking. Pro Primär- und Tertiär-Button ein data-cta-Attribut für CTA-Hover-Tracking. Pro Hausverwaltungs-, Maklerei- und Themen-Hub-Artikel-Seite vier data-lese-marker-Elemente bei 25, 50, 75, 100 Prozent Lese-Tiefe. Pro Hauptseite zwei data-scroll-marker-Elemente bei 50 und 90 Prozent Scroll-Tiefe. Konkrete Werte gemäß DESIGN.md Sektion 15.

ASCII-Notation. Box-Drawing-Characters ┌─┐│└┘├┤ für Sektions-Begrenzungen. Höhen-Angaben in Pixel-Richtwerten, abhängig von Inhalts-Länge variabel. Sektions-Begrenzung in Mobile-Wireframes durch volle Viewport-Breite, in Desktop-Wireframes durch Container-Breite mit sichtbaren Container-Margins.

Phasen-Markierung. Sektionen aus Phase 1a tragen Marker (1a) am Sektions-Ende, Phase 1b (1b), Phase 1c (1c). Sektionen ohne Marker sind Pflicht-Beigaben (Header, Footer).

Touch-Target-Mindestgröße auf Mobile. Alle interaktiven Elemente (Primär-, Sekundär-, Tertiär-Buttons, Links in Topnavigation, Hamburger-Icon, Footer-Links, Cal.com-iFrame-Trigger, Form-Inputs) erfüllen die WCAG-2.2-AA-Pflicht von mindestens 44 mal 44 CSS-Pixeln Touch-Target. Buttons mit vertikalem Padding 16 Pixel und 17-Pixel-Schrift erreichen das automatisch (16+17+16 = 49 Pixel Höhe). Hamburger-Icon mit Padding 12 Pixel um ein 20-Pixel-Icon erreicht 44 Pixel. Footer-Links erhalten Padding 8 Pixel vertikal, sodass sie auf Mobile mindestens 33 Pixel hoch werden, plus Tap-Highlight-Color, sodass die Touch-Trefferfläche durch Browser-Standard auf 44 Pixel erweitert wird. Diese Pflicht-Disziplin ist in allen Wireframes nicht visualisiert, weil ASCII-Skelette die Pixel-Genauigkeit nicht abbilden, gilt aber als verbindliche Bauauflage für den Bau-Chat.

## 1. Startseite

Sektions-Stack von oben nach unten. Erstens Header (5.1, durchlaufend). Zweitens Hero V2 mit XXL-Display-Headline plus Hero-Datenpunkte V3 (1a). Drittens Editorial-Verzichtsblock V14 als zweite Sektion mit Editorial-Index 03 (1b). Viertens Säulen-Übersicht in zwei kompakten Editorial-Bändern (Verlinkung zur Hausverwaltungs- und Maklerei-Hauptseite, jeweils mit Editorial-Index 04 und 05) (1b). Fünftens Substanz-Datenpunkte V7 als Vertrauens-Sektion mit Editorial-Index 06 (1b). Sechstens Personenprofil-Kachel V9 in kompakter Form mit Verlinkung auf Über-Proimma-Seite, Editorial-Index 07 (1b). Siebtens Themen-Hub-Vorschau mit drei der vier Erstartikel als Editorial-Karten 5.12, Editorial-Index 08 (1b). Achtens Cal.com-Termin-Sektion V10 als Conversion-Block, Editorial-Index 09 (1b). Neuntens Footer V12 (durchlaufend).

Mobile-Wireframe 375 Pixel.

```
┌─────────────────────────────────────┐
│ Proimma                          ☰  │  Header 64px
│                                     │  Hairline #D9D9D9
├─────────────────────────────────────┤
│                                     │
│ ─── 01                              │  Editorial-Index space-m
│                                     │  Hellblau-Akzentstrich
│ Hausverwaltung                      │  display-xxl 56px
│ und Maklerei                        │  Light, Anthrazit
│ in Rostock.                         │  Line-Height 1.05
│ Inhaber-                            │  Letter-Spacing -0.02em
│ geführt.                            │
│ Fokussiert.                         │
│                                     │
│ ──                                  │  Hairline 64px
│                                     │
│ Mietenverwaltung und                │  body-l 19px
│ Vermarktung von Wohn-               │  Subline grau
│ immobilien für Eigentümer           │
│ in Rostock und Umgebung.            │
│                                     │
│ [Erstgespräch vereinbaren →]        │  Primär-Button
│                                     │  data-cta="hero-cta"
└─────────────────────────────────────┘  Hero-Sektion ~700px (1a)
                                         data-sektion="hero"
┌─────────────────────────────────────┐
│ ─── 02                              │  Editorial-Index
│                                     │
│ 48 Stunden                          │  display-l 40px
│ Antwortzeit werktags                │  caption 13px
│                                     │  Hairline-Trenner
│ Auf Eigentümer-Anfragen werktags    │  body-m 17px
│ innerhalb von 48 Stunden,           │
│ verbindlich.                        │
│                                     │
│ ──                                  │
│                                     │
│ 24/7                                │
│ Notfall-Erreichbarkeit Mieter       │
│                                     │
│ Eine separate Notfall-Nummer        │
│ für Mieter, unabhängig von          │
│ Bürozeiten.                         │
│                                     │
│ ──                                  │
│                                     │
│ mehr als 20                         │
│ Jahre Branchenerfahrung             │
│                                     │
│ Stationen als Immobilienkaufmann,   │
│ Asset Manager dänischer Fonds,      │
│ Hausverwalter und Bewirtschafter.   │
└─────────────────────────────────────┘  Hero-Datenpunkte (1a)
                                         data-sektion="datenpunkte"
                                         data-scroll-marker="50"
┌─────────────────────────────────────┐
│ ─── 03 Was bei Proimma              │  V14 Verzichtsblock
│       nicht stattfindet             │  display-l Editorial
│                                     │
│ ──                                  │
│ Keine Verwaltung von                │  body-l
│ Gewerbeimmobilien.                  │
│ ──                                  │
│ Keine WEG-Verwaltung als            │
│ Marketing-Schwerpunkt.              │
│ ──                                  │
│ Keine Vermarktung im                │
│ Coaching-Format.                    │
│ ──                                  │
│ Keine Standard-Pakete in            │
│ der Mietenverwaltung.               │
│                                     │
│ Die Mechanik der Arbeit erklären    │  body-m
│ wir offen. Was wir nicht anbieten,  │
│ ist genauso Teil des Profils.       │
└─────────────────────────────────────┘  Verzichtsblock (1b)
                                         data-sektion="verzichtsblock"
┌─────────────────────────────────────┐
│ ─── 04 Mietenverwaltung             │  Säulen-Übersicht
│                                     │
│ Mietenverwaltung für Eigentümer     │  body-l
│ von Mehrfamilienhäusern und         │
│ Wohn- und Geschäftshäusern.         │
│                                     │
│ [Mehr zur Mietenverwaltung →]       │  Tertiär-Button
│                                     │  data-cta="saeule-mietenverwaltung"
│ ──                                  │
│                                     │
│ ─── 05 Maklerei                     │
│                                     │
│ Vermarktung von Wohnimmobilien      │
│ vom Einfamilienhaus über die        │
│ Eigentumswohnung bis zum            │
│ Mehrfamilienhaus und Grundstück.    │
│                                     │
│ [Mehr zur Maklerei →]               │  Tertiär-Button
│                                     │  data-cta="saeule-maklerei"
└─────────────────────────────────────┘  Säulen-Übersicht (1b)
                                         data-sektion="saeulen"
┌─────────────────────────────────────┐
│ ─── 06 Substanz statt               │  V7 Vertrauensanker
│       Behauptung                    │  display-l
│                                     │
│ ──                                  │  Hairline-Sektionierung
│ Mehr als zwanzig Jahre              │  body-l
│ Branchenerfahrung des Inhabers.     │
│ ──                                  │
│ Werktags 9 bis 17 Uhr unter         │
│ 0173-6335917 erreichbar.            │
│ ──                                  │
│ Notfall-Erreichbarkeit für          │
│ Mieter rund um die Uhr.             │
│ ──                                  │
│ Vermögensschadenhaftpflicht         │
│ gemäß § 15 ImmVV mit Mindest-       │
│ summen 500.000 Euro je Fall         │
│ und 1 Million Euro pro Jahr.        │
│ ──                                  │
│ Erlaubnis nach § 34c Abs. 1         │
│ Satz 1 Nr. 1 und Nr. 4 GewO,        │
│ Aktenzeichen gew-1270-2024-AD3231.  │
└─────────────────────────────────────┘  Substanz-Datenpunkte (1b)
                                         data-sektion="vertrauen"
┌─────────────────────────────────────┐
│ ─── 07 Inhaber                      │  V9 Personenprofil-Kachel
│                                     │
│ ┌─────────────────────────────┐     │
│ │   [Portrait André,          │     │  Bild 4:5 aspect-ratio
│ │    Editorial-Anmutung]      │     │  AVIF mit WebP-Fallback
│ │                             │     │  alt: „André Dieckmann,
│ └─────────────────────────────┘     │  Inhaber Proimma GmbH"
│                                     │
│ André Dieckmann                     │  h2 30px Light
│ Inhaber und Geschäftsführer         │  caption #717171
│                                     │
│ Mehr als zwanzig Jahre Branchen-    │  body-m
│ erfahrung in der Immobilien-        │
│ wirtschaft. Stationen als           │
│ Immobilienkaufmann, Asset           │
│ Manager dänischer Fonds, Mit-       │
│ aufbau einer Hausverwaltung,        │
│ Tätigkeit als Hausverwalter         │
│ und Bewirtschafter.                 │
│                                     │
│ [Mehr über André →]                 │  Tertiär-Button
└─────────────────────────────────────┘  Personenprofil (1b)
                                         data-sektion="personenprofil"
┌─────────────────────────────────────┐
│ ─── 08 Wissen für Eigentümer        │  Themen-Hub-Vorschau
│                                     │  display-l
│ ──                                  │
│ 01 Hausverwaltung wechseln          │  Editorial-Karte 5.12
│    7 Min Lesezeit · 27.04.2026      │  caption Tabular Nums
│    Worauf Eigentümer beim Wechsel   │  body-m Anriss
│    der Hausverwaltung achten.       │
│ ──                                  │
│ 02 Bestandsübergabe                 │
│    8 Min Lesezeit · 27.04.2026      │
│    Wie eine saubere Übergabe        │
│    kaufmännisch und technisch       │
│    abläuft.                         │
│ ──                                  │
│ 03 Maklerprovision § 656c BGB       │
│    6 Min Lesezeit · 27.04.2026      │
│    Wie die Provision konkret        │
│    gerechnet wird.                  │
│ ──                                  │
│                                     │
│ [Alle Beiträge im Themen-Hub →]     │  Tertiär-Button
└─────────────────────────────────────┘  Themen-Hub-Vorschau (1b)
                                         data-sektion="themen-hub"
                                         data-scroll-marker="90"
┌─────────────────────────────────────┐
│ ─── 09 Erstgespräch vereinbaren     │  V10 Cal.com-Sektion
│                                     │  display-l
│ Dauer 30 Minuten                    │  Datenpunkte
│ Kostenfrei                          │
│ Online via Zoom oder vor Ort        │
│                                     │
│ ──                                  │
│                                     │
│ ┌─────────────────────────────┐     │  Cal.com iFrame 5.7
│ │                             │     │  Lazy-Load
│ │  [Cal.com Buchungs-iFrame]  │     │  ~600px Höhe
│ │                             │     │
│ └─────────────────────────────┘     │
│                                     │
│ Falls die Termin-Anzeige nicht      │  body-s Fallback
│ lädt, schreiben Sie an              │
│ info@proimma.de oder rufen          │
│ Sie unter 0173-6335917 an.          │
└─────────────────────────────────────┘  Cal.com-Sektion (1b)
                                         data-sektion="cal-embed"
┌─────────────────────────────────────┐
│ Proimma                             │  Footer V12
│                                     │  display-l Print-Echo
│ Bremer Straße 12                    │  body-m
│ 18057 Rostock                       │
│ 0173-6335917                        │
│ info@proimma.de                     │
│                                     │
│ ──                                  │
│                                     │
│ Hausverwaltung                      │  Service-Links
│ Maklerei                            │
│ Über Proimma                        │
│ Themen-Hub                          │
│                                     │
│ ──                                  │
│                                     │
│ Erlaubnis nach § 34c Abs. 1         │  caption
│ Satz 1 Nr. 1 und Nr. 4 GewO,        │  Off-White auf Dunkelblau
│ Bescheid Hansestadt Rostock         │
│ vom 31.03.2026, Aktenzeichen        │
│ gew-1270-2024-AD3231.               │
│                                     │
│ Vermögensschadenhaftpflicht         │
│ gemäß § 15 ImmVV.                   │
│                                     │
│ Werktags 9 bis 17 Uhr erreichbar.   │
│ Notfall-Erreichbarkeit für          │
│ Mieter rund um die Uhr über die     │
│ separate Nummer im Mietvertrag.     │
│                                     │
│ ──                                  │
│                                     │
│ Impressum  Datenschutz              │  Pflicht-Links
│ AGB Hausverwaltung                  │
│ EU-Online-Streitbeilegung           │
└─────────────────────────────────────┘  Footer Dunkelblau ~900px
                                         data-sektion="footer"
```

Desktop-Wireframe 1440 Pixel mit Container 1280 Pixel zentriert.

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ Proimma             Hausverwaltung  Maklerei  Themen-Hub  Über Proimma  Kontakt │   │  Header 80px
│ │ ────────────────────────────────────────────────────────────────────────────── │   │  Hairline #D9D9D9
│ └────────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 01                                                                         │   │  Editorial-Index
│ │                                                                                │   │  Hellblau-Strich
│ │ Hausverwaltung und Maklerei                                                    │   │  display-xxl 128px
│ │ in Rostock.                                                                    │   │  Light Anthrazit
│ │ Inhabergeführt. Fokussiert.                                                    │   │
│ │                                                                                │   │
│ │ ────                                                                           │   │  Hairline 96px
│ │                                                                                │   │
│ │ Mietenverwaltung und Vermarktung von                                           │   │  body-l 19px
│ │ Wohnimmobilien für Eigentümer in Rostock und Umgebung.                         │   │  Subline grau
│ │                                                                                │   │
│ │ [Erstgespräch vereinbaren →]                                                   │   │  Primär-Button
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Hero ~720px (1a)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 02                                                                         │   │  Hero-Datenpunkte
│ │                                                                                │   │  3 Spalten asymmetrisch
│ │ ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐                 │   │
│ │ │ ──               │ │ ──               │ │ ──               │                 │   │
│ │ │ 48 Stunden       │ │ 24/7             │ │ mehr als 20      │                 │   │  display-l 72px
│ │ │ Antwortzeit      │ │ Notfall          │ │ Jahre Erfahrung  │                 │   │  caption Label
│ │ │ werktags         │ │ Mieter           │ │                  │                 │   │
│ │ │ Auf Eigentümer-  │ │ Eine separate    │ │ Stationen als    │                 │   │  body-m
│ │ │ Anfragen werk-   │ │ Notfall-Nummer.. │ │ Immobilien-      │                 │   │
│ │ │ tags innerhalb…  │ │                  │ │ kaufmann…        │                 │   │
│ │ └──────────────────┘ └──────────────────┘ └──────────────────┘                 │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Datenpunkte ~340px (1a)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 03 Was bei Proimma nicht stattfindet                                       │   │  V14 Verzichtsblock
│ │                                                                                │   │  display-l auf Spalten 1-7
│ │ ──                                                                             │   │  Hairlines auf Spalten 1-12
│ │ Keine Verwaltung von Gewerbeimmobilien.                                        │   │  body-l auf Spalten 1-7
│ │ ──                                                                             │   │  Begleittext rechts auf
│ │ Keine WEG-Verwaltung als Marketing-Schwerpunkt.       Die Mechanik der Arbeit  │   │  Spalten 9-12
│ │ ──                                                    erklären wir offen.       │   │
│ │ Keine Vermarktung im Coaching-Format.                 Was wir nicht anbieten,  │   │
│ │ ──                                                    ist genauso Teil des     │   │
│ │ Keine Standard-Pakete in der Mietenverwaltung.        Profils.                 │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Verzichtsblock ~480px (1b)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 04 Mietenverwaltung           ─── 05 Maklerei                              │   │  Säulen-Übersicht
│ │                                                                                │   │  2 Spalten 6+6
│ │ Mietenverwaltung für Eigen-       Vermarktung von Wohnimmobilien               │   │  display-l Headline
│ │ tümer von Mehrfamilienhäusern     vom Einfamilienhaus über die                 │   │  body-l Klartext
│ │ und Wohn- und Geschäftshäusern.   Eigentumswohnung bis zum                     │   │
│ │                                   Mehrfamilienhaus und Grundstück.             │   │
│ │ [Mehr zur Mietenverwaltung →]     [Mehr zur Maklerei →]                        │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Säulen ~360px (1b)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 06 Substanz statt Behauptung                                               │   │  V7 Vertrauen
│ │                                                                                │   │
│ │ ──                                                                             │   │  Print-inspirierte
│ │ Mehr als zwanzig Jahre Branchenerfahrung des Inhabers.                         │   │  Sektionierung mit
│ │ ──                                                                             │   │  Hairlines 100% Breite
│ │ Werktags 9 bis 17 Uhr unter 0173-6335917 erreichbar.                           │   │  body-l auf Spalten 1-12
│ │ ──                                                                             │   │
│ │ Notfall-Erreichbarkeit für Mieter rund um die Uhr.                             │   │
│ │ ──                                                                             │   │
│ │ Vermögensschadenhaftpflicht gemäß § 15 ImmVV mit Mindestsummen                 │   │
│ │ 500.000 Euro je Fall und 1 Million Euro pro Jahr.                              │   │
│ │ ──                                                                             │   │
│ │ Erlaubnis nach § 34c Abs. 1 Satz 1 Nr. 1 und Nr. 4 GewO,                       │   │
│ │ Aktenzeichen gew-1270-2024-AD3231.                                             │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Vertrauen ~520px (1b)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 07 Inhaber                                                                 │   │  V9 Personenprofil
│ │                                                                                │   │  Asymmetrisches Grid
│ │ ┌──────────────────┐  André Dieckmann                                          │   │  Bild auf Spalten 1-5
│ │ │                  │  Inhaber und Geschäftsführer                              │   │  Klartext auf Spalten 7-12
│ │ │   [Portrait]     │                                                           │   │
│ │ │                  │  Mehr als zwanzig Jahre Branchenerfahrung in der          │   │  body-l
│ │ │                  │  Immobilienwirtschaft. Stationen als Immobilien-          │   │
│ │ └──────────────────┘  kaufmann, Asset Manager dänischer Fonds, Mitaufbau       │   │
│ │                       einer Hausverwaltung, Tätigkeit als Hausverwalter        │   │
│ │                       und Bewirtschafter.                                      │   │
│ │                                                                                │   │
│ │                       [Mehr über André →]                                      │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Personenprofil ~600px (1b)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 08 Wissen für Eigentümer                                                   │   │  Themen-Hub-Vorschau
│ │                                                                                │   │  Editorial-Karten 5.12
│ │ ──                                                                             │   │  als horizontale Zeilen
│ │ 01  Hausverwaltung wechseln                          7 Min · 27.04.2026        │   │
│ │     Worauf Eigentümer beim Wechsel der Hausverwaltung achten.                  │   │
│ │ ──                                                                             │   │
│ │ 02  Bestandsübergabe                                 8 Min · 27.04.2026        │   │
│ │     Wie eine saubere Bestandsübergabe kaufmännisch und technisch abläuft.      │   │
│ │ ──                                                                             │   │
│ │ 03  Maklerprovision § 656c BGB                       6 Min · 27.04.2026        │   │
│ │     Wie die Maklerprovision konkret gerechnet wird.                            │   │
│ │ ──                                                                             │   │
│ │                                                                                │   │
│ │ [Alle Beiträge im Themen-Hub →]                                                │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Themen-Hub ~520px (1b)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 09 Erstgespräch vereinbaren                                                │   │  V10 Cal.com-Sektion
│ │                                                                                │   │
│ │ Dauer 30 Minuten · Kostenfrei · Online via Zoom oder vor Ort                   │   │  3 Datenpunkte horizontal
│ │ ──                                                                             │   │  Hairline
│ │                                                                                │   │
│ │       ┌──────────────────────────────────────────────┐                         │   │
│ │       │                                              │                         │   │  Cal.com-iFrame
│ │       │      [Cal.com Buchungs-iFrame]               │                         │   │  zentriert max-width 800px
│ │       │                                              │                         │   │  Lazy-Load
│ │       └──────────────────────────────────────────────┘                         │   │
│ │                                                                                │   │
│ │ Falls die Termin-Anzeige nicht lädt, schreiben Sie an info@proimma.de          │   │  body-s Fallback
│ │ oder rufen Sie unter 0173-6335917 an.                                          │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Cal.com-Sektion ~720px (1b)
│                                                                                      │
└──────────────────────────────────────────────────────────────────────────────────────┘
┌──────────────────────────────────────────────────────────────────────────────────────┐  Footer V12 Dunkelblau
│                                                                                      │  Volle Viewport-Breite
│      Proimma                                                                         │  display-l Print-Echo
│                                                                                      │
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────────────────────────────────────┐   │  3-Spalten-Grid
│ │ Kontakt      │ │ Service      │ │ Rechtliches                                  │   │
│ │ Bremer Str.. │ │ Hausver-     │ │ Erlaubnis nach § 34c Abs. 1 Satz 1 Nr. 1     │   │
│ │ 18057 Rost.. │ │ waltung      │ │ und Nr. 4 GewO, Bescheid Hansestadt Rostock  │   │
│ │ 0173-633591. │ │ Maklerei     │ │ vom 31.03.2026, Aktenzeichen                 │   │
│ │ info@proi..  │ │ Über Proimma │ │ gew-1270-2024-AD3231.                        │   │
│ │              │ │ Themen-Hub   │ │                                              │   │
│ │ Werktags 9-  │ │              │ │ Vermögensschadenhaftpflicht § 15 ImmVV.      │   │
│ │ 17 Uhr…      │ │              │ │                                              │   │
│ │              │ │              │ │ Impressum · Datenschutz · AGB Hausverwal-    │   │
│ │              │ │              │ │ tung · EU-Online-Streitbeilegung             │   │
│ └──────────────┘ └──────────────┘ └──────────────────────────────────────────────┘   │
│                                                                                      │  Footer Dunkelblau ~600px
└──────────────────────────────────────────────────────────────────────────────────────┘
```

Mobile-Reduktions-Notizen Startseite. Container-Padding 24 Pixel, Sektions-Abstand space-xl (96 Pixel) statt space-3xl. Zwei-Spalten-Säulen-Übersicht wird zu vertikalem Stack, Reihenfolge Mietenverwaltung über Maklerei. Personenprofil-Asymmetrie wird zu vertikalem Stack mit Bild über Klartext. Footer-Drei-Spalten-Grid wird zu vertikalem Stack in Reihenfolge Kontakt, Service, Rechtliches.

## 2. Hausverwaltung

Sektions-Stack. Erstens Header (durchlaufend). Zweitens Sektions-Hero mit Editorial-Index 01 und display-xl-Headline „Mietenverwaltung für Mehrfamilienhäuser" (1a). Drittens V4 Mietenverwaltungs-Magazin-Band mit vier Service-Punkten (1b). Viertens V5-Min Statische SVG-Stufenleiter Übernahme-Prozess in fünf Schritten (1c, falls Phase-1c gebaut, sonst weggelassen oder auf Phase 2 vertagt). Fünftens Erreichbarkeits-Sektion V11 mit Klartext-Zeile und Tabular-Nums-Service-Zeiten (1b). Sechstens Cal.com-Termin-Sektion V10 in kompakter Variante mit Headline „Erstgespräch zur Mietenverwaltung vereinbaren" (1b). Siebtens Footer (durchlaufend).

Mobile-Wireframe 375 Pixel.

```
┌─────────────────────────────────────┐
│ Proimma                          ☰  │  Header
├─────────────────────────────────────┤
│                                     │
│ ─── 01 Mietenverwaltung             │  Sektions-Hero
│                                     │
│ Mietenverwaltung                    │  display-xl 48px
│ für Mehrfamilien-                   │  Light
│ häuser in                           │
│ Rostock.                            │
│                                     │
│ ──                                  │
│                                     │
│ Eigentümer von Mehrfamilienhäusern  │  body-l Subline
│ und Wohn- und Geschäftshäusern in   │
│ Rostock und Umgebung. Mit klarer    │
│ Mechanik der Bestandsübernahme.     │
│                                     │
│ [Erstgespräch vereinbaren →]        │  Primär-Button
└─────────────────────────────────────┘  Sektions-Hero ~600px (1a)
                                         data-sektion="hero-hausverwaltung"
┌─────────────────────────────────────┐
│ ─── 02 Was Mietenverwaltung         │  V4 Magazin-Band
│       bei Proimma bedeutet          │  display-l 40px
│                                     │
│ Sachliche Definition der Mieten-    │  body-l Klartext
│ verwaltung. Abgrenzung gegen        │  2 Absätze
│ andere Verwaltungs-Formate.         │
│                                     │
│ ──                                  │  Hairlines zwischen
│ Bewirtschaftung                     │  Service-Punkten
│ Antwortzyklus 24 bis 48 Std         │  Tabular-Nums
│ Mietfestsetzung, Anpassungen,       │  body-m
│ Indexierung.                        │
│ ──                                  │
│ Mieterkommunikation                 │
│ Werktags 9 bis 17 Uhr               │
│ Persönliche Ansprache, schrift-     │
│ liche Korrespondenz, Notfall-       │
│ Pfad nachts und am Wochenende.      │
│ ──                                  │
│ Buchhaltung                         │
│ Monatlicher Reporting-Zyklus        │
│ Nebenkostenabrechnung, Eigen-       │
│ tümer-Reporting, Steuerunter-       │
│ lagen.                              │
│ ──                                  │
│ Wartung                             │
│ Festes Hausmeisternetz              │
│ Routineprüfungen, Mängel-           │
│ behebung, Handwerker-Koor-          │
│ dination.                           │
└─────────────────────────────────────┘  Magazin-Band (1b)
                                         data-sektion="mietenverwaltung-band"
                                         data-lese-marker="25,50,75"
┌─────────────────────────────────────┐
│ ─── 03 Übernahme-Prozess (1c)       │  V5-Min SVG-Stufenleiter
│                                     │  optional Phase 1c
│ 01  Erstgespräch                    │  display-l 40px
│     ──                              │
│     30 Minuten online oder          │  body-m
│     vor Ort. Klärung der Aus-       │
│     gangslage und der Erwartungen.  │
│                                     │
│ 02  Objekt-Sichtung                 │
│     ──                              │
│     Begehung des Objekts mit        │
│     dem Eigentümer.                 │
│                                     │
│ 03  Übergabe-Termin                 │
│     ──                              │
│     Mit dem Vorvermieter, Über-     │
│     gabe der Bestandsdaten.         │
│                                     │
│ 04  Technische Übernahme            │
│     ──                              │
│     Schlüssel, Zählerstände,        │
│     Mängelliste.                    │
│                                     │
│ 05  Laufende Verwaltung             │
│     ──                              │
│     Start des regulären Betriebs.   │
└─────────────────────────────────────┘  SVG-Stufenleiter (1c)
                                         data-sektion="uebernahme-prozess"
                                         data-lese-marker="100"
┌─────────────────────────────────────┐
│ ─── 04 Erreichbarkeit               │  V11 Min
│                                     │
│ Werktags 9 bis 17 Uhr unter         │  body-l
│ 0173-6335917 und info@proimma.de.   │
│                                     │
│ Notfall-Erreichbarkeit für Mieter   │
│ rund um die Uhr über die separate   │
│ Notfall-Nummer im Mietvertrag.      │
└─────────────────────────────────────┘  Erreichbarkeit (1b)
                                         data-sektion="erreichbarkeit-hv"
┌─────────────────────────────────────┐
│ ─── 05 Erstgespräch zur             │  V10 Cal.com kompakt
│       Mietenverwaltung              │
│       vereinbaren                   │
│                                     │
│ ┌─────────────────────────────┐     │
│ │  [Cal.com Buchungs-iFrame]  │     │  Lazy-Load
│ └─────────────────────────────┘     │
└─────────────────────────────────────┘  Cal.com kompakt (1b)
                                         data-sektion="cal-embed-hv"
[Footer wie Startseite]
```

Desktop-Wireframe 1440 Pixel mit Container 1280 Pixel.

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ [Header wie Startseite]                                                              │
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 01 Mietenverwaltung                                                        │   │  Sektions-Hero
│ │                                                                                │   │
│ │ Mietenverwaltung für                                                           │   │  display-xl 96px
│ │ Mehrfamilienhäuser                                                             │   │  Light
│ │ in Rostock.                                                                    │   │
│ │                                                                                │   │
│ │ ────                                                                           │   │  Hairline 96px
│ │                                                                                │   │
│ │ Eigentümer von Mehrfamilienhäusern und Wohn- und                               │   │  body-l Subline
│ │ Geschäftshäusern in Rostock und Umgebung. Mit klarer                           │   │
│ │ Mechanik der Bestandsübernahme.                                                │   │
│ │                                                                                │   │
│ │ [Erstgespräch vereinbaren →]                                                   │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Hero ~520px (1a)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 02 Was Mietenverwaltung bei Proimma bedeutet                               │   │  V4 Magazin-Band
│ │                                                                                │   │  Asymmetrie:
│ │ Sachliche Definition der        ┌─ Bewirtschaftung                             │   │  Klartext Spalten 1-7
│ │ Mietenverwaltung. Abgrenzung    │  Antwortzyklus 24-48 Std                     │   │  Service-Punkte 9-12
│ │ gegen andere Verwaltungs-       │  Mietfestsetzung, Anpassungen,               │   │
│ │ Formate. Zwei kurze Absätze.    │  Indexierung.                                │   │
│ │                                 ├─ Mieterkommunikation                         │   │
│ │ Eigentümer haben den Inhaber    │  Werktags 9-17 Uhr                           │   │
│ │ als Ansprechpartner. Werktags   │  Persönliche Ansprache.                      │   │
│ │ Antwort innerhalb 48 Stunden.   ├─ Buchhaltung                                 │   │
│ │ Mieter-Notfälle separat über    │  Monatlicher Reporting-Zyklus                │   │
│ │ Notfall-Nummer rund um die Uhr. │  Nebenkostenabrechnung.                      │   │
│ │                                 ├─ Wartung                                     │   │
│ │                                 │  Festes Hausmeisternetz                      │   │
│ │                                 │  Routineprüfungen.                           │   │
│ │                                 └─                                             │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Magazin-Band ~600px (1b)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 03 Übernahme-Prozess (1c, optional)                                        │   │  V5-Min SVG-Stufenleiter
│ │                                                                                │   │  Horizontal mit 5 Schritten
│ │ ┌─────────┐──┌─────────┐──┌─────────┐──┌─────────┐──┌─────────┐                │   │
│ │ │ 01      │  │ 02      │  │ 03      │  │ 04      │  │ 05      │                │   │  Inline-SVG
│ │ │ Erst-   │  │ Objekt- │  │ Übergabe│  │ Tech.   │  │ Laufende│                │   │  caption + body-m
│ │ │ gespräch│  │ Sichtung│  │ -Termin │  │ Über-   │  │ Verwal- │                │   │
│ │ │         │  │         │  │         │  │ nahme   │  │ tung    │                │   │
│ │ │ 30 Min  │  │ Mit Eig.│  │ Vor-    │  │ Schlüs- │  │ Start   │                │   │
│ │ │ online  │  │ Begehung│  │ vermie- │  │ sel,    │  │ regulä- │                │   │
│ │ │ vor Ort │  │ Objekts │  │ ter     │  │ Zähler  │  │ rer Be- │                │   │
│ │ │         │  │         │  │ Daten   │  │ Mängel  │  │ trieb   │                │   │
│ │ └─────────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘                │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Stufenleiter ~400px (1c)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 04 Erreichbarkeit                                                          │   │  V11 Min
│ │                                                                                │   │  body-l zentriert
│ │ Werktags 9 bis 17 Uhr unter 0173-6335917 und info@proimma.de.                  │   │
│ │ Notfall-Erreichbarkeit für Mieter rund um die Uhr.                             │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Erreichbarkeit ~240px (1b)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 05 Erstgespräch zur Mietenverwaltung vereinbaren                           │   │  V10 Cal.com kompakt
│ │                                                                                │   │
│ │       ┌──────────────────────────────────────────────┐                         │   │
│ │       │      [Cal.com Buchungs-iFrame]               │                         │   │
│ │       └──────────────────────────────────────────────┘                         │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Cal.com ~600px (1b)
└──────────────────────────────────────────────────────────────────────────────────────┘
[Footer wie Startseite]
```

Mobile-Reduktions-Notizen Hausverwaltung. Magazin-Band-Asymmetrie wird zu vertikalem Stack, Klartext über Service-Punkten. SVG-Stufenleiter wird vertikal mit fünf gestapelten Schritten, jeder Schritt mit eigenem Editorial-Index 01 bis 05.

## 3. Maklerei

Sektions-Stack. Erstens Header. Zweitens Sektions-Hero mit Editorial-Index 01, display-xl-Headline „Wohnimmobilien verkaufen in Rostock" (1a). Drittens V6 Maklerei-Magazin-Band mit Spektrum-Beschreibung (Einfamilienhäuser, Doppel- und Reihenhäuser, Eigentumswohnungen, Mehrfamilienhäuser, Grundstücke) (1b). Viertens Provisionslogik § 656c BGB Klartext-Sektion mit Editorial-Index (1b). Fünftens Bewertungs-Sektion mit zwei bis vier echten Google-Bewertungen wörtlich plus Quellenangabe „Google-Bewertung" (1b, abhängig von Texter-Chat-Auswahl). Sechstens Cal.com-Termin-Sektion V10 kompakt mit Headline „Erstgespräch zur Vermarktung vereinbaren" (1b). Siebtens Footer.

Mobile-Wireframe 375 Pixel.

```
┌─────────────────────────────────────┐
│ Proimma                          ☰  │  Header
├─────────────────────────────────────┤
│                                     │
│ ─── 01 Maklerei                     │  Sektions-Hero
│                                     │
│ Wohnimmobilien                      │  display-xl 48px
│ verkaufen in                        │
│ Rostock.                            │
│                                     │
│ ──                                  │
│                                     │
│ Vermittlung von Einfamilienhäusern, │  body-l Subline
│ Doppel- und Reihenhäusern, Eigen-   │
│ tumswohnungen, Mehrfamilienhäusern  │
│ und Grundstücken in Rostock und     │
│ Umgebung.                           │
│                                     │
│ [Erstgespräch vereinbaren →]        │  Primär-Button
└─────────────────────────────────────┘  Sektions-Hero ~620px (1a)
                                         data-sektion="hero-maklerei"
┌─────────────────────────────────────┐
│ ─── 02 Was Maklerei bei             │  V6 Magazin-Band
│       Proimma umfasst               │
│                                     │
│ Im Auftrag von Eigentümern. Vom     │  body-l
│ Einfamilienhaus über die Eigen-     │
│ tumswohnung bis zum Mehrfamilien-   │
│ haus und Grundstück. Vermarktung    │
│ vorrangig in Rostock und Umgebung,  │
│ mit Schwerpunkt im Umkreis von      │
│ etwa 100 Kilometern, Einzel-        │
│ mandate auch darüber hinaus auf     │
│ Anfrage.                            │
│                                     │
│ ──                                  │
│ Vermarktungs-Zeitplan               │  Service-Datenpunkte
│ Üblicher Vermarktungs-Korridor      │  Tabular-Nums
│ ──                                  │
│ Kommunikations-Rhythmus             │
│ Wöchentlicher Statusbericht an      │
│ Eigentümer                          │
│ ──                                  │
│ Vermögensschadenhaftpflicht         │
│ § 15 ImmVV                          │
└─────────────────────────────────────┘  Magazin-Band (1b)
                                         data-sektion="maklerei-band"
                                         data-lese-marker="25,50"
┌─────────────────────────────────────┐
│ ─── 03 Provision § 656c BGB         │  Provisionslogik
│                                     │
│ Provision nach § 656c BGB,          │  body-l Klartext
│ geteilt zwischen Verkäufer und      │
│ Käufer.                             │
│                                     │
│ 7,14 % inklusive Mehrwertsteuer     │  display-l Tabular-Nums
│ vom notariellen Kaufpreis.          │
│                                     │
│ ──                                  │
│                                     │
│ 3,57 % je Seite, fällig nur im      │  body-l
│ Erfolgsfall.                        │
└─────────────────────────────────────┘  Provisionslogik (1b)
                                         data-sektion="provisionslogik"
                                         data-lese-marker="75"
┌─────────────────────────────────────┐
│ ─── 04 Stimmen von Auftraggebern    │  Bewertungs-Sektion
│                                     │
│ ──                                  │  Hairline-Trenner
│                                     │
│ [Echte Google-Bewertung 1 wörtlich, │  body-l Zitat
│ Auswahl folgt aus Texter-Chat]      │
│                                     │
│ Google-Bewertung                    │  caption Quelle
│                                     │
│ ──                                  │
│                                     │
│ [Echte Google-Bewertung 2 wörtlich] │
│                                     │
│ Google-Bewertung                    │
│                                     │
│ ──                                  │
│                                     │
│ [Echte Google-Bewertung 3 wörtlich] │
│                                     │
│ Google-Bewertung                    │
└─────────────────────────────────────┘  Bewertungs-Sektion (1b)
                                         data-sektion="bewertungen"
                                         data-lese-marker="100"
┌─────────────────────────────────────┐
│ ─── 05 Erstgespräch zur             │  V10 Cal.com kompakt
│       Vermarktung                   │
│       vereinbaren                   │
│                                     │
│ ┌─────────────────────────────┐     │
│ │  [Cal.com Buchungs-iFrame]  │     │  Lazy-Load
│ └─────────────────────────────┘     │
└─────────────────────────────────────┘  Cal.com kompakt (1b)
                                         data-sektion="cal-embed-maklerei"
[Footer wie Startseite]
```

Desktop-Wireframe 1440 Pixel mit Container 1280 Pixel.

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ [Header]                                                                             │
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 01 Maklerei                                                                │   │  Sektions-Hero
│ │                                                                                │   │
│ │ Wohnimmobilien verkaufen                                                       │   │  display-xl 96px
│ │ in Rostock.                                                                    │   │  Light
│ │                                                                                │   │
│ │ ────                                                                           │   │  Hairline 96px
│ │                                                                                │   │
│ │ Vermittlung von Einfamilienhäusern, Doppel- und Reihenhäusern,                 │   │  body-l Subline
│ │ Eigentumswohnungen, Mehrfamilienhäusern und Grundstücken in                    │   │
│ │ Rostock und Umgebung.                                                          │   │
│ │                                                                                │   │
│ │ [Erstgespräch vereinbaren →]                                                   │   │  Primär-Button
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Hero ~620px (1a)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 02 Was Maklerei bei Proimma umfasst                                        │   │  V6 Magazin-Band
│ │                                                                                │   │  Asymmetrie 7+5
│ │ Im Auftrag von Eigentümern. Vom    │  ── Vermarktungs-Zeitplan                 │   │  Klartext Sp. 1-7
│ │ Einfamilienhaus über die Eigen-    │     Üblicher Vermarktungs-                │   │  Service-Daten Sp. 9-12
│ │ tumswohnung bis zum Mehrfamilien-  │     Korridor                              │   │
│ │ haus und Grundstück. Vermarktung   │  ── Kommunikations-Rhythmus               │   │  body-l Klartext
│ │ vorrangig in Rostock und Umgebung, │     Wöchentlicher Status-                 │   │  Tabular-Nums Daten
│ │ mit Schwerpunkt im Umkreis von     │     bericht an Eigentümer                 │   │
│ │ etwa 100 Kilometern, Einzelmandate │  ── Vermögensschadenhaft-                 │   │
│ │ auch darüber hinaus auf Anfrage.   │     pflicht § 15 ImmVV                    │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Magazin-Band ~520px (1b)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 03 Provision § 656c BGB                                                    │   │  Provisionslogik
│ │                                                                                │   │
│ │       Provision nach § 656c BGB, geteilt zwischen Verkäufer und Käufer.        │   │  body-l zentriert
│ │                                                                                │   │
│ │                              7,14 %                                            │   │  display-xl 96px
│ │                       inklusive Mehrwertsteuer                                 │   │  Tabular-Nums
│ │                     vom notariellen Kaufpreis.                                 │   │  zentriert
│ │                                                                                │   │
│ │                                ────                                            │   │  Hairline 64px
│ │                                                                                │   │
│ │           3,57 % je Seite, fällig nur im Erfolgsfall.                          │   │  body-l zentriert
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Provisionslogik ~520px (1b)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 04 Stimmen von Auftraggebern                                               │   │  Bewertungs-Sektion
│ │                                                                                │   │  3 horizontale Editorial
│ │ ────────────────────────────────────────────────────────────────────────────── │   │  Karten mit Hairlines
│ │ [Echte Google-Bewertung 1, wörtlich, Auswahl folgt aus Texter-Chat]            │   │
│ │                                                       Google-Bewertung         │   │  body-l Zitat
│ │ ────────────────────────────────────────────────────────────────────────────── │   │  caption Quelle
│ │ [Echte Google-Bewertung 2, wörtlich]                                           │   │
│ │                                                       Google-Bewertung         │   │
│ │ ────────────────────────────────────────────────────────────────────────────── │   │
│ │ [Echte Google-Bewertung 3, wörtlich]                                           │   │
│ │                                                       Google-Bewertung         │   │
│ │ ────────────────────────────────────────────────────────────────────────────── │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Bewertungen ~600px (1b)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 05 Erstgespräch zur Vermarktung vereinbaren                                │   │  V10 Cal.com kompakt
│ │                                                                                │   │
│ │       ┌──────────────────────────────────────────────┐                         │   │
│ │       │      [Cal.com Buchungs-iFrame]               │                         │   │
│ │       └──────────────────────────────────────────────┘                         │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Cal.com ~600px (1b)
└──────────────────────────────────────────────────────────────────────────────────────┘
[Footer]
```

Mobile-Reduktions-Notizen Maklerei. Provisionslogik 7,14-Prozent-Aussage zentriert über volle Mobile-Breite. Bewertungs-Sektion bleibt vertikal gestapelt, ohne Karten-Layout, nur mit Hairline-Trennern.

## 4. Über Proimma

Sektions-Stack. Erstens Header. Zweitens Sektions-Hero mit Editorial-Index 01, display-xl-Headline „André Dieckmann, Inhaber" (1a). Drittens V9 Editorial-Personenprofil ausführlich mit Editorial-Mini-Story über die Arbeitsweise (Stretch-Variante, falls Bauzeit erlaubt, sonst Standard) (1b). Viertens Stamm-Daten-Sektion in print-inspirierter Setzung mit HRB 16077, USt-IdNr DE359185515, Steuernummer 079/116/01766, Gewerbeerlaubnis-Aktenzeichen, Vermögensschadenhaftpflicht-Mindestsummen (1b). Fünftens Backup-Netzwerk-Sektion gemäß Markenkern-Vorgabe (fester Hausmeisterdienst, ausgewählte Handwerker, ohne namentliche Erwähnung von Maik Krüger ohne dessen Zustimmung) (1b). Sechstens Empfehlungspartner-Klartext-Erwähnung als kompakte Sektion (V8-Min, in Phase 1 ohne Logo-Wand) (1b). Siebtens Cal.com-Termin-Sektion kompakt (1b). Achtens Footer.

Mobile-Wireframe 375 Pixel.

```
┌─────────────────────────────────────┐
│ Proimma                          ☰  │
├─────────────────────────────────────┤
│ ─── 01 Inhaber                      │
│                                     │
│ André                               │  display-xl 48px
│ Dieckmann                           │
│                                     │
│ ──                                  │
│                                     │
│ Inhaber und Geschäftsführer         │  body-l
│ der Proimma GmbH.                   │
└─────────────────────────────────────┘  Sektions-Hero ~480px (1a)

┌─────────────────────────────────────┐
│ ┌─────────────────────────────┐     │  V9 Personenprofil
│ │                             │     │  ausführlich
│ │   [Portrait André,          │     │  4:5 aspect-ratio
│ │    Editorial-Anmutung]      │     │
│ │                             │     │
│ └─────────────────────────────┘     │
│                                     │
│ ─── 02 Berufsbiografie              │
│                                     │
│ Mehr als zwanzig Jahre in der       │  body-l Editorial-
│ Immobilienwirtschaft.               │  Mini-Story
│                                     │
│ Als Immobilienkaufmann ausge-       │  3 Absätze
│ bildet, später Asset Manager        │  Wahrheitsregel
│ für einen dänischen Fonds, dann     │
│ Mitaufbau einer Hausverwaltung,     │
│ und zuletzt Tätigkeit als Haus-     │
│ verwalter und Bewirtschafter in     │
│ Anstellung.                         │
│                                     │
│ Heute Inhaber der Proimma GmbH      │
│ mit klarer Spezialisierung auf      │
│ Mietenverwaltung für Mehrfamilien-  │
│ häuser und Vermarktung von          │
│ Wohnimmobilien.                     │
└─────────────────────────────────────┘  Personenprofil (1b)
                                         data-sektion="personenprofil-detail"
                                         data-lese-marker="25,50"
┌─────────────────────────────────────┐
│ ─── 03 Belegbare Stamm-Daten        │  Stamm-Daten-Sektion
│                                     │
│ ──                                  │
│ Proimma GmbH                        │  body-l Print-inspiriert
│ Bremer Straße 12, 18057 Rostock     │
│ ──                                  │
│ HRB 16077 Amtsgericht Rostock       │  Tabular-Nums
│ ──                                  │
│ USt-IdNr DE359185515                │
│ ──                                  │
│ Steuernummer 079/116/01766          │
│ ──                                  │
│ Erlaubnis nach § 34c Abs. 1         │
│ Satz 1 Nr. 1 und Nr. 4 GewO,        │
│ Bescheid Hansestadt Rostock         │
│ vom 31.03.2026, Aktenzeichen        │
│ gew-1270-2024-AD3231                │
│ ──                                  │
│ Vermögensschadenhaftpflicht         │
│ gemäß § 15 ImmVV mit Mindest-       │
│ summen 500.000 Euro je Fall         │
│ und 1 Million Euro pro Jahr         │
└─────────────────────────────────────┘  Stamm-Daten (1b)
                                         data-sektion="stamm-daten"
                                         data-lese-marker="75"
┌─────────────────────────────────────┐
│ ─── 04 Backup-Netzwerk              │  Backup-Netzwerk
│                                     │
│ Proimma führt jeden Auftrag         │  body-l
│ inhabergeführt. Gestützt auf        │
│ ein festes Hausmeisternetz aus      │
│ dem Rostocker Umland und auf        │
│ ausgewählte Handwerker aus          │
│ dem beruflichen Netzwerk.           │
│                                     │
│ Im Vertretungsfall wird die         │
│ laufende Arbeit über das Netz-      │
│ werk und in Abstimmung mit dem      │
│ Eigentümer fortgeführt.             │
└─────────────────────────────────────┘  Backup-Netzwerk (1b)
                                         data-sektion="backup-netzwerk"
┌─────────────────────────────────────┐
│ ─── 05 Empfehlungspartner           │  V8-Min Klartext
│                                     │
│ Proimma arbeitet mit ausgewählten   │  body-l
│ Empfehlungspartnern in Rostock      │
│ und Umgebung zusammen, darunter     │
│ Notare, Steuerberater, Anwälte      │
│ und Banken.                         │
│                                     │
│ Mandate werden mit dokumentierter   │
│ Zustimmung der Eigentümer an die    │
│ jeweils passende Stelle vermittelt. │
└─────────────────────────────────────┘  Empfehlungspartner-Min (1b)
                                         data-sektion="empfehlungspartner"
                                         data-lese-marker="100"
┌─────────────────────────────────────┐
│ ─── 06 Erstgespräch vereinbaren     │  V10 Cal.com kompakt
│ ┌─────────────────────────────┐     │
│ │  [Cal.com iFrame]           │     │
│ └─────────────────────────────┘     │
└─────────────────────────────────────┘  Cal.com kompakt (1b)
[Footer]
```

Desktop-Wireframe 1440 Pixel mit Container 1280 Pixel.

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ [Header]                                                                             │
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 01 Inhaber                                          ┌──────────────────┐   │   │  Sektions-Hero
│ │                                                         │                  │   │   │  asymmetrisch 8+4
│ │ André                                                   │                  │   │   │  Bild rechts oben
│ │ Dieckmann                                               │   [Portrait      │   │   │  display-xl 96px
│ │                                                         │    André,        │   │   │  Light
│ │ ────                                                    │    Editorial]    │   │   │  Bild Spalten 9-12
│ │                                                         │                  │   │   │  4:5 aspect-ratio
│ │ Inhaber und Geschäftsführer der                         └──────────────────┘   │   │
│ │ Proimma GmbH.                                                                  │   │  body-l
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Hero ~600px (1a)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 02 Berufsbiografie                                                         │   │  Personenprofil-Detail
│ │                                                                                │   │  Klartext Spalten 1-7
│ │ Mehr als zwanzig Jahre in der Immobilienwirtschaft.                            │   │  Marginalien Sp. 9-12
│ │                                                                                │   │  Editorial-Whitespace
│ │ Als Immobilienkaufmann ausgebildet, später Asset Manager                       │   │
│ │ für einen dänischen Fonds, dann Mitaufbau einer Hausverwal-                    │   │  body-l
│ │ tung, und zuletzt Tätigkeit als Hausverwalter und Bewirt-                      │   │  Editorial-Mini-Story
│ │ schafter in Anstellung.                                                        │   │
│ │                                                                                │   │
│ │ Heute Inhaber der Proimma GmbH mit klarer Spezialisierung                      │   │
│ │ auf Mietenverwaltung für Mehrfamilienhäuser und Vermarktung                    │   │
│ │ von Wohnimmobilien.                                                            │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Berufsbiografie ~440px (1b)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 03 Belegbare Stamm-Daten                                                   │   │  Stamm-Daten-Sektion
│ │                                                                                │   │  Print-inspirierte
│ │ ────────────────────────────────────────────────────────────────────────────── │   │  Setzung
│ │ Proimma GmbH                                                                   │   │  Hairlines 100% Breite
│ │ Bremer Straße 12, 18057 Rostock                                                │   │  Tabular-Nums
│ │ ────────────────────────────────────────────────────────────────────────────── │   │
│ │ HRB 16077 Amtsgericht Rostock                                                  │   │
│ │ ────────────────────────────────────────────────────────────────────────────── │   │
│ │ USt-IdNr DE359185515  ·  Steuernummer 079/116/01766                            │   │
│ │ ────────────────────────────────────────────────────────────────────────────── │   │
│ │ Erlaubnis nach § 34c Abs. 1 Satz 1 Nr. 1 und Nr. 4 GewO,                       │   │
│ │ Bescheid Hansestadt Rostock vom 31.03.2026, Aktenzeichen                       │   │
│ │ gew-1270-2024-AD3231                                                           │   │
│ │ ────────────────────────────────────────────────────────────────────────────── │   │
│ │ Vermögensschadenhaftpflicht gemäß § 15 ImmVV mit Mindestsummen                 │   │
│ │ 500.000 Euro je Fall und 1 Million Euro pro Jahr                               │   │
│ │ ────────────────────────────────────────────────────────────────────────────── │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Stamm-Daten ~480px (1b)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 04 Backup-Netzwerk                                                         │   │  Backup-Netzwerk
│ │                                                                                │   │  Klartext Sp. 1-7
│ │ Proimma führt jeden Auftrag inhabergeführt. Gestützt auf                       │   │  Marginalien rechts leer
│ │ ein festes Hausmeisternetz aus dem Rostocker Umland und                        │   │
│ │ auf ausgewählte Handwerker aus dem beruflichen Netzwerk.                       │   │  body-l
│ │                                                                                │   │
│ │ Im Vertretungsfall wird die laufende Arbeit über das                           │   │
│ │ Netzwerk und in Abstimmung mit dem Eigentümer fortgeführt.                     │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Backup-Netzwerk ~360px (1b)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 05 Empfehlungspartner                                                      │   │  V8-Min Klartext
│ │                                                                                │   │
│ │ Proimma arbeitet mit ausgewählten Empfehlungspartnern in                       │   │  body-l
│ │ Rostock und Umgebung zusammen, darunter Notare, Steuer-                        │   │
│ │ berater, Anwälte und Banken.                                                   │   │
│ │                                                                                │   │
│ │ Mandate werden mit dokumentierter Zustimmung der Eigentümer                    │   │
│ │ an die jeweils passende Stelle vermittelt.                                     │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Empfehlungspartner ~360px (1b)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 06 Erstgespräch vereinbaren                                                │   │  V10 Cal.com kompakt
│ │       ┌──────────────────────────────────────────────┐                         │   │
│ │       │      [Cal.com Buchungs-iFrame]               │                         │   │
│ │       └──────────────────────────────────────────────┘                         │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────────────┘
[Footer]
```

Mobile-Reduktions-Notizen Über Proimma. Personenprofil-Asymmetrie wird zu vertikalem Stack, Bild über Klartext. Stamm-Daten bleiben vertikal als print-inspirierte Tabelle.

## 5. Kontakt

Sektions-Stack. Erstens Header. Zweitens Sektions-Hero mit Editorial-Index 01, display-xl-Headline „Erstgespräch vereinbaren" (1a). Drittens drei Datenpunkte (Dauer 30 Minuten, kostenfrei, Online via Zoom oder vor Ort in Rostock) (1a). Viertens V10 Cal.com-Termin-Sektion mit eingebettetem iFrame (1b). Fünftens Schriftliche-Anfrage-Sektion mit Kontaktformular und Pflicht-Fallback E-Mail an info@proimma.de (1b). Sechstens Klassische Kontaktdaten-Sektion (Adresse, Telefon, E-Mail, Erreichbarkeitszeiten) (1b). Siebtens Footer.

Mobile-Wireframe 375 Pixel.

```
┌─────────────────────────────────────┐
│ Proimma                          ☰  │
├─────────────────────────────────────┤
│ ─── 01 Erstgespräch                 │
│       vereinbaren                   │  display-xl 48px
│                                     │
│ ──                                  │
│                                     │
│ Wir nehmen uns Zeit für ein         │  body-l Klartext
│ erstes Gespräch zur Klärung Ihrer   │
│ Ausgangslage und Erwartungen.       │
└─────────────────────────────────────┘  Sektions-Hero ~480px (1a)

┌─────────────────────────────────────┐
│ ─── 02 Was Sie erwartet             │
│                                     │
│ ──                                  │
│ 30 Minuten                          │  Tabular-Nums
│ Dauer                               │  Hairline-Sektionierung
│ ──                                  │
│ Kostenfrei                          │
│ Investition                         │
│ ──                                  │
│ Online via Zoom oder                │
│ vor Ort in Rostock                  │
│ Format                              │
└─────────────────────────────────────┘  Datenpunkte (1a)
                                         data-sektion="kontakt-datenpunkte"
┌─────────────────────────────────────┐
│ ─── 03 Termin online                │  V10 Cal.com
│       buchen                        │
│                                     │
│ ┌─────────────────────────────┐     │
│ │  [Cal.com Buchungs-iFrame]  │     │  Lazy-Load
│ └─────────────────────────────┘     │
│                                     │
│ Falls die Termin-Anzeige nicht      │  body-s Fallback
│ lädt, schreiben Sie an              │
│ info@proimma.de oder rufen          │
│ Sie unter 0173-6335917 an.          │
└─────────────────────────────────────┘  Cal.com (1b)
                                         data-sektion="cal-embed-kontakt"
┌─────────────────────────────────────┐
│ ─── 04 Schriftliche Anfrage         │  Kontaktformular 5.3
│                                     │
│ Ihr Name *                          │  Form-Label
│ ┌─────────────────────────────┐     │  Form-Input
│ └─────────────────────────────┘     │
│                                     │
│ Ihre E-Mail-Adresse *               │
│ ┌─────────────────────────────┐     │
│ └─────────────────────────────┘     │
│                                     │
│ Ihre Telefonnummer (optional)       │
│ ┌─────────────────────────────┐     │
│ └─────────────────────────────┘     │
│                                     │
│ Ihr Anliegen *                      │
│ ┌─────────────────────────────┐     │
│ │                             │     │  Textarea 4 Zeilen
│ │                             │     │
│ │                             │     │
│ │                             │     │
│ └─────────────────────────────┘     │
│                                     │
│ Pflichtfelder sind mit einem        │  caption
│ Stern markiert.                     │
│                                     │
│ [Anfrage absenden →]                │  Primär-Button
│                                     │
│ Honeypot-Feld unsichtbar            │  Honeypot
└─────────────────────────────────────┘  Kontaktformular (1b)
                                         data-sektion="kontaktformular"
┌─────────────────────────────────────┐
│ ─── 05 Klassische Kontaktdaten      │  Klassische Daten
│                                     │
│ Proimma GmbH                        │  body-l
│ Bremer Straße 12                    │
│ 18057 Rostock                       │
│                                     │
│ 0173-6335917                        │  Tabular-Nums
│ info@proimma.de                     │
│                                     │
│ Werktags 9 bis 17 Uhr               │
│ erreichbar.                         │
│                                     │
│ Notfall-Erreichbarkeit für          │
│ Mieter rund um die Uhr über         │
│ die separate Notfall-Nummer         │
│ im Mietvertrag.                     │
└─────────────────────────────────────┘  Klassische Daten (1b)
                                         data-sektion="klassische-kontakt"
[Footer]
```

Desktop-Wireframe 1440 Pixel mit Container 1280 Pixel.

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ [Header]                                                                             │
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 01 Erstgespräch vereinbaren                                                │   │  Sektions-Hero
│ │                                                                                │   │
│ │ Wir nehmen uns Zeit für ein erstes Gespräch zur                                │   │  display-xl 96px
│ │ Klärung Ihrer Ausgangslage und Erwartungen.                                    │   │  Light
│ │                                                                                │   │
│ │ ────                                                                           │   │  Hairline 96px
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Hero ~480px (1a)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 02 Was Sie erwartet                                                        │   │  3 Datenpunkte
│ │                                                                                │   │  horizontal
│ │ ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐                 │   │
│ │ │ ──               │ │ ──               │ │ ──               │                 │   │
│ │ │ 30 Min.          │ │ Kostenfrei       │ │ Online via       │                 │   │  display-l 72px
│ │ │ Dauer            │ │ Investition      │ │ Zoom oder vor    │                 │   │  caption Label
│ │ │                  │ │                  │ │ Ort in Rostock   │                 │   │
│ │ └──────────────────┘ └──────────────────┘ └──────────────────┘                 │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Datenpunkte ~280px (1a)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 03 Termin online buchen                                                    │   │  V10 Cal.com
│ │                                                                                │   │
│ │       ┌──────────────────────────────────────────────┐                         │   │
│ │       │      [Cal.com Buchungs-iFrame]               │                         │   │  zentriert
│ │       └──────────────────────────────────────────────┘                         │   │  max-width 800px
│ │                                                                                │   │
│ │ Falls die Termin-Anzeige nicht lädt, schreiben Sie an info@proimma.de          │   │  body-s Fallback
│ │ oder rufen Sie unter 0173-6335917 an.                                          │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Cal.com ~720px (1b)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 04 Schriftliche Anfrage                ─── 05 Klassische Kontaktdaten      │   │  Asymmetrie 7+5
│ │                                                                                │   │
│ │ Ihr Name *                                 Proimma GmbH                        │   │  Form Spalten 1-7
│ │ ┌────────────────────────────────┐         Bremer Straße 12                    │   │  Daten Spalten 9-12
│ │ └────────────────────────────────┘         18057 Rostock                       │   │
│ │                                                                                │   │
│ │ Ihre E-Mail-Adresse *                      0173-6335917                        │   │  Tabular-Nums
│ │ ┌────────────────────────────────┐         info@proimma.de                     │   │
│ │ └────────────────────────────────┘                                             │   │
│ │                                            Werktags 9 bis 17 Uhr               │   │
│ │ Ihre Telefonnummer (optional)              erreichbar.                         │   │
│ │ ┌────────────────────────────────┐                                             │   │
│ │ └────────────────────────────────┘         Notfall-Erreichbarkeit              │   │
│ │                                            für Mieter rund um                  │   │
│ │ Ihr Anliegen *                             die Uhr über die                    │   │
│ │ ┌────────────────────────────────┐         separate Notfall-                   │   │
│ │ │                                │         Nummer im Mietvertrag.              │   │
│ │ │                                │                                             │   │
│ │ │                                │                                             │   │
│ │ └────────────────────────────────┘                                             │   │
│ │                                                                                │   │
│ │ Pflichtfelder mit Stern markiert.                                              │   │
│ │                                                                                │   │
│ │ [Anfrage absenden →]                                                           │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Form + Daten ~720px (1b)
└──────────────────────────────────────────────────────────────────────────────────────┘
[Footer]
```

## 6. Themen-Hub-Übersicht

Sektions-Stack. Erstens Header. Zweitens Sektions-Hero mit Editorial-Index 01, display-xl-Headline „Wissen für Eigentümer" (1a). Drittens Editorial-Karten-Listing 5.12 mit allen vier Erstartikeln (1b). Viertens Empty-State-Vorbereitung für zukünftige Filter-Funktion (in Phase 1 nicht aktiv, gemäß DESIGN.md 5.10). Fünftens Cal.com-Termin-Sektion kompakt (1b). Sechstens Footer.

Mobile-Wireframe 375 Pixel.

```
┌─────────────────────────────────────┐
│ Proimma                          ☰  │
├─────────────────────────────────────┤
│ ─── 01 Wissen für                   │
│       Eigentümer                    │  display-xl 48px
│                                     │
│ ──                                  │
│                                     │
│ Belegbares Branchenwissen           │  body-l Subline
│ für Eigentümer in Rostock und       │
│ Umgebung. Zu Hausverwaltungs-       │
│ Wechsel, Bestandsübergabe,          │
│ Maklerprovision und Verkauf einer   │
│ Wohnimmobilie.                      │
└─────────────────────────────────────┘  Sektions-Hero ~520px (1a)

┌─────────────────────────────────────┐
│ ─── 02 Beiträge                     │  Editorial-Karten 5.12
│                                     │
│ ──                                  │
│ 01  Hausverwaltung wechseln         │  Editorial-Karten als
│     7 Min · 27.04.2026              │  horizontale Zeilen
│     Worauf Eigentümer beim          │  caption + h3 + body-m
│     Wechsel der Hausverwaltung      │  Hairline zwischen
│     achten sollten.                 │
│ ──                                  │
│ 02  Bestandsübergabe                │
│     8 Min · 27.04.2026              │
│     Wie eine saubere Bestands-      │
│     übergabe kaufmännisch und       │
│     technisch abläuft.              │
│ ──                                  │
│ 03  Maklerprovision § 656c BGB      │
│     6 Min · 27.04.2026              │
│     Wie die Maklerprovision         │
│     konkret gerechnet wird.         │
│ ──                                  │
│ 04  Verkauf einer Wohnimmobilie     │
│     in Rostock                      │
│     9 Min · 27.04.2026              │
│     Was Eigentümer realistischer-   │
│     weise erwarten dürfen.          │
│ ──                                  │
└─────────────────────────────────────┘  Editorial-Listing (1b)
                                         data-sektion="themen-hub-listing"
                                         data-lese-marker="50,90"
[Cal.com kompakt + Footer wie Startseite]
```

Desktop-Wireframe 1440 Pixel mit Container 1280 Pixel.

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ [Header]                                                                             │
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 01 Wissen für Eigentümer                                                   │   │  Sektions-Hero
│ │                                                                                │   │
│ │ Belegbares Branchenwissen für Eigentümer in Rostock                            │   │  display-xl 96px
│ │ und Umgebung. Zu Hausverwaltungs-Wechsel, Bestands-                            │   │  Light
│ │ übergabe, Maklerprovision und Verkauf einer                                    │   │
│ │ Wohnimmobilie.                                                                 │   │  body-l Subline
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Hero ~520px (1a)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 02 Beiträge                                                                │   │  Editorial-Karten 5.12
│ │                                                                                │   │  asymmetrisch 12 Spalten
│ │ ────────────────────────────────────────────────────────────────────────────── │   │  Index Sp. 1
│ │ 01  Hausverwaltung wechseln                          7 Min · 27.04.2026        │   │  Titel+Anriss Sp. 2-8
│ │     Worauf Eigentümer beim Wechsel der Hausverwaltung achten sollten.          │   │  Datum Sp. 10-12
│ │ ────────────────────────────────────────────────────────────────────────────── │   │  caption Tabular-Nums
│ │ 02  Bestandsübergabe                                 8 Min · 27.04.2026        │   │
│ │     Wie eine saubere Bestandsübergabe kaufmännisch und technisch abläuft.      │   │
│ │ ────────────────────────────────────────────────────────────────────────────── │   │
│ │ 03  Maklerprovision § 656c BGB                       6 Min · 27.04.2026        │   │
│ │     Wie die Maklerprovision konkret gerechnet wird.                            │   │
│ │ ────────────────────────────────────────────────────────────────────────────── │   │
│ │ 04  Verkauf einer Wohnimmobilie in Rostock           9 Min · 27.04.2026        │   │
│ │     Was Eigentümer realistischerweise erwarten dürfen.                         │   │
│ │ ────────────────────────────────────────────────────────────────────────────── │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Editorial-Listing ~640px (1b)
│                                                                                      │
│ [Cal.com kompakt]                                                                    │
└──────────────────────────────────────────────────────────────────────────────────────┘
[Footer]
```

Hover-Animation pro Editorial-Karte gemäß DESIGN.md 5.12. Hairline wechselt von #D9D9D9 auf #34AEEB, Editorial-Index verschiebt sich um 4 Pixel nach rechts, Titel-Schrift wechselt von #1A1A1A auf #34AEEB-Akzent, Übergang 0.3 Sekunden.

## 7. Themen-Hub-Artikel (Beispiel: Hausverwaltung wechseln)

Sektions-Stack. Erstens Header. Zweitens Breadcrumb 5.11 (Startseite, Themen-Hub, Hausverwaltung wechseln) (1b). Drittens Artikel-Hero mit Editorial-Index 01, display-l-Headline und Lese-Dauer-Caption (1b). Viertens Artikel-Hauptteil als Magazin-Setzung mit eigenen H2-Zwischenüberschriften, body-l-Absätzen, Hairline-Sektionierung zwischen Kapiteln (1b). Fünftens Verwandte Artikel als Editorial-Karten-Listing der drei anderen Erstartikel (1b). Sechstens Cal.com-Termin-Sektion kompakt mit Headline „Im Erstgespräch klären wir Ihre Fragen zum Wechsel" (1b). Siebtens Footer.

Mobile-Wireframe 375 Pixel.

```
┌─────────────────────────────────────┐
│ Proimma                          ☰  │
├─────────────────────────────────────┤
│ Startseite · Themen-Hub ·           │  Breadcrumb 5.11
│ Hausverwaltung wechseln             │  caption #717171
│                                     │
│ ─── 01                              │  Editorial-Index
│                                     │
│ Hausverwaltung                      │  display-l 40px
│ wechseln.                           │
│                                     │
│ ──                                  │
│                                     │
│ 7 Min Lesezeit · 27.04.2026         │  caption Tabular-Nums
└─────────────────────────────────────┘  Artikel-Hero ~440px (1b)
                                         data-sektion="artikel-hero"
┌─────────────────────────────────────┐
│ ─── 02 Wann ein Wechsel             │  H2 Zwischenüberschrift
│       sinnvoll ist                  │
│                                     │
│ Klartext-Absatz body-l, Editorial-  │  body-l 19px
│ Setzung, ohne Floskeln. Mehrere     │  Editorial-Magazin
│ Absätze möglich.                    │
│                                     │
│ ──                                  │
│                                     │
│ ─── 03 Sieben Schritte für          │  H2
│       eine saubere Bestands-        │
│       übergabe                      │
│                                     │
│ Klartext-Absätze.                   │
│                                     │
│ ──                                  │
│                                     │
│ ─── 04 Worauf Sie achten            │  H2
│       sollten                       │
│                                     │
│ Klartext-Absätze.                   │
└─────────────────────────────────────┘  Artikel-Hauptteil (1b)
                                         data-sektion="artikel-hauptteil"
                                         data-lese-marker="25,50,75,100"
┌─────────────────────────────────────┐
│ ─── 05 Verwandte Beiträge           │  Editorial-Karten 5.12
│                                     │  3 weitere Erstartikel
│ ──                                  │
│ 02  Bestandsübergabe                │
│     8 Min · 27.04.2026              │
│ ──                                  │
│ 03  Maklerprovision § 656c BGB      │
│     6 Min · 27.04.2026              │
│ ──                                  │
│ 04  Verkauf einer Wohnimmobilie     │
│     9 Min · 27.04.2026              │
│ ──                                  │
└─────────────────────────────────────┘  Verwandte Artikel (1b)
                                         data-sektion="verwandte-artikel"
[Cal.com kompakt + Footer]
```

Desktop-Wireframe 1440 Pixel mit Container 1280 Pixel.

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ [Header]                                                                             │
│                                                                                      │
│ Startseite · Themen-Hub · Hausverwaltung wechseln                                    │  Breadcrumb 5.11
│                                                                                      │  caption #717171
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 01                                                                         │   │  Artikel-Hero
│ │                                                                                │   │
│ │ Hausverwaltung                                                                 │   │  display-l 72px
│ │ wechseln.                                                                      │   │  Light
│ │                                                                                │   │
│ │ ────                                                                           │   │
│ │                                                                                │   │
│ │ 7 Min Lesezeit · 27.04.2026                                                    │   │  caption Tabular-Nums
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Hero ~440px (1b)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │                                                                                │   │  Artikel-Hauptteil
│ │     ─── 02 Wann ein Wechsel sinnvoll ist                                       │   │  Lese-Spalte Sp. 2-9
│ │                                                                                │   │  max-width 720px
│ │     Klartext-Absatz body-l, Editorial-Setzung, ohne Floskeln.                  │   │  H2 mit Editorial-Index
│ │     Mehrere Absätze möglich.                                                   │   │  links Sp. 1
│ │                                                                                │   │
│ │     ────                                                                       │   │  body-l 19px
│ │                                                                                │   │
│ │     ─── 03 Sieben Schritte für eine saubere Bestandsübergabe                   │   │
│ │                                                                                │   │
│ │     Klartext-Absätze.                                                          │   │
│ │                                                                                │   │
│ │     ────                                                                       │   │
│ │                                                                                │   │
│ │     ─── 04 Worauf Sie achten sollten                                           │   │
│ │                                                                                │   │
│ │     Klartext-Absätze.                                                          │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Hauptteil variabel (1b)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 05 Verwandte Beiträge                                                      │   │  Editorial-Karten 5.12
│ │                                                                                │   │  3 weitere Erstartikel
│ │ ────────────────────────────────────────────────────────────────────────────── │   │
│ │ 02  Bestandsübergabe                                 8 Min · 27.04.2026        │   │
│ │ ────────────────────────────────────────────────────────────────────────────── │   │
│ │ 03  Maklerprovision § 656c BGB                       6 Min · 27.04.2026        │   │
│ │ ────────────────────────────────────────────────────────────────────────────── │   │
│ │ 04  Verkauf einer Wohnimmobilie in Rostock           9 Min · 27.04.2026        │   │
│ │ ────────────────────────────────────────────────────────────────────────────── │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Verwandte ~280px (1b)
│                                                                                      │
│ [Cal.com kompakt]                                                                    │
└──────────────────────────────────────────────────────────────────────────────────────┘
[Footer]
```

Mobile-Reduktions-Notizen Themen-Hub-Artikel. Lese-Spalte volle Mobile-Breite. H2-Zwischenüberschriften mit Editorial-Index oberhalb der Headline.

## 8. Edge-Case-Seiten

Pflicht aus Auftrag und gemäß DESIGN.md 5.10. Vier Edge-Case-Seiten als ganze Seiten plus zwei Edge-Case-States als Sektions-interne Zustände.

### 8.1 404-Seite

```
Mobile 375 px:                          Desktop 1440 px:
┌─────────────────────────────────────┐ ┌──────────────────────────────────────┐
│ Proimma                          ☰  │ │ [Header wie Startseite]              │
├─────────────────────────────────────┤ ├──────────────────────────────────────┤
│                                     │ │                                      │
│ ─── 404                             │ │ ─── 404                              │
│                                     │ │                                      │
│ Diese Seite                         │ │ Diese Seite gibt es nicht.           │
│ gibt es nicht.                      │ │                                      │
│                                     │ │ ────                                 │
│ ──                                  │ │                                      │
│                                     │ │ Vermutlich ein Tippfehler oder       │
│ Vermutlich ein Tippfehler oder      │ │ eine veraltete Verlinkung.           │
│ eine veraltete Verlinkung.          │ │                                      │
│                                     │ │ [Zur Startseite →]                   │
│ [Zur Startseite →]                  │ │                                      │
└─────────────────────────────────────┘ └──────────────────────────────────────┘
[Footer]                                [Footer]
```

HTTP-Status 404 vom Server gesetzt. Seite minimalistisch, kein Foto, kein Spektakel.

### 8.2 500-Seite

```
Mobile 375 px:                          Desktop 1440 px:
┌─────────────────────────────────────┐ ┌──────────────────────────────────────┐
│ [Header]                            │ │ [Header]                             │
├─────────────────────────────────────┤ ├──────────────────────────────────────┤
│ ─── 500                             │ │ ─── 500                              │
│                                     │ │                                      │
│ Etwas hat                           │ │ Etwas hat nicht funktioniert.        │
│ nicht funktioniert.                 │ │                                      │
│                                     │ │ ────                                 │
│ ──                                  │ │                                      │
│                                     │ │ Wir kümmern uns darum. Bitte         │
│ Wir kümmern uns darum. Bitte        │ │ versuchen Sie es in einigen          │
│ versuchen Sie es in einigen         │ │ Minuten erneut oder schreiben        │
│ Minuten erneut oder schreiben       │ │ Sie an info@proimma.de.              │
│ Sie an info@proimma.de.             │ │                                      │
│                                     │ │ [Zur Startseite →]                   │
│ [Zur Startseite →]                  │ │                                      │
└─────────────────────────────────────┘ └──────────────────────────────────────┘
[Footer]                                [Footer]
```

HTTP-Status 500 vom Server gesetzt. Sentry oder vergleichbare Fehler-Erfassung optional in Phase 2.

### 8.3 Maintenance-Mode

```
Mobile 375 px:                          Desktop 1440 px:
┌─────────────────────────────────────┐ ┌──────────────────────────────────────┐
│ Proimma                             │ │ Proimma                              │
│ (kein Header, kein Menü)            │ │                                      │
├─────────────────────────────────────┤ │                                      │
│                                     │ │ Die Webseite ist kurz offline.       │
│ Die Webseite                        │ │                                      │
│ ist kurz offline.                   │ │ ────                                 │
│                                     │ │                                      │
│ ──                                  │ │ Wir aktualisieren Inhalte.           │
│                                     │ │ Erreichbar sind wir unter            │
│ Wir aktualisieren Inhalte.          │ │ 0173-6335917 und info@proimma.de.    │
│ Erreichbar sind wir unter           │ │                                      │
│ 0173-6335917 und                    │ │                                      │
│ info@proimma.de.                    │ │                                      │
│                                     │ │                                      │
└─────────────────────────────────────┘ └──────────────────────────────────────┘
(kein Footer, kein Menü)                (kein Footer)
```

HTTP-Status 503 vom Server gesetzt. Eigene statische HTML-Datei /maintenance.html, vom KAS Tools im Wartungsfall manuell aktiviert. Kein Header, kein Footer, kein Menü, kein Bauarbeiter-Klischee.

### 8.4 Loading-State (Sektions-intern)

Anwendung. Bei Cal.com-iFrame-Lazy-Load und beim Lade-Zustand des Newsletter-Formulars in Phase 2. Strukturell identisch auf Mobile und Desktop, Skeleton-Höhe passt sich der jeweiligen Container-Höhe an.

Mobile 375 Pixel.

```
┌─────────────────────────────────────┐
│ ─── XX [Sektions-Headline]          │
│                                     │
│ ┌─────────────────────────────┐     │
│ │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│     │  Skeleton #EBEBEB
│ │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│     │  aspect-ratio fix
│ │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│     │  CLS-Schutz
│ └─────────────────────────────┘     │
│                                     │
│ Inhalte werden geladen.             │  body-s #717171
└─────────────────────────────────────┘
```

Desktop 1440 Pixel mit Container 1280 Pixel.

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── XX [Sektions-Headline]                                                     │   │
│ │                                                                                │   │
│ │       ┌──────────────────────────────────────────────┐                         │   │
│ │       │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│                         │   │  Skeleton #EBEBEB
│ │       │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│                         │   │  zentriert mit max-width
│ │       │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│                         │   │
│ │       └──────────────────────────────────────────────┘                         │   │
│ │                                                                                │   │
│ │ Inhalte werden geladen.                                                        │   │  body-s #717171
│ └────────────────────────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

Pflicht-Disziplin. Kein animierter Spinner, weil das Editorial-Bold-Idiom Ruhe verlangt. Klartext-Hinweis statt animierter Punkte „...". aria-busy-Attribut auf dem ladenden Container Pflicht.

### 8.5 Empty-State (Themen-Hub-Filter)

Anwendung. In Phase 1 nicht aktiv, weil keine Filter-Funktion implementiert ist. Vorbereitung für Phase 2. Strukturell identisch auf Mobile und Desktop, mit Container-Padding-Anpassung.

Mobile 375 Pixel.

```
┌─────────────────────────────────────┐
│ ─── 02 Beiträge                     │
│                                     │
│ ──                                  │
│                                     │
│ Zu diesem Filter ist aktuell        │  body-l
│ kein Beitrag im Themen-Hub.         │
│                                     │
│ [Filter zurücksetzen →]             │  Tertiär-Button
│                                     │
│ ──                                  │
└─────────────────────────────────────┘
```

Desktop 1440 Pixel mit Container 1280 Pixel.

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 02 Beiträge                                                                │   │
│ │                                                                                │   │
│ │ ────                                                                           │   │
│ │                                                                                │   │
│ │ Zu diesem Filter ist aktuell kein Beitrag im Themen-Hub.                       │   │  body-l
│ │                                                                                │   │
│ │ [Filter zurücksetzen →]                                                        │   │  Tertiär-Button
│ │                                                                                │   │
│ │ ────                                                                           │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

### 8.6 Sticky-Bottom-Bar auf Mobile (strategische Entscheidung)

Im überholten Konzept vom 23.04.2026 stand „Auf jeder Seite gibt es eine sichtbare Sticky-Bottom-Bar auf Mobil mit drei Buttons (Anrufen, Termin buchen, Schreiben), die immer erreichbar bleibt." Diese Strategie wurde im Zuge der Editorial-Bold-Linien-Festlegung vom 26.04.2026 nicht aufgegriffen.

Begründung der Nicht-Übernahme. Erstens, eine permanent sichtbare Sticky-Bottom-Bar mit drei Buttons widerspricht dem Editorial-Bold-Idiom (Ruhe, Reduktion, Hairlines statt Schatten); sie wirkt im Kontext von XXL-Display-Typografie und großzügigem Whitespace als visueller Lärm. Zweitens, sie reduziert auf Mobile die nutzbare Viewport-Höhe um typischerweise 56 bis 64 Pixel und blockiert damit Teile der Editorial-Komposition. Drittens, die Termin-Buchung ist über V2 Editorial-Hero auf Startseite, V10 Cal.com-Termin-Sektion auf jeder Säulen-Seite und über die Topnavigation-Hamburger-Menu-Verlinkung zur Kontakt-Seite jederzeit in zwei Taps erreichbar.

Phase-2-Beobachtungs-Auftrag. Wenn die Plausible-Mess-Daten nach Go-Live zeigen, dass mobile Eigentümer die Termin-Conversion-Sektion nur sporadisch erreichen (Sektion-View auf cal-embed unter dreißig Prozent der Mobile-Sessions auf den Säulen-Seiten), dann Re-Evaluation der Sticky-Bottom-Bar als Phase-2-Erweiterung mit dann zwingender Editorial-Reduktion (eine einzige Sticky-Aktion „Erstgespräch" als Hairline-Variante mit Off-White-Hintergrund und Hellblau-Akzent statt drei volle Buttons, max-Höhe 48 Pixel).

## 9. Pflicht-Seiten minimalistisch

### 9.1 Impressum

Sektions-Stack. Erstens Header (durchlaufend). Zweitens Editorial-Hero mit Editorial-Index 01 und display-l-Headline „Impressum" (1a). Drittens Pflichtangaben in print-inspirierter Setzung, alle Stamm-Daten wörtlich aus dem Auftrag (1a, weil rechtlich Pflicht). Viertens Footer.

Mobile-Wireframe 375 Pixel.

```
┌─────────────────────────────────────┐
│ Proimma                          ☰  │
├─────────────────────────────────────┤
│ ─── 01                              │
│                                     │
│ Impressum                           │  display-l 40px
│                                     │
│ ──                                  │
│                                     │
│ ─── 02 Anbieter                     │
│                                     │
│ Proimma GmbH                        │  body-l Print-inspiriert
│ Bremer Straße 12                    │  Tabular-Nums
│ 18057 Rostock                       │
│                                     │
│ ──                                  │
│                                     │
│ ─── 03 Vertretungsberechtigt        │
│                                     │
│ André Dieckmann                     │
│ Geschäftsführer                     │
│                                     │
│ ──                                  │
│                                     │
│ ─── 04 Handelsregister              │
│                                     │
│ HRB 16077 Amtsgericht Rostock       │
│ Umwandlungsurkunde UVZ 1891/2024    │
│ Notar Robert Boris Gaentzsch        │
│                                     │
│ ──                                  │
│                                     │
│ ─── 05 Steuern                      │
│                                     │
│ USt-IdNr DE359185515                │
│ Steuernummer 079/116/01766          │
│                                     │
│ ──                                  │
│                                     │
│ ─── 06 Berufsrechtliches            │
│                                     │
│ Erlaubnis nach § 34c Abs. 1         │
│ Satz 1 Nr. 1 und Nr. 4 GewO,        │
│ Bescheid der Hansestadt Rostock     │
│ vom 31.03.2026, Aktenzeichen        │
│ gew-1270-2024-AD3231.               │
│                                     │
│ Aufsichtsbehörde: Hansestadt        │
│ Rostock.                            │
│                                     │
│ Vermögensschadenhaftpflicht-        │
│ Versicherung gemäß § 15 ImmVV       │
│ mit Mindestsummen 500.000 Euro      │
│ je Fall und 1 Million Euro          │
│ pro Jahr.                           │
│                                     │
│ ──                                  │
│                                     │
│ ─── 07 Kontakt                      │
│                                     │
│ info@proimma.de                     │
│ 0173-6335917                        │
│                                     │
│ ──                                  │
│                                     │
│ ─── 08 Verbraucherstreit-           │
│       beilegung                     │
│                                     │
│ Die Proimma GmbH ist nicht          │
│ bereit oder verpflichtet, an        │
│ einem Streitbeilegungsverfahren     │
│ vor einer Verbraucherschlich-       │
│ tungsstelle teilzunehmen            │
│ (§ 36 VSBG).                        │
│                                     │
│ ──                                  │
│                                     │
│ ─── 09 EU-Online-Streit-            │
│       beilegung                     │
│                                     │
│ ec.europa.eu/consumers/odr          │
│ (Art. 14 Abs. 1 ODR-Verordnung)     │
└─────────────────────────────────────┘
[Footer wie Startseite]
```

Desktop-Wireframe 1440 Pixel mit Container 1280 Pixel, Min-Variante.

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ [Header]                                                                             │
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 01                                                                         │   │  Sektions-Hero
│ │                                                                                │   │
│ │ Impressum                                                                      │   │  display-l 72px
│ │                                                                                │   │
│ │ ────                                                                           │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Hero ~360px (1a)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 02 Anbieter                              Aufsichtsbehörde                  │   │  Print-inspirierte
│ │                                              Hansestadt Rostock                │   │  Setzung
│ │ Proimma GmbH                                                                   │   │  Klartext Sp. 1-7
│ │ Bremer Straße 12                                                               │   │  Marginalien Sp. 9-12
│ │ 18057 Rostock                                                                  │   │
│ │                                                                                │   │
│ │ ─── 03 Vertretungsberechtigt                                                   │   │
│ │                                                                                │   │
│ │ André Dieckmann                                                                │   │
│ │ Geschäftsführer                                                                │   │
│ │                                                                                │   │
│ │ ─── 04 Handelsregister                       Notar                             │   │
│ │                                              Robert Boris Gaentzsch            │   │
│ │ HRB 16077 Amtsgericht Rostock                                                  │   │
│ │ Umwandlungsurkunde UVZ 1891/2024                                               │   │
│ │                                                                                │   │
│ │ ─── 05 Steuern                                                                 │   │
│ │                                                                                │   │
│ │ USt-IdNr DE359185515                                                           │   │
│ │ Steuernummer 079/116/01766                                                     │   │
│ │                                                                                │   │
│ │ ─── 06 Berufsrechtliches                     Bezeichnung                       │   │
│ │                                              Immobilienmakler                  │   │
│ │ Erlaubnis nach § 34c Abs. 1 Satz 1           und -verwalter                    │   │
│ │ Nr. 1 und Nr. 4 GewO, Bescheid               (Deutschland)                     │   │
│ │ Hansestadt Rostock vom 31.03.2026,                                             │   │
│ │ Aktenzeichen gew-1270-2024-AD3231.                                             │   │
│ │                                                                                │   │
│ │ Aufsichtsbehörde Hansestadt Rostock.                                           │   │
│ │                                                                                │   │
│ │ Vermögensschadenhaftpflicht-                                                   │   │
│ │ Versicherung gemäß § 15 ImmVV mit                                              │   │
│ │ Mindestsummen 500.000 Euro je Fall                                             │   │
│ │ und 1 Million Euro pro Jahr.                                                   │   │
│ │                                                                                │   │
│ │ ─── 07 Kontakt                                                                 │   │
│ │                                                                                │   │
│ │ info@proimma.de                                                                │   │
│ │ 0173-6335917                                                                   │   │
│ │                                                                                │   │
│ │ ─── 08 Verbraucherstreitbeilegung                                              │   │
│ │                                                                                │   │
│ │ Die Proimma GmbH ist nicht bereit oder verpflichtet, an einem                  │   │
│ │ Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle              │   │
│ │ teilzunehmen (§ 36 VSBG).                                                      │   │
│ │                                                                                │   │
│ │ ─── 09 EU-Online-Streitbeilegung                                               │   │
│ │                                                                                │   │
│ │ ec.europa.eu/consumers/odr (Art. 14 Abs. 1 ODR-Verordnung)                     │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Pflichtangaben (1a)
└──────────────────────────────────────────────────────────────────────────────────────┘
[Footer]
```

Stretch-Wireframe Desktop V13-Wagemut Print-Impressum-Magazin-Doppelseite, Phase 1c optional. Diese Variante hebt die Pflichtsektion auf Editorial-Höhe und ist die CI-grenzwertige Wagemut-Empfehlung aus Bau-Auswahl-2026.md.

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ [Header]                                                                             │
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │                                                                                │   │  Magazin-Doppelseite
│ │  ────────  Linke Seite  ────────│  ────────  Rechte Seite  ────────            │   │  Spalten 1-6 + 7-12
│ │                                 │                                              │   │  Print-Logik
│ │  ┃                              │                                              │   │
│ │  ┃ I                            │  Aufsichtsbehörde                            │   │
│ │  ┃ mpressum                     │  ─────                                       │   │  Initial-Buchstabe
│ │  ┃                              │  Hansestadt Rostock                          │   │  Marginalien-Spalte
│ │                                 │                                              │   │  rechts mit Quer-
│ │  ─── 01 Anbieter                │  Notar                                       │   │  verweisen
│ │                                 │  ─────                                       │   │
│ │  Proimma GmbH                   │  Robert Boris Gaentzsch                      │   │  body-l mit
│ │  Bremer Straße 12               │                                              │   │  print-inspirierter
│ │  18057 Rostock                  │  Bezeichnung                                 │   │  Setzung,
│ │                                 │  ─────                                       │   │  Initialen,
│ │  ─── 02 Vertretungsberechtigt   │  Immobilienmakler und                        │   │  Hairlines
│ │                                 │  -verwalter (Deutschland)                    │   │
│ │  André Dieckmann                │                                              │   │
│ │  Geschäftsführer                │                                              │   │
│ │                                 │  Versicherer                                 │   │
│ │  ─── 03 Handelsregister         │  ─────                                       │   │
│ │                                 │  [Versicherer-Name],                         │   │
│ │  HRB 16077                      │  Geltungsbereich                             │   │
│ │  Amtsgericht Rostock            │  Bundesrepublik                              │   │
│ │  Umwandlungsurkunde             │  Deutschland                                 │   │
│ │  UVZ 1891/2024                  │                                              │   │
│ │                                 │                                              │   │
│ │  [weitere Pflichtangaben...]    │  [weitere Marginalien...]                    │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────────────────────────────────┘
[Footer]
```

V13-Stretch ist Wagemut, weil eine Pflichtsektion in gestalterische Höhe gehoben wird. CI-grenzwertig und im B2B-Premium-Segment ungewöhnlich. Gleichzeitig ein Premium-Code, den kein Wettbewerber liefert.

### 9.2 Datenschutz

Sektions-Stack. Erstens Header. Zweitens Editorial-Hero mit Editorial-Index 01 und display-l-Headline „Datenschutzerklärung" (1a). Drittens Pflichtinhalte gemäß DSGVO (Verantwortlicher, erhobene Daten, Rechtsgrundlagen, Speicherdauer, Rechte der Betroffenen, Drittlandübermittlung, Cookies-Sektion, Cal.com-Embed-Hinweis), gegliedert durch Editorial-Indizes 02 bis 12 (1a). Viertens Footer.

Mobile-Wireframe 375 Pixel kompakte Skizze (vollständige Pflichtinhalte gemäß DESIGN.md Sektion 9 in der Datenschutzerklärung).

```
┌─────────────────────────────────────┐
│ Proimma                          ☰  │
├─────────────────────────────────────┤
│ ─── 01                              │
│                                     │
│ Datenschutz-                        │  display-l 40px
│ erklärung                           │
│                                     │
│ ──                                  │
│                                     │
│ ─── 02 Verantwortlicher             │
│                                     │
│ Proimma GmbH                        │  body-l
│ André Dieckmann                     │
│ Bremer Straße 12, 18057 Rostock     │
│ info@proimma.de                     │
│                                     │
│ ──                                  │
│                                     │
│ ─── 03 Erhobene Daten               │
│                                     │
│ Server-Logs (IP-Adresse,            │  body-l Klartext
│ User-Agent, Zeitstempel),           │
│ Aufbewahrung 7 Tage rotierend.      │
│                                     │
│ Plausible Analytics aggregiert,     │
│ ohne Cookies, EU-Hosting Frankfurt. │
│                                     │
│ Kontaktformular-Eingaben (Name,     │
│ E-Mail, Anliegen, optional          │
│ Telefonnummer), übertragen an       │
│ info@proimma.de und Plunk           │
│ (EU-Hosting Frankfurt).             │
│                                     │
│ ──                                  │
│                                     │
│ ─── 04 Rechtsgrundlagen             │
│                                     │
│ Art. 6 Abs. 1 lit. b und f          │
│ DSGVO (Vertragsanbahnung,           │
│ berechtigte Interessen).            │
│                                     │
│ ──                                  │
│                                     │
│ ─── 05 Cal.com-Embed                │
│                                     │
│ Cal.com Inc. (Sitz USA),            │
│ EU-Daten-Verarbeitungs-             │
│ Vereinbarung gemäß Cal.com-DPA      │
│ und Standardvertragsklauseln.       │
│ Setzt nach Aktivierung technisch    │
│ erforderliche Session-Cookies.      │
│                                     │
│ ──                                  │
│                                     │
│ ─── 06 Cookies                      │
│                                     │
│ Diese Webseite verwendet Plausible  │
│ cookielos. Cal.com-Embed setzt      │
│ nach Aktivierung technisch          │
│ erforderliche Session-Cookies       │
│ (§ 25 Abs. 2 Nr. 2 TTDSG).          │
│                                     │
│ ──                                  │
│                                     │
│ ─── 07 Rechte der Betroffenen       │
│                                     │
│ Auskunft, Berichtigung, Löschung,   │
│ Einschränkung der Verarbeitung,     │
│ Widerspruch, Datenübertragbarkeit.  │
│ Anfragen an info@proimma.de.        │
│                                     │
│ Beschwerderecht bei der zustän-     │
│ digen Aufsichtsbehörde (Landes-     │
│ beauftragter für Datenschutz und    │
│ Informationsfreiheit Mecklenburg-   │
│ Vorpommern).                        │
└─────────────────────────────────────┘
[Footer]
```

Desktop-Wireframe 1440 Pixel mit Container 1280 Pixel.

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ [Header]                                                                             │
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 01                                                                         │   │  Sektions-Hero
│ │                                                                                │   │
│ │ Datenschutz-                                                                   │   │  display-l 72px
│ │ erklärung                                                                      │   │  Light
│ │                                                                                │   │
│ │ ────                                                                           │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Hero ~440px (1a)
│                                                                                      │
│ ┌────────────────────────────────────────────────────────────────────────────────┐   │
│ │ ─── 02 Verantwortlicher                                                        │   │  Print-inspirierte
│ │                                                                                │   │  Setzung
│ │ Proimma GmbH                                                                   │   │  Klartext Sp. 1-7
│ │ André Dieckmann                                                                │   │  Marginalien Sp. 9-12
│ │ Bremer Straße 12, 18057 Rostock                                                │   │
│ │ info@proimma.de                                                                │   │
│ │                                                                                │   │
│ │ ─── 03 Erhobene Daten                        Aufbewahrung                      │   │
│ │                                              Server-Logs 7 Tage                │   │
│ │ Server-Logs (IP-Adresse, User-Agent,         rotierend                         │   │
│ │ Zeitstempel), Aufbewahrung 7 Tage                                              │   │
│ │ rotierend.                                   Hosting                           │   │
│ │                                              All-Inkl, Server-                 │   │
│ │ Plausible Analytics aggregiert, ohne         Standort Deutschland              │   │
│ │ Cookies, EU-Hosting Frankfurt.                                                 │   │
│ │                                                                                │   │
│ │ Kontaktformular-Eingaben (Name,              Auftragsverarbeiter               │   │
│ │ E-Mail, Anliegen, optional Telefon-          Plunk (EU-Hosting                 │   │
│ │ nummer), übertragen an info@proimma.de       Frankfurt)                        │   │
│ │ und Plunk (EU-Hosting Frankfurt).                                              │   │
│ │                                                                                │   │
│ │ ─── 04 Rechtsgrundlagen                                                        │   │
│ │                                                                                │   │
│ │ Art. 6 Abs. 1 lit. b und f DSGVO                                               │   │
│ │ (Vertragsanbahnung, berechtigte Interessen).                                   │   │
│ │                                                                                │   │
│ │ ─── 05 Cal.com-Embed                         Standort                          │   │
│ │                                              Cal.com Inc., USA                 │   │
│ │ Cal.com Inc. (Sitz USA), EU-Daten-                                             │   │
│ │ Verarbeitungs-Vereinbarung gemäß             Schrems-II-Risiko                 │   │
│ │ Cal.com-DPA und Standardvertrags-            transparent                       │   │
│ │ klauseln. Setzt nach Aktivierung                                               │   │
│ │ technisch erforderliche Session-                                               │   │
│ │ Cookies.                                                                       │   │
│ │                                                                                │   │
│ │ ─── 06 Cookies                                                                 │   │
│ │                                                                                │   │
│ │ Diese Webseite verwendet Plausible cookielos. Cal.com-Embed                    │   │
│ │ setzt nach Aktivierung technisch erforderliche Session-Cookies                 │   │
│ │ (§ 25 Abs. 2 Nr. 2 TTDSG).                                                     │   │
│ │                                                                                │   │
│ │ ─── 07 Rechte der Betroffenen                Aufsichtsbehörde                  │   │
│ │                                              Landesbeauftragter               │   │
│ │ Auskunft, Berichtigung, Löschung,            für Datenschutz                   │   │
│ │ Einschränkung der Verarbeitung,              und Informations-                 │   │
│ │ Widerspruch, Datenübertragbarkeit.           freiheit MV                       │   │
│ │ Anfragen an info@proimma.de.                                                   │   │
│ │                                                                                │   │
│ │ Beschwerderecht bei der zuständigen                                            │   │
│ │ Aufsichtsbehörde.                                                              │   │
│ └────────────────────────────────────────────────────────────────────────────────┘   │  Pflichtangaben (1a)
└──────────────────────────────────────────────────────────────────────────────────────┘
[Footer]
```

## 10. Heuristic Evaluation nach Nielsen

Bewertung der Wireframes gegen die zehn Usability-Heuristiken nach Jakob Nielsen. Pro Heuristik eine Zwei-Satz-Bewertung mit konkreter Wireframe-Stelle.

Erstens, Sichtbarkeit des Systemstatus. Erfüllt durch sichtbares Lade-Verhalten beim Cal.com-iFrame-Embed (Klartext „Termin-Anzeige wird geladen", siehe DESIGN.md 5.7) und durch ARIA-Live-Region für Form-Submit-Erfolg. Schwäche bei längeren Form-Submissions ohne Progress-Indikator; Maßnahme im Bau-Chat: Form-Submit-Button wechselt in Loading-State gemäß DESIGN.md 5.2 Primär Loading mit Inline-SVG-Spinner.

Zweitens, Übereinstimmung zwischen System und realer Welt. Erfüllt durch konsequente Sie-Anrede, Klartext statt Tech-Jargon, sachliche Tonalität in der Microcopy gemäß DESIGN.md Sektion 7. Eigentümer-Sprache („Erstgespräch", „Mietenverwaltung", „Bestandsübergabe") statt Marketing-Sprache. Schwäche keine erkennbare.

Drittens, Benutzerkontrolle und Freiheit. Erfüllt durch jederzeit erreichbare Navigation (Header durchlaufend), Skip-Link „Zum Hauptinhalt springen" als erster Tab-Stop, Breadcrumb 5.11 auf Themen-Hub-Artikeln mit Rückweg zur Übersicht, Schließen-Mechanik im Mobile-Hamburger-Menu (Icon, Escape-Taste, Tap auf Navigationspunkt, alle drei Wege gemäß DESIGN.md 5.15). Schwäche keine.

Viertens, Konsistenz und Standards. Erfüllt durch zentrale Komponenten-Bibliothek (DESIGN.md Sektion 5), Token-System (Sektion 2 bis 4), einheitliche Editorial-Index-Anwendung in jeder Sektion, einheitliche Cal.com-Embed-Konvention auf allen Säulen-Seiten und Kontakt-Seite, einheitlicher Footer-Aufbau auf allen Seiten. Schwäche keine.

Fünftens, Fehlerprävention. Erfüllt durch Pflichtfeld-Markierung mit Asterisk (DESIGN.md 5.3), Honeypot-Spam-Filter im Kontaktformular (DESIGN.md Sektion 9), prüfbare § 34c-Erlaubnis-Aktenzeichen-Aussage zur Vertrauensprüfung. Form-Validation clientseitig nach Blur-Event verhindert Fehler vor Server-Submission. Schwäche keine.

Sechstens, Wiedererkennen statt Erinnern. Erfüllt durch sichtbare Navigation (Topnavigation auf Desktop, Hamburger auf Mobile), Breadcrumb auf Themen-Hub-Artikeln, sprechende URLs (proimma.de/themen-hub/wechsel-hausverwaltung), Editorial-Indizes als Magazin-Anker, Cal.com-Termin-Sektion auf jeder Säulen-Seite plus Kontakt-Seite mit identischer Komponente. Schwäche keine.

Siebtens, Effizienz und Flexibilität der Nutzung. Erfüllt durch Cal.com-Termin-Buchung als Ein-Klick-Pfad vom Hero-Button auf Startseite, Säulen-Seiten und Kontakt-Seite, Skip-Link für Tastatur-Power-User, Astro-View-Transitions für gefühlt schnelle Seitenwechsel, Lazy-Load des Cal.com-iFrame für schnelle initiale Page-Loads. Schwäche keine in Phase 1.

Achtens, Ästhetik und minimalistisches Design. Erfüllt durch Editorial-Bold-Disziplin (XXL-Typografie, Hairlines statt Schatten, asymmetrische Layouts, viel Whitespace, Off-White-Hintergrund, Hellblau ausschließlich für Akzente, Dunkelblau ausschließlich Footer), Mobile-Reduktion ohne Inhaltsverlust, Verzicht auf rotierende Karussells, Stockfoto-Hände-Schütteln und Standard-Tailwind-Template-Look. Schwäche keine.

Neuntens, Hilfe beim Erkennen, Diagnostizieren und Beheben von Fehlern. Erfüllt durch sachliche Form-Error-Meldungen ohne Floskeln (DESIGN.md Sektion 7), 404- und 500-Seiten mit Klartext-Diagnose und Rückkehr-Pfad, Fallback-Klartext unter Cal.com-iFrame mit alternativen Kontaktwegen. Schwäche keine.

Zehntens, Hilfe und Dokumentation. In Phase 1 keine eigene Hilfe-Sektion, weil Themen-Hub-Artikel die Inhalts-Substanz tragen und der Footer Pflichtangaben sichtbar macht. Schwäche keine in Phase 1; bei Wachstum der Site in Phase 2 Eigentümer-FAQ-Sektion als Erweiterung erwägen.

## 11. Phasen-Bauauftrag-Verdichtung

Was Phase 1a (Premium-Fundament) für die Wireframes bedeutet. Header und Footer auf allen Seiten baufähig, Hero-Sektionen aller Hauptseiten mit Editorial-Index und display-Headline, Hero-Datenpunkte auf Startseite, Kontakt-Datenpunkte auf Kontakt-Seite, Impressum mit Pflichtangaben, Datenschutz mit Pflichtangaben, 404 und 500 als statische Seiten. Aufwand 70 bis 96 Stunden plus 10 bis 16 Stunden Layout-Gerüst gemäß Bau-Auswahl-2026.md.

Was Phase 1b für die Wireframes bedeutet. Inhalts-Sektionen aller sieben Hauptseiten gemäß freigegebener Texte aus dem Texter-Chat. Cal.com-Termin-Sektion auf Startseite, Hausverwaltung, Maklerei, Über Proimma, Kontakt. Themen-Hub-Übersicht und vier Erstartikel mit Breadcrumb und verwandten Artikeln. Aufwand 130 bis 200 Stunden plus 30 bis 50 Stunden Themen-Hub-Layout.

Was Phase 1c für die Wireframes bedeutet. SVG-Stufenleiter Übernahme-Prozess auf Hausverwaltungs-Seite, optional Editorial-Magazin-Doppelseite-Anmutung im Impressum als V13-Wagemut-Stretch. Aufwand 24 bis 36 Stunden plus optional bis 50 Stunden V13-Stretch.

## Selbstprüfung

Vollständigkeit. Alle fünf Pflicht-Hauptseiten aus dem Auftrag (Startseite, Mietenverwaltung als Hausverwaltungs-Hauptseite, Maklerei, Über Proimma, Kontakt) plus zwei zusätzliche Hauptseiten gemäß Phase-1-Sitemap-Beschluss vom 27.04.2026 (Themen-Hub-Übersicht, Themen-Hub-Artikel-Layout). Alle fünf Edge-Case-Seiten (404, 500, Maintenance, Loading-State, Empty-State). Impressum und Datenschutz minimalistisch mit Pflicht-Stammdaten wörtlich aus Auftrag. Pro Hauptseite ein Mobile-Wireframe 375 Pixel und ein Desktop-Wireframe 1440 Pixel mit Container 1280 Pixel. Sektions-Stacks mit Komponenten-Verweisen aus Bau-Auswahl-2026.md und DESIGN.md. Conversion-Tracking-Marker (data-sektion, data-cta, data-scroll-marker, data-lese-marker, data-page-slug) auf allen relevanten Sektionen platziert gemäß DESIGN.md Sektion 15. Heuristic Evaluation nach Nielsen mit Bewertung pro Heuristik gegen konkrete Wireframe-Stellen.

Andre-Regeln Proimma. Sie-Form durchgehend in den Microcopy-Beispielen. Keine Trennstriche, keine strukturierende Fettschrift, keine Bullet-Points außerhalb der numerierten Sektions-Stacks und der ASCII-Wireframes (beide als Datenstruktur unverzichtbar). Keine verbotenen Floskeln. „Proimma" mit kleinem i durchgehend in den Wireframes und in den Klartext-Inhalten. „mehr als zwanzig Jahre" exakt in den Datenpunkt-Beispielen. Schwesterfirma Immobilien Ratgeber strikt ausgeklammert. Strikte Ausschlüsse eingehalten. Externe Kommunikationsregel eingehalten. Pflicht-Vertrauenselemente sichtbar abgebildet (Erreichbarkeits-Versprechen 48 Stunden werktags und Notfall-Erreichbarkeit Mieter rund um die Uhr in V3 Hero-Datenpunkten und V11 Erreichbarkeits-Sektion und im Footer; Vermögensschadenhaftpflicht-Mindestsummen aus § 15 ImmVV in V7 Substanz-Datenpunkten und im Footer und im Impressum; einheitliche § 34c-Formulierung mit Aktenzeichen in V7 und im Footer und im Impressum; Provisionslogik § 656c BGB transparent auf der Maklerei-Seite und im Footer-Klartext der Maklerei-Seite). Pflicht-Stammdaten wörtlich aus Auftrag im Impressum.

Schärfe. Pro Wireframe Sektions-Stack mit Höhen-Richtwerten, Sektions-Höhen sind Schätzwerte für die Bauphase, abhängig von Inhalts-Länge variabel. Phasen-Marker (1a, 1b, 1c) pro Sektion klar gesetzt, sodass die Bau-Sequenz über die drei Phasen-Pakete sichtbar wird. Asymmetrische Editorial-Layouts auf Desktop konsistent durchgezogen mit konkreten Spalten-Verteilungen. Mobile-Reduktions-Notizen pro Hauptseite mit konkreten Stack-Reihenfolgen. Conversion-Tracking-Marker pro Sektion deklarativ als data-Attribute gesetzt, sodass die Plausible-Anbindung aus DESIGN.md Sektion 15 ohne weitere Konzept-Arbeit gebaut werden kann. Heuristic Evaluation mit zehn Heuristiken plus Bewertung plus konkreter Wireframe-Stelle pro Heuristik.

Schärfung 28.04.2026 nach Selbstprüfung. Sieben Desktop-Wireframes als ASCII-Skelette ergänzt für Maklerei, Über Proimma, Kontakt, Themen-Hub-Übersicht, Themen-Hub-Artikel, Impressum und Datenschutz; ursprünglich nur als Klartext-Beschreibung formuliert, was die Auftrags-Pflicht „pro Phase-1-Seite zwei Wireframes" verletzte. Sticky-Bottom-Bar auf Mobile als bewusste Nicht-Übernahme aus dem überholten Konzept dokumentiert mit drei Begründungen plus Phase-2-Beobachtungs-Auftrag. V13-Wagemut Print-Impressum-Magazin-Doppelseite als Stretch-Wireframe in Phase 1c mit eigenem ASCII-Skelett ergänzt. Loading-State und Empty-State in Mobile- und Desktop-Variante getrennt gezeichnet. Touch-Target-Mindestgröße 44 mal 44 CSS-Pixel als verbindliche Bauauflage in den Konventions-Block aufgenommen.

Stand 28.04.2026, Teil 3 abnahmebereit.
