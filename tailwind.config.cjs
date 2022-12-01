/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif", defaultTheme.fontFamily.roboto],
    },
    extend: {
      backgroundImage: {
        home0: "url('/src/assets/bg-home-0.jpg')",
        home1: "url('/src/assets/bg-home-1.jpg')",
      },
    },
  },
  plugins: [],
}
