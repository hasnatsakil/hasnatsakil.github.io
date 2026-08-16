import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "../config/site";
import AIAssistant from "./AIAssistant";

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
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-2xl border border-slate-800/50 bg-slate-900/75 backdrop-blur-xl z-50 shadow-2xl shadow-blue-500/10 tonal-glow-bottom">
      <div className="flex justify-between items-center px-6 py-3">
        <Link to="/" className="text-xl font-black tracking-tighter text-slate-100 font-headline hover:text-blue-400 transition-colors">
          {siteConfig.shortName}
        </Link>

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

        <button 
          onClick={() => navigate("/contact")}
          className="hidden md:block bg-primary-fixed text-on-primary-fixed px-5 py-2 rounded-full font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-500/20 cursor-pointer"
        >
          Hire Me
        </button>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-slate-100 p-2 rounded-lg hover:bg-slate-800/40 transition-colors"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 pt-1 border-t border-slate-800/50">
          <div className="flex flex-col gap-1 bg-slate-900/40 rounded-xl p-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === link.path
                    ? "text-blue-300 bg-slate-800/50"
                    : "text-slate-300 hover:bg-slate-800/40"
                )}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={() => navigate("/contact")}
              className="mt-2 bg-primary-fixed text-on-primary-fixed px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900">
      <div className="flex flex-col md:flex-row justify-between items-center py-12 px-8 max-w-7xl mx-auto gap-6">
        <div className="text-xs text-slate-500 text-center md:text-left">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Engineered Elegance.
        </div>
        <div className="flex gap-8 font-label uppercase tracking-widest text-xs">
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.socials.fiverr}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-blue-300 transition-colors"
          >
            Fiverr
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative bg-[#080e18]">
      <TopNavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <AIAssistant />
    </div>
  );
}
