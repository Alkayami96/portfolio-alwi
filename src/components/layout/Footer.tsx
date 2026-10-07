"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeInUp,
  viewportConfig,
} from "@/constants/animations";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={viewportConfig}
      variants={staggerContainer}
      className="w-full bg-black text-white border-t border-white/10 py-8 relative z-10"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Sisi Kiri: Copyright */}
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-2 text-xs font-mono text-zinc-400"
        >
          <span className="text-white font-semibold">Alwi Alkautsar</span>
          <span>— Web Development.</span>
          <span>{new Date().getFullYear()}</span>
        </motion.div>

        {/* Sisi Kanan: Tombol Kembali ke Atas */}
        <motion.button
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-colors cursor-pointer group"
        >
          <span>Kembali ke atas</span>
          <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      </div>
    </motion.footer>
  );
}