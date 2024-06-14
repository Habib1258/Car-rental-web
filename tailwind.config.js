/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans : ["poppins", "sans-serif"],
        fantasy: ['FantasyFont', 'cursive'],
        cambria: ['Cambria', 'serif'], 
      },
      backgroundImage: {
        'renta': "url('../assets/images/rent1.jpeg')",
        'rentb': "url('../assets/images/rent2.jpeg')",
        'rentc': "url('../assets/images/rent3.jpeg')",
      },
      colors: {
        'custom-dark': '#001221',
        'custom-light-dark' : '#192937',
        'custom-gray-dark' : '#32414d'
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [],
}

