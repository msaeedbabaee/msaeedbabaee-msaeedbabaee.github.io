import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

import react from '@astrojs/react';

export default defineConfig({
<<<<<<< HEAD
  integrations: [mdx(), tailwind(), react()],
});
=======
  site: 'https://msaeedbabaee.github.io',
  integrations: [
    mdx(),
    tailwind(),
    react(),
    // روی GitHub Pages (build استاتیک) Keystatic خاموش می‌شود
    ...(process.env.SKIP_KEYSTATIC === 'true' ? [] : [keystatic()]),
  ],
});
>>>>>>> 8ec360fe05527000e56b9285e9fe6249c604bc76
