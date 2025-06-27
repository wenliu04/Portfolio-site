import React from 'react';

function App() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-8 py-12 font-sans">
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">Wen Liu</h1>
        <p className="text-xl text-gray-600">AI Developer | Backend Engineer | Landscape Designer</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I am a career-switching backend and AI developer with a strong foundation in full-stack development, 
          machine learning (especially RAG systems), and creative problem-solving skills from my landscape design background.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
        <ul className="flex flex-wrap gap-4 text-sm text-gray-700">
          <li>Python</li>
          <li>JavaScript</li>
          <li>Django</li>
          <li>React</li>
          <li>LangChain</li>
          <li>HuggingFace</li>
          <li>PostgreSQL</li>
          <li>OpenCV</li>
          <li>Git</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-4">
          <li>
            <strong>PlantID Web App</strong> – A plant image classification platform using Django + PyTorch + Hugging Face
          </li>
          <li>
            <strong>BatCoach-AI</strong> – Real-time swing posture analysis for baseball training, using OpenCV and MediaPipe
          </li>
          <li>
            <strong>LittleLemon Restaurant Backend</strong> – Full REST API with Django, MySQL, and role-based access control
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>
          📧 Email: wenliu0525@gmail.com  
          <br />
          🔗 GitHub: <a href="https://github.com/wenliu04" className="text-blue-600 underline">github.com/wenliu04</a>
          <br />
          💼 LinkedIn: <a href="https://www.linkedin.com/in/wen-sam-liu-91181032" className="text-blue-600 underline">Wen Liu</a>
        </p>
      </section>
    </main>
  );
}

export default App;
