"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/components/animations/useReducedMotion";

interface CounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export function Counter({ value, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  const reduced = useReducedMotion();
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const motionValue = useMotionValue(value);
  const springValue = useSpring(motionValue, {
    stiffness: 80,
    damping: 20,
    mass: 0.6,
  });
  const [display, setDisplay] = useState(String(value));

  useEffect(() => {
    if (reduced) return;
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.round(latest).toString());
    });
    return unsubscribe;
  }, [springValue, reduced]);

  useEffect(() => {
    if (reduced || !isInView || started.current) return;
    started.current = true;
    motionValue.set(0);
    motionValue.set(value);
  }, [isInView, motionValue, value, reduced]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
