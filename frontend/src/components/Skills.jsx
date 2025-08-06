import { skillSets } from "../../portfolio"; // 确保路径正确



export default function SkillDisplay({ activeSection, highlightSkills = [] }) {
  const currentSkills = skillSets[activeSection];
  if (!currentSkills) return null;

  const normalize = (str) => str.toLowerCase().replace(/\s+/g, '');
  const isHighlighted = (name) =>
    highlightSkills.some((s) => normalize(s) === normalize(name));

  return (
    <section className="bg-slate-300 w-full px-12 py-6 rounded-lg shadow-md">
      <div className="flex flex-wrap justify-center gap-10">
        {Object.entries(currentSkills).map(([group, items]) => (
          <div key={group} className="w-full sm:w-auto">
            <h2 className="text-xl font-bold mb-2 text-center">{group}</h2>
            <div className="flex flex-row justify-center gap-3 flex-wrap">
              {items.map(({ name, icon, prefix, color }) => (
                <div
                  key={name}
                  className={`flex flex-col items-center w-20 transition-transform ${
                    isHighlighted(name) ? "hover:scale-110" : "opacity-40"
                  }`}
                >
                  <i className={`${prefix} ${icon} text-3xl ${isHighlighted(name) ? color : "text-gray-400"}`} />
                  <span className="text-sm text-center">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
