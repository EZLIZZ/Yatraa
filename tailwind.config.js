/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
    theme: {
      extend: {
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
          },
            colors: {
        primary: '#7c5cd5',    // your primary color (purple-ish)
        secondary: '#e2b18b',  // your secondary color (light brown/orange)
      },
      },
    },
    plugins: [],
  }
  