// AITwinModal.jsx
import { Rnd } from "react-rnd";
import DigitalTwinChat from "./DigitalTwinChat";

export default function AITwinModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div
      className="fixed inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center"
      style={{ zIndex: 9999 }}
    >
      <Rnd
        default={{
          x: window.innerWidth / 2 - 300,
          y: 100,
          width: 600,
          height: 800,
        }}
        minWidth={320}
        minHeight={300}
        bounds="window"
        className="bg-white rounded-xl shadow-xl border p-4 flex flex-col overflow-hidden"
      >
        {/* 标题栏 */}
        <div className="cursor-move flex justify-between items-center border-b pb-2 mb-4">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center shadow"
            aria-label="Close AI Twin"
          >
            ×
          </button>
        </div>

        {/* 聊天组件区域 */}
        <div className="flex-1 overflow-auto">
          <DigitalTwinChat onEnter={onClose} />
        </div>

        {/* 返回按钮 */}
        <button
          onClick={onClose}
          className="mt-4 block mx-auto text-sm text-blue-600 underline"
        >
          ← Back to Portfolio
        </button>
      </Rnd>
    </div>
  );
}
