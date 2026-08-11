"use client";

import { FadeUp } from "@/components/animations/FadeUp";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function PageHeader({
  label,
  title,
  description,
  align = "left",
}: PageHeaderProps) {
  return (
    <FadeUp
      className={cn(
        "mb-14 lg:mb-20",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"
      )}
    >
      <span className={cn("section-label", align === "center" && "[&::before]:hidden")}>
        {label}
      </span>
      <h1 className="display-lg mt-5 text-text-primary">{title}</h1>
      {description && (
        <p className={cn("body-lg mt-5", align === "center" ? "mx-auto max-w-lg" : "prose-width")}>
          {description}
        </p>
      )}
    </FadeUp>
  );
}
