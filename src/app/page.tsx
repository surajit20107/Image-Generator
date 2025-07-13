"use client";
import { useState } from "react";
import { LuSend } from "react-icons/lu";
import axios from "axios";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  // ✅ CHANGED: Now using an array to store all chat history (prompt + image)
  const [chats, setChats] = useState<{ prompt: string; image: string }[]>([]);

  // ✅ NEW: Loading state to show status while waiting for API response
  const [loading, setLoading] = useState(false);

  // ✅ CHANGED: handleSubmit now appends to chats instead of replacing a single image
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);

    try {
      const res = await axios.post("/api/generate", { prompt });
      if (res.status === 200) {
        // ✅ CHANGED: Add the current prompt + generated image to the chat history
        setChats((prev) => [
          ...prev,
          {
            prompt: prompt.trim(),
            image: res.data,
          },
        ]);
        setPrompt("");
      }
    } catch (error) {
      console.error("Image generation error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <h1 className="text-center text-xl font-bold">Image Generator</h1>
      </div>

      {/* ✅ NEW: Chat History Section */}
      <div className="flex-grow overflow-y-auto px-4 space-y-6 pb-28">
        {/* ✅ NEW: Mapping through chats array to show prompt + image pairs */}
        {chats.map((chat, index)=>(
          <div key={index} className="flex flex-col space-y-2">
            <p className="bg-zinc-100 p-2 rounded-md self-start max-w-md">
              <strong>You:</strong> {chat.prompt}
            </p>
            <img
              src={`data:image/png;base64,${chat.image}`}
              alt={chat.prompt}
              className="rounded-md max-w-md w-full object-cover border"
            />
          </div>
        ))}

        {/* ✅ NEW: Show "Generating..." while waiting */}
        {loading && (
          <div className="text-gray-500 italic text-sm">
            Generating image...
          </div>
        )}
      </div>

      {/* ✅ CHANGED: Input Form stays the same, but supports chat-style submissions */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center p-4 gap-2 sticky bottom-0 bg-white border-t">
        <textarea
          placeholder="Enter a prompt..."
          className="h-20 p-2 border border-zinc-300 rounded-lg w-full resize-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          type="submit"
          className="p-2 text-white rounded-lg bg-blue-600 disabled:bg-gray-400"
          disabled={prompt.trim() === "" || loading}>
          <LuSend className="text-xl" />
        </button>
      </form>
    </div>
  );
}
