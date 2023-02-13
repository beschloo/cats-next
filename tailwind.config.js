/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "!./node_modules",
  ],
  theme: {
    extend: {
      colors: {
        'cats-yellow': '#FFF500',
        'cats-yellow-dark': '#C9B500',
        'cats-orange-red': "#ED1D24"
      },
      fontFamily: {
        'arial': 'Arial',
        'arial-black': "Arial-Black",
        'helvetica': "Helvetica",
        'inter': "inter",
        'heading-black': "Heading-Black"
      }
    },
  },
  plugins: [],
}
