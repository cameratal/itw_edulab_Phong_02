import React, { useState } from "react";
// import girlImg from "../assets/images/vietnamese_girl_smiling_1781767404933.jpg";
import confetti from "canvas-confetti";

export default function Kontaktformular({ isSection = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    betreff: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let newErrors = { name: "", email: "", phone: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Bitte geben Sie Ihren Namen ein.";
      isValid = false;
    }
    
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Die eingegebene E-Mail-Adresse ist ungültig. Bitte geben Sie eine gültige E-Mail-Adresse ein.";
      isValid = false;
    }
    
    const phoneRegex = /^\+?[0-9\s-]{9,15}$/;
    if (!formData.phone.trim()) {
     newErrors.phone = "Bitte geben Sie Ihre Telefonnummer ein.";
     isValid = false;
    } else if (!phoneRegex.test(formData.phone.trim())) {
     newErrors.phone ="Bitte geben Sie eine gültige Telefonnummer ein.";
     isValid = false;
  }

    if (!formData.message.trim()) {
      newErrors.message = "Bitte geben Sie Ihre Nachricht ein.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  /** Mail senden**/
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

      setFormData({ name: "", email: "", phone: "", betreff: "", message: "" });
    } catch {
      alert("Netzwerkfehler. Bitte später erneut versuchen.");
    }
        }
  };
  /** Mail senden - Ende **/

  return (
    <div className={`${isSection ? "" : "py-24 bg-white min-h-screen"}`}>
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8 ${isSection ? "py-12" : "py-0"}`}>
       
      </div>
    </div>
  );
}
