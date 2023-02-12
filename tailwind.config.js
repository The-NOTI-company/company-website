/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'clash': ["'Clash Display'", "sans-serif"],
        'futura': ["'Futura Md BT'", "sans-serif"]
      }
    },
  },
  plugins: [],
}
