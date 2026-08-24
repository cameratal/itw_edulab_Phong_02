import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const getCurrentDir = () => {
  if (typeof __dirname !== "undefined") {
    return __dirname;
  }
  try {
    if (typeof import.meta !== "undefined" && import.meta && import.meta.url) {
      return path.dirname(fileURLToPath(import.meta.url));
    }
  } catch {
    // ignore
  }
  return process.cwd();
};

const currentDir = getCurrentDir();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());
  
  const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  });

  // Thêm API cho Kontaktformular 
  app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, betreff, message } = req.body;

    if (!name || !email || !message || !phone) {
      res.status(400).json({ error: "Bitte füllen Sie Name, E-Mail, Telefonnummer und Nachricht aus." });
      return;
    }

    const to = process.env.CONTACT_FORM_RECEIVER || "cameratal@yahoo.com";
    const info = await transporter.sendMail({
      from: `"ITW EduLab Kontaktformular" <${process.env.SMTP_USER}>`,
      to,
      replyTo: email,
      subject: betreff || "Neue Nachricht vom Kontaktformular",
      text: `
Name: ${name}
E-Mail: ${email}
Telefon: ${phone}
Betreff: ${betreff || "-"}

Nachricht:
${message}
      `,
    });

    console.log("Contact mail sent:", {
      to,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
      messageId: info.messageId,
    });

    res.json({ success: true });
  } catch (error: any) {
    console.error("Contact mail error:", {
      code: error.code,
      command: error.command,
      response: error.response,
      responseCode: error.responseCode,
      message: error.message,
    });
    res.status(500).json({ error: "E-Mail konnte nicht gesendet werden." });
  }
});


// Thêm API cho Personalanfrage
app.post("/api/inquiry", async (req, res) => {
  try {
    const {
      companyName,
      contactPerson,
      email,
      phone,
      sector,
      count,
      languageRequired,
    } = req.body;

    if (!companyName || !contactPerson || !email) {
      return res.status(400).json({
        success: false,
        error: "Bitte füllen Sie Unternehmen, Ansprechpartner und E-Mail aus.",
      });
    }

    await transporter.sendMail({
      from: `"ITW EduLab Personalanfrage" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER || "info@itw-edulab.de",
      replyTo: email,
      subject: `Neue Personalanfrage von ${companyName}`,
      text: `
Neue Personalanfrage

Unternehmen: ${companyName}
Ansprechpartner: ${contactPerson}
E-Mail: ${email}
Telefon: ${phone || "-"}
Fachbereich: ${sector || "-"}
Bedarf: ${count || "-"}
Sprachniveau: ${languageRequired || "-"}
      `,
    });

    return res.json({ success: true });
  } catch (error) {
    console.error("Inquiry mail error:", error);
    return res.status(500).json({
      success: false,
      error: "E-Mail konnte nicht gesendet werden.",
    });
  }
});

  // Memory store for leads/inquiries
  const inquiries: any[] = [];

  // API Route: AI Advisor
  app.post("/api/consult", async (req, res) => {
    try {
      const { messages, newMessage } = req.body;

      if (!newMessage) {
         res.status(400).json({ error: "Missing message" });
         return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
         res.status(500).json({ error: "Gemini API key is not configured in environment variables. Please check Settings > Secrets." });
         return;
      }

      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });

      // Format previous messages for Gemini contents
      const formattedContents = [];
      if (Array.isArray(messages)) {
        for (const msg of messages) {
          formattedContents.push({
            role: msg.role === "user" ? "user" : "model",
            parts: [{ text: msg.content }]
          });
        }
      }
      formattedContents.push({
        role: "user",
        parts: [{ text: newMessage }]
      });

      const systemInstruction = `
Sie sind der offizielle ITW EduLab AI-Fachkräfteberater der ITW EduLab GmbH.
Ihre Rolle ist es, Kunden, deutsche Arbeitgeber sowie vietnamesische Bewerber/Auszubildende hochkompetent, höflich, vertrauenswürdig und lösungsorientiert über die Recruitment-Dienste, Sprachausbildung und Visaerteilung (insbesondere VISA 18b für Fachkräfte und Berufsausbildung) für deutsch-vietnamesische Personalvermittlung zu beraten.

Unternehmensfakten & Standorte:
- Name: ITW EduLab GmbH.
- Gegründet: August 2022.
- Hauptsitz in Deutschland: Herzbergstraße 33-34, 10365 Berlin, Deutschland (Lichtenberg).
- Gründerin & Geschäftsführerin: Frau Ly Herzog. Seit 2012 ein erstklassiger Netzwerkpartner von Fachschulen, Universitäten und Akademien in ganz Vietnam (v.a. Hanoi und Ho-Chi-Minh-Stadt).
- Generalbevollmächtigter: Herr Frank Deubler.
- Netzwerk: Über 20 etablierte staatliche und private Partner-Bildungsakademien und Berufsschulen in Vietnam.
- Erfahrung: Über 15 Jahre interkulturelle Praxiserfahrung in der deutsch-vietnamesischen Bildungs- und Arbeitskräftevermittlung.

Dienstleistungen & Kernprogramme von ITW EduLab (gelernt von itw-edulab.de):
1. Hochwertiges German Language Center (Đào tạo tiếng Đức):
   - Organisation von intensiven Deutschkursen von Niveau A1, A2 über B1 bis B2.
   - Moderne Ausstattung, engagierte und qualifizierte muttersprachliche sowie vietnamesische Lehrkräfte, interkulturelles Coaching.
   - Vorbereitung auf anerkannte Prüfungen (Telc, Goethe, ÖSD).

2. Berufsausbildung in Deutschland (Du học nghề Đức):
   - Pflege & điều dưỡng: Ein krisensicheres Berufsfeld mit extrem hoher Nachfrage und hervorragenden Entwicklungsperspektiven.
   - Hotellerie und Gastronomie (Nhà hàng - Khách sạn): Ausbildung in Spitzen-Gaststätten und Hotelbetrieben.
   - Einzelhandel & Verkauf (Ngành Bán hàng): Fachkraft für Verkauf und Einzelhandel.
   - Technische Berufe & Handwerk (Kỹ thuật - Cơ khí - Điện): Metallbau, Sanitär-Heizung-Klima (SHK), Elektrotechnik, Elektronik.

3. Qualifizierte Fachkräftevermittlung über das VISA 18b (Lao động lành nghề diện Visa 18b):
   - Fachkräfte mit einschlägigem Berufs- oder Hochschulabschluss, der in Deutschland offiziell anerkannt ist/wird.
   - Kosmetik- und Nagelpflege-Programm (Chương trình Kosmetik & Nail): Groß angelegtes Projekt für bis zu 200 qualifizierte Fachkräfte in Deutschland. Arbeitsverträge sind langfristig ausgelegt (8 Monate bis 2 Jahre, mit unbefristeten Verlängerungsoptionen).
   - Gastgewerbe (Nhà hàng - Khách sạn) Fachkräfte: Professionelle Köche und Servicekräfte.
   - Technische Berufe (Kỹ thuật - Cơ khí / Technik - Mechanik).
   - Altenpflege & Seniorenheime (Chăm sóc người già).

Der anerkannte 6-Schritte-Ablauf von ITW EduLab für deutsche Arbeitgeber:
1. Bedarfsanalyse (Ermittlung des Bedarfs): Analyse der genauen Qualifikationen, Tarifgehälter, Voraussetzungen und zeitlichen Pläne des Arbeitgebers.
2. Vorauswahl (Kandidatenliste): Direktes Recruitment und Vorauswahl von aussagekräftigen Dossiers (Lebensläufe, Videos, Zeugnisse) aus dem exklusiven Netzwerk in Vietnam.
3. Vorstellung (Interview / Eignungstest): Organisation von Online-Interviews (Videos) und Begleitung bei theoretischen oder praktischen Eignungsprüfungen.
4. Dokumente (Anerkennung & Arbeitserlaubnis): Vollständige Steuerung der Gleichwertigkeitsprüfung bei den zuständigen deutschen Anerkennungsstellen sowie des Zustimmungsverfahrens bei der Bundesagentur für Arbeit.
5. Visum (Visaerteilung & Einreise): Begleitung des Visaverfahrens (z. B. beschleunigtes Fachkräfteverfahren nach § 81a AufenthG) an der Deutschen Botschaft Hanoi oder dem Generalkonsulat Ho-Chi-Minh-Stadt, inklusive Flugbuchung und Reisevorbereitung.
6. Integration (Zusammenführung, Wohnen & Alltag): Praktische Unterstützung der vietnamesischen Mitarbeiter nach ihrer Ankunft in Deutschland – Hilfe bei der Wohnungssuche, Anmeldung beim Bürgeramt, Krankenkassen-Anmeldung, Onboarding am Arbeitsplatz und fortlaufende interkulturelle Begleitung.

Ihre Antwort- und Verhaltensleitlinien:
- Höflichkeit & Zuverlässigkeit: Beraten Sie Kunden professionell und verlässlich. Betonen Sie das "End-to-End"-Prinzip (Alles aus einer Hand, von der Rekrutierung in Vietnam über das Visum bis zur alltäglichen Integration in Deutschland).
- Zweisprachige Kompetenz (Deutsch und Vietnamesisch):
  - Wenn ein deutscher Arbeitgeber schreibt (standardmäßig auf Deutsch), antworten Sie in präzisem, geschäftsmäßigem und sachdienlichem Deutsch.
  - Wenn ein vietnamesischer Bewerber oder Schüler Fragen stellt (z. B. auf Vietnamesisch), antworten Sie in freundlichem, klarem und informativem Vietnamesisch. Ermutigen Sie sie und erklären Sie ihnen die Voraussetzungen (wie Sprachniveaus, Dokumentenvorbereitungen, Leistungen von ITW EduLab in Berlin).
- Präzision: Keine Erfindung von nicht existierenden Kosten oder Gesetzen. Beziehen Sie sich auf die gesetzlichen Säulen (beschleunigtes Fachkräfteverfahren, Anerkennungspartnerschaften, Aufenthaltserlaubnis nach § 18b) und die realen Dienstleistungen von ITW EduLab am Standort Berlin (Herzbergstraße 33-34).
- Ästhetische Struktur: Verwenden Sie strukturierte Aufzählungspunkte, Fettmarkierungen für wichtige Begriffe und halten Sie Absätze prägnant.
`;

      let response;
      const modelsToTry = ["gemini-flash-latest", "gemini-3.1-flash-lite", "gemini-3.5-flash"];
      let lastError = null;

      for (const modelName of modelsToTry) {
        try {
          response = await ai.models.generateContent({
            model: modelName,
            contents: formattedContents,
            config: {
              systemInstruction: systemInstruction,
              temperature: 0.5,
            }
          });
          if (response && response.text) {
            break;
          }
        } catch (err: any) {
          console.warn(`Model ${modelName} failed, trying fallback. Details: ${err.message || err}`);
          lastError = err;
        }
      }

      if (!response) {
        throw lastError || new Error("Es konnte keine Verbindung mit dem AI-Service hergestellt werden.");
      }

      res.json({ reply: response.text });
    } catch (error: any) {
      console.error("AI consult error:", error);
      res.status(500).json({ error: error.message || "Es gab ein Problem bei der Anfrage an den AI-Berater." });
    }
  });

  // API Route: Submit Inquiry form
  app.post("/api/inquiry", (req, res) => {
    try {
      const { companyName, contactPerson, email, phone, sector, count, message, languageRequired } = req.body;

      if (!companyName || !contactPerson || !email) {
         res.status(400).json({ error: "Bitte füllen Sie alle erforderlichen Felder aus (Firmenname, Ansprechpartner, E-Mail)." });
         return;
      }

      const newInquiry = {
        id: Date.now().toString(),
        companyName,
        contactPerson,
        email,
        phone: phone || "",
        sector: sector || "Nicht angegeben",
        count: count || "1",
        languageRequired: languageRequired || "B1",
        message: message || "",
        status: "Eingegangen",
        createdAt: new Date().toISOString()
      };

      inquiries.push(newInquiry);
      console.log("--- NEUE ANFRAGE EMPFANGEN ---");
      console.log("Sende E-Mail an: info@itw-edulab.de");
      console.log("Inhalt:", newInquiry);
      console.log("------------------------------");

      res.status(201).json({
        success: true,
        message: "Ihre unverbindliche Anfrage wurde erfolgreich übermittelt. Unser Beratungsteam wird sich in Kürze mit Ihnen in Verbindung setzen.",
        data: newInquiry
      });
    } catch (err: any) {
      res.status(500).json({ error: err.message || "Interner Serverfehler" });
    }
  });

  // Get current inquiries (useful for testing or listing in a simulated portal)
  app.get("/api/inquiries", (req, res) => {
    res.json(inquiries);
  });

  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server listening on Port ${PORT}`);
  });
}

startServer();
