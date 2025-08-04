import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, Translation } from '../types';

interface LanguageContextType {
  currentLanguage: Language;
  translations: Translation;
  switchLanguage: (language: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const languages: Language[] = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' }
];

const translations: Record<string, Translation> = {
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      programs: 'Programmes',
      steps: 'Étapes',
      gallery: 'Galerie',
      testimonials: 'Témoignages',
      partners: 'Partenaires',
      faq: 'FAQ',
      contact: 'Contact',
      formations: 'Formations'
    },
    hero: {
      title: 'Construis ton avenir à l\'international',
      subtitle: 'Obtenez une bourse pour la Chine, le Canada ou l\'Allemagne',
      cta: 'Commencer maintenant',
      whatsapp: 'WhatsApp'
    },
    about: {
      title: 'À propos de nous',
      mission: 'Notre mission est d\'accompagner les étudiants camerounais vers l\'excellence académique internationale.',
      vision: 'Être le leader en matière de services éducationnels internationaux au Cameroun.',
      values: 'Excellence, Intégrité, Innovation, Accompagnement personnalisé',
      founder: 'Message du fondateur',
      founderName: 'Christian Rodrigue BAONGLA',
      founderTitle: 'Consultant - CEO'
    },
    programs: {
      title: 'Nos Programmes',
      china: 'Bourses pour la Chine',
      canada: 'Bourses pour le Canada',
      germany: 'Bourses pour l\'Allemagne',
      benefits: 'Avantages',
      eligibility: 'Éligibilité'
    },
    steps: {
      title: 'Notre Processus',
      step1: 'Consultation initiale',
      step2: 'Évaluation du dossier',
      step3: 'Préparation des documents',
      step4: 'Candidature aux bourses',
      step5: 'Suivi et accompagnement'
    },
    gallery: {
      title: 'Galerie',
      images: 'Images',
      videos: 'Vidéos'
    },
    testimonials: {
      title: 'Témoignages'
    },
    partners: {
      title: 'Nos Partenaires'
    },
    faq: {
      title: 'Questions Fréquentes'
    },
    contact: {
      title: 'Contactez-nous',
      name: 'Nom',
      email: 'Email',
      subject: 'Sujet',
      message: 'Message',
      send: 'Envoyer',
      address: 'Adresse',
      phone: 'Téléphone'
    },
    common: {
      readMore: 'Lire plus',
      learnMore: 'En savoir plus',
      getStarted: 'Commencer',
      apply: 'Postuler'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      programs: 'Programs',
      steps: 'Steps',
      gallery: 'Gallery',
      testimonials: 'Testimonials',
      partners: 'Partners',
      faq: 'FAQ',
      contact: 'Contact',
      formations: 'Formations'
    },
    hero: {
      title: 'Build your international future',
      subtitle: 'Get a scholarship for China, Canada or Germany',
      cta: 'Get Started',
      whatsapp: 'WhatsApp'
    },
    about: {
      title: 'About Us',
      mission: 'Our mission is to guide Cameroonian students towards international academic excellence.',
      vision: 'To be the leader in international educational services in Cameroon.',
      values: 'Excellence, Integrity, Innovation, Personalized support',
      founder: 'Founder\'s message',
      founderName: 'Christian Rodrigue BAONGLA',
      founderTitle: 'Consultant - CEO'
    },
    programs: {
      title: 'Our Programs',
      china: 'Scholarships for China',
      canada: 'Scholarships for Canada',
      germany: 'Scholarships for Germany',
      benefits: 'Benefits',
      eligibility: 'Eligibility'
    },
    steps: {
      title: 'Our Process',
      step1: 'Initial consultation',
      step2: 'File evaluation',
      step3: 'Document preparation',
      step4: 'Scholarship application',
      step5: 'Follow-up and support'
    },
    gallery: {
      title: 'Gallery',
      images: 'Images',
      videos: 'Videos'
    },
    testimonials: {
      title: 'Testimonials'
    },
    partners: {
      title: 'Our Partners'
    },
    faq: {
      title: 'Frequently Asked Questions'
    },
    contact: {
      title: 'Contact Us',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      address: 'Address',
      phone: 'Phone'
    },
    common: {
      readMore: 'Read more',
      learnMore: 'Learn more',
      getStarted: 'Get Started',
      apply: 'Apply'
    }
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const switchLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      translations: translations[currentLanguage.code],
      switchLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { languages };