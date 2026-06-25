import React, { useState } from "react";
// import girlImg from "../assets/images/vietnamese_girl_smiling_1781767404933.jpg";
import confetti from "canvas-confetti";

export default function Kontaktformular({ isSection = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    betreff: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Bitte geben Sie Ihren Namen ein.";
      isValid = false;
    }
    
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Die eingegebene E-Mail-Adresse ist ungültig. Bitte geben Sie eine gültige E-Mail-Adresse ein.";
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Bitte geben Sie Ihre Nachricht ein.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        alert(data.error || "E-Mail konnte nicht gesendet werden.");
        return;
      }

      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      setFormData({ name: "", email: "", betreff: "", message: "" });
    } catch {
      alert("Netzwerkfehler. Bitte später erneut versuchen.");
    }
        }
  };

  return (
    <div className={`${isSection ? "" : "py-24 bg-white min-h-screen"}`}>
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8 ${isSection ? "py-12" : "py-0"}`}>
        <h1 className="text-4xl font-extrabold text-black sm:text-5xl tracking-tight uppercase mb-8 text-left">Kontaktformular</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <form onSubmit={handleSubmit} className="space-y-6 text-neutral-600 font-light leading-relaxed">
            <section>
              <h2 className="text-xl font-extrabold text-[#1c2e4a] mb-4 tracking-tight uppercase">Senden Sie uns eine Nachricht</h2>
              <div>
                <label className="block text-sm font-medium text-neutral-700">Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 border p-2"
                />
                {errors.name && <p className="text-orange-500 text-sm mt-1">{errors.name}</p>}
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-neutral-700">E-Mail</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 border p-2"
                />
                {errors.email && <p className="text-orange-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-neutral-700">Betreff</label>
                <input 
                  type="text" 
                  value={formData.betreff}
                  onChange={(e) => setFormData({...formData, betreff: e.target.value})}
                  className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 border p-2"
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-neutral-700">Nachricht</label>
                <textarea 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 border p-2"
                  rows={4}
                />
                {errors.message && <p className="text-orange-500 text-sm mt-1">{errors.message}</p>}
              </div>
              <button type="submit" className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-neutral-950 px-7 py-4 text-xs font-black tracking-wider uppercase text-white hover:bg-neutral-800 transition-all cursor-pointer">
                Absenden
              </button>
              
              {isSubmitted && (
                <div className="text-green-600 font-medium mt-4 text-lg">
                  Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.
                </div>
              )}
            </section>
          </form>
          
          <div className="hidden md:block">
            <img 
              src="/vietnamese_girl_smiling_02.jpg" 
              alt="Vietnamese girl smiling friendly" 
              className="rounded-2xl shadow-xl object-cover w-full h-full aspect-[4/5]" 
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
