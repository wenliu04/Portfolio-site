export default function SectionLandscape() {
  const projects = [
    {
      title: "Desert Backyard Oasis",
      image: "/images/desert-backyard.png",
      description:
        "A 40ft x 100ft Las Vegas backyard redesigned with drought-tolerant plants, 3D visualized outdoor kitchen, firepit, and pool.",
      skills: ["AutoCAD", "SketchUp", "Planting Design", "3D Modeling"],
      github: "https://github.com/yourname/desert-backyard"
    },
    {
      title: "Campus Green Infrastructure Plan",
      image: "/images/green-campus.png",
      description:
        "Sustainable landscape plan integrating stormwater management and native species for a university campus.",
      skills: ["GIS", "Hydrology", "Ecological Design"],
      github: "https://github.com/yourname/green-campus"
    },
    {
      title: "AI Plant Selector Tool",
      image: "/images/plant-selector.png",
      description:
        "Developed a machine-learning based tool that recommends suitable plants by region, using a custom-trained PlantCV model.",
      skills: ["AI", "PlantCV", "Jetson Nano", "Python"],
      github: "https://github.com/yourname/plant-selector"
    }
  ];

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-6">Landscape Design Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-xl transition-shadow"
          >
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-white">
                {project.skills.map((skill, index) => (
                  <span key={index} className="bg-green-600 px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                className="text-blue-500 text-sm underline mt-2 inline-block"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}