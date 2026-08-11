import { Mail, Phone, Send } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { PageHero } from "@/components/layout/PageHero";
import { FadeUp } from "@/components/animations/FadeUp";
import { ContactForm } from "@/components/contact/ContactForm";
import { generatePageMetadata, getServerMessages } from "@/lib/i18n/server-data";

export async function generateMetadata() {
  return generatePageMetadata("contact");
}

export default async function ContactPage() {
  const messages = await getServerMessages();
  const { contact } = messages;
  const contactInfo = {
    telegram: "https://t.me/vitasoftuz",
    phone: "+998 93 190 80 97",
    email: "akhmadov0770@gmail.com",
  };

  return (
    <>
      <PageHero>
        <PageHeader
          label={contact.label}
          title={contact.title}
          description={contact.description}
        />
      </PageHero>

      <section className="section-y !pt-0">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <FadeUp>
              <div className="glass-card p-8 lg:p-9">
                <div>
                  <h2 className="font-display text-xl font-semibold text-text-primary">
                    {contact.infoTitle}
                  </h2>
                  <p className="mt-2 text-sm text-text-secondary">
                    {contact.infoDescription}
                  </p>
                </div>

                <ul className="mt-8 space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="icon-square">
                      <Send className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {contact.telegram}
                      </p>
                      <a
                        href={contactInfo.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-secondary transition-colors hover:text-accent"
                      >
                        @vitasoftuz
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="icon-square">
                      <Phone className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {contact.phone}
                      </p>
                      <a
                        href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                        className="text-sm text-text-secondary transition-colors hover:text-accent"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="icon-square">
                      <Mail className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {contact.email}
                      </p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-sm text-text-secondary transition-colors hover:text-accent"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="hero-float-card mt-8 p-6">
                  <p className="font-display text-lg font-semibold text-accent">
                    {contact.responseTitle}
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
                    {contact.responseDescription}
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="form-glass p-8 lg:p-10">
                <h2 className="font-display text-xl font-semibold text-text-primary">
                  {contact.formTitle}
                </h2>
                <p className="mt-2 text-sm text-text-secondary">
                  {contact.formDescription}
                </p>
                <div className="mt-8">
                  <ContactForm />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
