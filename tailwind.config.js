/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'spin-forwards': {
          '0%': { transform: 'rotate(0.0deg)' },
          '70%': { transform: 'rotate(190.0deg)' },
          '100%': { transform: 'rotate(180.0deg)' },
        },
      },
      animation: {
        'spin-forwards': 'spin-forwards 0.5s ease-in-out',
      },
      colors: {
        'primary-orange': '#a74318',
        'primary-green': '#245a50',
      },
    },
  },
  plugins: [],
};
