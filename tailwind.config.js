/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        DarkCyan: 'hsl(158, 36%, 37%)',
        Cream: 'hsl(30, 38%, 92%)',
        Verydarkblue: 'hsl(212, 21%, 14%)',
        Darkgrayisblue: 'hsl(228, 12%, 48%)',
        White: 'hsl(0, 0%, 100%)',
      }
    },
  
  },
  plugins: [],
}
