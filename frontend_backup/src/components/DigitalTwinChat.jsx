import { useState, useEffect, useRef } from "react";
import { Bot, User } from "lucide-react";

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
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
      const formData = new FormData(); // 📌 使用 FormData
      formData.append("file", file);
      formData.append("query", input);

      const response = await fetch("http://localhost:8000/api/chat/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      setMessages([...newMessages, { sender: "ai", text: data.response || "No response." }]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { sender: "ai", text: "Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 border border-gray-200 rounded-2xl shadow-xl bg-white h-[90vh] flex flex-col">
      <div className="text-2xl font-bold text-indigo-700 mb-2">🤖 Wen's Digital Twin</div>

      {/* Upload */}
      <div className="mb-3">
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="block text-sm text-gray-500 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-100 file:text-indigo-700 hover:file:bg-indigo-200"
        />
        {file && <p className="text-xs text-gray-500 mt-1">Uploaded: {file.name}</p>}
      </div>

      {/* Chat */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4 rounded-lg space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.sender === "ai" && (
              <div className="w-8 h-8 bg-indigo-600 rounded-full text-white flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
            )}
            <div
              className={`max-w-[70%] px-4 py-2 text-sm whitespace-pre-line rounded-2xl shadow-sm ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-white text-gray-800 rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
            {msg.sender === "user" && (
              <div className="w-8 h-8 bg-blue-500 rounded-full text-white flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
            )}
          </div>
        ))}
        {loading && <div className="text-sm text-gray-400">Thinking...</div>}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex mt-4 gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring focus:border-indigo-400"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm"
        >
          Send
        </button>
      </div>
    </div>
  );
}