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
        primary: withOpacity("--primary"),
        secondary: withOpacity("--secondary"),
        text: withOpacity("--text"),
        bej: withOpacity("--bej"),
        header: withOpacity("--header"),
        grey: withOpacity("--grey"),
        faq: withOpacity("--faq"),
        // primary: "var(--primary)",
        // secondary: "var(--secondary)",
        // text: "var(--text)",
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
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
