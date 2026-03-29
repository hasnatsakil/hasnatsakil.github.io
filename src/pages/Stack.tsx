import React from "react";
import { Monitor, Terminal, Layers, Palette, Zap, Server, Code, FlaskConical, HardDrive, Webhook, Cloud, LineChart, Rocket } from "lucide-react";
import { motion } from "motion/react";

export default function Stack() {
  return (
    <main className="relative pt-24 pb-24 px-6 max-w-7xl mx-auto">
      <div className="fixed inset-0 noise-bg pointer-events-none"></div>
      
      {/* Hero Section */}
      <header className="mb-24 text-center md:text-left relative">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/15 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary">System Online: Tech Stack v4.0</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter mb-6 leading-[1.1]"
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Tech Stack</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed"
        >
          The technologies I use to design, build, and deploy scalable applications at the intersection of web, cloud, and artificial intelligence.
        </motion.p>
      </header>

      {/* Tech Grid (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* FRONTEND */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-8 bg-surface-container-low rounded-xl p-8 border border-outline-variant/15 group hover:bg-surface-bright transition-all duration-500 overflow-hidden relative"
        >
          <div className="flex justify-between items-start mb-12">
            <div>
              <h2 className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-2">01. Frontend Architecture</h2>
              <h3 className="font-headline text-3xl font-bold">Interfaces that Breathe</h3>
            </div>
            <motion.div whileHover={{ rotate: 15 }}>
              <Monitor className="text-primary w-10 h-10 opacity-20 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <TechItem icon={<Monitor className="w-6 h-6" />} title="React" description="Component-driven UI development with hook architecture." index={0} />
            <TechItem icon={<Layers className="w-6 h-6" />} title="Next.js" description="SSR and static site generation for optimal SEO and speed." index={1} />
            <TechItem icon={<Palette className="w-6 h-6" />} title="Tailwind CSS" description="Utility-first styling for rapid, bespoke UI delivery." index={2} />
          </div>
        </motion.section>

        {/* BACKEND */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-4 bg-surface-container-high rounded-xl p-8 border border-outline-variant/15 group hover:bg-surface-bright transition-all duration-500"
        >
          <div className="mb-12">
            <h2 className="font-label text-xs uppercase tracking-[0.3em] text-secondary-dim mb-2">02. Backend Systems</h2>
            <h3 className="font-headline text-3xl font-bold">Robust Logic</h3>
          </div>
          <div className="space-y-4">
            <BackendItem icon={<Terminal className="w-5 h-5" />} title="Node.js" description="Event-driven, non-blocking I/O" index={0} />
            <BackendItem icon={<Zap className="w-5 h-5" />} title="FastAPI" description="Modern, fast (high-performance) API" index={1} />
            <BackendItem icon={<Code className="w-5 h-5" />} title="Python" description="Powering logic and AI workflows" index={2} />
          </div>
        </motion.section>

        {/* AI & MACHINE LEARNING */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-12 bg-surface-container-lowest rounded-xl p-12 border border-outline-variant/15 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-tertiary-container/5 to-transparent"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-label text-xs uppercase tracking-[0.3em] text-tertiary mb-2">03. AI & Machine Learning</h2>
              <h3 className="font-headline text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">The Cognitive Edge</h3>
              <p className="text-on-surface-variant mb-8 max-w-md">Developing and deploying intelligent systems that learn, adapt, and provide meaningful insights through modern neural architectures.</p>
              <div className="flex flex-wrap gap-3">
                {["PyTorch", "TensorFlow", "Scikit-learn", "Model Deployment"].map((tag, idx) => (
                  <motion.span 
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="px-4 py-2 bg-surface-container-high rounded-full font-label text-[10px] text-tertiary border border-outline-variant/15 uppercase"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video bg-surface-container-high rounded-xl border border-outline-variant/15 overflow-hidden relative"
            >
              <img
                alt="Abstract 3D neural network representation"
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl-KD-HzgPtUbXOejwUnoDx_IPLa-k1C2B8YND22DsKQTDK2-zMNbYhLq_7p7t0CebmcuopRSl3W08c5uTNHUMh-6S6jT3gImhxjye-lwPOMWfAzhuA4nR2N5FLe3stu0IHFiiLlKpD4_E-qO-NHhKXs1bVoW2G4WrjBvFiqJNU4N2WhZ1XNJS95zaIjOlsBWctyAUkSm6lplXhc6IBZiGiIS2EshKpuf8zpSOl_SHdJeeVWhP_biFisLaY4rWv8HfXbTktC1QcIY"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center space-x-2">
                <FlaskConical className="w-5 h-5 text-tertiary" />
                <span className="font-label text-xs uppercase tracking-widest text-on-surface">Neural Architecture Visualization</span>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* DEVOPS & CLOUD */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-6 bg-surface-container-low rounded-xl p-8 border border-outline-variant/15 hover:bg-surface-bright transition-colors duration-300"
        >
          <h2 className="font-label text-xs uppercase tracking-[0.3em] text-primary mb-6">04. DevOps & Cloud</h2>
          <div className="grid grid-cols-2 gap-4">
            <CloudItem icon={<HardDrive className="w-6 h-6" />} title="Docker" subtitle="Containerization" index={0} />
            <CloudItem icon={<Webhook className="w-6 h-6" />} title="CI/CD" subtitle="Automated Pipeline" index={1} />
            <CloudItem icon={<Cloud className="w-6 h-6" />} title="Azure" subtitle="Cloud Infrastructure" index={2} />
            <CloudItem icon={<Rocket className="w-6 h-6" />} title="Vercel" subtitle="Edge Deployment" index={3} />
          </div>
        </motion.section>

        {/* DATABASE & APIs */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="md:col-span-6 bg-surface-container-low rounded-xl p-8 border border-outline-variant/15 hover:bg-surface-bright transition-colors duration-300"
        >
          <h2 className="font-label text-xs uppercase tracking-[0.3em] text-secondary mb-6">05. Data Persistence</h2>
          <div className="space-y-4">
            <DataItem icon={<Server className="w-5 h-5" />} title="PostgreSQL" type="Relational" index={0} />
            <DataItem icon={<HardDrive className="w-5 h-5" />} title="MongoDB" type="NoSQL" index={1} />
            <DataItem icon={<Webhook className="w-5 h-5" />} title="REST APIs" type="Standard" index={2} />
            <DataItem icon={<LineChart className="w-5 h-5" />} title="Supabase" type="BaaS" index={3} />
          </div>
        </motion.section>
      </div>

      {/* CTA Section */}
      <section className="mt-32 p-12 md:p-24 bg-surface-container-highest rounded-xl text-center relative overflow-hidden border border-white/5">
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="relative z-10">
          <h2 className="font-headline text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter">Want me to use this stack for your project?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-headline font-black text-lg rounded-xl hover:scale-105 transition-transform shadow-lg shadow-secondary/20">
              Hire Me
            </button>
            <button className="w-full sm:w-auto px-12 py-5 bg-surface-container-lowest border border-outline-variant/15 text-on-surface font-headline font-bold text-lg rounded-xl hover:bg-surface-bright transition-colors">
              View Projects
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function TechItem({ icon, title, description, index }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + (index * 0.1) }}
      whileHover={{ y: -5, borderColor: "rgba(var(--primary), 0.3)" }}
      className="p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/15 transition-all"
    >
      <div className="text-secondary mb-4">{icon}</div>
      <h4 className="font-headline font-bold mb-2">{title}</h4>
      <p className="text-xs text-on-surface-variant font-label">{description}</p>
    </motion.div>
  );
}

function BackendItem({ icon, title, description, index }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + (index * 0.1) }}
      whileHover={{ x: 5, backgroundColor: "rgba(var(--surface-bright), 1)" }}
      className="flex items-center space-x-4 p-4 bg-surface-container-lowest rounded-xl border-l-2 border-secondary-dim transition-all"
    >
      <div className="text-secondary-dim">{icon}</div>
      <div>
        <div className="font-headline font-bold text-sm">{title}</div>
        <div className="text-[10px] text-on-surface-variant font-label uppercase tracking-tighter">{description}</div>
      </div>
    </motion.div>
  );
}

function CloudItem({ icon, title, subtitle, index }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + (index * 0.1) }}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--surface-bright), 1)" }}
      className="p-6 bg-surface-container-lowest rounded-xl border border-white/5 flex flex-col items-center text-center transition-all"
    >
      <div className="text-primary mb-3">{icon}</div>
      <div className="font-headline font-bold text-sm">{title}</div>
      <div className="text-[9px] text-on-surface-variant font-label uppercase tracking-tighter">{subtitle}</div>
    </motion.div>
  );
}

function DataItem({ icon, title, type, index }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + (index * 0.1) }}
      whileHover={{ x: 5, backgroundColor: "rgba(var(--surface-bright), 1)" }}
      className="flex justify-between items-center p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/15 transition-all"
    >
      <div className="flex items-center space-x-3">
        <div className="text-secondary">{icon}</div>
        <span className="font-headline font-bold">{title}</span>
      </div>
      <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest px-2 py-1 bg-surface-container-high rounded">{type}</span>
    </motion.div>
  );
}
