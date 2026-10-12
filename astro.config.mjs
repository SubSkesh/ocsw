// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ocsw.it',
  // URL senza barra finale: Cloudflare Pages serve contatti.html come /contatti
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
