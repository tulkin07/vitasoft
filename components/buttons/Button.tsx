"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/components/animations/useReducedMotion";

const MotionLink = motion.create(Link);
const MotionAnchor = motion.a;
const MotionButton = motion.button;

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
}

const motionProps = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.97 },
  transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const },
};

export function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
  type = "button",
  disabled,
  external,
}: ButtonProps) {
  const reduced = useReducedMotion();
  const hover = reduced ? {} : motionProps;

  const base =
    "group relative inline-flex items-center justify-center gap-2.5 font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary disabled:opacity-40 disabled:pointer-events-none";

  const variants = {
    primary: "btn-gold",
    gold: "btn-gold",
    secondary: "btn-secondary",
    ghost:
      "bg-transparent text-text-secondary hover:text-accent border border-transparent",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-sm",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      <span>{children}</span>
      {(variant === "primary" || variant === "gold") && (
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-[5px]" />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <MotionAnchor
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...hover}
        >
          {content}
        </MotionAnchor>
      );
    }
    return (
      <MotionLink
        href={href}
        className={classes}
        onClick={onClick}
        {...hover}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <MotionButton
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...hover}
    >
      {content}
    </MotionButton>
  );
}

export function ArrowLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-accent link-underline",
        className
      )}
    >
      {children}
      <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
