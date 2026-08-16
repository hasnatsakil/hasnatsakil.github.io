import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Brain, Sparkles, Activity, Layers, Network } from "lucide-react";

export default function NeuralArchitectureGraphic() {
  const [loss, setLoss] = useState(0.0142);
  const [activeNeuron, setActiveNeuron] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoss((prev) => +(0.01 + Math.random() * 0.005).toFixed(4));
      setActiveNeuron((prev) => (prev + 1) % 6);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center p-4 overflow-hidden rounded-xl bg-slate-950/80 border border-slate-800/80">
      {/* Background Animated Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-tertiary/15 to-secondary/10 opacity-50 blur-2xl animate-pulse pointer-events-none"></div>

      {/* SVG Synapse Pathways & Moving Pulsing Sparks */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 240" fill="none">
        {/* Layer 1 to Layer 2 Synapses */}
        <path d="M 80 60 L 200 40" stroke="#4f46e5" strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M 80 60 L 200 120" stroke="#4f46e5" strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M 80 60 L 200 200" stroke="#4f46e5" strokeWidth="1.5" strokeOpacity="0.4" />

        <path d="M 80 120 L 200 40" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M 80 120 L 200 120" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M 80 120 L 200 200" stroke="#06b6d4" strokeWidth="1.5" strokeOpacity="0.4" />

        <path d="M 80 180 L 200 40" stroke="#4f46e5" strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M 80 180 L 200 120" stroke="#4f46e5" strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M 80 180 L 200 200" stroke="#4f46e5" strokeWidth="1.5" strokeOpacity="0.4" />

        {/* Layer 2 to Layer 3 Synapses */}
        <path d="M 200 40 L 320 120" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M 200 120 L 320 120" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.4" />
        <path d="M 200 200 L 320 120" stroke="#8b5cf6" strokeWidth="1.5" strokeOpacity="0.4" />

        {/* Moving Sparks Along Paths */}
        <motion.circle
          r="4"
          fill="#a855f7"
          animate={{ cx: [80, 200, 320], cy: [60, 120, 120], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          r="4"
          fill="#06b6d4"
          animate={{ cx: [80, 200, 320], cy: [180, 40, 120], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
        <motion.circle
          r="4"
          fill="#38bdf8"
          animate={{ cx: [80, 200, 320], cy: [120, 200, 120], opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
      </svg>

      {/* 3D Neural Nodes Container */}
      <div className="relative z-10 w-full h-full flex justify-between items-center px-6">
        {/* Layer 1: Input Vector */}
        <div className="flex flex-col gap-6 items-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                scale: activeNeuron === i ? [1, 1.25, 1] : 1,
                boxShadow: activeNeuron === i ? "0 0 15px rgba(168,85,247,0.8)" : "none",
              }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 rounded-xl bg-slate-900 border border-purple-500/40 flex items-center justify-center text-purple-400 text-xs font-mono font-bold"
            >
              x{i + 1}
            </motion.div>
          ))}
          <span className="font-label text-[9px] uppercase tracking-widest text-slate-400 font-bold">Input Layer</span>
        </div>

        {/* Layer 2: Transformer Hidden Core (3D Rotating Node Box) */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <div className="relative p-6 glass-card rounded-3xl border border-tertiary/40 bg-slate-900/90 shadow-2xl flex flex-col items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 via-tertiary to-cyan-400 flex items-center justify-center text-slate-950 shadow-lg shadow-purple-500/30"
            >
              <Brain className="w-7 h-7 text-white" />
            </motion.div>

            <span className="font-headline text-xs font-bold text-slate-100 uppercase tracking-wide">
              Transformer Block
            </span>
            <div className="flex gap-1">
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[9px] font-mono">Self-Attention</span>
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[9px] font-mono">FeedForward</span>
            </div>
          </div>
          <span className="font-label text-[9px] uppercase tracking-widest text-tertiary font-bold">Hidden Attention Core</span>
        </motion.div>

        {/* Layer 3: Inference Output Head */}
        <div className="flex flex-col items-center gap-3">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 rounded-2xl bg-slate-900 border border-cyan-400/60 shadow-lg shadow-cyan-500/20 flex items-center justify-center text-cyan-400"
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
          <span className="font-label text-[9px] uppercase tracking-widest text-cyan-400 font-bold">Output Head</span>
        </div>
      </div>

      {/* Floating Status Badge */}
      <div className="absolute bottom-3 left-4 right-4 glass-card px-3 py-2 rounded-xl flex items-center justify-between border border-slate-800/80 bg-slate-950/75 text-[10px] font-mono text-slate-300">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span>STATUS: TRAINING ACTIVE</span>
        </div>
        <span className="text-purple-400 font-bold">LOSS: {loss}</span>
      </div>
    </div>
  );
}
