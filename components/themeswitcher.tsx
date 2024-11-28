"use client";
import clsx from "clsx";
import { PiMoon, PiSun } from "react-icons/pi";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<"light" | "dark">();

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
    setTheme(savedTheme as "light" | "dark");
  }, []);

  const toggleTheme = (newTheme: "light" | "dark") => {
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <div className="theme-switcher">
      {[
        { theme: "light", icon: <PiSun /> },
        { theme: "dark", icon: <PiMoon /> },
      ].map(({ theme: t, icon }) => (
        <button
          key={t}
          className={clsx(theme === t && "current-theme")}
          onClick={() => toggleTheme(t as "light" | "dark")}>
          {icon}
        </button>
      ))}
    </div>
  );
}
