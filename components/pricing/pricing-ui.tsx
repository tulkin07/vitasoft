"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/buttons/Button";
import { cn } from "@/lib/utils";

export interface PricingCardData {
  id: string;
  title: string;
  description?: string;
  price: string;
  duration?: string;
  features?: string[];
  includes?: string[];
  technologies?: string[];
  suitableFor?: string[];
  cta: string;
  badge?: string;
  highlighted?: boolean;
  variant?: "glass" | "solid" | "highlight" | "mvp" | "large";
}

export function PricingPrice({
  price,
  className,
}: {
  price: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "pricing-price font-display font-bold tracking-tight text-text-primary",
        className
      )}
    >
      {price}
    </p>
  );
}

export function PricingDuration({
  duration,
  className,
}: {
  duration?: string;
  className?: string;
}) {
  if (!duration) return null;
  return (
    <p className={cn("mt-1.5 text-sm text-text-secondary", className)}>
      {duration}
    </p>
  );
}

export function PricingFeatureList({
  items,
  className,
  columns,
}: {
  items: string[];
  className?: string;
  columns?: 1 | 2;
}) {
  const useTwoColumns = columns === 2 || (columns !== 1 && items.length > 5);

  return (
    <ul
      className={cn(
        useTwoColumns ? "pricing-feature-grid" : "space-y-2",
        className
      )}
    >
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-[0.8125rem] leading-snug text-text-secondary"
        >
          <Check
            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
            strokeWidth={1.75}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PricingTechTags({ tags }: { tags?: string[] }) {
  if (!tags?.length) return null;
  return (
    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/25 pt-4 dark:border-white/10">
      {tags.map((tag) => (
        <span key={tag} className="pricing-glass-tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

export function PricingCard({
  data,
  className,
}: {
  data: PricingCardData;
  className?: string;
}) {
  const items = data.features ?? data.includes ?? [];
  const isHighlight = data.variant === "highlight" || data.highlighted;
  const cardClass = cn(
    "pricing-card relative flex flex-col p-5 sm:p-6",
    data.variant === "mvp" && "pricing-card-mvp",
    isHighlight && "pricing-card-highlight",
    !isHighlight && data.variant !== "mvp" && "pricing-glass-card",
    data.variant === "large" && "pricing-card-large",
    className
  );

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cardClass}
    >
      {data.badge && (
        <span className="pricing-badge mb-4 inline-flex w-fit">
          {data.badge}
        </span>
      )}
      <h3 className="font-display text-lg font-semibold text-text-primary sm:text-xl">
        {data.title}
      </h3>
      {data.description && (
        <p className="mt-2 text-sm leading-snug text-text-secondary line-clamp-2">
          {data.description}
        </p>
      )}
      <div className="mt-4">
        <PricingPrice price={data.price} />
        <PricingDuration duration={data.duration} />
      </div>
      {items.length > 0 && (
        <div className="mt-5 border-t border-white/25 pt-4 dark:border-white/10">
          <PricingFeatureList items={items} />
        </div>
      )}
      <PricingTechTags tags={data.technologies} />
      <Button
        href="/contact"
        variant={data.highlighted || data.variant === "mvp" ? "primary" : "secondary"}
        size="md"
        className="mt-6 w-full"
      >
        {data.cta}
      </Button>
    </motion.div>
  );
}

export function PricingSectionBlock({
  number,
  title,
  description,
  children,
  className,
}: {
  number: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("pricing-section", className)}>
      <div className="mb-10 lg:mb-12">
        <p className="pricing-section-number">{number}</p>
        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="body-lg mt-4 max-w-2xl">{description}</p>
        )}
      </div>
      {children}
    </section>
  );
}

export function PricingCompactCard({
  title,
  price,
  duration,
  description,
  cta,
}: {
  title: string;
  price: string;
  duration?: string;
  description?: string;
  cta?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="pricing-glass-compact flex flex-col p-5 sm:p-6"
    >
      <h3 className="font-display text-base font-semibold text-text-primary">
        {title}
      </h3>
      <PricingPrice price={price} className="!text-2xl sm:!text-[1.75rem] mt-4" />
      {duration && <PricingDuration duration={duration} />}
      {description && (
        <p className="mt-3 text-sm leading-snug text-text-secondary line-clamp-3">
          {description}
        </p>
      )}
      {cta && (
        <Button href="/contact" variant="secondary" size="sm" className="mt-5 w-full">
          {cta}
        </Button>
      )}
    </motion.div>
  );
}
