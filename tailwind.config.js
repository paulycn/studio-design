/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#E5DED5',
        'primary': '#E79F14',
        'text-p':'#545454',
        'black-p':'#323030'
      }
    },
  },
  plugins: [],
}

