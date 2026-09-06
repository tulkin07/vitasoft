"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  Globe,
  LayoutDashboard,
  Palette,
  Send,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import { useLocale } from "next-intl";
import { copy, type Locale } from "@/lib/copy";
import { getAllPortfolioProjects } from "@/data/portfolio-projects";
import { LogoMark, Wordmark } from "@/components/site/LogoMark";
import { ProcessTimeline } from "@/components/site/ProcessTimeline";
import { ContactBlock } from "@/components/site/ContactBlock";
import { Counter } from "@/components/animations/Counter";
import {
  LineReveal,
  Reveal,
  SectionHeaderItem,
  SectionHeaderReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/Reveal";

const serviceIcons = [Globe, ShoppingBag, LayoutDashboard, Smartphone, Send, Palette];
const serviceColors = ["#6D7CFF", "#4DE0D0", "#9AA4FF", "#7C8CFF", "#26A5E4", "#C4B5FD"];

const advantages = [
  ["01", "Tajriba", "Murakkab loyihalarni zamonaviy texnologiyalar yordamida ishlab chiqamiz."],
  ["02", "Individual yondashuv", "Har bir biznes uchun alohida yechim."],
  ["03", "Zamonaviy texnologiyalar", "Eng so‘nggi va ishonchli texnologiyalardan foydalanamiz."],
  ["04", "Uzoq muddatli hamkorlik", "Loyiha topshirilgandan keyin ham texnik qo‘llab-quvvatlash."],
];

const filters = ["All", "Web", "CRM"] as const;

const techs = [
  { name: "Next.js", src: "/images/tech/nextjs.svg", onDark: true },
  { name: "React", src: "/images/tech/react.svg" },
  { name: "Vue", src: "/images/tech/vue.svg" },
  { name: "TypeScript", src: "/images/tech/typescript.svg" },
  { name: "JavaScript", src: "/images/tech/javascript.svg" },
  { name: "Tailwind CSS", src: "/images/tech/tailwindcss.svg" },
  { name: "Node.js", src: "/images/tech/nodejs.svg" },
  { name: "NestJS", src: "/images/tech/nestjs.svg" },
  { name: "Express", src: "/images/tech/express.svg", onDark: true },
  { name: "Python", src: "/images/tech/python.svg" },
  { name: "PostgreSQL", src: "/images/tech/postgresql.svg" },
  { name: "MongoDB", src: "/images/tech/mongodb.svg" },
  { name: "Redis", src: "/images/tech/redis.svg" },
  { name: "React Native", src: "/images/tech/react-native.svg" },
  { name: "Flutter", src: "/images/tech/flutter.svg" },
  { name: "Swift", src: "/images/tech/swift.svg" },
  { name: "Kotlin", src: "/images/tech/kotlin.svg" },
  { name: "Telegram Bot", src: "/images/tech/telegram.svg" },
  { name: "Docker", src: "/images/tech/docker.svg" },
  { name: "AWS", src: "/images/tech/aws.svg" },
  { name: "Google Cloud", src: "/images/tech/googlecloud.svg" },
  { name: "GitHub", src: "/images/tech/github.svg", onDark: true },
  { name: "Figma", src: "/images/tech/figma.svg" },
  { name: "Canva", src: "/images/tech/canva.svg" },
  { name: "Photoshop", src: "/images/tech/photoshop.svg" },
];

const quotes = [
  ["AZ", "Aziz Karimov", "CEO · EduSmart", "VITASoft jamoasi bizning biznes jarayonlarimizni to‘liq raqamlashtirishga yordam berdi. Natija kutganimizdan ham yaxshi bo‘ldi."],
  ["NL", "Nilufar Saidova", "Founder · Golden Tours", "Dizayn va development bir tilda ishladi. Sayt ishga tushganidan keyin so‘rovlar sezilarli oshdi."],
  ["JM", "Javlon Mirzaev", "Product Lead · Payno", "Muddat, sifat va texnik chuqurlik — hammasi professional darajada. Hamkorlikni davom ettiramiz."],
  ["SR", "Sevara Toshpulatova", "Operations · CardioFergana", "CRM tizimi kunlik ish yukini ancha kamaytirdi. Jamoa har doim aloqada."],
];

const faqs = [
  ["Loyiha qancha vaqtda tayyor bo‘ladi?", "Muddat loyiha hajmiga bog‘liq. Landing 2–4 hafta, murakkab CRM/ERP 8–16 hafta atrofida. Aniq reja tahlildan keyin beriladi."],
  ["Sayt yaratish narxi qancha?", "Narx funksionallik, dizayn va integratsiyalarga qarab belgilanadi. Bepul konsultatsiyada smeta tuzamiz."],
  ["Mobil ilova ishlab chiqish qancha turadi?", "React Native yoki Flutter bilan iOS/Android bir codebase. Narx ekranlar soni va backendga bog‘liq."],
  ["CRM tizimi yaratib bera olasizmi?", "Ha. Sotuv, ta’lim, klinika va ichki jarayonlar uchun custom CRM/ERP ishlab chiqamiz."],
  ["Tayyor loyiha bilan ishlaysizmi?", "Ha. Mavjud kodni audit qilib, rivojlantirish va texnik qarzdorlikni bartaraf etamiz."],
  ["Texnik qo‘llab-quvvatlash bormi?", "Ha. Launchdan keyin 24/7 monitoring va SLA asosida qo‘llab-quvvatlash mavjud."],
  ["Qanday texnologiyalardan foydalanasiz?", "Asosan React, Next.js, TypeScript, Node.js, NestJS, PostgreSQL va React Native."],
  ["Loyiha boshlash uchun nima kerak?", "Qisqa brief, maqsadlar va kontakt. Qolganini birgalikda tuzamiz."],
];

type LandingProject = {
  name: string;
  cat: string;
  category: string;
  d: string;
  tech: string[];
  img: string;
  href: string;
  number: string;
  year: string;
  color: string;
};

/** 4×4 bento: two 2×2 features, six 1×1, one tall 1×2 — matches the reference grid, not the card chrome. */
const bentoCells = [
  "md:col-span-2 lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-4 lg:row-start-1",
  "lg:col-start-3 lg:row-start-2",
  "lg:col-start-4 lg:row-start-2",
  "lg:col-start-1 lg:row-start-3",
  "lg:col-start-1 lg:row-start-4",
  "md:col-span-2 lg:col-start-2 lg:col-span-2 lg:row-start-3 lg:row-span-2",
  "lg:col-start-4 lg:row-start-3 lg:row-span-2",
] as const;

function projectSize(index: number, bento: boolean): "featured" | "compact" | "tall" {
  if (!bento) return "compact";
  if (index === 0 || index === 7) return "featured";
  if (index === 8) return "tall";
  return "compact";
}

function ProjectCard({
  p,
  view,
  size,
}: {
  p: LandingProject;
  view: string;
  size: "featured" | "compact" | "tall";
}) {
  const fill = size !== "featured";

  return (
    <article
      data-cursor="view"
      className={`vs-project group ${size === "featured" ? "vs-project-featured" : "vs-project-fill"}`}
      style={{ ["--card" as string]: p.color }}
    >
      <a href={p.href} target="_blank" rel="noopener noreferrer" className="relative flex h-full min-h-0 flex-col no-underline text-inherit">
        <div
          className="vs-project-media"
          style={fill ? { backgroundImage: `url(${p.img})` } : undefined}
        >
          <img src={p.img} alt={p.name} />
          <span className="vs-project-shine" aria-hidden />
          <span className="vs-project-scrim" aria-hidden />
          <span className="vs-project-index">{p.number}</span>
          <span className="vs-project-live">
            <i />
            Live
          </span>
          <div className="vs-project-overlay">
            <p className="vs-project-kicker vs-project-kicker-on-media">
              {p.cat}
              <span>·</span>
              {p.year}
            </p>
            <div className="vs-project-overlay-row">
              <h3>{p.name}</h3>
              {size === "featured" ? (
                <span className="vs-project-go" aria-hidden>
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              ) : (
                <span className="vs-project-link vs-project-link-on-media">
                  {view}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              )}
            </div>
          </div>
        </div>
        {size === "featured" && (
          <div className="vs-project-body vs-project-body-featured">
            <p className="vs-project-desc line-clamp-2">{p.d}</p>
            <div className="vs-project-tags">
              {p.tech.slice(0, 5).map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        )}
      </a>
    </article>
  );
}

export function Landing() {
  const locale = useLocale() as Locale;
  const t = copy[locale];
  const [openFaq, setOpenFaq] = useState(0);
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const projects: LandingProject[] = getAllPortfolioProjects(locale).map((p) => ({
    name: p.title,
    cat: p.categoryLabel,
    category: p.category,
    d: p.shortDescription,
    tech: p.technologies,
    img: p.image,
    href: p.liveUrl,
    number: p.number,
    year: p.year,
    color: p.color,
  }));

  const visible = projects.filter((p) => filter === "All" || p.category === filter.toLowerCase());
  const bento = filter === "All" && visible.length >= 9;

  return (
    <div className="relative min-w-0 overflow-x-clip bg-bg text-text">
      <div className="vs-atmosphere" />
      <div className="vs-streak-2 hidden lg:block" />

      <div id="home" className="scroll-mt-[76px]">
      <section className="vs-hero relative flex flex-col items-center justify-center overflow-hidden px-5 lg:px-16">
        <div className="vs-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_65%_at_50%_50%,black,transparent_78%)]" />
        <div className="vs-hero-glow vs-hero-glow-a" aria-hidden />
        <div className="vs-hero-glow vs-hero-glow-b" aria-hidden />
        <div className="vs-hero-glow vs-hero-glow-c" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,transparent_40%,var(--bg)_92%)]" />

        <div className="relative z-[3] flex w-full max-w-[920px] flex-col items-center justify-center text-center">
          <Reveal y={16} duration={0.6}>
            <div className="vs-hero-kicker">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
              <span>{t.heroLive}</span>
            </div>
          </Reveal>
          <LineReveal lines={t.heroTitle} className="vs-h1 mt-8" />
          <Reveal delay={0.28} y={18}>
            <p className="vs-hero-lead mt-6">{t.heroText}</p>
          </Reveal>
          <Reveal delay={0.4} y={16}>
            <div className="vs-hero-actions mt-10">
              <a href="#contact" className="vs-btn vs-btn-primary vs-btn-hero">
                {t.ctaArrow} <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#portfolio" className="vs-btn vs-btn-ghost vs-btn-hero">
                {t.portfolioCta}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      </div>

      <section className="relative">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,#6d7cff18,transparent_70%)] light:bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,#2f6cff24,transparent_70%)]" />
        <StaggerContainer className="vs-wrap relative grid grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {t.metrics.map(([n, l], i) => (
            <StaggerItem key={l}>
            <article
              className="group relative flex flex-col items-center justify-center px-4 py-12 text-center lg:py-14"
            >
              {i > 0 && (
                <span className="pointer-events-none absolute inset-y-8 left-0 hidden w-px bg-gradient-to-b from-transparent via-line-strong to-transparent lg:block" />
              )}
              <Counter
                value={parseInt(n, 10)}
                suffix={n.replace(/^\d+/, "")}
                className="bg-gradient-to-b from-white to-[#9aa4ff] bg-clip-text font-[family-name:var(--font-geist)] text-[48px] font-semibold leading-none tracking-[-2px] text-transparent light:from-[#0b3d99] light:to-[#2f6cff]"
              />
              <span className="mt-3 h-px w-8 bg-gradient-to-r from-transparent via-cyan to-transparent opacity-70 transition group-hover:w-14" />
              <p className="mt-3 max-w-[9.5rem] text-[13px] leading-snug text-muted">{l}</p>
            </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <div id="services" className="scroll-mt-[76px]">
      <section className="vs-wrap py-24">
        <SectionHeaderReveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionHeaderItem>
            <p className="vs-label">{t.servicesLabel}</p>
          </SectionHeaderItem>
          <SectionHeaderItem>
            <h2 className="vs-h2 mt-3.5">{t.servicesTitle}</h2>
          </SectionHeaderItem>
          <SectionHeaderItem>
            <p className="mt-3.5 text-muted">{t.servicesText}</p>
          </SectionHeaderItem>
        </SectionHeaderReveal>
        <StaggerContainer className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" stagger={0.08}>
          {t.services.map((s, i) => {
            const Icon = serviceIcons[i];
            const color = serviceColors[i];
            return (
              <StaggerItem key={s.title}>
              <a
                href="#contact"
                className="vs-card group relative flex min-h-[280px] flex-col overflow-hidden p-7 no-underline transition duration-300 hover:-translate-y-1 hover:border-[color:var(--svc)]"
                style={{ ["--svc" as string]: color }}
              >
                <span
                  className="absolute inset-x-0 top-0 h-[2px] opacity-80"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                />
                <span
                  className="pointer-events-none absolute -right-3 -top-6 font-[family-name:var(--font-geist)] text-[88px] font-semibold leading-none tracking-[-4px] text-text/[0.04]"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="relative flex h-[52px] w-[52px] items-center justify-center rounded-2xl"
                  style={{ background: `${color}22`, outline: `1px solid ${color}44` }}
                >
                  <Icon className="h-[22px] w-[22px]" style={{ color }} />
                </span>
                <h3 className="relative mt-6 font-[family-name:var(--font-geist)] text-[22px] font-semibold tracking-[-0.4px] text-text">
                  {s.title}
                </h3>
                <p className="relative mt-2.5 flex-1 text-[14px] leading-relaxed text-muted">{s.d}</p>
                <span className="relative mt-6 inline-flex items-center gap-1.5 text-[13px] font-medium" style={{ color }}>
                  {t.more}
                  <ArrowUpRight className="h-3.5 w-3.5 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      <section className="vs-wrap flex flex-col items-center py-24 text-center">
        <SectionHeaderReveal className="flex flex-col items-center">
          <SectionHeaderItem>
            <p className="vs-label">{t.processLabel}</p>
          </SectionHeaderItem>
          <SectionHeaderItem>
            <h2 className="vs-h2 mt-3.5">{t.processTitle}</h2>
          </SectionHeaderItem>
        </SectionHeaderReveal>
        <ProcessTimeline steps={t.processSteps} />
      </section>
      </div>

      <section id="portfolio" className="vs-wrap scroll-mt-[76px] py-24">
        <SectionHeaderReveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionHeaderItem>
            <p className="vs-label">{t.portfolioLabel}</p>
          </SectionHeaderItem>
          <SectionHeaderItem>
            <h2 className="vs-h2 mt-3.5">{t.portfolioTitle}</h2>
          </SectionHeaderItem>
        </SectionHeaderReveal>
        <Reveal y={16}>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`vs-filter ${filter === f ? "is-on" : ""}`}
            >
              {f}
            </button>
          ))}
        </div>
        </Reveal>
        <StaggerContainer
          key={filter}
          className={bento ? "vs-bento mt-8" : "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"}
          stagger={0.07}
        >
          {visible.map((p, i) => (
            <StaggerItem key={p.name} className={`h-full min-h-0 ${bento ? (bentoCells[i] ?? "") : ""}`}>
              <ProjectCard p={p} view={t.viewProject} size={projectSize(i, bento)} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section id="technologies" className="vs-wrap scroll-mt-[76px] py-24">
        <SectionHeaderReveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionHeaderItem>
            <p className="vs-label">{t.techLabel}</p>
          </SectionHeaderItem>
          <SectionHeaderItem>
            <h2 className="vs-h2 mt-3.5">{t.techTitle}</h2>
          </SectionHeaderItem>
        </SectionHeaderReveal>
        <StaggerContainer className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" stagger={0.04}>
          {techs.map((tech) => (
            <StaggerItem key={tech.name}>
            <article
              className="vs-card flex min-h-[132px] flex-col items-center justify-center gap-3 px-3 py-6 transition duration-300 hover:-translate-y-1"
            >
              <img
                src={tech.src}
                alt=""
                width={40}
                height={40}
                className={`h-10 w-10 object-contain ${tech.onDark ? "light:invert" : ""}`}
              />
              <p className="text-center text-[13px] font-medium text-muted">{tech.name}</p>
            </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <div id="about" className="scroll-mt-[76px]">
      <section className="vs-wrap py-24">
        <SectionHeaderReveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionHeaderItem>
            <p className="vs-label">{t.aboutLabel}</p>
          </SectionHeaderItem>
          <SectionHeaderItem>
            <h2 className="vs-h2 mt-3.5">{t.aboutTitle}</h2>
          </SectionHeaderItem>
          <SectionHeaderItem>
            <p className="mt-5 text-muted">{t.aboutText}</p>
          </SectionHeaderItem>
          <SectionHeaderItem>
            <a href="#contact" className="vs-btn vs-btn-primary mt-6">
              {t.cta} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </SectionHeaderItem>
        </SectionHeaderReveal>
        <StaggerContainer className="mx-auto mt-12 grid max-w-3xl gap-3" stagger={0.08}>
          {advantages.map(([n, title, d]) => (
            <StaggerItem key={n}>
            <article className="vs-card flex gap-5 p-[22px] transition duration-300 hover:-translate-y-0.5">
              <span className="font-mono text-[13px] text-accent-soft">{n}</span>
              <div>
                <h3 className="font-[family-name:var(--font-geist)] text-lg font-semibold">{title}</h3>
                <p className="mt-1.5 text-sm text-muted">{d}</p>
              </div>
            </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="relative py-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent" />
        <div className="vs-wrap relative">
          <Reveal>
            <h2 className="text-center font-[family-name:var(--font-geist)] text-[32px] font-semibold tracking-tight">{t.statsTitle}</h2>
          </Reveal>
          <StaggerContainer className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5" stagger={0.07}>
            {t.stats.map(([n, l]) => (
              <StaggerItem key={l}>
              <div className="vs-card rounded-[18px] p-6 text-center">
                <p className="font-[family-name:var(--font-geist)] text-[40px] font-semibold tracking-[-1.2px]">
                  {/^\d+/.test(n) && !n.includes("/") ? (
                    <Counter value={parseInt(n, 10)} suffix={n.replace(/^\d+/, "")} />
                  ) : (
                    n
                  )}
                </p>
                <p className="mt-2 text-[13px] text-muted">{l}</p>
              </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="vs-wrap py-24">
        <SectionHeaderReveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionHeaderItem>
            <p className="vs-label">{t.testiLabel}</p>
          </SectionHeaderItem>
          <SectionHeaderItem>
            <h2 className="vs-h2 mt-3.5">{t.testiTitle}</h2>
          </SectionHeaderItem>
        </SectionHeaderReveal>
        <StaggerContainer className="mt-10 flex gap-4 overflow-x-auto pb-2" stagger={0.08}>
          {quotes.map(([ini, name, role, q]) => (
            <StaggerItem key={name} className="min-w-[280px] flex-1">
            <article className="vs-card h-full space-y-5 p-6 transition duration-300 hover:-translate-y-0.5">
              <svg className="h-5 w-5 text-accent-soft" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 7h4v10H5V11c0-2.2.8-3.5 2-4zm10 0h4v10h-6V11c0-2.2.8-3.5 2-4z" />
              </svg>
              <p className="text-[15px] leading-relaxed">“{q}”</p>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/20 font-mono text-[11px] text-accent-soft">
                  {ini}
                </span>
                <div>
                  <p className="text-sm font-semibold">{name}</p>
                  <p className="text-xs text-muted">{role}</p>
                </div>
              </div>
            </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="vs-wrap scroll-mt-24 py-24">
        <SectionHeaderReveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionHeaderItem>
            <p className="vs-label">{t.faqLabel}</p>
          </SectionHeaderItem>
          <SectionHeaderItem>
            <h2 className="vs-h2 mt-3.5">{t.faqTitle}</h2>
          </SectionHeaderItem>
          <SectionHeaderItem>
            <p className="mt-4 text-muted">{t.faqText}</p>
          </SectionHeaderItem>
        </SectionHeaderReveal>
        <StaggerContainer className="mx-auto mt-10 max-w-3xl space-y-2" stagger={0.05}>
          {faqs.map(([q, a], i) => {
            const open = openFaq === i;
            return (
              <StaggerItem key={q}>
              <div
                className={`vs-card overflow-hidden rounded-2xl transition-colors ${open ? "bg-glass" : "bg-transparent"}`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(open ? -1 : i)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left"
                  aria-expanded={open}
                >
                  <span className="font-[family-name:var(--font-geist)] text-[15px] font-semibold">{q}</span>
                  <ChevronDown
                    className={`mt-0.5 h-4 w-4 shrink-0 text-muted transition-transform duration-300 ${open ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>
      </div>

      <div id="contact" className="min-w-0 scroll-mt-[76px]">
      <section className="relative overflow-hidden px-5 py-24 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 blur-[80px]" />
        <Reveal>
          <h2 className="vs-h2 relative mx-auto max-w-[900px]">{t.bandTitle}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="relative mx-auto mt-4 max-w-[640px] text-[17px] text-muted">{t.bandText}</p>
        </Reveal>
        <Reveal delay={0.18}>
        <div className="relative mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#contact" className="vs-btn vs-btn-primary">
            {t.cta} <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a href="#contact" className="vs-btn vs-btn-ghost">
            {t.contactCta}
          </a>
        </div>
        </Reveal>
      </section>

      <ContactBlock locale={locale} />
      </div>

      <footer className="border-t border-line">
        <div className="vs-wrap flex flex-col gap-10 py-12 lg:flex-row lg:justify-between">
          <Reveal>
          <div className="max-w-[280px]">
            <div className="flex items-center gap-2.5">
              <LogoMark size={24} />
              <Wordmark />
            </div>
            <p className="mt-3.5 text-sm leading-relaxed text-muted">{t.footerTag}</p>
          </div>
          </Reveal>
          <Reveal delay={0.08} className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-16">
            <div>
              <p className="text-sm font-semibold">Kompaniya</p>
              <ul className="mt-3 space-y-2 text-[13px] text-muted">
                {["Biz haqimizda", "Portfolio", "Karera", "Blog"].map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold">Xizmatlar</p>
              <ul className="mt-3 space-y-2 text-[13px] text-muted">
                {["Web development", "Mobile development", "UI/UX", "Automation", "AI"].map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold">Aloqa</p>
              <ul className="mt-3 space-y-2 text-[13px] text-muted">
                <li>+998 93 190 80 97</li>
                <li className="break-all">akhmadov0770@gmail.com</li>
                <li>@vitasoft</li>
              </ul>
            </div>
          </Reveal>
        </div>
        <div className="vs-wrap flex flex-col gap-3 pb-8 text-xs text-faint sm:flex-row sm:justify-between">
          <p>{t.footerCopy}</p>
          <p className="flex gap-5">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
