"use client";

import Image from "next/image";
import { X, ExternalLink, Layers } from "lucide-react";

interface ProjectDetailModalProps {
  project: {
    id: string;
    title: string;
    slug: string;
    category: string;
    description: string;
    thumbnailUrl: string;
    liveUrl: string;
    githubUrl: string;
    prdSummary: string;
    techStack: string[];
    featured: boolean;
    createdAt: Date;
    updatedAt: Date;
  };
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      
      {/* Overlay Click-to-Close */}
      <div className="absolute inset-0 z-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-950/95 border border-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl space-y-6 text-white">
        
        {/* Tombol Close Mencolok (Putih Bulat dengan Ikon Hitam) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 p-3 rounded-full bg-white text-black shadow-2xl hover:bg-zinc-200 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Gambar Preview Proyek */}
        <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 mt-2">
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
        </div>

        {/* Title & Category Badge */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-mono uppercase tracking-wider rounded-full bg-white/10 text-zinc-300 border border-white/10">
              {project.category}
            </span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase pr-12">
            {project.title}
          </h3>
        </div>

        {/* Info Grid: Tech Stack & Description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 border-t border-white/10">
          
          {/* Kolom Kiri & Tengah: Deskripsi & PRD */}
          <div className="md:col-span-2 space-y-4">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1">
                Tentang Project
              </h4>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {project.prdSummary && (
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-500 mb-1">
                  Ringkasan PRD
                </h4>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {project.prdSummary}
                </p>
              </div>
            )}
          </div>

          {/* Kolom Kanan: Tech Stack List */}
          <div className="space-y-3 bg-zinc-900/40 p-4 rounded-2xl border border-white/5 h-fit">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400">
              <Layers className="w-4 h-4 text-zinc-400" />
              <span>Tech Stack</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Action Button: Visit Website */}
        <div className="flex items-center pt-4 border-t border-white/10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs sm:text-sm font-semibold hover:bg-zinc-200 transition-all shadow-xl"
            >
              <span>Visit Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>

      </div>
    </div>
  );
}