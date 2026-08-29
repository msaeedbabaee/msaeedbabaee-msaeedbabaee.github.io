import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    year: z.string().optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['paper', 'quarto']),
    date: z.string().optional(),
    pdfLink: z.string().optional(),
  }),
});

export const collections = { projects, services, research };