"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Monitor, Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useSyncExternalStore } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import type { Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const themeOptions: {
  value: Theme;
  icon: typeof Sun;
  labelKey: "light" | "dark" | "system";
}[] = [
  { value: "light", icon: Sun, labelKey: "light" },
  { value: "dark", icon: Moon, labelKey: "dark" },
  { value: "system", icon: Monitor, labelKey: "system" },
];

function subscribe() {
  return () => {};
}

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const t = useTranslations("theme");
  const tNav = useTranslations("nav");
  const mounted = useSyncExternalStore(subscribe, () => true, () => false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (!mounted) {
    return (
      <div
        className={cn("nav-icon-btn pointer-events-none opacity-50", className)}
        aria-hidden
      />
    );
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark";
  const TriggerIcon = isDark ? Moon : Sun;

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="nav-icon-btn"
        aria-label={tNav("ariaTheme")}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <TriggerIcon className="h-4 w-4" strokeWidth={1.5} />
      </button>

      {open && (
        <div className="nav-dropdown-menu" role="menu" aria-label={tNav("ariaTheme")}>
          {themeOptions.map(({ value, icon: Icon, labelKey }) => {
            const active = theme === value;

            return (
              <button
                key={value}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => {
                  setTheme(value);
                  setOpen(false);
                }}
                className={cn("nav-dropdown-item", active && "nav-dropdown-item-active")}
              >
                <span className="flex items-center gap-2.5">
                  <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
                  {t(labelKey)}
                </span>
                {active ? <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2} /> : null}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
