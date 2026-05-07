# BRIEFS.md Webseiten-Relaunch Proimma GmbH Phase 1

Bilder-Briefs und Content-Briefs für den späteren Bau-Chat. Stand 28.04.2026. Grundlage Bau-Auswahl-2026.md (acht ÜBERNEHMEN-Vorschläge plus Synthese-Wagemut V14, Phasen-Sequenzierung 1a, 1b, 1c), DESIGN.md (Komponenten-Bibliothek, Conversion-Architektur, OG-Image-Strategie in Sektion 8 und 14), WIREFRAMES.md (Wireframes Mobile und Desktop pro Hauptseite plus Sektions-Stack mit Komponenten-Verweisen). Bei Konflikt zwischen einem Detail in dieser Datei und einer Aussage aus den Memory-Kerndateien gilt die Memory.

Verbindlicher Wahrheitsregel-Vorbehalt für alle Bilder. Aktueller Verwaltungs-Bestand null Wohneinheiten wird auch in Bildern nicht als „großer Bestand" dargestellt. Kein erfundenes Team, kein erfundener Standort, keine erfundene Kulisse. KI-generierte Bilder ausschließlich von Andrés Person mit Referenz auf bestehende Aufnahmen, oder von architektonisch nicht eindeutig zuordenbaren Stilmotiven. Mehrfamilienhaus-Aufnahmen aus Rostock ausschließlich von tatsächlich existierenden Objekten mit dokumentierter Genehmigung der Eigentümer; KI-Synthese eines „typischen Rostocker Mehrfamilienhauses" ist Wahrheitsregel-Verstoß und ausgeschlossen.

## Konventionen

Beschaffungswege. Standard-Werkzeug für KI-Bilder ist ChatGPT-Image-2.0 gemäß projekt-status (Andrés Standardwerkzeug, mit Wahrheitsregel-Vorbehalt). Alternativen: Foto-Termin mit Fotograf in Rostock (Foto-Termin am 27.04.2026 entfallen, Ersatz steht aus), Bestand prüfen (Mai-2022-Aufnahmen DSC01209 bis DSC01331 in /Users/andredieckmann/Desktop/Proimma GmbH/Bilder oder vergleichbarem Ordner), Stockfoto-Lizenz mit echtem Rostock-Bezug (deutsche Plattformen mit Bildrechten), Eigenaufnahme mit Smartphone für Stadt- und Atmosphäre-Motive, statische SVG-Generierung für OG-Bilder im Astro-Build.

Format-Pflicht. AVIF als primäres Format für Web-Bilder, WebP als Fallback, JPEG als Last-Resort. Astro Assets nativ über die Image-Komponente mit responsive widths und format-Liste. OG-Bilder als PNG 1200 mal 630 Pixel, weil Open-Graph-Spezifikation PNG- und JPEG-Format vorschreibt und AVIF auf den meisten Social-Plattformen nicht unterstützt wird. Favicon als SVG.

Auflösungs-Strategie. Hero-Bilder bis 200 KB komprimiert (Performance-Budget aus Auftrag). Content-Bilder bis 80 KB komprimiert. OG-Bilder bis 300 KB. Bei AVIF-Komprimierung sind 70 bis 85 Prozent Quality-Setting üblich, mit Lighthouse-Mobile-Verifikation Pflicht.

Wahrheitsregel-Vermerk. Pro Bild eine Klartext-Aussage zur Wahrheitsregel-Konformität. Bei KI-Generierung explizite Nennung von Andrés Person als Referenz (für Portraits) oder explizite Nennung der Stil-Inspiration (für Architektur- und Atmosphäre-Motive) ohne Suggestion eines konkreten Bestandsobjekts.

Alt-Text-Pflicht. Pro Bild ein Klartext-Alt-Text-Vorschlag. Gemäß DESIGN.md 5.13 verlangt jeder Bild-Aufruf in der Astro-Image-Komponente das alt-Attribut explizit mit Klartext-Beschreibung, kein Default-Wert „".

Bilder-Komprimierungs-Tool-Empfehlung. Sharp als Astro-natives Bild-Verarbeitungs-Modul (in Astro 4 als Default-Bild-Service mit AVIF-, WebP- und JPEG-Unterstützung integriert), zusätzlich Squoosh als manuelles Vergleichs-Tool für die Quelldateien-Vorbereitung (Browser-basiert von Google, https://squoosh.app, Quality-Preview pro Format mit Datei-Größen-Vergleich). ImageOptim für die einmalige Quelldateien-Optimierung auf Mac-Seite (Drag-and-Drop für JPEG, PNG, SVG mit verlustfreier Kompression). Astro-Build-Schritt komprimiert beim Build-Lauf automatisch über Sharp; manuelle Pre-Optimierung über Squoosh oder ImageOptim erfolgt vor Commit ins Repository.

Erweiterte Tonalitäts-Vorgabe für alle Content-Briefs. Die globalen Schreibregeln aus dem Texter-Briefing 27.04.2026 gelten unverändert. Zusätzlich sind Anglizismen und modische Schlagworte ausgeschlossen, namentlich „digital first", „smart property", „next generation", „state of the art", „all-in-one-Lösung", „Game-Changer", „Best Practice" als Selbstbeschreibung. Fachbegriffe sind erlaubt, wenn sie im juristischen Kontext stehen (zum Beispiel „§ 656c BGB", „§ 34c GewO", „§ 15 ImmVV") oder im sachlichen Mietenverwaltungs-Vokabular fest verankert sind (zum Beispiel „Bestandsübergabe", „Nebenkostenabrechnung", „Eigentümer-Reporting").

## 1. Bilder-Briefs

### 1.0 Hero-Bild-Strategie und Pflicht-Klärung

Vorbemerkung. Der Auftrag listet „Hero-Bild" als eigenständigen Pflicht-Posten neben Stilfotos und OG-Bildern. In der Editorial-Bold-Linie aus Bau-Auswahl-2026.md ist V2 Editorial-Hero auf der Startseite als reine Typografie-Komposition ohne Foto angelegt; das ist die Spitzenempfehlung aus Stufe 5 der Premium-Inspirations-Recherche (Spitzenempfehlung mit der Begründung, dass die ersten zwei Sekunden über Premium-Wahrnehmung entscheiden und Display-Schrift allein trägt). Diese Designentscheidung ist verbindlich.

Lesart eins, Hero-Bild als reine Typografie. Die Startseite hat kein Foto-Element im Hero, sondern ausschließlich display-xxl-Headline „Hausverwaltung und Maklerei in Rostock. Inhabergeführt. Fokussiert.", Sub-Headline und Editorial-Index. Damit entfällt ein klassisches Hero-Foto auf der Startseite.

Lesart zwei, funktionales Hero-Bild-Äquivalent. Auf der Über-Proimma-Seite trägt das Portrait André Schwarzweiß Editorial (Brief 1.1) im Hero-Block oben rechts auf Spalten 9-12 die funktionale Rolle eines Hero-Bildes. Es ist das einzige Hero-Foto im gesamten Phase-1-Webseiten-Aufbau, weil Editorial-Bold-Disziplin die anderen Hauptseiten-Heroes typografisch trägt. Der Bau-Chat soll dieses Portrait als Hero-Bild der Über-Proimma-Seite mit Hero-Performance-Budget (unter 200 KB komprimiert, AVIF mit WebP-Fallback, eager-loaded mit fetchpriority high) behandeln.

Lesart drei, optionales Hero-Stadtmotiv für Phase 1c. Eine Stadtmotiv-Hero-Variante als Sektions-Pause oder als Maintenance-Mode-Bild wäre als Phase-1c-Wagemut denkbar, mit Wahrheitsregel-Schranke. Stadtmotiv ausschließlich von einem real existierenden Rostocker Ort (Stadthafen, Warnowufer, Kröpeliner Straße, Universitätsplatz, Doberaner Platz), Eigenaufnahme oder lizenzierte Stockfoto-Plattform mit echtem Rostock-Bezug. Keine KI-Generierung eines „Rostock-typischen Stadtmotivs", weil ChatGPT-Image-2.0 keine real existierenden Standorte akkurat reproduziert und Wahrheitsregel das Mandatsfundament trägt. Brief-Spezifikation bei Bedarf in Phase 1c als Erweiterung von 1.3 möglich.

Pflicht-Auftrag-Konformität. Diese drei Lesarten klären den Begriff „Hero-Bild" aus dem Auftrag. Brief 1.1 deckt Lesart zwei ab, Brief 1.3 deckt Lesart drei ab, Lesart eins ist Designentscheidung ohne eigenen Bild-Brief, weil reine Typografie kein Bild-Asset benötigt.

### 1.1 Portrait André Schwarzweiß Editorial

Zweck. Über-Proimma-Hero-Sektion (Bild rechts oben Spalten 9-12, asymmetrisch zum display-xl-Headline-Block) gemäß WIREFRAMES.md Sektion 4 Desktop-Wireframe. Plus Personenprofil-Detail-Sektion auf Über-Proimma-Seite. Plus reduzierte Variante als Personenprofil-Kachel auf Startseite Sektion 07.

Stil. Editorial-Schwarzweiß-Portrait in der Tradition von Telha Clarke und Norgram aus der Premium-Inspirations-Recherche. Klare Lichtsetzung, ruhige Konturen, kein Bewegungs-Unschärfe-Effekt, kein Lifestyle-Look. Kontrast mittel bis hoch, Mitteltöne erhalten.

Hintergrund. Neutraler Studio-Hintergrund in mittelgrauer Tönung (#717171 bis #BFBFBF) oder weiß-gegen-Off-White-Verlauf. Kein Park-Setting, kein Außenraum, kein Stadtmotiv im Hintergrund. Editorial-Strenge erfordert ablenkungsfreien Hintergrund.

Pose oder Komposition. Halbportrait Brusthöhe bis Schulter, Blick leicht über die Schulter zur Kamera oder direkt in die Linse, ruhig und sachlich. Anzug oder dezent strukturierter Sakko mit Hemd, ohne Krawatte (norddeutsch-zurückhaltend). Hände nicht im Bild oder dezent gehalten. Kein Schmunzeln, kein breites Lächeln, sondern ein gehaltenes ruhiges Mienenspiel.

Stimmung. Sachlich-seriös bei Fakten, persönlich-nahbar bei Emotionen gemäß Markenkern-Tonalität. Keine Verkaufs-Heiterkeit, keine professionelle-Foto-Pose mit verschränkten Armen. Glaubwürdig wie ein erfahrener Berater, nicht wie eine Broschüre.

Auflösung. 2400 mal 3000 Pixel Quelldatei für die Hero-Variante (Spalten 9-12 auf Desktop, etwa 480 Pixel breit, mit @2x für Retina also 960 Pixel breit, Quell-Vorrat in 2400 Pixel breit). Gleiche Quelldatei in unterschiedlichen Crops für Personenprofil-Detail (Über-Proimma) und Personenprofil-Kachel (Startseite).

Format. AVIF als primäres Output-Format mit Quality 80, WebP als Fallback Quality 85, JPEG als Last-Resort Quality 80. Astro Assets generiert die Varianten beim Build automatisch. Quelldatei JPEG oder TIFF in voller Auflösung im /Bilder/ Ordner mit Aufbewahrung des Originals.

Aspect-Ratio. 4:5 als primäres Aspect-Ratio (Portrait-Hochformat, etwa 1920 mal 2400 Pixel zugeschnitten). Sekundäre Crops 3:4 für Personenprofil-Kachel auf Startseite, 1:1 quadratisch als Reserve für Social-Media-Profilbild.

Beschaffungsweg. Erstens Bestand prüfen. Mai-2022-Aufnahmen DSC01209 bis DSC01331 sind vier Jahre alt, vor Verwendung Sichtkontrolle ob Erscheinungsbild noch eindeutig zu André passt (Frisur, Bart, Brille gemäß projekt-status). Falls deutliche Veränderungen, neue Aufnahme Pflicht. Zweitens Foto-Termin neu vereinbaren in Rostock mit professionellem Fotografen (Foto-Termin am 27.04.2026 entfallen, Ersatz nicht datiert). Drittens ChatGPT-Image-2.0-Bildgenerierung mit Referenz auf bestehende André-Aufnahmen (Standardwerkzeug gemäß projekt-status), als Brückenlösung bis zum Fotograf-Termin.

Wahrheitsregel-Vermerk. Echte Aufnahme vorzuziehen. KI-Generierung ausschließlich mit Referenz auf vorhandene André-Bilder, nicht als generischer „Inhabertyp". Auf der Über-Proimma-Seite ist die Wahrheitsregel besonders kritisch, weil das Personenprofil das Vertrauensfundament der Marke trägt.

Alt-Text-Vorschlag. „André Dieckmann, Inhaber und Geschäftsführer der Proimma GmbH, Editorial-Portrait in Schwarzweiß."

### 1.2 Portrait André Farbe Editorial

Zweck. Reserve-Variante für Sub-Seiten und Newsletter-Header in Phase 2. In Phase 1 nicht zwingend, aber als zweites Editorial-Bildmotiv zur Variation hilfreich.

Stil. Editorial-Farbportrait in derselben Editorial-Tradition wie 1.1, mit gedämpfter Farbpalette (Marken-CI-konform: dunkelblaue oder graue Bekleidung auf neutralem Hintergrund, kein Marken-Hellblau oder Marken-Dunkelblau im Hintergrund, weil Farbflächen die Editorial-Strenge stören). Sehr wenig Sättigung, eher Pastell-Anmutung.

Hintergrund. Neutraler Studio-Hintergrund in Off-White (#FAFAF8) oder sehr hellem Grau (#F2F2F2). Alternativ ein dezenter Vintage-Architektur-Hintergrund (Bibliotheks-Setting oder ruhige Innenraum-Atmosphäre), aber ablenkungsfrei.

Pose oder Komposition. Halbportrait wie 1.1, alternativ ein Drei-Viertel-Portrait stehend, mit Anzug oder Sakko ohne Krawatte. Blick zur Kamera, neutrale Mimik.

Stimmung. Wie 1.1, sachlich-nahbar.

Auflösung. 2400 mal 3000 Pixel Quelldatei.

Format. Wie 1.1.

Aspect-Ratio. 4:5 primär, 3:4 sekundär.

Beschaffungsweg. Wie 1.1, mit Vorzug auf gemeinsamen Foto-Termin, sodass mehrere Crops und Schwarzweiß plus Farbe in einem Schwung entstehen.

Wahrheitsregel-Vermerk. Wie 1.1.

Alt-Text-Vorschlag. „André Dieckmann, Inhaber und Geschäftsführer der Proimma GmbH, Editorial-Portrait."

### 1.3 Stilfoto Mehrfamilienhaus Rostock (Phase 1c optional)

Zweck. Sektions-Pause-Bild auf der Hausverwaltungs-Seite zwischen V4 Magazin-Band und V11 Erreichbarkeits-Sektion, als optionaler Editorial-Akzent. In Phase 1a und 1b nicht eingeplant, weil die Editorial-Bold-Disziplin Substanz vor Bildgewicht stellt; in Phase 1c als Wagemut-Stretch verfügbar. Alternative Anwendung als Header-Bild für den Themen-Hub-Artikel zur Bestandsübergabe.

Stil. Architektur-Editorial in der Tradition von dhk Architects, Saisei Architecture und Studio Dado aus der Premium-Inspirations-Recherche. Sehr ruhige Komposition mit geometrischer Strenge, Tageslicht ohne harte Schatten, neutrale Farbtemperatur. Kein Wide-Angle-Verzerrungseffekt, kein Drohnen-Top-Down, sondern fußläufige Augenhöhe oder leicht erhöhter Bürgersteig-Standpunkt.

Hintergrund. Tatsächliches Rostocker Mehrfamilienhaus in einem charakteristischen Stadtteil (Stadtmitte, Reutershagen, Lichtenhagen oder Kröpeliner Straße). Wahrheitsregel-kritisch: das Objekt muss real existieren und darf nicht als „typisches Verwaltungsobjekt der Proimma GmbH" suggeriert werden, sondern als Stil-Akzent für die Sektions-Pause. Genehmigung der Eigentümer ist bei direkter Identifizierbarkeit der Gebäudefassade Pflicht (Persönlichkeitsrechte, Hausrecht).

Pose oder Komposition. Asymmetrische Editorial-Bildmitte mit Hauptobjekt links oder rechts auf 60 bis 70 Prozent der Bildbreite. Himmel als ruhige Pause-Fläche oben, Bürgersteig als horizontale Pause-Fläche unten. Keine Personen im Bild. Kein parkendes Auto direkt vor der Fassade.

Stimmung. Ruhig, sachlich, ohne Stimmungsdrama. Tageslicht leicht bewölkt oder weiches Morgenlicht. Kein „goldene Stunde"-Klischee, kein „blaue Stunde"-Klischee.

Auflösung. 2400 mal 1350 Pixel Quelldatei für Landscape-Hero-Variante. Sekundäre Crops in 4:3 und 1:1 für Sub-Sektionen.

Format. AVIF Quality 75, WebP Quality 80, JPEG Quality 80.

Aspect-Ratio. 16:9 primär für Hero und Sektions-Pause, 4:3 sekundär für Themen-Hub-Artikel-Header, 1:1 für Social-Media-Reserve.

Beschaffungsweg. Erstens Eigenaufnahme mit Smartphone oder Spiegelreflex in Rostock vor Ort, mit dokumentierter Eigentümer-Genehmigung. Zweitens lizenzierte Stockfoto-Plattform mit echtem Rostock-Bezug (Adobe Stock, Getty mit DACH-Filter, Unsplash mit Editorial-Lizenz-Prüfung). Drittens ChatGPT-Image-2.0-Bildgenerierung als Letzthälftige-Notlösung mit klarer Wahrheitsregel-Schranke: das Bild darf keinen real existierenden Standort suggerieren und keine Adresse sichtbar machen.

Wahrheitsregel-Vermerk. Bei Eigenaufnahme volle Konformität, sofern Genehmigung dokumentiert. Bei Stockfoto Konformität, sofern echtes Rostocker Motiv und nicht generisches DACH-Mehrfamilienhaus mit Rostock-Etikettierung. Bei KI-Generierung kritisch, weil ChatGPT-Image-2.0 keine real existierenden Stadtmotive akkurat reproduzieren kann, deshalb auf KI-Generierung verzichten oder nur als nicht-zuordenbare Architektur-Studie einsetzen, nicht als „Rostock".

Alt-Text-Vorschlag. „Mehrfamilienhaus in Rostock, Stilaufnahme zur Sektion Mietenverwaltung."

### 1.4 Stilfoto Wohnimmobilien-Architektur (Phase 1c optional)

Zweck. Sektions-Pause-Bild auf der Maklerei-Seite zwischen V6 Magazin-Band und V10 Cal.com-Sektion, als optionaler Editorial-Akzent. Alternative Anwendung als Header-Bild für den Themen-Hub-Artikel zum Verkauf einer Wohnimmobilie. In Phase 1c verfügbar.

Stil. Architektur-Editorial wie 1.3, mit Schwerpunkt auf Detail-Aufnahme statt Vollbild-Fassade. Beispiele: Eingangstür mit Türgriff, Treppenhaus-Geländer, Fenster-Detail, Briefkasten-Reihe. Sehr ruhige Komposition mit geometrischer Strenge.

Hintergrund. Tatsächliches Rostocker Wohnobjekt-Detail. Wahrheitsregel wie 1.3.

Pose oder Komposition. Mittlere Distanz, Detail im Mittelpunkt, viel Whitespace um das Detail. Kein Personen-Element.

Stimmung. Ruhig, sachlich, keine Atmosphäre-Inszenierung.

Auflösung. 2400 mal 1800 Pixel Quelldatei für 4:3-Crop, plus 16:9 sekundär.

Format. AVIF Quality 75, WebP Quality 80, JPEG Quality 80.

Aspect-Ratio. 4:3 primär, 16:9 sekundär.

Beschaffungsweg. Wie 1.3.

Wahrheitsregel-Vermerk. Wie 1.3.

Alt-Text-Vorschlag. „Architektur-Detail einer Rostocker Wohnimmobilie, Stilaufnahme zur Sektion Maklerei."

### 1.5 Open-Graph-Bild Startseite

Zweck. Vorschau-Bild für Social-Media-Sharing der Startseite auf Facebook, LinkedIn, WhatsApp. Wird im Astro-Layout über das Frontmatter-Feld ogImage gesetzt.

Stil. Editorial-Bold-Setzung mit display-Headline und Editorial-Index. Statisches SVG-Template, gerendert zu PNG. Kein Foto-Element, sondern reine Typografie-Komposition.

Hintergrund. Off-White (#FAFAF8) als primärer Hintergrund. Optional ein dezenter Hellblau-Akzentstrich oben links als Editorial-Setzung.

Pose oder Komposition. „Hausverwaltung und Maklerei in Rostock. Inhabergeführt. Fokussiert." als display-l Hanken Grotesk Light, zentriert oder linksbündig auf 70 Prozent der Bildbreite. „Proimma" als Wortmarke unten links in 36 Pixel Light. Editorial-Index „01" oben links als 24-Pixel-Akzent in #34AEEB.

Stimmung. Editorial-Ruhe, kein Spektakel, kein Verkaufsdruck.

Auflösung. 1200 mal 630 Pixel Pflicht-Format gemäß Open-Graph-Spezifikation.

Format. PNG mit Quality 90, alternativ JPEG bei Datei-Größe-Notwendigkeit.

Aspect-Ratio. 1.91:1 wie Open-Graph-Spezifikation vorschreibt.

Beschaffungsweg. Statische SVG-Template-Datei in /public/og-images/templates/ pflegen, Astro-Build-Skript rendert SVG zu PNG via Sharp oder vergleichbarem Modul. Pro Hauptseite ein eigenes SVG-Template mit angepasster Headline und Editorial-Index.

Wahrheitsregel-Vermerk. Reine Typografie-Komposition, keine Bestandszahlen, keine Preise, keine Wachstumsversprechen, keine Trustpilot-Sterne.

Alt-Text-Vorschlag. Nicht erforderlich für OG-Bilder, weil Social-Media-Plattformen den Title-Tag als Begleittext verwenden.

### 1.6 bis 1.10 Open-Graph-Bilder Hausverwaltung, Maklerei, Über Proimma, Kontakt, Themen-Hub-Übersicht

Zweck. Wie 1.5, jeweils für die fünf weiteren Hauptseiten. Frontmatter-Feld ogImage pro Seite.

Stil. Wie 1.5, mit jeweils angepasster Headline.

Hintergrund. Wie 1.5.

Pose oder Komposition. Pro Seite eine eigene Editorial-Setzung mit angepasstem Editorial-Index (02 für Hausverwaltung, 03 für Maklerei, 04 für Über Proimma, 05 für Kontakt, 06 für Themen-Hub-Übersicht) und seitenspezifischer Headline. Beispiele. Hausverwaltung „Mietenverwaltung für Mehrfamilienhäuser in Rostock". Maklerei „Wohnimmobilien verkaufen in Rostock". Über Proimma „André Dieckmann, Inhaber". Kontakt „Erstgespräch vereinbaren". Themen-Hub-Übersicht „Wissen für Eigentümer".

Stimmung, Auflösung, Format, Aspect-Ratio, Beschaffungsweg, Wahrheitsregel-Vermerk. Wie 1.5.

Dateinamen-Konvention. og-startseite.png, og-hausverwaltung.png, og-maklerei.png, og-ueber-proimma.png, og-kontakt.png, og-themen-hub.png in /public/og-images/.

### 1.11 bis 1.14 Open-Graph-Bilder Themen-Hub-Artikel

Zweck. Wie 1.5, für die vier Themen-Hub-Erstartikel. Pro Artikel ein eigenes OG-Bild mit Artikel-spezifischer Headline.

Stil, Hintergrund, Pose oder Komposition. Wie 1.5 mit angepasster Headline und Editorial-Index. Editorial-Indizes 01 bis 04 entsprechend der Themen-Hub-Sortierung. Headlines verkürzt aus den Artikel-Titeln. Beispiele. „Hausverwaltung wechseln" mit Editorial-Index 01. „Bestandsübergabe" mit 02. „Maklerprovision § 656c BGB" mit 03. „Verkauf Wohnimmobilie Rostock" mit 04.

Stimmung, Auflösung, Format, Aspect-Ratio, Beschaffungsweg, Wahrheitsregel-Vermerk. Wie 1.5.

Dateinamen-Konvention. og-themen-hub-wechsel-hausverwaltung.png, og-themen-hub-bestandsuebergabe.png, og-themen-hub-maklerprovision.png, og-themen-hub-verkauf-wohnimmobilie.png in /public/og-images/.

### 1.15 Default-OG-Bild

Zweck. Fallback-OG-Bild für Seiten ohne explizites Frontmatter-ogImage-Feld (Impressum, Datenschutz, 404, 500). Verhindert leere OG-Vorschau.

Stil, Hintergrund, Pose oder Komposition. Reduziert auf Wortmarke „Proimma" zentriert in display-l und Subline „Hausverwaltung und Maklerei in Rostock" in body-l. Editorial-Index entfällt.

Stimmung, Auflösung, Format, Aspect-Ratio, Beschaffungsweg, Wahrheitsregel-Vermerk. Wie 1.5.

Dateinamen-Konvention. og-default.png in /public/og-images/.

### 1.16 Marken-Assets (Logo Wort-Bild-Marke und Favicon)

Sammelbrief für die zwei Marken-Asset-Posten. Logo Wort-Bild-Marke wird im Header und Footer eingesetzt, Favicon im Browser-Tab und im Apple-Touch-Icon.

#### 1.16a Logo Wort-Bild-Marke

Zweck. Wortmarke „Proimma" im Header-Bereich auf allen Seiten, in display-l Print-Echo im Footer (V12 Dunkelblauer Footer), als Open-Graph-Bild-Wortmarke unten links auf den OG-Bildern (siehe 1.5 bis 1.15).

Stil. Editorial-Wortmarke „Proimma" mit kleinem i als reine Typografie-Setzung in Hanken Grotesk Variable Light. Schreibweise ausnahmslos „Proimma" mit kleinem i, niemals „ProImma" mit Binnenmajuskel (Binnenmajuskel ist ausschließlich der grafischen Wort-Bild-Marken-Datei vorbehalten gemäß andre-preferences vom 26.04.2026). Wenn eine bestehende Wort-Bild-Marken-Datei mit Binnenmajuskel vorliegt, wird sie für die Webseite nicht verwendet, sondern durch eine reine Typografie-Setzung ersetzt.

Hintergrund. Transparent als SVG-Standard. Im Header auf Off-White (#FAFAF8), im Footer auf Dunkelblau (#242E4F).

Pose oder Komposition. Linksbündig im Header, mittig im Footer Print-Echo. Letter-Spacing minus 0.02 em gemäß DESIGN.md Sektion 3.

Auflösung. SVG vektorbasiert (auflösungsunabhängig). Plus PNG-Fallbacks für Open-Graph-Bilder und Social-Media-Profile (1024 mal 1024 Pixel als Single-Square-Variante mit „Proimma" zentriert).

Format. SVG primär für Web-Einsatz, PNG sekundär für Social-Media und OG-Bilder. Zwei Farbvarianten als getrennte SVG-Dateien. Erstens Positiv-Variante (Schrift in #1A1A1A Anthrazit auf hellem Grund). Zweitens Negativ-Variante (Schrift in #FAFAF8 Off-White auf dunklem Grund, für Footer).

Aspect-Ratio. Variabel je nach Container-Höhe. Im Header etwa 4:1 bei 24-Pixel-Höhe (96 mal 24 Pixel), im Footer etwa 5:1 bei 72-Pixel-Höhe (360 mal 72 Pixel).

Beschaffungsweg. Erstens Eigenerstellung in Figma oder Inkscape mit Hanken Grotesk Variable Light gesetzt zu „Proimma" und exportiert als SVG (etwa 30 Minuten Solo-Bauleitung). Zweitens vorhandene Wort-Bild-Marken-Datei der Proimma GmbH prüfen und auf Binnenmajuskel-Schreibweise gegenchecken; bei Binnenmajuskel-Variante neue Eigenerstellung. Drittens Astro-Komponente Logo.astro mit reinem SVG-Inline ohne separate Datei, die Hanken-Grotesk-Schrift wird beim Build über CSS gesetzt; das ist der schlankste Bau-Pfad und vermeidet zusätzliche Datei-Pflege.

Wahrheitsregel-Vermerk. Wortmarken-Element, kein inhaltliches Bild. Schreibweise „Proimma" mit kleinem i ausnahmslos.

Alt-Text-Vorschlag. „Proimma" als reines aria-label, weil Wortmarke gleich Marken-Name.

#### 1.16b Favicon

Zweck. Browser-Tab-Symbol auf allen Seiten. Wird im Astro-Layout-Head als <link rel="icon"> gesetzt. Plus Apple-Touch-Icon für iOS-Home-Screen-Anker. Plus Android-Chrome-Icon für PWA-Manifest und Android-Home-Screen.

Stil. Reine Wortmarken-Reduktion auf den Buchstaben „p" als Editorial-Initiale in Hanken Grotesk Variable Light, in #242E4F auf transparentem Hintergrund (für Browser-Tab) oder auf Off-White-Hintergrund (für Apple-Touch-Icon, weil iOS keinen transparenten Hintergrund unterstützt).

Hintergrund. Transparent für SVG-Favicon. Off-White (#FAFAF8) für Apple-Touch-Icon und Android-Chrome-Icon, weil Apple-Home-Screen automatisch quadratische Icons mit Hintergrund-Farbe erzeugt.

Pose oder Komposition. „p" zentriert auf 60 Prozent der Icon-Fläche, mit 20 Prozent Padding oben und unten und 20 Prozent links und rechts. Optisch ausbalanciert (Buchstabe „p" hat Unterlänge, deshalb leichte Vertikal-Verschiebung nach unten zur visuellen Zentrierung).

Stimmung. Reduktion auf das Wesentliche.

Auflösung. SVG vektorbasiert für moderne Browser. Plus PNG-Fallbacks in folgenden Größen. 32 mal 32 Pixel für klassisches Browser-Favicon. 180 mal 180 Pixel für Apple-Touch-Icon (iOS-Standard). 192 mal 192 Pixel und 512 mal 512 Pixel für PWA-Manifest und Android-Chrome-Icon. 16 mal 16 Pixel als Last-Resort für sehr alte Browser optional.

Format. SVG primär als <link rel="icon" type="image/svg+xml" href="/favicon.svg">. PNG für Apple-Touch-Icon als <link rel="apple-touch-icon" href="/apple-touch-icon.png">. PNG für PWA-Manifest in /public/manifest.json referenziert. ICO als Last-Resort für Internet-Explorer-Reste optional, in Phase 1 nicht nötig.

PWA-Manifest. Eine /public/manifest.json mit name „Proimma GmbH", short_name „Proimma", start_url „/", display „standalone", theme_color „#242E4F", background_color „#FAFAF8", icons-Array mit den 192er- und 512er-PNGs. Damit ist die Webseite als PWA auf Android-Home-Screen installierbar, ohne in Phase 1 vollständige PWA-Funktionalität anzubieten.

Aspect-Ratio. 1:1 für alle Favicon-Varianten.

Beschaffungsweg. Eigenerstellung in Figma oder Inkscape mit „p" in Hanken Grotesk gesetzt, als SVG exportiert, plus PNG-Export in den fünf Pflicht-Größen. Etwa 30 Minuten Solo-Bauleitung. Bei iOS-Apple-Touch-Icon Hintergrund-Farbe Off-White Pflicht, weil iOS sonst weiß setzt und Schrift verschluckt wird.

Wahrheitsregel-Vermerk. Wortmarken-Element, nicht inhaltlich.

Alt-Text-Vorschlag. Nicht erforderlich für Favicon, weil Browser den Title-Tag als Tab-Beschriftung verwendet.

### 1.17 Objektbilder mit Persönlichkeitsrechte-Hinweis (Phase 2)

Zweck. Sobald die Proimma GmbH erste Verwaltungs- oder Vermarktungsmandate hat, eine eigene Sektion „Aktuelle Mandate" oder „Referenzen" auf der Über-Proimma-Seite oder als eigene Sub-Seite. In Phase 1 nicht aktiv, weil aktueller Bestand null Wohneinheiten gemäß projekt-status.

Stil. Wenn aktiv, Editorial-Bold-konform mit Hairline-Sektionierung und ruhigen Detail-Aufnahmen ohne Personen, ähnlich 1.3 und 1.4.

Persönlichkeitsrechte-Klarstellung. Bei direkt identifizierbaren Gebäudefassaden ist die Genehmigung der Eigentümer Pflicht (Hausrecht und Recht am Bild der eigenen Sache nach BGH-Rechtsprechung). Bei Innenraum-Aufnahmen mit Möbeln oder persönlichen Gegenständen ist eine zusätzliche Genehmigung Pflicht. Bei Aufnahmen mit Personen sind Bildrechte nach KUG und DSGVO zu klären (Einwilligungserklärung schriftlich). Bei Ferienobjekten mit Mieter-Belegung ist die Mieter-Einwilligung nicht ohne Weiteres durch die Eigentümer-Einwilligung gedeckt.

Beschaffungsweg. Foto-Termin nach Mandats-Übernahme mit dokumentierter Einwilligung.

Wahrheitsregel-Vermerk. Bilder ausschließlich von tatsächlich verwalteten oder vermarkteten Objekten. Keine Stockfoto-Substitution.

In Phase 1 nicht eingesetzt. Brief dient als Vorbereitung für Phase 2.

## 2. Content-Briefs

Pro Phase-1-Hauptseite die Inhalts-Spezifikation. Für die sechs vom Texter-Chat freigegebenen Texte (Hausverwaltung, vier Themen-Hub-Artikel, Startseite) Verweis auf die freigegebene Quelle plus Sektions-Mapping ins Wireframe. Für die noch offenen Texte (Maklerei, Über Proimma, Kontakt, Themen-Hub-Übersicht-Datei-Ablage) vollständiger Brief mit Inhalts-Auftrag, Zeichenzahl, Tonalität, SEO-Keywords.

Tonalitäts-Vorgabe global. Sie-Anrede ohne Ausnahme. Sachlich, norddeutsch-direkt, persönlich, ohne Verkaufsrhetorik. „mehr als zwanzig Jahre" als belegbare Erfahrungsangabe. „Proimma" mit kleinem i. Keine Floskeln aus der Verbots-Liste. Pflicht-Wortlaute aus Auftrag wörtlich (§ 34c-Erlaubnis, § 656c BGB, § 15 ImmVV).

### 2.1 Startseite

Quelle. Vom Texter-Chat freigegeben gemäß /00_Projekt_Setup_2026/Webseiten-Texte/06_Startseite_2026-04-27.md (Datei-Ablage am 27.04.2026).

Title-Tag. „Hausverwaltung und Maklerei in Rostock. Proimma GmbH" (60 Zeichen).

Meta-Description. „Mietenverwaltung und Vermarktung von Wohnimmobilien für Eigentümer in Rostock und Umgebung. Inhabergeführt, fokussiert. Erstgespräch online vereinbaren." (160 Zeichen).

URL. proimma.de/

OG-Image. /og-images/og-startseite.png

Sektions-Mapping in das Wireframe gemäß WIREFRAMES.md Sektion 1.

Sektion 01 Hero V2. Inhalts-Auftrag. Hauptclaim „Hausverwaltung und Maklerei in Rostock. Inhabergeführt. Fokussiert." in display-xxl plus Subline „Mietenverwaltung und Vermarktung von Wohnimmobilien für Eigentümer in Rostock und Umgebung." in body-l. Plus Primär-Button „Erstgespräch vereinbaren" mit Verlinkung auf /kontakt. Zeichenzahl Hauptclaim 73 Zeichen, Subline 95 Zeichen. SEO-Keywords primär „Hausverwaltung Rostock", „Maklerei Rostock", sekundär „Mietenverwaltung", „Wohnimmobilien Rostock".

Sektion 02 Hero-Datenpunkte V3. Inhalts-Auftrag. Drei Tabular-Nums-Datenpunkte gemäß WIREFRAMES.md mit jeweils zwei Sätzen Klartext-Erläuterung. Zeichenzahl pro Datenpunkt-Erläuterung 100 bis 160 Zeichen. SEO-Keywords sekundär „Antwortzeit", „Notfall-Erreichbarkeit", „Branchenerfahrung".

Sektion 03 Editorial-Verzichtsblock V14. Inhalts-Auftrag. Vier Verzichts-Aussagen plus Begleitsatz gemäß WIREFRAMES.md. Zeichenzahl pro Verzichts-Aussage 30 bis 50 Zeichen, Begleitsatz 130 bis 160 Zeichen. SEO-Keywords keine spezifischen, weil Verzicht-Block kein Keyword-Träger.

Sektion 04 und 05 Säulen-Übersicht. Inhalts-Auftrag. Pro Säule eine kurze Klartext-Beschreibung (Mietenverwaltung, Maklerei) plus Tertiär-Button mit Verlinkung auf die jeweilige Säulen-Seite. Zeichenzahl pro Säulen-Beschreibung 200 bis 280 Zeichen.

Sektion 06 Substanz-Datenpunkte V7. Inhalts-Auftrag. Fünf Pflicht-Vertrauenselemente in print-inspirierter Setzung gemäß WIREFRAMES.md. Zeichenzahl pro Datenpunkt 80 bis 160 Zeichen, Pflicht-Wortlaute zur § 34c-Erlaubnis und Vermögensschadenhaftpflicht wörtlich aus Auftrag.

Sektion 07 Personenprofil-Kachel V9. Inhalts-Auftrag. Klartext-Beschreibung des belegbaren Erfahrungshintergrunds in 250 bis 400 Zeichen. Verlinkung auf /ueber-proimma.

Sektion 08 Themen-Hub-Vorschau. Inhalts-Auftrag. Drei der vier Erstartikel als Editorial-Karten 5.12 mit Editorial-Index, Titel, Lese-Dauer, Datum, Klartext-Anriss in 80 bis 160 Zeichen pro Karte. Verlinkung auf /themen-hub.

Sektion 09 Cal.com-Termin-Sektion V10. Inhalts-Auftrag. Editorial-Headline „Erstgespräch vereinbaren", drei Datenpunkte (Dauer 30 Minuten, kostenfrei, Online via Zoom oder vor Ort), Cal.com-iFrame-Embed plus Klartext-Fallback.

Tonalität. Markenkern-Tonalität durchgehend. Norddeutsch-direkt, sachlich, ohne Verkaufsrhetorik.

### 2.2 Hausverwaltung

Quelle. Vom Texter-Chat freigegeben gemäß /00_Projekt_Setup_2026/Webseiten-Texte/01_Hausverwaltung_2026-04-27.md.

Title-Tag. „Mietenverwaltung Mehrfamilienhäuser. Proimma GmbH Rostock" (60 Zeichen).

Meta-Description. „Mietenverwaltung für private Eigentümer von Mehrfamilienhäusern in Rostock und Umgebung. Inhabergeführt, mit klarer Mechanik der Bestandsübernahme." (152 Zeichen).

URL. proimma.de/hausverwaltung

OG-Image. /og-images/og-hausverwaltung.png

Sektions-Mapping in das Wireframe gemäß WIREFRAMES.md Sektion 2.

Sektion 01 Sektions-Hero. Inhalts-Auftrag. Headline „Mietenverwaltung für Mehrfamilienhäuser in Rostock." in display-xl plus Subline „Eigentümer von Mehrfamilienhäusern und Wohn- und Geschäftshäusern in Rostock und Umgebung. Mit klarer Mechanik der Bestandsübernahme." in body-l. Zeichenzahl Headline 56 Zeichen, Subline 144 Zeichen.

Sektion 02 Magazin-Band V4. Inhalts-Auftrag. Klartext zur Mietenverwaltung mit Definition und Abgrenzung gegen WEG ohne das Wort WEG zu nennen, gemäß Texter-Briefing 27.04.2026. Plus vier Service-Punkte (Bewirtschaftung, Mieterkommunikation, Buchhaltung, Wartung) mit Tabular-Nums-Datenpunkten und Klartext-Erläuterung. Zeichenzahl Klartext 600 bis 900 Zeichen, pro Service-Punkt 80 bis 160 Zeichen.

Sektion 03 SVG-Stufenleiter V5 (Phase 1c optional). Inhalts-Auftrag. Fünf Schritte der Übernahme gemäß WIREFRAMES.md mit jeweils zwei bis drei Sätzen Klartext-Erläuterung. Zeichenzahl pro Schritt 120 bis 200 Zeichen.

Sektion 04 Erreichbarkeits-Sektion V11. Inhalts-Auftrag. Klartext gemäß Footer-Microcopy aus DESIGN.md Sektion 7. Zeichenzahl 200 bis 320 Zeichen.

Sektion 05 Cal.com-Sektion V10 kompakt. Inhalts-Auftrag. Editorial-Headline „Erstgespräch zur Mietenverwaltung vereinbaren" plus Cal.com-iFrame-Embed.

SEO-Keywords. Primär „Mietenverwaltung Rostock", „Hausverwaltung Mehrfamilienhaus Rostock", sekundär „Bestandsübernahme", „Eigentümer Mehrfamilienhaus", „Wohn- und Geschäftshäuser".

Tonalität. Texter-Briefing-Vorgabe, sachlich-mechanisch, ohne Floskeln.

Verbotene Begriffe. „WEG" auf der Hauptseite vermeiden gemäß Texter-Briefing. „Persönlich, verlässlich, kompetent, individuell" als Selbstbeschreibung verboten.

### 2.3 Maklerei

Quelle. Texter-Chat noch in Arbeit, Pendenz für 28.04.2026. Bewertungs-Auswahl aus 27 Google-Bewertungen mit Durchschnitt 5,0 noch offen.

Title-Tag. „Wohnimmobilien verkaufen in Rostock. Proimma GmbH" (52 Zeichen).

Meta-Description. „Vermarktung von Einfamilienhäusern, Eigentumswohnungen, Mehrfamilienhäusern und Grundstücken für Eigentümer in Rostock und Umgebung. Provision nach § 656c BGB." (159 Zeichen).

URL. proimma.de/maklerei

OG-Image. /og-images/og-maklerei.png

Sektions-Mapping in das Wireframe gemäß WIREFRAMES.md Sektion 3.

Sektion 01 Sektions-Hero. Inhalts-Auftrag. Headline „Wohnimmobilien verkaufen in Rostock." in display-xl plus Subline „Vermittlung von Einfamilienhäusern, Doppel- und Reihenhäusern, Eigentumswohnungen, Mehrfamilienhäusern und Grundstücken in Rostock und Umgebung." in body-l. Zeichenzahl Headline 36 Zeichen, Subline 156 Zeichen.

Sektion 02 V6 Magazin-Band. Inhalts-Auftrag. Klartext zur Maklerei mit Spektrum-Beschreibung. Markenkern-Vorgabe Variante-zwei-Einzugsradius wörtlich „vorrangig in Rostock und Umgebung, mit Schwerpunkt im Umkreis von etwa 100 Kilometern, Einzelmandate auch darüber hinaus auf Anfrage". Plus drei Service-Datenpunkte (Vermarktungs-Zeitplan, Kommunikations-Rhythmus, Vermögensschadenhaftpflicht). Zeichenzahl Klartext 600 bis 900 Zeichen, pro Service-Punkt 80 bis 160 Zeichen.

Sektion 03 Provisionslogik § 656c BGB. Inhalts-Auftrag. Provisionslogik-Pflicht-Wortlaut wörtlich aus Auftrag „Provision nach § 656c BGB, geteilt zwischen Verkäufer und Käufer. 7,14 Prozent inklusive Mehrwertsteuer vom notariellen Kaufpreis, je 3,57 Prozent inklusive Mehrwertsteuer auf Verkäufer- und Käuferseite. Fällig nur im Erfolgsfall." Display-l-Hervorhebung der 7,14-Prozent-Aussage gemäß WIREFRAMES.md Sektion 3 Desktop. Zeichenzahl Pflicht-Wortlaut 280 Zeichen plus optionale Erläuterung 150 bis 250 Zeichen.

Sektion 04 Bewertungs-Sektion. Inhalts-Auftrag. Zwei bis vier echte Google-Bewertungen wörtlich aus den 27 Google-Bewertungen mit Durchschnitt 5,0 unter Proimma GmbH. Auswahl folgt aus Texter-Chat. Pro Bewertung Zitat in body-l plus Quellenangabe „Google-Bewertung" in caption.

Bewertungs-Auswahl-Heuristiken für die zwei bis vier zu wählenden Bewertungen. Erstens, sprachliche Substanz. Bewertungen, die einen konkreten Sachverhalt beschreiben (Vermarktungsverlauf, Erreichbarkeit, Kommunikations-Qualität, Vertragsabwicklung), sind generischen Lob-Bewertungen („sehr empfehlenswert", „top") vorzuziehen. Zweitens, inhaltliche Relevanz für die Eigentümer-Zielgruppe. Bewertungen, die aus Eigentümer-Perspektive geschrieben sind (Verkäufer eines Objekts, Vermieter), sind aus Käufer- oder Mieter-Perspektive geschriebenen Bewertungen vorzuziehen, weil Proimmas Auftraggeberseite Eigentümer ist. Drittens, Authentizitäts-Marker. Bewertungen mit konkreter Objekt-Charakterisierung (zum Beispiel „Verkauf einer Eigentumswohnung in Rostock-Stadtmitte") sind generischen Bewertungen vorzuziehen, ohne dass Adressen oder Namen genannt werden. Viertens, Diversität. Wenn vier Bewertungen ausgewählt werden, idealerweise eine Mischung aus zwei Verkaufs-Bewertungen, einer Vermietungs-Bewertung und einer Beratungs-Bewertung, sodass das Spektrum der Maklerei-Tätigkeit abgebildet wird. Fünftens, Sprachliche Markenkonformität. Bewertungen mit floskelhafter Sprache („Wir sind sehr zufrieden", „Top Service") sind solchen mit nachvollziehbarem Erfahrungsbericht nachgeordnet, weil Proimmas eigene Tonalität sachlich und prüfbar ist und die zitierten Bewertungen dieser Tonalität nahekommen sollten.

Verfahren der Auswahl. Erstens, der Texter-Chat liefert eine Vorauswahl von sechs bis acht Bewertungen, die nach den fünf Heuristiken gefiltert sind. Zweitens, André entscheidet zwischen den vorausgewählten Bewertungen, welche zwei bis vier in die Maklerei-Seite übernommen werden. Drittens, der Top-Manager-Chat prüft die finale Auswahl gegen die Wahrheitsregel (echte Bewertung, korrekte wörtliche Wiedergabe, korrekte Quellenangabe „Google-Bewertung").

Sektion 05 Cal.com-Sektion V10 kompakt. Inhalts-Auftrag. Editorial-Headline „Erstgespräch zur Vermarktung vereinbaren" plus Cal.com-iFrame-Embed.

SEO-Keywords. Primär „Wohnimmobilie verkaufen Rostock", „Immobilienmakler Rostock", sekundär „Maklerprovision § 656c BGB", „Mehrfamilienhaus verkaufen Rostock", „Einfamilienhaus verkaufen Rostock", „Grundstück verkaufen Rostock".

Tonalität. Texter-Briefing-Vorgabe.

Bewertungs-Auswahl-Hinweis. Texter-Chat hat drei Wege angeboten (Vorauswahl von André, URL-Recherche durch Texter-Chat, direkte Vorgabe von zwei bis vier Bewertungen). Auswahl-Entscheidung ist Pendenz aus projekt-status für 28.04.2026.

### 2.4 Über Proimma

Quelle. Texter-Chat noch in Arbeit, Pendenz nach Abschluss der Maklerei-Seite gemäß Reihenfolge im Texter-Briefing.

Title-Tag. „André Dieckmann, Inhaber. Proimma GmbH Rostock" (49 Zeichen).

Meta-Description. „Mehr als zwanzig Jahre Branchenerfahrung in der Immobilienwirtschaft. Stationen als Immobilienkaufmann, Asset Manager dänischer Fonds, Hausverwalter und Bewirtschafter." (171 Zeichen).

URL. proimma.de/ueber-proimma

OG-Image. /og-images/og-ueber-proimma.png

Sektions-Mapping in das Wireframe gemäß WIREFRAMES.md Sektion 4.

Sektion 01 Sektions-Hero. Inhalts-Auftrag. Headline „André Dieckmann" in display-xl plus Subline „Inhaber und Geschäftsführer der Proimma GmbH." in body-l. Zeichenzahl Headline 16 Zeichen, Subline 46 Zeichen.

Sektion 02 Berufsbiografie V9. Inhalts-Auftrag. Editorial-Mini-Story über die Arbeitsweise in zwei bis drei Absätzen redaktioneller Reflexion, ausschließlich auf belegbarem Erfahrungshintergrund (Wahrheitsregel). Stationen Immobilienkaufmann, Asset Manager dänischer Fonds, Mitaufbau einer Hausverwaltung, Tätigkeit als Hausverwalter und Bewirtschafter, heute Inhaber Proimma GmbH. Keine erfundenen Klientengeschichten, keine pseudo-anekdotischen Beratungsszenen. Zeichenzahl 800 bis 1200 Zeichen.

Sektion 03 Stamm-Daten-Sektion. Inhalts-Auftrag. Pflicht-Stammdaten wörtlich aus Auftrag in print-inspirierter Setzung. Reihenfolge Anbieter, Vertretung, Handelsregister, Steuern, Berufsrechtliches mit § 34c-Pflicht-Wortlaut, Vermögensschadenhaftpflicht-Pflicht-Wortlaut. Zeichenzahl ausschließlich Pflicht-Wortlaute, keine eigene Formulierungs-Freiheit.

Sektion 04 Backup-Netzwerk. Inhalts-Auftrag. Klartext gemäß Markenkern-Vorgabe Backup-Netzwerk-Logik beim Pfeiler Direkt. Beispiel-Formulierung „Geführt von André Dieckmann mit mehr als zwanzig Jahren Branchenerfahrung in der Immobilienwirtschaft, gestützt auf ein Netzwerk aus festem Hausmeisterdienst und ausgewählten Handwerkern." Zeichenzahl 250 bis 400 Zeichen. Namentliche Erwähnung von Maik Krüger aus Kessin nur nach dessen Zustimmung.

Sektion 05 Empfehlungspartner V8 Min. Inhalts-Auftrag. Klartext-Erwähnung der Empfehlungspartner-Kategorien (Notare, Steuerberater, Anwälte, Banken). Zeichenzahl 200 bis 320 Zeichen. Keine Logos, keine konkreten Personen-Namen ohne Zustimmung.

Sektion 06 Cal.com-Sektion V10 kompakt. Inhalts-Auftrag. Wie 2.1 Sektion 09.

SEO-Keywords. Primär „André Dieckmann Inhaber Proimma", „Proimma GmbH Rostock", sekundär „inhabergeführt Hausverwaltung", „Asset Manager Immobilien", „Hausverwalter Rostock".

Tonalität. Wahrheitsregel ausnahmslos. Keine erfundenen Beratungsszenen, keine Klientenzitate. Persönliche Nähe trotz sachlicher Tonalität.

### 2.5 Kontakt

Quelle. Texter-Chat noch in Arbeit, Pendenz nach Über-Proimma-Seite gemäß Reihenfolge im Texter-Briefing.

Title-Tag. „Erstgespräch vereinbaren. Proimma GmbH Rostock" (47 Zeichen).

Meta-Description. „Termin online über Cal.com vereinbaren oder Anfrage an info@proimma.de senden. Werktags 9 bis 17 Uhr unter 0173-6335917 erreichbar." (133 Zeichen).

URL. proimma.de/kontakt

OG-Image. /og-images/og-kontakt.png

Sektions-Mapping gemäß WIREFRAMES.md Sektion 5.

Sektion 01 Sektions-Hero. Inhalts-Auftrag. Headline „Erstgespräch vereinbaren" in display-xl plus Klartext-Aussage „Wir nehmen uns Zeit für ein erstes Gespräch zur Klärung Ihrer Ausgangslage und Erwartungen." Zeichenzahl Headline 24 Zeichen, Klartext 90 Zeichen.

Sektion 02 Datenpunkte. Inhalts-Auftrag. Drei Datenpunkte „30 Min. Dauer", „Kostenfrei Investition", „Online via Zoom oder vor Ort in Rostock Format". Zeichenzahl pro Datenpunkt 30 bis 60 Zeichen.

Sektion 03 Cal.com-Sektion V10. Inhalts-Auftrag. Editorial-Headline „Termin online buchen" plus Cal.com-iFrame-Embed plus Fallback-Klartext „Falls die Termin-Anzeige nicht lädt, schreiben Sie an info@proimma.de oder rufen Sie unter 0173-6335917 an." Zeichenzahl Fallback 130 Zeichen.

Sektion 04 Schriftliche-Anfrage-Sektion. Inhalts-Auftrag. Editorial-Headline „Schriftliche Anfrage" plus Kontaktformular gemäß DESIGN.md 5.3 mit Form-Labels, Pflichtfeld-Markierung, Honeypot, Primär-Button „Anfrage absenden". Plus Klartext „Pflichtfelder sind mit einem Stern markiert." Zeichenzahl Klartext 50 Zeichen.

Sektion 05 Klassische Kontaktdaten. Inhalts-Auftrag. Adresse Bremer Straße 12, 18057 Rostock. Telefon 0173-6335917. E-Mail info@proimma.de. Erreichbarkeits-Zeile „Werktags 9 bis 17 Uhr erreichbar. Notfall-Erreichbarkeit für Mieter rund um die Uhr über die separate Notfall-Nummer im Mietvertrag." Zeichenzahl 250 bis 350 Zeichen.

SEO-Keywords. Primär „Proimma GmbH Kontakt", „Erstgespräch Hausverwaltung Rostock", sekundär „Termin Cal.com", „Hausverwaltung Anfrage Rostock".

Tonalität. Sachlich-direkt, ohne Verkaufsrhetorik. Kein „Wir freuen uns auf Sie" gemäß Texter-Briefing.

### 2.6 Themen-Hub-Übersicht

Quelle. Inhaltlich vom Texter-Chat freigegeben gemäß projekt-status, Datei-Ablage am 28.04.2026 nachzuziehen.

Title-Tag. „Wissen für Eigentümer. Proimma GmbH Rostock" (44 Zeichen).

Meta-Description. „Fachartikel zu Hausverwaltungs-Wechsel, Bestandsübergabe, Maklerprovision und Verkauf einer Wohnimmobilie in Rostock. Belegbares Branchenwissen für Eigentümer." (160 Zeichen).

URL. proimma.de/themen-hub

OG-Image. /og-images/og-themen-hub.png

Sektions-Mapping gemäß WIREFRAMES.md Sektion 6.

Sektion 01 Sektions-Hero. Inhalts-Auftrag. Headline „Wissen für Eigentümer" in display-xl plus Subline „Belegbares Branchenwissen für Eigentümer in Rostock und Umgebung. Zu Hausverwaltungs-Wechsel, Bestandsübergabe, Maklerprovision und Verkauf einer Wohnimmobilie." Zeichenzahl Headline 22 Zeichen, Subline 175 Zeichen.

Sektion 02 Editorial-Karten 5.12. Inhalts-Auftrag. Vier Editorial-Karten für die Erstartikel mit Editorial-Index 01 bis 04, Artikel-Titel in h3, Lese-Dauer und Datum in caption Tabular Nums, Klartext-Anriss in body-m. Zeichenzahl pro Anriss 80 bis 160 Zeichen. Reihenfolge entspricht der Themen-Hub-Reihenfolge im projekt-status (Wechsel der Hausverwaltung, Bestandsübergabe, Maklerprovision § 656c BGB, Verkauf einer Wohnimmobilie in Rostock).

SEO-Keywords. Primär „Wissen Eigentümer Hausverwaltung", „Ratgeber Mietenverwaltung", sekundär „Hausverwalter Wechsel Rostock", „Maklerprovision Rostock".

Tonalität. Wie Markenkern.

### 2.7 Themen-Hub-Artikel

Vier Artikel als eigene Sub-Seiten unter /themen-hub/. Quelle pro Artikel vom Texter-Chat freigegeben gemäß /00_Projekt_Setup_2026/Webseiten-Texte/02_Themen-Hub_Artikel-1_Wechsel-Hausverwaltung_2026-04-27.md, 03_Themen-Hub_Artikel-2_Bestandsuebergabe_2026-04-27.md, 04_Themen-Hub_Artikel-3_Maklerprovision_2026-04-27.md, 05_Themen-Hub_Artikel-4_Verkauf-Wohnimmobilie_2026-04-27.md.

Pro Artikel Title-Tag, Meta-Description, URL, OG-Image, Inhalts-Verweis auf Quelle, Sektions-Mapping gemäß WIREFRAMES.md Sektion 7. Zeichenzahl pro Artikel 600 bis 900 Wörter gemäß Texter-Briefing 27.04.2026.

Artikel 1 Wechsel der Hausverwaltung. Title „Hausverwaltung wechseln. Proimma GmbH Rostock" (47 Zeichen). Meta-Desc „Worauf Eigentümer beim Wechsel der Hausverwaltung achten sollten. Sieben Schritte für eine saubere Bestandsübergabe in Rostock und Umgebung." (147 Zeichen). URL proimma.de/themen-hub/wechsel-hausverwaltung. OG-Image og-themen-hub-wechsel-hausverwaltung.png. SEO-Keywords primär „Hausverwaltung wechseln Rostock", sekundär „Hausverwalter Wechsel Eigentümer", „Bestandsübergabe Rostock".

Artikel 2 Bestandsübergabe. Title „Bestandsübergabe Mietenverwaltung. Proimma GmbH Rostock" (56 Zeichen). Meta-Desc „Wie eine saubere Bestandsübergabe kaufmännisch und technisch abläuft. Anleitung für Eigentümer in Rostock und Umgebung." (130 Zeichen). URL proimma.de/themen-hub/bestandsuebergabe. OG-Image og-themen-hub-bestandsuebergabe.png. SEO-Keywords primär „Bestandsübergabe Hausverwaltung", sekundär „kaufmännische Übergabe Mietenverwaltung", „technische Übergabe Mehrfamilienhaus".

Artikel 3 Maklerprovision § 656c BGB. Title „Maklerprovision § 656c BGB. Proimma GmbH Rostock" (50 Zeichen). Meta-Desc „Wie die Maklerprovision nach § 656c BGB konkret gerechnet wird. 7,14 Prozent inklusive Mehrwertsteuer geteilt zwischen Verkäufer und Käufer." (146 Zeichen). URL proimma.de/themen-hub/maklerprovision. OG-Image og-themen-hub-maklerprovision.png. SEO-Keywords primär „Maklerprovision § 656c BGB", sekundär „Provisionslogik Verkauf Wohnimmobilie", „Maklergebühr Rostock".

Artikel 4 Verkauf einer Wohnimmobilie in Rostock. Title „Wohnimmobilie verkaufen in Rostock. Proimma GmbH" (48 Zeichen). Meta-Desc „Was Eigentümer beim Verkauf einer Wohnimmobilie in Rostock realistischerweise erwarten dürfen. Vermarktung und Kaufpreis-Erwartung." (138 Zeichen). URL proimma.de/themen-hub/verkauf-wohnimmobilie. OG-Image og-themen-hub-verkauf-wohnimmobilie.png. SEO-Keywords primär „Wohnimmobilie verkaufen Rostock", sekundär „Vermarktung Eigentümer", „Kaufpreis Rostock".

Sektions-Mapping pro Artikel. Sektion Breadcrumb 5.11 mit Pfad Startseite, Themen-Hub, Artikel-Titel. Sektion 01 Artikel-Hero mit Editorial-Index, display-l-Headline, Lese-Dauer-Caption. Sektion 02 bis 04 Artikel-Hauptteil mit eigenen H2-Zwischenüberschriften und body-l-Absätzen. Sektion 05 Verwandte Beiträge mit drei Editorial-Karten der jeweils anderen Erstartikel. Sektion 06 Cal.com-Termin-Sektion kompakt mit Headline „Im Erstgespräch klären wir Ihre Fragen zum [Artikel-Thema]".

Tonalität pro Artikel. Sachliche Erklärung mit Belegtem, ohne erfundene Fallbeispiele, ohne Klientenzitate. Keine Inhalte aus den fünf Kernthemen Immobilien Ratgeber.

### 2.8 Impressum (minimalistisch)

Quelle. Texter-Chat noch in Arbeit, Pendenz nach Über-Proimma-Seite und Kontakt-Seite gemäß Reihenfolge im Texter-Briefing. Inhalt überwiegend Pflicht-Wortlaute aus Auftrag.

Title-Tag. „Impressum. Proimma GmbH Rostock" (32 Zeichen).

Meta-Description. „Pflichtangaben der Proimma GmbH gemäß § 5 TMG. Geschäftsführer André Dieckmann, HRB 16077 Amtsgericht Rostock, einheitliche § 34c-Erlaubnis." (143 Zeichen).

URL. proimma.de/impressum

OG-Image. /og-images/og-default.png

Sektions-Mapping gemäß WIREFRAMES.md Sektion 9.1. Min-Variante mit Editorial-Indizes 01 bis 09 für die neun Pflicht-Blöcke (Hero, Anbieter, Vertretungsberechtigt, Handelsregister, Steuern, Berufsrechtliches mit § 34c und Vermögensschadenhaftpflicht, Kontakt, Verbraucherstreitbeilegung, EU-Online-Streitbeilegung).

Pflicht-Wortlaute wörtlich aus Auftrag.

Anbieter „Proimma GmbH, Bremer Straße 12, 18057 Rostock."

Vertretungsberechtigt „André Dieckmann, Geschäftsführer."

Handelsregister „HRB 16077 Amtsgericht Rostock. Umwandlungsurkunde UVZ 1891/2024 Notar Robert Boris Gaentzsch."

Steuern „USt-IdNr DE359185515. Steuernummer 079/116/01766."

Berufsrechtliches „Erlaubnis nach § 34c Abs. 1 Satz 1 Nr. 1 und Nr. 4 GewO, Bescheid der Hansestadt Rostock vom 31.03.2026, Aktenzeichen gew-1270-2024-AD3231. Aufsichtsbehörde Hansestadt Rostock. Bezeichnung Immobilienmakler und -verwalter (Bundesrepublik Deutschland). Vermögensschadenhaftpflicht-Versicherung gemäß § 15 ImmVV mit Mindestsummen 500.000 Euro je Fall und 1 Million Euro pro Jahr."

Kontakt „info@proimma.de, 0173-6335917."

Verbraucherstreitbeilegung „Die Proimma GmbH ist nicht bereit oder verpflichtet, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen (§ 36 VSBG)."

EU-Online-Streitbeilegung „ec.europa.eu/consumers/odr (Art. 14 Abs. 1 ODR-Verordnung)."

Stretch-Variante V13 Wagemut Print-Impressum-Magazin-Doppelseite in Phase 1c. Initial-Buchstabe „I" für Impressum, Marginalien-Spalte rechts mit Querverweisen zu Aufsichtsbehörde, Notar, Bezeichnung, Versicherer.

SEO-Keywords. Nicht relevant für Pflicht-Sektion.

Tonalität. Sachlich-rechtlich, keine Floskeln.

### 2.9 Datenschutz (minimalistisch)

Quelle. Texter-Chat noch in Arbeit, Pendenz nach Impressum gemäß Reihenfolge im Texter-Briefing. Inhalt vollständig DSGVO-konform.

Title-Tag. „Datenschutzerklärung. Proimma GmbH Rostock" (43 Zeichen).

Meta-Description. „Datenschutzerklärung der Proimma GmbH gemäß DSGVO. Plausible Analytics cookielos, Brevo Newsletter EU-Hosting, Plunk Kontaktformular Frankfurt." (149 Zeichen).

URL. proimma.de/datenschutz

OG-Image. /og-images/og-default.png

Sektions-Mapping gemäß WIREFRAMES.md Sektion 9.2 mit Editorial-Indizes 01 bis 07.

Pflichtinhalte gemäß DESIGN.md Sektion 9.

Verantwortlicher. Proimma GmbH, vertreten durch André Dieckmann, Bremer Straße 12, 18057 Rostock, info@proimma.de.

Erhobene Daten. Server-Logs (IP-Adresse, User-Agent, Zeitstempel) Aufbewahrung sieben Tage rotierend bei All-Inkl. Plausible Analytics aggregiert ohne Cookies, EU-Hosting Frankfurt. Kontaktformular-Eingaben (Name, E-Mail, Anliegen, optional Telefonnummer) übertragen an info@proimma.de und Plunk EU-Hosting Frankfurt. Newsletter-Anmeldungen ab Phase 2 über Brevo Sitz Berlin und Paris.

Rechtsgrundlagen. Art. 6 Abs. 1 lit. b DSGVO Vertragsanbahnung, Art. 6 Abs. 1 lit. f DSGVO berechtigte Interessen.

Cal.com-Embed. Cal.com Inc. Sitz USA, EU-Daten-Verarbeitungs-Vereinbarung gemäß Cal.com-DPA und Standardvertragsklauseln. Setzt nach Aktivierung technisch erforderliche Session-Cookies. Schrems-II-Restrisiko transparent benannt.

Cookies. Plausible cookielos. Cal.com-Embed setzt nach Aktivierung technisch erforderliche Session-Cookies (§ 25 Abs. 2 Nr. 2 TTDSG).

Rechte der Betroffenen. Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch, Datenübertragbarkeit. Anfragen an info@proimma.de. Beschwerderecht beim Landesbeauftragten für Datenschutz und Informationsfreiheit Mecklenburg-Vorpommern.

SEO-Keywords. Nicht relevant für Pflicht-Sektion.

Tonalität. Sachlich-rechtlich, DSGVO-konform.

## 3. Bilder-Beschaffungs-Sequenz und Verantwortlichkeit

Phase-1a-Pflicht. Erstens Portrait André Schwarzweiß Editorial gemäß 1.1 in einer der drei Beschaffungswege (Bestand prüfen, Foto-Termin neu, ChatGPT-Image-2.0 als Brückenlösung). Zweitens Logo Wort-Bild-Marke gemäß 1.16a als reine Typografie-SVG plus zwei Farbvarianten (Positiv und Negativ). Drittens Favicon mit PWA-Manifest und Apple-Touch-Icon gemäß 1.16b. Viertens elf OG-Bilder gemäß 1.5 bis 1.15 als statische SVG-Templates plus PNG-Build im Astro-Build-Schritt.

Phase-1b-Pflicht. Erstens Portrait André Farbe Editorial gemäß 1.2 als Reserve, sofern Foto-Termin durchgeführt wird, sodass mehrere Crops in einem Schwung entstehen.

Phase-1c-optional. Erstens Stilfoto Mehrfamilienhaus Rostock gemäß 1.3 als Sektions-Pause-Bild auf Hausverwaltungs-Seite. Zweitens Stilfoto Wohnimmobilien-Architektur gemäß 1.4 als Sektions-Pause-Bild auf Maklerei-Seite.

Phase-2-vertagt. Objektbilder mit Persönlichkeitsrechte-Hinweis gemäß 1.17, sobald erste Verwaltungs- oder Vermarktungsmandate vorliegen.

Verantwortlichkeit pro Beschaffungs-Posten ist in Teil 5 (Lücken-Audit) zu wiederholen mit Vorlauf-Zeit und Kosten-Schätzung.

## Selbstprüfung

Vollständigkeit. Bilder-Briefs für 17 Bild-Posten (Portrait Schwarzweiß, Portrait Farbe, zwei Stilfoto-Briefs Phase 1c, sechs OG-Bilder Hauptseiten, vier OG-Bilder Themen-Hub-Artikel, Default-OG-Bild, Favicon, Objektbilder Phase 2). Pro Brief alle neun Pflichtfelder (Zweck, Stil, Hintergrund, Pose oder Komposition, Stimmung, Auflösung, Format, Aspect-Ratio, Beschaffungsweg) plus Wahrheitsregel-Vermerk plus Alt-Text-Vorschlag. Content-Briefs für alle sieben Phase-1-Hauptseiten plus Impressum und Datenschutz minimalistisch. Pro Hauptseite Title-Tag, Meta-Description, URL, OG-Image-Verweis und Sektions-Mapping in das Wireframe. Pro Sektion Inhalts-Auftrag, Zeichenzahl, Tonalität, SEO-Keywords. Pflicht-Wortlaute aus Auftrag (§ 34c-Erlaubnis, § 656c BGB, § 15 ImmVV) wörtlich übernommen. Bilder-Beschaffungs-Sequenz mit Phasen-Zuordnung 1a, 1b, 1c und Phase-2-Vertagung.

Andre-Regeln Proimma. Sie-Form durchgehend in den Microcopy-Beispielen. Keine Trennstriche, keine strukturierende Fettschrift, keine Bullet-Points außerhalb der notwendigen Struktur. Keine verbotenen Floskeln. „Proimma" mit kleinem i durchgehend. „mehr als zwanzig Jahre" exakt in den Inhalts-Aufträgen für Über Proimma und Personenprofil. Schwesterfirma Immobilien Ratgeber strikt ausgeklammert. Strikte Ausschlüsse eingehalten in den Inhalts-Aufträgen (kein BOTTIMMO, kein Home Staging, keine 360-Grad-Fotos, keine WEG-Marketing-Inhalte, keine Gewerbeimmobilien-Verwaltung, keine fünf Kernthemen). Externe Kommunikationsregel eingehalten in den Inhalts-Aufträgen (keine Preise, keine Bestandszahlen, keine Wachstumsziele, info@proimma.de als einzige externe Adresse).

Schärfe. Bilder-Briefs sind nicht vage, sondern mit konkreten Pixel-Auflösungen, Aspect-Ratios, Format-Quality-Settings und Beschaffungsweg-Reihenfolgen versehen. Wahrheitsregel-Vermerk pro Bild explizit, mit konkretem Risiko-Hinweis bei KI-Generierung von Stadtmotiven. Persönlichkeitsrechte-Hinweis bei Objektbildern mit drei Rechtsrahmen (Hausrecht, Recht am Bild der eigenen Sache, KUG plus DSGVO bei Personenaufnahmen, Mieter-Einwilligung bei belegten Ferienobjekten). Content-Briefs sind seitenscharf gegliedert mit Sektions-Mapping ins Wireframe und konkreten Zeichenzahl-Spannen. Bewertungs-Auswahl-Pendenz aus dem Texter-Chat ist als offener Punkt zur Klärung markiert.

Wagemut. Drei Wagemut-Setzungen in den Briefs verankert. Erstens Editorial-Bold-konsequenter Verzicht auf Stockfoto-Optik in Phase 1a und 1b, mit Stilfotos nur als Phase 1c-Stretch oder Phase 2. Zweitens Wahrheitsregel-konsequente Ablehnung KI-generierter Stadtmotive, weil ChatGPT-Image-2.0 keine real existierenden Standorte akkurat reproduziert. Drittens Print-Impressum-Magazin-Doppelseite als V13-Wagemut-Stretch in Phase 1c mit Marginalien-Logik.

Schärfung 28.04.2026 nach Selbstprüfung. Sechs Lücken geschlossen. Erstens, neuer Brief 1.0 Hero-Bild-Strategie und Pflicht-Klärung mit drei Lesarten (Editorial-Hero ohne Foto, funktionales Hero-Bild-Äquivalent als Portrait André auf Über-Proimma-Seite, optionale Phase-1c-Hero-Stadtmotiv-Variante mit Wahrheitsregel-Schranke). Zweitens, Brief 1.16 erweitert zum Sammelbrief Marken-Assets mit 1.16a Logo Wort-Bild-Marke (reine Typografie-SVG, Positiv- und Negativ-Variante, Schreibweise „Proimma" mit kleinem i ausnahmslos) und 1.16b Favicon (mit PWA-Manifest, Apple-Touch-Icon-Spezifikation, Pixel-Größen 32, 180, 192, 512). Drittens, Konventions-Block erweitert um Bilder-Komprimierungs-Tool-Empfehlung (Sharp Astro-nativ, Squoosh manuell, ImageOptim Quelldateien). Viertens, Tonalitäts-Vorgabe global erweitert um Anglizismen-Ausschluss (digital first, smart property, next generation, state of the art, all-in-one-Lösung, Game-Changer, Best Practice). Fünftens, Bewertungs-Auswahl-Heuristiken für Maklerei-Sektion 04 mit fünf konkreten Auswahl-Kriterien (sprachliche Substanz, inhaltliche Relevanz für Eigentümer-Zielgruppe, Authentizitäts-Marker, Diversität, Markenkonformität) und drei-stufigem Verfahren (Texter-Chat-Vorauswahl von sechs bis acht, André-Entscheidung, Top-Manager-Chat-Wahrheitsregel-Prüfung). Sechstens, Bilder-Beschaffungs-Sequenz Phase 1a um Logo Wort-Bild-Marke ergänzt.

Stand 28.04.2026, Teil 4 abnahmebereit. Nach Ihrer Freigabe folgt Teil 5 (Lücken-Audit und Handoff-Paket) mit Lücken-Liste, Verantwortungs-Zuordnung pro Posten, Vorlauf-Zeit und Kosten-Schätzung plus fertigem Übergabe-Prompt für den späteren Bau-Chat.
