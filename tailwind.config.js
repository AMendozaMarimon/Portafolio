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
        colorJavascript: "#EFD81D",
        colorTypescript: "#3178C6",
        colorHTML: "#E34F26",
        colorCSS: "#1572B6",
        colorReact: "#61DBFB",
        colorTailwind: "#3FBFF8",
        colorRedux: "#7A50BE",
        colorNode: "#339933",
        colorPostgresql: "#33658F",
        colorGit: "#F14E32",
      },
      fontFamily: {
        telegraf: ["Telegraf", "sans-serif"],
        garet: ["Garet", "sans-serif"],
      },
    },
  },
  plugins: [],
};
