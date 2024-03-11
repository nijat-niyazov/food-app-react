/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "",
  theme: {
    extend: {
      borderRadius: {
        s: "4px",
      },
      borderWidth: {
        1: "1px",
      },
      colors: {
        main: withOpacity("--main"),
        text: withOpacity("--text"),
        oranged: withOpacity("--oranged"),
        greeny: withOpacity("--greeny"),
        darkblue: withOpacity("--darkblue"),
        bej: withOpacity("--bej"),
        header: withOpacity("--header"),
        grey: withOpacity("--grey"),
        faq: withOpacity("--faq"),
        // primary: "var(--oranged)",
        // secondary: "var(--greeny)",
        // text: "var(--darkblue)",
        // bej: "var(--bej)",
        // header: "var(--header)",
        // grey: "var(--grey)",
        // faq: "var(--faq)",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Sans-serif", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: "0px",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
