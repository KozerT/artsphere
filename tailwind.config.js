/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Inter"', '"Avenir"', '"Helvetica"', '"Arial"', "sans-serif"],
      },
      colors: {
        "txt-color": "#e2e5f2",
        "main-button-color": "rgb(50, 150, 250)",
        "txt-color-aliceblue": "aliceblue",
        "btn-hover-color": "rgb(120, 50, 255)",
      },
    },
  },
  plugins: [],
};
