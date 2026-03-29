import React from "react";
import { Link } from "react-router-dom";
import { Network, Terminal, Brain, Zap, Monitor, RefreshCw, Rocket } from "lucide-react";
import { motion } from "motion/react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
  return (
    <main className="relative pt-24 pb-24 overflow-hidden">
      <div className="absolute inset-0 noise-overlay pointer-events-none"></div>
      
      {/* Hero Introduction */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-label text-xs uppercase tracking-widest text-secondary">Who I am</span>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              The <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-secondary to-tertiary">Kinetic Architect</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-on-surface-variant max-w-xl leading-relaxed mb-10">
              I am Abul Hasnat Sakil. I don't just write code; I engineer systems that live at the intersection of high-level machine learning research and robust, production-ready infrastructure.
            </motion.p>
            <motion.div variants={itemVariants} className="flex gap-4">
              <div className="flex flex-col">
                <span className="font-label text-[10px] text-primary uppercase tracking-widest mb-1">Status</span>
                <span className="text-on-surface font-medium">Bridging AI → Production</span>
              </div>
              <div className="w-[1px] h-10 bg-outline-variant/30 self-end"></div>
              <div className="flex flex-col">
                <span className="font-label text-[10px] text-primary uppercase tracking-widest mb-1">Location</span>
                <span className="text-on-surface font-medium">Distributed / Global</span>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-square rounded-full overflow-hidden border-4 border-outline-variant/10 shadow-2xl relative z-10">
              <img
                alt="Close-up cinematic portrait of Abul Hasnat Sakil"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                src="/images/profile.png"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full"
            ></motion.div>
            <motion.div 
              animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-secondary/5 rounded-full"
            ></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Unique Strengths (Bento) */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="md:col-span-2 p-10 rounded-full bg-surface-container-low border border-outline-variant/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-primary/10 transition-colors"></div>
            <div className="relative z-10">
              <Network className="w-10 h-10 text-primary mb-6" />
              <h3 className="text-3xl font-bold mb-4 tracking-tight">The Bridge: Research to Reality</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-xl">
                Specializing in the "last mile" of AI development. I transform complex neural architectures into scalable FastAPI microservices, containerized with Docker, and deployed via robust CI/CD pipelines.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-full bg-surface-container-high border border-outline-variant/10 flex flex-col justify-between"
          >
            <div>
              <Terminal className="w-8 h-8 text-secondary mb-4" />
              <h4 className="text-xl font-bold mb-2">DevOps Mindset</h4>
              <p className="text-sm text-on-surface-variant">Infrastructure as code. Kubernetes orchestration. Automated reliability.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-outline-variant/10">
              <code className="text-[10px] text-secondary-dim font-label">RUN docker-compose up --build</code>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Journey Timeline */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <span className="font-label text-xs uppercase tracking-widest text-primary mb-4">Evolution</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">My Journey</h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-outline-variant/50 to-transparent"></div>
          <div className="space-y-24">
            <TimelineItem
              title="The Foundation"
              description="Deep dive into theoretical computer science and mathematics. Mastering the logic that powers every algorithm."
              phase="PHASE 01"
              color="primary"
              align="right"
              index={0}
            />
            <TimelineItem
              title="ML Instruction"
              description="Teaching advanced Machine Learning concepts. Realized that explaining complexity is the best way to master it."
              phase="PHASE 02"
              color="secondary"
              align="left"
              index={1}
            />
            <TimelineItem
              title="System Deployment"
              description="Transitioned to cloud architecture. Building high-availability systems using Docker, GCP, and AWS."
              phase="CURRENT"
              color="tertiary"
              align="right"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Philosophy & Mindset */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-panel p-12 md:p-20 rounded-[2rem] border border-white/5 relative overflow-hidden"
        >
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-tertiary/5 rounded-full blur-[100px]"></div>
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl font-bold mb-8 tracking-tight">The Core Philosophy</h2>
              <div className="space-y-8">
                <PhilosophyItem
                  icon={<Brain className="w-6 h-6 text-primary" />}
                  title="Problem-Solving Mindset"
                  description="Tech is a tool, not the goal. I focus on identifying the most efficient path to value through engineering."
                  index={0}
                />
                <PhilosophyItem
                  icon={<Zap className="w-6 h-6 text-secondary" />}
                  title="Impactful Scalability"
                  description="Code that handles 10 users is easy. Code that handles 10 million with sub-millisecond latency is where the art lies."
                  index={1}
                />
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant/10"
            >
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-error-dim/40"></div>
                <div className="w-3 h-3 rounded-full bg-primary/40"></div>
                <div className="w-3 h-3 rounded-full bg-secondary/40"></div>
              </div>
              <div className="font-label text-sm space-y-2 opacity-80">
                <p className="text-secondary-dim"># AI Production Logic</p>
                <p className="text-on-surface-variant">class <span className="text-primary">ImpactEngine</span>:</p>
                <p className="pl-4 text-on-surface-variant">def <span className="text-tertiary-fixed">deploy_value</span>(self, research):</p>
                <p className="pl-8 text-on-surface-variant">system = self.containerize(research)</p>
                <p className="pl-8 text-on-surface-variant">system.scale_to_cloud()</p>
                <p className="pl-8 text-on-surface-variant">return <span className="text-secondary">"Success"</span></p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-24 border-y border-outline-variant/10 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Ready to build the future?</h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">
            Whether it's deploying a new ML model or architecting a global cloud system, I'm ready to bring your vision to production.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              to="/contact"
              className="bg-primary text-on-primary-fixed px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(133,173,255,0.4)] transition-all hover:scale-105 active:scale-95"
            >
              Let’s work together
            </Link>
            <Link
              to="/projects"
              className="bg-surface-container-high text-on-surface px-10 py-4 rounded-full font-bold text-lg border border-outline-variant/20 hover:bg-surface-bright transition-all hover:scale-105 active:scale-95"
            >
              View Projects
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function TimelineItem({ title, description, phase, color, align, index }: { title: string, description: string, phase: string, color: string, align: "left" | "right", index: number }) {
  const colorClasses: Record<string, string> = {
    primary: "bg-primary ring-primary/10 shadow-[0_0_20px_rgba(133,173,255,0.5)]",
    secondary: "bg-secondary ring-secondary/10 shadow-[0_0_20px_rgba(83,221,252,0.5)]",
    tertiary: "bg-tertiary ring-tertiary/10 shadow-[0_0_20px_rgba(172,138,255,0.5)]",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: align === "right" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col md:flex-row items-center gap-8 md:gap-0 relative"
    >
      <div className={`md:w-1/2 ${align === "right" ? "md:pr-16 text-center md:text-right" : "order-2 md:order-1"}`}>
        {align === "left" && <span className="font-label text-xs text-outline tracking-widest md:float-right">{phase}</span>}
        {align === "right" && (
          <>
            <h4 className="text-2xl font-bold text-white mb-2">{title}</h4>
            <p className="text-on-surface-variant">{description}</p>
          </>
        )}
      </div>
      <motion.div 
        whileHover={{ scale: 1.5 }}
        className={`relative z-10 w-4 h-4 rounded-full ${colorClasses[color]} ${align === "left" ? "order-1 md:order-2" : ""}`}
      ></motion.div>
      <div className={`md:w-1/2 ${align === "right" ? "md:pl-16" : "md:pl-16 order-3 md:order-3"}`}>
        {align === "right" && <span className="font-label text-xs text-outline tracking-widest">{phase}</span>}
        {align === "left" && (
          <>
            <h4 className="text-2xl font-bold text-white mb-2">{title}</h4>
            <p className="text-on-surface-variant">{description}</p>
          </>
        )}
      </div>
    </motion.div>
  );
}

function PhilosophyItem({ icon, title, description, index }: { icon: React.ReactNode, title: string, description: string, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="flex gap-6"
    >
      <div className="w-12 h-12 rounded-xl bg-surface-bright flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h5 className="font-bold text-lg mb-1">{title}</h5>
        <p className="text-on-surface-variant text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
