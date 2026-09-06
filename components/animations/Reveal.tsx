"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  DURATION,
  EASE_OUT,
  STAGGER,
  VIEWPORT,
  fadeInVariants,
  scaleInVariants,
  slideUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
  reducedMotionVariants,
} from "@/lib/motion";
import { useReducedMotion } from "@/components/animations/useReducedMotion";

const MotionH1 = motion.h1;
const MotionH2 = motion.h2;

type MotionDivProps = HTMLMotionProps<"div">;

interface RevealProps extends MotionDivProps {
  delay?: number;
  y?: number;
  duration?: number;
}

/** Default scroll reveal — opacity + y */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 35,
  duration = DURATION.reveal,
  ...props
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.2 }}
        className={className}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, delay, ease: EASE_OUT }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({
  children,
  className,
  delay = 0,
  ...props
}: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      custom={delay}
      variants={reduced ? reducedMotionVariants : fadeInVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SlideUp({
  children,
  className,
  ...props
}: Omit<RevealProps, "delay" | "y">) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={reduced ? reducedMotionVariants : slideUpVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({
  children,
  className,
  ...props
}: Omit<RevealProps, "delay" | "y">) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={reduced ? reducedMotionVariants : scaleInVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  stagger = STAGGER.normal,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
} & MotionDivProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      custom={stagger}
      variants={
        reduced
          ? { hidden: {}, visible: { transition: { staggerChildren: 0 } } }
          : staggerContainerVariants
      }
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & MotionDivProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={reduced ? reducedMotionVariants : staggerItemVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

const lineChildVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.hero, ease: EASE_OUT },
  },
};

/** Hero title — line by line reveal on load */
export function LineReveal({
  lines,
  className,
  as: Tag = "h1",
  lineClassName,
}: {
  lines: readonly React.ReactNode[];
  className?: string;
  as?: "h1" | "h2";
  lineClassName?: string;
}) {
  const reduced = useReducedMotion();
  const Component = Tag === "h2" ? MotionH2 : MotionH1;

  if (reduced) {
    return (
      <Component className={className}>
        {lines.map((line, i) => (
          <span key={i} className={cn("block whitespace-nowrap", lineClassName)}>
            {line}
          </span>
        ))}
      </Component>
    );
  }

  return (
    <Component
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: STAGGER.tight, delayChildren: 0.12 },
        },
      }}
    >
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.22em] -mb-[0.08em]">
          <motion.span className={cn("block whitespace-nowrap", lineClassName)} variants={lineChildVariants}>
            {line}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}

/** Section header stagger: label → title → description */
export function SectionHeaderReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <StaggerContainer stagger={STAGGER.section} className={className}>
      {children}
    </StaggerContainer>
  );
}

export function SectionHeaderItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <StaggerItem className={className}>{children}</StaggerItem>;
}

// Backward-compatible aliases
export const FadeUp = Reveal;

export function TextReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Reveal y={40} duration={DURATION.hero} className={cn("overflow-hidden", className)}>
      {children}
    </Reveal>
  );
}
