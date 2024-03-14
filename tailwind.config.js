/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'regular': ['Poppins_400Regular', 'sans-serif'],
        'medium': ['Poppins_500Medium', 'sans-serif'],
        'bold': ['Poppins_700Bold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
