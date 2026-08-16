import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Cpu, Activity, Database, Server, Terminal, Network, Radio } from "lucide-react";

export default function SystemProcessingGraphic() {
  const [opsCount, setOpsCount] = useState(34200);
  const [latency, setLatency] = useState(11.8);
  const [activeTab, setActiveTab] = useState<"ai" | "devops" | "cloud">("ai");

  useEffect(() => {
    const interval = setInterval(() => {
      setOpsCount((prev) => prev + Math.floor(Math.random() * 45) - 15);
      setLatency(+(11.5 + Math.random() * 0.8).toFixed(1));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto flex items-center justify-center p-4">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-cyan-500/15 to-purple-500/10 rounded-3xl blur-3xl -z-10 animate-pulse"></div>

      {/* Main Glassmorphic Container Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-full glass-card rounded-3xl p-6 border border-slate-700/50 shadow-2xl flex flex-col justify-between overflow-hidden relative"
      >
        {/* Card Header & Live Status */}
        <div className="flex justify-between items-center z-10 border-b border-slate-800/80 pb-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <span className="font-label text-xs uppercase tracking-widest text-slate-300 font-bold">
              System Thinking Matrix
            </span>
          </div>

          <div className="flex gap-2">
            {(["ai", "devops", "cloud"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2.5 py-1 rounded-md text-[10px] font-label uppercase font-bold transition-all ${
                  activeTab === tab
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Animated Processing Isometric Stage */}
        <div className="relative flex-1 my-4 flex items-center justify-center overflow-hidden">
          {/* Animated Circuit Grid Lines Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>

          {/* SVG Animated Moving Data Paths */}
          <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 400 300" fill="none">
            {/* Pipeline Tracks */}
            <path d="M 60 150 Q 200 60 340 150" stroke="#1e293b" strokeWidth="3" strokeDasharray="4 4" />
            <path d="M 60 150 Q 200 240 340 150" stroke="#1e293b" strokeWidth="3" strokeDasharray="4 4" />
            <path d="M 200 60 L 200 240" stroke="#1e293b" strokeWidth="3" strokeDasharray="4 4" />

            {/* Glowing Pipeline Motion Streams */}
            <path d="M 60 150 Q 200 60 340 150" stroke="url(#blueGradient)" strokeWidth="2.5" />
            <path d="M 60 150 Q 200 240 340 150" stroke="url(#cyanGradient)" strokeWidth="2.5" />

            {/* Moving Pulses/Particles Along Pathways */}
            <motion.circle
              r="5"
              fill="#38bdf8"
              animate={{
                cx: [60, 200, 340],
                cy: [150, 60, 150],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            />
            <motion.circle
              r="5"
              fill="#818cf8"
              animate={{
                cx: [340, 200, 60],
                cy: [150, 240, 150],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
            />
            <motion.circle
              r="4"
              fill="#34d399"
              animate={{
                cx: [200, 200],
                cy: [60, 240],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />

            <defs>
              <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="cyanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#34d399" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>

          {/* 3D Nodes Stack Layout */}
          <div className="relative z-10 w-full h-full flex items-center justify-around px-2">
            {/* Node 1: Data Ingestion */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="glass-card p-3 rounded-2xl border border-cyan-500/30 bg-slate-900/80 shadow-lg shadow-cyan-500/10 flex flex-col items-center gap-1.5 max-w-[100px]"
            >
              <div className="w-10 h-10 rounded-xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 border border-cyan-500/30">
                <Database className="w-5 h-5" />
              </div>
              <span className="font-label text-[10px] font-bold text-slate-200 uppercase">Ingest</span>
              <span className="text-[9px] text-cyan-400/80 font-mono">1.2 TB/s</span>
            </motion.div>

            {/* Node 2: Central Processing Core (Animated Rotation & Pulse) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="relative group"
            >
              {/* Outer Rotating Aura Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 border border-dashed border-cyan-400/40 rounded-full pointer-events-none"
              ></motion.div>

              <div className="glass-card p-5 rounded-3xl border border-blue-400/50 bg-slate-950/90 shadow-2xl shadow-blue-500/20 flex flex-col items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-slate-950 shadow-md shadow-cyan-500/30"
                >
                  <Cpu className="w-6 h-6" />
                </motion.div>
                <div className="text-center">
                  <span className="font-headline text-xs font-black text-slate-100 uppercase tracking-wide block">
                    {activeTab === "ai" ? "Neural Core" : activeTab === "devops" ? "K8s Cluster" : "Cloud Gateway"}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono font-bold">PROCESSING</span>
                </div>
              </div>
            </motion.div>

            {/* Node 3: Microservice Deployment */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="glass-card p-3 rounded-2xl border border-indigo-500/30 bg-slate-900/80 shadow-lg shadow-indigo-500/10 flex flex-col items-center gap-1.5 max-w-[100px]"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center text-indigo-400 border border-indigo-500/30">
                <Server className="w-5 h-5" />
              </div>
              <span className="font-label text-[10px] font-bold text-slate-200 uppercase">Deploy</span>
              <span className="text-[9px] text-indigo-400/80 font-mono">0 Downtime</span>
            </motion.div>
          </div>
        </div>

        {/* Real-Time Processing Metrics Footer */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/80 font-label">
          <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60 text-center">
            <span className="text-[9px] text-slate-400 uppercase tracking-wider block">Ops Throughput</span>
            <span className="text-xs font-bold text-cyan-400 font-mono">{opsCount.toLocaleString()} /s</span>
          </div>

          <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60 text-center">
            <span className="text-[9px] text-slate-400 uppercase tracking-wider block">Avg Latency</span>
            <span className="text-xs font-bold text-emerald-400 font-mono">{latency} ms</span>
          </div>

          <div className="bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60 text-center">
            <span className="text-[9px] text-slate-400 uppercase tracking-wider block">Cluster Health</span>
            <span className="text-xs font-bold text-blue-400 font-mono">100% OK</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
