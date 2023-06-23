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
        "main-light": "#202046",
        "primary-green": "#80B24F",
        "secondary-green": "#6FBF21",
        "secondary-main": "#B7B7B7",
        "secondary-main-light": "#686883",
        tertiary: "#F1F1F1",
        "tertiary-light": "#686883",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
