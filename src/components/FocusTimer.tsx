import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FocusTimer() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isDetoxMode, setIsDetoxMode] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      setIsDetoxMode(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(25 * 60);
    setIsDetoxMode(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-black/5 flex flex-col items-center">
      <div className="text-xs uppercase tracking-widest text-zinc-400 font-semibold mb-4">
        {isDetoxMode ? 'Detox Shield Active' : 'Focus Session'}
      </div>
      
      <div className="text-7xl font-light tracking-tighter text-zinc-900 mb-8 font-mono">
        {formatTime(timeLeft)}
      </div>

      <div className="flex gap-4">
        <button
          onClick={toggleTimer}
          className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
            isActive 
              ? 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200' 
              : 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-200'
          }`}
        >
          {isActive ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
        </button>
        
        <button
          onClick={resetTimer}
          className="w-16 h-16 rounded-full bg-zinc-100 text-zinc-400 flex items-center justify-center hover:bg-zinc-200"
        >
          <RotateCcw size={24} />
        </button>
      </div>

      {!isActive && timeLeft === 25 * 60 && (
        <button
          onClick={() => {
            setIsDetoxMode(true);
            setIsActive(true);
          }}
          className="mt-8 flex items-center gap-2 text-sm font-medium text-emerald-600 bg-emerald-50 px-6 py-3 rounded-full hover:bg-emerald-100 transition-colors"
        >
          <ShieldCheck size={18} />
          Start Detox Shield
        </button>
      )}

      <AnimatePresence>
        {isDetoxMode && isActive && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 text-center text-xs text-zinc-500 max-w-[200px]"
          >
            "The urge to scroll is temporary. Your focus is permanent."
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
