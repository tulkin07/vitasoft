/** VITA SOFT — consistent motion language */

export const EASE_OUT = [0.22, 1, 0.36, 1] as const;
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.25,
  normal: 0.5,
  reveal: 0.7,
  large: 0.9,
  hero: 0.8,
} as const;

export const STAGGER = {
  tight: 0.08,
  normal: 0.1,
  relaxed: 0.12,
  section: 0.15,
} as const;

export const VIEWPORT = { once: true, margin: "-80px" as const };

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.reveal, delay, ease: EASE_OUT },
  }),
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: DURATION.normal, delay, ease: EASE_OUT },
  }),
};

export const slideUpVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.reveal, ease: EASE_OUT },
  },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.reveal, ease: EASE_OUT },
  },
};

export const staggerContainerVariants = {
  hidden: {},
  visible: (stagger = STAGGER.normal) => ({
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  }),
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.reveal, ease: EASE_OUT },
  },
};

export const lineRevealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.hero,
      delay: i * STAGGER.tight,
      ease: EASE_OUT,
    },
  }),
};

export const heroVisualVariants = {
  hidden: { opacity: 0, scale: 0.94, x: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: DURATION.large, ease: EASE_OUT_EXPO, delay: 0.45 },
  },
};

export const portfolioCardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION.normal, ease: EASE_OUT },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    transition: { duration: 0.25, ease: EASE_OUT },
  },
};

export const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};
