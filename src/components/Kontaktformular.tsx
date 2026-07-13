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

   
  }

    if (!formData.message.trim()) {
      newErrors.message = "Bitte geben Sie Ihre Nachricht ein.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  /** Mail senden**/
  
  };
  /** Mail senden - Ende **/

  return (
   
        </div>
      </div>
    </div>
  );
}
