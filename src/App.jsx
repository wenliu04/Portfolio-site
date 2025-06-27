import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [section, setSection] = useState("AI Developer");

  const renderSection = () => {
    if (section === "AI Developer") {
      return <p className="text-center text-xl">AI 项目内容展示区域</p>;
    } else if (section === "Backend Engineer") {
      return <p className="text-center text-xl">后端开发项目展示区域</p>;
    } else if (section === "Landscape Designer") {
      return <p className="text-center text-xl">景观设计作品展示区域</p>;
    }
  };

  return (
    <div className="font-sans min-h-screen bg-gray-50 text-gray-800">
      <Header onSelectSection={setSection} />
      <main className="max-w-4xl mx-auto px-6 py-8">{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
