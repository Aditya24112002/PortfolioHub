"use client";

import { useState, useEffect } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      theme
    );
  }, [theme]);

  const themes = ["dark", "light", "debug"];
  const changeTheme = () => {
    const currentIndex = themes.indexOf(theme);
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <button
      onClick={changeTheme}
      className="cursor-pointer rounded-lg border px-4 py-2"
    >
      {theme === "dark" ? "🌙" : theme === "light" ? "☀️" : "🌈"}
    </button>
  );
}