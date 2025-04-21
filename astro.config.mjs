// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://[tu-usuario].github.io',
  base: '/portfolio',
  output: 'static',
  integrations: [tailwind()]
});