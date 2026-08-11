"use client";

import type { ComponentType } from "react";
import {
  Globe,
  LayoutGrid,
  Palette,
  ShoppingCart,
  Smartphone,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import type { ProjectCategory } from "@/lib/i18n/icons";
import { cn } from "@/lib/utils";

const filterIcons: Record<
  ProjectCategory,
  ComponentType<{ className?: string; strokeWidth?: number }>
> = {
  all: LayoutGrid,
  web: Globe,
  crm: Users,
  ecommerce: ShoppingCart,
  mobile: Smartphone,
  design: Palette,
  automation: Zap,
};

interface PortfolioFiltersProps {
  filters: { value: string; label: string }[];
  active: ProjectCategory;
  counts: Record<string, number>;
  onChange: (value: ProjectCategory) => void;
  resultCount: number;
  resultsLabel: string;
}

export function PortfolioFilters({
  filters,
  active,
  counts,
  onChange,
  resultCount,
  resultsLabel,
}: PortfolioFiltersProps) {
  return (
    <div className="portfolio-filter-wrap">
      <div className="portfolio-filter-bar">
        <div className="portfolio-filter-scroll scrollbar-hide">
          {filters.map((cat) => {
            const Icon = filterIcons[cat.value as ProjectCategory] ?? LayoutGrid;
            const isActive = active === cat.value;
            const count = counts[cat.value] ?? 0;

            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => onChange(cat.value as ProjectCategory)}
                className={cn(
                  "portfolio-filter-item",
                  isActive && "portfolio-filter-item-active"
                )}
                aria-pressed={isActive}
              >
                {isActive && (
                  <motion.span
                    layoutId="portfolio-filter-active"
                    className="portfolio-filter-active-bg"
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 34,
                    }}
                  />
                )}
                <span className="portfolio-filter-icon">
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                </span>
                <span className="portfolio-filter-label">{cat.label}</span>
                <span className="portfolio-filter-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <p className="portfolio-filter-meta">
        <span className="portfolio-filter-meta-count">{resultCount}</span>
        {resultsLabel}
      </p>
    </div>
  );
}
