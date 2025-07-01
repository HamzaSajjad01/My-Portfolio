/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        cinzel: ['Cinzel', 'serif'],
        poppins: ['Poppins' , 'sans-serif'],
      },
    },
  },
  plugins: [],
}

