/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
      colors: {
        primary: '#ede6d1',
        secondary: '#e89ca1',
        accent: '#2C2C2C',
      },
    },
  },
  plugins: [],
};