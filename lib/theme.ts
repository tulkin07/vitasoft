export const THEME_COOKIE = "theme";

export type Theme = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export function isTheme(value: string | undefined): value is Theme {
  return value === "light" || value === "dark" || value === "system";
}

/** Resolve stored theme to a paint class on the server (system → light fallback). */
export function resolveServerTheme(theme: Theme | undefined): ResolvedTheme {
  if (theme === "dark") return "dark";
  return "light";
}

export function resolveTheme(
  theme: Theme,
  systemTheme: ResolvedTheme
): ResolvedTheme {
  return theme === "system" ? systemTheme : theme;
}

export function setThemeCookie(theme: Theme) {
  document.cookie = `${THEME_COOKIE}=${theme};path=/;max-age=31536000;SameSite=Lax`;
}
