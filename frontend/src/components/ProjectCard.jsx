// components/ProjectCard.jsx
export default function ProjectCard({ project, onClick, onHover, onLeave }) {
  return (
    
    <div 
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="bg-white pb-5 border-blue-400 hover:shadow-[4px_4px_0_4px_blue]/20 rounded-xl" >
       
      <img src={project.image} alt={project.title} className="w-full h-48 opacity-70 rounded-xl hover:opacity-100" />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-3">{project.title}</h3>
        <p className="text-sm text-gray-600">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((t) => (
            <span key={t} className="text-xs bg-blue-400/50 text-black-800 px-2 py-1 rounded">{t}</span>
          ))}
        </div>
        {project.link && (
          <a href={project.link} target="_blank" className="inline-block mt-4 text-sm text-blue-600 underline">
            View Project
          </a>
        )}
      </div>
    </div>
  );
}
