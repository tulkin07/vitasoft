import { PricingPageContent } from "@/components/pricing/PricingPageContent";
import { generatePageMetadata } from "@/lib/i18n/server-data";
import "./pricing-page.css";

export async function generateMetadata() {
  return generatePageMetadata("pricing");
}

export default function PricingPage() {
  return <PricingPageContent />;
}
