"use client";

import { useEffect, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [mode, setMode] = useState<"default" | "expand" | "label">("default");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    const onMove = (event: PointerEvent) => {
      setPos({ x: event.clientX, y: event.clientY });
      const target = event.target as HTMLElement | null;
      if (target?.closest("[data-cursor='view']")) {
        setMode("label");
      } else if (target?.closest("a, button")) {
        setMode("expand");
      } else {
        setMode("default");
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      className={`custom-cursor ${mode === "expand" ? "custom-cursor-expand" : ""} ${
        mode === "label" ? "custom-cursor-label" : ""
      }`}
      style={{ left: pos.x, top: pos.y }}
    >
      {mode === "label" ? "View project →" : null}
    </div>
  );
}
