/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#BAFFC5",
        customPurple: "#CB6CE6",
        customBlue: "#5271FF",
        customRed: "#FF8080",
        customBrown: "#FFCF96",
      },
      fontFamily: {
        notoSansThai: ["Noto Sans Thai", "sans-serif"], // กำหนด custom font
      },
    },
  },
  plugins: [],
};
