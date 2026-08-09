/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0E0B09',
        foreground: '#F5F0EB',
        muted: {
          foreground: '#8A7A6E',
        },
        primary: '#D4A574',
      },
      fontFamily: {
        'bodoni': ['"Bodoni Moda"', 'serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'dm-mono': ['"DM Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}