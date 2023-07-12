import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://estebanprimost.github.io',
  integrations: [tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp',
  })],
  experimental: {
    assets: true,
  },
  compressHTML: true
});