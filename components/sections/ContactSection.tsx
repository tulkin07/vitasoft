"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { ContactForm } from "@/components/contact/ContactForm";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { useSiteData } from "@/lib/i18n/site-data";

export function ContactSection() {
  const t = useTranslations("home.contact");
  const { contactInfo } = useSiteData();

  const rows = [
    { icon: Phone, label: t("phone"), value: contactInfo.phone, href: `tel:${contactInfo.phone.replace(/\s/g, "")}` },
    { icon: Mail, label: t("email"), value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: Send, label: t("telegram"), value: "@vitasoftuz", href: contactInfo.telegram },
    { icon: MapPin, label: t("address"), value: contactInfo.address },
  ];

  return (
    <Section id="contact">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,20rem)] lg:gap-16">
        <div>
          <SectionHeader
            label={t("label")}
            title={t("title")}
            className="!mb-8"
          />
          <div className="form-glass p-6 lg:p-8">
            <ContactForm />
          </div>
        </div>
        <aside className="space-y-6 lg:pt-24">
          <h3 className="font-display text-xl font-semibold text-text-primary">
            {t("infoTitle")}
          </h3>
          <ul className="space-y-4">
            {rows.map((row) => {
              const Icon = row.icon;
              const content = (
                <div className="flex items-center gap-3.5">
                  <span className="icon-square">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block font-mono text-[11px] text-text-muted">{row.label}</span>
                    <span className="text-sm text-text-primary">{row.value}</span>
                  </span>
                </div>
              );
              return (
                <li key={row.label}>
                  {row.href ? (
                    <a href={row.href} className="block transition-colors hover:text-accent">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
