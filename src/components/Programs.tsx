import React, { useState } from 'react';
import { MapPin, Star, GraduationCap, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Programs: React.FC = () => {
  const { translations } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);

  const programs = [
    {
      intitulé: 'Nos Programmes d\'études',
      flag: '🇨🇳',
      color: 'from-red-600 to-red-700',
      image: 'https://images.pexels.com/photos/2412179/pexels-photo-2412179.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: [
        'Frais de scolarité entièrement pris en charge',
        'Allocation mensuelle de subsistance',
        'Logement universitaire gratuit',
        'Assurance médicale complète',
        'Cours de langue chinoise gratuits'
      ],
      universities: [
        'Université de Pékin',
        'Université Tsinghua',
        'Université Fudan',
        'Université de Shanghai Jiao Tong'
      ]
    },
    {
      intitulé: 'Nos Programmes de Bourses d\'études ',
      flag: '🇨🇳',
      color: 'from-red-500 to-red-600',
      image: 'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: [
        'Bourses d\'excellence jusqu\'à 50,000 CAD',
        'Permis de travail post-études',
        'Système d\'éducation de renommée mondiale',
        'Voie vers la résidence permanente',
        'Environnement multiculturel'
      ],
      universities: [
        'Université de Toronto',
        'Université McGill',
        'Université de Colombie-Britannique',
        'Université de Montréal'
      ]
    },
  
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {/* <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {translations.programs.title}
          </h2> */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 sm:mb-12 bg-gray-100 rounded-2xl p-2">
          {programs.map((program, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-200 m-1 text-sm sm:text-base ${
                activeTab === index
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <span className="text-lg sm:text-2xl">{program.flag}</span>
              <span>{program.intitulé}</span>
            </button>
          ))}
        </div>

        {/* Program Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <img
              src={programs[activeTab].image}
              alt={programs[activeTab].intitulé}
              className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-auto object-cover"
            />
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${programs[activeTab].color} bg-clip-text text-transparent mb-4`}>
                {programs[activeTab].intitulé}
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Benefits */}
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    {translations.programs.benefits}
                  </h4>
                  <ul className="space-y-2">
                    {programs[activeTab].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm sm:text-base text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Universities */}
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 text-blue-600 mr-2" />
                    Universités partenaires
                  </h4>
                  <div className="grid grid-cols-1 gap-2 sm:gap-3">
                    {programs[activeTab].universities.map((university, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-2 sm:p-3 text-xs sm:text-sm text-gray-700">
                        {university}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2 sm:pt-4">
              <a
                href="https://wa.me/237693461841"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-6 py-3 bg-gradient-to-r ${programs[activeTab].color} text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-200 text-sm sm:text-base`}
              >
                <Users className="w-5 h-5 mr-2" />
                {translations.common.apply}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;