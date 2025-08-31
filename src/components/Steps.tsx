import React from 'react';
import { MessageCircle, FileText, FolderOpen, Send, CheckCircle, ArrowDown } from 'lucide-react';

function Steps() {
  // Mock translations object for demo
  const translations = {
    steps: {
      title: "Notre Processus d'Accompagnement",
      step1: "Consultation Gratuite",
      step2: "Analyse de Profil",
      step3: "Préparation du Dossier",
      step4: "Soumission des Candidatures",
      step5: "Accompagnement Final"
    }
  };

  const steps = [
    {
      number: 1,
      title: translations.steps.step1,
      description: 'Évaluation gratuite de votre profil académique et de vos objectifs',
      icon: <MessageCircle className="w-4 h-4" />,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      number: 2,
      title: translations.steps.step2,
      description: 'Analyse complète de votre dossier et recommandations personnalisées',
      icon: <FileText className="w-4 h-4" />,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      number: 3,
      title: translations.steps.step3,
      description: 'Aide à la constitution du dossier et préparation des documents',
      icon: <FolderOpen className="w-4 h-4" />,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      number: 4,
      title: translations.steps.step4,
      description: 'Soumission des candidatures aux universités et programmes de bourses',
      icon: <Send className="w-4 h-4" />,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      number: 5,
      title: translations.steps.step5,
      description: 'Accompagnement jusqu\'à l\'obtention du visa et le départ',
      icon: <CheckCircle className="w-4 h-4" />,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            {/* Decorative elements */}
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
              <div className="mx-3 w-2 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-pulse"></div>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-green-400"></div>
            </div>
            
            {/* Main title with enhanced styling */}
            <div className="relative">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-blue-700 mb-4 leading-tight relative tracking-tight">
                <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-green-500 bg-clip-text text-transparent">{translations.steps.title}</span>
              </h2>
              
              {/* Subtle background text effect */}
              <div className="absolute inset-0 -z-10 opacity-5">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-gray-900 transform translate-x-1 translate-y-1">
                  {translations.steps.title}
                </h2>
              </div>
            </div>
            
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Découvrez notre approche structurée pour vous accompagner dans votre projet d'études à l'étranger
            </p>
            
            {/* Enhanced decorative line */}
            <div className="flex items-center justify-center mt-5 space-x-2">
              <div className="w-6 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 rounded-full shadow-lg"></div>
              <div className="w-6 h-0.5 bg-gradient-to-r from-purple-500 to-green-500 rounded-full"></div>
            </div>
          </div>

          {/* Roadmap Container */}
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-green-200 to-red-200"></div>

            {/* Mobile Timeline */}
            <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-green-200 to-red-200"></div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="group relative">
                  {/* Timeline Node */}
                  <div className={`absolute left-3 md:left-4 w-6 h-6 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300 z-10`}>
                    <span className="text-white font-bold text-xs">{step.number}</span>
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-14 relative">
                    <div className={`${step.bgColor} ${step.borderColor} border rounded-lg p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 group-hover:translate-y-[-1px] bg-white/80 backdrop-blur-sm`}>
                      {/* Step Badge */}
                      <div className="flex items-center space-x-2 mb-3">
                        <div className={`w-7 h-7 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center text-white shadow-sm`}>
                          {step.icon}
                        </div>
                        <span className={`text-xs font-semibold px-2 py-1 bg-gradient-to-r ${step.color} bg-clip-text text-transparent bg-white/50 rounded-full`}>
                          Étape {step.number}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {step.description}
                      </p>

                      {/* Progress Indicator */}
                      <div className="mt-3 flex items-center space-x-2">
                        <div className={`h-1 bg-gradient-to-r ${step.color} rounded-full`} style={{ width: `${((step.number) / steps.length) * 100}%` }}></div>
                        <div className="h-1 bg-gray-200 rounded-full flex-1"></div>
                        <span className="text-xs text-gray-500 font-medium">
                          {step.number}/{steps.length}
                        </span>
                      </div>
                    </div>

                    {/* Connection Arrow for mobile */}
                    {index < steps.length - 1 && (
                      <div className="md:hidden flex justify-center mt-3">
                        <ArrowDown className="w-4 h-4 text-gray-300 animate-bounce" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Badge */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-200 rounded-full px-4 py-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-green-800 font-medium text-sm">Processus complet et personnalisé</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-6 md:mt-8">
            <a
              href="https://wa.me/237693461841"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Commencer mon parcours
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Consultation gratuite • Réponse sous 24h
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Steps;