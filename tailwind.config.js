/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#052E6D",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
