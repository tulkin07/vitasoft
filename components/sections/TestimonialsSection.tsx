"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { useSiteData } from "@/lib/i18n/site-data";

export function TestimonialsSection() {
  const t = useTranslations("home.testimonials");
  const { testimonials } = useSiteData();

  return (
    <Section variant="bordered">
      <SectionHeader label={t("label")} title={t("title")} />

      <StaggerContainer className="grid gap-6 lg:grid-cols-2">
        {testimonials.map((item) => (
          <StaggerItem key={item.id}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card flex h-full flex-col p-5 sm:p-6"
            >
              <motion.span
                className="testimonial-quote inline-block origin-left"
                aria-hidden
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.25 }}
              >
                &ldquo;
              </motion.span>
              <blockquote className="flex-1 text-sm leading-[1.75] text-text-secondary">
                &ldquo;{item.content}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="icon-square !h-10 !w-10 !text-xs font-semibold">
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">
                    {item.name}
                  </p>
                  <p className="text-xs text-text-muted">
                    {item.position}, {item.company}
                  </p>
                </div>
                <div
                  className="ml-auto flex gap-0.5"
                  aria-label={t("starsAria", { count: item.rating })}
                >
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i} className="h-px w-3 bg-gold" />
                  ))}
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
