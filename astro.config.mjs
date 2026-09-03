import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  site: 'https://msaeedbabaee.github.io',
  markdown: {
    // پشتیبانی از فرمول‌های ریاضی LaTeX در همه‌ی محتوای Markdown و MDX
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [
    mdx(),
    tailwind(),
    react(),
    // روی GitHub Pages (build استاتیک) Keystatic خاموش می‌شود
    ...(process.env.SKIP_KEYSTATIC === 'true' ? [] : [keystatic()]),
  ],
});
