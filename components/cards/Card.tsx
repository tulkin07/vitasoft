"use client";

import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article";
  hover?: boolean;
}

export function Card({
  children,
  className,
  as: Tag = "div",
  hover = true,
}: CardProps) {
  return (
    <Tag
      className={cn(
        hover ? "card-premium" : "glass-card",
        "p-6 lg:p-7",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function CardNumber({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-display text-[0.6875rem] font-semibold tracking-[0.14em] text-accent">
      {children}
    </span>
  );
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-4 font-display text-base font-semibold leading-snug text-text-primary lg:text-[1.0625rem]">
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={cn("mt-2.5 text-sm leading-relaxed text-text-secondary", className)}>
      {children}
    </p>
  );
}

export function TagList({ tags }: { tags: readonly string[] }) {
  return (
    <div className="mt-5 flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className="glass-tag"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
