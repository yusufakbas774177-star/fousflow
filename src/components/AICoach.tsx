import React, { useState } from 'react';
import { Brain, Send, Sparkles, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function AICoach() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    try {
      const model = "gemini-3-flash-preview";
      const result = await ai.models.generateContent({
        model,
        contents: `You are a Digital Detox Coach. The user is struggling with short-form video addiction (Reels, Shorts, TikTok). 
        Provide a short, punchy, and highly motivating piece of advice or a strategy based on their current feeling: "${input}"`,
      });
      setResponse(result.text || "I'm here to help. Stay strong.");
    } catch (error) {
      console.error(error);
      setResponse("I'm having trouble connecting right now, but remember: you are in control.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900 rounded-3xl p-6 text-white shadow-xl">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
          <Brain size={18} className="text-white" />
        </div>
        <h3 className="font-semibold text-lg">AI Detox Coach</h3>
      </div>

      <form onSubmit={handleAsk} className="relative mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="How are you feeling right now?"
          className="w-full bg-white/10 border border-white/10 rounded-2xl py-4 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 placeholder:text-white/30"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-2 top-2 w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center hover:bg-emerald-600 transition-colors disabled:opacity-50"
        >
          {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
        </button>
      </form>

      {response && (
        <div className="bg-white/5 rounded-2xl p-4 border border-white/5 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-emerald-400 font-bold mb-2">
            <Sparkles size={12} />
            Coach Advice
          </div>
          <p className="text-sm leading-relaxed text-zinc-300 italic">
            "{response}"
          </p>
        </div>
      )}
    </div>
  );
}
