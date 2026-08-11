import { PageHeader } from "@/components/layout/PageHeader";
import { PageHero } from "@/components/layout/PageHero";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { CTASection } from "@/components/sections/CTASection";
import { generatePageMetadata, getServerMessages } from "@/lib/i18n/server-data";

export async function generateMetadata() {
  return generatePageMetadata("portfolio");
}

export default async function PortfolioPage() {
  const messages = await getServerMessages();
  const { portfolioPage } = messages;

  return (
    <>
      <PageHero>
        <PageHeader
          label={portfolioPage.label}
          title={portfolioPage.title}
          description={portfolioPage.description}
        />
      </PageHero>

      <section className="section-y !pt-0">
        <div className="container-main">
          <PortfolioGrid />
        </div>
      </section>

      <CTASection />
    </>
  );
}
