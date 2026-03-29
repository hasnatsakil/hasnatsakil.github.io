import React from "react";
import { Monitor, Brain, RefreshCw, Rocket, Zap } from "lucide-react";
import { motion } from "motion/react";

export default function Services() {
  return (
    <main className="relative pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 space-y-6 max-w-4xl"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/15"
        >
          <Zap className="w-4 h-4 text-secondary" />
          <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Engineering Excellence</span>
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-[1.1]"
        >
          Premium <span className="text-gradient">Engineering</span> Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed"
        >
          Transforming complex business challenges into streamlined, high-performance digital ecosystems. I provide the technical architectural foundation for modern scalability.
        </motion.p>
      </motion.header>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <ServiceCard
          module="Module 01"
          icon={<Monitor className="w-8 h-8" />}
          title="Full Stack Development"
          problem="Bridging the gap between beautiful interfaces and robust backends."
          architecture="Building pixel-perfect frontends integrated with secure, high-availability server architectures."
          tags={["React", "Node.js", "FastAPI"]}
          outcome="Scalable, production-ready web applications."
          index={0}
        />
        <ServiceCard
          module="Module 02"
          icon={<Brain className="w-8 h-8" />}
          title="AI & Machine Learning Solutions"
          problem="Turning data into actionable intelligence."
          architecture="Integrating intelligent capabilities into existing workflows, from predictive analytics to LLM implementations."
          tags={["Python", "PyTorch", "FastAPI"]}
          outcome="Data-driven systems that learn and adapt."
          index={1}
        />
        <ServiceCard
          module="Module 03"
          icon={<RefreshCw className="w-8 h-8" />}
          title="DevOps & Cloud Deployment"
          problem="Eliminating deployment bottlenecks and manual errors."
          architecture="Automating CI/CD pipelines and resilient cloud architectures on Azure/AWS platforms."
          tags={["Docker", "Kubernetes", "Terraform"]}
          outcome="Zero-downtime deployments and 99.9% uptime."
          index={2}
        />
        <ServiceCard
          module="Module 04"
          icon={<Rocket className="w-8 h-8" />}
          title="SaaS & Startup Systems"
          problem="Designing end-to-end architectures for new ventures."
          architecture="Building multi-tenant applications including subscription logic and tenant-isolated data structures."
          tags={["Next.js", "PostgreSQL", "Stripe"]}
          outcome="Rapidly launched, scalable product foundations."
          index={3}
        />
      </section>

      {/* Engagement Models */}
      <section className="mb-32 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl text-center glass-panel p-10 rounded-full border border-outline-variant/10 relative overflow-hidden"
        >
          <motion.div 
            animate={{ 
              background: [
                "linear-gradient(to right, rgba(var(--primary), 0.05), rgba(var(--secondary), 0.05))",
                "linear-gradient(to right, rgba(var(--secondary), 0.05), rgba(var(--tertiary), 0.05))",
                "linear-gradient(to right, rgba(var(--tertiary), 0.05), rgba(var(--primary), 0.05))"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-50"
          ></motion.div>
          <div className="relative z-10 flex flex-col items-center gap-4">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="w-10 h-10 text-primary" />
            </motion.div>
            <h2 className="text-2xl font-bold font-headline">Engagement Models</h2>
            <p className="text-on-surface-variant text-lg">Project-based or monthly retainer options available to fit your growth strategy.</p>
            <div className="flex gap-4 mt-2">
              {["Fixed-Scope", "Dedicated FTE", "Advisory"].map((model, idx) => (
                <motion.span 
                  key={model}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (idx * 0.1) }}
                  className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant/60 bg-surface-container-lowest px-3 py-1 rounded-full"
                >
                  {model}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

function ServiceCard({ module, icon, title, problem, architecture, tags, outcome, index }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(var(--primary), 0.1)" }}
      className="group relative p-8 rounded-full bg-surface-container-low border border-outline-variant/10 hover:border-primary/30 transition-all duration-500"
    >
      <div className="mb-8 flex items-start justify-between">
        <motion.div 
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8 }}
          className="w-14 h-14 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary border border-outline-variant/20 group-hover:bg-primary group-hover:text-on-primary transition-colors"
        >
          {icon}
        </motion.div>
        <span className="font-label text-[10px] text-on-surface-variant/50 uppercase tracking-widest">{module}</span>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-on-surface font-headline">{title}</h3>
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="font-label text-[10px] uppercase tracking-widest text-secondary-dim/70">Problem</p>
          <p className="text-on-surface-variant text-sm italic">"{problem}"</p>
        </div>
        <div className="space-y-2">
          <p className="font-label text-[10px] uppercase tracking-widest text-primary/70">The Architecture</p>
          <p className="text-on-surface text-base leading-relaxed">{architecture}</p>
        </div>
        <div className="p-4 rounded-lg bg-surface-container-lowest border border-outline-variant/10">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag: string) => (
              <span key={tag} className="px-2 py-1 rounded bg-surface-bright text-tertiary font-label text-[10px] uppercase tracking-wider">{tag}</span>
            ))}
          </div>
        </div>
        <div className="pt-4 border-t border-outline-variant/10">
          <p className="text-sm font-medium text-on-surface">Outcome: <span className="text-secondary-dim">{outcome}</span></p>
        </div>
      </div>
    </motion.div>
  );
}
