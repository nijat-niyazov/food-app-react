/** @type {import('tailwindcss').Config} */
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
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        text: "var(--text)",
        bej: "var(--bej)",
        header: "var(--header)",
        grey: "var(--grey)",
        faq: "var(--faq)",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Sans-serif", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: "0",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
