import React from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Programs from './Programs';
import Steps from './Steps';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Partners from './Partners';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import AcademicProgramsNavigator from './academic-programs-navigator';
import AcademicProgramsApp from './academic-programs-navigator';
import EducationResults from './Result';
import StatCard from './StatCard';
import FormationPage from './Formation';
import { ScholarshipDisplay } from './scholarship';

const Home: React.FC = () => {



   return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <Hero />
        <About />
        <AcademicProgramsApp />
        <Steps />
        {/* <Gallery /> */}
        <Testimonials />
         <StatCard/>
        {/* <EducationResults /> */}
        <Partners />
        <FormationPage/>
        <FAQ />
        
        <Contact />
        <ScholarshipDisplay scholarshipData={chineseTeacherScholarshipData} />
         
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default Home;


const chineseTeacherScholarshipData = {
  title: "Bourse internationale pour les enseignants de langue chinoise",
  description: "Afin de répondre à la demande internationale croissante d'enseignants de langue chinoise, de faciliter l'enseignement de la langue chinoise dans le monde entier et de soutenir le développement professionnel des enseignants de langue chinoise, le Centre pour l'enseignement des langues et la coopération (CLEC) a créé cette bourse pour les enseignants de langue chinoise éligibles en dehors de la Chine.",
  
  eligibility: [
    "Être un citoyen non chinois",
    "Être amical avec la Chine, n'avoir aucun casier judiciaire, respecter les lois et règlements de la Chine et les règles de l'Université",
    "Être en bonne santé physique et mentale, avoir de bons résultats scolaires et comportementaux",
    "S'intéresser à l'enseignement de la langue chinoise et au travail connexe",
    "Être âgé de 18 à 35 ans (au 1er septembre 2025). La limite d'âge maximale pour les enseignants de chinois en poste peut être portée à 45 ans"
  ],
  
  scholarshipTypes: [
    {
      type: "Bourse d'études pour une maîtrise en enseignement international de la langue chinoise",
      duration: "Commence en septembre, accordée pour un maximum de deux années académiques",
      requirements: "Baccalauréat, HSK niveau 5 (score minimum 210), HSKK niveau intermédiaire (score minimum 60)",
      priority: "Priorité donnée aux candidats pouvant fournir un contrat de travail avec un établissement d'enseignement à l'issue de leurs études"
    },
    {
      type: "Bourse pour un programme d'études d'un an (langue et littérature chinoises)",
      duration: "Commence en septembre, fournie pour un maximum de onze mois",
      requirements: "HSK niveau 4 (score minimum 180), HSKK niveau intermédiaire (score minimum 60)",
      priority: "Les candidats ayant reçu une bourse similaire dans les trois ans ne sont pas éligibles"
    },
    {
      type: "Bourse pour un programme d'études d'un semestre (langue et littérature chinoises)",
      duration: "Commence en septembre ou mars 2026, fournie pour un maximum de cinq mois",
      requirements: "HSK niveau 3 (score minimum 180), score HSKK requis",
      priority: "Les candidats ayant reçu une bourse similaire dans les trois ans ne sont pas éligibles"
    }
  ],
  
  coverage: {
    description: "La bourse offre une couverture complète des frais de scolarité, des frais d'hébergement, de l'allocation de subsistance et des frais d'assurance médicale complets.",
    contactLink: "#"
  },
  
  applicationDates: {
    openingMessage: "L'inscription est ouverte à partir d'aujourd'hui.",
    deadlines: [
      "15 mai (pour les programmes commençant en septembre 2025)",
      "31 octobre (pour le programme d'études d'un semestre commençant en mars 2026 seulement)"
    ]
  },
  
  applicationProcedure: {
    description: "Pour postuler, veuillez nous contacter via le lien fourni.",
    contactLink: "#"
  },
  
  documents: {
    general: [
      "Une copie scannée de la page photo du passeport (le passeport doit être valide avant le 1er mars 2026)",
      "Une copie scannée des attestations de score des tests HSK et HSKK (pendant la validité de deux ans)",
      "Une lettre de recommandation du chef des institutions de recommandation"
    ],
    masters: [
      "Certificats du diplôme le plus élevé",
      "Relevés de notes académiques pendant les études de baccalauréat",
      "Déclaration personnelle, en chinois, incluant l'expérience d'étude et de travail, les raisons de la candidature et la proposition d'étude (minimum 1500 mots)",
      "Deux lettres de recommandation de professeurs titulaires ou agrégés, en chinois ou anglais",
      "Articles académiques publiés ou autres réalisations académiques (le cas échéant)",
      "Formulaire d'acceptation provisoire d'un étudiant international (le cas échéant)",
      "Contrat de travail notarié avec les établissements d'enseignement (le cas échéant)",
      "Photocopie du formulaire d'examen physique des étrangers",
      "Certificat de non-casier judiciaire, valable 6 mois",
      "Engagements pour la demande de master de l'Université (version PDF complètement remplie et signée à la main)"
    ]
  },
  
  specialPolicies: {
    inServiceTeachers: {
      title: "Enseignants de chinois en poste",
      description: "Les enseignants de chinois en poste doivent fournir une preuve d'emploi et une lettre de recommandation de l'employeur."
    },
    bridgeWinners: {
      title: "Vainqueurs du Chinese Bridge",
      description: "Les candidats ayant reçu le certificat de bourse internationale lors des compétitions Chinese Bridge doivent soumettre leurs documents avec leurs certificats de bourse."
    }
  },
  
  additionalInfo: [
    "Les étudiants sont soumis à l'évaluation annuelle conformément aux procédures d'évaluation de la bourse",
    "Les étudiants qui ne réussissent pas l'examen médical, se retirent avant la fin du programme, ou suspendent leurs études seront disqualifiés",
    "Les candidats admis au programme de maîtrise doivent fournir les copies originales des certificats de diplôme"
  ],
  
  contact: "Pour l'inscription et d'autres questions, veuillez utiliser les liens de contact fournis."
};
