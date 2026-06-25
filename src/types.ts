export interface Message {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: Date;
}

export interface Inquiry {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  sector: string;
  count: string;
  languageRequired: string;
  message: string;
}

export interface RecruitmentStep {
  id: string; // "01", "02" etc.
  title: string;
  subtitle: string;
  description: string;
  details: string;
  iconName: "ClipboardList" | "Search" | "Users" | "FileText" | "FileCheck" | "Briefcase" | "Globe" | "HeartHandshake" | "CheckSquare";
}
