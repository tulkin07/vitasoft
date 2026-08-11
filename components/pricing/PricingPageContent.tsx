"use client";

import { useTranslations } from "next-intl";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/FadeUp";
import { Button } from "@/components/buttons/Button";
import { PricingGrid } from "@/components/pricing/PricingGrid";
import {
  PricingCard,
  PricingCompactCard,
  PricingFeatureList,
  PricingSectionBlock,
  type PricingCardData,
} from "@/components/pricing/pricing-ui";
import { useSiteData } from "@/lib/i18n/site-data";

type OverviewItem = { title: string; price: string; duration: string };
type PaymentStep = { step: string; title: string; description: string };
type PaymentLarge = { label: string; steps: string[] };

export function PricingPageContent() {
  const t = useTranslations("pricing");
  const { contactInfo } = useSiteData();

  const overview = t.raw("overview") as OverviewItem[];
  const websites = t.raw("websites.items") as PricingCardData[];
  const platforms = t.raw("platforms.items") as PricingCardData[];
  const design = t.raw("design.items") as PricingCardData[];
  const mobile = t.raw("mobile") as PricingCardData;
  const mvp = t.raw("mvp") as PricingCardData & {
    suitableForLabel: string;
    suitableFor: string[];
  };
  const additional = t.raw("additional.items") as PricingCardData[];
  const paymentSteps = t.raw("paymentTerms.steps") as PaymentStep[];
  const paymentLarge = t.raw("paymentTerms.largeProject") as PaymentLarge;
  const warrantyItems = t.raw("warranty.items") as string[];

  return (
    <div className="pricing-page">
      <section className="pricing-hero relative overflow-hidden">
        <div className="pricing-hero-glow pricing-hero-glow-a" aria-hidden />
        <div className="pricing-hero-glow pricing-hero-glow-b" aria-hidden />
        <div className="container-main relative z-[1] py-16 sm:py-20 lg:py-24">
          <FadeUp className="mx-auto max-w-3xl text-center">
            <span className="section-label">{t("page.label")}</span>
            <h1 className="display-xl mt-6 text-text-primary">
              {t("page.titleLine1")}
              <br />
              <span className="accent-highlight">{t("page.titleLine2")}</span>
            </h1>
            <p className="body-lg mx-auto mt-6 max-w-2xl">{t("page.description")}</p>
          </FadeUp>
          <FadeUp delay={0.08} className="mx-auto mt-10 max-w-md">
            <div className="pricing-glass-compact p-6 text-center sm:text-left">
              <p className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                {t("page.infoCardTitle")}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {t("page.infoCardText")}
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {t.raw("packages") && (t.raw("packages") as unknown[]).length > 0 && (
        <section className="container-main pb-16 sm:pb-20">
          <FadeUp className="mb-10 text-center">
            <h2 className="font-display text-3xl font-bold text-text-primary sm:text-4xl">
              {t("tiers.title")}
            </h2>
            <p className="body-lg mx-auto mt-4 max-w-2xl text-text-secondary">
              {t("tiers.subtitle")}
            </p>
          </FadeUp>
          <PricingGrid />
        </section>
      )}

      <section className="container-main -mt-4 pb-16 sm:pb-20 lg:pb-24">
        <StaggerContainer className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {overview.map((item) => (
            <StaggerItem key={item.title}>
              <PricingCompactCard
                title={item.title}
                price={item.price}
                duration={item.duration}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <div className="container-main space-y-20 pb-20 sm:space-y-24 lg:space-y-28 lg:pb-28">
        <PricingSectionBlock
          number={t("websites.number")}
          title={t("websites.title")}
          description={t("websites.subtitle")}
        >
          <StaggerContainer className="grid items-start gap-5 lg:grid-cols-3">
            {websites.map((item) => (
              <StaggerItem key={item.id}>
                <PricingCard
                  data={{
                    ...item,
                    variant: item.highlighted ? "highlight" : "glass",
                  }}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PricingSectionBlock>

        <PricingSectionBlock
          number={t("platforms.number")}
          title={t("platforms.title")}
          description={t("platforms.subtitle")}
        >
          <StaggerContainer className="grid items-start gap-5 lg:grid-cols-2">
            {platforms.map((item) => (
              <StaggerItem key={item.id}>
                <PricingCard data={{ ...item, variant: "large" }} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PricingSectionBlock>

        <PricingSectionBlock
          number={t("design.number")}
          title={t("design.title")}
          description={t("design.subtitle")}
        >
          <StaggerContainer className="grid items-start gap-5 lg:grid-cols-2">
            {design.map((item) => (
              <StaggerItem key={item.id}>
                <PricingCard data={{ ...item, variant: "solid" }} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PricingSectionBlock>

        <PricingSectionBlock
          number={t("mobileSection.number")}
          title={t("mobileSection.title")}
        >
          <FadeUp>
            <div className="max-w-3xl">
              <PricingCard data={{ ...mobile, variant: "glass" }} />
            </div>
          </FadeUp>
        </PricingSectionBlock>

        <FadeUp>
          <div className="pricing-mvp-wrap">
            <PricingCard
              data={{ ...mvp, variant: "mvp" }}
              className="!p-8 sm:!p-10"
            />
            {mvp.suitableFor?.length > 0 && (
              <div className="mt-6 border-t border-border/50 pt-6">
                <p className="text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-text-muted">
                  {mvp.suitableForLabel}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {mvp.suitableFor.map((item) => (
                    <span
                      key={item}
                      className="pricing-glass-tag pricing-glass-tag--normal"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </FadeUp>

        <PricingSectionBlock
          number={t("additional.number")}
          title={t("additional.title")}
        >
          <StaggerContainer className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {additional.map((item) => (
              <StaggerItem key={item.id}>
                <PricingCompactCard
                  title={item.title}
                  price={item.price}
                  description={item.description}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </PricingSectionBlock>

        <PricingSectionBlock
          number={t("paymentTerms.number")}
          title={t("paymentTerms.title")}
        >
          <StaggerContainer className="grid items-start gap-4 lg:grid-cols-3">
            {paymentSteps.map((step) => (
              <StaggerItem key={step.step}>
                <div className="pricing-glass-compact p-6 sm:p-7">
                  <span className="font-display text-3xl font-bold text-accent/30">
                    {step.step}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeUp className="mt-6">
            <div className="pricing-glass-compact p-6 sm:p-7">
              <p className="text-sm font-medium text-text-primary">
                {paymentLarge.label}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {paymentLarge.steps.map((step) => (
                  <span
                    key={step}
                    className="pricing-glass-tag pricing-glass-tag--normal"
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </PricingSectionBlock>

        <PricingSectionBlock
          number={t("warranty.number")}
          title={t("warranty.title")}
        >
          <FadeUp>
            <div className="pricing-glass-card max-w-3xl p-7 sm:p-8">
              <p className="text-base leading-relaxed text-text-secondary">
                {t("warranty.text")}
              </p>
              <div className="mt-6 border-t border-border/60 pt-6">
                <PricingFeatureList items={warrantyItems} />
              </div>
              <p className="mt-6 text-xs leading-relaxed text-text-muted">
                {t("warranty.note")}
              </p>
            </div>
          </FadeUp>
        </PricingSectionBlock>

        <FadeUp>
          <div className="pricing-cta-block px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="pricing-cta-glow" aria-hidden />
            <div className="relative z-[1] grid gap-8 lg:grid-cols-[1.2fr_auto] lg:items-end">
              <div>
                <h2 className="display-lg max-w-xl text-text-primary">
                  {t("cta.title")}
                </h2>
                <p className="body-lg mt-4 max-w-lg">{t("cta.description")}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button href="/contact" variant="primary" size="lg">
                  {t("cta.primary")}
                </Button>
                <Button
                  href={contactInfo.telegram}
                  variant="secondary"
                  size="lg"
                  external
                >
                  {t("cta.secondary")}
                </Button>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </div>
  );
}
