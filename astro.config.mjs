import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import image from "@astrojs/image";
import astroI18next from "astro-i18next";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://estebanprimost.github.io',
  integrations: [tailwind(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  }), astroI18next(), react()],
  trailingSlash: "always",
  experimental: {
    assets: true,
    redirects: true
  },
  compressHTML: true
});