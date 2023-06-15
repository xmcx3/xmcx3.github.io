/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray': '#F6F1F1',
        'cold': '#19A7CE',
        'black': '#000000',
        'sea': '#146C94',
      },
    },
  },
  plugins: [],
}
