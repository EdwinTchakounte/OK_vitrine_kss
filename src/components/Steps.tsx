import React from 'react';
import { MessageCircle, FileText, FolderOpen, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Steps: React.FC = () => {
  const { translations } = useLanguage();

  const steps = [
    {
      number: 1,
      title: translations.steps.step1,
      description: 'Évaluation gratuite de votre profil académique et de vos objectifs',
      icon: <MessageCircle className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: 2,
      title: translations.steps.step2,
      description: 'Analyse complète de votre dossier et recommandations personnalisées',
      icon: <FileText className="w-8 h-8" />,
      color: 'from-green-500 to-green-600'
    },
    {
      number: 3,
      title: translations.steps.step3,
      description: 'Aide à la constitution du dossier et préparation des documents',
      icon: <FolderOpen className="w-8 h-8" />,
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      number: 4,
      title: translations.steps.step4,
      description: 'Soumission des candidatures aux universités et programmes de bourses',
      icon: <Send className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: 5,
      title: translations.steps.step5,
      description: 'Accompagnement jusqu\'à l\'obtention du visa et le départ',
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="steps" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {translations.steps.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-green-500 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className={`bg-white rounded-2xl shadow-xl p-8 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`inline-flex items-center space-x-3 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse lg:space-x-reverse' : ''}`}>
                      <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white`}>
                        {step.icon}
                      </div>
                      <span className={`text-sm font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        Étape {step.number}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative flex-shrink-0 w-16 h-16 hidden lg:flex">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                  <div className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-1 bg-gradient-to-r ${step.color} ${
                    index % 2 === 0 ? 'right-full' : 'left-full'
                  }`}></div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Version
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-3 sm:space-x-4">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                <span className="font-bold text-sm sm:text-base">{step.number}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="https://wa.me/237693461841"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-200 shadow-lg text-sm sm:text-base"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Commencer maintenant
          </a>
        </div>
      </div>
    </section>
  );
};

export default Steps;