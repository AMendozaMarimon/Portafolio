/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkMain: "#F89AC0"
      },
      fontFamily: {
        telegraf: ["Telegraf", "sans-serif"],
      },
    },
  },
  plugins: [],
};
