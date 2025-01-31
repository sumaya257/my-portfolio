/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // Ensures dark mode works based on class
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

