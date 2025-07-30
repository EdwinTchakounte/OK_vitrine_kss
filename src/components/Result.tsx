import React from 'react';
import { Users, UserCheck, Target, Plane, Clock, ArrowRight, CheckCircle } from 'lucide-react';

// Composant réutilisable pour les cartes de résultats
const ResultCard = ({ icon: Icon, title, value, description, color = "text-blue-600" }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
    <div className="flex items-start space-x-4">
      <div className={`${color} bg-blue-50 p-3 rounded-lg`}>
        <Icon size={24} />
      </div>
      <div className="flex-1">
        <h3 className="font-bold text-2xl text-gray-900 mb-1">{value}</h3>
        <p className="font-semibold text-gray-800 mb-2">{title}</p>
        {description && (
          <p className="text-sm text-gray-600">{description}</p>
        )}
      </div>
    </div>
  </div>
);

// Composant réutilisable pour les étapes
const StepCard = ({ icon: Icon, title, description, isHighlighted = false }) => (
  <div className={`p-6 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
    isHighlighted 
      ? 'bg-gradient-to-br from-green-50 to-blue-50 border-green-400 shadow-lg' 
      : 'bg-white border-gray-200 hover:border-blue-300 shadow-md hover:shadow-lg'
  }`}>
    <div className="flex items-center space-x-4 mb-3">
      <div className={`p-3 rounded-lg ${
        isHighlighted ? 'bg-green-100 text-green-600' : 'bg-blue-50 text-blue-600'
      }`}>
        <Icon size={20} />
      </div>
      <h3 className={`font-bold text-lg ${
        isHighlighted ? 'text-green-800' : 'text-gray-800'
      }`}>
        {title}
      </h3>
    </div>
    {description && (
      <p className="text-gray-600 ml-16">{description}</p>
    )}
  </div>
);

// Composant principal
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Résultats */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Résultats obtenus
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
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
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 border border-gray-100">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Prochaines étapes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Rejoignez notre programme éducatif international en quelques étapes simples
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
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

          {/* Bouton CTA */}
          <div className="text-center">
            <button 
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
              aria-label="Commencer votre procédure d'inscription"
            >
              <CheckCircle className="mr-3" size={24} />
              <a href="https://forms.gle/8yDCw8iLs8a5hRYp8"> Commencer votre procédure</a>
              <ArrowRight className="ml-3" size={24} />
            </button>
            <p className="text-sm text-gray-500 mt-4">
              Démarrez votre aventure éducative internationale dès aujourd'hui
            </p>
          </div>
        </div>

        {/* Footer avec informations complémentaires */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            <Clock size={16} />
            <span>Procédures ouvertes pour les rentrées 2025 et 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationResults;