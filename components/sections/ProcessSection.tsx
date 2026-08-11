"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { useSiteData } from "@/lib/i18n/site-data";
import { EASE_OUT, VIEWPORT } from "@/lib/motion";

function ProcessStepCard({
  step,
  variant = "desktop",
}: {
  step: { number: string; title: string; description: string };
  variant?: "desktop" | "mobile";
}) {
  return (
    <article
      className={
        variant === "mobile"
          ? "process-step-card process-step-card-mobile"
          : "process-step-card"
      }
    >
      <div className="process-step-card-bar" aria-hidden />
      <div className="process-step-card-body">
        <div className="process-step-card-head">
          {variant !== "mobile" ? (
            <span className="process-step-index">{step.number}</span>
          ) : null}
          <h3 className="process-step-title">{step.title}</h3>
        </div>
        <p className="process-step-desc">{step.description}</p>
      </div>
    </article>
  );
}

export function ProcessSection() {
  const t = useTranslations("home.process");
  const { processSteps } = useSiteData();
  const firstRow = processSteps.slice(0, 4);
  const secondRow = processSteps.slice(4);

  return (
    <Section variant="bordered">
      <SectionHeader
        label={t("label")}
        title={t("title")}
        description={t("description")}
      />

      {/* Desktop */}
      <div className="process-pipeline hidden lg:block">
        <div className="process-rail" aria-hidden>
          <motion.div
            className="process-rail-track"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 1.1, ease: EASE_OUT }}
          />
          <div className="process-rail-nodes">
            {processSteps.map((step) => (
              <div key={step.number} className="process-rail-node">
                <span>{step.number}</span>
              </div>
            ))}
          </div>
        </div>

        <StaggerContainer className="mt-10 grid grid-cols-4 gap-5">
          {firstRow.map((step) => (
            <StaggerItem key={step.number}>
              <ProcessStepCard step={step} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="mx-auto mt-5 grid max-w-[calc(75%+1.25rem)] grid-cols-3 gap-5">
          {secondRow.map((step) => (
            <StaggerItem key={step.number}>
              <ProcessStepCard step={step} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Mobile */}
      <div className="process-mobile lg:hidden">
        <motion.div
          className="process-mobile-rail"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 1, ease: EASE_OUT }}
          aria-hidden
        />
        <StaggerContainer className="process-mobile-list">
          {processSteps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="process-mobile-item">
                <div className="process-mobile-node">
                  <span>{step.number}</span>
                </div>
                <ProcessStepCard step={step} variant="mobile" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
