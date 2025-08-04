import React, { useState } from 'react';
import { Award, Briefcase, Code, GraduationCap, Smartphone, Globe, Palette, Users, Star, MapPin, Mail, Phone, Target, TrendingUp, Shield, Zap, BookOpen, Brain, Trophy, CheckCircle, ArrowRight, Play, Download, MessageCircle } from 'lucide-react';

const FormationPage = () => {
  const [activeTab, setActiveTab] = useState('programmes');

  const formations = [
    {
      title: "Développement Mobile Flutter",
      duration: "6 mois",
      level: "Débutant à Avancé",
      icon: <Smartphone className="w-8 h-8" />,
      color: "blue",
      description: "Maîtrisez le développement d'applications mobiles multiplateformes avec Flutter et Firebase",
      atouts: [
        "Applications en production (Mema, Mon Faxe)",
        "Déploiement sur Play Store & App Store",
        "Intégration Firebase complète",
        "UI/UX moderne et responsive"
      ],
      debouches: [
        "Développeur Mobile Flutter (500k-1.2M FCFA/mois)",
        "Freelancer Mobile (projets 200k-800k FCFA)",
        "Startup Tech Co-founder",
        "Consultant Mobile Senior"
      ],
      projets: ["Application de prédication Mema", "Plateforme étudiante Mon Faxe"]
    },
    {
      title: "Développement Web Full-Stack",
      duration: "8 mois",
      level: "Débutant à Expert",
      icon: <Globe className="w-8 h-8" />,
      color: "green",
      description: "Conception et développement de sites web statiques et dynamiques professionnels",
      atouts: [
        "Architecture tripartite maîtrisée",
        "Système de gestion hôtelière développé",
        "Frontend et Backend intégrés",
        "Déploiement et maintenance"
      ],
      debouches: [
        "Développeur Full-Stack (400k-1M FCFA/mois)",
        "Architecte Web (800k-1.5M FCFA/mois)",
        "Chef de projet digital",
        "Entrepreneur Web"
      ],
      projets: ["Système de gestion Échangeur Hôtel"]
    },
    {
      title: "Cybersécurité & Audit SI",
      duration: "5 mois",
      level: "Intermédiaire à Expert",
      icon: <Shield className="w-8 h-8" />,
      color: "red",
      description: "Sécurisation des systèmes d'information et audit de sécurité certifié ANSSI",
      atouts: [
        "Certification SecNum ANSSI",
        "Expérience audit chez Eneo",
        "Détection des vulnérabilités",
        "Plans de sécurisation"
      ],
      debouches: [
        "Expert Cybersécurité (600k-1.8M FCFA/mois)",
        "Auditeur SI (500k-1.3M FCFA/mois)",
        "Consultant Sécurité",
        "RSSI en entreprise"
      ],
      projets: ["Audit Murcas Fasas d'Eneo"]
    },
    {
      title: "Design Graphique Professionnel",
      duration: "4 mois",
      level: "Débutant à Professionnel",
      icon: <Palette className="w-8 h-8" />,
      color: "purple",
      description: "Création de visuels institutionnels et technologiques de haute qualité",
      atouts: [
        "Portfolio clients prestigieux",
        "Identité visuelle complète",
        "Design print et digital",
        "Branding professionnel"
      ],
      debouches: [
        "Designer Graphique (250k-700k FCFA/mois)",
        "Directeur Artistique (400k-1M FCFA/mois)",
        "Freelancer Créatif",
        "Agence de communication"
      ],
      projets: ["Visuels IUT-FV, KIES, Synapse Tech"]
    }
  ];

  const avantagesKIES = [
    {
      icon: <Trophy className="w-12 h-12 text-yellow-500" />,
      title: "Formateur Lauréat",
      description: "Edwin Tchakounte, 1er Prix Meilleur Projet Innovant 2023-2024"
    },
    {
      icon: <Star className="w-12 h-12 text-blue-500" />,
      title: "Projets Réels",
      description: "Applications en production utilisées par des milliers d'utilisateurs"
    },
    {
      icon: <Target className="w-12 h-12 text-green-500" />,
      title: "Accompagnement Bourse",
      description: "Structure dédiée à l'obtention de bourses et l'excellence scolaire"
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-500" />,
      title: "Insertion Garantie",
      description: "Taux d'insertion professionnelle de 85% dans les 6 mois"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Dans sa course vers l'excellence, <span className="text-yellow-300">KIES</span> vous offre des formations d'exception
                
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Développez vos compétences technologiques avec Edwin Tchakounte et plusieurs autres experts, 
                 expert reconnu dans le développement d'applications innovantes.
              </p>
              <div className="flex flex-wrap gap-4">
                {/* <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center gap-2">
                  <Play size={20} />
                  Découvrir nos programmes
                </button> */}
                {/* <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2">
                  <Download size={20} />
                  Brochure PDF
                </button> */}
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Edwin Tchakounte</h3>
                <p className="text-green-300">Ingénieur de Travaux en Génie Logiciel</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Lauréat 1er Prix Innovation 2024</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Applications en production</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Certifié Python & Cybersécurité</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>Expert multi-domaines</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: 'programmes', label: 'Nos Programmes', icon: <BookOpen size={20} /> },
              { id: 'avantages', label: 'Avantages KIES', icon: <Star size={20} /> },
              { id: 'formateur', label: 'Votre Formateur', icon: <Users size={20} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium transition-colors ${
                  activeTab === tab.id 
                    ? 'border-blue-500 text-blue-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Programmes Section */}
        {activeTab === 'programmes' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos Formations d'Excellence</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des programmes conçus par un expert pour vous mener vers l'excellence professionnelle
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {formations.map((formation, index) => (
                <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow border-t-4 border-${formation.color}-500`}>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 bg-${formation.color}-100 rounded-xl text-${formation.color}-600`}>
                        {formation.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{formation.title}</h3>
                        <div className="flex gap-4 text-sm text-gray-500 mt-1">
                          <span>📅 {formation.duration}</span>
                          <span>📊 {formation.level}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">{formation.description}</p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-yellow-500" />
                          Atouts de la formation
                        </h4>
                        <ul className="space-y-2">
                          {formation.atouts.map((atout, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              {atout}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-blue-500" />
                          Débouchés professionnels
                        </h4>
                        <ul className="space-y-2">
                          {formation.debouches.map((debouche, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <ArrowRight className="w-4 h-4 text-blue-500 flex-shrink-0" />
                              {debouche}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {formation.projets && (
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                            <Star className="w-4 h-4 text-purple-500" />
                            Projets réalisés par Edwin
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {formation.projets.map((projet, i) => (
                              <span key={i} className={`bg-${formation.color}-100 text-${formation.color}-800 px-3 py-1 rounded-full text-xs font-medium`}>
                                {projet}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                      <a
            href="https://wa.me/237693461841"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity duration-200 shadow-lg text-sm sm:text-base"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Commencer maintenant
          </a>
                    {/* <button className={`w-full mt-6 bg-gradient-to-r from-${formation.color}-500 to-${formation.color}-600 text-white py-3 rounded-xl font-semibold hover:from-${formation.color}-600 hover:to-${formation.color}-700 transition-colors flex items-center justify-center gap-2`}>
                      S'inscrire maintenant
                      <ArrowRight size={20} />
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Avantages KIES Section */}
        {activeTab === 'avantages' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Pourquoi Choisir KIES ?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une valeur ajoutée unique dans votre parcours vers l'excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {avantagesKIES.map((avantage, index) => (
                <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-6 flex justify-center">
                    {avantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{avantage.title}</h3>
                  <p className="text-gray-600">{avantage.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Programme de Bourses KIES</h3>
              <p className="text-xl mb-6 opacity-90">
                Structure d'accompagnement dédiée à l'obtention de bourses et à l'excellence scolaire
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">85%</h4>
                  <p className="text-sm opacity-80">Taux d'insertion professionnelle</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">200+</h4>
                  <p className="text-sm opacity-80">Étudiants formés</p>
                </div>
                <div className="bg-white/10 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-2">50+</h4>
                  <p className="text-sm opacity-80">Bourses obtenues</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Formateur Section */}
        {activeTab === 'formateur' && (
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Votre Formateur Expert</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Edwin Tchakounte, ingénieur passionné et reconnu dans l'écosystème tech camerounais
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-8 shadow-lg sticky top-24">
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      ET
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Edwin Tchakounte</h3>
                    <p className="text-blue-600 font-medium">Ingénieur de Travaux en Génie Logiciel</p>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="text-yellow-600" size={20} />
                        <span className="font-semibold text-yellow-800">Distinction</span>
                      </div>
                      <p className="text-sm text-yellow-700">Lauréat du 1er Prix du Meilleur Projet Innovant — IUT Fotso Victor 2023-2024</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Certifications</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm">Développeur Python (Sololearn)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span className="text-sm">Sécurité Numérique (SecNum - ANSSI)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <Briefcase className="text-blue-600" size={24} />
                    Expérience Professionnelle
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        company: "Centre de Formation CFP Broad Range Consulting",
                        role: "Formateur en développement d'applications",
                        location: "Akwa, Douala",
                        color: "blue"
                      },
                      {
                        company: "KIES",
                        role: "IT et Formateur",
                        description: "Contributeur aux formations (web, mobile, cybersécurité)",
                        color: "green"
                      },
                      {
                        company: "Murcas Fasas d'Eneo",
                        role: "Auditeur des Systèmes d'Information",
                        color: "red"
                      },
                      {
                        company: "2Metech",
                        role: "IT Support & Développement",
                        color: "purple"
                      }
                    ].map((exp, index) => (
                      <div key={index} className={`border-l-4 border-${exp.color}-500 pl-6 py-2`}>
                        <h4 className="font-bold text-gray-800">{exp.company}</h4>
                        <p className={`text-${exp.color}-600 font-medium`}>{exp.role}</p>
                        {exp.location && <p className="text-sm text-gray-500">{exp.location}</p>}
                        {exp.description && <p className="text-sm text-gray-600 mt-1">{exp.description}</p>}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                    <Star className="text-green-600" size={24} />
                    Réalisations Marquantes
                  </h3>
                  <div className="grid gap-6">
                    <div className="bg-blue-50 rounded-xl p-6">
                      <h4 className="font-bold text-blue-800 mb-2">Applications Mobiles</h4>
                      <div className="space-y-3">
                        <div>
                          <h5 className="font-semibold text-gray-800">Mema</h5>
                          <p className="text-sm text-gray-600">Application de prédication religieuse (audio, vidéo, dons, favoris)</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800">Mon Faxe</h5>
                          <p className="text-sm text-gray-600">Plateforme de suivi et soutien des étudiants de l'IUT-FV</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-xl p-6">
                      <h4 className="font-bold text-green-800 mb-2">Développement Web</h4>
                      <div>
                        <h5 className="font-semibold text-gray-800">Système de gestion d'hôtel</h5>
                        <p className="text-sm text-gray-600">Échangeur Hôtel (Bandjoun) - Architecture tripartite</p>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-6">
                      <h4 className="font-bold text-purple-800 mb-2">Design Graphique</h4>
                      <p className="text-sm text-gray-600">Visuels institutionnels pour IUT-FV, KIES, Synapse Tech</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        {/* <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Prêt à Transformer Votre Avenir ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez KIES Academy et bénéficiez de l'expertise d'Edwin Tchakounte
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors">
              Inscription Immédiate
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-colors">
              Demander Plus d'Infos
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FormationPage;