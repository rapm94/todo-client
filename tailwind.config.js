module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gold: "#84817A",
        taskblue: "#CDCDFA",
        taskred: "#CD6133",
        taskgreen:"#33D9B2"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
