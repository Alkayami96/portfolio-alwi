"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeInUp,
  viewportConfig,
} from "@/constants/animations";

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function TiktokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 1 1-2.896-2.892c.383 0 .749.076 1.084.212V9.458a6.29 6.29 0 0 0-1.084-.094 6.34 6.34 0 1 0 6.338 6.338V8.71a8.217 8.217 0 0 0 4.773 1.516V6.782a4.79 4.79 0 0 1-.998-.096z" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={viewportConfig}
      variants={staggerContainer}
      className="relative py-20 sm:py-28 w-full bg-zinc-950 text-white overflow-hidden flex flex-col items-center justify-center border-t border-white/10"
    >
      {/* Garis Accent Top Divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Background Glow Effect */}
      <motion.div
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-white rounded-full blur-3xl pointer-events-none"
      />

      {/* Kartu Kaca Melayang (Glassmorphism) */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          variants={fadeInUp}
          className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-white/[0.04] border border-white/15 backdrop-blur-2xl p-8 sm:p-14 md:p-16 shadow-[0_10px_40px_rgba(0,0,0,0.8)] text-center flex flex-col items-center justify-center gap-6 sm:gap-8"
        >
          {/* Tag Kategori Section */}
          <motion.span
            variants={fadeInUp}
            className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-zinc-400 px-3 py-1 rounded-full bg-white/5 border border-white/10"
          >
            Kontak
          </motion.span>

          {/* Heading & Subtitle */}
          <motion.div variants={fadeInUp} className="space-y-3 sm:space-y-4 max-w-2xl">
            <h2 className="text-2xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-tight">
              PUNYA IDE PROYEK?
            </h2>
            <p className="text-zinc-400 text-xs sm:text-base leading-relaxed">
              Mari berkolaborasi untuk menciptakan karya web yang bersih,
              modern, dan berdampak positif bagi semua orang.
            </p>
          </motion.div>

          {/* Tombol Kontak Utama */}
          <motion.a
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            href="mailto:alwi.alkautsar@gmail.com"
            className="px-7 py-3 rounded-full bg-white text-black font-semibold text-xs sm:text-sm hover:bg-zinc-200 transition-colors shadow-xl flex items-center gap-2 group"
          >
            <span>Hubungi Saya</span>
          </motion.a>

          {/* Profile Tag & Ikon Sosmed */}
          <motion.div variants={fadeInUp} className="pt-2 flex flex-wrap sm:flex-nowrap items-center justify-center gap-2.5 sm:gap-3.5 w-full">
            {/* Profile Tag */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-black/70 border border-white/10 backdrop-blur-md text-white shadow-lg text-xs font-semibold"
            >
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden bg-zinc-800 border border-white/20">
                <Image
                  src="/profile.png"
                  alt="Alwi Alkautsar"
                  fill
                  className="object-cover"
                />
              </div>
              <a
                href="https://linkedin.com/in/alwi-alkautsar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Alwi Alkautsar</span>
              </a>
            </motion.div>

            {/* Container Ikon Sosmed */}
            <div className="flex items-center gap-2">
              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 sm:p-3 rounded-full border border-white/10 bg-black/70 backdrop-blur-md text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-colors shadow-xl"
              >
                <FacebookIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 sm:p-3 rounded-full border border-white/10 bg-black/70 backdrop-blur-md text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-colors shadow-xl"
              >
                <InstagramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2.5 sm:p-3 rounded-full border border-white/10 bg-black/70 backdrop-blur-md text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-colors shadow-xl"
              >
                <TiktokIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}