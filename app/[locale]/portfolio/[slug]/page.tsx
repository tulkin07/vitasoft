import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { FadeUp } from "@/components/animations/FadeUp";
import { Button } from "@/components/buttons/Button";
import { ProjectMockup } from "@/components/portfolio/ProjectMockup";
import { routing, type Locale } from "@/i18n/routing";
import { getAllPortfolioSlugs } from "@/data/portfolio-projects";
import {
  getProjectBySlug,
  getServerMessages,
} from "@/lib/i18n/server-data";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPortfolioSlugs();
  return routing.locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug, locale } = await params;
  const project = await getProjectBySlug(slug, locale as Locale);
  if (!project) {
    const messages = await getServerMessages();
    return { title: messages.portfolioDetail.notFound };
  }
  return {
    title: project.title,
    description: project.shortDescription,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug, locale } = await params;
  const project = await getProjectBySlug(slug, locale as Locale);
  const messages = await getServerMessages();
  const t = messages.portfolioDetail;

  if (!project) notFound();

  return (
    <>
      <section className="relative pt-28 pb-12 sm:pt-36">
        <div className="grid-bg absolute inset-0 opacity-30" />
        <div className="relative container-main">
          <FadeUp>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.back}
            </Link>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="mt-8">
              <span className="section-label">
                {project.number} / {project.categoryLabel} / {project.year}
              </span>
              <h1 className="display-lg mt-5 text-text-primary">
                {project.title}
              </h1>
              <p className="body-lg mt-6 max-w-2xl">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="border border-border px-3 py-1 text-[0.625rem] uppercase tracking-[0.1em] text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.liveUrl ? (
                <div className="mt-8">
                  <Button
                    href={project.liveUrl}
                    external
                    variant="primary"
                    size="md"
                  >
                    {t.liveDemo}
                  </Button>
                </div>
              ) : null}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-main">
          <FadeUp>
            <ProjectMockup
              title={project.title}
              variant="wide"
              image={project.image}
              alt={project.title}
            />
          </FadeUp>
        </div>
      </section>

      <section className="border-y border-border bg-bg-secondary py-24">
        <div className="container-main">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { label: t.problem, content: project.problem },
              { label: t.solution, content: project.solution },
              { label: t.result, content: project.result },
            ].map((item, i) => (
              <FadeUp key={item.label} delay={i * 0.1}>
                <div className="border border-border bg-bg-card p-8">
                  <span className="section-label">{item.label}</span>
                  <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                    {item.content}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeUp>
              <span className="section-label">{t.featuresLabel}</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-primary">
                {t.featuresTitle}
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <ul className="space-y-3">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-bg-secondary py-24">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeUp>
              <span className="section-label">{t.processLabel}</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-text-primary">
                {t.processTitle}
              </h2>
              <ol className="mt-6 space-y-3">
                {project.process.map((step, i) => (
                  <li
                    key={step}
                    className="flex gap-3 text-sm text-text-secondary"
                  >
                    <span className="shrink-0 font-display text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </FadeUp>
            <FadeUp delay={0.1}>
              <span className="section-label">{t.resultsLabel}</span>
              <h2 className="mt-4 font-display text-2xl font-bold text-text-primary">
                {t.resultsTitle}
              </h2>
              <ul className="mt-6 space-y-3">
                {project.results.map((result) => (
                  <li
                    key={result}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {result}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-main text-center">
          <FadeUp>
            <h2 className="font-display text-3xl font-bold text-text-primary">
              {t.ctaTitle}
            </h2>
            <p className="mt-4 text-text-secondary">{t.ctaDescription}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                {t.ctaPrimary}
              </Button>
              <Button href="/portfolio" variant="secondary" size="lg">
                {t.ctaSecondary}
              </Button>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
