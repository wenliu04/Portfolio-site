import { useState, useEffect, useRef } from "react";
import { Bot, User, Loader } from "lucide-react";
import avatarAI from "../assets/ai-avatar.png";
import avatarUser from "../assets/user-avatar.png";

export default function DigitalTwinChat() {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I'm Wen's digital twin. Upload Wen's resume and ask me anything!",
    },
  ]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [typingText, setTypingText] = useState("");
  const messagesEndRef = useRef(null);

  const handleSend = async () => {
    if (!input.trim() || !file) {
      alert("Please select a file and enter a question.");
      return;
    }

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("query", input);

      const response = await fetch("http://localhost:8000/api/chat/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      const fullText = data.response || "No response.";

      // Typing animation
      let index = 0;
      setTypingText("");
      const typingInterval = setInterval(() => {
        setTypingText((prev) => prev + fullText[index]);
        index++;
        if (index >= fullText.length) {
          clearInterval(typingInterval);
          setMessages([...newMessages, { sender: "ai", text: fullText }]);
          setTypingText("");
          setLoading(false);
        }
      }, 20);
    } catch (error) {
      setMessages([
        ...newMessages,
        { sender: "ai", text: "Sorry, something went wrong." },
      ]);
      setLoading(false);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typingText]);

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-2xl shadow-xl border border-gray-200 bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">🤖 Wen's Digital Twin</h1>

      <div className="mb-4">
        <input
          type="file"
          accept="application/pdf"
          className="block text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          onChange={(e) => setFile(e.target.files[0])}
        />
        {file && <p className="text-sm text-gray-500 mt-1">Uploaded: {file.name}</p>}
      </div>

      <div className="h-96 overflow-y-auto bg-gray-50 p-4 rounded-lg mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-4 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex items-start gap-3 max-w-[80%] ${msg.sender === "user" ? "flex-row-reverse" : ""}`}>
              <img
                src={msg.sender === "user" ? avatarUser : avatarAI}
                alt="avatar"
                className="w-[64px] h-[64px] rounded-full border"
              />
              <div
                className={`px-4 py-2 rounded-2xl text-sm shadow-sm ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {typingText && (
          <div className="flex items-start gap-3">
            <img src={avatarAI} alt="ai" className="w-[64px] h-[64px] rounded-full border" />
            <div className="bg-gray-200 text-sm text-gray-900 px-4 py-2 rounded-2xl shadow-sm whitespace-pre-wrap">
              {typingText}
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className={`px-4 py-2 rounded-xl font-semibold ${
            loading ? "bg-gray-400 text-white cursor-not-allowed" : "bg-green-600 text-white hover:bg-green-700"
          }`}
        >
          {loading ? <Loader className="animate-spin w-5 h-5" /> : "Send"}
        </button>
      </div>
    </div>
  );
}
