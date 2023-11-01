/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'color-primary':'#ea911b',
        'color-secondary':'#141414'
      },
      fontFamily:{
        boowie: ['BOOWIE', 'sans-serif'],
        yanone: ['Yanone', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

