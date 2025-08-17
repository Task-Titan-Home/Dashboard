// animations/variants.ts
export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.9], // Updated easing function
    },
  },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.9], // Corrected version
    },
  },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.01, 0.05, 0.9], // Corrected version
    },
  },
};

// Enhanced animation variants for professional feel
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

export const slideInFromBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, 0.01, 0.05, 0.9],
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.01, 0.05, 0.9],
    },
  },
};

export const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 3,
    ease: "easeInOut",
    repeat: Infinity,
  },
};

export const pulseGlow = {
  boxShadow: [
    "0 0 20px rgba(168, 85, 247, 0.4)",
    "0 0 60px rgba(168, 85, 247, 0.8)",
    "0 0 20px rgba(168, 85, 247, 0.4)",
  ],
  transition: {
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
  },
};