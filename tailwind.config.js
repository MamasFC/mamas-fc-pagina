/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",   // ← importante
  ],
  theme: {
    extend: {
      colors: {
        'dark-green': '#0A3D2A',
        'luminous-green': '#39FF14',
      },
    },
  },
  plugins: [],
}