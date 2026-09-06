"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/buttons/Button";
import { Section } from "@/components/layout/Section";
import { Counter } from "@/components/animations/Counter";
import { DURATION, EASE_OUT, STAGGER } from "@/lib/motion";
import { useReducedMotion } from "@/components/animations/useReducedMotion";
import { useSiteData } from "@/lib/i18n/site-data";

const heroLoadVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: STAGGER.normal, delayChildren: 0.12 },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, ease: EASE_OUT },
  },
};

const floatCards = [
  {
    icon: Globe,
    titleKey: "floatWebTitle" as const,
    descKey: "floatWebDesc" as const,
    className: "left-6 top-[22%] xl:left-12",
  },
  {
    icon: Sparkles,
    titleKey: "floatAiTitle" as const,
    descKey: "floatAiDesc" as const,
    className: "right-6 top-[18%] xl:right-12",
  },
  {
    icon: Smartphone,
    titleKey: "floatMobileTitle" as const,
    descKey: "floatMobileDesc" as const,
    className: "bottom-28 left-6 xl:left-14",
  },
  {
    icon: Workflow,
    titleKey: "floatAutoTitle" as const,
    descKey: "floatAutoDesc" as const,
    className: "bottom-24 right-6 xl:right-12",
  },
];

export function HomeHero() {
  const reduced = useReducedMotion();
  const t = useTranslations("home.hero");
  const { heroStats } = useSiteData();
  const stack = t.raw("stack") as string[];

  return (
    <Section contained={false} className="hero-section !py-0">
      <div className="hero-grid" aria-hidden />
      <div className="hero-floor" aria-hidden />
      <div className="hero-core-glow" aria-hidden />
      <div className="hero-cyan-glow" aria-hidden />

      {floatCards.map((card) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={card.titleKey}
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: EASE_OUT }}
            className={`hero-float glass-card absolute z-[2] w-[210px] flex-col gap-2 p-4 ${card.className}`}
          >
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/15 text-accent-light">
                <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
              </span>
              <p className="font-display text-[13px] font-semibold text-text-primary">
                {t(card.titleKey)}
              </p>
            </div>
            <p className="font-mono text-[10px] text-text-muted">{t(card.descKey)}</p>
          </motion.div>
        );
      })}

      <div className="container-main relative z-[2] flex min-h-[100svh] flex-col items-center justify-center px-5 pt-24 pb-10 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reduced ? { hidden: {}, visible: {} } : heroLoadVariants}
          className="hero-content flex w-full max-w-[56rem] flex-col items-center"
        >
          <motion.div
            variants={reduced ? undefined : heroItemVariants}
            className="inline-flex items-center gap-2 rounded-full border border-border-glass bg-bg-glass px-3 py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            <span className="font-mono text-[11px] tracking-[0.16em] text-text-muted">
              {t("eyebrow")}
            </span>
          </motion.div>

          <motion.h1
            variants={reduced ? undefined : heroItemVariants}
            className="display-xl mt-6 max-w-4xl text-balance"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            variants={reduced ? undefined : heroItemVariants}
            className="body-lg mt-6 max-w-2xl text-pretty"
          >
            {t("description")}
          </motion.p>

          <motion.div
            variants={reduced ? undefined : heroItemVariants}
            className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
              {t("ctaPrimary")}
            </Button>
            <Button href="/portfolio" variant="secondary" size="lg" className="w-full sm:w-auto">
              {t("ctaSecondary")}
            </Button>
          </motion.div>

          <motion.div
            variants={reduced ? undefined : heroItemVariants}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-text-muted"
              >
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <div className="mt-14 grid w-full max-w-5xl grid-cols-2 gap-4 border-t border-border pt-8 sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-left sm:text-center">
              <p className="font-display text-3xl font-semibold tracking-tight text-text-primary lg:text-4xl">
                <Counter
                  value={parseInt(stat.value, 10)}
                  suffix={stat.value.replace(/[0-9]/g, "")}
                />
              </p>
              <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
