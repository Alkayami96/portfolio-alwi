"use client";

import { useState } from "react";
import { motion } from "framer-motion"; // 1. Import motion
import { ProjectsGrid } from "@/components/ui/ProjectGrid";
import { staticProjects } from "@/data/staticProjects";
import {
  staggerContainer,
  fadeInUp,
  viewportConfig,
} from "@/constants/animations"; // 2. Import preset animasi

const categories = [
  { label: "Semua", value: "all" },
  { label: "Real Project", value: "Real Project" },
  { label: "Exploration", value: "Exploration" },
];

export function SelectedWorkSection({
  onSelectProject,
}: {
  onSelectProject: (id: string) => void;
}) {
  const [filter, setFilter] = useState("all");

  const projects =
    filter === "all"
      ? staticProjects
      : staticProjects.filter((p) => p.category === filter);

  return (
    // 3. Ubah <section> menjadi <motion.section> dengan animasi scroll in/out
    <motion.section
      id="work"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={viewportConfig}
      variants={staggerContainer}
      className="py-20 sm:py-28 bg-black text-white relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section: Animasi Fade Up */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16"
        >
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Selected Projects / 2026
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white uppercase">
              Project Terpilih
            </h2>
            <p className="text-sm text-zinc-400 max-w-md">
              Kumpulan project terbaik yang dirancang dengan performa tinggi dan
              tampilan modern.
            </p>
          </div>

          {/* Filter Pill Tabs Modern */}
          <div className="flex items-center gap-1.5 p-1 bg-zinc-900/60 backdrop-blur-md rounded-full border border-white/10 w-fit">
            {categories.map((cat) => {
              const isActive = filter === cat.value;
              return (
                <button
                  key={cat.value}
                  onClick={() => setFilter(cat.value)}
                  className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-white text-black font-semibold shadow-md"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Grid Card Project */}
        <motion.div variants={fadeInUp}>
          <ProjectsGrid
            projects={projects}
            onSelectProject={onSelectProject}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}