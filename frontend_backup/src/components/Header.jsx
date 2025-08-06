import { useState } from "react";


export default function Header({ onSelectSection }) {
  const [active, setActive] = useState("AI Developer");

  const handleClick = (section) => {
    setActive(section);
    onSelectSection(section);
  };

  return (
    <header className="flex justify-center gap-8 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* 姓名 */}
      {/* <h1 className="text-2xl font-bold text-gray-800">Wen Liu</h1> */}
      {/* 社交链接 */}
      <div className="flex justify-center gap-6 mt-4 text-gray-600 space-x-40">
        <a href="https://github.com/wenliu04" target="_blank" aria-label="GitHub">
            <i className="fab fa-github text-2xl hover:text-black"></i>
        </a>
        <a href="https://www.linkedin.com/in/wen-sam-liu-91181032/" target="_blank" aria-label="LinkedIn">
            <i className="fab fa-linkedin text-2xl hover:text-blue-700"></i>
        </a>
        <a href="mailto:wenliu0525@gmail.com" aria-label="Email">
            <i className="fas fa-envelope text-2xl hover:text-red-500"></i>
        </a>
      </div>

      {/* 职业标签按钮 */}
      <nav className="flex gap-20">
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
      </nav>
      
    </header>
  );
}
