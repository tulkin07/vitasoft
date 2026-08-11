import { PageHeader } from "@/components/layout/PageHeader";
import { PageHero } from "@/components/layout/PageHero";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";
import { Counter } from "@/components/animations/Counter";
import { Button } from "@/components/buttons/Button";
import { CTASection } from "@/components/sections/CTASection";
import { generatePageMetadata, getServerMessages } from "@/lib/i18n/server-data";
import { technologies } from "@/data/services";

export async function generateMetadata() {
  return generatePageMetadata("about");
}

export default async function AboutPage() {
  const messages = await getServerMessages();
  const { about, company } = messages;

  return (
    <>
      <PageHero>
        <PageHeader
          label={about.label}
          title={about.title}
          description={about.description}
        />
      </PageHero>

      {/* Story */}
      <section className="border-y border-border bg-bg-secondary py-24">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeUp>
              <span className="section-label">{about.story.label}</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-primary">
                {about.story.title}
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>{about.story.p1}</p>
                <p>{about.story.p2}</p>
                <p>{about.story.p3}</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container-main">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeUp>
              <div className="card-luxury h-full p-8">
                <span className="section-label">{about.mission.label}</span>
                <h3 className="mt-4 font-display text-2xl font-bold text-text-primary">
                  {about.mission.title}
                </h3>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  {about.mission.description}
                </p>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="card-soft pricing-premium h-full p-8">
                <span className="section-label">{about.vision.label}</span>
                <h3 className="mt-4 font-display text-2xl font-bold text-text-primary">
                  {about.vision.title}
                </h3>
                <p className="mt-4 text-text-secondary leading-relaxed">
                  {about.vision.description}
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-bg-secondary py-24">
        <div className="container-main">
          <FadeUp className="mb-12">
            <span className="section-label">{about.values.label}</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-text-primary">
              {about.values.title}
            </h2>
          </FadeUp>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {company.values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="card-luxury p-6 lg:p-7">
                  <h3 className="font-display text-lg font-semibold text-accent">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container-main">
          <FadeUp className="mb-12">
            <span className="section-label">{about.timeline.label}</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-text-primary">
              {about.timeline.title}
            </h2>
          </FadeUp>
          <div className="space-y-0">
            {company.timeline.map((item, index) => (
              <FadeUp key={item.year} delay={index * 0.05}>
                <div className="flex gap-8 border-l border-border py-6 pl-8 relative">
                  <div className="absolute -left-1.5 top-8 h-2.5 w-2.5 rounded-[var(--radius-xs)] border-2 border-accent bg-bg-primary" />
                  <span className="shrink-0 font-display text-2xl font-bold text-accent">
                    {item.year}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-y border-border bg-bg-secondary py-24">
        <div className="container-main">
          <FadeUp className="mb-12">
            <span className="section-label">{about.team.label}</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-text-primary">
              {about.team.title}
            </h2>
          </FadeUp>
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {company.team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="card-luxury p-6 text-center">
                  <div className="icon-square mx-auto !h-14 !w-14 text-base font-semibold">
                    {member.initials}
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-text-primary">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs text-accent">{member.role}</p>
                  <p className="mt-3 text-sm text-text-secondary">
                    {member.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24">
        <div className="container-main">
          <StaggerContainer className="grid grid-cols-2 gap-8 lg:grid-cols-5">
            {company.stats.map((stat, i) => (
              <StaggerItem key={stat.label}>
                <div className="hero-float-card px-6 py-8 text-center">
                  <p className="font-display text-4xl font-bold text-text-primary">
                    <Counter value={[50, 30, 5, 15, 24][i]} />
                    {["+", "+", "+", "+", "/7"][i]}
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why choose us */}
      <section className="border-y border-border bg-bg-secondary py-24">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeUp>
              <span className="section-label">{about.whyUs.label}</span>
              <h2 className="mt-4 font-display text-3xl font-bold text-text-primary">
                {about.whyUs.title}
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <ul className="space-y-4">
                {company.whyChooseUs.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24">
        <div className="container-main">
          <FadeUp className="mb-12 text-center">
            <span className="section-label">{about.tech.label}</span>
            <h2 className="mt-4 font-display text-3xl font-bold text-text-primary">
              {about.tech.title}
            </h2>
          </FadeUp>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.values(technologies)
              .flat()
              .map((tech) => (
                <span
                  key={tech.name}
                  className="rounded border border-border bg-bg-card px-4 py-2 text-sm text-text-secondary"
                >
                  {tech.name}
                </span>
              ))}
          </div>
          <FadeUp className="mt-12 text-center">
            <Button href="/contact" variant="primary" size="lg">
              {about.tech.cta}
            </Button>
          </FadeUp>
        </div>
      </section>

      <CTASection />
    </>
  );
}
