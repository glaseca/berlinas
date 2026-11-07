import { defineConfig } from 'astro/config';

// El sitio se publica como project page: https://glaseca.github.io/berlinas/
export default defineConfig({
  site: 'https://glaseca.github.io',
  base: '/berlinas',
  trailingSlash: 'ignore',
});
