// API-Route Stub: Anleitung "Hausverwalter wechseln in fünf Schritten"
// Stand 03.05.2026, Phase 2 bis 4 Bau-Block 6.
//
// Form-Submission von /hausverwaltung Sektion 07 (Brevo-Doppelt-Opt-In).
//
// In der aktuellen Bau-Konfiguration (output: 'static' in astro.config.mjs)
// wird diese Route NICHT in den Vorschau-Build aufgenommen, weil das statische
// Build keine Server-Endpoints kennt. Die Route ist als Referenz für die
// Live-Gang-Phase angelegt; vor Aktivierung muss entweder ein Astro-Server-
// oder Hybrid-Adapter eingebunden oder die Form-Submission direkt an die
// Brevo-Web-Endpoint umgebogen werden (Browser-Side, ohne Backend-Geheimnis,
// weil Brevo Public-Form-IDs unterstützt).
//
// Honeypot-Logik (das Sicherheitsfeld "website" im Formular ist visuell und
// für Screen-Reader versteckt): wenn das Feld einen Wert trägt, ist die
// Submission ein Bot. Wir verwerfen sie still mit HTTP 200, sodass der Bot
// keine Information über die Erkennung bekommt, und tragen sie nicht an Brevo.
//
// Pflichtfeld-Validierung: Vorname, Nachname, E-Mail-Adresse müssen leere
// Strings ausschließen; E-Mail mit einfachem Regex auf Form-Plausibilität.
// Der Brevo-API-Aufruf ist als TODO markiert; vor Live-Gang müssen
// API-Key und List-ID aus Umgebungsvariablen geladen werden.

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

  // Honeypot zuerst — vor jeder Pflichtfeld-Prüfung. Stille Verwerfung.
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

  if (!vorname || !nachname || !email || !isPlausibleEmail(email)) {
    return new Response(
      JSON.stringify({ error: 'fields-missing-or-invalid' }),
      { status: 422, headers: { 'Content-Type': 'application/json' } }
    );
  }

  // TODO Live-Gang: Brevo-API-Aufruf.
  // const brevoKey = import.meta.env.BREVO_API_KEY;
  // const listId = Number(import.meta.env.BREVO_LIST_ID_ANLEITUNG);
  // await fetch('https://api.brevo.com/v3/contacts/doubleOptinConfirmation', {
  //   method: 'POST',
  //   headers: { 'api-key': brevoKey, 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     email,
  //     attributes: { VORNAME: vorname, NACHNAME: nachname },
  //     includeListIds: [listId],
  //     templateId: BREVO_TEMPLATE_ID_DOPPELT_OPT_IN,
  //     redirectionUrl: 'https://www.proimma.de/anleitungen/hausverwalter-wechseln-fuenf-schritte.pdf',
  //   }),
  // });

  return new Response(
    JSON.stringify({
      ok: true,
      message: 'Bitte bestätigen Sie die Anmeldung über den Link in der gerade gesendeten E-Mail.',
    }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
};
