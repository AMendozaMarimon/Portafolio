/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkMain: "#F89AC0",
        grayMain: "#F4F4F4",
        grayText: "#969696",
        orangeBoton: "#F9D070",
        colorLinkedIn: "#016295",
        colorWhatsApp: "#5ACF67",
      },
      fontFamily: {
        telegraf: ["Telegraf", "sans-serif"],
        garet: ["Garet", "sans-serif"],
      },
    },
  },
  plugins: [],
};
