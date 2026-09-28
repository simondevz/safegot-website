"use client";

import { startTransition, useEffect, useState } from "react";

type Theme = "light" | "dark";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const saved = window.localStorage.getItem("safegot-theme") as Theme | null;
    const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const nextTheme = saved ?? preferred;
    document.documentElement.dataset.theme = nextTheme;
    if (nextTheme !== "light") startTransition(() => setTheme(nextTheme));
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("safegot-theme", nextTheme);
  }

  return (
    <button
      className="grid h-[42px] w-[42px] place-items-center rounded-full border border-[var(--border)] bg-transparent text-[var(--ink)]"
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
    </button>
  );
}
