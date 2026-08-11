"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";
import { Button } from "@/components/buttons/Button";
import { useSiteData } from "@/lib/i18n/site-data";
import { cn } from "@/lib/utils";

export function PricingGrid() {
  const tButtons = useTranslations("buttons");
  const { pricingPackages, pricingNote } = useSiteData();

  return (
    <>
      <StaggerContainer className="grid items-start gap-5 lg:grid-cols-3">
        {pricingPackages.map((pkg) => (
          <StaggerItem key={pkg.id}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                "pricing-glass-card flex flex-col p-5 sm:p-6",
                pkg.highlighted && "pricing-glass-card--highlight"
              )}
            >
              {pkg.highlighted && (
                <motion.span
                  initial={{ opacity: 0, y: -8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="pricing-badge-popular"
                >
                  {"highlightedLabel" in pkg && pkg.highlightedLabel
                    ? pkg.highlightedLabel
                    : tButtons("popular")}
                </motion.span>
              )}
              <h3 className="text-[0.625rem] font-semibold uppercase tracking-[0.16em] text-accent">
                {pkg.name}
              </h3>
              <div className={cn("mt-5", pkg.highlighted && "mt-6")}>
                <span className="font-display text-2xl font-bold tracking-tight text-text-primary lg:text-3xl">
                  {pkg.price}
                </span>
                {pkg.priceNote && (
                  <span className="ml-1.5 text-xs text-text-muted">
                    {pkg.priceNote}
                  </span>
                )}
              </div>
              <p className="mt-3 text-sm leading-snug text-text-secondary">
                {pkg.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-white/20 pt-4 dark:border-white/10">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-[0.8125rem] leading-snug text-text-secondary"
                  >
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                      strokeWidth={1.5}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href="/contact"
                variant={pkg.highlighted ? "primary" : "secondary"}
                size="md"
                className="mt-6 w-full"
              >
                {pkg.cta}
              </Button>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeUp className="mt-10 border-t border-border pt-8 text-center">
        <p className="text-sm text-text-muted">{pricingNote}</p>
      </FadeUp>
    </>
  );
}
