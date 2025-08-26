"use client";

import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import styles from "../styles/ThemeToggle.module.scss";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggle}
      title={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      <span className={styles.themeIcon}>{isDarkMode ? "☀️" : "🌙"}</span>
    </button>
  );
};

export default ThemeToggle;
