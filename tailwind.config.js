/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkMain: "#F89AC0",
        grayMain: "#E9E9E9",
        grayText: "#969696"
      },
      fontFamily: {
        telegraf: ["Telegraf", "sans-serif"],
        garet: ["Garet", "sans-serif"],
      },
    },
  },
  plugins: [],
};
