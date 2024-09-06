/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
      },
    },
  },
  plugins: [require('daisyui')],
  // daisyUI config (optional - here are the default values)
  themes: ["light", "dark", "cupcake"],
}