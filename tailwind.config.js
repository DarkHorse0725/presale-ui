/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
      },
      fontFamily: {
        poppins: ["Poppins Regular", "sans-serif"],
        poppins_semibold: ["Poppins SemiBold", "sans-serif"],
        poppins_medium: ["Poppins Medium", "sans-serif"],
        poppins_bold: ["Poppins Bold", "sans-serif"],
      },
      screens: {
        'ios' : '320px',
        'sm' : "360px",
        'xs': '390px',
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl":'1315px',
        "3xl": "1920px",
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  darkMode: ["class"],
  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    // ...
  ],
}
