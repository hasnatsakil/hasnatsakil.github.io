import React from "react";
import { Monitor, Server, Brain, RefreshCw, GitBranch, Webhook, Database, HardDrive, Activity, Code } from "lucide-react";
import { motion } from "motion/react";

export default function Skills() {
  return (
    <main className="relative z-10 pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <div className="fixed inset-0 noise-overlay z-0"></div>
      
      {/* Hero Section */}
      <section className="text-center mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6"
        >
          <span className="font-label text-xs uppercase tracking-widest text-secondary">Tech Stack 2024</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline font-black text-6xl md:text-8xl tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-on-surface-variant"
        >
          My Technical Expertise
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-on-surface-variant text-lg md:text-xl leading-relaxed"
        >
          A combination of software engineering, AI, and DevOps to build scalable, production-ready systems.
        </motion.p>
        <div className="mt-12 flex justify-center gap-4">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          ></motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <TerminalIcon className="w-6 h-6 text-primary-dim" />
          </motion.div>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          ></motion.div>
        </div>
      </section>

      {/* Skills Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32 relative z-10">
        <SkillCategory
          title="Frontend"
          label="Interface Design"
          icon={<Monitor className="w-10 h-10 text-secondary" />}
          skills={[
            { name: "React / Next.js", level: "Expert", percent: 95 },
            { name: "HTML5 / CSS3 / Tailwind", level: "Advanced", percent: 90 },
          ]}
          tags={["Used in real-world projects", "Pixel Perfect"]}
          color="secondary"
          index={0}
        />
        <SkillCategory
          title="Backend"
          label="Core Logic"
          icon={<Server className="w-10 h-10 text-tertiary" />}
          skills={[
            { name: "Node.js / Express", level: "Advanced", percent: 88 },
            { name: "Python / FastAPI", level: "Expert", percent: 92 },
          ]}
          tags={["Deployed scalable apps", "Microservices"]}
          color="tertiary"
          index={1}
        />
        <SkillCategoryAI
          title="AI & ML"
          label="Intelligence"
          icon={<Brain className="w-10 h-10 text-primary" />}
          expertise={[
            { label: "Expertise", value: "Deep Learning" },
            { label: "Expertise", value: "LLM Fine-tuning" },
            { label: "Tooling", value: "PyTorch / Jax" },
            { label: "Pipeline", value: "Data ETL" },
          ]}
          tags={["Research Oriented", "Model Deployment"]}
          color="primary"
          index={2}
        />
        <SkillCategoryDevOps
          title="DevOps & Cloud"
          label="Infrastructure"
          icon={<RefreshCw className="w-10 h-10 text-error" />}
          items={[
            { icon: <HardDrive className="w-5 h-5" />, name: "Docker & Kubernetes" },
            { icon: <Webhook className="w-5 h-5" />, name: "GitHub Actions / CI/CD" },
            { icon: <RefreshCw className="w-5 h-5" />, name: "Azure & AWS Management" },
          ]}
          tags={["Zero Downtime", "Vercel Expert"]}
          color="error"
          index={3}
        />
      </section>

      {/* Tool Stack Section */}
      <section className="mb-32 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-headline text-4xl font-black tracking-tight text-center mb-16"
        >
          The Professional Toolbelt
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <ToolItem icon={<GitBranch className="w-6 h-6" />} name="Git" index={0} />
          <ToolItem icon={<Webhook className="w-6 h-6" />} name="REST/GraphQL" index={1} />
          <ToolItem icon={<Database className="w-6 h-6" />} name="PostgreSQL" index={2} />
          <ToolItem icon={<TerminalIcon className="w-6 h-6" />} name="Bash/Zsh" index={3} />
          <ToolItem icon={<Activity className="w-6 h-6" />} name="Grafana" index={4} />
          <ToolItem icon={<Code className="w-6 h-6" />} name="VS Code" index={5} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 rounded-full overflow-hidden p-12 text-center bg-surface-container-high border border-outline-variant/10 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">Need These Skills in Your Project?</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto mb-10 leading-relaxed">
          Available for high-stakes engineering roles, architectural consulting, or custom AI solutions. Let&apos;s build something extraordinary together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            className="bg-gradient-to-r from-primary to-secondary text-on-primary-fixed px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(83,221,252,0.3)] transition-all"
            href="#"
          >
            Hire Me Now
          </a>
          <a
            className="bg-surface-container-highest border border-outline-variant/20 text-on-surface px-10 py-4 rounded-full font-bold text-lg hover:bg-surface-bright transition-all"
            href="#"
          >
            View Projects
          </a>
        </div>
      </section>
    </main>
  );
}

function TerminalIcon({ className }: { className?: string }) {
  return <Code className={className} />;
}

function SkillCategory({ title, label, icon, skills, tags, color, index }: any) {
  const colorText = color === "secondary" ? "text-secondary" : "text-tertiary";
  const colorGradient = color === "secondary" ? "from-primary to-secondary" : "from-tertiary to-tertiary-container";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-panel rounded-full p-8 group hover:bg-surface-bright transition-all duration-500"
    >
      <div className="flex justify-between items-start mb-10">
        <div>
          <span className={`font-label text-xs ${color === "secondary" ? "text-secondary-dim" : "text-tertiary-fixed"} tracking-widest uppercase mb-2 block`}>{label}</span>
          <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
        </div>
        <motion.div whileHover={{ rotate: 15 }}>{icon}</motion.div>
      </div>
      <div className="space-y-6">
        {skills.map((skill: any, idx: number) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between font-label text-sm uppercase">
              <span>{skill.name}</span>
              <span className={colorText}>{skill.level}</span>
            </div>
            <div className="h-1 w-full bg-surface-container-lowest rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + (idx * 0.1) }}
                className={`h-full bg-gradient-to-r ${colorGradient}`}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 rounded-full bg-surface-container-lowest text-[10px] font-label uppercase tracking-wider text-on-surface-variant border border-outline-variant/10">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function SkillCategoryAI({ title, label, icon, expertise, tags, color, index }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-panel rounded-full p-8 group hover:bg-surface-bright transition-all duration-500"
    >
      <div className="flex justify-between items-start mb-10">
        <div>
          <span className="font-label text-xs text-primary tracking-widest uppercase mb-2 block">{label}</span>
          <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
        </div>
        <motion.div whileHover={{ scale: 1.1 }}>{icon}</motion.div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {expertise.map((item: any, idx: number) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + (idx * 0.1) }}
            className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/5"
          >
            <span className="font-label text-[10px] uppercase text-on-surface-variant block mb-1">{item.label}</span>
            <p className="font-bold text-sm">{item.value}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 rounded-full bg-surface-container-lowest text-[10px] font-label uppercase tracking-wider text-on-surface-variant border border-outline-variant/10">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function SkillCategoryDevOps({ title, label, icon, items, tags, color, index }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-panel rounded-full p-8 group hover:bg-surface-bright transition-all duration-500"
    >
      <div className="flex justify-between items-start mb-10">
        <div>
          <span className="font-label text-xs text-error tracking-widest uppercase mb-2 block">{label}</span>
          <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
        </div>
        <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}>{icon}</motion.div>
      </div>
      <div className="space-y-4">
        {items.map((item: any, idx: number) => (
          <motion.div 
            key={idx} 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + (idx * 0.1) }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded bg-surface-container-lowest flex items-center justify-center border border-outline-variant/10">
              {item.icon}
            </div>
            <span className="font-medium">{item.name}</span>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span key={tag} className="px-3 py-1 rounded-full bg-surface-container-lowest text-[10px] font-label uppercase tracking-wider text-on-surface-variant border border-outline-variant/10">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ToolItem({ icon, name, index }: { icon: React.ReactNode, name: string, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -5, borderBottomColor: "rgba(var(--secondary), 0.3)" }}
      className="glass-panel p-6 rounded-xl flex flex-col items-center gap-3 hover:border-secondary/30 transition-all cursor-default"
    >
      <div className="text-secondary">
        {icon}
      </div>
      <span className="font-label text-xs uppercase tracking-tighter">{name}</span>
    </motion.div>
  );
}
