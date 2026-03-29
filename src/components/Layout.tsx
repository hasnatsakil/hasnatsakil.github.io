import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { motion } from "motion/react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Services", path: "/services" },
  { name: "Stack", path: "/stack" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export function TopNavBar() {
  const location = useLocation();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-2xl border border-slate-800/50 bg-slate-900/60 backdrop-blur-xl flex justify-between items-center px-6 py-3 z-50 shadow-2xl shadow-blue-500/10 tonal-glow-bottom">
      <div className="text-xl font-black tracking-tighter text-slate-100 font-headline">
        sakil.dev
      </div>
      <div className="hidden md:flex gap-8 items-center font-body tracking-tight font-medium text-sm">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "transition-all rounded-lg p-2 relative",
              location.pathname === link.path
                ? "text-blue-400 font-bold"
                : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/40"
            )}
          >
            {link.name}
            {location.pathname === link.path && (
              <motion.div
                layoutId="nav-underline"
                className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-500/50"
              />
            )}
          </Link>
        ))}
      </div>
      <button className="bg-primary-fixed text-on-primary-fixed px-5 py-2 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all">
        Hire Me
      </button>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto gap-6">
        <div className="text-xs text-slate-500 text-center md:text-right">
          © 2026 sakil.dev. Built with Engineered Elegance.
        </div>
        <div className="flex gap-8 font-label uppercase tracking-widest text-xs">
          <a href="#" className="text-slate-500 hover:text-blue-300 transition-colors">
            LinkedIn
          </a>
          <a href="#" className="text-slate-500 hover:text-blue-300 transition-colors">
            GitHub
          </a>
          <a href="#" className="text-slate-500 hover:text-blue-300 transition-colors">
            Fiverr
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
