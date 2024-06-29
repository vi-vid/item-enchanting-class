/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      flexBasis: {
        '1/10': '10%',
      }
    },
  },
  plugins: [],
}

