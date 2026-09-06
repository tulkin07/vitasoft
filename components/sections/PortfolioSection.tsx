"use client";

import { useTranslations } from "next-intl";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { PortfolioProjectCard } from "@/components/portfolio/PortfolioProjectCard";
import { useSiteData } from "@/lib/i18n/site-data";
import { cn } from "@/lib/utils";

export function PortfolioSection() {
  const t = useTranslations("home.portfolio");
  const { projects } = useSiteData();
  const featured = projects.slice(0, 2);

  return (
    <Section id="portfolio" grid>
      <SectionHeader
        label={t("label")}
        title={t("title")}
        action={{ href: "/portfolio", label: t("action") }}
      />

      <StaggerContainer className="portfolio-featured-grid">
        {featured.map((project, index) => (
          <StaggerItem
            key={project.slug}
            className={cn(
              index === 0 && "portfolio-featured-wide",
              index === 1 && "portfolio-featured-side"
            )}
          >
            <PortfolioProjectCard
              project={project}
              wide={index === 0}
              showResult
            />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
