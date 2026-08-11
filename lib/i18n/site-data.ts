import { useLocale, useMessages } from "next-intl";
import type { Messages } from "@/messages";
import {
  allServiceIcons,
  homeServiceIcons,
  techIcons,
  trustIcons,
} from "@/lib/i18n/icons";
import { getAllPortfolioProjects } from "@/data/portfolio-projects";
import { technologies } from "@/data/services";
import type { Locale } from "@/i18n/routing";

export function useSiteData() {
  const messages = useMessages() as Messages;
  const locale = useLocale() as Locale;

  const homeServices = messages.services.home.map((service) => ({
    ...service,
    icon: homeServiceIcons[service.slug],
  }));

  const allServices = messages.services.all.map((service) => ({
    ...service,
    icon: allServiceIcons[service.slug],
  }));

  const trustItems = messages.services.trust.map((item, index) => ({
    ...item,
    icon: trustIcons[index],
  }));

  const projects = getAllPortfolioProjects(locale);

  const technologiesWithIcons = Object.fromEntries(
    Object.entries(technologies).map(([category, items]) => [
      category,
      items.map((tech) => ({
        ...tech,
        icon: techIcons[tech.name] ?? techIcons.React,
      })),
    ])
  );

  const techCategoryLabels = messages.home.technologies.categories;

  return {
    messages,
    navLinks: [
      { href: "/", label: messages.nav.home },
      { href: "/about", label: messages.nav.about },
      { href: "/services", label: messages.nav.services },
      { href: "/portfolio", label: messages.nav.portfolio },
      { href: "/pricing", label: messages.nav.pricing },
    ],
    homeServices,
    allServices,
    processSteps: messages.services.process,
    trustItems,
    projects,
    projectFilters: messages.projects.filters,
    pricingPackages: (
      messages.pricing.packages as Array<{
        id: string;
        name: string;
        price: string;
        priceNote?: string;
        description: string;
        features: string[];
        cta: string;
        highlightedLabel?: string;
      }>
    ).map((pkg) => ({
      ...pkg,
      highlighted: pkg.id === "optimal",
    })),
    pricingNote: messages.pricing.note,
    pricingFAQ: messages.pricing.faq,
    faqItems: messages.faq,
    testimonials: messages.testimonials.map((t) => ({
      ...t,
      rating: 5,
    })),
    companyStats: messages.company.stats.map((s, i) => ({
      ...s,
      value: [50, 30, 5, 15, 24][i],
      suffix: ["+", "+", "+", "+", "/7"][i],
    })),
    heroStats: [
      { value: "50+", label: messages.company.heroStats[0].label },
      { value: "99%", label: messages.company.heroStats[1].label },
      { value: "15+", label: messages.company.heroStats[2].label },
    ],
    values: messages.company.values,
    companyTimeline: messages.company.timeline,
    teamMembers: messages.company.team,
    whyChooseUs: messages.company.whyChooseUs,
    contactInfo: {
      telegram: "https://t.me/vitasoftuz",
      phone: "+998 93 190 80 97",
      email: "akhmadov0770@gmail.com",
      address: messages.company.contactInfo.address,
    },
    serviceLinks: messages.serviceLinks.map((link) => ({
      href: `/services#${link.slug}`,
      label: link.label,
    })),
    technologies: technologiesWithIcons,
    techCategoryLabels,
  };
}

export type SiteData = ReturnType<typeof useSiteData>;
