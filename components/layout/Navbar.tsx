"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { useSiteData } from "@/lib/i18n/site-data";
import { Button } from "@/components/buttons/Button";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Logo } from "@/components/layout/Logo";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cn } from "@/lib/utils";
import { EASE_OUT } from "@/lib/motion";

export function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("nav");
  const { navLinks } = useSiteData();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "nav-floating fixed left-0 right-0 top-0 z-50",
          scrolled && "nav-scrolled"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.05, ease: EASE_OUT }}
          className="nav-glass-panel flex h-[4.25rem] items-center justify-between gap-4 px-4 sm:px-6 lg:h-[4.5rem]"
        >
          <Logo className="relative z-50" />

          <nav
            className="hidden items-center lg:flex"
            aria-label={t("ariaMainNav")}
          >
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "nav-link relative px-4 py-2",
                    isActive
                      ? "nav-link-active font-semibold"
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-accent"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 35,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button href="/contact" variant="primary" size="sm">
              {t("connect")}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              type="button"
              className="relative z-50 flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-border bg-bg-card text-text-primary transition-colors hover:border-accent/30"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? t("ariaCloseMenu") : t("ariaOpenMenu")}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </motion.div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 bg-bg-primary/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="glass fixed bottom-0 right-0 top-0 z-40 flex w-[min(100%,20rem)] flex-col lg:hidden"
            >
              <nav
                className="flex flex-1 flex-col px-8 pt-28"
                aria-label={t("ariaMobileNav")}
              >
                {navLinks.map((link, i) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + i * 0.04 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block border-b border-border py-5 font-display text-lg tracking-tight transition-colors",
                          isActive ? "text-accent" : "text-text-primary"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <div className="border-t border-border p-8">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  {t("connect")}
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
