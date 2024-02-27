/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayHover: "#919EAB",
      },
      boxShadow: {
        "3xl": "rgba(145, 158, 171, 0.24) 0px 48px 100px 20px;",
      },
    },
  },
  plugins: [],
};
