"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = message;

    setChat((prev) => [...prev, { role: "user", text: userMessage }]);
    setMessage("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.message || "Sorry, I couldn't process that request.",
        },
      ]);
    } catch {
      setChat((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Something went wrong. Please try again.",
        },
      ]);
    }
  };

  return (
    <>
      {/* Floating Ask AI Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 flex items-center gap-2 rounded-full bg-[#86492D] px-5 py-3 text-white shadow-xl hover:scale-105 transition-all duration-200 z-50"
      >
        <MessageCircle size={18} />
        <span>Ask AI</span>
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-95 rounded-xl border bg-white shadow-2xl z-50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 border-b p-4 bg-gray-50">
            <Image
              src="/logo.webp"
              alt="Desert In Alaska"
              width={36}
              height={36}
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold text-sm">Desert In Alaska AI</h3>
              <p className="text-xs text-gray-500">Ask about our services</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3">
            {chat.length === 0 && (
              <div className="text-sm text-gray-500">
                Hi! Ask me about:
                <ul className="mt-2 list-disc pl-5">
                  <li>Commercial HVAC</li>
                  <li>Fire Suppression Systems</li>
                  <li>Kitchen Exhaust Systems</li>
                  <li>Gas Piping</li>
                  <li>Industrial Fire Suppression</li>
                </ul>
              </div>
            )}

            {chat.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-lg p-3 text-sm ${
                  msg.role === "user"
                    ? "ml-auto bg-black text-white"
                    : "bg-gray-100 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2 border-t p-3">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Ask about our services..."
              className="flex-1 rounded-md border px-3 py-2 text-sm outline-none focus:border-black"
            />

            <button
              onClick={sendMessage}
              className="rounded-md bg-black px-4 py-2 text-white text-sm hover:opacity-90"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
