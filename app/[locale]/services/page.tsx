import { PageHeader } from "@/components/layout/PageHeader";
import { PageHero } from "@/components/layout/PageHero";
import { FadeUp } from "@/components/animations/FadeUp";
import { Button } from "@/components/buttons/Button";
import { CTASection } from "@/components/sections/CTASection";
import { generatePageMetadata, getServerMessages } from "@/lib/i18n/server-data";
import { allServiceIcons } from "@/lib/i18n/icons";
import { Check } from "lucide-react";

export async function generateMetadata() {
  return generatePageMetadata("services");
}

export default async function ServicesPage() {
  const messages = await getServerMessages();
  const { servicesPage, services } = messages;
  const allServices = services.all.map((service) => ({
    ...service,
    icon: allServiceIcons[service.slug],
  }));

  return (
    <>
      <PageHero>
        <PageHeader
          label={servicesPage.label}
          title={servicesPage.title}
          description={servicesPage.description}
        />
      </PageHero>

      <div className="container-main pb-[var(--section-y)]">
        {allServices.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.slug}
              className={`scroll-mt-24 py-16 ${index > 0 ? "border-t border-border" : ""}`}
            >
              <div
                className={`grid items-start gap-12 lg:grid-cols-2 lg:gap-20 ${!isEven ? "lg:[direction:rtl]" : ""}`}
              >
                <FadeUp className={!isEven ? "lg:[direction:ltr]" : ""}>
                  <div className="flex items-center gap-4">
                    <span className="font-display text-4xl font-bold text-accent/20">
                      {service.number}
                    </span>
                    <div className="icon-square">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h2 className="mt-6 font-display text-3xl font-bold text-text-primary sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                    {service.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded border border-border px-3 py-1 text-xs text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="mt-6 text-sm text-accent">
                    {servicesPage.estimatedPeriod} {service.period}
                  </p>
                  <Button href="/contact" variant="secondary" size="md" className="mt-6">
                    {servicesPage.getConsultation}
                  </Button>
                </FadeUp>

                <FadeUp delay={0.1} className={!isEven ? "lg:[direction:ltr]" : ""}>
                  <div className="space-y-8">
                    <div>
                      <h3 className="section-label mb-3">{servicesPage.whoFor}</h3>
                      <p className="text-sm leading-relaxed text-text-secondary">
                        {service.whoNeedsIt}
                      </p>
                    </div>
                    <div>
                      <h3 className="section-label mb-3">{servicesPage.whatWeBuild}</h3>
                      <ul className="space-y-2">
                        {service.whatWeBuild.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-text-secondary"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="section-label mb-3">{servicesPage.features}</h3>
                      <ul className="space-y-2">
                        {service.features.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-text-secondary"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="section-label mb-3">{servicesPage.benefits}</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-sm text-text-secondary"
                          >
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </section>
          );
        })}
      </div>

      <CTASection />
    </>
  );
}
