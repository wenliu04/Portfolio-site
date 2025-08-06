
export default function EducationCard({ school, degree, years, details }) {
  return (
    <div className="border-l-20 border-blue-500/80 pl-4">
      <h3 className="text-2xl mb-2 font-semibold">{school}</h3>
      <p className="italic">
        {degree} &middot; {years}
      </p>
      <p className="text-lg mt-2">{details}</p>
    </div>
  );
}
