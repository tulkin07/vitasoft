"use client";

import {
  SectionHeaderReveal,
  SectionHeaderItem,
} from "@/components/animations/Reveal";
import { ArrowLink } from "@/components/buttons/Button";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  action?: { href: string; label: string };
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  action,
  className,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <SectionHeaderReveal
      className={cn(
        "mb-14 lg:mb-20",
        isCenter ? "mx-auto max-w-2xl text-center" : "max-w-3xl",
        action &&
          !isCenter &&
          "flex flex-col justify-between gap-8 sm:flex-row sm:items-end",
        className
      )}
    >
      <div className={cn(isCenter && "flex flex-col items-center")}>
        <SectionHeaderItem>
          <span className={cn("section-label", isCenter && "[&::before]:hidden")}>
            {label}
          </span>
        </SectionHeaderItem>
        <SectionHeaderItem>
          <h2 className="display-lg mt-5 text-text-primary">{title}</h2>
        </SectionHeaderItem>
        {description && (
          <SectionHeaderItem>
            <p
              className={cn(
                "body-lg mt-5",
                isCenter ? "max-w-lg" : "prose-width"
              )}
            >
              {description}
            </p>
          </SectionHeaderItem>
        )}
      </div>
      {action && (
        <SectionHeaderItem>
          <ArrowLink href={action.href} className="shrink-0">
            {action.label}
          </ArrowLink>
        </SectionHeaderItem>
      )}
    </SectionHeaderReveal>
  );
}
