// @ts-check
import { defineConfig } from 'astro/config';
// import node from '@astrojs/node'
// https://astro.build/config
export default defineConfig({
  output: 'server',
    server: {
        port: 4200 // Cambia el puerto aquí
      },
      
    //   adapter: node(),
});
