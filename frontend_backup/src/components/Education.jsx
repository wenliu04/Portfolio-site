export default function Education() {
  const schools = [
    {
      school: "University of Georgia",
      degree: "Master of Landscape Architecture",
      years: "2009 – 2012",
      details: "Specialized in environmental design, visualization, and sustainable development."
    },
    {
      school: "University of XYZ",
      degree: "Master of Computer Science (AI)",
      years: "2023 – 2024",
      details: "Focused on computer vision, deep learning, and real-world AI deployment."
    }
  ];

  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-8">
          {schools.map((edu, idx) => (
            <div key={idx} className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold">{edu.school}</h3>
              <p className="italic">{edu.degree} &middot; {edu.years}</p>
              <p className="text-sm mt-2">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
