import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Use a function to initialize state so it only runs once on load
  const [theme, setTheme] = useState(() => {
    // 1. Check if the user previously toggled and saved a preference on your site
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }

    // 2. If no saved preference, check their system/browser default
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }

    // 3. Fallback to light mode
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove old theme class and add the new one
    root.classList.remove("light", "dark");
    root.classList.add(theme);

    // Save to local storage whenever it changes
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
