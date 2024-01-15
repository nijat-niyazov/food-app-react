import { useEffect, useState } from "react";

const Theme = () => {
  const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
    .matches
    ? "dark"
    : "light";

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ?? systemPreference
  );

  const toggleTheme = () => {
    const currentTheme = theme === "light" ? "dark" : "light";
    setTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <button
      style={{
        color: theme === "dark" ? "#F8F8F8" : "#000",
        backgroundColor: theme === "dark" ? "#000" : "#F8F8F8",
      }}
      onClick={toggleTheme}
    >
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default Theme;
