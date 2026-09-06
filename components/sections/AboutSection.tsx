"use client";

import { useTranslations } from "next-intl";
import { Button } from "@/components/buttons/Button";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";

export function AboutSection() {
  const t = useTranslations("home.about");
  const items = t.raw("items") as Array<{ number: string; title: string; description: string }>;

  return (
    <Section id="about">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,26rem)_1fr] lg:gap-16">
        <div>
          <SectionHeader
            label={t("label")}
            title={t("title")}
            description={t("description")}
            className="!mb-8"
          />
          <Button href="/contact">{t("cta")}</Button>
        </div>
        <StaggerContainer className="grid gap-3">
          {items.map((item) => (
            <StaggerItem key={item.number}>
              <article className="glass-card flex gap-5 p-5 lg:p-6">
                <span className="font-mono text-sm text-accent-light">{item.number}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                    {item.description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
