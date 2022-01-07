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
        "hci-white": {
          light: "rgba(255, 255, 255, 0.25)",
          DEFAULT: "#92B88B",
          dark: "rgba(255, 255, 255, 0.35)",
        },
        "hci-header": {
          DEFAULT: "#829F7E",
        },
      },
    },
  },
  plugins: [],
};
