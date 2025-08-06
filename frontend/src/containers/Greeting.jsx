import HeroPic from "../assets/images/Background.png";
export default function Greeting({ setShowTwin }) {
  return (
    <div className="flex flex-col font-sans text-gray-800">
      {/* Hero Section */}
      <section className="flex  bg-white items-center text-center  text-white">
        <img className="w-100 mx-8" src={HeroPic} alt="orange with stem and leaf on a white-gray background"></img>
        <div className="my-4 p-4 bg-slate-300 rounded-md shadow-md w-1/2 text-center">
          <h1 className="text-4xl  text-black font-bold mb-4">Hi, I'm <span className="text-orange-600">Wen Liu</span></h1>
          <p className="text-gray-700  text-left text-xl font-serif text-clamp-2">
            Aspiring computer vision engineer with a background in design, engineering, and 3D modeling, currently transitioning into AI and visual computing. I hold a Master’s degree in Computer Science (<span className="italic">GPA 4.0</span>), where I focused on computer vision, machine learning, and real-world AI applications.
            <br />Before entering tech, I worked for over 10 years in landscape design and engineering visualization. This experience shaped my ability to break down visual and spatial problems — a skill I now apply to image-based AI systems.
            <br />I’m actively seeking opportunities to grow as a computer vision engineer, with a strong interest in embedded AI, visual intelligence, and robotics.
          </p>
          <button
          onClick={() => setShowTwin(true)}
          className="mt-8 bg-white text-indigo-600 uppercase font-semibold py-2 px-4 rounded-lg hover:bg-indigo-100 hover:text-orange-500 transition cursor-pointer"
          >
          Ask My AI Twin →
          </button>
        </div>
      </section>
    </div>
  );
}