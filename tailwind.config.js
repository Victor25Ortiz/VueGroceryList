/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: '#0CDAB9',
        foreground: '#000000',
        comment: '#C3D70A',
        accent: '#c3e88d',
        redish: '#ff5370',
        orangish: '#f78c6c',
        yellowish: '#A2A2A2',
        greenish: '#c3e88d',
        bluish: '#000000',
        purplish: '#c792ea',
      },
    },
  },
  plugins: [],
}