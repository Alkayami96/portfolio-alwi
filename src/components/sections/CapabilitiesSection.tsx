"use client";

import { Palette, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import {
  staggerContainer,
  fadeInUp,
  viewportConfig,
} from "@/constants/animations";

const capabilities = [
  {
    icon: Palette,
    title: "Desain Visual",
    description:
      "Pengolahan tata letak visual berestetika bersih dengan perhatian tinggi pada tipografi, kontras warna, dan keseimbangan elemen.",
  },
  {
    icon: Code2,
    title: "Pengembangan Frontend",
    description:
      "Membangun UI yang responsif dan performant menggunakan Next.js, React, dan Tailwind CSS.",
  },
  {
    icon: Sparkles,
    title: "Animasi Interaktif",
    description:
      "Framer Motion dan efek glassmorphism untuk animasi yang halus serta merespons sentuhan pengguna.",
  },
];

export function CapabilitiesSection() {
  return (
    <motion.section
      id="capabilities"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={viewportConfig}
      variants={staggerContainer}
      className="py-20 sm:py-28 bg-black text-white relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <motion.div variants={fadeInUp} className="space-y-2 mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
            Capabilities / Skills
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
            Kemampuan Utama
          </h2>
          <p className="text-sm text-zinc-400 max-w-md">
            Fokus keahlian yang saya terapkan dalam mengeksekusi setiap proyek web.
          </p>
        </motion.div>

        {/* Grid Kartu Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {capabilities.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/10 backdrop-blur-md hover:bg-zinc-900/80 hover:border-white/20 flex flex-col justify-between space-y-6 shadow-xl"
              >
                {/* Container Ikon */}
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-black group-hover:bg-white group-hover:border-white transition-colors duration-300 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Teks Judul & Deskripsi */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </motion.section>
  );
}