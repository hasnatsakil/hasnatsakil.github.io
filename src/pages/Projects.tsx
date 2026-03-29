import React, { useState } from "react";
import { Eye, ArrowRight, BarChart3, Shield, Terminal, Filter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Visionary AI Dash",
    category: "AI/ML",
    problem: "Inefficient image processing causing bottlenecks in data pipelines.",
    solution: "Distributed FastAPI backend orchestration on Kubernetes clusters.",
    result: "40% Latency Reduction",
    tags: ["Next.js", "FastAPI", "Azure", "K8s"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwF20gVLaEpVB2ENez1-00xGaVUVAdw1tOpl1A44pVLkt-4b_iudnacNgMjVOBVZV02vWbZWtWs51TfQtmTxkjpuZC8CTzgbdP7ZqkBdFM_WOKtcoijJypRjm4igabP5HZYJTl5dja8PQbrtkXz5rYJQolla_HpTDA6LqWlOK9taRUSrHQ_LblirQQPpikDNup-WLmf9PDibwsay9VKm-H54HBcua_K4QObXbYCXhZgQSXB-1Jzdu29zWO3oJhFk4hD7MRfXES0gs",
    color: "primary",
    icon: <Eye className="w-4 h-4 mr-2" />
  },
  {
    id: 2,
    title: "Auto-Scale Framework",
    category: "DevOps/Cloud",
    problem: "Manual deployment bottlenecks leading to significant downtime.",
    solution: "KEDA-based event-driven autoscaling with Terraform IAC.",
    result: "99.99% Guaranteed Uptime",
    tags: ["Docker", "Kubernetes", "Azure", "Terraform"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzsvE1w_G2q-7ZPZ1_COxomYl3gbOHvx6_QAjwofXJVo9mTglQur7NDcjiXsVSMviI1TTF8vEbd42mNrVt4-FyxuXId2wtah6tGpynNYftcQhdWzEbrXaNPRc87YN_YI5DtVn00T0YecwIxeG5AMoz8mBbekLTQ-maaiLo8lpIshUygD01ANRaVm1SfwmFZU_Pilf86JndRTgrlqeOD_9kAAJoiC5isMqB1l5hzbjI7HsRh4MJyk2tJdEmcaI4coZc-JmVO9hwh-o",
    color: "secondary",
    icon: <BarChart3 className="w-4 h-4 mr-2" />
  },
  {
    id: 3,
    title: "Secure Wallet API",
    category: "Web/Full Stack",
    problem: "Critical financial data security vulnerabilities in legacy system.",
    solution: "OAuth2.0 + JWT with Redis-backed session management.",
    result: "500k+ Daily API Calls",
    tags: ["Node.js", "Redis", "PostgreSQL"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcmt7brFyqIfs5GvojKqecaGPK8zJZtfiQs3I9rTAtxNAJtr4QJd6i7ouTavv39lXxE7WdPJwXXs8N_5VI5Vpb5fsSAiPF6tjeYwVV1na4Tnz5-BTe81QSBR-3BxHkok5zA-4bIwd0MIWvHktx74f6S7K-8i9eEwjdRUdCVnsxWfPSeuWcdZ14M5SYl5gJXVXtKGNmrttTWciSSYCQnPP7XKoEErlRLOZDzMGgCeAkBiVMjGyLJDdtPRlikzBfTL4Ob6Sbu-nyMWw",
    color: "tertiary",
    icon: <Shield className="w-4 h-4 mr-2" />
  }
];

const categories = ["All", "AI/ML", "Web/Full Stack", "DevOps/Cloud"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="antialiased selection:bg-primary/30 selection:text-white">
      <header className="max-w-7xl mx-auto px-8 pt-24 pb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/15 mb-6"
        >
          <Terminal className="w-4 h-4 text-secondary mr-2" />
          <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">2024 PORTFOLIO ARCHIVE</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 font-headline"
        >
          Selected <span className="text-gradient">Architectures</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-on-surface-variant leading-relaxed"
        >
          Engineering robust solutions at the intersection of <span className="text-on-surface font-semibold">Generative AI</span> and <span className="text-on-surface font-semibold">Scalable Cloud Infrastructure</span>. Designed for performance, built for resilience.
        </motion.p>
      </header>

      <section className="max-w-7xl mx-auto px-8 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-3 p-2 bg-surface-container-low/50 glass-effect rounded-2xl border border-outline-variant/15 max-w-fit mx-auto"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? "bg-primary text-on-primary-fixed shadow-lg shadow-primary/20" 
                  : "text-on-surface-variant hover:bg-surface-bright"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </section>

      <main className="max-w-7xl mx-auto px-8 pb-32">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </main>
    </div>
  );
}

function ProjectCard({ title, category, problem, solution, result, tags, image, color, icon }: any) {
  const borderClasses: Record<string, string> = {
    primary: "border-primary",
    secondary: "border-secondary",
    tertiary: "border-tertiary",
  };

  const textColorClasses: Record<string, string> = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  };

  return (
    <motion.article 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -10 }}
      className="group bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/15 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          src={image}
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className={`bg-surface-container-lowest/80 backdrop-blur-md ${textColorClasses[color]} px-3 py-1 rounded-lg text-[10px] font-label font-bold tracking-widest uppercase border border-outline-variant/15`}>
            {category}
          </span>
        </div>
      </div>
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-4 font-headline">{title}</h3>
        <div className="space-y-4 mb-8">
          <div>
            <span className="text-[10px] font-label text-secondary uppercase tracking-widest block mb-1">Problem</span>
            <p className="text-sm text-on-surface-variant leading-relaxed">{problem}</p>
          </div>
          <div>
            <span className="text-[10px] font-label text-secondary uppercase tracking-widest block mb-1">Solution</span>
            <p className="text-sm text-on-surface-variant leading-relaxed">{solution}</p>
          </div>
          <div className={`p-3 bg-surface-container-lowest rounded-xl border-l-4 ${borderClasses[color]}`}>
            <span className={`text-[10px] font-label ${textColorClasses[color]} uppercase tracking-widest block mb-1`}>Result</span>
            <p className="text-sm font-bold text-on-surface">{result}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-surface-variant rounded-md text-[10px] text-on-surface-variant font-medium">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto grid grid-cols-2 gap-4">
          <button className="bg-surface-bright hover:bg-surface-variant text-on-surface py-3 rounded-xl text-xs font-bold transition-all border border-outline-variant/15 flex items-center justify-center hover:scale-105 active:scale-95">
            {icon} Live Demo
          </button>
          <button className="bg-surface-container-highest hover:bg-surface-bright text-on-surface py-3 rounded-xl text-xs font-bold transition-all border border-outline-variant/15 flex items-center justify-center hover:scale-105 active:scale-95">
            Details <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
