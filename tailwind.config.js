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
          }
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