const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        xs: "530px",
        "xs-down": { max: "530px" },
        sm: "641px",
        "sm-down": { max: "640px" },
        md: "769px",
        "md-down": { max: "768px" },
        lg: "1025px",
        "lg-down": { max: "1024px" },
        xl: "1281px",
        "xl-down": { max: "1280px" },
        "2xl": "1921px",
        "2xl-down": { max: "1920px" },
      },
      colors: {
        body: {
          DEFAULT: "#444",
          dark: "#111",
        },
        accent: {
          DEFAULT: "#2a6ccf",
        },
        error: "#ff0000",
      },
      fontFamily: {
        inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "ssm": "0.8125rem"
      }
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
