// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Catamaran", ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#E7F6FE",
          100: "#CFEEFC",
          200: "#9ADBF9",
          300: "#6ACAF6",
          400: "#3AB8F3",
          500: "#0EA5E9",
          600: "#0B84BC",
          700: "#08628C",
          800: "#05405B",
          900: "#032230",
        },
        dark: "#222222",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
