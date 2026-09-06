"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Code,
  FlaskConical,
  LifeBuoy,
  List,
  PenTool,
  Rocket,
} from "lucide-react";

const icons = [ClipboardCheck, List, PenTool, Code, FlaskConical, Rocket, LifeBuoy];

export function ProcessTimeline({ steps }: { steps: readonly { title: string; d: string }[] }) {
  const [active, setActive] = useState(0);
  const [fill, setFill] = useState(32);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const update = () => {
      const line = window.innerHeight * 0.42;
      let next = 0;
      itemsRef.current.forEach((el, i) => {
        if (!el) return;
        if (el.getBoundingClientRect().top < line) next = i;
      });
      setActive(next);
      const first = itemsRef.current[0];
      const current = itemsRef.current[next];
      if (first && current) {
        setFill(current.offsetTop - first.offsetTop + 32);
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <ol className="relative mx-auto mt-14 w-full max-w-[920px] list-none pl-10 text-left sm:pl-16">
      <span className="absolute bottom-8 left-[15px] top-8 w-px bg-line sm:left-[19px]" aria-hidden />
      <span
        className="absolute left-[15px] top-8 w-px bg-accent transition-[height] duration-300 ease-out sm:left-[19px]"
        style={{ height: fill }}
        aria-hidden
      />

      {steps.map((step, i) => {
        const Icon = icons[i];
        const on = i <= active;
        const current = i === active;
        return (
          <li
            key={step.title}
            ref={(el) => {
              itemsRef.current[i] = el;
            }}
            className="relative pb-8 last:pb-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
            <span
              className={`absolute -left-10 top-6 flex h-8 w-8 items-center justify-center rounded-full border bg-bg transition duration-300 sm:-left-14 sm:h-10 sm:w-10 ${
                on ? "border-accent text-accent" : "border-line text-faint"
              } ${current ? "shadow-[0_0_0_6px_color-mix(in_srgb,var(--accent)_22%,transparent)]" : ""}`}
            >
              <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </span>
            <article
              className={`vs-card min-h-[168px] px-7 py-7 transition duration-500 sm:px-9 sm:py-8 ${
                current ? "border-accent/50 bg-glass" : on ? "border-line-strong" : ""
              }`}
            >
              <p className={`font-mono text-[13px] ${on ? "text-accent-soft" : "text-faint"}`}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className={`mt-3.5 h-px ${on ? "bg-line-strong" : "bg-line"}`} />
              <h3 className="mt-4 font-[family-name:var(--font-geist)] text-xl font-semibold sm:text-[22px]">
                {step.title}
              </h3>
              <p className="mt-2.5 max-w-[52ch] text-[15px] leading-relaxed text-muted">{step.d}</p>
            </article>
            </motion.div>
          </li>
        );
      })}
    </ol>
  );
}
