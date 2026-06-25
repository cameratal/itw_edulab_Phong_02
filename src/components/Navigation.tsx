import React, { useState } from "react";
import { Menu, X, ArrowUpRight, MessageSquareCode } from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onNavigate: (tab: string) => void;
  onOpenInquiry: () => void;
}

export default function Navigation({ activeTab, onNavigate, onOpenInquiry }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "Über uns" },
    { id: "leistungen", label: "Leistungen" },
    { id: "how-it-works", label: "Zusammenarbeit" },
    { id: "ai-chat", label: "KI-Assistent" },
  ];

  const handleNavItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
    // Smooth scroll to element only if in home view
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div 
          onClick={() => handleNavItemClick("home")}
           className="cursor-pointer flex items-center justify-center h-14"
        >
          <img src="/ktm_logo.png" alt="" className="w-40" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavItemClick(item.id)}
              className={`text-sm font-medium tracking-wide transition relative py-2 ${
                activeTab === item.id
                  ? "text-neutral-900 font-bold"
                  : "text-neutral-500 hover:text-neutral-950"
              }`}
            >
              {item.label}
              {activeTab === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F59E0B] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => onNavigate("kontaktformular")}
            className="group flex items-center gap-1.5 rounded-lg bg-neutral-950 px-4 py-2.5 text-xs font-extrabold tracking-wider uppercase text-white hover:bg-neutral-800 transition"
          >
            Kontaktformular
            <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-white transition-colors" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-neutral-500 hover:bg-neutral-100 focus:outline-none"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-150 bg-white">
          <div className="space-y-1.5 px-4 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavItemClick(item.id)}
                className={`block w-full text-left rounded-lg p-3 text-sm font-semibold transition ${
                  activeTab === item.id
                    ? "bg-neutral-50 text-neutral-950 font-extrabold border-l-4 border-[#F59E0B]"
                    : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-950"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-neutral-100 flex flex-col gap-2">
              <button
                onClick={() => handleNavItemClick("ai-chat")}
                className="flex items-center justify-center gap-2 rounded-lg border border-neutral-200 p-3 text-sm font-bold text-neutral-700 hover:bg-neutral-50 transition"
              >
                <MessageSquareCode className="h-4.5 w-4.5 text-amber-500" /> AI-Fachkräfteberater
              </button>
              <button
                onClick={onOpenInquiry}
                className="w-full text-center rounded-lg bg-neutral-950 p-3 text-sm font-extrabold tracking-wider uppercase text-white hover:bg-neutral-800 transition"
              >
                Jetzt anfragen
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
