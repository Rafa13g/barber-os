"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "claro" | "oscuro";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "barberos-tema";

export function ThemeProvider({ children }: { children: ReactNode }) {
  // El valor real ya lo aplicó el script inline en <head> (ver layout.tsx)
  // antes de que React hidrate, para evitar el flash de tema incorrecto.
  // Acá solo sincronizamos el estado de React con lo que ya quedó en el DOM.
  const [theme, setTheme] = useState<Theme>("claro");

  useEffect(() => {
    const esOscuro = document.documentElement.classList.contains("dark");
    setTheme(esOscuro ? "oscuro" : "claro");
  }, []);

  function toggleTheme() {
    const nuevoTema: Theme = theme === "claro" ? "oscuro" : "claro";
    setTheme(nuevoTema);
    document.documentElement.classList.toggle("dark", nuevoTema === "oscuro");
    localStorage.setItem(STORAGE_KEY, nuevoTema);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme debe usarse dentro de <ThemeProvider>");
  }
  return ctx;
}
