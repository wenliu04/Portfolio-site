
// SectionBackend.jsx

export default function SectionBackend() {
  const projects = [
    {
      title: "Restaurant Reservation API",
      image: "/images/reservation-api.png",
      description:
        "A full-featured RESTful API built with Django and DRF, supporting reservations, menu items, and user roles with JWT authentication.",
      skills: ["Django", "DRF", "JWT", "PostgreSQL"],
      github: "https://github.com/yourname/restaurant-api"
    },
    {
      title: "Credit Risk Scorecard",
      image: "/images/scorecard.png",
      description:
        "Implemented a credit scorecard system using SAS with logistic regression, WOE/IV transformation, and binning techniques for risk modeling.",
      skills: ["SAS", "WOE/IV", "Logistic Regression"],
      github: "https://github.com/yourname/scorecard-model"
    },
    {
      title: "Budget Tracking Dashboard",
      image: "/images/budget-dashboard.png",
      description:
        "A personal finance dashboard to categorize and visualize spending using Django backend and Chart.js frontend integration.",
      skills: ["Django", "Chart.js", "SQL", "Bootstrap"],
      github: "https://github.com/yourname/budget-dashboard"
    }
  ];

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold mb-6">Backend Engineer Projects</h2>
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
                  <span key={index} className="bg-blue-600 px-2 py-1 rounded">
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

