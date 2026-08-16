import React, { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles, User, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "../config/site";

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  timestamp: string;
}

const suggestedPrompts = [
  "What is your core tech stack?",
  "Tell me about your AI & ML experience",
  "Are you available for hire?",
  "What projects have you built?",
];

const fallbackKnowledgeBase: Record<string, string> = {
  stack: `My core technical stack includes:
• **Frontend**: React, Next.js, TypeScript, Tailwind CSS
• **Backend**: Python, FastAPI, Node.js, Express, PostgreSQL, Redis
• **AI/ML**: PyTorch, LLM Fine-tuning, Model Deployment, Deep Learning
• **DevOps**: Docker, Kubernetes, Terraform, Azure, AWS, CI/CD Pipelines`,
  
  ai: `I specialize in bridging AI research and production infrastructure! I train & fine-tune custom LLM models, optimize PyTorch/FastAPI pipelines, and deploy containerized microservices to Kubernetes clusters with low latency.`,
  
  hire: `Yes! I am currently **${siteConfig.availability}**. You can reach me directly at **${siteConfig.email}** or submit a request via the Contact page.`,
  
  projects: `Some of my key projects include:
1. **Visionary AI Dash**: Distributed FastAPI + Azure AKS backend delivering 40% latency reduction.
2. **Auto-Scale Cloud Framework**: KEDA-based event autoscaling with 99.99% uptime.
3. **High-Throughput Secure API**: OAuth2.0 + Redis architecture handling 500k+ daily API calls.`,

  default: `I am Abul Hasnat Sakil's AI Portfolio Assistant! I can answer questions about Sakil's background as a Full Stack AI & DevOps Engineer, his tech stack, featured projects, or availability for collaboration.`
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "ai",
      text: `Hello! I'm Sakil's AI Assistant. Ask me anything about Sakil's AI research, DevOps experience, or technical stack!`,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    try {
      // Simulate intelligent response delay
      await new Promise((res) => setTimeout(res, 800));

      let responseText = "";
      const lower = query.toLowerCase();

      if (lower.includes("stack") || lower.includes("skill") || lower.includes("tech") || lower.includes("language")) {
        responseText = fallbackKnowledgeBase.stack;
      } else if (lower.includes("ai") || lower.includes("ml") || lower.includes("model") || lower.includes("learning")) {
        responseText = fallbackKnowledgeBase.ai;
      } else if (lower.includes("hire") || lower.includes("contact") || lower.includes("available") || lower.includes("work")) {
        responseText = fallbackKnowledgeBase.hire;
      } else if (lower.includes("project") || lower.includes("work") || lower.includes("built")) {
        responseText = fallbackKnowledgeBase.projects;
      } else {
        responseText = fallbackKnowledgeBase.default;
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: responseText,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, aiMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          sender: "ai",
          text: "Thanks for your question! Feel free to reach out to Sakil directly via email at " + siteConfig.email,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen((prev) => !prev)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative group bg-gradient-to-r from-primary to-secondary text-on-primary-fixed p-4 rounded-full shadow-2xl flex items-center justify-center border border-white/20"
          aria-label="Toggle AI Assistant"
        >
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full"></div>
          {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        </motion.button>
      </div>

      {/* Chat Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] max-w-md h-[550px] bg-slate-900/90 backdrop-blur-2xl border border-slate-800/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-slate-800/60 bg-slate-950/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center text-primary border border-primary/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-100 flex items-center gap-2">
                    Sakil AI Assistant
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  </h3>
                  <p className="text-[10px] text-slate-400 font-label uppercase tracking-widest">Powered by Gemini AI</p>
                </div>
              </div>
              <button
                onClick={() => setMessages([messages[0]])}
                className="text-slate-400 hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-800/50 transition-colors"
                title="Clear Chat"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 font-body text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs ${
                      msg.sender === "user"
                        ? "bg-secondary text-slate-950 font-bold"
                        : "bg-primary/20 text-primary border border-primary/30"
                    }`}
                  >
                    {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div
                    className={`max-w-[78%] p-3.5 rounded-2xl leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-secondary text-slate-950 rounded-tr-none font-medium"
                        : "bg-slate-800/60 text-slate-200 border border-slate-700/40 rounded-tl-none"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    <span className={`block text-[9px] mt-1 ${msg.sender === "user" ? "text-slate-800" : "text-slate-400"}`}>
                      {msg.timestamp}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-primary/20 text-primary flex items-center justify-center border border-primary/30">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-slate-800/60 border border-slate-700/40 p-3 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 rounded-full bg-primary animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Prompt Chips */}
            <div className="px-4 py-2 bg-slate-950/30 flex gap-1.5 overflow-x-auto no-scrollbar border-t border-slate-800/40">
              {suggestedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  className="whitespace-nowrap px-2.5 py-1 bg-slate-800/40 hover:bg-slate-800 border border-slate-700/50 text-[11px] text-slate-300 rounded-full transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-slate-950/60 border-t border-slate-800/60 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Sakil AI..."
                className="flex-1 bg-slate-900 border border-slate-700/60 rounded-xl px-3.5 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-secondary transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="bg-primary hover:bg-primary/90 disabled:opacity-50 text-slate-950 p-2.5 rounded-xl font-bold transition-all"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
