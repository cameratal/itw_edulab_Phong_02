import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import CookieRichtline from "./components/CookieRichtline";
import Kontaktformular from "./components/Kontaktformular";
import InquiryModal from "./components/InquiryModal";
import AIAdvisor from "./components/AIAdvisor";
// @ts-ignore
import ktmHeroBusinesswoman from "./assets/images/ktm_hero_businesswoman_v2_1781169364023.png";
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
      color: "bg-[#111111]",
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
      color: "bg-[#111111]",
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
      color: "bg-[#111111]",
    },
    {
      id: 4,
      stepNum: "04",
      shortTitle: "Dokumente",
      title: "Aufenthalts- & Arbeitserlaubnis",
      subtitle: "Vertrags- und Visumunterlagen vollständig vorbereiten",
      description: "Wir unterstützen Sie vollumfänglich bei Visa, Aufenthaltstitel und Arbeitserlaubnis.",
      detailText: "KTM übernimmt das gesamte bürokratische Übertragungsverfahren (z. B. Beantragung der Gleichwertigkeit Ihres Berufsabschlusses in Deutschland, Erklärung zu Arbeitsverhältnissen).",
      icon: ContractSignatureIcon,
      color: "bg-[#111111]",
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
      color: "bg-[#111111]",
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
      color: "bg-[#111111]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-neutral-850 font-sans selection:bg-[#F59E0B]/20 selection:text-neutral-900">
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
                className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl leading-[1.08] cursor-pointer hover:text-neutral-800 transition-all select-none group"
              >
                Ihr Partner für Ihren Bedarf an <span className="text-black group-hover:text-neutral-800 relative inline-block">Arbeitskräften<span className="absolute left-0 bottom-1 w-full h-1 bg-yellow-500 rounded" /></span>
              </h1>
              
              <div className={`transition-all duration-[700ms] ease-in-out overflow-hidden ${
                showHeroDetails ? 'opacity-100 max-h-[500px] mt-4 space-y-6' : 'opacity-0 max-h-0'
              }`}>
                <p className="text-base text-neutral-600 sm:text-lg leading-relaxed max-w-3xl font-light">
                  KTM Europa ist Ihr Partner für die Gewinnung von Fachkräften und Auszubildenden aus Vietnam. Wir unterstützen deutsche Unternehmen dabei, offene Stellen in personalintensiven und schwer zu besetzenden Bereichen strukturiert und verlässlich zu besetzen.
                </p>
              </div>

              {/* Action and CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => setIsInquiryOpen(true)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-neutral-950 px-7 py-4 text-xs font-black tracking-wider uppercase text-white hover:bg-neutral-800 shadow-lg shadow-neutral-950/15 ring-2 ring-transparent hover:ring-neutral-950 transition-all cursor-pointer"
                >
                  Jetzt unverbindlich anfragen
                  <ArrowUpRight className="h-4.5 w-4.5 text-neutral-400 group-hover:text-white" />
                </button>
                <a
                  href="#ai-chat"
                  className="flex items-center justify-center gap-2 rounded-xl bg-white border border-neutral-200 hover:border-neutral-900 px-7 py-4 text-xs font-extrabold text-neutral-800 transition"
                >
                  <Sparkles className="h-4 w-4 text-amber-500 animate-pulse" /> KI-Assistent
                </a>
              </div>
            </div>

            {/* Right Column: Recruiter Consultation Image (Trang 1 illustration) */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md overflow-hidden transition-transform duration-300 flex items-center justify-center aspect-[4/5]">
                <img 
                  src="/vietnamese_girl_smiling_01.png"
                  alt="KTM Asian Businesswoman in Office with Logo" 
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Decorative background shape */}
              <div className="absolute -bottom-6 -right-6 -z-10 h-64 w-64 bg-amber-500/10 rounded-full blur-2xl" />
            </div>

          </div>
        </div>
      </section>

      {/* Corporate profile: Wer wir sind (Trang 3) */}
    

      {/* Recruitment Process Steps (Trang 2) */}
    

      {/* Recruitment Process Steps (Trang 2) */}
      


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
