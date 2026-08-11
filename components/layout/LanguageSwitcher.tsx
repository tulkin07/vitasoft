"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { localeNames, locales, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");
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

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="nav-icon-btn"
        aria-label={t("ariaLanguage")}
        aria-expanded={open}
        aria-haspopup="menu"
      >
        <Globe className="h-4 w-4" strokeWidth={1.5} />
      </button>

      {open && (
        <div className="nav-dropdown-menu" role="menu" aria-label={t("ariaLanguage")}>
          {locales.map((loc) => {
            const active = locale === loc;

            return (
              <button
                key={loc}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => {
                  router.replace(pathname, { locale: loc });
                  setOpen(false);
                }}
                className={cn("nav-dropdown-item", active && "nav-dropdown-item-active")}
              >
                <span>{localeNames[loc]}</span>
                {active ? <Check className="h-3.5 w-3.5 shrink-0" strokeWidth={2} /> : null}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
