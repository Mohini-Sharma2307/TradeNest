import { createContext, useEffect, useState } from "react";
import "./ThemeContext.css";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // =========================
  // INITIAL THEME
  // =========================
  const [darkMode, setDarkMode] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const themeFromURL = params.get("theme");

    if (themeFromURL === "dark") {
      return true;
    }

    if (themeFromURL === "light") {
      return false;
    }

    return localStorage.getItem("theme") === "dark";
  });

  // =========================
  // APPLY THEME
  // =========================
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // =========================
  // READ THEME FROM URL
  // =========================
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const themeFromURL = params.get("theme");

    if (themeFromURL === "dark") {
      setDarkMode(true);
      localStorage.setItem("theme", "dark");
    }

    if (themeFromURL === "light") {
      setDarkMode(false);
      localStorage.setItem("theme", "light");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;