

// containers/Education.jsx
import { education } from "../../portfolio";
import EducationCard from "../components/EducationCard";
import EducationImage from "../assets/images/Education.png";

export default function Education() {
  return (
    <section className="flex items-center justify-around ">
      <section className="flex flex-col justify-center m-4 p-5 rounded-lg bg-slate-300 w-2/3 text-gray-800">
        <div className="text-left px-2">
            <h2 className="text-3xl text-gray-500 font-bold mb-4 text-left">Education</h2>
            <div className="space-y-8">
            {education.map((edu, idx) => (
                <EducationCard key={idx} {...edu} />
            ))}
            </div>
        </div>
        </section>
        <img className="w-50 h-60 mr-12" src={EducationImage} alt="orange with stem and leaf on a white-gray background"></img>
    </section>
  );
}
