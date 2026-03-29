import React from "react";
import { Mail, MapPin, ArrowRight, Link as LinkIcon, Terminal, ShoppingCart, User, Send } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <motion.span 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="font-label text-secondary uppercase tracking-widest text-xs mb-4 block"
        >
          Get in Touch
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[1.1]"
        >
          Let’s Build <span className="gradient-text">Something Powerful</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-on-surface-variant max-w-2xl text-lg leading-relaxed"
        >
          Whether you have a specific project in mind or just want to explore possibilities, I'm here to help architect your next digital breakthrough.
        </motion.p>
      </motion.header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Contact Form Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="lg:col-span-7 bg-surface-container-high rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"
          ></motion.div>
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Full Name</label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary-dim focus:ring-1 focus:ring-secondary-dim text-on-surface transition-all"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Email Address</label>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary-dim focus:ring-1 focus:ring-secondary-dim text-on-surface transition-all"
                  placeholder="john@example.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Subject</label>
              <motion.select 
                whileFocus={{ scale: 1.01 }}
                className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary-dim focus:ring-1 focus:ring-secondary-dim text-on-surface transition-all appearance-none"
              >
                <option>New Project Inquiry</option>
                <option>Consultation Request</option>
                <option>General Collaboration</option>
                <option>Other</option>
              </motion.select>
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Message</label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                className="w-full bg-surface-container-lowest border border-outline-variant/20 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary-dim focus:ring-1 focus:ring-secondary-dim text-on-surface transition-all resize-none"
                placeholder="Tell me about your vision..."
                rows={5}
              ></motion.textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(var(--primary), 0.3)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-primary to-secondary text-on-primary-fixed py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
              type="submit"
            >
              Send Message <Send className="w-5 h-5" />
            </motion.button>
          </form>
        </motion.div>

        {/* Info Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          {/* Quick Contact Bento */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ContactInfoItem icon={<Mail className="w-5 h-5" />} label="Email" value="abulhasnatsakil.cu@gmail.com" index={0} />
            <ContactInfoItem icon={<MapPin className="w-5 h-5" />} label="Location" value="Dhaka, Bangladesh" index={1} />
          </div>

          {/* Consultation CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-surface-container-high to-surface-container-lowest p-8 rounded-3xl border border-outline-variant/20 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h3 className="text-2xl font-bold mb-3">Schedule a Consultation</h3>
            <p className="text-on-surface-variant text-sm mb-6 leading-relaxed">
              Need an expert perspective on your architecture or tech stack? Let's hop on a 30-minute discovery call.
            </p>
            <motion.a 
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-2 text-primary font-bold group" 
              href="#"
            >
              Book a session
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-surface-container p-6 rounded-3xl border border-outline-variant/10"
          >
            <h4 className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-6">Digital Footprint</h4>
            <div className="flex flex-col gap-4">
              <SocialLink icon={<User className="w-5 h-5" />} name="LinkedIn" index={0} />
              <SocialLink icon={<Terminal className="w-5 h-5" />} name="GitHub" index={1} />
              <SocialLink icon={<ShoppingCart className="w-5 h-5" />} name="Fiverr" index={2} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <section className="mt-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full h-96 rounded-3xl overflow-hidden grayscale contrast-125 opacity-60 hover:opacity-100 transition-opacity duration-700 relative"
        >
          <img
            className="w-full h-full object-cover"
            alt="abstract stylized dark map"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAubXufBX0qbrQRfyJRpiGzxG_azK3YlU_giTyVqaH0f1XWAHkSD_LuFUrtZOHj5ryED89GxTSIEy-u4TWy-i8cyX1ITcex0NHVcfmMUL4AXSyPJATHKqqPCoptrNUAujOTxzjrXzIiDFtSkbAu6i-IQI0NdUw5v1O7z21KgCT9bwyBIv-9nHlbvl7jgSx4oYCRnzF05zjsodoGaGAFmtR4bXm9yY8U-BiNK_4dTmNCY638j5BDxP2GrQxQ1OYY8G7fD2wqFzPMevo"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </motion.div>
      </section>
    </main>
  );
}

function ContactInfoItem({ icon, label, value, index }: { icon: React.ReactNode, label: string, value: string, index: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + (index * 0.1) }}
      whileHover={{ y: -5, backgroundColor: "rgba(var(--surface-bright), 1)" }}
      className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/10 flex flex-col justify-between transition-all"
    >
      <motion.div 
        whileHover={{ rotate: 15 }}
        className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary"
      >
        {icon}
      </motion.div>
      <div>
        <p className="font-label text-[10px] uppercase text-on-surface-variant mb-1">{label}</p>
        <p className="font-semibold text-sm truncate">{value}</p>
      </div>
    </motion.div>
  );
}

function SocialLink({ icon, name, index }: { icon: React.ReactNode, name: string, index: number }) {
  return (
    <motion.a 
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 + (index * 0.1) }}
      whileHover={{ x: 5, backgroundColor: "rgba(var(--surface-bright), 1)" }}
      className="flex items-center justify-between p-3 rounded-xl transition-all" 
      href="#"
    >
      <div className="flex items-center gap-3">
        <div className="text-on-surface-variant">{icon}</div>
        <span className="font-medium">{name}</span>
      </div>
      <ArrowRight className="w-3 h-3 text-outline -rotate-45" />
    </motion.a>
  );
}
