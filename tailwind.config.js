/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { paper: '#ECECEA', panel: '#FAFAF9', ink: '#1C1C1E', mute: '#55555A', line: '#DEDEDB' },
      fontFamily: {
        display: ['Archivo', 'Arial Black', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px -28px rgba(0,0,0,.28)',
        lift: '0 18px 40px -18px rgba(0,0,0,.35)',
      },
    },
  },
  plugins: [],
}
