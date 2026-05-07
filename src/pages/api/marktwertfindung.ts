// API-Route Stub: Marktwertfindungs-Anfrage
// Stand 05.05.2026 (Compliance-v25): von Plunk auf E-Mail-Versand umgestellt.
// Plunk-Anbindung folgt in Phase-1b nach Eintreffen des Plunk-Auftrags-
// verarbeitungsvertrags (heute 05.05.2026 angefragt, Antwort etwa sieben
// Werktage). Bis dahin Phase-1-Lösung als E-Mail-Versand an info@proimma.de
// mit Betreff "Marktwertfindungs-Anfrage [Vorname Nachname]" und allen
// Form-Inhalten im Mail-Body. Diese Verarbeitung ist durch den bestehenden
// Block "## E-Mail-Kommunikation" der Datenschutzerklärung abgedeckt.
//
// Gleiche Architektur-Note wie /api/anleitung: bei output:'static' wird die
// Route nicht ins Vorschau-Build aufgenommen. Aktivierung in der Live-Gang-
// Phase entweder über Astro-Hybrid-Adapter mit Node-Mailer (z. B. nodemailer
// gegen den All-Inkl-SMTP-Server) oder über einen kleinen PHP-Mailer-Stub
// direkt im KAS-Webroot, der die Form-Daten als E-Mail an info@proimma.de
// weiterleitet.
//
// Honeypot-Logik: Sicherheitsfeld "website" leer, sonst stille HTTP 200-
// Verwerfung an den Bot. Pflichtfeld-Prüfung für Vorname, Nachname,
// E-Mail-Adresse, Objektart, Lage. Optionale Felder Telefonnummer und
// Bearbeitungszeitraum werden mitgesendet, aber nicht validiert.
// Hidden-Feld "anliegen" ist im Markup auf "Marktwertfindung" vorbelegt
// und wird zur E-Mail-Betreff-Generierung verwendet.

import type { APIRoute } from 'astro';

export const prerender = false;

const isPlausibleEmail = (value: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export const POST: APIRoute = async ({ request }) => {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return new Response(JSON.stringify({ error: 'invalid-payload' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const honeypot = String(data.get('website') ?? '');
  if (honeypot.trim() !== '') {
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const vorname = String(data.get('vorname') ?? '').trim();
  const nachname = String(data.get('nachname') ?? '').trim();
  const email = String(data.get('email') ?? '').trim();
  const objektart = String(data.get('objektart') ?? '').trim();
  const lage = String(data.get('lage') ?? '').trim();
  const telefon = String(data.get('telefon') ?? '').trim();
  const zeitraum = String(data.get('zeitraum') ?? '').trim();
  const anliegen = String(data.get('anliegen') ?? 'Marktwertfindung').trim();

  if (!vorname || !nachname || !email || !objektart || !lage || !isPlausibleEmail(email)) {
    return new Response(
      JSON.stringify({ error: 'fields-missing-or-invalid' }),
      { status: 422, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // TODO Live-Gang Phase 1: E-Mail-Versand an info@proimma.de via All-Inkl-SMTP.
  // Beispiel-Implementierung mit nodemailer (Astro hybrid mode erforderlich):
  // import nodemailer from 'nodemailer';
  // const transporter = nodemailer.createTransport({
  //   host: 'mail.example.com', // tatsächlicher Hostname über Umgebungsvariable SMTP_HOST
  //   port: 465,
  //   secure: true,
  //   auth: { user: import.meta.env.SMTP_USER, pass: import.meta.env.SMTP_PASS },
  // });
  // await transporter.sendMail({
  //   from: '"Proimma Webseite" <info@proimma.de>',
  //   to: 'info@proimma.de',
  //   replyTo: email,
  //   subject: `Marktwertfindungs-Anfrage ${vorname} ${nachname}`,
  //   text: `Anliegen: ${anliegen}\nObjektart: ${objektart}\nLage: ${lage}\nTelefon: ${telefon || '—'}\nGewünschter Bearbeitungszeitraum: ${zeitraum || '—'}\nE-Mail: ${email}`,
  // });
  //
  // TODO Phase 1b: Plunk-API-Aufruf, sobald Plunk-Auftragsverarbeitungs-
  // vertrag eintrifft. Dann ersetzt der Plunk-Aufruf die nodemailer-Variante
  // und der Brevo-Block in der Datenschutzerklärung wird um einen Plunk-Block
  // ergänzt.

  return new Response(
    JSON.stringify({
      ok: true,
      message: 'Ihre Anfrage ist eingegangen. Wir melden uns innerhalb eines Werktages mit Preis und Vorlauf-Zeit.',
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
