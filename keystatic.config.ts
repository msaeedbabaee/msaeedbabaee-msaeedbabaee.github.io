import { config, collection, fields } from '@keystatic/core';
import { block } from '@keystatic/core/content-components';

// کامپوننت‌های تعاملی قابل‌درج داخل هر محتوای MDX (بلاگ، پروژه‌ها، سرویس‌ها، ریسرچ)
// این‌ها دقیقاً با کامپوننت‌های واقعی سایت در src/components/mdx/ مطابقت دارن
const mdxComponents = {
  YouTube: block({
    label: 'YouTube Video',
    schema: {
      id: fields.text({
        label: 'Video ID',
        description: 'قسمت بعد از v= توی لینک یوتیوب، مثلاً برای youtube.com/watch?v=dQw4w9WgXcQ مقدار dQw4w9WgXcQ است',
      }),
      title: fields.text({ label: 'Title (accessibility)', defaultValue: 'YouTube video' }),
    },
  }),
  Video: block({
    label: 'Video File (mp4/webm)',
    schema: {
      src: fields.url({ label: 'Video File URL' }),
      poster: fields.url({ label: 'Poster Image URL (optional)' }),
      caption: fields.text({ label: 'Caption (optional)' }),
    },
  }),
  Embed: block({
    label: 'Interactive Embed (demo / chart / other platform)',
    schema: {
      url: fields.url({
        label: 'Embed URL',
        description: 'لینک iframe-پذیر: CodePen, StackBlitz, Observable, Plotly Chart Studio, Google Maps و غیره',
      }),
      title: fields.text({ label: 'Title (accessibility)', defaultValue: 'Embedded content' }),
      height: fields.integer({ label: 'Height (px)', defaultValue: 480 }),
    },
  }),
};

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'msaeedbabaee',
      name: 'msaeedbabaee.github.io',
    },
  },
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
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'public/assets/images/blog',
              publicPath: '/assets/images/blog/',
            },
          },
          components: mdxComponents,
        }),
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
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'public/assets/images/projects',
              publicPath: '/assets/images/projects/',
            },
          },
          components: mdxComponents,
        }),
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
        content: fields.mdx({
          label: 'Content',
          options: {
            image: {
              directory: 'public/assets/images/services',
              publicPath: '/assets/images/services/',
            },
          },
          components: mdxComponents,
        }),
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
        content: fields.mdx({
          label: 'Abstract / Main Text',
          options: {
            image: {
              directory: 'public/assets/images/research',
              publicPath: '/assets/images/research/',
            },
          },
          components: mdxComponents,
        }),
      },
    }),
  },
});
