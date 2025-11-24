export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  link: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  TESTIMONIALS = 'testimonials',
  SKILLS = 'skills',
  PROJECTS = 'projects',
  CONTACT = 'contact',
}

export type Language = 'id' | 'en';
export type Theme = 'dark' | 'light';

export interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: any; // Translation helper
}