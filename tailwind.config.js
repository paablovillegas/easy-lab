module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        body: ['Commissioner']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
