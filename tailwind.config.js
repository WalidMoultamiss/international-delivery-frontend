module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#00bcd4",
        "secondary-color": "#ff9800",
      },
    },
  },
  plugins: [require("daisyui")],
};
