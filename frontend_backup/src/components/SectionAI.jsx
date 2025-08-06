export default function SectionAI() {
  const projects = [
    {
      title: "Gesture Recognition with CNN",
      description: "Built a real-time hand gesture recognition system using MediaPipe and PyTorch, deployed on NVIDIA Jetson.",
      tech: ["Python", "PyTorch", "MediaPipe", "NVIDIA Jetson"],
      image: "/images/gesture.jpg",
      link: "https://github.com/yourrepo/gesture-recognition"
    },
    {
      title: "RAG-based Question Answering",
      description: "Implemented a Retrieval-Augmented Generation system using DPR and GPT2 for domain-specific QA.",
      tech: ["Transformers", "DPR", "GPT-2", "RAG"],
      image: "/images/rag.jpg",
      link: "https://github.com/yourrepo/rag-qa"
    },
    {
      title: "Plant Recognition Platform",
      description: "Developed a PyTorch model and frontend UI to classify landscape plants using leaf images.",
      tech: ["PyTorch", "React", "OpenCV", "Django"],
      image: "/images/plant-ai.jpg",
      link: "https://github.com/yourrepo/plant-recognition"
    }
  ];

  return (
    <section className="py-10 px-4 py-8 max-w-6xl mx-auto-6">
      <h2 className="text-2xl font-bold mb-6 text-center">AI Developer Projects</h2>
      <div className="grid md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-white shadow-md rounded-xl overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{t}</span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block mt-4 text-sm text-blue-600 underline"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
