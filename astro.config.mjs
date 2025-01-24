// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
export default defineConfig({
  output: 'server',
  server: {
      port: 4200 // Cambia el puerto aquí
    },
    adapter: vercel(),
});