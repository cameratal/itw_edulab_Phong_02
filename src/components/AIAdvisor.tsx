import React, { useState, useRef, useEffect } from "react";
import { Message } from "../types";
import { Send, Bot, User, RefreshCw, AlertCircle, HelpCircle, Sparkles, Languages } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function AIAdvisor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      role: "model",
      content: "Willkommen bei ITW EduLab! 👋\nIch bin Ihr virtueller Assistent. Wie kann ich Ihnen heute weiterhelfen?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  const quickQuestions = [
    "Wie sichert ITW EduLab das Deutsch-Sprachniveau?",
    "Ablauf der Pflegekräfte-Vermittlung?",
    "Welche Kosten kommen auf Arbeitgeber zu?",
    "Wie funktioniert das Visumsverfahren?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  /*
  useEffect(() => {
    if (hasScrolled) {
      scrollToBottom();
    } else {
      setHasScrolled(true);
    }
  }, [messages, isLoading]);
  */

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    setErrorText("");
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      // Map history excluding first initial message and formatting as simple structures
      const messageHistoryForApi = messages
        .filter((m) => m.id !== "initial")
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      const response = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: messageHistoryForApi,
          newMessage: textToSend,
        }),
      });

      const data = await response.json();

      if (response.ok && data.reply) {
        const botReply: Message = {
          id: (Date.now() + 1).toString(),
          role: "model",
          content: data.reply,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botReply]);
      } else {
        setErrorText(data.error || "Unerwartbare Antwort vom Server. Ist Ihr API-Schlüssel konfiguriert?");
      }
    } catch (err) {
      setErrorText("Netzwerkfehler. Konnte keine Verbindung zum KI-Kundenberater herstellen. Bitte prüfen Sie die Netzwerkkonfiguration.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "initial",
        role: "model",
        content: "Willkommen bei ITW EduLab! 👋\nIch bin Ihr virtueller Assistent. Wie kann ich Ihnen heute weiterhelfen?",
        timestamp: new Date(),
      },
    ]);
    setErrorText("");
  };

  return (
    <div className="flex flex-col h-[580px] bg-white rounded-xl shadow-xl overflow-hidden border border-neutral-200">
      {/* Top Banner / Card Title */}
      <div className="flex items-center justify-between px-6 py-4 bg-[#101d33] text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-[#1c2e4a] shadow-inner">
            <Bot className="h-5.5 w-5.5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-sm tracking-wide">IHR KI-ASSISTENT</h4>
              <span className="inline-flex items-center gap-1 text-[10px] bg-brand/20 text-brand-soft font-bold px-1.5 py-0.5 rounded-full border border-brand/30">
                <Sparkles className="h-2.5 w-2.5" /> Live
              </span>
            </div>
          </div>
        </div>

        <button
          onClick={(e) => { e.preventDefault(); handleResetChat(); }}
          title="Chat zurücksetzen"
          className="p-1.5 rounded-lg hover:bg-[#1c2e4a] text-neutral-400 hover:text-white transition"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>

      {/* Messages Thread panel */}
      <div className="flex-1 overflow-y-auto p-5 bg-neutral-50 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`flex gap-2.5 max-w-[85%] ${
                msg.role === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border shadow-sm ${
                  msg.role === "user"
                    ? "bg-[#101d33] border-neutral-800 text-white"
                    : "bg-[#d42027] border-[#a8161c] text-white"
                }`}
              >
                {msg.role === "user" ? (
                  <User className="h-4 w-4" />
                ) : (
                  <div className="font-bold text-[10px]">ITW</div>
                )}
              </div>

              <div
                className={`rounded-xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-[#101d33] text-white shadow-md rounded-tr-none"
                    : "bg-white text-[#1c2e4a] border border-neutral-200 shadow-sm rounded-tl-none font-normal"
                }`}
              >
                {msg.content}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="flex gap-2.5 items-center max-w-[85%]">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-[#1c2e4a] border border-neutral-300">
                <Bot className="h-4 w-4 animate-bounce" />
              </div>
              <div className="bg-white border border-neutral-200 rounded-xl rounded-tl-none px-4 py-3 text-neutral-400 font-medium text-xs flex items-center gap-2 shadow-sm">
                <span className="flex gap-1 h-3 items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 animate-bounce duration-300" style={{ animationDelay: "0ms" }} />
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 animate-bounce duration-300" style={{ animationDelay: "150ms" }} />
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 animate-bounce duration-300" style={{ animationDelay: "300ms" }} />
                </span>
                ITW EduLab AI analysiert Ihre Anfrage...
              </div>
            </div>
          </div>
        )}

        {errorText && (
          <div className="flex justify-center">
            <div className="flex items-center gap-2 text-xs font-semibold text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3 max-w-[90%]">
              <AlertCircle className="h-4.5 w-4.5 shrink-0" />
              <div>
                <span>{errorText}</span>
                <p className="font-normal text-xxs mt-1 text-red-500">Stellen Sie bitte sicher, dass der GEMINI_API_KEY im Secrets Panel hinterlegt ist.</p>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick click helper buttons */}
      {messages.length === 1 && !isLoading && (
        <div className="px-5 py-3 bg-neutral-100/50 border-t border-neutral-200">
          <p className="text-xxs font-extrabold text-[#1c2e4a] uppercase tracking-wider mb-2 flex items-center gap-1">
            <HelpCircle className="h-3.5 w-3.5" /> Häufig gestellte Fragen für Arbeitgeber:
          </p>
          <div className="grid grid-cols-2 gap-2">
            {quickQuestions.map((q) => (
              <button
                key={q}
                onClick={(e) => { e.preventDefault(); handleSendMessage(q); }}
                className="text-left text-xs bg-white hover:bg-[#1c2e4a] hover:text-white border border-neutral-200 hover:border-neutral-900 rounded-lg p-2.5 transition font-medium text-[#1c2e4a] truncate shadow-xs"
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chat Text Input Section */}
      <div className="p-4 bg-white border-t border-neutral-200 flex gap-2">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSendMessage(inputMessage);
            }
          }}
          disabled={isLoading}
          placeholder="Fragen Sie den AI-Berater (z. B. 'Wie lange dauert das Visaverfahren?')..."
          className="flex-1 rounded-lg border border-neutral-300 px-4 py-2.5 text-sm outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 disabled:opacity-50"
        />
        <button
          onClick={(e) => { e.preventDefault(); handleSendMessage(inputMessage); }}
          disabled={!inputMessage.trim() || isLoading}
          className="flex items-center justify-center h-10 w-10 shrink-0 bg-[#101d33] hover:bg-[#1c2e4a] text-white rounded-lg transition disabled:bg-neutral-200 disabled:text-neutral-400"
        >
          <Send className="h-4.5 w-4.5" />
        </button>
      </div>

      {/* Language Note */}
      <div className="py-2 px-4 bg-neutral-50 border-t border-neutral-150 text-[10px] text-neutral-400 flex justify-between items-center bg-gray-50/70">
        <span className="flex items-center gap-1 font-medium"><Languages className="h-3 w-3 text-neutral-400" /> Deutsch & Tiếng Việt unterstützt</span>
        <span>ITW EduLab GmbH</span>
      </div>
    </div>
  );
}
