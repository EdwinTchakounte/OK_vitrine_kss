import React, { useState } from 'react';
import { ChevronRight, BookOpen, Award, Globe, Users, GraduationCap, Brain, Target, ArrowLeft, CheckCircle, Calendar, ExternalLink, Mail, Phone } from 'lucide-react';
import { ProgramDetailPage } from './programme_details';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

// Composant Navigateur de Programmes
const ProgramsNavigator = ({ onProgramSelect }) => {
  const [activeTab, setActiveTab] = useState('studies');

  // Données des programmes d'études
  const studyPrograms = [
    {
      id: 'prepa',
      title: 'Prépa-Licence',
      icon: BookOpen,
      summary: 'Programme préparatoire aux études supérieures avec accompagnement personnalisé',
      description: 'Un programme d\'excellence pour préparer votre entrée dans les meilleures universités',
      eligibility: ['Baccalauréat ou équivalent', 'Motivation académique forte', 'Projet d\'études défini'],
      coverage: 'Support pédagogique, orientation, préparation aux concours',
      dates: ['Rentrée septembre 2025', 'Candidatures ouvertes jusqu\'au 15 juillet'],
      type: 'study'
    },
    {
      id: 'licence',
      title: 'Licence',
      icon: GraduationCap,
      summary: 'Formation de premier cycle dans diverses disciplines académiques',
      description: 'Obtenez votre diplôme de licence dans l\'université de vos rêves',
      eligibility: ['Baccalauréat validé', 'Dossier académique solide', 'Niveau de langue requis'],
      coverage: 'Frais de scolarité, support administratif, accompagnement',
      dates: ['Rentrée février/septembre 2025', 'Inscriptions en cours'],
      type: 'study'
    },
    {
      id: 'master',
      title: 'Master',
      icon: Brain,
      summary: 'Programmes de master spécialisés dans les meilleures universités',
      description: 'Spécialisez-vous dans votre domaine avec nos programmes master',
      eligibility: ['Licence ou équivalent', 'Excellence académique', 'Projet professionnel clair'],
      coverage: 'Frais de scolarité, accompagnement recherche, networking',
      dates: ['Rentrée septembre 2025', 'Candidatures jusqu\'au 31 mai'],
      type: 'study'
    },
        {
      id: 'MBA',
      title: 'MBA',
      icon: Brain,
      summary: 'Programmes de MBA spécialisés dans les meilleures universités',
      description: 'Spécialisez-vous dans votre domaine avec nos programmes master',
      eligibility: ['Licence ou équivalent', 'Excellence académique', 'Projet professionnel clair'],
      coverage: 'Frais de scolarité, accompagnement recherche, networking',
      dates: ['Rentrée septembre 2025', 'Candidatures jusqu\'au 31 mai'],
      type: 'study'
    },
    {
      id: 'doctorat',
      title: 'Doctorat',
      icon: Target,
      summary: 'Recherche doctorale avec encadrement de qualité internationale',
      description: 'Menez vos recherches doctorales dans un environnement d\'excellence',
      eligibility: ['Master ou équivalent', 'Projet de recherche approuvé', 'Directeur de thèse identifié'],
      coverage: 'Financement recherche, laboratoires, publications',
      dates: ['Rentrée flexible', 'Candidatures permanentes'],
      type: 'study'
    },
       {
      id: 'Langue Chinoise',
      title: 'Langue Chinoise',
      icon: Target,
      summary: 'Langue Chinoise avec encadrement de qualité internationale',
      description: 'Menez vos recherches doctorales dans un environnement d\'excellence',
      eligibility: ['Master ou équivalent', 'Projet de recherche approuvé', 'Directeur de thèse identifié'],
      coverage: 'Financement recherche, laboratoires, publications',
      dates: ['Rentrée flexible', 'Candidatures permanentes'],
      type: 'study'
    },

     {
      id: 'Stage Academique',
      title: 'Stage Academique',
      icon: Target,
      summary: 'Stage Academique avec encadrement de qualité internationale',
      description: 'Menez vos recherches doctorales dans un environnement d\'excellence',
      eligibility: ['Master ou équivalent', 'Projet de recherche approuvé', 'Directeur de thèse identifié'],
      coverage: 'Financement recherche, laboratoires, publications',
      dates: ['Rentrée flexible', 'Candidatures permanentes'],
      type: 'study'
    },
    

  ];

  // Données des programmes de bourses
  const scholarshipPrograms = [
    {
      id: 'csc',
      title: 'Bourse du Gouvernement Chinois (CSC)',
      icon: Globe,
      summary: 'Bourse du gouvernement chinois pour études en Chine',
      description: 'Programme prestigieux du China Scholarship Council pour excellents étudiants africains',
      eligibility: ['Nationalité non-chinoise', 'Excellence académique', 'Bonne santé', 'Âge : 18-35 ans'],
      coverage: 'Frais de scolarité, hébergement, allocation mensuelle, assurance médicale',
      dates: ['Candidatures : 15 janvier - 15 mai 2025', 'Rentrée : septembre 2025'],
      type: 'scholarship'
    },
    {
      id: 'sigma',
      title: 'SIGMA-MBA',
      icon: Award,
      summary: 'Programme MBA avec bourse complète pour leaders africains',
      description: 'Formation executive MBA dédiée aux futurs leaders du continent africain',
      eligibility: ['5 ans d\'expérience professionnelle', 'Potentiel de leadership', 'Projet d\'impact'],
      coverage: 'Formation complète, logement, networking international',
      dates: ['Candidatures ouvertes', 'Sessions trimestrielles'],
      type: 'scholarship'
    },
    {
      id: 'erasmus',
      title: 'Bourses Universitaire du recrutement independant',
      icon: Users,
      summary: 'Mobilité académique en Europe avec financement UE',
      description: 'Opportunités d\'échanges et de formations en Europe via Erasmus+',
      eligibility: ['Inscription dans université partenaire', 'Niveau linguistique B2', 'Projet académique'],
      coverage: 'Transport, hébergement, allocation mensuelle, frais d\'inscription',
      dates: ['2 sessions par an', 'Prochaine deadline : 15 mars 2025'],
      type: 'scholarship'
    },
    {
      id: 'commonwealth',
      title: 'Bourses Universitaire du recrutement dependant',
      icon: GraduationCap,
      summary: 'Bourses prestigieuses pour études au Royaume-Uni',
      description: 'Programme d\'excellence pour études supérieures dans les universités britanniques',
      eligibility: ['Citoyenneté pays Commonwealth', 'First class honours', 'Projet de développement'],
      coverage: 'Frais universitaires, voyage, allocation, frais personnels',
      dates: ['Candidatures annuelles', 'Deadline : 15 décembre 2024'],
      type: 'scholarship'
    },
    {
      id: 'chevening',
      title: 'Bourses d\'etudes provinciale',
      icon: Brain,
      summary: 'Bourses du gouvernement britannique pour futurs leaders',
      description: 'Programme prestigieux pour études de master au Royaume-Uni',
      eligibility: ['Citoyenneté éligible', '2 ans d\'expérience professionnelle', 'Leadership potentiel'],
      coverage: 'Frais universitaires complets, allocation mensuelle, voyage',
      dates: ['Candidatures : septembre - novembre', 'Rentrée : septembre suivant'],
      type: 'scholarship'
    },
    {
      id: 'daad',
      title: 'Bourse d\'études universitaire',
      icon: Globe,
      summary: 'Bourses allemandes pour études et recherche',
      description: 'Programme du service allemand d\'échanges académiques',
      eligibility: ['Diplôme universitaire', 'Projet d\'études en Allemagne', 'Niveau d\'allemand/anglais'],
      coverage: 'Allocation mensuelle, assurance, cours de langue',
      dates: ['Plusieurs sessions par an', 'Candidatures en ligne'],
      type: 'scholarship'
    },
    {
      id: 'fulbright',
      title: 'Bourse internationale pour les enseignants de langue chinoise',
      icon: Target,
      summary: 'Échanges éducatifs avec les États-Unis',
      description: 'Programme d\'échanges académiques et culturels USA-Afrique',
      eligibility: ['Excellence académique', 'Projet d\'études aux USA', 'Leadership communautaire'],
      coverage: 'Frais de scolarité, allocation, voyage, assurance',
      dates: ['Candidatures annuelles', 'Deadline pays-spécifique'],
      type: 'scholarship'
    },
    {
      id: 'australia-awards',
      title: 'Cities sister Scholarships',
      icon: Users,
      summary: 'Bourses australiennes pour le développement',
      description: 'Programme de bourses pour études en Australie',
      eligibility: ['Citoyenneté pays éligible', 'Expérience professionnelle', 'Engagement développement'],
      coverage: 'Frais universitaires, allocation, voyage, assurance santé',
      dates: ['Candidatures annuelles', 'Février - avril selon pays'],
      type: 'scholarship'
    }
  ];

  const currentPrograms = activeTab === 'studies' ? studyPrograms : scholarshipPrograms;

  const ProgramCard = ({ program }) => (
      //  <Link to={`/detail_programme/${selectedProgram}/${handleBackToPrograms}`} className="flex items-center text-blue-600 hover:text-blue-800">  
    //   <ArrowLeft className="w-4 h-4 mr-2" />
    //   <span>Retour aux programmes</span>
    //   </Link>
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer border border-gray-100"
      // onClick={() => onProgramSelect(program)}
    >
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
              <program.icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{program.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{program.summary}</p>
            <div className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors">
              <span>
               
                <Link to={`/detail_programme/${program.title}/${program.type==='study'?1:2}`} className="flex items-center text-blue-600 hover:text-blue-800">   
                En savoir plus ... </Link></span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Programmes</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos programmes d'études et de bourses conçus pour accompagner 
            les étudiants africains vers l'excellence académique internationale
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl p-2 shadow-lg border border-gray-100">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('studies')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeTab === 'studies'
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <GraduationCap className="w-5 h-5" />
                <span>Programmes d'études</span>
              </button>
              <button
                onClick={() => setActiveTab('scholarships')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeTab === 'scholarships'
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Award className="w-5 h-5" />
                <span>Programmes de bourses</span>
              </button>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {currentPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </div>
  );
};
// Composant Principal de l'Application
const AcademicProgramsApp = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const handleProgramSelect = (program) => {
    setSelectedProgram(program);
  };

  const handleBackToPrograms = () => {
    setSelectedProgram(null);
  };

  if (selectedProgram) {
    if (selectedProgram) {
    // Page de détails UNIQUEMENT
    return (
      <div className="min-h-screen flex flex-col bg-white">
        {/* Facultatif : tu peux garder Header/Footer ou les supprimer ici */}
        <Header />
        <main className="flex-1">
          <ProgramDetailPage 
            program={selectedProgram} 
            onBack={handleBackToPrograms} 
          />
        </main>
        <Footer />
      </div>
    );
  }

  // Sinon, affiche uniquement la liste
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <ProgramsNavigator onProgramSelect={handleProgramSelect} />
      <Footer />
    </div>
  );
  }

  return (
    <ProgramsNavigator onProgramSelect={handleProgramSelect} />
  );
};

export default AcademicProgramsApp;