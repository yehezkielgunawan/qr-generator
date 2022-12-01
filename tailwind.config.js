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
          50: "#F0F9F9",
          100: "#DEF2F1",
          200: "#C0E7E5",
          300: "#9FDBD8",
          400: "#7ECECA",
          500: "#5EC2BD",
          600: "#3FA6A1",
          700: "#307E7A",
          800: "#205552",
          900: "#0F2927",
        },
        secondary: {
          50: "#D6FFEB",
          100: "#A8FFD5",
          200: "#52FFAB",
          300: "#00FF84",
          400: "#00A857",
          500: "#00522B",
          600: "#004222",
          700: "#00331A",
          800: "#001F10",
          900: "#000F08",
        },
        darkpurple: {
          50: "#EDEDF2",
          100: "#DBDBE6",
          200: "#B7B7CD",
          300: "#9393B4",
          400: "#6F6F9B",
          500: "#545479",
          600: "#434360",
          700: "#323248",
          800: "#212130",
          900: "#111118",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
