import { useState } from "react";
import { projects } from "../../portfolio";
import SkillDisplay from "../components/Skills";
import ProjectCard from "../components/ProjectCard";
// This section displays backend-related projects

  export default function SectionLandscape() {
    return (
      <section className="bg-slate-200 py-5 px-4 w-full mx-auto-6">
        <h2 className="text-2xl text-center font-bold mb-6">Landscape Designer Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => p.category === "Landscape").map((project) => (
            <ProjectCard
                      key={project.title}
                      project={project}
                      onClick={() => onProjectSelect(project)}
                    />
          ))}
        </div>
      </section>
    );
  }