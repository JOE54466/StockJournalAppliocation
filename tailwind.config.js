/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1E90FF', // DodgerBlue
        'background': '#121212',
        'surface': '#1E1E1E',
        'on-surface': '#E0E0E0',
        'surface-light': '#2A2A2A',
        'green-accent': '#22C55E',
        'red-accent': '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
