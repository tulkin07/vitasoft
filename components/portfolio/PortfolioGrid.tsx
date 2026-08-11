"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { FadeUp } from "@/components/animations/FadeUp";
import { PortfolioFilters } from "@/components/portfolio/PortfolioFilters";
import { PortfolioProjectCard } from "@/components/portfolio/PortfolioProjectCard";
import { useSiteData } from "@/lib/i18n/site-data";
import type { ProjectCategory } from "@/lib/i18n/icons";
import { portfolioCardVariants } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function PortfolioGrid() {
  const t = useTranslations("portfolioPage");
  const { projects, projectFilters } = useSiteData();
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: projects.length };
    for (const project of projects) {
      map[project.category] = (map[project.category] ?? 0) + 1;
    }
    return map;
  }, [projects]);

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <FadeUp>
        <PortfolioFilters
          filters={projectFilters}
          active={filter}
          counts={counts}
          onChange={setFilter}
          resultCount={filtered.length}
          resultsLabel={t("resultsLabel")}
        />
      </FadeUp>

      <motion.div layout className="portfolio-grid">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              variants={portfolioCardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={cn(
                "portfolio-grid-item",
                index === 0 && filter === "all" && "portfolio-grid-item-wide"
              )}
            >
              <PortfolioProjectCard
                project={project}
                wide={index === 0 && filter === "all"}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
