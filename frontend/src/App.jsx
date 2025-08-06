import { useState } from "react";
import { Rnd } from "react-rnd";
import Draggable from "react-draggable";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SectionAI from "./containers/SectionAI";
import SectionBackend from "./containers/SectionBackend";
import SectionLandscape from "./containers/SectionLandscape";
import SkillDisplay from "./components/Skills";
import Education from "./containers/Education";
import Greeting from "./containers/Greeting";
import AITwinModal from "./components/AITwinModal";




function App() {
  const [showTwin, setShowTwin] = useState(false);
  const [section, setSection] = useState("AI Developer");
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const renderSection = () => {
  if (section === "AI Developer") {
    return <SectionAI onProjectSelect={setSelectedProject} setHoveredProject={setHoveredProject} />;
  } else if (section === "Full Stack Engineer") {
    return <SectionBackend onProjectSelect={setSelectedProject} setHoveredProject={setHoveredProject} />;
  } else if (section === "Landscape Designer") {
    return <SectionLandscape onProjectSelect={setSelectedProject} setHoveredProject={setHoveredProject} />;
  }
};

  // if (showTwin) return <DigitalTwinChat onEnter={() => setShowTwin(false)} />;
  return (
    <div>

      <Greeting setShowTwin={setShowTwin} />

      {/* AI Twin Chat */}
      <AITwinModal show={showTwin} onClose={() => setShowTwin(false)} />


      {/* Education Section */}
      <Education />

      {/* Responsive Layout */}
      <div className="flex flex-col items-center max-w-12xl mx-auto px-6">
        {/* Left side - Header (navigation) */}
        <div className="w-full  ">
          {/* Header with section selection */}
          <Header onSelectSection={setSection} />
        </div>

        {/* Center - Main content */}
        
        {renderSection()}
        

        {/* Right side - Skills */}
        <div className="w-full">
          <SkillDisplay
            activeSection={section}
            highlightSkills={hoveredProject?.skills || selectedProject?.skills || []}
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}


export default App;
