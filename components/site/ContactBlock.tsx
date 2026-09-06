"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Mail, MapPin, Phone, Send } from "lucide-react";
import { copy, type Locale } from "@/lib/copy";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations/Reveal";

type Channel = "phone" | "telegram" | "email";

function formatLocalPhone(input: string) {
  let digits = input.replace(/\D/g, "");
  if (digits.startsWith("998")) digits = digits.slice(3);
  digits = digits.slice(0, 9);
  const a = digits.slice(0, 2);
  const b = digits.slice(2, 5);
  const c = digits.slice(5, 7);
  const d = digits.slice(7, 9);
  return [a, b, c, d].filter(Boolean).join(" ");
}

export function ContactBlock({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [service, setService] = useState("");
  const [open, setOpen] = useState(false);
  const [channel, setChannel] = useState<Channel>("phone");
  const [phone, setPhone] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const channels: { id: Channel; label: string; icon: typeof Phone }[] = [
    { id: "phone", label: t.contactPhone, icon: Phone },
    { id: "telegram", label: t.contactTelegram, icon: Send },
    { id: "email", label: t.contactEmail, icon: Mail },
  ];

  return (
    <section className="vs-wrap max-w-full overflow-x-clip py-16 sm:py-24">
      <div className="grid min-w-0 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <Reveal className="min-w-0">
        <div className="min-w-0">
          <p className="vs-label">{t.contactLabel}</p>
          <h2 className="vs-h2 mt-4 max-w-xl text-left break-words">{t.contactTitle}</h2>
          <p className="mt-4 max-w-md text-[16px] leading-relaxed text-muted">{t.contactText}</p>

          <StaggerContainer className="mt-10 space-y-5" stagger={0.08}>
            {[
              [Mail, t.contactEmail, "akhmadov0770@gmail.com", "mailto:akhmadov0770@gmail.com"],
              [Phone, t.contactPhone, "+998 93 190 80 97", "tel:+998931908097"],
              [MapPin, locale === "ru" ? "Адрес" : locale === "en" ? "Address" : "Manzil", t.contactAddr, ""],
            ].map(([Icon, k, v, href]) => (
              <StaggerItem key={k as string} className="min-w-0">
                <div className="flex min-w-0 items-center gap-3.5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white/5 transition duration-300 hover:border-accent/50">
                    <Icon className="h-4 w-4 text-accent-soft" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12px] text-faint">{k as string}</p>
                    {href ? (
                      <a href={href as string} className="break-all text-[15px] text-text no-underline">
                        {v as string}
                      </a>
                    ) : (
                      <p className="break-words text-[15px]">{v as string}</p>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
        </Reveal>

        <Reveal delay={0.12} className="min-w-0 w-full">
        <form
          className="vs-card w-full min-w-0 max-w-full space-y-5 p-4 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-[13px] font-medium">
                {t.contactName} <span className="text-[#ff6b6b]">*</span>
              </span>
              <input className="vs-input rounded-xl" placeholder={t.contactNamePh} required />
            </label>

            <div className="relative" ref={menuRef}>
              <span className="mb-1.5 block text-[13px] font-medium">
                {t.contactService} <span className="text-[#ff6b6b]">*</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="vs-input flex w-full items-center justify-between rounded-xl text-left"
              >
                <span className={service ? "text-text" : "text-faint"}>{service || t.contactServicePh}</span>
                <ChevronDown className={`h-4 w-4 text-muted transition duration-300 ${open ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {open && (
                  <motion.ul
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-line bg-surface py-2 shadow-[0_20px_50px_#00000066]"
                  >
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setService("");
                        setOpen(false);
                      }}
                      className="flex w-full items-center gap-2 px-4 py-2.5 text-left text-[14px] text-faint"
                    >
                      <Check className="h-3.5 w-3.5" />
                      {t.contactServicePh}
                    </button>
                  </li>
                  {t.contactServices.map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        onClick={() => {
                          setService(item);
                          setOpen(false);
                        }}
                        className={`flex w-full px-4 py-2.5 text-left text-[14px] hover:bg-white/5 ${
                          service === item ? "text-accent-soft" : "text-text"
                        }`}
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div>
            <p className="mb-2.5 text-[13px] font-medium">{t.contactReach}</p>
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
              {channels.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setChannel(id)}
                  className={`flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2.5 text-[11px] font-medium transition sm:flex-row sm:gap-2 sm:px-3 sm:text-[13px] ${
                    channel === id
                      ? "bg-accent text-on-accent"
                      : "border border-line bg-transparent text-muted"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  <span className="truncate">{label}</span>
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            {channel === "phone" && (
              <motion.label
                key="phone"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="block"
              >
                <span className="mb-1.5 block text-[13px] font-medium">
                  {t.contactPhoneLabel} <span className="text-[#ff6b6b]">*</span>
                </span>
                <div className="vs-input flex items-center gap-2 rounded-xl">
                  <span className="shrink-0 select-none text-text">+998</span>
                  <input
                    className="min-w-0 flex-1 bg-transparent p-0 outline-none"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder={t.contactPhonePh}
                    value={phone}
                    onChange={(e) => setPhone(formatLocalPhone(e.target.value))}
                    required
                  />
                </div>
              </motion.label>
            )}
            {channel === "telegram" && (
              <motion.label
                key="telegram"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="block"
              >
                <span className="mb-1.5 block text-[13px] font-medium">
                  {t.contactTgLabel} <span className="text-[#ff6b6b]">*</span>
                </span>
                <input className="vs-input rounded-xl" placeholder={t.contactTgPh} required />
              </motion.label>
            )}
            {channel === "email" && (
              <motion.label
                key="email"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22 }}
                className="block"
              >
                <span className="mb-1.5 block text-[13px] font-medium">
                  {t.contactEmailLabel} <span className="text-[#ff6b6b]">*</span>
                </span>
                <input className="vs-input rounded-xl" type="email" placeholder={t.contactEmailPh} required />
              </motion.label>
            )}
          </AnimatePresence>

          <label className="block">
            <span className="mb-1.5 block text-[13px] font-medium">
              {t.contactMessage} <span className="text-[#ff6b6b]">*</span>
            </span>
            <textarea className="vs-input min-h-32 resize-y rounded-xl" placeholder={t.contactMessagePh} required />
          </label>

          <button type="submit" className="vs-btn vs-btn-primary h-12 w-full rounded-full">
            {t.contactSend} <Send className="h-4 w-4" />
          </button>
          <p className="text-center text-[12px] leading-relaxed text-faint">{t.contactPrivacy}</p>
        </form>
        </Reveal>
      </div>
    </section>
  );
}
