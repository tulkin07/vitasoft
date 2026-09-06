"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Mode = "dark" | "light";

const ThemeContext = createContext<{ mode: Mode; toggle: () => void }>({
  mode: "dark",
  toggle: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("dark");

  useEffect(() => {
    const stored = localStorage.getItem("vs-theme") as Mode | null;
    const next = stored === "light" || stored === "dark" ? stored : "dark";
    setMode(next);
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(next);
  }, []);

  const toggle = useCallback(() => {
    setMode((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("vs-theme", next);
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(next);
      document.documentElement.style.colorScheme = next;
      return next;
    });
  }, []);

  return <ThemeContext.Provider value={{ mode, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
