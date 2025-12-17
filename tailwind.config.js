/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{css,js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:"320px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl" : "1536px"
    },
    colors: {
      white: "#ffffff",
      gray: "#dddbde",
      graydrak: "#394143",
      headtext: "#2a588c",
      buttonyellow: "#ffe701",
      buttonred: "#ef1410",
      textred: "#ef1410",
      textyellow: "#ffe701",
      Square1: "#087562",
      Square2: "#a5810f",
      Square3: "#a54131",
      black1:"#000",
    },
    extend: {
      boxShadow:{
        redshadow: '0px 0px 10px 0px rgb(255, 0, 0,0.9)'
      }
    },
    fontFamily: {
      body: ["Montserrat"],
    },
  },
  plugins: [],
};
