"use client";

import { ProjectCard } from "./ProjectCard";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnailUrl: string;
}

interface ProjectsGridProps {
  projects: Project[];
  onSelectProject: (projectId: string) => void;
}

export function ProjectsGrid({ projects, onSelectProject }: ProjectsGridProps) {
  if (projects.length === 0) {
    return (
      <div className="w-full py-20 text-center border border-dashed border-white/10 rounded-3xl bg-zinc-900/20">
        <p className="text-zinc-500 text-sm font-mono">
          Belum ada project untuk kategori ini.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onClick={() => onSelectProject(project.id)}
        />
      ))}
    </div>
  );
}