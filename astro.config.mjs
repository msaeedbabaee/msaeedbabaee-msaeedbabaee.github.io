import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import keystatic from '@keystatic/astro';

const isDev = process.env.NODE_ENV !== 'production';

export default defineConfig({
  output: 'static',
  integrations: [
    mdx(),
    ...(isDev ? [keystatic()] : []),
  ],
});