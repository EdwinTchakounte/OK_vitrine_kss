import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Partners: React.FC = () => {
  const { translations } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationPhase, setAnimationPhase] = useState<'idle' | 'slideOut' | 'slideIn'>('idle');

  // Liste complète des universités
  const allPartners = [
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

  // Fonction pour obtenir les 4 universités actuelles dans l'ordre de rotation
  const getCurrentPartners = () => {
    const partners = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % allPartners.length;
      partners.push({
        ...allPartners[index],
        position: i + 1,
        key: `${index}-${currentIndex}` // Clé unique pour forcer le re-render
      });
    }
    return partners;
  };

  // Rotation automatique toutes les 4 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      handleTransition();
    }, 5000);

    return () => clearInterval(interval);
  }, [allPartners.length]);

  const handleTransition = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setAnimationPhase('slideOut');
    
    // Phase 1: Sortie des éléments actuels
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allPartners.length);
      setAnimationPhase('slideIn');
    }, 600);
    
    // Phase 2: Entrée des nouveaux éléments
    setTimeout(() => {
      setAnimationPhase('idle');
      setIsTransitioning(false);
    }, 1200);
  };

  const currentPartners = getCurrentPartners();

  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-green-500 bg-clip-text text-transparent mb-4 relative">
              {translations?.partners?.title || 'Nos Partenaires Universitaires'}
            </h2>
            {/* Effet de brillance animé */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shine"></div>
          </div>
          
          {/* Ligne décorative améliorée */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent w-16"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mx-4 animate-pulse"></div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded-full shadow-lg"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mx-4 animate-pulse"></div>
            <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent w-16"></div>
          </div>
          
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos partenariats avec des 
            <span className="font-semibold text-blue-600"> universités de renommée mondiale</span>
          </p>
          
          {/* Badges décoratifs */}
        </div>

        {/* Container principal avec grille 2x2 sur mobile, 1x4 sur desktop */}
        <div className="relative mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative overflow-hidden">
            {currentPartners.map((partner, index) => (
              <div
                key={partner.key}
                className={`group relative bg-white rounded-2xl p-4 md:p-6 text-center hover:shadow-2xl border border-gray-100 transform transition-all duration-300 hover:scale-105 ${
                  animationPhase === 'slideOut' ? 'animate-slideOut' : 
                  animationPhase === 'slideIn' ? 'animate-slideIn' : 
                  'animate-idle'
                }`}
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Logo épuré */}
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-xl overflow-hidden bg-gray-50 group-hover:shadow-md transition-all duration-300">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-cover transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/100x100/3B82F6/FFFFFF?text=${partner.name.charAt(0)}`;
                      }}
                    />
                </div>

                <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2 leading-tight">
                  {partner.name}
                </h3>
                
                <p className="text-xs text-gray-500">
                  📍 {partner.country}
                </p>
              </div>
            ))}
          </div>

          {/* Indicateurs de progression */}
          <div className="flex justify-center space-x-1 md:space-x-2 mt-6 md:mt-8">
            {allPartners.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    handleManualTransition(index);
                  }
                }}
                className={`w-1.5 h-1.5 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-600 w-3 md:w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Flèches de navigation pour mobile */}
          <div className="flex justify-center items-center space-x-4 mt-4 md:hidden">
            <button
              onClick={() => {
                if (!isTransitioning) {
                  handleManualTransition((currentIndex - 1 + allPartners.length) % allPartners.length);
                }
              }}
              className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              ‹
            </button>
            <span className="text-xs text-gray-500 px-2">
              {currentIndex + 1} / {allPartners.length}
            </span>
            <button
              onClick={() => {
                if (!isTransitioning) {
                  handleManualTransition((currentIndex + 1) % allPartners.length);
                }
              }}
              className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              ›
            </button>
          </div>
        </div>

        {/* Section des bénéfices avec animation */}
        <div className="mt-16 bg-white border border-gray-100 rounded-2xl p-6 md:p-12 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-gray-900">
            Collaborations Stratégiques
          </h3>
          <p className="text-sm md:text-lg lg:text-xl mb-6 md:mb-8 text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nos collaborations avec des universités du top 200 de renommée mondiale et nationale, des entreprises, des lycées et collèges nous permettent d'offrir des opportunités d'études exceptionnelles à nos étudiants.
          </p>
          
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
            <div className="group p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
              <div className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                10+
              </div>
              <p className="text-gray-700 text-xs md:text-base font-medium">Universités Collaboratives</p>
            </div>
            <div className="group p-4 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors duration-300">
              <div className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 text-green-600 group-hover:scale-110 transition-transform duration-300">
                +02
              </div>
              <p className="text-gray-700 text-xs md:text-base font-medium">Pays de destination</p>
            </div>
            <div className="group p-4 rounded-xl bg-gray-50 hover:bg-purple-50 transition-colors duration-300">
              <div className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 text-purple-600 group-hover:scale-110 transition-transform duration-300">
                07+
              </div>
              <p className="text-gray-700 text-xs md:text-base font-medium">Programmes disponibles</p>
            </div>
          </div>
        </div>
      </div>

      {/* Styles CSS pour les animations */}
      <style jsx>{`
        @keyframes idle {
          0% {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1);
          }
        }

        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(100%) translateY(-20px) scale(0.8) rotate(5deg);
            filter: blur(4px);
          }
          50% {
            opacity: 0.7;
            transform: translateX(20%) translateY(-10px) scale(0.9) rotate(2deg);
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1) rotate(0deg);
            filter: blur(0px);
          }
        }

        @keyframes slideOut {
          0% {
            opacity: 1;
            transform: translateX(0) translateY(0) scale(1) rotate(0deg);
            filter: blur(0px);
          }
          50% {
            opacity: 0.5;
            transform: translateX(-20%) translateY(10px) scale(0.9) rotate(-2deg);
            filter: blur(2px);
          }
          100% {
            opacity: 0;
            transform: translateX(-100%) translateY(20px) scale(0.8) rotate(-5deg);
            filter: blur(4px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-idle {
          animation: idle 0.5s ease-out forwards;
        }

        .animate-slideIn {
          animation: slideIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-slideOut {
          animation: slideOut 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) forwards;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
            opacity: 0;
          }
        }

        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
        /* Responsive adjustments */
        @media (max-width: 768px) {
          @keyframes slideIn {
            0% {
              opacity: 0;
              transform: translateY(50px) translateX(30px) scale(0.8) rotate(3deg);
              filter: blur(3px);
            }
            50% {
              opacity: 0.7;
              transform: translateY(10px) translateX(10px) scale(0.9) rotate(1deg);
              filter: blur(1px);
            }
            100% {
              opacity: 1;
              transform: translateY(0) translateX(0) scale(1) rotate(0deg);
              filter: blur(0px);
            }
          }

          @keyframes slideOut {
            0% {
              opacity: 1;
              transform: translateY(0) translateX(0) scale(1) rotate(0deg);
              filter: blur(0px);
            }
            50% {
              opacity: 0.5;
              transform: translateY(-10px) translateX(-10px) scale(0.9) rotate(-1deg);
              filter: blur(1px);
            }
            100% {
              opacity: 0;
              transform: translateY(-50px) translateX(-30px) scale(0.8) rotate(-3deg);
              filter: blur(3px);
            }
          }
        }
      `}</style>
    </section>
  );

  function handleManualTransition(targetIndex: number) {
    setIsTransitioning(true);
    setAnimationPhase('slideOut');
    
    setTimeout(() => {
      setCurrentIndex(targetIndex);
      setAnimationPhase('slideIn');
    }, 600);
    
    setTimeout(() => {
      setAnimationPhase('idle');
      setIsTransitioning(false);
    }, 1200);
  }
};

export default Partners;