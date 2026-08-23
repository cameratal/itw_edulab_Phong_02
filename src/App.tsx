import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import CookieRichtline from "./components/CookieRichtline";
import Kontaktformular from "./components/Kontaktformular";
import InquiryModal from "./components/InquiryModal";
import AIAdvisor from "./components/AIAdvisor";
import HeroSlideshow from "./components/HeroSlideshow";
import Aktivitaet from "./components/Aktivitaet";
// @ts-ignore
import heroBusinesswoman from "./assets/images/itw-edulab_hero_businesswoman.png";
import { 
  ClipboardList, 
  Search, 
  Users, 
  FileCheck, 
  Globe, 
  HeartHandshake, 
  ArrowUpRight, 
  Check, 
  Award, 
  ShieldCheck, 
  TrendingUp, 
  GraduationCap, 
  Building2, 
  Clock, 
  Briefcase,
  Star,
  Users2,
  Sparkles,
  ChevronRight,
  BookOpen,
  Target,
  UserCheck,
  MessagesSquare,
  Plane,
  ClipboardCheck,
  BadgeCheck
} from "lucide-react";
import { motion } from "motion/react";

// Customized high-fidelity SVG icon for Step 1: Checklist on a clipboard with a drawing pencil
const ChecklistDrawingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth={props.strokeWidth || "2.5"}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    {/* Clipboard body */}
    <rect x="25" y="15" width="50" height="70" rx="4" strokeWidth="3" />
    
    {/* Clip at the top */}
    <path d="M42 15v-4h16v4" strokeWidth="2.5" />
    <path d="M38 15h24" strokeWidth="3" />
    <circle cx="50" cy="11" r="1.5" fill="currentColor" />

    {/* Checkbox 1 (checked) */}
    <rect x="33" y="27" width="8" height="8" rx="1.5" strokeWidth="2" />
    <path d="M34.5 31l2 2 3.5-3.5" strokeWidth="2.5" />
    <line x1="47.5" y1="31" x2="67" y2="31" strokeWidth="2.5" />

    {/* Checkbox 2 (checked) */}
    <rect x="33" y="41" width="8" height="8" rx="1.5" strokeWidth="2" />
    <path d="M34.5 45l2 2 3.5-3.5" strokeWidth="2.5" />
    <line x1="47.5" y1="45" x2="67" y2="45" strokeWidth="2.5" />

    {/* Checkbox 3 (checked) */}
    <rect x="33" y="55" width="8" height="8" rx="1.5" strokeWidth="2" />
    <path d="M34.5 59l2 2 3.5-3.5" strokeWidth="2.5" />
    <line x1="47.5" y1="59" x2="67" y2="59" strokeWidth="2.5" />

    {/* Checkbox 4 (unchecked/empty) */}
    <rect x="33" y="69" width="8" height="8" rx="1.5" strokeWidth="2" />
    <line x1="47.5" y1="73" x2="63" y2="73" strokeWidth="2.5" />

    {/* Elegant Pen/Pencil on the right side drawing diagonally down-left */}
    <path d="M68 62 L78 38 A 2 2 0 0 1 80.5 37 L82 38.5 A 2 2 0 0 1 82 41 L72 65 Z" fill="currentColor" />
    {/* Pen tip pointing at checkbox 4 area */}
    <path d="M68 62 L65 67 L70 66 Z" fill="currentColor" />
  </svg>
);

// Customized high-fidelity SVG icon for Step 2: Search Candidates (Vorauswahl)
const SearchCandidatesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth={props.strokeWidth || "2.5"}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    {/* Left candidate user profile (behind) */}
    <path d="M15 65 c0 -8 6 -12 14 -12 h2" strokeWidth="2.2" />
    <circle cx="23" cy="45" r="5" strokeWidth="2.2" />

    {/* Right candidate user profile (behind) */}
    <path d="M69 65 c0 -8 6 -12 14 -12 h2" strokeWidth="2.2" />
    <circle cx="77" cy="45" r="5" strokeWidth="2.2" />

    {/* Central focused candidate profile (larger, in front) */}
    <path d="M32 72 c0 -12 10 -16 18 -16 s18 4 18 16" strokeWidth="3" />
    <circle cx="50" cy="42" r="8" strokeWidth="3" />

    {/* Large Magnifying glass focusing on central person */}
    <circle cx="50" cy="42" r="18" strokeWidth="3.5" fill="none" />
    {/* Magnifying glass handle going down-right */}
    <line x1="63" y1="55" x2="82" y2="74" strokeWidth="4.5" />
    <line x1="65.5" y1="52.5" x2="84.5" y2="71.5" strokeWidth="1.5" />
  </svg>
);

// Customized high-fidelity SVG icon for Step 3: Two people sitting at table (Vorstellung)
const InterviewTableIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth={props.strokeWidth || "2.5"}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    {/* The Central Desk/Table */}
    <line x1="32" y1="64" x2="68" y2="64" strokeWidth="3" />
    <line x1="38" y1="64" x2="38" y2="82" strokeWidth="2.5" />
    <line x1="62" y1="64" x2="62" y2="82" strokeWidth="2.5" />

    {/* Left person (Candidate) sitting on chair */}
    {/* Head */}
    <circle cx="26" cy="46" r="4.5" strokeWidth="2.5" />
    {/* Body / Arm / Legs */}
    <path d="M18 78 V62 c0 -4 3 -6 6 -6 h4" strokeWidth="2.5" />
    {/* Leg in front */}
    <path d="M28 56 L31 64 L31 78" strokeWidth="2.5" />
    {/* Chair back support */}
    <path d="M16 54 v26" strokeWidth="2.5" />
    <line x1="16" y1="66" x2="19" y2="66" strokeWidth="2" />

    {/* Right person (Recruiter) sitting on chair */}
    {/* Head */}
    <circle cx="74" cy="46" r="4.5" strokeWidth="2.5" />
    {/* Body / Arm / Legs */}
    <path d="M82 78 V62 c0 -4 -3 -6 -6 -6 h-4" strokeWidth="2.5" />
    <path d="M72 56 L69 64 L69 78" strokeWidth="2.5" />
    {/* Chair support */}
    <path d="M84 54 v26" strokeWidth="2.5" />
    <line x1="84" y1="66" x2="81" y2="66" strokeWidth="2" />

    {/* Chat bubble at top with interior lines */}
    <rect x="36" y="16" width="28" height="18" rx="4" strokeWidth="2.5" />
    {/* Chat tail pointing down towards the left candidate */}
    <path d="M42 34 L38 40 L44 34 Z" fill="currentColor" stroke="none" />
    
    {/* Inside lines of chat bubble */}
    <line x1="42" y1="22" x2="58" y2="22" strokeWidth="25" />
    <line x1="42" y1="28" x2="54" y2="28" strokeWidth="25" />
  </svg>
);

// Customized high-fidelity SVG icon for Step 4: Written workplace contract with signatures (Dokumente)
const ContractSignatureIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth={props.strokeWidth || "2.5"}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    {/* Paper boundary with bottom-left corner folded up */}
    <path d="M30 14h40v66H42l-12-12Z" strokeWidth="3" />
    
    {/* Fold line representation */}
    <path d="M42 80V68H30" strokeWidth="2.5" />

    {/* Document lines representing information */}
    <line x1="36" y1="26" x2="64" y2="26" strokeWidth="2.5" />
    <line x1="36" y1="36" x2="64" y2="36" strokeWidth="2.5" />
    <line x1="36" y1="46" x2="64" y2="46" strokeWidth="2.5" />
    <line x1="36" y1="56" x2="60" y2="56" strokeWidth="2.5" />

    {/* Scribbled signature at the bottom-right */}
    <path d="M46 70c2-1.5 5-1.5 7 0s3-2 6 -1" strokeWidth="2" />

    {/* Fountain signature pen signing diagonally on right */}
    <line x1="74" y1="36" x2="58" y2="64" strokeWidth="3" />
    <path d="M57 62 L55 68 L61 66 Z" fill="currentColor" />
    {/* Pen clip/details */}
    <rect x="71" y="32" width="4" height="12" rx="1" transform="rotate(-30 71 32)" fill="currentColor" />
  </svg>
);

// Customized high-fidelity SVG icon for Step 5: Official Visa Passport with Global graphics (Visum)
const VisaPassportIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth={props.strokeWidth || "2.8"}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    {/* Secondary offset sheet behind to add depth (matching reference image) */}
    <path d="M41 15 h32 v62" strokeWidth="2.8" />

    {/* Front booklet cover */}
    <rect x="22" y="21" width="44" height="64" rx="2.5" strokeWidth="3.8" />

    {/* Globe outline inside the cover */}
    <circle cx="44" cy="47" r="14" strokeWidth="3" />
    
    {/* Globe grid lines matching the image perfectly */}
    <line x1="44" y1="33" x2="44" y2="61" strokeWidth="1.8" />
    <line x1="30" y1="47" x2="58" y2="47" strokeWidth="1.8" />
    
    {/* Longitudinal elliptical gridlines */}
    <path d="M44 33 A 6.5 14 0 0 0 44 61" strokeWidth="1.8" />
    <path d="M44 33 A 6.5 14 0 0 1 44 61" strokeWidth="1.8" />
    
    {/* Latitudinal elliptical gridlines */}
    <path d="M32.5 41 A 14 5.5 0 0 0 55.5 41" strokeWidth="1.8" />
    <path d="M32.5 53 A 14 5.5 0 0 1 55.5 53" strokeWidth="1.8" />

    {/* Bold custom vector letters spelling "VISA" at the bottom */}
    <g strokeWidth="3.5" strokeLinecap="square">
      {/* V */}
      <path d="M28 73.5 L32 81.5 L36 73.5" />
      {/* I */}
      <line x1="40" y1="73.5" x2="40" y2="81.5" />
      {/* S */}
      <path d="M44.2 74.8 C44.2 73.2 48.5 73.2 48.5 75.2 C48.5 77.2 44.2 77.5 44.2 79.5 C44.2 81.2 48.5 81.2 48.5 79.8" />
      {/* A */}
      <path d="M52.5 81.5 L56 73.5 L59.5 81.5 M53.5 79.2 H58.5" />
    </g>
  </svg>
);

// Customized high-fidelity SVG icon for Step 6: Solid handshake representing cooperation (Integration)
const HandshakeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth={props.strokeWidth || "2.8"}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    {/* Left Sleeve/Cuff (Slanted matching reference) */}
    <path d="M14 54 L25 39 M19 59 L30 44" strokeWidth="3.2" />
    <line x1="25" y1="39" x2="30" y2="44" strokeWidth="3.2" />
    <line x1="14" y1="54" x2="19" y2="59" strokeWidth="3.2" />

    {/* Right Sleeve/Cuff (Slanted matching reference) */}
    <path d="M86 54 L75 39 M81 59 L70 44" strokeWidth="3.2" />
    <line x1="75" y1="39" x2="70" y2="44" strokeWidth="3.2" />
    <line x1="86" y1="54" x2="81" y2="59" strokeWidth="3.2" />

    {/* Upper hand connection (Thumb + curve) */}
    <path d="M30 44 C36 32, 47 31, 52 36 L62 44 C65 47, 65 50, 62 53 L57 57" strokeWidth="3.2" />

    {/* Interlocking fingers wrapping from underneath (Capsule style matching the reference image) */}
    {/* Finger 1 */}
    <path d="M36 53 C33 56, 35 61, 40 61 C43 61, 46 57, 46 53" strokeWidth="3.2" />
    {/* Finger 2 */}
    <path d="M41 58 C38 61, 40 66, 45 66 C48 66, 51 62, 51 58" strokeWidth="3.2" />
    {/* Finger 3 */}
    <path d="M46 63 C43 66, 45 71, 50 71 C53 71, 56 67, 56 63" strokeWidth="3.2" />
    {/* Finger 4 */}
    <path d="M51 68 C48 71, 50 76, 55 76 C58 76, 61 72, 61 68" strokeWidth="3.2" />

    {/* Lower wrist connections */}
    <path d="M30 44 L36 53" strokeWidth="3.2" />
    <path d="M70 44 L57 57" strokeWidth="3.2" />
  </svg>
);

export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [activeTab, setActiveTab ] = useState("home");
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const handleNavigate = (view: string) => {
    if (view === "impressum") {
      setCurrentView("impressum");
    } else if (view === "datenschutz") {
      setCurrentView("datenschutz");
    } else if (view === "cookies") {
      setCurrentView("cookies");
    } else if (view === "kontaktformular") {
      setCurrentView("kontaktformular");
    } else {
      setCurrentView("home");
      setActiveTab(view);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [selectedProcessStep, setSelectedProcessStep] = useState<number | null>(null);
  const [showHeroDetails, setShowHeroDetails] = useState(false);
  const [activeFounder, setActiveFounder] = useState<"son" | "frank">("son");
  const [showAIChatDetails, setShowAIChatDetails] = useState(true);

  // The 6 steps data exactly as described in Page 2
  const recruitmentSteps = [
    {
      id: 1,
      stepNum: "01",
      shortTitle: "Bedarfsanalyse",
      title: "Ermittlung Ihres Bedarfs",
      subtitle: "Anforderungen und Zeitplan definieren",
      description: "Über eine dêtallierte Anfrage ermitteln wir Ihren genauen Personalbedarf.",
      detailText: "Wir besprechen mit Ihnen die fachlichen Qualifikationen, deutschen Sprachfortschritte (A2, B1, B2) sowie das tarifliche Gehalt und erstellen ein klares Anforderungsprofil.",
      icon: ChecklistDrawingIcon,
      color: "bg-[#101d33]",
    },
    {
      id: 2,
      stepNum: "02",
      shortTitle: "Vorauswahl",
      title: "Kandidatenliste zu Ihrer Auswahl",
      subtitle: "Geeignete Kandidaten in Vietnam auswählen",
      description: "Wir erstellen eine passgenaue Auswahl qualifizierter Kandidat:innen für Sie.",
      detailText: "Aus unserem weitreichenden Netzwerk von über 20 Partnerakademien und Berufsschulen in Vietnam präsentieren wir Ihnen aussagekräftige Profile (Lebensläufe, Videos, Zeugnisse).",
      icon: SearchCandidatesIcon,
      color: "bg-[#101d33]",
    },
    {
      id: 3,
      stepNum: "03",
      shortTitle: "Vorstellung",
      title: "Eignungstest / Interview",
      subtitle: "Passende Kandidaten interviewen und auswählen",
      description: "Gemeinsam führen wir Eignungstests und Vorstellungsgespräche durch.",
      detailText: "Wir organisieren video-basierte Rekrutierungsgespräche und begleiten Sie bei theoretischen oder praktischen Eignungstests, um die fachliche Passung einwandfrei zu verifizieren.",
      icon: InterviewTableIcon,
      color: "bg-[#101d33]",
    },
    {
      id: 4,
      stepNum: "04",
      shortTitle: "Dokumente",
      title: "Aufenthalts- & Arbeitserlaubnis",
      subtitle: "Vertrags- und Visumunterlagen vollständig vorbereiten",
      description: "Wir unterstützen Sie vollumfänglich bei Visa, Aufenthaltstitel und Arbeitserlaubnis.",
      detailText: "ITW EduLab übernimmt das gesamte bürokratische Übertragungsverfahren (z. B. Beantragung der Gleichwertigkeit Ihres Berufsabschlusses in Deutschland, Erklärung zu Arbeitsverhältnissen).",
      icon: ContractSignatureIcon,
      color: "bg-[#101d33]",
    },
    {
      id: 5,
      stepNum: "05",
      shortTitle: "Visum",
      title: "Zusammenführung & Visaerteilung",
      subtitle: "Visumprozess begleiten und Einreise planen",
      description: "Erfolgreiche Vermittlung und direkte Visaabwicklung für den neuen Mitarbeiter.",
      detailText: "Wir buchen die Interkontinentalflüge, bereiten den Kandidaten auf die Ankunft in Deutschland vor und steuern die Visa-Ausstellung mit der deutschen Botschaft in Hanoi / Generalskonsulat HCM.",
      icon: VisaPassportIcon,
      color: "bg-[#101d33]",
    },
    {
      id: 6,
      stepNum: "06",
      shortTitle: "Integration",
      title: "Mitarbeiter:innen starten bei Ihnen",
      subtitle: "Nach Ankunft unterstützen, begleiten und integrieren",
      description: "Die Fachkräfte nehmen ihre Tätigkeit auf. Integration ins Team gelingt mühelos.",
      detailText: "Unser Service geht weiter: Wir helfen bei Behördengängen, der Wohnungssuche, Krankenkassen-Anmeldung und begleiten den Integrationsprozess eng am Arbeitsplatz und im Alltag.",
      icon: Users,
      color: "bg-[#101d33]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1c2e4a] font-sans selection:bg-[#d42027]/20 selection:text-[#1c2e4a]">
      {/* Navigation Headers */}
      <Navigation 
        activeTab={activeTab} 
        onNavigate={handleNavigate} 
        onOpenInquiry={() => setIsInquiryOpen(true)} 
      />

      {currentView === "home" ? (
      <>
      {/* Hero Section (Trang 1) */}
      <section 
        id="home" 
        className="relative overflow-hidden pt-12 pb-24 md:py-32 border-b border-neutral-200"
      >
        {/* Subtle grid patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Headline and Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <h1 
                onClick={() => setShowHeroDetails(!showHeroDetails)}
                className="text-4xl font-extrabold tracking-tight text-[#101d33] sm:text-5xl lg:text-6xl leading-[1.08] cursor-pointer hover:text-[#24365f] transition-all select-none group"
              >
                Ihr Partner für Ihren Bedarf an <span className="relative inline-block">Arbeitskräften<span className="absolute left-0 bottom-1 w-full h-1 bg-brand rounded" /></span>
              </h1>
              
              <div className={`transition-all duration-[700ms] ease-in-out overflow-hidden ${
                showHeroDetails ? 'opacity-100 max-h-[500px] mt-4 space-y-6' : 'opacity-0 max-h-0'
              }`}>
                <p className="text-base text-[#1c2e4a] sm:text-lg leading-relaxed max-w-3xl font-light">
                  ITW EduLab ist Ihr Partner für die Gewinnung von Fachkräften und Auszubildenden aus Vietnam. Wir unterstützen deutsche Unternehmen dabei, offene Stellen in personalintensiven und schwer zu besetzenden Bereichen strukturiert und verlässlich zu besetzen.
                </p>
              </div>

              {/* Action and CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => setIsInquiryOpen(true)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#101d33] px-7 py-4 text-xs font-black tracking-wider uppercase text-white hover:bg-[#1c2e4a] shadow-lg shadow-neutral-950/15 ring-2 ring-transparent hover:ring-neutral-950 transition-all cursor-pointer"
                >
                  Jetzt unverbindlich anfragen
                  <ArrowUpRight className="h-4.5 w-4.5 text-neutral-400 group-hover:text-white" />
                </button>
                {/* Nút KI-Assistent — ẩn theo yêu cầu.
                    Nó trỏ tới #ai-chat, mà mục đó đã bị bỏ trống bên dưới (dòng ~755),
                    nên bấm vào không đi đâu cả. Giữ nguyên mã để bật lại là gỡ dấu chú
                    thích ra dùng ngay. */}
                {/*
                <a
                  href="#ai-chat"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white border border-neutral-200 hover:border-neutral-900 px-7 py-4 text-xs font-extrabold text-[#1c2e4a] transition"
                >
                  <Sparkles className="h-4 w-4 text-brand animate-pulse" /> KI-Assistent
                </a>
                */}
              </div>
            </div>

            {/* Right Column: Recruiter Consultation Image (Trang 1 illustration) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md overflow-hidden transition-transform duration-300 flex items-center justify-center aspect-[4/5]">
                <HeroSlideshow />
              </div>

              {/* Decorative background shape */}
              <div className="absolute -bottom-6 -right-6 -z-10 h-64 w-64 bg-brand/10 rounded-full blur-2xl" />
            </div>

          </div>
        </div>
      </section>

      {/* Corporate profile: Wer wir sind (Trang 3) */}
      <section 
        id="about" 
        className="py-24 bg-[#F2F2F5] border-b border-neutral-200 scroll-mt-10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Portrait: below the copy on small screens, left column on large screens */}
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative mx-auto max-w-lg space-y-6">
                
                {/* Dynamically renders photo representing Ngoc Nguyen or Frank Deubler */}
                <div className="aspect-[4/4] rounded-xl overflow-hidden bg-neutral-200 relative">
                  {activeFounder === "son" ? (                    
                    <img 
                      key="son-img"
                      // src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800&h=600"
                      /**test */
                      src="/itw-edulab_direktor_02.png "
                      alt="Ngoc Nguyen - ITW EduLab Gründer & Geschäftsführer"
                      className="h-full w-full object-cover transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />                   
                  ) : (
                    <img 
                      key="frank-img"
                      src="/itw-edulab_Frank_Deubler.png"
                      alt="Frank Deubler - ITW EduLab Generalbevollmächtigter"
                      className="h-full w-full object-cover transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  {/* Glowing Overlay banner showing the detail of the selected co-founder */}
                  <div className="absolute inset-x-0 bottom-0 bg-[#101d33]/70 p-4 text-white backdrop-blur-xs flex items-center justify-between">
                    <div>
                      <div className="text-xs font-black uppercase text-brand">
                        {activeFounder === "son" ? "Ngoc Nguyen" : "Prof. Dr. (UA) Frank Deubler"}
                      </div>
                      <div className="text-[10px] text-neutral-300">
                        {activeFounder === "son" ? "Gründer & Geschäftsführer" : "Generalbevollmächtigter"}
                      </div>
                    </div>
                    <div className="text-[10px] font-semibold border border-neutral-500 rounded px-1 text-neutral-200">
                      {activeFounder === "son" ? "Hanoi • Berlin" : "Berlin - Deutschland"}
                    </div>
                  </div>
                </div>

                {/* Subtitles labels below image functioning as interactive tabs */}
                <div className="grid grid-cols-2 gap-3">
                  <div 
                    onClick={() => setActiveFounder("son")}
                    className={`text-center p-3 rounded-xl border transition-all duration-300 cursor-pointer select-none ${
                      activeFounder === "son"
                        ? "bg-[#101d33] text-white border-neutral-950 shadow-md scale-[1.01]"
                        : "bg-neutral-50 text-[#1c2e4a] border-neutral-200 hover:bg-neutral-100 hover:text-[#1c2e4a] animate-none"
                    }`}
                  >
                    <h5 className={`font-extrabold text-xs transition-colors duration-300 ${activeFounder === "son" ? "text-[#d42027]" : "text-[#1c2e4a]"}`}>
                      Ngoc Nguyen
                    </h5>
                    <p className={`text-[9px] uppercase tracking-wide mt-0.5 transition-colors duration-300 ${activeFounder === "son" ? "text-neutral-300" : "text-[#1c2e4a]"}`}>
                      Gründer &amp; Geschäftsführer
                    </p>
                  </div>
                  
                  <div 
                    onClick={() => setActiveFounder("frank")}
                    className={`text-center p-3 rounded-xl border transition-all duration-300 cursor-pointer select-none ${
                      activeFounder === "frank"
                        ? "bg-[#101d33] text-white border-neutral-950 shadow-md scale-[1.01]"
                        : "bg-neutral-50 text-[#1c2e4a] border-neutral-200 hover:bg-neutral-100 hover:text-[#1c2e4a] animate-none"
                    }`}
                  >
                    <h5 className={`font-extrabold text-xs transition-colors duration-300 ${activeFounder === "frank" ? "text-[#d42027]" : "text-[#1c2e4a]"}`}>
                      Prof. Dr. (UA) Frank Deubler
                    </h5>
                    <p className={`text-[9px] uppercase tracking-wide mt-0.5 transition-colors duration-300 ${activeFounder === "frank" ? "text-neutral-300" : "text-[#1c2e4a]"}`}>
                      Generalbevollmächtigter
                    </p>
                  </div>
                </div>


              </div>
            </div>

            {/* About us texts: first on small screens, right column on large screens */}
            <div className="lg:col-span-6 text-left space-y-6 order-1 lg:order-2">
              <h3 className="text-4xl font-extrabold text-[#101d33] sm:text-5xl tracking-tight uppercase">
                Wer wir sind
              </h3>
              <p className="text-xl font-extrabold text-[#101d33] mb-4 tracking-tight uppercase">
                ITW EDULAB NETZWERK • HANOI • HO CHI MINH CITY • BERLIN
              </p>
              
              <div className="space-y-4 text-[#1c2e4a] font-light text-base leading-relaxed">
                {activeFounder === "son" ? (
                  <>
                    <p>
                      <strong className="text-[#1c2e4a] font-semibold">Ngoc Nguyen</strong>, Gründer von ITW EduLab, ist seit 2012 ein verlässlicher Kooperationspartner von Berufsschulen, Ausbildungswerkstätten und Universitäten in Vietnam – mit Schwerpunkten in Hanoi und Ho Chi Minh Stadt.
                    </p>
                    <p>
                      Unser Netzwerk umfasst derzeit <strong className="text-[#1c2e4a] font-semibold">über 20 etablierte Partnerinstitutionen</strong> und bietet Ihnen eine breite Auswahl an qualifizierten Fachkräften aus verschiedenen Berufszweigen, unter anderem im Handwerk, in der Pflege und im Gastgewerbe.
                    </p>
                    <p>
                      Mit mehr als <strong className="text-[#1c2e4a] font-semibold">15 Jahren Erfahrung</strong> in der internationalen Arbeitskräftebeschaffung übernehmen wir für Sie den gesamten Prozess – von der Vorauswahl über den Vertragsabschluss bis zur vollständigen Abwicklung des Visumsverfahrens. Alles aus einer Hand.
                    </p>
                     <p>
                      Eine erfolgreiche Integration beginnt bereits im Herkunftsland. Deshalb bereiten wir unsere Kandidatinnen und Kandidaten intensiv auf ihren Einsatz in Deutschland vor. Neben berufsbezogenen Deutschkenntnissen vermitteln wir auch interkulturelle Kompetenzen sowie grundlegendes Wissen über das deutsche Arbeitsleben. Dadurch können sich die Fachkräfte schneller in ihrem neuen Arbeitsumfeld zurechtfinden und langfristig erfolgreich in Ihr Unternehmen integrieren.
                    </p>                    
                  </>
                ) : (
                  <>
                    <p>
                      <strong className="text-[#1c2e4a] font-semibold">Prof. Dr. (UA) Frank Deubler</strong> unterstützt Sie mit seiner langjährigen Expertise aus Forschung und Lehre bei einer strukturierten Analyse Ihres Personalbedarfs. So finden wir gezielt die passenden Kandidat:innen für Ihr Unternehmen.
                    </p>
                    <p>
                      Ein eigens entwickelter Eignungstest ermöglicht eine schnelle und präzise Bewertung der Profile. Dadurch können Sie qualifizierte Fachkräfte aus dem Ausland komfortabel von Deutschland aus auswählen.
                    </p>
                    <p>
                      Wir übernehmen für Sie die komplette behördliche Abwicklung – einschließlich der Kommunikation mit Kammern, Arbeitsagentur und Auslandsvertretungen. So erhalten Sie einen vollumfänglichen, sorgenfreien Service aus einer Hand.
                    </p>
                    <p >
                      Prof. Dr. (UA) Frank Deubler steht Ihnen persönlich als Ansprechpartner zur Verfügung. Gerne beantwortet er Ihre Fragen per E-Mail oder Telefon und besucht Ihr Unternehmen auf Wunsch auch vor Ort, um Ihren individuellen Personalbedarf kennenzulernen. In einem persönlichen Gespräch entwickelt er gemeinsam mit Ihnen die passende Recruiting-Strategie und begleitet Sie kompetent durch den gesamten Vermittlungsprozess.
                    </p>
                  </>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>

      <Aktivitaet />

      {/* Recruitment Process Steps (Trang 2) */}
      <section 
        id="leistungen" 
        className="py-24 bg-white border-b border-neutral-200 scroll-mt-10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-[#101d33] sm:text-5xl tracking-tight uppercase mb-8 text-center">
            Unsere Leistungen
          </h2>
          <p className="text-base text-[#1c2e4a] font-light leading-relaxed max-w-3xl mx-auto text-center mb-16">
            Wir begleiten Unternehmen bei der Gewinnung qualifizierter Fachkräfte und Auszubildender aus Vietnam – zuverlässig, transparent und aus einer Hand.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fachkräfte und Auszubildende aus Vietnam",
                text: "Wir vermitteln qualifizierte Fachkräfte und motivierte Auszubildende aus Vietnam für verschiedene Branchen. Durch eine sorgfältige Auswahl stellen wir sicher, dass Qualifikation, Motivation und Anforderungen optimal zusammenpassen.",
                icon: Users
              },
              {
                title: "Recruiting und Kandidatenauswahl",
                text: "Von der Kandidatensuche über die Vorauswahl bis zur Terminorganisation übernehmen wir den gesamten Recruiting-Prozess. Sie sprechen ausschließlich mit Bewerbern, die Ihren Anforderungen entsprechen.",
                icon: Search
              },
              {
                title: "Visum- und Anerkennungsverfahren",
                text: "Wir koordinieren alle notwendigen Schritte – von Übersetzungen und Beglaubigungen bis hin zu Visa- und Anerkennungsverfahren. Dabei halten wir Sie jederzeit über den aktuellen Stand informiert.",
                icon: FileCheck
              },
              {
                title: "Einreise und Unterbringung",
                text: "Wir unterstützen bei der Organisation der Einreise sowie bei Fragen rund um die Unterkunft. So ermöglichen wir einen reibungslosen Start in Deutschland.",
                icon: Plane
              },
              {
                title: "Integration und Betreuung",
                text: "Auch nach der Ankunft begleiten wir Fachkräfte, Auszubildende und Unternehmen bei den wichtigsten Integrationsschritten. Unser Ziel ist eine erfolgreiche und langfristige Zusammenarbeit.",
                icon: HeartHandshake
              },
              {
                title: "Persönliche Ansprechpartner",
                text: "Während des gesamten Prozesses steht Ihnen ein fester Ansprechpartner zur Verfügung – für kurze Wege, transparente Kommunikation und verlässliche Unterstützung.",
                icon: UserCheck
              }
            ].map((service, index) => (
              <div key={index} className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 hover:border-brand/30 transition-all duration-300">
                <service.icon className="h-10 w-10 text-brand mb-6" />
                <h3 className="text-xl font-extrabold text-[#101d33] mb-4 tracking-tight uppercase">
                  {service.title}
                </h3>
                <p className="text-base text-[#1c2e4a] font-light leading-relaxed">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button
              onClick={() => setIsInquiryOpen(true)}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#101d33] px-7 py-4 text-xs font-black tracking-wider uppercase text-white hover:bg-[#1c2e4a] shadow-lg shadow-neutral-950/15 ring-2 ring-transparent hover:ring-neutral-950 transition-all cursor-pointer mx-auto"
            >
              Jetzt unverbindlich anfragen
              <ArrowUpRight className="h-4.5 w-4.5 text-neutral-400 group-hover:text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Recruitment Process Steps (Trang 2) */}
      <section 
        id="how-it-works" 
        className="py-24 bg-[#F2F2F5] border-b border-neutral-200 scroll-mt-10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          

          {/* Header section of Section 2 */}
          <div className="mx-auto max-w-3xl mb-16 space-y-4">
            <h2 className="text-4xl font-extrabold text-[#101d33] sm:text-5xl tracking-tight uppercase">
              In 6 Schritten zur Besetzung
            </h2>
            <p className="text-[#1c2e4a] text-sm font-light max-w-2xl mx-auto leading-relaxed">
              In 6 aufeinander abgestimmten Schritten begleiten wir deutsche Arbeitgeber und vietnamesische Kandidaten bis zur erfolgreichen Zusammenführung und nachhaltigen Integration.
            </p>
          </div>

          {/* Connected timeline (corresponds directly to image 2 "In 6 Schritten zur Besetzung") */}
          <div className="relative">
            {/* Desktop Horizontal Line through circle centers */}
            <div className="hidden lg:block absolute left-[8%] right-[8%] top-[56px] h-1 bg-[#1c2e4a] z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 gap-y-16 relative z-10">
              {recruitmentSteps.map((step) => {
                const StepIcon = step.icon;
                const isSelected = selectedProcessStep === step.id;

                return (
                  <div 
                    key={step.id}
                    onClick={() => setSelectedProcessStep(isSelected ? null : step.id)}
                    className="group relative flex flex-row lg:flex-col items-start lg:items-center gap-5 lg:gap-0 cursor-pointer"
                  >
                    {/* Mobile connector: through circle centers, left of the labels */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute left-14 top-14 bottom-[-4rem] w-1 -translate-x-1/2 bg-[#1c2e4a] lg:hidden group-last:hidden"
                    />

                    {/* Upgraded Circle icon exactly matching high-end recruiting guidelines */}
                    <div className={`relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full transition-all duration-300 z-10 shadow-xl ${
                      isSelected 
                        ? "bg-[#d42027] text-white scale-105 ring-4 ring-[#d42027]/30 ring-offset-2 border-transparent" 
                        : "bg-[#101d33] text-white group-hover:bg-[#d42027] group-hover:text-white group-hover:scale-105"
                    }`}>
                      
                      {/* Inner accent ring representing structured search connection */}
                      <div className={`absolute inset-1.5 rounded-full border border-dashed transition-colors duration-300 ${
                        isSelected ? "border-black/20 pointer-events-none" : "border-white/10 group-hover:border-black/20 pointer-events-none"
                      }`} />

                      <StepIcon className={`h-16 w-16 transition-all duration-300 ${
                        isSelected ? "text-[#1c2e4a] scale-105" : "text-white group-hover:text-[#1c2e4a] group-hover:rotate-6 group-hover:scale-105"
                      }`} />
                    </div>

                    {/* Step descriptions + expandable detail (beside circle on mobile) */}
                    <div className="min-w-0 flex-1 pt-3 lg:mt-5 lg:w-full lg:max-w-[180px] lg:flex-none lg:pt-0">
                      <div className="space-y-3 w-full text-left lg:text-center">
                        <div className="flex items-center justify-start lg:justify-center gap-1.5">
                          <span className="text-lg font-extrabold text-[#1c2e4a]">{step.stepNum}</span>
                          <span className="text-sm font-extrabold text-[#1c2e4a] tracking-tight leading-none">
                            {step.shortTitle === "Bedarfsanalyse" ? "Bedarfsanalyse" : step.shortTitle}
                          </span>
                        </div>
                        
                        {/* Solid divider line exact to reference */}
                        <div className="w-full h-[1px] bg-neutral-250 mt-1" />

                        <p className="text-base text-[#1c2e4a] font-light leading-relaxed">
                          {step.subtitle}
                        </p>
                      </div>

                      {/* Expandable detailed drawer on tap */}
                      <div className={`mt-3 text-base font-light rounded-lg bg-neutral-50 border border-neutral-150 transition-all duration-300 overflow-hidden ${
                        isSelected ? "opacity-100 max-h-[350px] p-3 visible" : "opacity-0 max-h-0 p-0 border-transparent invisible"
                      }`}>
                        <p className="text-[#1c2e4a] leading-relaxed">{step.detailText}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>


        </div>
      </section>


      {/* AI-Supported consultation Chat (The essential request requested by the user) */}

       {/* Ihr KI-Assistent */}
    
      {/* <section id="kontakt" className="py-24 bg-[#F2F2F5] border-b border-neutral-200 scroll-mt-10">
        <Kontaktformular isSection={true} />
      </section> */}
      
      <section id="kontakt" className="py-24 bg-[#FFFFFF] border-b border-neutral-200 scroll-mt-10">
        <Kontaktformular isSection={true} />
      </section>
      </>
      ) : currentView === "impressum" ? (
        <Impressum />
      ) : currentView === "datenschutz" ? (
        <Datenschutz />
      ) : currentView === "kontaktformular" ? (
        <Kontaktformular />
      ) : (
        <CookieRichtline />
      )}


      {/* Footer components */}
      <Footer onNavigate={handleNavigate} />

      {/* Inquiry Form Popovers */}
      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={() => setIsInquiryOpen(false)} 
      />
    </div>
  );
}
