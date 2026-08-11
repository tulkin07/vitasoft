import { HomeHero } from "@/components/sections/HomeHero";
import { TrustSection } from "@/components/sections/TrustSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <PortfolioSection />
      <StatisticsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
