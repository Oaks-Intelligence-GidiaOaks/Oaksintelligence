/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        fold: "279px",
        xr: "414px",
      },
      boxShadow: {
        "3xl": "0 35px 35px rgba(255, 255, 255, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)",
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        main: "#060C18",
        "main-light": "#0C172C",
        "secondary-green": "#6FBF21",
        "dark-blue": "#0C172C",
        "dark-black": "#060416",
      },
      borderColor: {
        main: "#F1F1F1",
        "primary-green": "#80B24F",
        "secondary-green": "#6FBF21",
      },
      textColor: {
        main: "#F1F1F1",
        "main-2": "#F1F1F1c9",
        "main-light": "#202046",
        "main-light-2": "#202046c9",
        "primary-green": "#80B24F",
        "secondary-green": "#6FBF21",
        "secondary-main": "#B7B7B7",
        "secondary-main-light": "#686883",
        tertiary: "#F1F1F1",
        "tertiary-light": "#686883",
      },
    },
  },
  // plugins: [require("@tailwindcss/line-clamp")],
};
