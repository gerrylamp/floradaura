export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        floral: {
          pink: '#f8d7da',
          green: '#d1e7dd',
          gold: '#d4af37',
        }
      },
    },
  },
  plugins: [],
}