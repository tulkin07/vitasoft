"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { FadeUp } from "@/components/animations/FadeUp";
import { Button } from "@/components/buttons/Button";
import { Section } from "@/components/layout/Section";
import { useSiteData } from "@/lib/i18n/site-data";
import { useReducedMotion } from "@/components/animations/useReducedMotion";

export function CTASection() {
  const reduced = useReducedMotion();
  const t = useTranslations("home.cta");
  const { contactInfo } = useSiteData();

  return (
    <Section className="!pb-[calc(var(--section-y)*1.25)]">
      <FadeUp>
        <div className="cta-panel">
          <div className="cta-panel-glow cta-panel-glow-left" aria-hidden />
          <div className="cta-panel-glow cta-panel-glow-right" aria-hidden />
          <span className="cta-watermark" aria-hidden>
            08
          </span>

          {!reduced && (
            <motion.div
              className="cta-panel-shimmer"
              animate={{ x: ["-120%", "220%"] }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "linear",
              }}
              aria-hidden
            />
          )}

          <div className="cta-layout">
            <div className="cta-main">
              <span className="section-label">{t("label")}</span>
              <h2 className="cta-title">
                {t("title")}
                <br />
                <span className="accent-highlight">{t("titleAccent")}</span>
              </h2>
              <p className="cta-description">{t("description")}</p>

              <div className="cta-main-action">
                <Button href="/contact" variant="primary" size="lg">
                  {t("ctaPrimary")}
                </Button>
              </div>
            </div>

            <div className="cta-side">
              <a
                href={contactInfo.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-contact-card cta-contact-card-primary group"
              >
                <span className="cta-contact-icon">
                  <Send className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="cta-contact-copy">
                  <span className="cta-contact-label">Telegram</span>
                  <span className="cta-contact-value">{t("ctaSecondary")}</span>
                </span>
                <ArrowUpRight className="cta-contact-arrow h-4 w-4" strokeWidth={1.75} />
              </a>

              <a
                href={`mailto:${contactInfo.email}`}
                className="cta-contact-card group"
              >
                <span className="cta-contact-icon">
                  <Mail className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="cta-contact-copy">
                  <span className="cta-contact-label">Email</span>
                  <span className="cta-contact-value">{contactInfo.email}</span>
                </span>
                <ArrowUpRight className="cta-contact-arrow h-4 w-4" strokeWidth={1.75} />
              </a>

              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                className="cta-contact-card group"
              >
                <span className="cta-contact-icon">
                  <Phone className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="cta-contact-copy">
                  <span className="cta-contact-label">{t("phoneLabel")}</span>
                  <span className="cta-contact-value">{contactInfo.phone}</span>
                </span>
                <ArrowUpRight className="cta-contact-arrow h-4 w-4" strokeWidth={1.75} />
              </a>

              <Link href="/contact" className="cta-contact-card cta-contact-card-muted group">
                <span className="cta-contact-icon">
                  <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
                </span>
                <span className="cta-contact-copy">
                  <span className="cta-contact-label">{t("formLabel")}</span>
                  <span className="cta-contact-value">{t("formHint")}</span>
                </span>
                <ArrowUpRight className="cta-contact-arrow h-4 w-4" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>
      </FadeUp>
    </Section>
  );
}
