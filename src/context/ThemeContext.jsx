import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const themes = {
  light: {
    background: "--background-color-light",
    backgroundSecondary: "--background-color-secondary-light",
    textPrimary: "--text-color-primary-lite",
    textSecondary: "--text-color-secondary-lite",
    title: "--title-color-light",
    buttonPrimaryBackground: "--button-background-primary-lite",
    buttonSecondaryBackground: "--button-background-secondary-lite",
    buttonPrimaryText: "--button-text-primary-lite",
    buttonSecondaryText: "--button-text-secondary-lite",
  },
  dark: {
    background: "--background-color-dark",
    backgroundSecondary: "--background-color-secondary-dark",
    textPrimary: "--text-color-primary-dark",
    textSecondary: "--text-color-secondary-dark",
    title: "--title-color-dark",
    buttonPrimaryBackground: "--button-background-primary-dark",
    buttonSecondaryBackground: "--button-background-secondary-lite",
    buttonPrimaryText: "--button-text-primary-dark",
    buttonSecondaryText: "--button-text-secondary-dark",
  },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    const themeColors = themes[theme];

    root.style.setProperty(
      "--background-color",
      `var(${themeColors.background})`
    );
    root.style.setProperty(
      "--background-color-secondary",
      `var(${themeColors.backgroundSecondary})`
    );
    root.style.setProperty(
      "--text-color-primary",
      `var(${themeColors.textPrimary})`
    );
    root.style.setProperty(
      "--text-color-secondary",
      `var(${themeColors.textSecondary})`
    );
    root.style.setProperty("--title-color", `var(${themeColors.title})`);
    root.style.setProperty(
      "--button-background-primary",
      `var(${themeColors.buttonPrimaryBackground})`
    );
    root.style.setProperty(
      "--button-background-secondary",
      `var(${themeColors.buttonSecondaryBackground})`
    );
    root.style.setProperty(
      "--button-text-primary",
      `var(${themeColors.buttonPrimaryText})`
    );
    root.style.setProperty(
      "--button-text-secondary",
      `var(${themeColors.buttonSecondaryText})`
    );
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
