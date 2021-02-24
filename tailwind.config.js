module.exports = {

  // if you run into problems with purge, please read https://tailwindcss.com/docs/optimizing-for-production
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
    },
  },

  variants: {
    extend: {
      borderColor: ['focus-visible'],
      opacity: ['disabled'],
    },
  },

  plugins: [],
}