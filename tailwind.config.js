/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink: '#11100f',
        coal: '#1a1917',
        copper: '#c87941',
        copperLight: '#e5a36d',
        brick: '#8b2e28',
        paper: '#f2ece3'
      },
      fontFamily: {
        display: ['Anton', 'Impact', 'sans-serif'],
        sans: ['Manrope', 'Arial', 'sans-serif']
      }
    }
  },
  plugins: []
};
