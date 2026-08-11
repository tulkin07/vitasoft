"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/layout/Logo";
import { useSiteData } from "@/lib/i18n/site-data";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const { navLinks, serviceLinks, contactInfo } = useSiteData();

  return (
    <footer className="footer-light relative border-t">
      <div className="container-main py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <Logo size="sm" />
            <p className="footer-muted mt-5 max-w-xs text-sm leading-relaxed">
              {t("tagline")}
            </p>
            <div className="mt-8 flex gap-6">
              {[
                { label: t("github"), href: "https://github.com/vitasoft" },
                { label: t("linkedin"), href: "https://linkedin.com/company/vitasoft" },
                { label: t("dribbble"), href: "https://dribbble.com/vitasoft" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link text-[0.625rem] uppercase tracking-[0.14em] link-underline"
                  aria-label={social.label}
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="footer-accent text-[0.625rem] uppercase tracking-[0.18em] font-semibold">
              {t("pages")}
            </h3>
            <ul className="mt-5 space-y-3">
              {[...navLinks, { href: "/contact", label: tNav("contact") }].map(
                (link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="footer-link text-sm link-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="footer-accent text-[0.625rem] uppercase tracking-[0.18em] font-semibold">
              {t("services")}
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link text-sm link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-accent text-[0.625rem] uppercase tracking-[0.18em] font-semibold">
              {t("contact")}
            </h3>
            <ul className="footer-muted mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="footer-link link-underline"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="footer-link link-underline"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="footer-muted text-xs">{t("copyright")}</p>
          <p className="footer-muted text-xs">{t("madeBy")}</p>
        </div>
      </div>
    </footer>
  );
}
