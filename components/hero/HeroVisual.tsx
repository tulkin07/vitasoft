"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { ProjectMockup } from "@/components/portfolio/ProjectMockup";
import { HeroParallax } from "@/components/animations/HeroParallax";
import { heroVisualVariants } from "@/lib/motion";
import { useReducedMotion } from "@/components/animations/useReducedMotion";

const stack = ["Next.js", "React", "TypeScript"];

export function HeroVisual() {
  const reduced = useReducedMotion();
  const t = useTranslations("heroVisual");

  const floatCards = [
    { value: "50+", label: t("projects"), className: "absolute -left-4 top-4 z-20 sm:-left-8" },
    { value: "98%", label: t("uptime"), className: "absolute -right-2 top-[22%] z-20 sm:-right-6" },
    { value: "24/7", label: t("support"), className: "absolute -bottom-2 left-[28%] z-20 sm:bottom-0" },
  ];

  return (
    <HeroParallax>
      <motion.div
        className="hero-visual-wrap relative lg:pb-6"
        initial="hidden"
        animate="visible"
        variants={
          reduced
            ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
            : heroVisualVariants
        }
      >
        <div className="hero-glow-ring" aria-hidden />

        {!reduced &&
          floatCards.map((card, i) => (
            <motion.div
              key={card.label}
              className={`hero-float-card hidden px-4 py-3 sm:block ${card.className}`}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 5.5 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              <p className="font-display text-base font-bold text-gradient-accent">
                {card.value}
              </p>
              <p className="mt-0.5 text-[0.625rem] uppercase tracking-[0.1em] text-text-muted">
                {card.label}
              </p>
            </motion.div>
          ))}

        <motion.div
          animate={reduced ? undefined : { y: [0, -8, 0] }}
          transition={
            reduced
              ? undefined
              : { duration: 6.5, repeat: Infinity, ease: "easeInOut" }
          }
          className="hero-device-frame"
        >
          <div className="p-4 sm:p-5 lg:p-7">
            <ProjectMockup title="VITA Dashboard" variant="hero" />

            <div className="absolute -bottom-4 -right-2 w-[32%] max-w-[130px] overflow-hidden rounded-[var(--radius-md)] border border-white/80 bg-bg-glass-strong shadow-md sm:-bottom-6 sm:right-2 lg:-right-4">
              <div className="border-b border-border/60 px-2.5 py-2">
                <span className="text-[0.5rem] font-semibold tracking-wider text-text-muted">
                  {t("mobileApp")}
                </span>
              </div>
              <div className="aspect-[9/14] p-2.5">
                <div className="h-1 w-1/2 rounded-sm bg-accent/30" />
                <div className="mt-3 space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex gap-1.5 rounded-sm border border-border/50 bg-white/40 p-1.5 dark:bg-white/5"
                    >
                      <div className="h-3 w-3 shrink-0 rounded-sm bg-accent/15" />
                      <div className="flex-1 space-y-1 pt-0.5">
                        <div className="h-0.5 w-full rounded-sm bg-border" />
                        <div className="h-0.5 w-2/3 rounded-sm bg-border-subtle" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative z-10 mt-5 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-[var(--radius-xs)] border border-white/70 bg-white/60 px-3 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.08em] text-text-secondary shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </HeroParallax>
  );
}
