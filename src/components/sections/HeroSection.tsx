"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

// 1. Parent Container (Mengatur timing masuk bertahap)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Jeda antar elemen anak saat muncul
      delayChildren: 0.1,
    },
  },
};

// 2. Elemen Teks, Tombol, & Icon (Fade Up + Slide)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 }, // Mulai dari agak turun & transparan
  visible: {
    opacity: 1,
    y: 0, // Kembali ke posisi asli & padat
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// 3. Foto Profil Entrance (Scale Up + Fade In)
const profileVariants: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

// Custom SVG Icons untuk Sosial Media
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

// Tech Stack SVG Icons
function NextjsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 180 180">
      <mask id="mask-next" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <rect width="180" height="180" fill="#fff" />
      </mask>
      <path d="M149.237 159.424L76.628 53.6H60V126.4H73.344V72.584L137.896 166.76C141.872 164.552 145.656 162.104 149.237 159.424Z" fill="currentColor" />
      <path d="M119.2 53.6H132.544V126.4H119.2V53.6Z" fill="currentColor" />
    </svg>
  );
}

function ReactIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`${className} text-zinc-400 hover:text-cyan-400 transition-colors`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <g stroke="currentColor">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

function TailwindIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current text-zinc-400 hover:text-sky-400 transition-colors`} viewBox="0 0 24 24">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
    </svg>
  );
}

function TypescriptIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current text-zinc-400 hover:text-blue-500 transition-colors`} viewBox="0 0 24 24">
      <path d="M1.125 0C.507 0 0 .507 0 1.125v21.75C0 23.493.507 24 1.125 24h21.75c.618 0 1.125-.507 1.125-1.125V1.125C24 .507 23.493 0 22.875 0H1.125zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-1.389-.306c-.361-.037-.694.009-.999.139-.306.13-.537.333-.695.611-.157.278-.236.63-.236 1.056 0 .333.056.611.167.833.111.222.287.417.528.583.24.167.555.333.944.5 1.056.444 1.833.926 2.333 1.444.5.519.75 1.232.75 2.139 0 .806-.213 1.51-.639 2.111-.426.602-1.028 1.056-1.806 1.361-.778.306-1.694.458-2.75.458-.806 0-1.583-.083-2.333-.25a8.777 8.777 0 0 1-1.917-.667v-2.611c.694.444 1.417.778 2.167 1 .75.222 1.472.333 2.166.333.528 0 .954-.083 1.278-.25.324-.167.555-.389.694-.667.139-.278.208-.583.208-.917 0-.361-.065-.658-.194-.889-.13-.231-.324-.435-.583-.611-.259-.176-.611-.361-1.056-.556-.972-.417-1.694-.889-2.167-1.417-.472-.528-.708-1.222-.708-2.083 0-.75.204-1.417.611-2 .407-.583.981-1.028 1.722-1.333.741-.306 1.62-.458 2.639-.458zm-11.333.25h8.056v2.333H12.083v9.083H9.194V12.333H6.155V10c0 0 0 0 0 0z" />
    </svg>
  );
}

function CodeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={`${className} text-zinc-400 hover:text-purple-400 transition-colors`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" />
    </svg>
  );
}


export function HeroSection() {
 
  return (
    <section
      id="hero"
      
      className="relative min-h-[100dvh] w-full bg-black text-white overflow-hidden pt-20 md:pt-28 pb-8 md:pb-12 flex flex-col justify-between"
    >
      <motion.div
      variants={containerVariants}
  initial="hidden"
  animate="visible"
  className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-between"
>
  
      {/* 1. KIRI ATAS: Tech Stack Icons (Desktop: Vertikal, Mobile: Horisontal di Bawah Teks Nama) */}
      <div className="max-w-7xl mx-auto w-full px-6 relative z-20 pointer-events-auto">
  <motion.aside
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }} 
    className="hidden md:flex flex-col gap-3 mt-12 md:mt-24 lg:mt-20 w-fit p-3 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl"
  >
    <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 text-center mb-1">
      Stack
    </span>
    <div className="flex flex-col gap-3 text-zinc-400">
      <motion.a 
        whileHover={{ scale: 1.2, y: -2 }} 
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        href="https://nextjs.org" target="_blank" rel="noopener noreferrer" title="Next.js" 
        className="p-2 rounded-xl hover:bg-white/10"
      >
        <NextjsIcon className="w-5 h-5" />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.2, y: -2 }} 
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        href="https://react.dev" target="_blank" rel="noopener noreferrer" title="React" 
        className="p-2 rounded-xl hover:bg-white/10"
      >
        <ReactIcon className="w-5 h-5" />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.2, y: -2 }} 
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" title="Tailwind CSS" 
        className="p-2 rounded-xl hover:bg-white/10"
      >
        <TailwindIcon className="w-5 h-5" />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.2, y: -2 }} 
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        href="https://typescriptlang.org" target="_blank" rel="noopener noreferrer" title="TypeScript" 
        className="p-2 rounded-xl hover:bg-white/10"
      >
        <TypescriptIcon className="w-5 h-5" />
      </motion.a>

      <motion.div 
        whileHover={{ scale: 1.2, y: -2 }} 
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        title="Vibe Coding / Cursor AI" 
        className="p-2 rounded-xl hover:bg-white/10 cursor-pointer"
      >
        <CodeIcon className="w-5 h-5" />
      </motion.div>
    </div>
  </motion.aside>

  {/* MOBILE HEADLINE */}
  <div className="md:hidden flex flex-col items-center text-center mt-2 space-y-2.5">
    <div className="space-y-0.5 backdrop-blur-xs p-3 rounded-2xl border border-white/5 w-full">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
        Alwi Alkautsar
      </h1>
      <p className="text-xs sm:text-sm font-medium text-zinc-300">
        Website Developer <span className="text-zinc-500">(Vibe Coding)</span>
      </p>
    </div>

    {/* Baris Ikon Tech Stack Horisontal Khusus Mobile */}
    <div className="flex items-center gap-3 px-4 py-1.5 bg-black/50 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
      <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
        <NextjsIcon className="w-3.5 h-3.5" />
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
        <ReactIcon className="w-3.5 h-3.5" />
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
        <TailwindIcon className="w-3.5 h-3.5" />
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
        <TypescriptIcon className="w-3.5 h-3.5" />
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
        <CodeIcon className="w-3.5 h-3.5" />
      </motion.div>
    </div>
  </div>
</div>

     {/* 2. TENGAH: Foto Profil & CSS Masking Gradient */}
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center z-0 pointer-events-none">
  {/* Ambient Glow */}
  <motion.div 
    animate={{ opacity: [0.02, 0.06, 0.02] }}
    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    className="absolute w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" 
  />

  {/* Wrapper Entrance & Floating Profile */}
  <motion.div 
    variants={profileVariants}
    initial="hidden"
    animate="visible"
    className="relative w-full h-full flex items-center justify-center"
  >
    <motion.div 
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="relative w-full max-w-[120vw] md:max-w-[80vw] h-[50vh] sm:h-[62vh] md:h-[82vh] pointer-events-auto"
    >
      <Image
        src="/profile.png"
        alt="Alwi Alkautsar"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 80vw"
        className="object-contain object-center filter contrast-105 translate-y-6 sm:translate-y-4 md:translate-y-0 scale-110 sm:scale-120 md:scale-105 [mask-image:linear-gradient(to_bottom,black_70%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_98%)]"
      />
    </motion.div>
  </motion.div>
</div>

      {/* 3. BAWAH: Tombol CTA di Kiri & Nama + Sosmed Bertumpuk di Kanan (Tablet & Desktop) */}
      <div className="max-w-7xl mx-auto w-full px-6 relative z-20 pointer-events-auto">
        <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between gap-6 pt-4 md:pt-8">
          
          {/* Kiri Bawah: Tombol CTA */}
          <motion.div variants={itemVariants} className="flex flex-row items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <motion.a
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href="#work"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white text-black text-xs sm:text-sm font-semibold hover:bg-zinc-200 transition-all shadow-xl flex items-center gap-1.5"
            >
              Lihat Project
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </motion.a>
            <motion.a
whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-white/20 bg-black/70 backdrop-blur-md text-white text-xs sm:text-sm font-semibold hover:bg-white/20 transition-all shadow-xl"
            >
              Hubungi Saya
            </motion.a>
          </motion.div>

          {/* Kanan Bawah: Teks Nama di Atas Ikon Sosmed (Desktop & Tablet) */}
          <div className="flex flex-col items-center sm:items-end gap-3">
            
            {/* Teks Nama & Role: Sejajar di depan lipatan tangan */}
            <motion.div variants={itemVariants} className="hidden md:block text-right space-y-1 bg-black/30 backdrop-blur-xs p-2 rounded-xl border border-white/5 sm:border-none">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-tight text-white uppercase leading-none">
                Alwi Alkautsar
              </h1>
              <p className="text-xs md:text-xs lg:text-sm font-medium text-zinc-400">
                Website Developer <span className="text-zinc-500">(Vibe Coding)</span>
              </p>
            </motion.div>

            {/* Ikon Sosial Media */}
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
              <motion.a
              whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.9 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 sm:p-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all shadow-xl"
              >
                <FacebookIcon />
              </motion.a>
              <motion.a

                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 sm:p-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all shadow-xl"
              >
                <InstagramIcon />
              </motion.a>
              <motion.a

                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2.5 sm:p-3 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all shadow-xl"
              >
                <TiktokIcon />
              </motion.a>
            </motion.div>

          </div>

        </div>
      </div>
      </motion.div>
    </section>
  );
}