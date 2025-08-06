import { useState } from "react";


export default function Header({ onSelectSection }) {
  const [active, setActive] = useState("AI Developer");

  const handleClick = (section) => {
    setActive(section);
    onSelectSection(section);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 ">
      <div className="flex flex-col items-center gap-6">
    
        {/* 职业标签按钮 */}
        <nav className="flex gap-10 w-full justify-around  mx-4 bg-slate-300 pt-10 px-5 pb-3 rounded-lg">
          {["AI Developer", "Full Stack Engineer", "Landscape Designer"].map((label) => (
            <button
              key={label}
              onClick={() => handleClick(label)}
              className={`bg-slate text-2xl font-semibold transition duration-200 cursor-pointer hover:text-orange-600/50 ${
                active === label ? "text-orange-600 border-b-4 border-orange-600" : "text-gray-600"
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
