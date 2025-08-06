import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionAI from "./components/SectionAI";
import SectionBackend from "./components/SectionBackend";
import SectionLandscape from "./components/SectionLandscape";
import SkillDisplay from "./components/Skills";
import Education from "./components/Education";
import DigitalTwinIntro from "./components/DigitalTwinIntro";
import DigitalTwinChat from './components/DigitalTwinChat';


function App() {
  const [showTwin, setShowTwin] = useState(true);
  const [section, setSection] = useState("AI Developer");

  const renderSection = () => {
    
    if (section === "AI Developer") {
      return <p className="text-center text-xl"><SectionAI /></p>;
    } else if (section === "Backend Engineer") {
      return <p className="text-center text-xl"><SectionBackend /></p>;
    } else if (section === "Landscape Designer") {
      return <p className="text-center text-xl"><SectionLandscape /></p>;
    }
  };
  if (showTwin) return <DigitalTwinChat onEnter={() => setShowTwin(false)} />;
  return (
    <div className="font-sans min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-500 to-blue-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Wen Liu</h1>
        <p className="text-xl">AI Developer | Backend Engineer | Landscape Designer</p>
        <p className="mt-4 max-w-xl mx-auto">
          Aspiring computer vision engineer with a background in design, engineering, and 3D modeling, currently transitioning into AI and visual computing. I hold a Master’s degree in Computer Science (GPA 4.0), where I focused on computer vision, machine learning, and real-world AI applications.<br/>
          Before entering tech, I worked for over 10 years in landscape design and engineering visualization. This experience shaped my ability to break down visual and spatial problems — a skill I now apply to image-based AI systems.<br />
          I’m actively seeking opportunities to grow as a computer vision engineer, with a strong interest in embedded AI, visual intelligence, and robotics.
        </p>
      </section>

      <Education />

      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-6 py-12 gap-6">
        {/* Left side - Header (navigation) */}
        <div className="w-full md:w-1/4">
          <Header onSelectSection={setSection} />
        </div>

        {/* Center - Main content */}
        <main className="w-full md:w-2/4">
          {renderSection()}
        </main>

        {/* Right side - Skills */}
        <div className="w-full md:w-1/4">
          <SkillDisplay activeSection={section} />
        </div>
      </div>

      <Footer />
    </div>
  );
}


export default App;
