"use client";

import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { TagList } from "@/components/cards/Card";
import { ProjectMockup } from "@/components/portfolio/ProjectMockup";
import { cn } from "@/lib/utils";

interface PortfolioProject {
  slug: string;
  number: string;
  title: string;
  categoryLabel: string;
  year: string;
  shortDescription: string;
  technologies: string[];
  result?: string;
  image?: string;
}

interface PortfolioProjectCardProps {
  project: PortfolioProject;
  wide?: boolean;
  showResult?: boolean;
  className?: string;
}

export function PortfolioProjectCard({
  project,
  wide = false,
  showResult = false,
  className,
}: PortfolioProjectCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug}`}
      data-cursor="view"
      className={cn("portfolio-card group block h-full", className)}
    >
      <div className="portfolio-card-glow" aria-hidden />
      <span className="portfolio-card-watermark" aria-hidden>
        {project.number}
      </span>

      <div className="portfolio-card-media">
        <div
          className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        >
          <ProjectMockup
            title={project.title}
            variant={wide ? "wide" : "card"}
            image={project.image}
            alt={project.title}
          />
        </div>
        <div className="portfolio-card-media-overlay" />
        <span className="portfolio-card-chip">
          {project.categoryLabel} · {project.year}
        </span>
      </div>

      <div className="portfolio-card-body">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <span className="portfolio-card-index">{project.number}</span>
            <h3 className="portfolio-card-title">{project.title}</h3>
          </div>
          <span className="portfolio-card-arrow">
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.75} />
          </span>
        </div>

        <p className="portfolio-card-desc">{project.shortDescription}</p>
        <TagList tags={project.technologies.slice(0, 3)} />

        {showResult && project.result ? (
          <p className="portfolio-card-result">{project.result}</p>
        ) : null}
      </div>
    </Link>
  );
}
