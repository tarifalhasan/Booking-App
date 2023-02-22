/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['.index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        skin: {
          light: '#fff',
          muted: 'var(-color-bg)',
        },
        fontSize: {
          sm: ['1.5em', '1.125em'],
        },
      },
      fontFamily: {
        nunito: "'Nunito Sans', sans-serif",
      },
    },
  },
  plugins: [],
};
