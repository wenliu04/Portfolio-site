const skillSets = {
  "AI Developer": {
    Languages: [
      { name: "Python", icon: "fa-python", color: "text-blue-500" },
      { name: "Clingo", icon: "fa-brain", color: "text-pink-500" },
    ],
    Frameworks: [
      { name: "PyTorch", icon: "fa-fire", color: "text-red-500" },
      { name: "TensorFlow", icon: "fa-brain", color: "text-orange-600" },
      { name: "MediaPipe", icon: "fa-video", color: "text-pink-600" },
    ],
    Tools: [
      { name: "Jupyter", icon: "fa-book", color: "text-orange-400" },
      { name: "Colab", icon: "fa-google", color: "text-yellow-500" },
    ],
  },
  "Backend Engineer": {
    Languages: [
      { name: "JavaScript", icon: "fa-js", color: "text-yellow-400" },
      { name: "SQL", icon: "fa-database", color: "text-green-600" },
    ],
    Frameworks: [
      { name: "Django", icon: "fa-python", color: "text-green-700" },
      { name: "PostgreSQL", icon: "fa-database", color: "text-indigo-700" },
    ],
    Tools: [
      { name: "Git", icon: "fa-git-alt", color: "text-red-600" },
      { name: "VS Code", icon: "fa-code", color: "text-blue-500" },
    ],
  },
  "Landscape Designer": {
    Languages: [
      { name: "HTML/CSS", icon: "fa-html5", color: "text-orange-500" },
    ],
    Tools: [
      { name: "Photoshop", icon: "fa-image", color: "text-blue-600" },
      { name: "SketchUp", icon: "fa-cube", color: "text-green-700" },
    ],
  },
};

export default function SkillDisplay({ activeSection }) {
  const currentSkills = skillSets[activeSection];

  if (!currentSkills) return null;

  return (
    <section className="py-10 px-6">
      {Object.entries(currentSkills).map(([group, items]) => (
        <div key={group} className="mb-8">
          <h2 className="text-xl font-bold mb-4">{group}</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {items.map(({ name, icon, color }) => (
              <div
                key={name}
                className="flex flex-col items-center w-20 hover:scale-105 transition-transform"
              >
                <i className={`fab ${icon} text-3xl mb-2 ${color}`}></i>
                <span className="text-sm text-center">{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
