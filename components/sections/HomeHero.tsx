"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { LineReveal } from "@/components/animations/Reveal";
import { Button } from "@/components/buttons/Button";
import { Section } from "@/components/layout/Section";
import { DURATION, EASE_OUT, STAGGER } from "@/lib/motion";
import { useReducedMotion } from "@/components/animations/useReducedMotion";

const heroLoadVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER.normal, delayChildren: 0.18 },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE_OUT },
  },
};

export function HomeHero() {
  const reduced = useReducedMotion();
  const t = useTranslations("home.hero");

  return (
    <Section contained={false} className="hero-section !py-0">
      <div className="container-main relative z-[2] flex h-full min-h-[100svh] items-center pt-20 lg:pt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduced ? 0.1 : 0.55, ease: EASE_OUT }}
          className="hero-content w-full max-w-xl py-10 lg:max-w-[34rem] lg:py-12"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            variants={reduced ? { hidden: {}, visible: {} } : heroLoadVariants}
          >
            <LineReveal
              className="display-xl text-text-primary"
              lines={[
                <>{t("title1")}</>,
                <>
                  <span className="accent-highlight">{t("title2Gold")}</span>
                  {t("title2Rest") ? <> {t("title2Rest")}</> : null}
                </>,
                ...(t("title3") ? [<>{t("title3")}</>] : []),
              ]}
            />

            <motion.div variants={reduced ? undefined : heroItemVariants}>
              <p className="body-lg prose-width mt-8">{t("description")}</p>
            </motion.div>

            <motion.div variants={reduced ? undefined : heroItemVariants}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="/contact" variant="primary" size="lg">
                  {t("ctaPrimary")}
                </Button>
                <Button href="/portfolio" variant="secondary" size="lg">
                  {t("ctaSecondary")}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}
