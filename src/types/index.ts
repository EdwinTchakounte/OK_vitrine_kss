export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface Translation {
  // Navigation
  nav: {
    home: string;
    about: string;
    programs: string;
    steps: string;
    gallery: string;
    testimonials: string;
    partners: string;
    faq: string;
    contact: string;
  };
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    whatsapp: string;
  };
  // About Section
  about: {
    title: string;
    mission: string;
    vision: string;
    values: string;
    founder: string;
    founderName: string;
    founderTitle: string;
  };
  // Programs Section
  programs: {
    title: string;
    china: string;
    canada: string;
    germany: string;
    benefits: string;
    eligibility: string;
  };
  // Steps Section
  steps: {
    title: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    step5: string;
  };
  // Gallery Section
  gallery: {
    title: string;
    images: string;
    videos: string;
  };
  // Testimonials Section
  testimonials: {
    title: string;
  };
  // Partners Section
  partners: {
    title: string;
  };
  // FAQ Section
  faq: {
    title: string;
  };
  // Contact Section
  contact: {
    title: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    address: string;
    phone: string;
  };
  // Common
  common: {
    readMore: string;
    learnMore: string;
    getStarted: string;
    apply: string;
  };
}

export interface Testimonial {
  name: string;
  country: string;
  university: string;
  message: string;
  image: string;
}

export interface Program {
  country: string;
  flag: string;
  description: string;
  benefits: string[];
  universities: string[];
}

export interface Step {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}