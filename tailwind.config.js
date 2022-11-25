/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens:{
        'gejala':'1000px'
      }
    },
  },
  plugins: [require("daisyui")],
}
