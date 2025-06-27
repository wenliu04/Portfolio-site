import { useState } from "react";

export default function Header({ onSelectSection }) {
  const [active, setActive] = useState("AI Developer");

  const handleClick = (section) => {
    setActive(section);
    onSelectSection(section);
  };

  return (
    <header className="flex justify-center gap-8 py-4 bg-white shadow-md sticky top-0 z-50">
      {["AI Developer", "Backend Engineer", "Landscape Designer"].map((label) => (
        <button
          key={label}
          onClick={() => handleClick(label)}
          className={`text-lg font-semibold transition duration-200 ${
            active === label ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600"
          }`}
        >
          {label}
        </button>
      ))}
    </header>
  );
}
