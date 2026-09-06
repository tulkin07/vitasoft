"use client";

import { Database, LayoutGrid, Server, Settings2 } from "lucide-react";
import { useTranslations } from "next-intl";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { useSiteData } from "@/lib/i18n/site-data";

const categoryIcons = {
  frontend: LayoutGrid,
  backend: Server,
  database: Database,
  devops: Settings2,
} as const;

const techCategoryOrder = [
  "frontend",
  "backend",
  "database",
  "devops",
] as const;

export function TechnologiesSection() {
  const t = useTranslations("home.technologies");
  const { technologies, techCategoryLabels } = useSiteData();

  return (
    <Section id="technologies" variant="bordered">
      <SectionHeader label={t("label")} title={t("title")} align="center" />

      <StaggerContainer className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {techCategoryOrder.map((category, index) => {
          const items = technologies[category];
          if (!items) return null;

          const CategoryIcon = categoryIcons[category];
          const label = techCategoryLabels[category];

          return (
            <StaggerItem key={category}>
              <article className="tech-category-card group h-full">
                <div className="tech-category-card-glow" aria-hidden />

                <div className="tech-category-header">
                  <div className="tech-category-icon">
                    <CategoryIcon className="h-[1.125rem] w-[1.125rem]" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="tech-category-title">{label}</h3>
                  </div>
                  <span className="tech-category-badge">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <ul className="tech-stack-list">
                  {items.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <li key={tech.name}>
                        <div className="tech-stack-item">
                          <div className="tech-stack-icon">
                            <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                          </div>
                          <span className="tech-stack-name">{tech.name}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </article>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
