import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://saltandskylodgingco.com',
  base: '/julian-ca/',
  integrations: [react(), sitemap()],
  outDir: './dist/public',
  publicDir: './public',
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 23443,
    allowedHosts: true,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
    preview: {
      allowedHosts: true,
    },
  },
});