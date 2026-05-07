// Tailwind-Konfiguration Proimma Relaunch
// Stand 02.05.2026, Bau-Block 1.
// Editorial-Designsystem mit Hanken Grotesk Variable und Hellblau-Akzent.
// Farb-Tokens und Spacing leiten sich aus den CSS-Variablen
// in src/styles/global.css ab, damit Tokens single source of truth bleiben.

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bgPrimary:    'var(--color-bg-primary)',
        bgElevated:   'var(--color-bg-elevated)',
        fgPrimary:    'var(--color-fg-primary)',
        fgSecondary:  'var(--color-fg-secondary)',
        line:         'var(--color-line)',
        lineFaint:    'var(--color-line-faint)',
        accent:       'var(--color-accent)',
        footerBg:     'var(--color-footer-bg)',
        footerFg:     'var(--color-footer-fg)',
      },
      fontFamily: {
        sans: ['"Hanken Grotesk Variable"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      maxWidth: {
        page: '1280px',
        prose: '62ch',
        narrow: '48ch',
      },
      spacing: {
        '2xs': '4px',
        xs:    '8px',
        s:     '16px',
        m:     '24px',
        l:     '48px',
        xl:    '96px',
        '2xl': '144px',
        '3xl': '192px',
        '4xl': '240px',
      },
      letterSpacing: {
        tightest: '-0.02em',
        tighter:  '-0.01em',
      },
    },
  },
  plugins: [],
};
