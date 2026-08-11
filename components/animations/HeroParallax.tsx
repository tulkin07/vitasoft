"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import { useIsDesktop, useReducedMotion } from "@/components/animations/useReducedMotion";

export function HeroParallax({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const isDesktop = useIsDesktop();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  useEffect(() => {
    if (reduced || !isDesktop) return;

    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      x.set(dx * 12);
      y.set(dy * 10);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduced, isDesktop, x, y]);

  if (reduced || !isDesktop) {
    return <>{children}</>;
  }

  return (
    <motion.div style={{ x: springX, y: springY }} className="will-change-transform">
      {children}
    </motion.div>
  );
}
