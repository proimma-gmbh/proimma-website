// Astro-Konfiguration Proimma Relaunch
// Statisches Build, Sitemap-Integration mit Priority und Changefreq pro
// Seitentyp gemäß DESIGN.md Sektion 8, Tailwind als Styling-Engine.
// site-URL wird vor Go-Live auf https://www.proimma.de umgestellt.

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://relaunch.proimma.de',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    tailwind({
      // Eigenes Basis-CSS (global.css) wird in BaseLayout manuell eingebunden,
      // damit Design-Tokens als CSS-Variablen vor Tailwind greifen.
      applyBaseStyles: false,
    }),
    sitemap({
      // API-Routen aus dem Sitemap ausschließen (Server-Endpoints, kein
      // SEO-Inhalt). robots.txt blockiert in der Bauphase ohnehin alles.
      filter: (page) => !page.includes('/api/'),
      // Priority und Changefreq gemäß DESIGN.md Sektion 8:
      //   1.0 Startseite, 0.9 Hausverwaltung/Maklerei, 0.8 Über/Wissen,
      //   0.7 Wissens-Artikel, 0.5 Kontakt, 0.3 Impressum/Datenschutz.
      serialize(item) {
        const url = item.url;
        if (url === 'https://relaunch.proimma.de/') {
          return { ...item, changefreq: 'monthly', priority: 1.0 };
        }
        if (url.endsWith('/hausverwaltung') || url.endsWith('/maklerei')) {
          return { ...item, changefreq: 'monthly', priority: 0.9 };
        }
        if (url.endsWith('/ueber-proimma') || url.endsWith('/wissen')) {
          return { ...item, changefreq: 'monthly', priority: 0.8 };
        }
        if (url.includes('/wissen/')) {
          return { ...item, changefreq: 'weekly', priority: 0.7 };
        }
        if (url.endsWith('/kontakt')) {
          return { ...item, changefreq: 'monthly', priority: 0.5 };
        }
        if (url.endsWith('/impressum') || url.endsWith('/datenschutz')) {
          return { ...item, changefreq: 'yearly', priority: 0.3 };
        }
        return item;
      },
    }),
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
