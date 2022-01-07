module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "hci-lila": {
          light: "#ACD8A4",
          DEFAULT: "#92B88B",
          dark: "#769970",
        },
        "hci-header": {
          DEFAULT: "#829F7E",
        },
      },
    },
  },
  plugins: [],
};
