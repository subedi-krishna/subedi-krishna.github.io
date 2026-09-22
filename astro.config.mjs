import { defineConfig } from 'astro/config';

export default defineConfig({
  // Deploy target (D-5): GitHub Pages project site neryva-lab/curly-octo-memory.
  // Drives canonical URLs, social preview images, and in-site path prefixing.
  site: 'https://neryva-lab.github.io',
  base: '/curly-octo-memory',
});
