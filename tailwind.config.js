/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        romantic: {
          pink: '#FFB6C1',
          lightPink: '#FFE4E1',
          rose: '#FF69B4',
          lightRose: '#FFC0CB',
        }
      }
    },
  },
  plugins: [],
}
