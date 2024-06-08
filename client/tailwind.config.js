/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Manrope': ['Manrope'],
        'Lora': ['Lora'],
        'Mulish': ['Mulish'],
        'Quicksand': ['Quicksand'],
      },
      colors: {
        'darkGreen': '#0C4E47',
        'lightGreen':'#51D16D'
      }
    },
  },
  plugins: [],
}