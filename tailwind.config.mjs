/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Inter', 'monospace'],
      },
      colors: {
        dark: {
          bg: '#000000',
          card: '#0c0c0e',
          border: '#1f1f23',
        },
      },
    },
  },
  plugins: [],
};