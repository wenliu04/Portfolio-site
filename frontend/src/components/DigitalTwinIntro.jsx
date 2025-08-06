import { useState } from "react";
import { FaRobot } from "react-icons/fa";

export default function DigitalTwinIntro({ onEnter }) {
  const [show, setShow] = useState(true);

  const handleEnter = () => {
    setShow(false);
    onEnter();
  };

  if (!show) return null;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-indigo-200 text-gray-800 text-center p-8">
      <div className="text-6xl mb-4 animate-bounce">
        <FaRobot className="text-indigo-600" />
      </div>
      <h1 className="text-3xl font-bold mb-2">Welcome! I'm the Digital Twin of Wen Liu</h1>
      <p className="text-lg max-w-xl mb-6">
        I'm here to guide you through Wen's professional background and creative journey.
        You can explore this site in a traditional way, or chat with me to discover projects and skills interactively.
      </p>
      <button
        onClick={handleEnter}
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
      >
        Enter Website
      </button>
    </div>
  );
}