"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mode, setMode] = useState<"default" | "expand" | "view">("default");
  const [on, setOn] = useState(false);
  const x = useSpring(-80, { stiffness: 380, damping: 32, mass: 0.35 });
  const y = useSpring(-80, { stiffness: 380, damping: 32, mass: 0.35 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setOn(true);
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement | null;
      if (el?.closest("[data-cursor=view]")) setMode("view");
      else if (el?.closest("a,button")) setMode("expand");
      else setMode("default");
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);

  if (!on) return null;
  return (
    <motion.div className={`custom-cursor ${mode}`} style={{ left: x, top: y }}>
      {mode === "view" ? "View project →" : null}
    </motion.div>
  );
}
