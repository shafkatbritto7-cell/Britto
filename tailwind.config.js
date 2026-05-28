/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        dark: '#0A0A0A',
      },
    },
  },

  plugins: [],
};
