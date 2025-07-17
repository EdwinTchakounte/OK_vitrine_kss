import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Partners: React.FC = () => {
  const { translations } = useLanguage();

  const partners = [
    {
      name: 'Université de Pékin',
      logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
      country: 'Chine'
    },
    {
      name: 'Université de Toronto',
      logo: 'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=200',
      country: 'Canada'
    },
    {
      name: 'Université technique de Munich',
      logo: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=200',
      country: 'Allemagne'
    },
    {
      name: 'Université Tsinghua',
      logo: 'https://images.pexels.com/photos/2412179/pexels-photo-2412179.jpeg?auto=compress&cs=tinysrgb&w=200',
      country: 'Chine'
    },
    {
      name: 'Université McGill',
      logo: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=200',
      country: 'Canada'
    },
    {
      name: 'Université de Heidelberg',
      logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=200',
      country: 'Allemagne'
    },
    {
      name: 'Université Fudan',
      logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
      country: 'Chine'
    },
    {
      name: 'Université de Colombie-Britannique',
      logo: 'https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=200',
      country: 'Canada'
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
            Partenariats Stratégiques
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Nos partenariats avec des universités de renommée mondiale nous permettent d'offrir 
            des opportunités d'études exceptionnelles à nos étudiants.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <p className="opacity-90">Universités partenaires</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">3</div>
              <p className="opacity-90">Pays de destination</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <p className="opacity-90">Programmes disponibles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;