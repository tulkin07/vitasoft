"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { StaggerContainer, StaggerItem } from "@/components/animations/FadeUp";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { useSiteData } from "@/lib/i18n/site-data";
import { cn } from "@/lib/utils";

function FAQItem({
  index,
  question,
  answer,
  open,
  onToggle,
}: {
  index: number;
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const number = String(index).padStart(2, "0");

  return (
    <article className={cn("faq-card", open && "faq-card-open")}>
      <div className="faq-card-glow" aria-hidden />
      <span className="faq-card-watermark" aria-hidden>
        {number}
      </span>

      <button
        type="button"
        onClick={onToggle}
        className="faq-card-trigger"
        aria-expanded={open}
      >
        <span className="faq-card-index">{number}</span>
        <span className="faq-card-question">{question}</span>
        <span className={cn("faq-card-toggle", open && "faq-card-toggle-open")}>
          <ChevronDown className="h-4 w-4" strokeWidth={2} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="faq-card-panel"
          >
            <p className="faq-card-answer">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export function FAQSection() {
  const t = useTranslations("home.faq");
  const { faqItems } = useSiteData();
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <Section variant="bordered">
      <div className="faq-layout">
        <aside className="faq-aside">
          <SectionHeader
            label={t("label")}
            title={t("title")}
            className="!mb-0"
          />

          <div className="faq-help-card">
            <div className="faq-help-icon">
              <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <p className="faq-help-text">{t("description")}</p>
            <Link href="/contact" className="faq-help-link">
              {t("contactLink")}
            </Link>
          </div>
        </aside>

        <StaggerContainer className="faq-list">
          {faqItems.map((item, index) => (
            <StaggerItem key={item.id}>
              <FAQItem
                index={index + 1}
                question={item.question}
                answer={item.answer}
                open={openId === item.id}
                onToggle={() =>
                  setOpenId((current) => (current === item.id ? null : item.id))
                }
              />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </Section>
  );
}
