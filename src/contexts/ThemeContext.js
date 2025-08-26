"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Cargar tema guardado al montar el componente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setIsDarkMode(savedTheme === "dark");
      } else {
        // Detectar preferencia del sistema
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        setIsDarkMode(prefersDark);
      }
    }
  }, []);

  // Aplicar tema al body y guardar en localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const body = document.body;
      if (isDarkMode) {
        body.classList.add("dark-theme");
        body.classList.remove("light-theme");
        localStorage.setItem("theme", "dark");
      } else {
        body.classList.add("light-theme");
        body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light");
      }
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const value = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
