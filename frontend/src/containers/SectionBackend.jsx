
// SectionBackend.jsx
import { useState } from "react";
import { projects } from "../../portfolio";
import ProjectCard from "../components/ProjectCard";
import SkillDisplay from "../components/Skills";

// This section displays backend-related projects

  export default function SectionBackend({ onProjectSelect, setHoveredProject }) {
    return (
      <section className="bg-slate-200 py-5 px-4 w-full mx-auto-6">
        <h2 className="text-2xl text-center font-bold mb-6">Full Stack Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => p.category === "Full Stack").map((project) => (
            <ProjectCard
                      key={project.title}
                      project={project}
                      onClick={() => onProjectSelect(project)}
                      onHover={() => setHoveredProject(project)}
                      onLeave={() => setHoveredProject(null)}
                    />
          ))}
        </div>
      </section>
    );
  }