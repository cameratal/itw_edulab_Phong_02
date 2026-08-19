import React, { useEffect, useState } from "react";
import { X, Check, ArrowRight, ArrowLeft, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Inquiry } from "../types";
import confetti from "canvas-confetti";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [step, setStep] = useState(1);


  const initialFormData: Inquiry = {
  companyName: "",
  contactPerson: "",
  email: "",
  phone: "",
  sector: "Pflege",
  count: "2-5",
  languageRequired: "B1",
  message: "",
};
const [formData, setFormData] = useState<Inquiry>(initialFormData);

  const [errors, setErrors] = useState({
     companyName: "",
     contactPerson: "",
     email: "",
     phone: "",
    });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  
  const validate = () => {
    let newErrors = { companyName: "", contactPerson: "", email: "", phone: "" };
    let isValid = true;

    // if (!formData.companyName.trim()) {
    //   newErrors.companyName = "Bitte geben Sie den Namen Ihrer Firma ein.";
    //   isValid = false;
    // }

    // if (!formData.contactPerson.trim()) {
    //   newErrors.contactPerson =  "Bitte geben Sie den Namen Ihres Ansprechpartners ein.";
    //   isValid = false;
    // }
    
    // if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
    //   newErrors.email = "Die eingegebene E-Mail-Adresse ist ungültig. Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    //   isValid = false;
    // }

    // if (!formData.phone.trim() || !/^\d+$/.test(formData.phone)) {
    //   newErrors.phone = "Die eingegebene Telefonnummer ist ungültig. Bitte geben Sie eine gültige Telefonnummer ein.";
    //   isValid = false;
    // }
    
    // setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectSector = (val: string) => {
    setFormData((prev) => ({ ...prev, sector: val }));
  };

  const handleSelectLanguage = (val: string) => {
    setFormData((prev) => ({ ...prev, languageRequired: val }));
  };

  const nextStep = () => {
    if (step === 1 && !formData.sector) return;
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  /** Mail senden**/
  const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();

    if (!validate()) return;

    setLoading(true);
    setErrorMessage("");

    try {
     const response = await fetch("/api/inquiry", {
       method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
     });

     const data = await response.json();

      if (!response.ok || !data.success) {
        setErrorMessage(data.error || "E-Mail konnte nicht gesendet werden.");
        return;
     }

      setIsSuccess(true);

     confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
     });
    } catch {
      setErrorMessage("Netzwerkfehler. Bitte später erneut versuchen.");
   } finally {
      setLoading(false);
  }
};
/** Mail senden - Ende**/

  /** Mail send **/
  //  const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (validate()) {
  //     try {
  //     const response = await fetch("/api/inquiry", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await response.json();

  //     if (!response.ok || !data.success) {
  //       alert(data.error || "E-Mail konnte nicht gesendet werden.");
  //       return;
  //     }

  //     setIsSuccess(true);
  //     confetti({
  //       particleCount: 100,
  //       spread: 70,
  //       origin: { y: 0.6 }
  //     });

  //     // setFormData({ companyName: "", email: "", betreff: "", message: "" });
  //   } catch {
  //     alert("Netzwerkfehler. Bitte später erneut versuchen.");
  //   }
  //       }
  // };


  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!formData.companyName || !formData.contactPerson || !formData.email) {
  //     setErrorMessage("Bitte füllen Sie alle erforderlichen Felder aus.");
  //     return;
  //   }

  //   setLoading(true);
  //   setErrorMessage("");

  //   try {
  //     const response = await fetch("/api/inquiry", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });

  //     const resData = await response.json();
  //     if (response.ok && resData.success) {
  //       setIsSuccess(true);
  //     } else {
  //       setErrorMessage(resData.error || "Es gab ein Problem. Bitte versuchen Sie es erneut.");
  //     }
  //   } catch (err) {
  //     setErrorMessage("Netzwerkfehler. Bitte versuchen Sie es später noch einmal.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleReset = () => {
    setStep(1);
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      sector: "Pflege",
      count: "2-5",
      languageRequired: "B1",
      message: "",
    });
    setIsSuccess(false);
    setErrorMessage("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-neutral-900/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl overflow-hidden rounded-xl bg-white shadow-2xl border border-neutral-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-neutral-100 bg-neutral-50 px-6 py-4">
            <div>
              <h3 className="text-lg font-semibold text-black">
                Unverbindliche Personalanfrage
              </h3>
              <p className="text-xs text-neutral-500">
                ITW EduLab GmbH • In wenigen Schritten zu Ihrem Wunschpersonal
              </p>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-600 transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Success Screen */}
          {isSuccess ? (
            <div className="p-8 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <Check className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-black mb-2">
                Anfrage erfolgreich übermittelt!
              </h4>
              <p className="text-sm text-neutral-600 mb-6 max-w-sm mx-auto">
                Vielen Dank für Ihr Vertrauen in ITW EduLab. Wir haben Ihre Bedarfsdaten erhalten und einer unserer Berater wird Sie innerhalb von 24 Stunden kontaktieren.
              </p>
              
              <div className="mb-6 rounded-lg bg-neutral-50 p-4 text-left border border-neutral-100 text-xs text-neutral-600">
                <div className="font-semibold text-neutral-700 mb-2">Ihre angegebenen Daten:</div>
                <div><strong>Unternehmen:</strong> {formData.companyName}</div>
                <div><strong>Bereich:</strong> {formData.sector}</div>
                <div><strong>Bedarf:</strong> {formData.count} Fachkräfte</div>
                <div><strong>Sprachniveau:</strong> Deutsch {formData.languageRequired}</div>
              </div>

              <button
                onClick={handleReset}
                className="w-full rounded-lg bg-neutral-900 py-3 text-sm font-semibold text-white hover:bg-neutral-800 transition"
              >
                Schließen
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6">
            {/* // <form noValidate onSubmit={handleSubmit} className="p-6"> */}
              {/* Progress Indicator */}
              <div className="flex items-center justify-between mb-6 px-1">
                <span className="text-xs font-medium text-neutral-500">
                  Schritt {step} von 3
                </span>
                <div className="flex gap-1">
                  <div className={`h-1.5 w-10 rounded-full transition-colors ${step >= 1 ? "bg-neutral-800" : "bg-neutral-200"}`} />
                  <div className={`h-1.5 w-10 rounded-full transition-colors ${step >= 2 ? "bg-neutral-800" : "bg-neutral-200"}`} />
                  <div className={`h-1.5 w-10 rounded-full transition-colors ${step >= 3 ? "bg-neutral-800" : "bg-neutral-200"}`} />
                </div>
              </div>

              {/* Step 1: Sector and count */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-3">
                      Für welchen Fachbereich suchen Sie Personal? <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { label: "Lebensmittel", val: "Lebensmittel", info: "Fleischer, Bäcker, Verkäufer" },
                        { label: "Logistik", val: "Logistik", info: "Logistiker, Lagerarbeiter, Kommissionierer" },
                        { label: "Hotel und Gastronomie", val: "Gastronomie", info: "Köche, Servicekräfte, Hotelfachleute" },
                        { label: "Reinigung und Haushaltshilfe", val: "Reinigung", info: "Reinigungskräfte, Haushaltshilfen" },
                        { label: "Handwerk und Industrie", val: "Handwerk", info: "Elektriker, SHK, Schlosser" },
                        { label: "Andere Fachzweige", val: "Anderer", info: "technische Berufe, IT-Berufe usw." },
                      ].map((item) => (
                        <button
                          key={item.val}
                          type="button"
                          onClick={() => handleSelectSector(item.val)}
                          className={`flex flex-col text-left p-4 rounded-lg border transition ${
                            formData.sector === item.val
                              ? "border-neutral-900 bg-neutral-50/80 ring-1 ring-neutral-900"
                              : "border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50/30"
                          }`}
                        >
                          <span className="font-semibold text-neutral-800 text-sm">{item.label}</span>
                          <span className="text-neutral-400 text-xs mt-1">{item.info}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-2">
                      Wie viele Arbeitskräfte / Auszubildende benötigen Sie etwa?
                    </label>
                    <select
                      name="count"
                      value={formData.count}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-neutral-300 p-2.5 text-sm outline-none focus:border-neutral-800 focus:ring-1 focus:ring-neutral-800 bg-white"
                    >
                      <option value="1">1 Person</option>
                      <option value="2-5">2 bis 5 Personen</option>
                      <option value="6-10">6 bis 10 Personen</option>
                      <option value="10+">Mehr als 10 Personen</option>
                    </select>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-2 rounded-lg bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 transition"
                    >
                      Weiter <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Language level and message */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-3">
                      Über welches Deutsch-Sprachniveau sollten die Kandidaten verfügen?
                    </label>
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { label: "Deutsch A2", val: "A2", description: "Grundlagen" },
                        { label: "Deutsch B1", val: "B1", description: "Standard (ITW EduLab-Pflicht)" },
                        { label: "Deutsch B2", val: "B2", description: "Fortgeschritten" },
                      ].map((lvl) => (
                        <button
                          key={lvl.val}
                          type="button"
                          onClick={() => handleSelectLanguage(lvl.val)}
                          className={`p-3 rounded-lg border text-center transition ${
                            formData.languageRequired === lvl.val
                              ? "border-neutral-900 bg-neutral-50 ring-1 ring-neutral-900"
                              : "border-neutral-200 hover:border-neutral-400"
                          }`}
                        >
                          <div className="font-semibold text-neutral-800 text-sm">{lvl.label}</div>
                          <div className="text-neutral-400 text-xxs mt-0.5">{lvl.description}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-2">
                      Spezifische Anforderungen oder Anmerkungen (optional):
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Geben Sie hier Details zu Qualifikationen, gewünschten Berufsabschlüssen oder Zeitfenstern ein..."
                      rows={4}
                      className="w-full rounded-lg border border-neutral-300 p-2.5 text-sm outline-none focus:border-neutral-800 focus:ring-1 focus:ring-neutral-800 resize-none"
                    />
                  </div>

                  <div className="flex justify-between pt-4 border-t border-neutral-100">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition"
                    >
                      <ArrowLeft className="h-4 w-4" /> Zurück
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center gap-2 rounded-lg bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 transition"
                    >
                      Weiter <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Contact info and submit */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider mb-1">
                      Name des Unternehmens <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="z. B. Altenheim am Stadtpark GmbH"
                      className="w-full rounded-lg border border-neutral-300 p-2 text-sm outline-none focus:border-neutral-800 focus:ring-1 focus:ring-neutral-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider mb-1">
                      Ansprechpartner / Ansprechpartnerin <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="contactPerson"
                      required
                      value={formData.contactPerson}
                      onChange={handleChange}
                      placeholder="z. B. Sabine Müller (HR)"
                      className="w-full rounded-lg border border-neutral-300 p-2 text-sm outline-none focus:border-neutral-800 focus:ring-1 focus:ring-neutral-800"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider mb-1">
                        E-Mail-Adresse <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="s.mueller@unternehmen.de"
                        className="w-full rounded-lg border border-neutral-300 p-2 text-sm outline-none focus:border-neutral-800 focus:ring-1 focus:ring-neutral-800"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-neutral-600 uppercase tracking-wider mb-1">
                        Telefonnummer <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+49 (0) 30 1234567"
                        className="w-full rounded-lg border border-neutral-300 p-2 text-sm outline-none focus:border-neutral-800 focus:ring-1 focus:ring-neutral-800"
                      />
                    </div>
                  </div>

                  <div className="bg-neutral-50 rounded-lg p-3 text-xxs text-neutral-500 border border-neutral-150 leading-relaxed">
                    Datenschutz: Ihre personenbezogenen Daten werden im Einklang mit der DS-GVO ausschließlich zur Beantwortung dieser Anfrage verarbeitet.
                  </div>

                  {errorMessage && (
                    <div className="text-xs font-medium text-red-600 bg-red-50 border border-red-200 p-3 rounded-lg">
                      {errorMessage}
                    </div>
                  )}

                  <div className="flex justify-between pt-4 border-t border-neutral-100">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition"
                    >
                      <ArrowLeft className="h-4 w-4" /> Zurück
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="flex items-center gap-2 rounded-lg bg-neutral-950 px-5 py-2.5 text-sm font-bold text-white hover:bg-neutral-800 transition disabled:opacity-50"
                    >
                      {loading ? "Übermittlung..." : (
                        <>
                          Absenden <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
