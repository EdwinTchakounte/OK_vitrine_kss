import React from 'react';
import { Users, UserCheck, Target, Plane, Clock, ArrowRight, CheckCircle } from 'lucide-react';

// Composant réutilisable pour les cartes de résultats - Version compacte
const ResultCard = ({ icon: Icon, title, value, description, color = "text-blue-600" }) => (
  <div className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] border border-gray-100">
    <div className="flex items-start space-x-3">
      <div className={`${color} bg-blue-50 p-2 rounded-md flex-shrink-0`}>
        <Icon size={18} />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-lg text-gray-900 mb-0.5 leading-tight">{value}</h3>
        <p className="font-medium text-sm text-gray-800 mb-1 leading-tight">{title}</p>
        {description && (
          <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  </div>
);

// Composant réutilisable pour les étapes - Version compacte
const StepCard = ({ icon: Icon, title, description, isHighlighted = false }) => (
  <div className={`p-4 rounded-lg border transition-all duration-200 hover:scale-[1.02] ${
    isHighlighted 
      ? 'bg-gradient-to-br from-green-50 to-blue-50 border-green-400 shadow-md' 
      : 'bg-white border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md'
  }`}>
    <div className="flex items-center space-x-3 mb-2">
      <div className={`p-2 rounded-md flex-shrink-0 ${
        isHighlighted ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-blue-600'
      }`}>
        <Icon size={16} />
      </div>
      <h3 className={`font-bold text-base leading-tight ${
        isHighlighted ? 'text-green-800' : 'text-gray-800'
      }`}>
        {title}
      </h3>
    </div>
    {description && (
      <p className="text-sm text-gray-600 ml-11 leading-relaxed">{description}</p>
    )}
  </div>
);

// Composant principal compact
const EducationResults = ({ 
  results = [
    {
      icon: Users,
      title: "Étudiants contactés",
      value: "274+",
      description: "Large couverture de sensibilisation"
    },
    {
      icon: UserCheck,
      title: "Parents intéressés",
      value: "60",
      description: "Forte réceptivité du programme"
    },
    {
      icon: Target,
      title: "Parents engagés",
      value: "10",
      description: "Départements GMP, GEII, GIM"
    },
    {
      icon: Plane,
      title: "Étudiants en Chine",
      value: "2",
      description: "Déjà intégrés dans le programme"
    },
    {
      icon: Clock,
      title: "Procédures en cours",
      value: "En cours",
      description: "Rentrées sept. 2025 et mars 2026"
    }
  ],
  nextSteps = [
    {
      icon: CheckCircle,
      title: "Inscription",
      description: "Première étape cruciale pour rejoindre le programme",
      isHighlighted: true
    },
    {
      icon: ArrowRight,
      title: "Évaluation du dossier",
      description: "Analyse des prérequis académiques"
    },
    {
      icon: Users,
      title: "Entretien de motivation",
      description: "Rencontre avec l'équipe pédagogique"
    }
  ]
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Résultats */}
        <div className="mb-10">
          <div className="text-center mb-6">
            <div className="relative inline-block">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent mb-2">
                Résultats obtenus
              </h1>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-green-400 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-600 mt-3 max-w-md mx-auto">
              Découvrez l'impact de notre programme éducatif international
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {results.map((result, index) => (
              <ResultCard
                key={index}
                icon={result.icon}
                title={result.title}
                value={result.value}
                description={result.description}
                color={index % 2 === 0 ? "text-blue-600" : "text-green-600"}
              />
            ))}
          </div>
        </div>

        {/* Section Prochaines étapes */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100">
          <div className="text-center mb-6">
            <div className="relative inline-block">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-500 bg-clip-text text-transparent mb-2">
                Prochaines étapes
              </h2>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
            </div>
            <p className="text-sm text-gray-600 max-w-lg mx-auto mt-3">
              Rejoignez notre programme éducatif international en quelques étapes simples
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6">
            {nextSteps.map((step, index) => (
              <StepCard
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isHighlighted={step.isHighlighted}
              />
            ))}
          </div>

          {/* Bouton CTA compact */}
          <div className="text-center">
            <button 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold text-base rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-300"
              aria-label="Commencer votre procédure d'inscription"
            >
              <CheckCircle className="mr-2" size={20} />
              <a href="https://forms.gle/8yDCw8iLs8a5hRYp8" className="flex items-center">
                Commencer votre procédure
                <ArrowRight className="ml-2" size={20} />
              </a>
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Démarrez votre aventure éducative internationale dès aujourd'hui
            </p>
          </div>
        </div>

        {/* Footer compact */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium shadow-sm">
            <Clock size={14} />
            <span>Procédures ouvertes pour les rentrées 2025 et 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationResults;