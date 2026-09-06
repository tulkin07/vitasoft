"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={cn(
        "flex items-center rounded-lg border border-border bg-bg-glass p-1",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {locales.map((loc) => {
        const active = locale === loc;
        return (
          <button
            key={loc}
            type="button"
            onClick={() => router.replace(pathname, { locale: loc })}
            className={cn(
              "rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wide transition-colors",
              active
                ? "bg-accent text-white"
                : "text-text-muted hover:text-text-primary"
            )}
          >
            {loc.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
