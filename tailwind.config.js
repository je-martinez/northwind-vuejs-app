module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backdropBrightness: {
        25: ".25",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
