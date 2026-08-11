"use client";

import { StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";
import { Counter } from "@/components/animations/Counter";
import { Section } from "@/components/layout/Section";
import { useSiteData } from "@/lib/i18n/site-data";

export function StatisticsSection() {
  const { companyStats } = useSiteData();

  return (
    <Section>
      <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {companyStats.slice(0, 4).map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="stat-card flex flex-col justify-center px-6 py-8 lg:px-8 lg:py-10">
              <p className="stat-value font-display text-4xl font-bold tracking-tight sm:text-5xl">
                <Counter value={stat.value as number} />
                <span className="text-accent">{stat.suffix}</span>
              </p>
              <p className="mt-3 text-[0.6875rem] uppercase tracking-[0.14em] text-text-muted">
                {stat.label}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
