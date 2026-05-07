# LUECKEN_AUDIT.md Webseiten-Relaunch Proimma GmbH Phase 1

Lücken-Audit und Handoff-Paket. Stand 28.04.2026. Abschluss-Teil 5 des fünfteiligen Konzept-Pakets. Grundlage Bau-Auswahl-2026.md, DESIGN.md, WIREFRAMES.md, BRIEFS.md plus die Memory-Kerndateien projekt-status, tools-workflows, andre-preferences, MEMORY. Pflicht-Prüfungen aus dem Auftrag: Texte und Bilder aus Briefs, Cal.com-Proimma-Account, Kontaktformular-Backend, Cookie-Banner-Tool, Newsletter-Tool, Hosting-Account, Domain-Routing, GitHub-Repository, Analytics-Setup, Google Business Profile als externe Ergänzung. Pro Lücke Status, Lücken-Beschreibung, Verantwortungs-Zuordnung, Vorlauf-Zeit und Kosten-Schätzung.

## Konventionen

Status-Ampel pro Lücke. Erstens grün, vorhanden und einsatzbereit. Zweitens gelb, in Vorbereitung mit klarem Pfad. Drittens rot, offen mit Klärungsbedarf vor Bau-Start.

Verantwortungs-Träger. André (operative Entscheidung, Account-Anlage, Vertragsunterschrift, Foto-Termin). Top-Manager-Chat (Konzept-Klärung, Drift-Prüfung, Memory-Pflege). Texter-Chat (offene Texte schreiben). Bau-Chat (Astro-Bau, FTP-Upload, Lighthouse-CI, GitHub-Workflow). Externer Dienstleister (Fotograf, Notar, Steuerberater, Versicherer).

Vorlauf-Zeit-Schema. Tagesangabe für interne Aufgaben mit klarer Quelle, Wochenangabe für externe Aufgaben mit Wartezeit, Monatsangabe für Aufgaben mit Aufbau-Zyklus. Bei Abhängigkeiten Hinweis auf Vor-Lücke.

Kosten-Schätzung-Schema. Einmalige Kosten in Euro, monatliche Kosten in Euro pro Monat, jährliche Kosten in Euro pro Jahr. Kein-Aufwand-Posten als „intern" markiert. Schätzungen sind Preisstand 28.04.2026, Anbieter-Tarife können sich ändern.

## Lücken-Liste

### Lücke 1, Texte aus Content-Briefs

Status. Gelb. Sechs von sieben Hauptseiten-Texten vom Texter-Chat freigegeben. Hausverwaltungs-Seite, vier Themen-Hub-Erstartikel, Startseite freigegeben (vom 27.04.2026). Themen-Hub-Übersichtsseite inhaltlich freigegeben, Datei-Ablage am 28.04.2026 nachzuziehen. Drei Hauptseiten-Texte sind offen. Maklerei-Seite mit Bewertungs-Auswahl, Über-Proimma-Seite, Kontakt-Seite. Plus zwei Pflicht-Seiten Impressum und Datenschutz minimalistisch.

Lücken-Beschreibung. Maklerei-Seite hängt an der Bewertungs-Auswahl aus den 27 Google-Bewertungen mit Durchschnitt 5,0 (drei vom Texter-Chat angebotene Wege, fünf Auswahl-Heuristiken in BRIEFS.md 2.3 spezifiziert). Über-Proimma-Seite hängt an der Wahrheitsregel-konformen Editorial-Mini-Story aus dem belegbaren Erfahrungshintergrund. Kontakt-Seite hängt an der Cal.com-Account-Konfiguration für die Termin-URL. Impressum hängt an Pflicht-Wortlauten (vorhanden) und an der Bezeichnung „Immobilienmakler und -verwalter (Bundesrepublik Deutschland)". Datenschutz hängt an der Tool-Auswahl (vorhanden in DESIGN.md Sektion 9 plus BRIEFS.md 2.9).

Verantwortung. Texter-Chat in Ausführung gemäß Briefing-Texter-Chat-Webseite-2026-04-27.md. Top-Manager-Chat in Steuerung und Freigabe. André entscheidet bei der Bewertungs-Auswahl Maklerei.

Vorlauf-Zeit. Drei bis fünf Tage für die fünf offenen Hauptseiten-Texte plus Themen-Hub-Übersicht-Datei-Ablage, sofern der Texter-Chat ohne Pause durcharbeitet und der Top-Manager-Chat zeitnah freigibt.

Kosten-Schätzung. Intern, kein Geldfluss.

Abhängigkeit. Maklerei-Text wartet auf Bewertungs-Auswahl. Kontakt-Text wartet auf Cal.com-Account-URL.

### Lücke 2, Bilder aus Bilder-Briefs

Status. Rot. Portrait André in aktueller Form fehlt. Logo Wort-Bild-Marke fehlt. Favicon fehlt. Open-Graph-Bilder fehlen.

Lücken-Beschreibung. Erstens Portrait André gemäß Brief 1.1 Schwarzweiß Editorial. Mai-2022-Aufnahmen sind vier Jahre alt, vor Verwendung Sichtkontrolle Pflicht. Foto-Termin am 27.04.2026 entfallen, Ersatz nicht datiert. Zweitens Logo Wort-Bild-Marke gemäß Brief 1.16a als reine Typografie-SVG mit Positiv- und Negativ-Variante. Drittens Favicon mit PWA-Manifest und Apple-Touch-Icon gemäß Brief 1.16b. Viertens elf Open-Graph-Bilder als statische SVG-Templates gemäß Briefe 1.5 bis 1.15. Optional in Phase 1c Stilfotos Mehrfamilienhaus Rostock und Wohnimmobilien-Architektur gemäß Briefe 1.3 und 1.4.

Verantwortung. André und Top-Manager-Chat für Foto-Termin-Vereinbarung mit Fotograf in Rostock oder ChatGPT-Image-2.0-Brückenlösung. Bau-Chat für Logo-Eigenerstellung in Figma oder Inkscape und Favicon-Eigenerstellung. Bau-Chat für OG-Bild-Generierung als statische SVG-Templates plus PNG-Build im Astro-Build-Schritt.

Vorlauf-Zeit. Foto-Termin extern zwei bis vier Wochen je nach Fotograf-Verfügbarkeit. ChatGPT-Image-2.0-Brückenlösung intern eine Stunde pro Bild. Logo und Favicon Eigenerstellung etwa eine Stunde Solo-Bauleitung. OG-Bilder als SVG-Template-Erstellung etwa drei bis vier Stunden für die elf Templates. PNG-Render-Schritt im Astro-Build automatisiert.

Kosten-Schätzung. Foto-Termin extern 500 bis 1500 Euro einmalig je nach Fotograf-Tarif und Anzahl der Aufnahmen. ChatGPT-Image-2.0 monatliches Abo etwa 20 Euro pro Monat (Andrés bestehendes ChatGPT-Plus-Abo). Logo, Favicon, OG-Bilder intern, kein Geldfluss.

Abhängigkeit. Portrait-Bild ist Voraussetzung für Phase-1b-Bau (V9 Editorial-Personenprofil auf Über-Proimma-Seite). Logo, Favicon, OG-Bilder sind Phase-1a-Pflicht. Stilfotos sind Phase-1c-optional, ohne Bau-Stop.

### Lücke 3, Cal.eu-Proimma-Account

Status. Grün, Account-Anlage am 29.04.2026 erledigt. Account-Daten Benutzername proimma, Buchungs-URL cal.eu/proimma, Account-Adresse info@proimma.de, Datenregion EU (Cal.eu als europäische Hosting-Variante von Cal.com Inc.), Tarif Solo (kostenlos). Drei Standard-Termintypen sind angelegt: versteckter 15-Minuten-Termin, aktiver 15-Minuten-Termin, aktiver 30-Minuten-Termin. Verbindliche Embed-Adresse für die neue Webseite ist cal.eu/proimma/30min. Auftragsverarbeitungs-Vertrag mit Cal.com Inc. am 29.04.2026 elektronisch via Documenso beidseitig vollzogen (André 12:00 Uhr Berliner Zeit, Bailey Pumfleet als Cal.com-CEO 18:00 Uhr Berliner Zeit), PDF unter /00_Headquarter/Vertraege/Cal.com-DPA_signed_2026-04-29.pdf archiviert. Schrems-II-Restrisiko in der Datenschutzerklärung transparent dokumentiert.

Restpendenzen aus dieser Lücke. Termintyp-Bezeichnungen, Beschreibungen und Branding der drei Termintypen auf den Proimma-Außenauftritt anpassen (Editorial-Bold-Tonalität, Sie-Anrede, kein Verkaufsdruck). Pflicht-Eingabefelder im 30-Minuten-Termin auf Name, E-Mail, Telefonnummer optional und Anliegen-Auswahl konfigurieren. Zoom-Anbindung über Cal.eu-OAuth einrichten. Diese Restpendenzen sind keine Bau-Voraussetzung mehr, weil der Account und die Embed-Adresse bereits stehen, und werden parallel zur Astro-Bau-Phase abgearbeitet.

Verantwortung. André für Account-Anlage und Zahlungsmittel-Hinterlegung. Top-Manager-Chat für Konfigurations-Vorlage. Bau-Chat für Embed-Integration in V10 Cal.com-Sektion.

Vorlauf-Zeit. Account-Anlage 30 Minuten. Konfiguration 30 bis 60 Minuten. Zoom-Anbindung 15 Minuten. Auftragsverarbeitungs-Vertrag eine Stunde Lese- und Unterschrifts-Zeit. Insgesamt zwei bis drei Stunden an einem Arbeits-Vormittag.

Kosten-Schätzung. Cal.com Free-Plan deckt Phase 1 ab (unbegrenzte Buchungen, ein Buchungs-Typ). Cal.com Pro etwa 12 Euro pro Monat falls erweiterte Funktionen (Branding-Anpassung, Workflow-Automatisierung, mehr Buchungs-Typen) nötig. Empfehlung Free-Plan für Phase 1, Upgrade in Phase 2 bei Bedarf.

Abhängigkeit. Cal.com-URL ist Voraussetzung für Kontakt-Text-Finalisierung und für V10 Cal.com-Sektion-Bau.

### Lücke 4, Kontaktformular-Backend

Status. Rot. Kontaktformular-Backend ist in DESIGN.md mit Plunk EU-Hosting Frankfurt empfohlen, aber Account und Konfiguration fehlen.

Lücken-Beschreibung. Plunk-Account-Anlage auf useplunk.com mit info@proimma.de als Account-Adresse. API-Key generieren. Empfangs-Adresse info@proimma.de für eingehende Kontaktformular-Anfragen konfigurieren. Honeypot-Spamschutz-Feld „website" als versteckter Bot-Filter implementieren. Webhook-Anbindung für Phase-2-n8n-Workflow optional. Auftragsverarbeitungs-Vertrag gemäß Plunk-DPA. Astro-API-Route /api/contact als Server-Submission-Handler programmieren oder Plunk-Form-Endpoint direkt einbinden.

Verantwortung. André für Account-Anlage. Bau-Chat für API-Integration in Astro und für Honeypot-Implementierung im Kontakt-Formular gemäß DESIGN.md 5.3.

Vorlauf-Zeit. Account-Anlage 15 Minuten. API-Konfiguration 30 Minuten. Astro-API-Route etwa zwei Stunden Entwicklung. Honeypot-Test eine Stunde. Insgesamt drei bis vier Stunden.

Kosten-Schätzung. Plunk Free-Plan etwa 3000 Mails pro Monat, deckt Phase 1 ab. Phase 2 bei höherem Volumen Upgrade auf etwa 10 Euro pro Monat.

Abhängigkeit. Kontakt-Formular-Bau in Phase 1b setzt Plunk-Account voraus. Datenschutzerklärung-Text setzt Plunk-Konfiguration voraus.

### Lücke 5, Cookie-Banner-Tool

Status. Grün für Phase 1, gelb für Phase 2. Phase-1-Empfehlung gemäß DESIGN.md Sektion 9 und BRIEFS.md ist Klartext-Cookie-Hinweis im Footer ohne Consent-Layer-Tool, weil keine einwilligungspflichtigen Cookies gesetzt werden. Plausible cookielos, Cal.com-iFrame-Cookies sind technisch erforderlich nach § 25 Abs. 2 Nr. 2 TTDSG.

Lücken-Beschreibung. In Phase 1 keine Tool-Lücke. Implementierung als Astro-Komponente CookieHinweis.astro mit Klartext-Hinweis im Footer und auf der Datenschutzerklärung. In Phase 2 bei Conversion-Tracking-Einführung Pflicht-Upgrade auf Borlabs Cookie als Konfigurations-Lücke.

Verantwortung. Bau-Chat für CookieHinweis.astro-Komponente in Phase 1. André plus Top-Manager-Chat für Borlabs-Cookie-Lizenz-Erwerb in Phase 2 falls nötig.

Vorlauf-Zeit. Phase 1 etwa eine Stunde Komponenten-Bau. Phase 2 etwa zwei Tage für Lizenz-Erwerb und Konfiguration.

Kosten-Schätzung. Phase 1 intern, kein Geldfluss. Phase 2 Borlabs-Cookie-Einmal-Lizenz für eine Domain etwa 39 Euro einmalig.

Abhängigkeit. Keine in Phase 1.

### Lücke 6, Newsletter-Tool

Status. Gelb für Phase 2. Brevo (Sitz Berlin und Paris, EU-Hosting) als Empfehlung in DESIGN.md. Phase-1-Newsletter-Form ist disabled-State-Vorbereitung gemäß BRIEFS.md 5.14, Brevo-Aktivierung in Phase 2.

Lücken-Beschreibung. Brevo-Account-Anlage. API-Key generieren. Sender-Identität info@proimma.de mit DKIM und SPF im All-Inkl-DNS konfigurieren (DKIM-Schlüssel von Brevo erhalten, im KAS-DNS-Editor TXT-Record setzen). Double-Opt-In-Mail-Template gestalten gemäß Editorial-Bold-Tonalität. Auftragsverarbeitungs-Vertrag gemäß Brevo-DPA. Astro-Komponente NewsletterForm.astro für Phase 2 mit API-Anbindung.

Verantwortung. André für Account-Anlage und DNS-Konfiguration. Bau-Chat für API-Integration und Double-Opt-In-Workflow.

Vorlauf-Zeit. In Phase 1 nicht relevant, Form bleibt disabled. In Phase 2 etwa einen Tag für Brevo-Setup plus zwei Tage für Astro-Anbindung und Mail-Template.

Kosten-Schätzung. Brevo Free-Plan deckt 300 Versendungen pro Tag, in Phase 2 Aufbauphase ausreichend. Bei Wachstum Upgrade auf Brevo Starter etwa 25 Euro pro Monat ab 20.000 Mails monatlich.

Abhängigkeit. Phase 2.

### Lücke 7, Hosting-Account

Status. Grün. All-Inkl KAS-Account auf Server w01a2159.kasserver.com vorhanden. Bauphase-Subdomain relaunch.proimma.de am 26.04.2026 angelegt mit Verzeichnisschutz, FTP-Nutzer „Proimma Relaunch" mit Login f018428a verzeichnisbeschränkt. SSL-Zertifikat über Let's Encrypt automatisiert.

Lücken-Beschreibung. Vor Go-Live Verzeichnisschutz auf relaunch.proimma.de entfernen, sonst kann Lighthouse-CI-Workflow nicht messen. Hosting-Vertrag im KAS-Backend prüfen, ob ausreichend Speicherplatz und Bandbreite für Phase 1 und Phase 2. Daily-Backup-Funktion im KAS aktiviert prüfen.

Verantwortung. André für KAS-Backend-Konfiguration. Bau-Chat für FTP-Uploads.

Vorlauf-Zeit. Verzeichnisschutz entfernen einen Klick im KAS-Tools, fünf Minuten. Backup-Verifikation und Speicher-Prüfung etwa 15 Minuten.

Kosten-Schätzung. Bestehender All-Inkl-Tarif, kein zusätzlicher Posten in Phase 1. Tarif-Upgrade nicht erforderlich, weil statisches Astro-Build sehr schlank.

Abhängigkeit. Verzeichnisschutz-Entfernung erst zum Go-Live, vorher bleibt er aktiv. Lighthouse-CI während der Bauphase über User-Agent-Whitelist im Verzeichnisschutz oder über Token-basierten URL-Parameter, gemäß DESIGN.md Sektion 15.

### Lücke 8, Domain-Routing

Status. Gelb. relaunch.proimma.de seit 26.04.2026 angelegt mit funktionierender Subdomain. www.proimma.de ist die bestehende WordPress-Seite, der Go-Live-Wechsel ist offen.

Lücken-Beschreibung. Erstens HTTPS-Pflicht-Verifikation für www.proimma.de und relaunch.proimma.de (Let's Encrypt automatisiert). Zweitens www-zu-non-www-Redirect-Konfiguration (Empfehlung www.proimma.de als Primär-Domain, proimma.de leitet auf www.proimma.de um). Drittens beim Go-Live Verschieben des Astro-Builds in das Root-Verzeichnis von www.proimma.de via FTP, Verschieben der WordPress-Dateien in einen archivierten Unterordner /wordpress-archiv-JJJJ-MM-TT/ (nicht löschen, Rollback-Reserve). Viertens DNS-Prüfung der A-Records und CNAME-Records nach Go-Live. Fünftens SSL-Validierung nach Go-Live.

Verantwortung. André für KAS-Backend-Konfiguration. Bau-Chat für FTP-Upload des Astro-Builds und für Rollback-Plan-Vorbereitung.

Vorlauf-Zeit. Redirect-Konfiguration im KAS einrichten 15 Minuten. WordPress-Verschiebung und Astro-Upload eine Stunde. DNS-Propagation bis 48 Stunden international, in Deutschland typischerweise eine bis zwei Stunden.

Kosten-Schätzung. Bestehender Tarif, kein Geldfluss.

Abhängigkeit. Astro-Build muss vor Go-Live in finalem Stand sein, Lighthouse-CI muss alle URLs grün messen, Texte vollständig freigegeben.

### Lücke 9, GitHub-Repository

Status. Rot. Repository ist in tools-workflows als „mit Branches main und dev vorgesehen" benannt, aber Anlage offen.

Lücken-Beschreibung. GitHub-Repository als privates Repository unter Andrés GitHub-Account anlegen. Name proimma-website oder ähnlich. Branches main und dev. .gitignore für /node_modules/, /dist/, /upload-vN-*/. Initial-Commit mit dem aktuellen lokalen Astro-Projekt aus /Users/andredieckmann/Desktop/Proimma GmbH/10_Webseite_Relaunch/. README.md mit Bau-Anleitung. GitHub Actions Workflow lighthouse.yml für Lighthouse-CI gemäß DESIGN.md Sektion 15.8. Repository-Secrets für Plunk-API-Key und andere geheime Werte. Versions-Tag-Konvention v1.0.0 für initialen Go-Live.

Verantwortung. André für GitHub-Account und Repository-Anlage. Bau-Chat für Initial-Commit, .gitignore, Lighthouse-CI-Workflow.

Vorlauf-Zeit. Repository-Anlage 15 Minuten. Initial-Commit und Branch-Setup 30 Minuten. Lighthouse-CI-Workflow eine Stunde Konfiguration plus erster Test-Lauf eine halbe Stunde. Insgesamt zwei bis drei Stunden.

Kosten-Schätzung. GitHub Free-Plan deckt private Repositories für Einzelnutzer. GitHub Actions 2000 kostenlose Minuten pro Monat im Free-Plan, für Lighthouse-CI ausreichend. Upgrade nicht erforderlich.

Abhängigkeit. Lighthouse-CI braucht relaunch.proimma.de mit aufgehobener IP-Beschränkung oder Token-Zugang.

### Lücke 10, Analytics-Setup mit Plausible

Status. Rot. Plausible ist in DESIGN.md empfohlen, aber Account und Site-Konfiguration fehlen.

Lücken-Beschreibung. Plausible-Account-Anlage auf plausible.io mit info@proimma.de. Site „proimma.de" anlegen. Acht Custom-Goals gemäß DESIGN.md Sektion 15.5 konfigurieren (termin-buchung, termin-buchung-iframe, kontakt-formular-submit, newsletter-anmeldung, scroll-tiefe, sektion-view, cta-hover, lese-tiefe). Für Custom-Events mit Properties die richtige Plausible-Plan-Stufe wählen (Properties sind im Growth-Plan ab 9 Euro pro Monat enthalten). Tracking-Snippet im BaseLayout.astro Head einfügen mit data-domain="proimma.de". Auftragsverarbeitungs-Vertrag gemäß Plausible-DPA-Modul. Bau-Phase-Plausible-Site auf relaunch.proimma.de getrennt anlegen, sonst Bau-Daten und Live-Daten vermischen.

Verantwortung. André für Account-Anlage und Zahlungsmittel-Hinterlegung. Top-Manager-Chat für Goal-Konfiguration. Bau-Chat für Tracking-Snippet-Integration und für Markup-Konvention im Astro-Layout (data-sektion, data-cta, data-scroll-marker, data-lese-marker, data-page-slug Attribute gemäß DESIGN.md Sektion 15.7).

Vorlauf-Zeit. Account-Anlage 15 Minuten. Site-Konfiguration und acht Goals 30 bis 45 Minuten. Tracking-Snippet-Integration eine Stunde Bau-Chat-Arbeit. Insgesamt zwei bis drei Stunden.

Kosten-Schätzung. Plausible Growth-Plan ab 9 Euro pro Monat für bis zu 10000 Pageviews pro Monat, plus Custom-Properties für die acht Custom-Events. In Phase 1 Aufbauphase deckend. Upgrade bei höheren Pageviews später möglich.

Abhängigkeit. Tracking-Marker im Astro-Layout setzen verlangt Goal-Definitionen vorab.

### Lücke 11, Google Business Profile

Status. Rot. In DESIGN.md als externe Ergänzung empfohlen, Profil-Anlage offen.

Lücken-Beschreibung. Google Business Profile anlegen unter business.google.com mit info@proimma.de oder einer dedizierten Google-Account-Adresse. Adresse Bremer Straße 12, 18057 Rostock. Kategorie „Hausverwaltung" als Primär-Kategorie und „Immobilienmakler" als Sekundär-Kategorie. Telefonnummer 0173-6335917. Webseiten-URL www.proimma.de. Öffnungszeiten Mo bis Fr 9 bis 17 Uhr. Verifizierung über Postkarten-Versand an die Geschäftsadresse, Vorlauf-Zeit zwei bis drei Wochen. Ergänzung mit Logo (siehe BRIEFS.md 1.16a) und Portrait-Foto.

Verantwortung. André für Account-Anlage und Postkarten-Verifizierung.

Vorlauf-Zeit. Account-Anlage 30 Minuten. Postkarten-Versand zwei bis drei Wochen. Aktivierung nach Eingang der Postkarte und Code-Eingabe sofort.

Kosten-Schätzung. Google Business Profile kostenfrei. Kein Geldfluss.

Abhängigkeit. Postkarten-Verifizierung verlangt physische Anwesenheit oder Postannahme an der Geschäftsadresse.

### Lücke 12, Auftragsverarbeitungs-Verträge

Status. Gelb (zwei von fünf Verträgen am 29.04.2026 vollzogen, drei verbleibend). All-Inkl-Auftragsverarbeitungs-Vertrag am 29.04.2026 abgeschlossen (Vertragspartner Proimma GmbH, Kundennummer 636793, AVV-PDF-Vorlage Stand 19.09.2022). Cal.com-Auftragsverarbeitungs-Vertrag am 29.04.2026 elektronisch via Documenso beidseitig vollzogen (André 12:00 Uhr Berliner Zeit, Bailey Pumfleet als Cal.com-CEO 18:00 Uhr Berliner Zeit, PDF unter /00_Headquarter/Vertraege/Cal.com-DPA_signed_2026-04-29.pdf archiviert).

Lücken-Beschreibung. Drei verbleibende Auftragsverarbeitungs-Verträge gemäß Art. 28 DSGVO. Erstens Plausible-Auftragsverarbeitungs-Vertrag, im Plausible-Account-Bereich elektronisch abrufbar nach Account-Anlage. Zweitens Plunk-Auftragsverarbeitungs-Vertrag, EU-Hosting Frankfurt. Drittens Brevo-Auftragsverarbeitungs-Vertrag (Phase 2, in Phase 1 nicht relevant) über Brevo-DPA-Modul mit elektronischer Signatur.

Verantwortung. André als verantwortlicher Geschäftsführer der Proimma GmbH für die Vertragsunterschrift. Top-Manager-Chat für die Vertrags-Aufstellung und für die Datenschutzerklärung-Spiegelung.

Vorlauf-Zeit. Pro Anbieter 15 bis 30 Minuten Lese- und Unterschrifts-Zeit. Insgesamt etwa eine bis anderthalb Stunden für die zwei Phase-1-Verträge (Plausible, Plunk); Brevo erst Phase 2.

Kosten-Schätzung. Intern, kein Geldfluss.

Abhängigkeit. Account-Anlage pro Anbieter Voraussetzung (Lücke 10 Plausible, Lücke 4 Plunk, Lücke 6 Brevo Phase 2).

### Lücke 13, Hanken Grotesk Variable Self-Hosting

Status. Gelb. In tools-workflows.md und DESIGN.md als verbindliche Schrift festgelegt, self-hosted gemäß DSGVO. Datei-Beschaffung offen.

Lücken-Beschreibung. Hanken Grotesk Variable WOFF2-Datei besorgen. Quelle. Erstens fontsource-Paket @fontsource-variable/hanken-grotesk via npm install und Astro-Integration, einfachster Weg. Zweitens Direkt-Download von der offiziellen Hanken-Grotesk-GitHub-Quelle und manueller WOFF2-Konvertierung über google-webfonts-helper oder ähnlich. Empfehlung erste Variante. Plus @font-face-Deklaration in src/styles/fonts.css mit font-display swap und font-feature-settings tnum für Tabular Nums. Plus Preload-Hint für die Variable-Font-Datei im Astro-Layout-Head, weil sie LCP beeinflusst.

Verantwortung. Bau-Chat.

Vorlauf-Zeit. Etwa eine Stunde Bau-Chat-Arbeit.

Kosten-Schätzung. Hanken Grotesk Variable ist kostenlos und Open-Source, kein Geldfluss.

Abhängigkeit. Astro-Projekt-Setup vorhanden seit 26.04.2026.

### Lücke 14, Open-Graph-Bild-Generierung

Status. Rot. Briefe 1.5 bis 1.15 spezifizieren elf OG-Bilder als statische SVG-Templates plus PNG-Build. Templates und PNG-Render-Skript fehlen.

Lücken-Beschreibung. Erstens elf SVG-Templates pro Hauptseite und Themen-Hub-Artikel gestalten in Figma oder Inkscape oder direkt als SVG-Code. Zweitens PNG-Render-Skript im Astro-Build-Schritt, das die SVG-Templates zu PNG 1200 mal 630 Pixel rendert (über Sharp oder Resvg-Modul). Alternative dynamische Generierung über @vercel/og oder Astro-Satori-Integration; Empfehlung statische Templates wegen Wartungsfreiheit gemäß DESIGN.md Sektion 8. Dritte Open-Graph-Meta-Tag-Anbindung im BaseLayout.astro über das Frontmatter-Feld ogImage.

Verantwortung. Bau-Chat.

Vorlauf-Zeit. Etwa drei bis vier Stunden für die elf Templates plus Render-Skript.

Kosten-Schätzung. Intern.

Abhängigkeit. Logo Wort-Bild-Marke aus Brief 1.16a Voraussetzung für die OG-Bild-Templates (Wortmarke unten links).

### Lücke 15, Schema.org-JSON-LD-Implementation

Status. Rot. Schema.org-Skelette in DESIGN.md Sektion 8 spezifiziert. Implementierung fehlt.

Lücken-Beschreibung. JSON-LD-Skripte im BaseLayout.astro Head einfügen pro Schema-Typ. LocalBusiness und RealEstateAgent als Site-Root-Schema. Service-Schemas Mietenverwaltung und Maklerei auf den jeweiligen Säulen-Seiten. Person-Schema André auf Über-Proimma-Seite. Article-Schema pro Themen-Hub-Artikel. BreadcrumbList-Schema auf Themen-Hub-Übersichtsseite und auf jedem Themen-Hub-Artikel. Geo-Koordinaten Rostock-Zentrum vor Go-Live über Geocoding-Service prüfen und korrigieren.

Verantwortung. Bau-Chat.

Vorlauf-Zeit. Etwa zwei bis drei Stunden für die Implementierung plus Validierung über Google Rich Results Test.

Kosten-Schätzung. Intern.

Abhängigkeit. Geo-Koordinaten-Verifikation extern, kostenlos.

### Lücke 16, Pre-Deploy-Lighthouse-CI

Status. Rot. In DESIGN.md Sektion 15.8 als Pflicht-Workflow spezifiziert. Workflow-Datei fehlt.

Lücken-Beschreibung. .github/workflows/lighthouse.yml als GitHub-Actions-Workflow gemäß DESIGN.md Sektion 15.8. lighthouserc.json mit Schwellen 0.95 in allen vier Kategorien als Hard-Fail-Bedingung. Lighthouse-CI-Aktivierung mit Test-Lauf vor Phase-1-Bau-Start. Bauphase-Voraussetzung der Lighthouse-CI-Zugang zur relaunch.proimma.de-Subdomain trotz Verzeichnisschutz (User-Agent-Whitelist im KAS oder Token-basierter URL-Parameter).

Verantwortung. Bau-Chat.

Vorlauf-Zeit. Workflow-Datei und Konfiguration eine Stunde plus Test-Lauf eine halbe Stunde. Bauphase-Zugang-Konfiguration im KAS 30 Minuten zusätzlich.

Kosten-Schätzung. Intern. GitHub Actions Free-Plan-Minuten ausreichend.

Abhängigkeit. GitHub-Repository (Lücke 9) Voraussetzung. Hosting-Verzeichnisschutz-Konfiguration (Lücke 7) Voraussetzung.

### Lücke 17, Maintenance-Page

Status. Rot. WIREFRAMES.md Sektion 8.3 spezifiziert die Maintenance-Mode-Seite, Implementation fehlt.

Lücken-Beschreibung. Eigene statische /maintenance.html-Datei in /public/ pflegen, vom KAS Tools im Wartungsfall manuell aktiviert (Inhalt der index.html temporär ersetzen). Inhalt gemäß WIREFRAMES.md 8.3. HTTP-Status 503 Server-konfiguriert. Astro-eigene 404.astro und 500.astro für Server-Errors. Maintenance-Page bewusst statisch ohne Astro-Build.

Verantwortung. Bau-Chat für Datei-Erstellung. André für KAS-Aktivierung im Wartungsfall.

Vorlauf-Zeit. Etwa eine Stunde Erstellung, kein Aktivierungs-Aufwand bis zum tatsächlichen Wartungsfall.

Kosten-Schätzung. Intern.

Abhängigkeit. Keine.

### Lücke 18, robots.txt und sitemap.xml

Status. Rot. In DESIGN.md Sektion 8 spezifiziert, Implementierung fehlt.

Lücken-Beschreibung. robots.txt für Live-Domain proimma.de in /public/robots.txt mit Sitemap-Verweis. robots.txt für Bauphase relaunch.proimma.de mit Disallow alle. sitemap.xml über Astro-Plugin @astrojs/sitemap automatisch beim Build generiert, mit Priority- und Changefreq-Werten gemäß DESIGN.md Sektion 8.

Verantwortung. Bau-Chat.

Vorlauf-Zeit. Etwa 30 Minuten.

Kosten-Schätzung. Intern.

Abhängigkeit. Astro-Sitemap-Plugin Installation Pflicht.

### Lücke 19, Cookie-Hinweis-Komponente CookieHinweis.astro

Status. Rot. In DESIGN.md Sektion 9 spezifiziert als Phase-1-Klartext-Hinweis ohne Consent-Layer, Implementierung fehlt.

Lücken-Beschreibung. CookieHinweis.astro-Komponente in /src/components/ mit Klartext-Wortlaut gemäß DESIGN.md Sektion 9. Anzeige im Footer und auf der Datenschutzerklärung. Kein Consent-Layer, weil keine einwilligungspflichtigen Cookies vor Cal.com-iFrame-Aktivierung gesetzt werden. Bei Cal.com-iFrame-Aktivierung Klartext-Hinweis im iFrame-Kontext sichtbar.

Verantwortung. Bau-Chat.

Vorlauf-Zeit. Etwa eine Stunde.

Kosten-Schätzung. Intern.

Abhängigkeit. Keine.

### Lücke 20, Backup-Verifikation

Status. Gelb. Tägliches KAS-Backup auf All-Inkl in tools-workflows.md erwähnt, Aktivierungs-Status nicht verifiziert.

Lücken-Beschreibung. Im KAS-Backend prüfen, ob das tägliche Backup für den Account aktiviert ist, mit welcher Aufbewahrungsdauer und ob die letzte Backup-Datei-Erstellung erfolgreich war. Bei Bedarf Aktivierung. Plus zusätzlicher Backup-Pfad. Lokale Build-Artefakte in /upload-vN-JJJJ-MM-TT/ pro Tag-Push automatisch sichern (Konvention aus tools-workflows nach dem Vorfall vom 26.04.2026).

Verantwortung. André für KAS-Backup-Verifikation. Bau-Chat für lokale Build-Artefakte-Konvention.

Vorlauf-Zeit. KAS-Verifikation 15 Minuten.

Kosten-Schätzung. Intern.

Abhängigkeit. Keine.

### Lücke 21, Bewertungs-Auswahl Maklerei (Pendenz Texter-Chat)

Status. Rot. Pendenz aus projekt-status für 28.04.2026. BRIEFS.md 2.3 spezifiziert fünf Auswahl-Heuristiken und drei-stufiges Verfahren.

Lücken-Beschreibung. Bewertungs-Auswahl von zwei bis vier Bewertungen aus 27 Google-Bewertungen mit Durchschnitt 5,0 unter Proimma GmbH. Drei vom Texter-Chat angebotene Wege (Vorauswahl von André, URL-Recherche durch Texter-Chat, direkte Vorgabe von zwei bis vier Bewertungen). Fünf Auswahl-Heuristiken in BRIEFS.md spezifiziert.

Verantwortung. André für Wege-Wahl und finale Bewertungs-Entscheidung. Texter-Chat für Vorauswahl-Lieferung. Top-Manager-Chat für Wahrheitsregel-Prüfung der finalen Auswahl.

Vorlauf-Zeit. Vorauswahl ein bis zwei Tage Texter-Chat-Arbeit. Andrés Entscheidung ein Tag. Wahrheitsregel-Prüfung ein halber Tag. Insgesamt zwei bis vier Tage.

Kosten-Schätzung. Intern.

Abhängigkeit. Maklerei-Text-Finalisierung wartet auf Bewertungs-Auswahl.

### Lücke 22, 301-Redirects WordPress-zu-Astro

Status. Rot. SEO-Continuity-Risiko beim Go-Live ist nicht im Konzept adressiert.

Lücken-Beschreibung. Die bestehende WordPress-Seite auf www.proimma.de hat seit dem 21.04.2026 eine etablierte URL-Struktur, die in Google-Index, Drenkhahn-Wettbewerbs-Sichtbarkeit und externen Backlinks erfasst sein kann. Astro-Phase-1 verwendet eine andere URL-Struktur (proimma.de/hausverwaltung statt potenziell WordPress-Pfad mit Query-Parametern). Ohne 301-Redirects gehen Suchmaschinen-Rankings verloren, Verlinkungs-Adressen aus dem Akquise-Paket veralten, externe Backlinks ins Leere laufen. Pro alter WordPress-URL ein 301-Redirect auf die neue Astro-URL. Implementierung über .htaccess auf All-Inkl-KAS, Apache-mod_rewrite-Direktiven mit RedirectMatch oder RewriteRule. URL-Liste-Quellen. Erstens KAS-Backend-Verzeichnisansicht des aktuellen WordPress-Builds, zweitens Google Search Console-Auswertung der indexierten URLs, drittens Sitemap.xml der WordPress-Seite falls aktiv, viertens externe Backlink-Auswertung über kostenfreie Tools wie ahrefs Backlink Checker.

Verantwortung. André für Lieferung der alten WordPress-URL-Liste über KAS-Backend oder Google Search Console. Bau-Chat für .htaccess-Datei-Erstellung mit Redirect-Liste plus Test über curl-Aufrufe der alten URLs.

Vorlauf-Zeit. URL-Liste-Erstellung 30 Minuten. .htaccess-Erstellung 30 Minuten. Test pro alter URL 5 Minuten, bei zehn URLs etwa eine Stunde. Insgesamt zwei Stunden vor Go-Live.

Kosten-Schätzung. Intern.

Abhängigkeit. Pflicht vor Go-Live, sonst SEO-Verlust. Nach Go-Live über Google Search Console die Crawler-Erkennung der Redirects verifizieren.

### Lücke 23, HTTP-Sicherheitsheader

Status. Rot. Sicherheitsheader sind weder in DESIGN.md noch in BRIEFS.md spezifiziert. Für eine Premium-B2B-Webseite mit Editorial-Bold-Anspruch und Cal.com-iFrame-Embed-Pflicht ist das eine Konzept-Lücke gegenüber Senior-Webdesign-Standards.

Lücken-Beschreibung. Sechs HTTP-Sicherheitsheader gemäß OWASP Best Practice. Erstens Strict-Transport-Security (HSTS) mit max-age=31536000 plus includeSubDomains plus preload, sodass Browser HTTPS für ein Jahr erzwingen. Zweitens Content-Security-Policy (CSP) mit konkreten Direktiven default-src 'self', script-src 'self' plus plausible.io, style-src 'self' plus 'unsafe-inline' für Astro-internes CSS, font-src 'self', img-src 'self' data:, frame-src cal.com plus app.cal.com (für V10 Cal.com-Embed), connect-src 'self' plus plausible.io. Drittens X-Frame-Options DENY oder SAMEORIGIN für Clickjacking-Schutz, mit Ausnahme für Cal.com-iFrame-Kontext über frame-ancestors-CSP-Direktive. Viertens X-Content-Type-Options nosniff. Fünftens Referrer-Policy strict-origin-when-cross-origin. Sechstens Permissions-Policy mit camera=(), microphone=(), geolocation=(), payment=() um Browser-APIs zu deaktivieren, die Proimma in Phase 1 nicht nutzt. Implementierung über .htaccess auf All-Inkl-KAS oder über Astro-Build-Time-Header-Generierung in der Hosting-Konfiguration. Verifikation über securityheaders.com nach Go-Live mit Mindestziel A-Rating.

Verantwortung. Bau-Chat für Header-Konfiguration in .htaccess oder im Apache-Konfigurations-Editor. André für KAS-Backend-Apache-Konfiguration falls .htaccess-Direktiven nicht greifen.

Vorlauf-Zeit. Header-Konfiguration eine Stunde. Test mit securityheaders.com 30 Minuten. CSP-Tuning bei iFrame-Konflikten eine bis zwei Stunden je nach Cal.com-CSP-Anforderungen. Insgesamt zwei bis vier Stunden.

Kosten-Schätzung. Intern.

Abhängigkeit. Cal.com-iFrame-Embed verlangt frame-src cal.com plus app.cal.com in CSP, sonst blockiert Browser den Embed. Plausible verlangt connect-src plausible.io plus script-src plausible.io. Brevo in Phase 2 verlangt zusätzliche connect-src-Einträge, dann CSP-Update.

## Verantwortungs-Matrix

Verantwortungs-Verteilung über alle 21 Lücken konsolidiert.

| Verantwortung | Lücken-Posten |
|---|---|
| André operativ | Foto-Termin (2), Cal.com-Account (3), Plunk-Account (4), Brevo-Account (6, Phase 2), KAS-Backend (7, 8, 20), GitHub-Account (9), Plausible-Account (10), Google Business Profile (11), Auftragsverarbeitungs-Verträge unterschreiben (12), Bewertungs-Entscheidung (21) |
| Top-Manager-Chat | Konzept-Klärung, Drift-Prüfung, Memory-Pflege, Goal-Konfigurations-Vorlage, Bewertungs-Wahrheitsregel-Prüfung |
| Texter-Chat | Maklerei-Seite (1), Über-Proimma-Seite (1), Kontakt-Seite (1), Themen-Hub-Übersicht-Datei-Ablage (1), Impressum (1), Datenschutz (1), Bewertungs-Vorauswahl (21) |
| Bau-Chat | Logo-Eigenerstellung (2), Favicon-Eigenerstellung (2), OG-Bild-Generierung (2, 14), Cookie-Hinweis-Komponente (19), Newsletter-Form-Phase-2 (6), Plunk-Astro-Integration (4), Cal.com-Embed (3), Plausible-Tracking-Integration (10), Schema.org-JSON-LD (15), GitHub-Repository-Setup (9), Lighthouse-CI (16), Maintenance-Page (17), robots.txt und sitemap.xml (18), Hanken Grotesk Self-Hosting (13), Astro-Bau insgesamt |
| Externer Dienstleister | Fotograf in Rostock (Lücke 2 Phase Foto-Termin), Notar (Paket 2 außerhalb Webseiten-Scope), Versicherer (Vermögensschadenhaftpflicht außerhalb Webseiten-Scope) |

## Vorlauf-Zeit-Übersicht

Konsolidierte Sequenzierung der Lücken nach Vorlauf-Zeit für Phase-1-Bau-Start.

Sofort-Lücken (gleiches Wochenende). Hosting-Verzeichnisschutz-Konfiguration (7), KAS-Backup-Verifikation (20), Bewertungs-Wege-Wahl (21).

Erster Bau-Block-Voraussetzungen (eine bis zwei Wochen). Cal.com-Account (3), Plunk-Account (4), Plausible-Account (10), GitHub-Repository (9), Google Business Profile angelegt mit Postkarten in Versand (11), fünf Auftragsverarbeitungs-Verträge (12), Texte fertig (1), Bewertungs-Auswahl entschieden (21).

Bau-parallele Lücken (während des Bau-Chats). Logo (2, 16a), Favicon (2, 16b), OG-Bild-Templates (2, 14), Hanken Grotesk Self-Hosting (13), Schema.org-Implementation (15), Lighthouse-CI-Workflow (16), Maintenance-Page (17), robots.txt und sitemap.xml (18), Cookie-Hinweis-Komponente (19).

Foto-abhängige Lücken (zwei bis vier Wochen extern). Portrait-Foto-Termin in Rostock oder ChatGPT-Image-2.0-Brückenlösung als Sofort-Variante (2).

Phase-2-Lücken (nach Go-Live). Borlabs Cookie bei Conversion-Tracking-Bedarf (5), Brevo-Newsletter-Aktivierung (6).

## Kosten-Schätzung-Übersicht

Konsolidierte Kosten-Aufstellung für Phase 1.

Einmalige Kosten. Foto-Termin in Rostock 500 bis 1500 Euro je nach Fotograf-Tarif und Anzahl Aufnahmen. Logo, Favicon, OG-Bilder, Cookie-Hinweis, Plunk-Astro-Integration, Schema.org-Implementation, Lighthouse-CI-Workflow, Maintenance-Page, robots.txt, sitemap.xml, Hanken Grotesk Self-Hosting alle intern, kein Geldfluss.

Monatliche Kosten Phase 1. Plausible Growth-Plan 9 Euro pro Monat. Cal.com Free-Plan kostenfrei (oder Cal.com Pro 12 Euro pro Monat falls erweiterte Funktionen nötig). Plunk Free-Plan kostenfrei (oder ab 10 Euro pro Monat bei höherem Volumen). All-Inkl Hosting bestehender Tarif. ChatGPT-Plus für KI-Bilder 20 Euro pro Monat (bestehendes Abo). GitHub Free-Plan kostenfrei.

Konsolidierte monatliche Kosten Phase 1. Mindestens 9 Euro Plausible plus 20 Euro ChatGPT-Plus (bestehend) gleich 29 Euro pro Monat zusätzlich, plus bestehende All-Inkl-Kosten. Bei Cal.com Pro plus 12 Euro pro Monat, also bis 41 Euro pro Monat zusätzlich.

Phase-2-Zusatzkosten bei Aktivierung. Borlabs Cookie 39 Euro Einmal-Lizenz für eine Domain. Brevo Starter ab 25 Euro pro Monat ab 20.000 Mails monatlich.

Foto-Termin als größter Einmal-Kostenposten. Bei ChatGPT-Image-2.0-Brückenlösung statt Foto-Termin entfallen die 500 bis 1500 Euro, Wahrheitsregel-Vorbehalt gemäß BRIEFS.md 1.1.

## Übergabe-Prompt für den späteren Bau-Chat

Pfad-Vorbereitung. Der folgende Übergabe-Prompt wird in einen neuen Cowork-Chat „Webseiten-Relaunch Proimma Phase 1 Bau" als erste Nachricht kopiert, sobald die Sofort-Lücken und die Erster-Bau-Block-Voraussetzungs-Lücken geschlossen sind und der Texter-Chat alle sieben Texte plus zwei Pflicht-Seiten geliefert hat. Pflicht-Lese-Reihenfolge wird in der ersten Nachricht des Bau-Chats vom Bau-Chef quittiert, vor jeder Code-Zeile.

Der Prompt selbst beginnt nach der folgenden Trennzeile.

```
Webseiten-Relaunch Proimma GmbH Phase 1, Bau-Chat-Eröffnungs-Auftrag.

Ihre Rolle. Sie sind Senior Front-End Engineer und Editorial-Web-Builder mit zwanzig Jahren Erfahrung in der Astro-, Tailwind- und Performance-Engineering-Bauleitung von Premium-B2B-Webseiten. Sie sind kein Konzept-Arbeiter; das vollständige Konzept liegt vor. Sie bauen die Phase-1-Webseite gemäß den Konzept-Dateien um, ohne weitere Konzept-Arbeit. Sie führen, der Inhaber entscheidet bei Konflikten.

Auftraggeber. Proimma GmbH, Inhaber und Geschäftsführer André Dieckmann, Bremer Straße 12, 18057 Rostock.

Zielsystem. relaunch.proimma.de während der Bauphase, spätere Umstellung auf www.proimma.de zum Go-Live.

Pflichtlektüre vor jedem ersten Code-Commit, in genau dieser Reihenfolge.

Erstens, /Users/andredieckmann/Desktop/Proimma GmbH/00_Headquarter/projekt-status.md.

Zweitens, /Users/andredieckmann/Desktop/Proimma GmbH/00_Headquarter/tools-workflows.md.

Drittens, /Users/andredieckmann/Desktop/Proimma GmbH/00_Headquarter/andre-preferences.md.

Viertens, /Users/andredieckmann/Desktop/Proimma GmbH/00_Headquarter/MEMORY.md.

Fünftens, /Users/andredieckmann/Desktop/Proimma GmbH/00_Projekt_Setup_2026/Markenkern_Proimma_2026-04-27.md.

Sechstens, /Users/andredieckmann/Desktop/Proimma GmbH/00_Projekt_Setup_2026/Wettbewerber-Analyse_Rostock_2026-04-27.md.

Siebtens, /Users/andredieckmann/Desktop/Proimma GmbH/00_Projekt_Setup_2026/Briefing_Texter-Chat_Webseite_2026-04-27.md.

Achtens, /Users/andredieckmann/Desktop/Proimma GmbH/10_Webseite_Relaunch/Bau_Auswahl_2026.md.

Neuntens, /Users/andredieckmann/Desktop/Proimma GmbH/10_Webseite_Relaunch/DESIGN.md.

Zehntens, /Users/andredieckmann/Desktop/Proimma GmbH/10_Webseite_Relaunch/WIREFRAMES.md.

Elftens, /Users/andredieckmann/Desktop/Proimma GmbH/10_Webseite_Relaunch/BRIEFS.md.

Zwölftens, /Users/andredieckmann/Desktop/Proimma GmbH/10_Webseite_Relaunch/LUECKEN_AUDIT.md.

Dreizehntens, alle freigegebenen Texte aus /Users/andredieckmann/Desktop/Proimma GmbH/00_Projekt_Setup_2026/Webseiten-Texte/.

Pro Datei eine Lesebestätigung mit der Bestätigung, dass Sie den Inhalt verstanden haben. Erst dann beginnen Sie mit dem Bau.

Bau-Sequenz in drei Phasen.

Phase 1a, Premium-Fundament. Aufwand 70 bis 96 Stunden Standard-Variante. Bauauflage. Editorial-Header (V1) durchlaufend. Editorial-Hero auf Startseite (V2) mit display-xxl-Headline „Hausverwaltung und Maklerei in Rostock. Inhabergeführt. Fokussiert." Hero-Datenpunkte (V3). Dunkelblauer Footer (V12). Impressum-Min-Variante (V13-Min). Layout-Gerüst aller sieben Hauptseiten als Astro-Layouts. Hanken Grotesk Variable Self-Hosting. Logo Wort-Bild-Marke (BRIEFS.md 1.16a). Favicon mit PWA-Manifest und Apple-Touch-Icon (BRIEFS.md 1.16b). Elf OG-Bilder (BRIEFS.md 1.5 bis 1.15). robots.txt, sitemap.xml. Schema.org JSON-LD-Skelette (DESIGN.md Sektion 8). Plausible-Tracking-Snippet (DESIGN.md Sektion 15.7).

Phase 1b, Inhalts-Sektionen. Aufwand 130 bis 200 Stunden Standard-Variante. Bauauflage. Mietenverwaltungs-Magazin-Band (V4) auf Hausverwaltung. Maklerei-Magazin-Band (V6) mit Provisionslogik § 656c BGB display-l-Hervorhebung und Bewertungs-Sektion. Substanz-Datenpunkte (V7) auf Startseite und Über-Proimma. Editorial-Personenprofil (V9) auf Über-Proimma mit Portrait-Bild. Cal.com-Termin-Sektion (V10) auf Startseite, Hausverwaltung, Maklerei, Über-Proimma, Kontakt mit Lazy-Load-iFrame und Klartext-Fallback. Editorial-Verzichtsblock (V14) auf Startseite. Themen-Hub-Übersicht und vier Themen-Hub-Erstartikel mit Editorial-Karten und Breadcrumb. Cookie-Hinweis-Komponente. Plunk-Kontaktformular-Backend-Anbindung. Erreichbarkeits-Versprechen (V11-Min) im Footer und in V3 und V7 verteilt.

Phase 1c, Vertiefung und Wagemut. Aufwand 24 bis 50 Stunden, optional bei Bauzeit. Bauauflage. SVG-Stufenleiter Übernahme-Prozess (V5-Min) auf Hausverwaltungs-Seite. Print-Impressum-Magazin-Doppelseite (V13-Stretch) als CI-grenzwertige Wagemut-Empfehlung. Optional Stilfotos Mehrfamilienhaus Rostock und Wohnimmobilien-Architektur als Sektions-Pause-Bilder.

Performance-Auflage hart. Lighthouse-Mindestziel 95 in allen vier Kategorien (Performance, Accessibility, Best Practices, SEO) auf Mobile via Google PageSpeed Insights und automatisiert via Pre-Deploy-Lighthouse-CI. Score unter 0.95 in einer der vier Kategorien führt zum Workflow-Fail, der Pull-Request kann nicht in main gemergt werden, der Tag-Push erzeugt keinen Release. LCP unter 2.5 Sekunden. CLS unter 0.1. INP unter 200 Millisekunden. FCP unter 1.8 Sekunden. KB-Budget. First-Load-JS unter 100 KB komprimiert. CSS unter 30 KB komprimiert. Hero-Bild unter 200 KB. Content-Bilder unter 80 KB. Total Page Weight initial unter 500 KB. AVIF mit WebP-Fallback und JPEG-Last-Resort.

Accessibility-Auflage hart. WCAG 2.2 AA. Tastatur-Navigation, sichtbare Focus-States in Akzent-Hellblau, Skip-Links, semantisches HTML, Heading-Hierarchie, Alt-Texte explizit, Aria-Labels, Form-Labels mit aria-describedby, Kontrast 4.5 zu 1 für Body und 3 zu 1 für Large Text, prefers-reduced-motion-Support, Lang-Attribut, korrekte Tabulator-Reihenfolge, Touch-Target-Mindestgröße 44 mal 44 CSS-Pixel auf Mobile.

Pflicht-Vertrauenselemente sichtbar abgebildet, redundant an mehreren Stellen. 48-Stunden-Antwortzeit-Versprechen werktags, Notfall-Erreichbarkeit für Mieter rund um die Uhr, Vermögensschadenhaftpflicht-Mindestsummen aus § 15 ImmVV (500.000 Euro je Fall, eine Million Euro pro Jahr), einheitliche § 34c-Erlaubnis mit Aktenzeichen gew-1270-2024-AD3231, Provisionslogik nach § 656c BGB transparent (7,14 Prozent inklusive Mehrwertsteuer geteilt 3,57 Prozent je Seite). Diese Elemente erscheinen in V3, V7, V11, V12 und im Impressum.

Pflicht-Stammdaten wörtlich. Proimma GmbH, vertretungsberechtigter Geschäftsführer André Dieckmann, Bremer Straße 12, 18057 Rostock, HRB 16077 Amtsgericht Rostock, Umwandlungsurkunde UVZ 1891/2024 Notar Robert Boris Gaentzsch, USt-IdNr DE359185515, Steuernummer 079/116/01766, externe Kontaktadresse info@proimma.de.

Strikte Ausschlüsse, ohne Ausnahme. Kein BOTTIMMO, kein Home Staging, keine 360-Grad-Fotos, kein aktives Marketing für WEG-Verwaltung, keine Gewerbeimmobilien-Verwaltung, keine Inhalte der fünf Kernthemen Immobilien Ratgeber (Privatverkauf, Scheidung / Trennung, Erbschaft, Verkleinerung, Immobilienwert), keine Vermischung mit Schwestermarken-Inhalten.

Externe Kommunikationsregel, ohne Ausnahme. Keine Preise, keine internen Bestandszahlen, keine Wachstumsziele, keine Mindest- oder Höchstgrößen sichtbar, info@proimma.de als einzige externe E-Mail-Adresse, niemals ad@proimma.de oder orodena54@gmail.com.

Tech-Stack-Auflage. Astro 4 mit Tailwind CSS 3 gemäß DESIGN.md Sektion 14. Hanken Grotesk Variable self-hosted via @fontsource-variable/hanken-grotesk mit font-display swap. Mobile-First-Bauweise. View Transitions Astro-nativ. CSS Scroll-driven Animations für Reveal-Choreographien. Keine GSAP, keine Framer Motion, keine Three.js in Phase 1. AVIF mit WebP-Fallback. Astro Assets nativ über die Image-Komponente.

Wahrheitsregel, oberste Priorität. Keine erfundenen Klientenfälle, keine fiktiven Bewertungen, keine erfundenen Statistiken oder Zahlen, keine erfundenen Beratungsszenen, keine ausgedachten Klientenzitate. Belegbarer Hintergrund von André Dieckmann gemäß Markenkern und Memory. Aktueller Verwaltungs-Bestand null Wohneinheiten wird extern nicht genannt, intern aber als Wahrheit anerkannt. Auf der Maklerei-Seite ausschließlich echte Google-Bewertungen mit Quellenangabe „Google-Bewertung". Bei KI-Generierten Bildern explizite Wahrheitsregel-Vorbehalts-Prüfung gemäß BRIEFS.md.

Schreibregeln, ohne Ausnahme. Sie-Anrede in jedem Text. „mehr als zwanzig Jahre" exakt so geschrieben, niemals mit Ziffer „20" und niemals andere Jahreszahl. „Proimma" mit kleinem i in jedem textlich gesetzten Element. Keine Gedankenstriche oder Bindestriche als Aufzählungszeichen, keine Spiegelstriche, keine horizontalen Trennlinien (---). Keine Fettschrift zur Strukturierung. Keine Bullet-Points wenn Fließtext möglich. Keine Anglizismen oder modischen Schlagworte. Keine Floskeln aus der Verbots-Liste. Keine Selbstbeschreibung mit „persönlich, verlässlich, kompetent, individuell".

Sechs Stamm-Regeln, verbindlich.

Regel 1, Selbstprüfungspflicht. Vor jeder Abgabe gegen drei Fragen prüfen. Vollständigkeit, Andre-Regeln Proimma, Schärfe. Wiederholtes Übersehen ist Verstoß.

Regel 2, Verifikations-Pflicht mit Quellen-Liste. Statusrelevante Aussagen aktiv an der konkreten Quelle prüfen. Lighthouse-Score über PageSpeed Insights live messen, nicht passiv übernehmen.

Regel 3, Sessionstart-Pflicht. Pflichtlektüre in der oben angegebenen Reihenfolge, dann Stand-Bericht, dann inhaltliche Arbeit.

Regel 4, Sessionende-Pflicht kontinuierlich plus final. Memory-relevante Veränderung sofort melden, finaler Pflege-Check vor Verabschiedung. Sitzung erst abgeschlossen wenn Memory-Pflege bestätigt.

Regel 5, Single-Source-of-Truth. Memory-Kerndateien sind Wahrheits-Quelle. Bau-Entscheidungen, die in den Memory-Dateien noch nicht stehen, gehen erst dorthin, dann in den Code.

Regel 6, automatische Konsolidierung. Headquarter-Watchdog läuft Montagmorgen, Drift-Check täglich 20 Uhr Berlin. Drei Drift-Tage in Folge oder Wahrheitsregel-Risiko führen zur Eskalation.

Eingerichtete Tools und Konten zum Bau-Start. Cal.com-Proimma-Account, Plunk-Kontaktformular-Backend, Plausible-Analytics-Site mit acht Custom-Goals, Brevo-Newsletter-Account in Phase 2 vorbereitet, GitHub-Repository mit main- und dev-Branch und Lighthouse-CI-Workflow, All-Inkl-Hosting mit Verzeichnisschutz auf relaunch.proimma.de, Google Business Profile in Verifikation, fünf Auftragsverarbeitungs-Verträge unterschrieben.

Bilder-Lieferung. Portrait André in Schwarzweiß und Farbe als AVIF mit WebP-Fallback. Logo Wort-Bild-Marke als SVG Positiv und Negativ. Favicon SVG plus PNG-Fallbacks. Elf OG-Bilder als statische SVG-Templates plus PNG-Build-Schritt. Optional Phase-1c Stilfotos.

Texte-Lieferung. Sieben Hauptseiten-Texte plus Impressum und Datenschutz vom Texter-Chat freigegeben unter /Users/andredieckmann/Desktop/Proimma GmbH/00_Projekt_Setup_2026/Webseiten-Texte/.

Build- und Versionierung-Auflage. Build-Output unter /Users/andredieckmann/Desktop/Proimma GmbH/10_Webseite_Relaunch/dist/ erzeugen, dann für FTP-Upload in einen Unterordner mit Datums-Suffix nach dem Schema /upload-vN-JJJJ-MM-TT/ kopieren (zum Beispiel upload-v2-2026-04-26). Niemals unter dem generischen Namen /upload/ ablegen, weil sonst die Gefahr besteht, dass sich versehentlich Inhalte aus anderen Ordnern oder Schwester-Projekten dort sammeln und beim Upload mitgehen. Lehre aus dem Vorfall vom 26.04.2026 in tools-workflows.md verankert. Commit-Convention nach Conventional Commits (feat, fix, docs, style, refactor, perf, test, chore) mit Scope, Beispiel feat(hero): editorial display headline mit reveal. Pull-Request-Workflow von dev nach main vor jedem Live-Deploy. Vor jedem Live-Deploy ein Tag in main mit Schema vMAJOR.MINOR.PATCH. v1.0.0 als initialer Go-Live Phase 1, v1.0.x für Bugfixes, v1.x.0 für neue Features ohne Breaking Changes, v2.0.0 für Phase-2-Empfangshalle. Tag-Annotation mit Changelog-Auszug. Rollback-Plan. Bei kritischem Fehler nach Go-Live Verschieben des archivierten WordPress-Ordners zurück in das Root-Verzeichnis von www.proimma.de via FTP, Wiederherstellung innerhalb weniger Minuten. Astro-Rollback auf vorigen Tag via FTP-Upload des Tag-spezifischen Build-Outputs. Beide Wege im Bau-Chat dokumentieren.

Phasen-Endkriterien. Phase 1a abgeschlossen, wenn folgende sechs Bedingungen erfüllt sind. Header und Footer auf allen sieben Hauptseiten plus Impressum, Datenschutz, 404, 500 baufähig. Hero-Sektionen aller Hauptseiten mit display-Headline und Editorial-Index sichtbar. V2 Editorial-Hero auf Startseite plus V3 Hero-Datenpunkte plus Kontakt-Datenpunkte auf Kontakt-Seite implementiert. Impressum mit Pflichtangaben wörtlich plus Datenschutz mit DSGVO-Pflichtinhalten implementiert. Logo, Favicon, elf Open-Graph-Bilder, robots.txt, sitemap.xml, Schema.org-JSON-LD-Skelette, Plausible-Tracking-Snippet, Hanken Grotesk Self-Hosting, HTTP-Sicherheitsheader gemäß Lücke 23, 301-Redirects gemäß Lücke 22 fertig. Lighthouse-Score auf den fertigen Seiten 95 oder mehr in allen vier Kategorien.

Phase 1b abgeschlossen, wenn folgende fünf Bedingungen erfüllt sind. Alle sieben Hauptseiten plus Themen-Hub-Übersicht plus vier Themen-Hub-Erstartikel inhaltlich vollständig befüllt mit freigegebenen Texten. Cal.com-Termin-Sektion auf Startseite, Hausverwaltung, Maklerei, Über-Proimma, Kontakt funktional mit Lazy-Load und Klartext-Fallback. Alle Vorschläge V4, V6, V7, V9, V10, V14 baufähig. Plunk-Kontaktformular-Backend mit Honeypot funktional. Lighthouse-Score 95 oder mehr unverändert.

Phase 1c abgeschlossen, wenn folgende drei Bedingungen erfüllt sind, sofern Bauzeit erlaubt. V5-Min SVG-Stufenleiter Übernahme-Prozess auf Hausverwaltungs-Seite implementiert. Optional V13-Wagemut Print-Impressum-Magazin-Doppelseite implementiert. Optional Stilfotos Mehrfamilienhaus Rostock und Wohnimmobilien-Architektur als Sektions-Pause-Bilder integriert. Lighthouse-Score 95 oder mehr unverändert.

Konflikt-Auflösung-Mechanik. Drei Konflikt-Typen sind im Bau-Chat zu erwarten und mit folgenden Wegen aufzulösen. Erstens, Bau-Praxis-Erkenntnis vs Konzept-Datei. Wenn der Bau-Chat in der praktischen Implementierung feststellt, dass eine Konzept-Aussage technisch nicht haltbar ist (zum Beispiel Performance-Budget-Konflikt mit gewünschtem Reveal-Effekt, oder unvereinbare Browser-Kompatibilität), dann meldet der Bau-Chat das als Drift an den Top-Manager-Chat. Top-Manager-Chat klärt mit André, ob Konzept-Anpassung oder Bau-Anpassung erfolgt. Bau-Chat wartet auf Klärung, bevor er die strittige Komponente fertigstellt. Zweitens, Konzept-Daten vs Memory-Daten. Memory-Kerndateien haben Vorrang über Konzept-Dateien. Bei Drift schreibt der Top-Manager-Chat über den headquarter-update-Skill in die Memory, dann erst in den Code. Drittens, Performance vs Editorial-Wirkung. Performance-Auflage Lighthouse 95 ist hart, nicht weich. Wenn Editorial-Wirkung Performance gefährdet (zum Beispiel zu schwere Reveal-Animation, zu großes Hero-Bild), wird Editorial-Wirkung angepasst, nicht Performance. Editorial-Bold-Disziplin verlangt ohnehin Reduktion vor Effekt.

Erste Handlung. Bestätigung in zwei Sätzen, dann Pflichtlektüre vollständig durcharbeiten in der oben vorgegebenen Reihenfolge mit Lesebestätigung pro Datei. Anschließend Stand-Bericht in maximal acht bis zwölf Sätzen mit Bestätigung des Stichtags, des Markenkerns, der Bau-Sequenz, der Performance- und Accessibility-Auflage, der Pflicht-Vertrauenselemente, der Strikten Ausschlüsse und der Wahrheitsregel. Dann Beginn mit Phase 1a Bauauflage, Sektion für Sektion. Pro abgeschlossener Sektion eine Demo-Vorlage über relaunch.proimma.de mit Lighthouse-Score-Beleg. Pro abgeschlossener Phase 1a, 1b, 1c eine Phasen-Endkriterien-Quittung an den Top-Manager-Chat zur Freigabe vor Phasen-Wechsel.

Maßstab. Wenn Sie alle Komponenten unverändert von der DESIGN.md übernehmen, ohne im Bau eigene Performance-Optimierungen oder Accessibility-Schärfungen einzubringen, fehlt die Bauleitung. Lighthouse 95 ist nicht weich, sondern hart. Wenn die Webseite zum Go-Live in einer der vier Kategorien unter 95 misst, ist die Phase nicht abgeschlossen. Wenn ein Eigentümer mit Branchenkenntnis beim ersten Aufruf der Webseite das Editorial-Bold-Idiom als Standard-Tailwind-Template wahrnimmt, ist die Bauleitung gescheitert.

Dieser Auftrag ist klar, verbindlich und duldet keine Halbheiten. Sie haben alle Quellen, alle Regeln, alle Maßstäbe an einer Stelle. Sie liefern beim ersten Versuch die beste Bauleitung, die Sie liefern können.

Beginnen Sie jetzt mit der Pflichtlektüre.
```

Ende Übergabe-Prompt.

## Selbstprüfung

Vollständigkeit. Alle zehn Pflicht-Prüfungen aus dem Auftrag abgedeckt. Texte (Lücke 1) und Bilder (Lücke 2) aus Briefs. Cal.com-Proimma-Account (Lücke 3). Kontaktformular-Backend (Lücke 4). Cookie-Banner-Tool (Lücke 5). Newsletter-Tool (Lücke 6). Hosting-Account (Lücke 7). Domain-Routing (Lücke 8). GitHub-Repository (Lücke 9). Analytics-Setup (Lücke 10). Google Business Profile (Lücke 11). Plus elf weitere Lücken (Auftragsverarbeitungs-Verträge, Hanken Grotesk Self-Hosting, Open-Graph-Bild-Generierung, Schema.org-Implementation, Pre-Deploy-Lighthouse-CI, Maintenance-Page, robots.txt und sitemap.xml, Cookie-Hinweis-Komponente, Backup-Verifikation, Bewertungs-Auswahl-Pendenz). Pro Lücke Status, Lücken-Beschreibung, Verantwortungs-Zuordnung, Vorlauf-Zeit, Kosten-Schätzung, Abhängigkeit. Verantwortungs-Matrix konsolidiert über alle Lücken. Vorlauf-Zeit-Übersicht in vier Sequenz-Bändern (Sofort, Erster-Bau-Block-Voraussetzungen, Bau-parallel, Foto-abhängig, Phase 2). Kosten-Schätzung-Übersicht in einmaligen, monatlichen Phase-1- und Phase-2-Zusatzkosten. Übergabe-Prompt für den späteren Bau-Chat mit Pflichtlektüre, Bau-Sequenz, Performance- und Accessibility-Auflage, Pflicht-Vertrauenselementen, Pflicht-Stammdaten, Strikten Ausschlüssen, Externer Kommunikationsregel, Tech-Stack-Auflage, Wahrheitsregel, Schreibregeln, Sechs Stamm-Regeln und Erster-Handlung-Aufforderung.

Andre-Regeln Proimma. Sie-Form durchgehend. Keine Trennstriche, keine strukturierende Fettschrift, Bullet-Points ausschließlich in der Verantwortungs-Matrix-Tabelle als Datenstruktur. Keine verbotenen Floskeln. „Proimma" mit kleinem i durchgehend. „mehr als zwanzig Jahre" exakt im Übergabe-Prompt. Schwesterfirma Immobilien Ratgeber strikt ausgeklammert. Strikte Ausschlüsse im Übergabe-Prompt wörtlich übernommen. Externe Kommunikationsregel im Übergabe-Prompt verankert. Pflicht-Stammdaten wörtlich aus Auftrag im Übergabe-Prompt zitiert.

Schärfe. Pro Lücke konkrete Vorlauf-Zeit-Spanne, konkrete Kosten-Schätzung in Euro, konkrete Verantwortungs-Zuordnung, konkrete Abhängigkeit. Kein „je nach Bedarf", kein „prüfen Sie Optionen". Übergabe-Prompt ist eigenständig nutzbar, ohne weitere Konzept-Arbeit. Bau-Chat kann mit dem Prompt sofort starten und die Phase-1-Bauleitung übernehmen, sobald die Erster-Bau-Block-Voraussetzungs-Lücken geschlossen sind. Maßstab am Ende des Übergabe-Prompts ist nicht weich, sondern als Bau-Disziplin-Pflicht formuliert.

Wahrheitsregel. Aktueller Verwaltungs-Bestand null Wohneinheiten ist intern anerkannt und im Übergabe-Prompt verankert. Foto-Termin entfallen ist in Lücke 2 dokumentiert mit ChatGPT-Image-2.0-Brückenlösung als Wahrheitsregel-konforme Sofort-Variante. Bewertungs-Auswahl-Pendenz aus dem Texter-Chat ist als Lücke 21 transparent benannt mit fünf Auswahl-Heuristiken aus BRIEFS.md.

Schärfung 28.04.2026 nach Selbstprüfung. Fünf Lücken geschlossen. Erstens, neue Lücke 22 Domain-301-Redirects WordPress-zu-Astro für SEO-Continuity mit konkreter URL-Liste-Quelle und .htaccess-Implementation. Zweitens, neue Lücke 23 HTTP-Sicherheitsheader mit sechs Headern (HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy), konkreten CSP-Direktiven für Cal.com und Plausible plus securityheaders.com-Verifikation mit Mindestziel A-Rating. Drittens, Übergabe-Prompt erweitert um Build- und Versionierung-Auflage mit Build-Output-Konvention upload-vN-JJJJ-MM-TT (Lehre aus Vorfall 26.04.2026), Conventional-Commits-Format und Versions-Tag-Schema vMAJOR.MINOR.PATCH plus Rollback-Plan. Viertens, Übergabe-Prompt erweitert um Phasen-Endkriterien für Phase 1a, 1b, 1c mit konkreten Quittungs-Bedingungen pro Phase. Fünftens, Übergabe-Prompt erweitert um Konflikt-Auflösung-Mechanik in drei Konflikt-Typen (Bau-Praxis vs Konzept, Konzept vs Memory, Performance vs Editorial-Wirkung) mit klaren Auflösungs-Wegen.

Stand 28.04.2026, Teil 5 abnahmebereit. Mit Ihrer Freigabe ist das fünfteilige Konzept-Paket vollständig abnahmebereit. Der Übergabe-Prompt aus diesem Dokument kann direkt in den späteren Bau-Chat „Webseiten-Relaunch Proimma Phase 1" als Eröffnungs-Auftrag kopiert werden, sobald die Sofort-Lücken und die Erster-Bau-Block-Voraussetzungs-Lücken geschlossen sind.
