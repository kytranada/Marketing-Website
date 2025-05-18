/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel': {
          'white': '#F8F9FA',
          'blue': {
            light: '#B5D8E8',
            DEFAULT: '#7FB3D5',
            dark: '#4A90E2'
          },
          'coral': '#FF9E80',  /* J in logo */
          'yellow': '#FFECB3', /* O in logo */
          'mint': '#B2DFDB',   /* Y in logo */
          'lavender': '#D1C4E9' /* MARKETING text */
        }
      },
      fontFamily:{
        "bootFont": ["bootFont"]
      },
      screens:{
        "xs": "425px",
      }
    },
  },
  plugins: [],
}
