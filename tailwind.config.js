/** @type {import('tailwindcss').Config} */

// const sizes =

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
      },
    },
    container: {
      center: true,
      padding: "0",
    },
  },
  plugins: [],
};
