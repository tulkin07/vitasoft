"use client";

import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";
import { CardNumber, CardTitle, CardDescription, TagList } from "@/components/cards/Card";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { useSiteData } from "@/lib/i18n/site-data";

export function ServicesSection() {
  const t = useTranslations("home.services");
  const tButtons = useTranslations("buttons");
  const { homeServices } = useSiteData();

  return (
    <Section id="services">
      <SectionHeader
        label={t("label")}
        title={t("title")}
        action={{ href: "/services", label: t("action") }}
      />

      <StaggerContainer className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {homeServices.map((service) => {
          const Icon = service.icon;
          return (
            <StaggerItem key={service.number}>
              <Link
                href={`/services#${service.slug}`}
                className="group block h-full"
              >
                <div className="card-luxury flex h-full flex-col p-7 lg:p-8">
                  <div className="flex items-start justify-between">
                    <CardNumber>{service.number}</CardNumber>
                    <div className="icon-square transition-transform duration-300 group-hover:scale-[1.04]">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="flex-1">
                    {service.description}
                  </CardDescription>
                  <TagList tags={service.technologies} />
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.1em] text-accent">
                    {tButtons("learnMore")}
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
