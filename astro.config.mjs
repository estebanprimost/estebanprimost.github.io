import { defineConfig, sharpImageService } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import astroI18next from "astro-i18next";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://estebanprimost.github.io',
  integrations: [tailwind(), astroI18next(), react()],
  trailingSlash: "always",
  experimental: {
    assets: true
  },
  compressHTML: true,
  image: {
    // Example: Enable the Sharp-based image service
    service: sharpImageService(),
  },
});