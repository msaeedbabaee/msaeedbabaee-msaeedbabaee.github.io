import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Software', value: 'Software' },
            { label: 'AI & Data', value: 'AI & Data' },
            { label: 'Geotechnical', value: 'Geotechnical' },
            { label: 'Numerical Modeling', value: 'Numerical Modeling' },
          ],
          defaultValue: 'Software',
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), { label: 'Tags' }),
        description: fields.text({ label: 'Description', multiline: true }),
        year: fields.text({ label: 'Year' }),
        github: fields.url({ label: 'GitHub Link' }),
        demo: fields.url({ label: 'Demo Link' }),
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
        summary: fields.text({ label: 'Summary', multiline: true }),
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
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'Academic Paper / Thesis', value: 'paper' },
            { label: 'Quarto Report', value: 'quarto' },
          ],
          defaultValue: 'paper',
        }),
        date: fields.date({ label: 'Publication Date' }),
        pdfLink: fields.url({ label: 'PDF Download Link' }),
        content: fields.mdx({ label: 'Abstract / Main Text' }),
      },
    }),
  },
});