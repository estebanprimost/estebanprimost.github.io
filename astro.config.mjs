import { defineConfig, sharpImageService } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://estebanprimost.github.io',
  integrations: [tailwind()],
  compressHTML: true,
  image: {
		service: sharpImageService(),
	},
});
