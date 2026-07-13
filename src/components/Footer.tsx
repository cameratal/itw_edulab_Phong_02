import React from "react";
import KtmLogo from "./KtmLogo";
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
    <footer className="bg-black text-neutral-300">
     
    </footer>
  );
}
