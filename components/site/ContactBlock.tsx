"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, CheckCircle2, ChevronDown, CircleAlert, Mail, MapPin, Phone, Send, X } from "lucide-react";
import { copy, type Locale } from "@/lib/copy";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/animations/Reveal";

type ModalState = { kind: "ok" } | { kind: "err"; text: string } | null;

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
  const [phone, setPhone] = useState("");
  const [sending, setSending] = useState(false);
  const [modal, setModal] = useState<ModalState>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    if (!modal) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModal(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [modal]);

  function validate(fd: FormData) {
    const name = String(fd.get("fullName") ?? "").trim();
    if (name.length < 2) return t.contactErrName;
    if (!service) return t.contactErrService;
    if (phone.replace(/\D/g, "").length !== 9) return t.contactErrPhone;
    const message = String(fd.get("message") ?? "").trim();
    const words = message.split(/\s+/).filter(Boolean);
    if (words.length < 8) return t.contactErrMessage;
    return null;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const err = validate(new FormData(form));
    if (err) {
      setModal({ kind: "err", text: err });
      return;
    }
    setSending(true);
    try {
      const fd = new FormData(form);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(fd.get("fullName") ?? "").trim(),
          service,
          channel: "phone",
          contact: `+998 ${phone}`,
          message: String(fd.get("message") ?? "").trim(),
        }),
      });

      if (!res.ok) {
        setModal({ kind: "err", text: t.contactErrGeneric });
        return;
      }

      form.reset();
      setService("");
      setPhone("");
      setModal({ kind: "ok" });
    } catch {
      setModal({ kind: "err", text: t.contactErrGeneric });
    } finally {
      setSending(false);
    }
  }

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
          onSubmit={onSubmit}
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-[13px] font-medium">
                {t.contactName} <span className="text-[#ff6b6b]">*</span>
              </span>
              <input name="fullName" className="vs-input rounded-xl" placeholder={t.contactNamePh} autoComplete="name" />
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

          <label className="block" htmlFor="contact-phone">
            <span className="mb-1.5 block text-[13px] font-medium">
              {t.contactPhoneLabel} <span className="text-[#ff6b6b]">*</span>
            </span>
            <div className="vs-input flex items-center gap-2 rounded-xl">
              <span className="shrink-0 select-none text-text">+998</span>
              <input
                id="contact-phone"
                className="min-w-0 flex-1 bg-transparent p-0 outline-none"
                inputMode="tel"
                autoComplete="tel"
                placeholder={t.contactPhonePh}
                value={phone}
                onChange={(e) => setPhone(formatLocalPhone(e.target.value))}
              />
            </div>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-[13px] font-medium">
              {t.contactMessage} <span className="text-[#ff6b6b]">*</span>
              <span className="ml-2 font-normal text-faint">({t.contactMessageMin})</span>
            </span>
            <textarea name="message" className="vs-input min-h-32 resize-y rounded-xl" placeholder={t.contactMessagePh} />
          </label>

          <button type="submit" disabled={sending} className="vs-btn vs-btn-primary h-12 w-full rounded-full disabled:opacity-60">
            {sending
              ? locale === "ru"
                ? "Отправка..."
                : locale === "en"
                  ? "Sending..."
                  : "Yuborilmoqda..."
              : t.contactSend}{" "}
            <Send className="h-4 w-4" />
          </button>
          <p className="text-center text-[12px] leading-relaxed text-faint">{t.contactPrivacy}</p>
        </form>
        </Reveal>
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <button
              type="button"
              className="absolute inset-0 bg-[#07080ccc] backdrop-blur-md"
              aria-label={t.contactModalClose}
              onClick={() => setModal(null)}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.97 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="vs-card relative w-full max-w-[440px] overflow-hidden px-7 py-8 text-center"
            >
              <span
                className="absolute inset-x-0 top-0 h-[2px]"
                style={{
                  background:
                    modal.kind === "ok"
                      ? "linear-gradient(90deg, #4de0d0, transparent)"
                      : "linear-gradient(90deg, #ff6b6b, transparent)",
                }}
              />
              <button
                type="button"
                onClick={() => setModal(null)}
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-muted transition hover:bg-white/5 hover:text-text"
                aria-label={t.contactModalClose}
              >
                <X className="h-4 w-4" />
              </button>
              <span
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${
                  modal.kind === "ok" ? "bg-[#4de0d018] text-cyan" : "bg-[#ff6b6b18] text-[#ff6b6b]"
                }`}
              >
                {modal.kind === "ok" ? (
                  <CheckCircle2 className="h-8 w-8" />
                ) : (
                  <CircleAlert className="h-8 w-8" />
                )}
              </span>
              <h3 id="contact-modal-title" className="mt-5 font-[family-name:var(--font-geist)] text-[22px] font-semibold tracking-[-0.4px]">
                {modal.kind === "ok" ? t.contactSuccessTitle : t.contactErrorTitle}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {modal.kind === "ok" ? t.contactSuccessText : modal.text}
              </p>
              <button type="button" onClick={() => setModal(null)} className="vs-btn vs-btn-primary mt-7 h-11 w-full rounded-full">
                {t.contactModalClose}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
