"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="w-5 h-5 bg-transparent animate-pulse hover:shadow-lg hover:scale-105 transition-shadow cursor-pointer"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-5 h-5 text-secondary dark:text-primary" />
      ) : resolvedTheme === "light" ? (
        <Moon className="w-5 h-5 text-primary" />
      ) : null}
    </button>
  );
}
