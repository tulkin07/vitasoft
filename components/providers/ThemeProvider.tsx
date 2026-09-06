"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  resolveTheme,
  setThemeCookie,
  type ResolvedTheme,
  type Theme,
} from "@/lib/theme";

const STORAGE_KEY = "theme";
const MEDIA_QUERY = "(prefers-color-scheme: dark)";

interface ThemeContextValue {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: ResolvedTheme;
  systemTheme: ResolvedTheme;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): ResolvedTheme {
  return window.matchMedia(MEDIA_QUERY).matches ? "dark" : "light";
}

function applyTheme(resolved: ResolvedTheme, disableTransition: boolean) {
  const root = document.documentElement;

  if (disableTransition) {
    const style = document.createElement("style");
    style.appendChild(
      document.createTextNode(
        "*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
      )
    );
    document.head.appendChild(style);
    window.getComputedStyle(document.body);
    setTimeout(() => {
      document.head.removeChild(style);
    }, 1);
  }

  root.classList.remove("light", "dark");
  root.classList.add(resolved);
  root.style.colorScheme = resolved;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: Theme;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
  children,
  initialTheme = "dark",
  enableSystem = true,
  disableTransitionOnChange = false,
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(initialTheme);
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>("light");
  const [mounted, setMounted] = useState(false);

  const resolvedTheme = resolveTheme(theme, systemTheme);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    setThemeCookie(newTheme);
    try {
      localStorage.setItem(STORAGE_KEY, newTheme);
    } catch {
      // localStorage may be unavailable in private mode
    }
  }, []);

  useEffect(() => {
    setMounted(true);
    setSystemTheme(getSystemTheme());

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "light" || stored === "dark" || stored === "system") {
        if (stored !== theme) {
          setThemeState(stored);
          setThemeCookie(stored);
        }
      } else {
        setThemeCookie(theme);
        localStorage.setItem(STORAGE_KEY, theme);
      }
    } catch {
      setThemeCookie(theme);
    }

    const mq = window.matchMedia(MEDIA_QUERY);
    const onChange = (event: MediaQueryListEvent) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };
    mq.addEventListener("change", onChange);

    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY && event.newValue) {
        const next = event.newValue;
        if (next === "light" || next === "dark" || next === "system") {
          setThemeState(next);
          setThemeCookie(next);
        }
      }
    };
    window.addEventListener("storage", onStorage);

    return () => {
      mq.removeEventListener("change", onChange);
      window.removeEventListener("storage", onStorage);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- run once on mount
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyTheme(resolvedTheme, disableTransitionOnChange);
  }, [resolvedTheme, mounted, disableTransitionOnChange]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      theme,
      setTheme,
      resolvedTheme: mounted
        ? resolvedTheme
        : resolveTheme(initialTheme, "dark"),
      systemTheme,
      themes: enableSystem ? ["light", "dark", "system"] : ["light", "dark"],
    }),
    [
      theme,
      setTheme,
      resolvedTheme,
      systemTheme,
      enableSystem,
      mounted,
      initialTheme,
    ]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      theme: "dark",
      setTheme: () => {},
      resolvedTheme: "dark",
      systemTheme: "dark",
      themes: ["light", "dark"],
    };
  }
  return context;
}
