import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const FAQ: React.FC = () => {
  const { translations } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      question: 'Quelles sont les conditions pour obtenir une bourse ?',
      answer: 'Les conditions varient selon le pays et l\'université. Généralement, il faut avoir un bon dossier académique, maîtriser la langue d\'enseignement et parfois passer des tests spécifiques. Nous évaluons chaque dossier individuellement.'
    },
    {
      question: 'Combien coûtent vos services ?',
      answer: 'Nos tarifs varient selon le pays de destination et les services requis. Nous proposons des packages adaptés à chaque budget. Contactez-nous pour un devis personnalisé.'
    },
    {
      question: 'Combien de temps prend le processus ?',
      answer: 'Le processus complet prend généralement 6 à 12 mois, selon le pays et l\'université choisie. Nous recommandons de commencer les démarches au moins un an avant la rentrée souhaitée.'
    },
    {
      question: 'Aidez-vous aussi pour les visas ?',
      answer: 'Oui, nous accompagnons nos étudiants dans toutes les démarches administratives, y compris l\'obtention du visa étudiant. Nous préparons les dossiers et donnons des conseils pour l\'entretien.'
    },
    {
      question: 'Puis-je changer de pays de destination ?',
      answer: 'Oui, il est possible de modifier votre choix de destination tant que les démarches n\'ont pas commencé. Nous adaptons notre accompagnement selon vos nouvelles préférences.'
    },
    {
      question: 'Y a-t-il des bourses partielles ?',
      answer: 'Oui, nous travaillons avec différents types de bourses : complètes, partielles, et bourses de mérite. Nous vous orienterons vers les opportunités qui correspondent à votre profil.'
    },
    {
      question: 'Que se passe-t-il si ma candidature est refusée ?',
      answer: 'En cas de refus, nous analysons les raisons et proposons des alternatives. Nous préparons généralement plusieurs candidatures pour maximiser vos chances de succès.'
    },
    {
      question: 'Proposez-vous un suivi après l\'arrivée ?',
      answer: 'Oui, nous restons en contact avec nos étudiants même après leur arrivée. Nous les aidons avec l\'intégration et répondons à leurs questions sur la vie étudiante.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
         <h2 className="text-4xl md:text-8xl lg:text-4xl font-black text-blue-700 mb-8 leading-tight relative tracking-tight">
                <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-green-500 bg-clip-text text-transparent">{translations.faq.title}</span>
                {/* Multiple glow layers for depth */}
                <div className="absolute inset-0 text-5xl md:text-8xl lg:text-9xl font-black text-blue-300 opacity-15 blur-sm animate-pulse">
                  {translations.faq.title}
                </div>
                <div className="absolute inset-0 text-5xl md:text-8xl lg:text-9xl font-black text-green-300 opacity-10 blur-md animate-pulse" style={{ animationDelay: '1s' }}>
                  {translations.faq.title}
                </div>
              </h2>


          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {item.question}
                </span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-blue-600 flex-shrink-0" />
                )}
              </button>
              
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Vous avez d'autres questions ?
          </p>
          <a
            href="https://wa.me/237693461841"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-200"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;