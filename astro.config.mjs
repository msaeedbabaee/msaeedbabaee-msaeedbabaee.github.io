import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';

const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  site: 'https://msaeedbabaee.github.io',
  output: 'static',
  integrations: [
    mdx(),
    tailwind(),
    ...(isDev ? [keystatic()] : []),
  ],
});