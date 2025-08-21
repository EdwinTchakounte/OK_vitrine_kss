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
      icon: <MessageCircle className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      number: 2,
      title: translations.steps.step2,
      description: 'Analyse complète de votre dossier et recommandations personnalisées',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      number: 3,
      title: translations.steps.step3,
      description: 'Aide à la constitution du dossier et préparation des documents',
      icon: <FolderOpen className="w-6 h-6" />,
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200'
    },
    {
      number: 4,
      title: translations.steps.step4,
      description: 'Soumission des candidatures aux universités et programmes de bourses',
      icon: <Send className="w-6 h-6" />,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      number: 5,
      title: translations.steps.step5,
      description: 'Accompagnement jusqu\'à l\'obtention du visa et le départ',
      icon: <CheckCircle className="w-6 h-6" />,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            {/* Decorative elements */}
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
              <div className="mx-4 w-3 h-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-full animate-pulse"></div>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-green-400"></div>
            </div>
            
            {/* Main title with enhanced styling */}
            <div className="relative">


    <h2 className="text-4xl md:text-8xl lg:text-4xl font-black text-blue-700 mb-8 leading-tight relative tracking-tight">
                <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-green-500 bg-clip-text text-transparent">{translations.steps.title}</span>
                {/* Multiple glow layers for depth */}
                <div className="absolute inset-0 text-5xl md:text-8xl lg:text-9xl font-black text-blue-300 opacity-15 blur-sm animate-pulse">
                  {translations.steps.title}
                </div>
                <div className="absolute inset-0 text-5xl md:text-8xl lg:text-9xl font-black text-green-300 opacity-10 blur-md animate-pulse" style={{ animationDelay: '1s' }}>
                  {translations.steps.title}
                </div>
              </h2>


              
              
              {/* Subtle background text effect */}
              <div className="absolute inset-0 -z-10 opacity-5">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 transform translate-x-1 translate-y-1">
                  {translations.steps.title}
                </h2>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre approche structurée pour vous accompagner dans votre projet d'études à l'étranger
            </p>
            
            {/* Enhanced decorative line */}
            <div className="flex items-center justify-center mt-8 space-x-2">
              <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 rounded-full shadow-lg"></div>
              <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-green-500 rounded-full"></div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute top-0 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-8 right-1/4 w-1.5 h-1.5 bg-green-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-4 left-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Roadmap Container */}
          <div className="relative">
            {/* Desktop Timeline */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-green-200 to-red-200"></div>

            {/* Mobile Timeline */}
            <div className="md:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-green-200 to-red-200"></div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="group relative">
                  {/* Timeline Node */}
                  <div className={`absolute left-4 md:left-6 w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300 z-10`}>
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>

                  {/* Content Card */}
                  <div className="ml-16 md:ml-20 relative">
                    <div className={`${step.bgColor} ${step.borderColor} border-2 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-2px] bg-white/80 backdrop-blur-sm`}>
                      {/* Step Badge */}
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-10 h-10 bg-gradient-to-r ${step.color} rounded-lg flex items-center justify-center text-white shadow-sm`}>
                          {step.icon}
                        </div>
                        <span className={`text-sm font-semibold px-3 py-1 bg-gradient-to-r ${step.color} bg-clip-text text-transparent bg-white/50 rounded-full`}>
                          Étape {step.number}
                        </span>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {step.description}
                      </p>

                      {/* Progress Indicator */}
                      <div className="mt-4 flex items-center space-x-2">
                        <div className={`h-1.5 bg-gradient-to-r ${step.color} rounded-full`} style={{ width: `${((step.number) / steps.length) * 100}%` }}></div>
                        <div className="h-1.5 bg-gray-200 rounded-full flex-1"></div>
                        <span className="text-xs text-gray-500 font-medium">
                          {step.number}/{steps.length}
                        </span>
                      </div>
                    </div>

                    {/* Connection Arrow for mobile */}
                    {index < steps.length - 1 && (
                      <div className="md:hidden flex justify-center mt-4">
                        <ArrowDown className="w-5 h-5 text-gray-300 animate-bounce" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 bg-green-100 border border-green-200 rounded-full px-6 py-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-800 font-medium">Processus complet et personnalisé</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-8 md:mt-12">
            <a
              href="https://wa.me/237693461841"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Commencer mon parcours
            </a>
            <p className="mt-3 text-sm text-gray-500">
              Consultation gratuite • Réponse sous 24h
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Steps;