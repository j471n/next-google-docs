module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        default:
          "0 1px 1px 0 rgba(65, 69, 73, .3), 0 1px 3px 1px rgba(65, 69, 73, .15)",
      },
    },
  },
  plugins: [],
};
