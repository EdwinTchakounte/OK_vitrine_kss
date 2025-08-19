import React, { useState, useEffect } from 'react';
import { Award, Star, Trophy, Users, MessageCircle, BookOpen, CheckCircle, Shield, Globe, Smartphone, ArrowRight, Target, GraduationCap, Book, Lightbulb, AlignCenterVertical as Certificate } from 'lucide-react';

const FormationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'infos' | 'contenu' | 'avantages'>('infos');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contenusBonus = [
    {
      title: "Développement Mobile Flutter",
      icon: <Smartphone className="w-7 h-7" />,
      description: "Maîtrisez la création d'applications Android & iOS performantes avec Flutter et Dart.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      title: "Développement Web Full‑Stack",
      icon: <Globe className="w-7 h-7" />,
      description: "Construisez des applications web modernes avec React, Node.js et bases de données.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      title: "Cybersécurité & Audit",
      icon: <Shield className="w-7 h-7" />,
      description: "Protégez et auditez les systèmes avec les dernières techniques de sécurité.",
      color: "from-blue-600 to-green-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-green-50",
      iconColor: "text-blue-700",
    },
    {
      title: "Design Graphique Professionnel",
      icon: <Award className="w-7 h-7" />,
      description: "Créez des interfaces utilisateur exceptionnelles et des identités visuelles.",
      color: "from-green-600 to-blue-500",
      bgColor: "bg-gradient-to-br from-green-50 to-blue-50",
      iconColor: "text-green-700",
    },
  ];

  const avantagesBonus = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Compétences ciblées",
      description: "Développez des expertises précises et recherchées par les entreprises tech.",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Excellence garantie",
      description: "Un programme conçu pour vous mener vers l'excellence professionnelle.",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Accompagnement expert",
      description: "Bénéficiez d'un mentorat personnalisé par nos spécialistes certifiés.",
      color: "text-blue-700",
      bgColor: "bg-blue-50",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Certification reconnue",
      description: "Obtenez des certifications valorisées par l'industrie technologique.",
      color: "text-green-700",
      bgColor: "bg-green-50",
    },
  ];

  const tabContent = {
    infos: {
      title: "Programme d'Excellence KSIES",
      subtitle: "Votre passerelle vers l'expertise technologique",
    },
    contenu: {
      title: "Modules de Formation",
      subtitle: "Quatre domaines d'expertise pour votre avenir",
    },
    avantages: {
      title: "Avantages Exclusifs",
      subtitle: "Pourquoi choisir notre programme",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className={`relative bg-white border-b border-gray-100 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Background Education Icons */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 text-blue-100 opacity-30">
            <GraduationCap className="w-16 h-16" />
          </div>
          <div className="absolute top-20 right-20 text-green-100 opacity-30">
            <Book className="w-12 h-12" />
          </div>
          <div className="absolute bottom-20 left-20 text-blue-100 opacity-30">
            <Lightbulb className="w-14 h-14" />
          </div>
          <div className="absolute bottom-10 right-10 text-green-100 opacity-30">
            <Certificate className="w-18 h-18" />
          </div>
          <div className="absolute top-1/2 left-1/4 text-blue-100 opacity-20">
            <BookOpen className="w-10 h-10" />
          </div>
          <div className="absolute top-1/3 right-1/3 text-green-100 opacity-20">
            <Award className="w-8 h-8" />
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
          <div className="text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-8 border border-blue-100">
              <Star className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-medium text-sm">Programme Exclusif KSIES</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Excellence en
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                Formation Technologique
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Développez vos compétences numériques avec notre programme bonus exclusif, 
              conçu pour propulser votre carrière dans la technologie.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
                <span className="flex items-center gap-2">
                  Découvrir le programme
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              
              <button className="group border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-gray-300 hover:bg-gray-50">
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Nous contacter
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white sticky top-0 z-40 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center">
            <div className="flex gap-1 my-0">
              {[
                { id: 'infos', label: 'À propos', icon: BookOpen },
                { id: 'contenu', label: 'Modules', icon: Target },
                { id: 'avantages', label: 'Avantages', icon: Star },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 py-2 px-4 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeTab === tab.id
                      ? 'bg-blue-50 text-blue-600 border border-blue-200'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <tab.icon className="w-3.5 h-3.5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative bg-white max-w-6xl mx-auto px-6 py-16">
        {/* Subtle background pattern for content area */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-10 text-gray-100 opacity-40">
            <GraduationCap className="w-8 h-8" />
          </div>
          <div className="absolute bottom-1/4 left-10 text-gray-100 opacity-40">
            <Book className="w-6 h-6" />
          </div>
        </div>
        
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Section Header */}
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {tabContent[activeTab].title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {tabContent[activeTab].subtitle}
            </p>
          </div>

          {/* Tab Content */}
          <div className="transition-all duration-500 ease-out">
            {activeTab === 'infos' && (
              <div className="max-w-4xl mx-auto relative z-10">
                <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-blue-600 rounded-xl">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">Notre Mission</h3>
                      <p className="text-gray-600">Préparer l'élite technologique de demain</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Le programme d'excellence technologique KSIES est une initiative stratégique visant à développer 
                    vos compétences techniques et vous préparer aux défis du marché technologique moderne.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Développer des compétences techniques de pointe",
                      "Offrir un accompagnement personnalisé premium",
                      "Préparer aux défis du marché technologique",
                      "Délivrer des certifications reconnues"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contenu' && (
              <div className="grid lg:grid-cols-2 gap-6 relative z-10">
                {contenusBonus.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 ${item.bgColor} rounded-xl ${item.iconColor} transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    
                    {/* <div className="flex items-center text-blue-600 font-medium">
                      <span>En savoir plus</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div> */}
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'avantages' && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {avantagesBonus.map((adv, idx) => (
                  <div 
                    key={idx} 
                    className="group bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-blue-200 transition-all duration-300"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${adv.bgColor} rounded-xl mb-4`}>
                      <div className={adv.color}>
                        {adv.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {adv.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{adv.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="relative bg-gray-50 border-t border-gray-200">
        {/* Background education icons for stats */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/4 text-blue-100 opacity-30">
            <Trophy className="w-12 h-12" />
          </div>
          <div className="absolute top-1/2 right-1/4 text-green-100 opacity-30">
            <Award className="w-10 h-10" />
          </div>
        </div>
        
     
      </div>

      {/* CTA Section */}
      <div className="relative bg-white border-t border-gray-200">
        {/* Background icons for CTA */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 text-blue-100 opacity-25">
            <GraduationCap className="w-14 h-14" />
          </div>
          <div className="absolute bottom-10 right-10 text-green-100 opacity-25">
            <Certificate className="w-16 h-16" />
          </div>
          <div className="absolute top-1/2 left-1/3 text-blue-100 opacity-20">
            <Lightbulb className="w-8 h-8" />
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-8 border border-green-100">
              <Award className="w-4 h-4 text-green-600" />
              <span className="text-green-700 font-medium text-sm">Exclusivement pour les étudiants KSIES</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Prêt à transformer votre
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                avenir technologique ?
              </span>
            </h3>
            
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Rejoignez notre programme d'excellence et démarquez-vous sur le marché du travail 
              avec des compétences techniques recherchées.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@ksies-scholarships.net"
                className="group bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-lg inline-flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Démarrer maintenant
              </a>
              
              <button className="group border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 inline-flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Plus d'informations
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default FormationPage;