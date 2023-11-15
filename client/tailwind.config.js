/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'black':'rgb(0,0,0)',
        'transparent':'rgb(0,0,0,0.3)'

      }
    },
  },
  plugins: [],
}
