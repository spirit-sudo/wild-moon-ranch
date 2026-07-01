import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  integrations: [react()],
  outDir: './dist/public',
  publicDir: './public',
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 23443,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});