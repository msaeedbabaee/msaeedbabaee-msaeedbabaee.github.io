import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        category: fields.text({ label: 'Category', defaultValue: 'Technical' }),
        date: fields.date({ label: 'Date' }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),
        image: fields.text({ label: 'Image Path', description: 'e.g. /assets/images/blog/cover.jpg' }),
        content: fields.mdx({ label: 'Content' }),
      },
    }),

    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        category: fields.text({ label: 'Category' }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),
        year: fields.integer({ label: 'Year' }),
        featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
        image: fields.text({ label: 'Image Path', description: 'e.g. /assets/images/projects/slope.jpg' }),
        content: fields.mdx({ label: 'Content' }),
      },
    }),

    services: collection({
      label: 'Services',
      slugField: 'title',
      path: 'src/content/services/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),
        order: fields.integer({ label: 'Order', defaultValue: 99 }),
        content: fields.mdx({ label: 'Content' }),
      },
    }),

    research: collection({
      label: 'Research & Notes',
      slugField: 'title',
      path: 'src/content/research/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'Academic Paper / Thesis', value: 'paper' },
            { label: 'Quarto Report', value: 'quarto' },
          ],
          defaultValue: 'paper',
        }),
        status: fields.text({ label: 'Status' }),
        year: fields.integer({ label: 'Year' }),
        link: fields.url({ label: 'Link' }),
        content: fields.mdx({ label: 'Abstract / Main Text' }),
      },
    }),
  },
});