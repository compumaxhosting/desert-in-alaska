"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, X } from "lucide-react";

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
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-20 right-4 flex items-center gap-2 rounded-full bg-[#86492D] px-4 py-3 text-white shadow-xl hover:scale-105 transition-all duration-200 z-50"
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline">Ask AI</span>
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="
            fixed
            bottom-20
            left-3
            right-3
            md:left-auto
            md:right-6
            md:bottom-24
            md:w-100
            h-[75vh]
            md:h-150
            rounded-xl
            border
            bg-white
            shadow-2xl
            z-50
            overflow-hidden
            flex
            flex-col
          "
        >
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

            <button
              onClick={() => setOpen(false)}
              className="ml-auto text-gray-500 hover:text-black"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {chat.length === 0 && (
              <div className="text-sm text-gray-500">
                <p className="mb-2">Hi! Ask me about:</p>

                <ul className="list-disc pl-5 space-y-1">
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
                className={`max-w-[85%] rounded-lg p-3 text-sm break-words ${
                  msg.role === "user"
                    ? "ml-auto bg-[#86492D] text-white"
                    : "bg-gray-100 text-black"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t bg-white p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
                placeholder="Ask about our services..."
                className="flex-1 rounded-md border px-3 py-2 text-sm outline-none focus:border-[#86492D]"
              />

              <button
                onClick={sendMessage}
                className="rounded-md bg-[#86492D] px-4 py-2 text-white text-sm hover:opacity-90"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
