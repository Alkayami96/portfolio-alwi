"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    description: string;
    thumbnailUrl: string;
  };
  onClick: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative rounded-3xl overflow-hidden bg-zinc-900/40 border border-white/10 backdrop-blur-md hover:bg-zinc-900/80 hover:border-white/20 transition-all duration-500 cursor-pointer flex flex-col justify-between shadow-xl hover:shadow-2xl hover:-translate-y-1"
    >
      {/* Gambar Thumbnail & Badge Kategori */}
      <div className="relative w-full h-52 sm:h-56 overflow-hidden bg-zinc-950">
        <Image
          src={project.thumbnailUrl}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Overlay Gradient Halus */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />

        {/* Category Pill Tag (Pojok Kiri Atas Gambar) */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-[11px] font-mono tracking-wider uppercase rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-zinc-300">
            {project.category}
          </span>
        </div>

        {/* Arrow Button Icon (Pojok Kanan Atas Gambar) */}
        <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-black group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-lg">
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Konten Teks Kartu */}
      <div className="p-6 flex flex-col justify-between flex-1 space-y-2">
        <div>
          {/* Judul Project (Diubah dari text-zinc-950 ke text-white) */}
          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
            {project.title}
          </h3>
          <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-2 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Footer Kecil: Action Text */}
        <div className="pt-4 flex items-center text-xs font-mono text-zinc-500 group-hover:text-zinc-300 transition-colors">
          <span>Lihat Detail Project</span>
        </div>
      </div>
    </div>
  );
}