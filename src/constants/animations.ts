import { Variants } from "framer-motion";

// 1. Config Viewport
export const viewportConfig = {
  once: false, // Set false agar animasi terpicu saat masuk DAN keluar
  amount: 0.2, // Pemicu aktif saat 20% section terlihat di layar
};

// 2. Container Variant (Stagger Effects)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1, // Animasi keluar secara terbalik
    },
  },
};

// 3. Item Variant (Fade Up + Exit Down)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: "easeIn",
    },
  },
};