"use client";

import { useState } from "react";
import { motion, useSpring } from "framer-motion"; // 1. Import motion & useSpring
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ProjectDetailModal } from "@/components/ui/ProjectDetailModal";
import { Footer } from "@/components/layout/Footer";
import { staticProjects } from "@/data/staticProjects";

export default function Home() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // 2. Inisialisasi posisi kursor global
  const cursorX = useSpring(0, { stiffness: 80, damping: 25 });
  const cursorY = useSpring(0, { stiffness: 80, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
    cursorX.set(e.clientX - 175); // Half size dari 350px agar kursor di tengah
    cursorY.set(e.clientY - 175);
  };

  // Cari data proyek utuh berdasarkan ID yang dipilih
  const selectedProject = staticProjects.find(
    (p) => p.id === selectedProjectId
  );

  return (
    // 3. Tambahkan onMouseMove dan relative overflow-hidden di tag pembungkus utama
    <div 
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-hidden"
    >
      {/* 4. Global Interactive Spotlight Glow */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        className="fixed top-0 left-0 w-[350px] h-[350px] bg-white/[0.1] rounded-full blur-3xl pointer-events-none z-30"
      />

      <Navbar />
      <HeroSection />
      
      {/* Salurkan fungsi click ke SelectedWorkSection */}
      <SelectedWorkSection onSelectProject={(id) => setSelectedProjectId(id)} />
      
      <CapabilitiesSection />
      <ContactSection />
      <Footer />

      {/* Tampilkan modal hanya jika ada project yang dipilih */}
      {selectedProject && (
        <ProjectDetailModal 
          project={selectedProject} 
          onClose={() => setSelectedProjectId(null)} 
        />
      )}
    </div>
  );
}