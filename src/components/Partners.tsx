import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Partners: React.FC = () => {
  const { translations } = useLanguage();

  const partners = [
    {
      name: 'University of South China ',
      logo: 'logo_universities/University_of_South_China_logo.png',
      country: 'Chine'
    },
    {
      name: 'Hunan Institute Of Technology',
      logo: 'logo_universities/hunan_institute.png',
      country: 'Chine'
    },
    {
      name: 'Jinzhou Medical University',
      logo: 'logo_universities/Jinzhou_medical_university.jpeg',
      country: 'Chine'
    },
    {
      name: 'Heilongjiang University',
      logo: 'logo_universities/Heilongjiang_University_logo.png',
      country: 'Chine'
    },
    {
      name: 'Harbin Engineering University',
      logo: 'logo_universities/harbin.jpg',
      country: 'Canada'
    },
    {
      name: 'Jinan University',
      logo: 'logo_universities/jinan_university.jpeg',
      country: 'Chine'
    },
    {
      name: 'Pekin University',
      logo: 'logo_universities/peking.png',
      country: 'Chine'
    },
    {
      name: 'Southwestern University of Finance and Economics',
      logo: 'logo_universities/southwestern_university.png',
      country: 'Chine'
    }
  ];

  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {translations.partners.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-xs text-gray-600">
                {partner.country}
              </p>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Collaborations Stratégiques
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Nos Collaborations avec des universités du top 200 de renommée mondiale et nationale ,des entreprises ,des lycées et collèges nous permettent d'offrir 
            des opportunités d'études exceptionnelles à nos étudiants.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">10+</div>
              <p className="opacity-90">Universités Collaboratives</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">+02</div>
              <p className="opacity-90">Pays de destination</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">07+</div>
              <p className="opacity-90">Programmes disponibles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;