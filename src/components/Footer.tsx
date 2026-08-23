import React from "react";
import { Mail, Phone, MapPin, Globe, Award, ShieldCheck } from "lucide-react";

export default function Footer({
  onNavigate,
}: {
  onNavigate: (view: string) => void;
}) {
  const handleScrollTo = (id: string) => {
    onNavigate("home");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <footer className="bg-[#0b1526] text-neutral-300">
      <div className="mx-auto w-full max-w-7xl px-4 pt-8 pb-2 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-white/10 items-start">
          {/* Logo & Brand statement */}
          <div className="space-y-4">
            <img
              src="/logo-itw-edulab-white.svg"
              alt="ITW EduLab"
              className="h-14 w-auto"
            />
            <p className="text-sm text-neutral-400">
              Ihr Partner für Vermittlung und Bildung zwischen Vietnam und
              Deutschland.
            </p>
          </div>

          {/* Office Germany */}
          <div className="space-y-4">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">
              Hauptsitz Deutschland
            </h5>
            <div className="text-sm space-y-1 text-neutral-300">
              <p>ITW EduLab GmbH</p>
              <p>Herzberg Str. 56-57</p>
              <p>10365 Berlin</p>
            </div>
          </div>

          {/* Office Vietnam */}
          <div className="space-y-4">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">
              Repräsentanz Vietnam
            </h5>
            <div className="text-sm space-y-1 text-neutral-300">
              <p>Trung tâm hợp tác quốc tế</p>
              <p>Trường Cao đẳng Công nghệ cao Hà Nội</p>
              <p>Phố Nhuệ Giang, Tây Mỗ, Hà Nội</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h5 className="font-bold text-white uppercase tracking-wider text-xs">
              Kontakt
            </h5>
            <div className="text-sm space-y-1 text-neutral-300">
              <p>+49 (0) 30 555 888 22</p>
              <p>info@itw-edulab.de</p>
              <p className="text-sm text-neutral-300">
                HRB 280592 B (AG Berlin-Charlottenburg)
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-4 text-xs text-neutral-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            © 2026 ITW EduLab GmbH. Alle Rechte vorbehalten.
          </div>
          <div className="flex gap-6">
            <button
              onClick={() => onNavigate("impressum")}
              className="hover:text-white transition"
            >
              Impressum
            </button>
            <button
              onClick={() => onNavigate("datenschutz")}
              className="hover:text-white transition"
            >
              Datenschutz
            </button>
            <button
              onClick={() => onNavigate("cookies")}
              className="hover:text-white transition"
            >
              Cookie-Richtlinie
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
