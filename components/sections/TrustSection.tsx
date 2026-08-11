"use client";

import { useTranslations } from "next-intl";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";
import { CardNumber, CardTitle, CardDescription } from "@/components/cards/Card";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { useSiteData } from "@/lib/i18n/site-data";

export function TrustSection() {
  const t = useTranslations("home.trust");
  const { trustItems } = useSiteData();

  return (
    <Section variant="bordered">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-20 xl:grid-cols-[minmax(0,20rem)_1fr]">
        <SectionHeader
          label={t("label")}
          title={
            <>
              {t("title")}
              <br />
              <span className="accent-highlight">{t("titleAccent")}</span>
            </>
          }
          description={t("description")}
          className="!mb-0 lg:sticky lg:top-28 lg:self-start"
        />

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.number}>
                <div className="card-luxury group h-full p-7 lg:p-8">
                  <div className="flex items-start justify-between">
                    <CardNumber>{item.number}</CardNumber>
                    <div className="icon-square transition-transform duration-300 group-hover:scale-[1.04]">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </Section>
  );
}
