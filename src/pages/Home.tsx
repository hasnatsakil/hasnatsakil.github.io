import React from "react";
import { 
  Terminal, 
  ArrowRight, 
  Layers, 
  Brain, 
  RefreshCw, 
  Rocket, 
  ArrowUpRight, 
  FlaskConical, 
  Star, 
  Mail, 
  MapPin, 
  Link as LinkIcon, 
  User, 
  Send,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
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

export default function Home() {
  return (
    <div className="relative pt-20 overflow-hidden grid-lines">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
        className="hero-blob absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="hero-blob absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary rounded-full"
      ></motion.div>
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="z-10"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-[10px] font-label uppercase tracking-widest text-secondary">
              Available for new ventures
            </span>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-headline font-black tracking-tighter leading-[1.1] mb-6">
            Building <span className="gradient-text">Scalable AI Systems</span> & High-Performance Apps
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
            I turn research ideas into production-ready, cloud-native solutions using AI, DevOps, and modern web technologies.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-bold rounded-full text-lg hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              Hire Me <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 bg-surface-container-high border border-outline-variant/30 text-on-surface font-bold rounded-full text-lg hover:bg-surface-bright transition-all hover:scale-105 active:scale-95"
            >
              View Projects
            </Link>
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="relative"
        >
          <div className="glass-card p-4 rounded-2xl relative z-10 overflow-hidden aspect-square flex items-center justify-center">
            <img
              alt="Hasnat Sakil - Full Stack AI & DevOps Engineer"
              className="w-full h-full object-cover rounded-xl opacity-80"
              src="/images/profile.png"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
            <div className="absolute bottom-6 left-6 right-6 p-4 glass-card rounded-xl">
              <div className="flex items-center gap-3 mb-2">
                <Terminal className="w-4 h-4 text-secondary" />
                <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">
                  System Status
                </span>
              </div>
              <div className="h-1 w-full bg-outline-variant/20 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
                  className="h-full bg-secondary"
                ></motion.div>
              </div>
            </div>
          </div>
          {/* Decorative Element */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-40 h-40 border border-secondary/20 rounded-full flex items-center justify-center"
          >
            <div className="w-32 h-32 border border-primary/20 rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section Preview */}
      <section className="py-24 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-5 relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2">
                <img
                  alt="Professional portrait of Abul Hasnat Sakil"
                  className="w-full h-full object-cover rounded-2xl"
                  src="/images/profile.png"
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 p-6 glass-card rounded-2xl shadow-xl max-w-[240px]"
              >
                <p className="font-label text-xs uppercase text-primary mb-2">Research Mindset</p>
                <p className="text-sm font-medium">"Turning theoretical complexity into practical engineering simplicity."</p>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7"
            >
              <h2 className="font-label uppercase tracking-[0.2em] text-secondary mb-4 text-sm font-bold">The Persona</h2>
              <h3 className="text-4xl md:text-5xl font-headline font-extrabold mb-8 tracking-tight">Bridging <span className="gradient-text">Research</span> to Deployment.</h3>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed">
                <p>
                  I am Abul Hasnat Sakil, a multi-disciplinary engineer obsessed with how high-level research manifests as production-ready infrastructure. With a background rooted in AI Research and a career forged in DevOps and Full Stack Engineering, I bridge the gap between "what's possible" and "what scales".
                </p>
                <p>
                  My journey is defined by solving multi-dimensional problems—from architecting microservices for startups to training and deploying specialized Machine Learning models. I also leverage my experience as an ML instructor to communicate complex technical concepts effectively to diverse audiences.
                </p>
              </div>
              <div className="mt-12 flex items-center gap-8">
                <StatItem value="50+" label="Projects Shipped" />
                <div className="w-px h-12 bg-outline-variant/30"></div>
                <StatItem value="1k+" label="Students Taught" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-label uppercase tracking-[0.2em] text-primary mb-4 text-sm font-bold">Solutions</h2>
            <h3 className="text-4xl font-headline font-extrabold tracking-tight">Premium Engineering Services</h3>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<Layers className="w-10 h-10" />}
              title="Full Stack Development"
              description="Responsive, high-performance web apps built with React, Next.js, and Node.js."
              tags={["React", "Next.js"]}
              color="primary"
              index={0}
            />
            <ServiceCard
              icon={<Brain className="w-10 h-10" />}
              title="AI & ML Solutions"
              description="Integration of LLMs, predictive modeling, and AI-driven automation into your stack."
              tags={["Python", "FastAPI"]}
              color="secondary"
              index={1}
            />
            <ServiceCard
              icon={<RefreshCw className="w-10 h-10" />}
              title="DevOps & Cloud"
              description="Automated CI/CD pipelines and resilient cloud architectures on Azure/AWS."
              tags={["Docker", "Azure"]}
              color="tertiary"
              index={2}
            />
            <ServiceCard
              icon={<Rocket className="w-10 h-10" />}
              title="SaaS Systems"
              description="End-to-end architecture for startups ready to scale to millions of users."
              tags={["Node.js", "Scalability"]}
              color="primary-fixed"
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="font-label uppercase tracking-[0.2em] text-secondary mb-4 text-sm font-bold">Work Gallery</h2>
              <h3 className="text-4xl font-headline font-extrabold tracking-tight">Case Studies in Engineering</h3>
            </div>
            <Link to="/projects" className="text-primary font-bold hover:underline flex items-center gap-2 mb-2">
              View All Works <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="Visionary AI Dash"
              category="AI SaaS"
              year="2023"
              problem="Real-time processing lag in massive image datasets for enterprise clients."
              solution="Implemented a distributed FastAPI backend with Azure Kubernetes Service."
              result="40% reduction in latency and 2x higher throughput."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuB8yf_KzEfuBhm66qHWgpItYhC1N7dlSrXl9Q-Ue5WwVyVq3dB8bDWwxplh4sQnYF1mqWyhCixY-yQ1ss7ufpXKNFdJ-H9kQv69vjBqE4IH-qWKsmKJmWnyMiU3phEQb5wioP0A7IqJQfc5cRJs9Vn_S4x5ignmHY_yiGo_yOQV2MemFW2fZaFDVjjslctlk9WKaHzvRObrJ50sYJWH2M0gkDw1BK3up_66GJswECbSoD3h0aI6L3bHc_vZxNom6dzdc4PgYD1ECX4"
              index={0}
            />
            <ProjectCard
              title="Auto-Scale DevOps Framework"
              category="Cloud Infrastructure"
              year="2024"
              problem="Manual deployment bottlenecks causing significant downtime for e-commerce."
              solution="Built automated CI/CD pipelines using GitHub Actions and Docker."
              result="Zero-downtime deployments and 99.9% uptime achieved."
              image="https://lh3.googleusercontent.com/aida-public/AB6AXuARtWZX5Pu80_eqKIgPDs8p-h5uSDQL4xv3ZkE8tBeByqLWeG_uGk-argBfPDKNnfUBghXS9OvutVARL9WkRu0QfKUPUhaUsPOBj5EgzZibEP0bNvwSi7Bo_ck7LthPpou3XJ6Qbv85degLKMNcUNQobN79Tlp0kqgo64B6a6FCLJPezTNf62hiAXO5bK7OJW7Qr7qZ__5YnzFxUPA2pgwhBPhsifVAg2yeFV_bIj2GsrxvBQbm-edWSapmwBe09J1Dat35GMD_2Ss"
              index={1}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-label uppercase tracking-[0.2em] text-primary mb-4 text-sm font-bold">Stack</h2>
            <h3 className="text-4xl font-headline font-extrabold tracking-tight">The Kinetic Arsenal</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCategory
              title="Frontend"
              color="secondary"
              skills={[
                { name: "React / Next.js", level: "Expert" },
                { name: "Tailwind CSS", level: "Expert" },
                { name: "TypeScript", level: "Advanced" }
              ]}
            />
            <SkillCategory
              title="Backend"
              color="primary"
              skills={[
                { name: "Node.js / Express", level: "Expert" },
                { name: "FastAPI / Python", level: "Expert" },
                { name: "PostgreSQL / MongoDB", level: "Advanced" }
              ]}
            />
            <SkillCategory
              title="DevOps"
              color="tertiary"
              skills={[
                { name: "Docker / K8s", level: "Advanced" },
                { name: "Azure / AWS", level: "Intermediate" },
                { name: "CI/CD Pipelines", level: "Expert" }
              ]}
            />
            <SkillCategory
              title="AI / ML"
              color="secondary"
              skills={[
                { name: "Model Deployment", level: "Expert" },
                { name: "Deep Learning", level: "Intermediate" },
                { name: "LLM Fine-tuning", level: "Advanced" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="py-24 bg-surface-container-lowest overflow-hidden relative">
        <div className="absolute inset-0 grid-lines opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container border border-outline-variant/30 rounded-[2rem] p-12 flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="flex-1">
              <FlaskConical className="text-secondary w-12 h-12 mb-6" />
              <h3 className="text-3xl font-headline font-bold mb-6">The Research Core</h3>
              <p className="text-lg text-on-surface-variant leading-relaxed">
                I don't just use tools; I understand their architecture. My research background allows me to dive deep into neural network optimization and system scalability. I believe that a great engineer is first a curious researcher who experiments relentlessly until a theory becomes a high-performance system.
              </p>
            </div>
            <div className="w-full md:w-1/3 glass-card p-6 rounded-2xl">
              <div className="text-sm font-label text-primary uppercase mb-4">Currently Exploring</div>
              <ul className="space-y-3">
                {["Multi-modal LLM Agents", "Edge Computing for AI", "Distributed Training Systems"].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-label uppercase tracking-[0.2em] text-secondary mb-4 text-sm font-bold">Feedback</h2>
            <h3 className="text-4xl font-headline font-extrabold tracking-tight">Trusted by Innovation Leaders</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              text="Sakil's ability to take a complex ML concept and build a production-grade API around it in days is unmatched. A true asset."
              author="John Doe"
              role="CTO, TechVision AI"
              initials="JD"
            />
            <TestimonialCard
              text="The DevOps pipeline he built for us reduced our deployment errors by 90%. Professional, efficient, and highly skilled."
              author="Anna Smith"
              role="Lead Engineer, FlowSystems"
              initials="AS"
            />
            <TestimonialCard
              text="Beyond coding, his mentorship approach for our team was invaluable. He truly bridges research and practice."
              author="Marcus Reed"
              role="Product Owner, NexusHub"
              initials="MR"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-label uppercase tracking-[0.2em] text-secondary mb-4 text-sm font-bold">Connect</h2>
              <h3 className="text-5xl font-headline font-black mb-8 leading-tight">Let’s Build Something <span className="gradient-text">Powerful</span></h3>
              <p className="text-lg text-on-surface-variant mb-12">I'm currently open to freelance projects, research collaborations, and full-time opportunities with impact-driven teams.</p>
              <div className="space-y-6">
                <a href="mailto:abulhasnat.sakil@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center group-hover:bg-primary-container group-hover:text-on-primary-container transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-label uppercase text-on-surface-variant">Email me</p>
                    <p className="font-bold">abulhasnat.sakil@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-label uppercase text-on-surface-variant">Based in</p>
                    <p className="font-bold">Remote / Global</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-12">
                <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-secondary transition-all group">
                  <LinkIcon className="w-4 h-4 group-hover:text-on-secondary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-secondary transition-all group">
                  <User className="w-4 h-4 group-hover:text-on-secondary" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-[2.5rem]"
            >
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-label uppercase text-on-surface-variant mb-2">Full Name</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-outline-variant/50" placeholder="John Doe" type="text"/>
                </div>
                <div>
                  <label className="block text-xs font-label uppercase text-on-surface-variant mb-2">Email Address</label>
                  <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-outline-variant/50" placeholder="john@example.com" type="email"/>
                </div>
                <div>
                  <label className="block text-xs font-label uppercase text-on-surface-variant mb-2">Message</label>
                  <textarea className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all placeholder:text-outline-variant/50" placeholder="Tell me about your project..." rows={4}></textarea>
                </div>
                <button className="w-full py-4 bg-primary text-on-primary-fixed font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2" type="submit">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-3xl font-bold font-headline">{value}</p>
      <p className="text-sm font-label uppercase text-outline">{label}</p>
    </motion.div>
  );
}

function ServiceCard({ icon, title, description, tags, color, index }: { icon: React.ReactNode, title: string, description: string, tags: string[], color: string, index: number }) {
  const colorClasses: Record<string, string> = {
    primary: "hover:border-b-primary",
    secondary: "hover:border-b-secondary",
    tertiary: "hover:border-b-tertiary",
    "primary-fixed": "hover:border-b-primary-fixed",
  };

  const iconColorClasses: Record<string, string> = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
    "primary-fixed": "text-primary-fixed",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className={`glass-card p-8 rounded-3xl hover:bg-surface-bright transition-all group border-b-2 border-b-transparent ${colorClasses[color]}`}
    >
      <div className={`${iconColorClasses[color]} mb-6 block`}>
        {icon}
      </div>
      <h4 className="text-xl font-bold mb-4">{title}</h4>
      <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] font-label px-2 py-1 bg-surface-container-lowest rounded border border-outline-variant/20 uppercase">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, category, year, problem, solution, result, image, index }: { title: string, category: string, year: string, problem: string, solution: string, result: string, image: string, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-3xl overflow-hidden group"
    >
      <div className="relative h-64 overflow-hidden">
        <img alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={image} referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
      </div>
      <div className="p-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-label uppercase rounded-full">{category}</span>
          <span className="text-on-surface-variant text-xs font-label uppercase">{year}</span>
        </div>
        <h4 className="text-2xl font-bold mb-4">{title}</h4>
        <div className="space-y-4 mb-8">
          <p className="text-on-surface-variant text-sm"><strong className="text-on-surface">Problem:</strong> {problem}</p>
          <p className="text-on-surface-variant text-sm"><strong className="text-on-surface">Solution:</strong> {solution}</p>
          <p className="text-on-surface-variant text-sm font-bold text-secondary">Result: {result}</p>
        </div>
        <div className="flex items-center gap-4">
          <a className="px-6 py-2 bg-primary-fixed text-on-primary-fixed rounded-full text-xs font-bold hover:opacity-90 transition-all" href="#">Live Demo</a>
          <a className="px-6 py-2 bg-surface-container-highest border border-outline-variant/30 rounded-full text-xs font-bold hover:bg-surface-bright transition-all" href="#">View Details</a>
        </div>
      </div>
    </motion.div>
  );
}

function SkillCategory({ title, skills, color }: { title: string, skills: { name: string, level: string }[], color: string }) {
  const colorClasses: Record<string, string> = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h4 className={`font-label text-xs uppercase ${colorClasses[color]} mb-6 tracking-widest border-b border-outline-variant/30 pb-2`}>{title}</h4>
      <ul className="space-y-4">
        {skills.map(skill => (
          <li key={skill.name} className="flex justify-between items-center">
            <span className="font-medium">{skill.name}</span>
            <span className="text-xs text-on-surface-variant">{skill.level}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function TestimonialCard({ text, author, role, initials }: { text: string, author: string, role: string, initials: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-8 rounded-3xl"
    >
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
        ))}
      </div>
      <p className="text-on-surface-variant italic mb-8">"{text}"</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-surface-bright border border-outline-variant/30 flex items-center justify-center font-bold">
          {initials}
        </div>
        <div>
          <h5 className="font-bold">{author}</h5>
          <p className="text-xs text-on-surface-variant font-label">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}
