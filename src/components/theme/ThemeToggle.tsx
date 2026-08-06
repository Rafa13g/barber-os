"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        theme === "claro" ? "Cambiar a modo oscuro" : "Cambiar a modo claro"
      }
      className="flex h-9 w-9 items-center justify-center rounded-md border border-line text-ink-muted transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
    >
      {theme === "claro" ? <Moon size={17} /> : <Sun size={17} />}
    </button>
  );
}
