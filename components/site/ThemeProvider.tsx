"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Mode = "dark" | "light";

const ThemeContext = createContext<{ mode: Mode; toggle: () => void }>({
  mode: "dark",
  toggle: () => {},
});

function applyMode(mode: Mode) {
  document.documentElement.classList.remove("light", "dark");
  document.documentElement.classList.add(mode);
  document.documentElement.style.colorScheme = mode;
  document.cookie = `vs-theme=${mode};path=/;max-age=31536000;SameSite=Lax`;
}

export function ThemeProvider({
  children,
  initialMode = "dark",
}: {
  children: React.ReactNode;
  initialMode?: Mode;
}) {
  const [mode, setMode] = useState<Mode>(initialMode);

  useEffect(() => {
    const stored = localStorage.getItem("vs-theme") as Mode | null;
    const next = stored === "light" || stored === "dark" ? stored : initialMode;
    if (!stored) localStorage.setItem("vs-theme", next);
    setMode(next);
    applyMode(next);
  }, [initialMode]);

  const toggle = useCallback(() => {
    setMode((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("vs-theme", next);
      applyMode(next);
      return next;
    });
  }, []);

  return <ThemeContext.Provider value={{ mode, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
