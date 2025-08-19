import React, { useState } from 'react';
import { ChevronRight, BookOpen, Award, Globe, Users, GraduationCap, Brain, Target, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

// Composant pour les éléments décoratifs flottants
const FloatingElements = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    {/* Bulles flottantes */}
    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full animate-float blur-xl"></div>
    <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-green-200/20 to-transparent rounded-full animate-float-delayed blur-lg"></div>
    <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-100/15 to-transparent rounded-full animate-pulse-slow blur-2xl"></div>
    <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-green-100/15 to-transparent rounded-full animate-bounce-gentle blur-xl"></div>
    
    {/* Particules lumineuses */}
    <div className="absolute top-1/4 left-1/5 w-2 h-2 bg-blue-300 rounded-full animate-twinkle opacity-60"></div>
    <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-green-300 rounded-full animate-twinkle-delayed opacity-70"></div>
    <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-200 rounded-full animate-twinkle opacity-50"></div>
    <div className="absolute bottom-1/3 right-1/5 w-2 h-2 bg-green-200 rounded-full animate-twinkle-delayed opacity-60"></div>
  </div>
);

// Composant pour les caractères chinois subtils
const ChineseElements = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
    <div className="absolute top-32 left-16 text-8xl font-light text-blue-600 animate-drift">学</div>
    <div className="absolute top-64 right-24 text-6xl font-light text-green-600 animate-drift-slow">智</div>
    <div className="absolute bottom-48 left-1/3 text-7xl font-light text-blue-500 animate-drift-reverse">成</div>
    <div className="absolute bottom-32 right-1/4 text-5xl font-light text-green-500 animate-drift">功</div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-light text-blue-400 animate-rotate-slow">圆</div>
  </div>
);

// Composant pour les formes géométriques douces
const GeometricShapes = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5">
    <div className="absolute top-20 right-10 w-64 h-64 border border-blue-200 rounded-full animate-spin-very-slow"></div>
    <div className="absolute bottom-20 left-10 w-48 h-48 border border-green-200 rounded-full animate-spin-reverse-slow"></div>
    <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-2xl rotate-45 animate-float"></div>
    <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-green-100 to-transparent rounded-2xl rotate-12 animate-float-delayed"></div>
  </div>
);

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
      description: 'Un programme d\'excellence pour préparer votre entrée dans les meilleures universités chinoises avec un accompagnement culturel et linguistique complet.',
      component: 'prepa'
    },
    {
      id: 'licence',
      title: 'Licence',
      icon: GraduationCap,
      summary: 'Formation de premier cycle dans diverses disciplines académiques',
      description: 'Obtenez votre diplôme de licence dans l\'université de vos rêves en Chine avec un programme adapté aux étudiants internationaux.',
      component: 'licence'
    },
    {
      id: 'master',
      title: 'Master',
      icon: Brain,
      summary: 'Programmes de master spécialisés dans les meilleures universités',
      description: 'Spécialisez-vous dans votre domaine avec nos programmes master en partenariat avec les universités chinoises de premier plan.',
      component: 'master'
    },
    {
      id: 'mba',
      title: 'MBA',
      icon: Target,
      summary: 'Programmes de MBA spécialisés dans les meilleures universités',
      description: 'Développez vos compétences managériales avec nos programmes MBA internationaux axés sur les marchés asiatiques.',
      component: 'mba'
    },
    {
      id: 'doctorat',
      title: 'Doctorat',
      icon: Award,
      summary: 'Recherche doctorale avec encadrement de qualité internationale',
      description: 'Menez vos recherches doctorales dans un environnement d\'excellence avec accès aux laboratoires de pointe.',
      component: 'doctorat'
    },
    {
      id: 'langue-chinoise',
      title: 'Langue Chinoise',
      icon: Globe,
      summary: 'Apprentissage intensif de la langue chinoise',
      description: 'Maîtrisez le mandarin avec nos programmes d\'immersion linguistique et culturelle en Chine.',
      component: 'langue-chinoise'
    },
    {
      id: 'stage-academique',
      title: 'Stage Académique',
      icon: Users,
      summary: 'Stages académiques avec encadrement professionnel',
      description: 'Acquérez une expérience pratique dans votre domaine d\'études avec nos stages en entreprises partenaires.',
      component: 'stage-academique'
    }
  ];

  // Données des programmes de bourses
  const scholarshipPrograms = [
    {
      id: 'csc',
      title: 'Bourse du Gouvernement Chinois (CSC)',
      icon: Award,
      summary: 'Bourse prestigieuse du gouvernement chinois',
      description: 'Programme prestigieux du China Scholarship Council pour excellents étudiants africains avec couverture complète.',
      component: 'csc'
    },
    {
      id: 'sigma',
      title: 'SIGMA-MBA',
      icon: Target,
      summary: 'Programme MBA avec bourse complète pour leaders africains',
      description: 'Formation executive MBA dédiée aux futurs leaders du continent africain avec networking international.',
      component: 'sigma'
    },
    {
      id: 'erasmus',
      title: 'Bourses Universitaires Indépendantes',
      icon: Globe,
      summary: 'Bourses universitaires avec sélection indépendante',
      description: 'Opportunités de bourses directement négociées avec les universités partenaires.',
      component: 'erasmus'
    },
    {
      id: 'commonwealth',
      title: 'Bourses Universitaires Dépendantes',
      icon: GraduationCap,
      summary: 'Bourses liées aux programmes gouvernementaux',
      description: 'Programme de bourses en partenariat avec les gouvernements locaux et internationaux.',
      component: 'commonwealth'
    },
    {
      id: 'chevening',
      title: 'Bourses d\'Études Provinciales',
      icon: Brain,
      summary: 'Bourses offertes par les provinces chinoises',
      description: 'Programme de bourses provinciales pour attirer les talents internationaux.',
      component: 'chevening'
    },
    {
      id: 'daad',
      title: 'Bourses d\'Études Universitaires',
      icon: BookOpen,
      summary: 'Bourses directes des universités',
      description: 'Bourses d\'excellence accordées directement par les établissements d\'enseignement supérieur.',
      component: 'daad'
    },
    {
      id: 'fulbright',
      title: 'Bourses Enseignants de Langue Chinoise',
      icon: Users,
      summary: 'Bourses pour futurs enseignants de chinois',
      description: 'Programme spécialisé pour former les futurs enseignants de langue chinoise.',
      component: 'fulbright'
    },
    {
      id: 'australia-awards',
      title: 'Cities Sister Scholarships',
      icon: Globe,
      summary: 'Bourses dans le cadre des villes jumelées',
      description: 'Programme de bourses via les partenariats entre villes sœurs sino-africaines.',
      component: 'australia-awards'
    }
  ];

  const currentPrograms = activeTab === 'studies' ? studyPrograms : scholarshipPrograms;

  const ProgramCard = ({ program, index }) => (
    <div className="group">
      <div className="bg-white/85 backdrop-blur-sm rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-white/60 hover:border-blue-200/50 hover:-translate-y-1">
        <div className="text-center">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500/90 to-green-500/90 rounded-lg flex items-center justify-center mx-auto mb-3">
            <program.icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-800 mb-2 leading-tight">
              {program.title}
            </h3>
            <p className="text-gray-600 text-xs mb-3 leading-relaxed line-clamp-2">
              {program.summary}
            </p>
            <Link 
              to={`/detail_programme/${program.component}/${activeTab === 'studies' ? '1' : '2'}`}
              className="inline-flex items-center text-blue-600 text-xs font-medium hover:text-blue-700 transition-colors"
            >
              En savoir plus
              <ChevronRight className="w-3 h-3 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/30">
      <FloatingElements />
      <ChineseElements />
      <GeometricShapes />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        {/* Header simplifié */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 className="text-5xl font-extralight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-green-500 mb-2 tracking-tight">
              Programmes d'Excellence
            </h1>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-60"></div>
          </div>
          <p className="text-sm font-light text-blue-600/70 mb-4 tracking-widest uppercase">
            Academic Programs Portal
          </p>
          <p className="text-base text-gray-600/80 max-w-2xl mx-auto font-light leading-relaxed">
            Découvrez nos programmes d'études et de bourses conçus pour accompagner 
            les étudiants africains vers l'excellence académique internationale
          </p>
        </div>

        {/* Tabs simplifiés */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-1 shadow-sm border border-white/40">
            <div className="flex">
              <button
                onClick={() => setActiveTab('studies')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'studies'
                    ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <GraduationCap className="w-5 h-5" />
                <span>Programmes d'études</span>
              </button>
              <button
                onClick={() => setActiveTab('scholarships')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'scholarships'
                    ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Award className="w-5 h-5" />
                <span>Programmes de bourses</span>
              </button>
            </div>
          </div>
        </div>

        {/* Programs Grid simplifié */}
        <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {currentPrograms.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
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

  return (
    <ProgramsNavigator onProgramSelect={handleProgramSelect} />
  );
};

export default AcademicProgramsApp;