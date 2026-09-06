"use client";

import { ArrowUpRight, Check, ChevronDown, Globe, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { copy, type Locale } from "@/lib/copy";
import { LogoMark, Wordmark } from "@/components/site/LogoMark";
import { useTheme } from "@/components/site/ThemeProvider";
import { localeNames, locales } from "@/i18n/routing";

const navItems = [
  { id: "home", href: "#home" },
  { id: "services", href: "#services" },
  { id: "portfolio", href: "#portfolio" },
  { id: "technologies", href: "#technologies" },
  { id: "about", href: "#about" },
  { id: "contact", href: "#contact" },
] as const;

function Flag({ locale }: { locale: Locale }) {
  const common = "h-3.5 w-[18px] shrink-0 overflow-hidden rounded-[3px] outline outline-black/15";
  if (locale === "uz") {
    return (
      <svg viewBox="0 0 21 15" className={common} aria-hidden>
        <rect width="21" height="5" fill="#0099B5" />
        <rect y="5" width="21" height="5" fill="#fff" />
        <rect y="10" width="21" height="5" fill="#1EB53A" />
        <rect y="4.7" width="21" height="0.6" fill="#CE1126" />
        <rect y="9.7" width="21" height="0.6" fill="#CE1126" />
        <circle cx="3.2" cy="2.5" r="1.15" fill="none" stroke="#fff" strokeWidth="0.55" />
        <circle cx="3.55" cy="2.5" r="0.9" fill="#0099B5" />
        <circle cx="6.4" cy="1.15" r="0.28" fill="#fff" />
        <circle cx="7.35" cy="1.85" r="0.28" fill="#fff" />
        <circle cx="7.35" cy="2.85" r="0.28" fill="#fff" />
        <circle cx="6.4" cy="3.55" r="0.28" fill="#fff" />
        <circle cx="5.35" cy="2.5" r="0.28" fill="#fff" />
      </svg>
    );
  }
  if (locale === "ru") {
    return (
      <svg viewBox="0 0 21 15" className={common} aria-hidden>
        <rect width="21" height="5" fill="#fff" />
        <rect y="5" width="21" height="5" fill="#0039A6" />
        <rect y="10" width="21" height="5" fill="#D52B1E" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 21 15" className={common} aria-hidden>
      <rect width="21" height="15" fill="#012169" />
      <path d="M0 0l21 15M21 0L0 15" stroke="#fff" strokeWidth="2.4" />
      <path d="M0 0l21 15M21 0L0 15" stroke="#C8102E" strokeWidth="1.2" />
      <path d="M10.5 0v15M0 7.5h21" stroke="#fff" strokeWidth="4" />
      <path d="M10.5 0v15M0 7.5h21" stroke="#C8102E" strokeWidth="2.2" />
    </svg>
  );
}

function LanguageSelect({ compact }: { compact?: boolean }) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Language"
        className={
          compact
            ? "flex h-9 items-center gap-1.5 rounded-full bg-transparent px-3 font-mono text-[11px] font-semibold tracking-[0.4px] text-text outline outline-line transition duration-300 hover:bg-white/[0.06]"
            : "flex h-9 items-center gap-1.5 rounded-[10px] bg-white/[0.04] px-2.5 font-mono text-[11px] font-semibold tracking-[0.4px] text-text outline outline-line transition hover:bg-white/[0.07]"
        }
      >
        {compact ? (
          <>
            <Globe className="h-3.5 w-3.5" strokeWidth={1.75} />
            <span>{locale.toUpperCase()}</span>
          </>
        ) : (
          <>
            <span>{locale.toUpperCase()}</span>
            <ChevronDown className={`h-3.5 w-3.5 text-muted transition ${open ? "rotate-180" : ""}`} />
          </>
        )}
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 min-w-[168px] overflow-hidden rounded-xl border border-line bg-surface/95 py-1 shadow-[0_16px_40px_#00000055] backdrop-blur-md"
        >
          {locales.map((loc) => {
            const active = locale === loc;
            return (
              <li key={loc} role="option" aria-selected={active}>
                <button
                  type="button"
                  onClick={() => {
                    router.replace(pathname, { locale: loc });
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-4 px-3 py-2.5 text-left text-[13px] transition hover:bg-white/5 ${
                    active ? "text-text" : "text-muted"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Flag locale={loc} />
                    <span>
                      <span className="font-mono text-[11px] font-semibold tracking-[0.4px]">
                        {loc.toUpperCase()}
                      </span>
                      <span className="ml-2 text-[13px] font-normal">{localeNames[loc]}</span>
                    </span>
                  </span>
                  {active && <Check className="h-3.5 w-3.5 text-accent-soft" />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function Navbar() {
  const locale = useLocale() as Locale;
  const t = copy[locale];
  const { mode, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      const spy = 120;
      const ids = navItems.map((item) => item.id);
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= spy && rect.bottom > spy) {
          current = id;
          break;
        }
        if (rect.top <= spy) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 box-border h-[76px] overflow-visible border-b border-line bg-glass backdrop-blur-[9px]"
    >
      <div className="grid h-full grid-cols-[1fr_auto] items-center px-4 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-16">
        <a href="#home" className="flex items-center gap-2.5 justify-self-start" aria-label="VITASoft">
          <LogoMark />
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {t.nav.map((label, i) => {
            const item = navItems[i];
            const isActive = active === item.id;
            return (
              <a
                key={label}
                href={item.href}
                onClick={() => setActive(item.id)}
                className={`font-mono text-[12px] leading-none tracking-[0.4px] transition ${
                  isActive ? "font-semibold text-accent" : "text-muted hover:text-text"
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-2 lg:gap-3.5">
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSelect compact />
            <button
              type="button"
              onClick={toggle}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full outline outline-line transition duration-300 hover:bg-white/[0.06]"
              aria-label="Theme"
            >
              {mode === "dark" ? (
                <Moon className="h-4 w-4" strokeWidth={1.75} />
              ) : (
                <Sun className="h-4 w-4" strokeWidth={1.75} />
              )}
            </button>
            <button
              type="button"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full outline outline-line transition duration-300 hover:bg-white/[0.06]"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" strokeWidth={1.75} /> : <Menu className="h-4 w-4" strokeWidth={1.75} />}
            </button>
          </div>
          <div className="hidden items-center gap-2 lg:flex lg:gap-3.5">
            <LanguageSelect />
            <button
              type="button"
              onClick={toggle}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-white/[0.04] outline outline-line"
              aria-label="Theme"
            >
              {mode === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <a href="#contact" className="vs-btn vs-btn-primary h-[41px]">
              {t.cta}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-bg lg:hidden"
          >
            <div className="px-4 py-4">
              {t.nav.map((label, i) => {
                const item = navItems[i];
                return (
                  <a
                    key={label}
                    href={item.href}
                    onClick={() => {
                      setActive(item.id);
                      setOpen(false);
                    }}
                    className={`block border-b border-line py-3 font-mono text-sm ${
                      active === item.id ? "font-semibold text-accent" : "text-muted"
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="vs-btn vs-btn-primary mt-3 h-[41px] w-full"
              >
                {t.cta}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
