import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://msaeedbabaee.github.io',
  integrations: [
    mdx(),
    tailwind(),
    react(),
    // روی GitHub Pages (build استاتیک) Keystatic خاموش می‌شود
    ...(process.env.SKIP_KEYSTATIC === 'true' ? [] : [keystatic()]),
  ],
});
