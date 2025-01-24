// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
// import node from '@astrojs/node'
// https://astro.build/config
export default defineConfig({
  output: 'server',

  //   adapter: node(),
  server: {
      port: 4200 // Cambia el puerto aquí
    },

  adapter: vercel(),
});