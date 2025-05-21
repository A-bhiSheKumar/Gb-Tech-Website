/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
  extend: {
    colors: {
      blue: {
        gradient: 'linear-gradient(to right, #3b82f6, #6366f1)',
      },
    },
  },
},
  plugins: [],
});
