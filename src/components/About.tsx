import React from 'react';
import { Target, Eye, Heart, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { translations } = useLanguage();

  const features = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Mission',
      content: translations.about.mission
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: 'Vision',
      content: translations.about.vision
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Valeurs',
      content: translations.about.values
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {translations.about.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Education"
              className="rounded-2xl shadow-2xl w-full h-64 sm:h-auto object-cover"
            />
          </div>
          
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-md">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center space-y-4 sm:space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                {translations.about.founder}
              </h3>
              <h4 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">
                {translations.about.founderName}
              </h4>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                {translations.about.founderTitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                <span>📞 +237 693 461 841</span>
                <span>📞 +237 651 797 376</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;