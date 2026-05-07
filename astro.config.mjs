// Astro-Konfiguration Proimma Relaunch
// Statisches Build mit Tailwind als Styling-Engine.
// Die Sitemap wird handgebaut unter public/sitemap.xml gepflegt.
// site-URL wird vor Go-Live auf https://www.proimma.de umgestellt.

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

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
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});
