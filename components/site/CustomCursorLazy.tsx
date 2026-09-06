"use client";

import dynamic from "next/dynamic";

export const CustomCursor = dynamic(
  () => import("./CustomCursor").then((m) => m.CustomCursor),
  { ssr: false }
);
