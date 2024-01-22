/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      background: "#101010",
      foreground: "#222222",

      green: "#B3F0AA",
      yellow: "#EEC879",
      purple: "#A259FF",
      gray: "#BBBBBB",
      black: "#000",
      white: "#FFF",
    },
    extend: {},
  },
  plugins: [],
};
