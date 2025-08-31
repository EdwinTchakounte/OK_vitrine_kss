import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Calendar, FileText, Settings, Info, ChevronDown, ChevronUp, Globe, BookOpen, Clock, Phone, MessageCircle, Award, MapPin, DollarSign, CheckCircle, UserCheck, Building2, Heart, Shield } from 'lucide-react';

function ScholarshipsCities() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <header className="mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl lg:text-4xl font-bold text-blue-800 mb-6 leading-tight"
            >
              Bourse gouvernementale pour les étudiants internationaux des villes jumelées de Chengdu
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-16 h-1 bg-blue-800 mb-8"
            />
          </header>

          {/* Contact WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <div className="flex items-center justify-center space-x-4">
                <MessageCircle className="text-green-600" size={24} />
                <div className="text-center">
                  <p className="text-green-800 font-semibold mb-2">Contact et Information</p>
                  <a 
                    href="https://wa.me/237693461841" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Phone size={18} />
                    <span>+237 693 461 841</span>
                  </a>
                  <p className="text-green-700 text-sm mt-2">WhatsApp uniquement</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-12"
          >
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <Building2 className="text-blue-600 mr-3" size={32} />
                <h3 className="text-xl font-semibold text-blue-800">Introduction</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                En mars 2014, le gouvernement populaire municipal de Chengdu a officiellement créé la « Bourse gouvernementale pour les étudiants internationaux des villes jumelées internationales de la ville de Chengdu » (ci-après dénommée la « Bourse ») afin de favoriser les échanges et la coopération entre la ville de Chengdu et ses villes jumelées internationales et de renforcer la compréhension et l'amitié mutuelles.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Cette bourse est accordée par le gouvernement populaire municipal de Chengdu pour soutenir les études et le logement des étudiants internationaux des villes jumelées internationales qui suivent un cursus universitaire ou non universitaire de plus de trois mois à Chengdu.
              </p>
              <p className="text-gray-700 leading-relaxed">
                En tant qu'université éligible à l'octroi de bourses, l'UESTC accueille les étudiants internationaux.
              </p>
            </div>
          </motion.section>

          {/* Content List */}
          <div className="space-y-8">
            {/* Sister Cities */}
            <motion.div
              id="sister-cities"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleSection('sister-cities')}
                className="w-full flex items-center justify-between text-left"
              >
                <h2 className="text-2xl font-bold text-blue-800 flex items-center">
                  <Globe className="mr-3" size={28} />
                  VILLES JUMELÉES INTERNATIONALES
                </h2>
                {expandedSections['sister-cities'] ? (
                  <ChevronUp className="text-blue-800" size={24} />
                ) : (
                  <ChevronDown className="text-blue-800" size={24} />
                )}
              </button>
              
              {expandedSections['sister-cities'] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Plus de 58 villes internationales de 58 pays font partie de la liste des villes jumelées, notamment :
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="border-l-4 border-blue-500 pl-4">
                        <h4 className="font-semibold text-blue-700 mb-2">🇧🇪 Belgique</h4>
                        <p className="text-gray-600 text-sm">Mechelen, Flemish Brabant</p>
                      </div>
                      
                      <div className="border-l-4 border-red-500 pl-4">
                        <h4 className="font-semibold text-red-700 mb-2">🇨🇦 Canada</h4>
                        <p className="text-gray-600 text-sm">Gatineau, Edmonton, Winnipeg</p>
                      </div>
                      
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold text-green-700 mb-2">🇮🇹 Italie</h4>
                        <p className="text-gray-600 text-sm">Milan, Bologna, Palermo</p>
                      </div>
                      
                      <div className="border-l-4 border-yellow-500 pl-4">
                        <h4 className="font-semibold text-yellow-700 mb-2">🇪🇸 Espagne</h4>
                        <p className="text-gray-600 text-sm">Las Palmas, Valencia</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-500 pl-4">
                        <h4 className="font-semibold text-purple-700 mb-2">🇺🇸 États-Unis</h4>
                        <p className="text-gray-600 text-sm">Nashville, Houston, Atlanta, Louisville, San Francisco, Phoenix, Honolulu, Austin</p>
                      </div>
                      
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold text-indigo-700 mb-2">🌍 Autres pays</h4>
                        <p className="text-gray-600 text-sm">Russie, Grèce, Turquie, Maroc, Lituanie, Angola, Pays-Bas...</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-blue-800 text-sm">
                      <strong>Note :</strong> Pour consulter la liste complète des villes jumelées et coopératives, contactez-nous via WhatsApp.
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Scholarship Types */}
            <motion.div
              id="scholarship-types"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleSection('scholarship-types')}
                className="w-full flex items-center justify-between text-left"
              >
                <h2 className="text-2xl font-bold text-blue-800 flex items-center">
                  <Award className="mr-3" size={28} />
                  TYPES DE BOURSES
                </h2>
                {expandedSections['scholarship-types'] ? (
                  <ChevronUp className="text-blue-800" size={24} />
                ) : (
                  <ChevronDown className="text-blue-800" size={24} />
                )}
              </button>
              
              {expandedSections['scholarship-types'] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  <div className="space-y-6">
                    {/* Bachelor's Scholarship */}
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-blue-700 mb-3">Bourses pour étudiants de licence</h3>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-3">Couverture :</h4>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                            <span>Frais de scolarité</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                            <span>Hébergement sur le campus</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-blue-600 mr-2 mt-1 flex-shrink-0" size={16} />
                            <span>Assurance maladie</span>
                          </li>
                        </ul>
                        <p className="text-blue-800 font-medium mt-3">Durée maximale : 4 ans</p>
                      </div>
                    </div>

                    {/* Master's Scholarship */}
                    <div className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-xl font-semibold text-green-700 mb-3">Bourses pour étudiants de master</h3>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-3">Couverture :</h4>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                            <span>Frais de scolarité</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                            <span>Hébergement sur le campus</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                            <span>Assurance maladie en Chine</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                            <span>Indemnité de séjour (identique à la bourse universitaire complète de l'UESTC)</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Eligibility */}
            <motion.div
              id="eligibility"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleSection('eligibility')}
                className="w-full flex items-center justify-between text-left"
              >
                <h2 className="text-2xl font-bold text-blue-800 flex items-center">
                  <UserCheck className="mr-3" size={28} />
                  CANDIDATS ADMISSIBLES
                </h2>
                {expandedSections['eligibility'] ? (
                  <ChevronUp className="text-blue-800" size={24} />
                ) : (
                  <ChevronDown className="text-blue-800" size={24} />
                )}
              </button>
              
              {expandedSections['eligibility'] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  <ol className="space-y-4 text-gray-700">
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">1.</span>
                      <div>
                        <p className="font-medium">Citoyens des villes jumelées</p>
                        <p className="text-sm text-gray-600 mt-1">Nés, étudiants, travailleurs ou résidents de la ville de Chengdu et titulaires d'une lettre de confirmation délivrée par les services gouvernementaux compétents, de nationalité étrangère, être amis de la Chine et en bonne santé.</p>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">2.</span>
                      <p>Respecter les lois et règlements du gouvernement chinois, avoir de bons résultats scolaires et satisfaire aux conditions d'admission de l'UESTC.</p>
                    </li>
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">3.</span>
                      <p>Avoir une attitude positive envers leurs études, sans enfreindre le règlement et la discipline de l'établissement.</p>
                    </li>
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">4.</span>
                      <p>Les résultats scolaires et les activités extrascolaires des candidats seront pris en compte pour la sélection des bourses.</p>
                    </li>
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">5.</span>
                      <div>
                        <p className="font-medium text-red-700">Restriction importante</p>
                        <p className="text-sm text-red-600 mt-1">Les étudiants internationaux ayant déjà bénéficié d'une autre bourse ne sont pas autorisés à postuler.</p>
                      </div>
                    </li>
                  </ol>
                </motion.div>
              )}
            </motion.div>

            {/* Application Timeline */}
            <motion.div
              id="application-timeline"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleSection('application-timeline')}
                className="w-full flex items-center justify-between text-left"
              >
                <h2 className="text-2xl font-bold text-blue-800 flex items-center">
                  <Calendar className="mr-3" size={28} />
                  DATE LIMITE DE CANDIDATURE
                </h2>
                {expandedSections['application-timeline'] ? (
                  <ChevronUp className="text-blue-800" size={24} />
                ) : (
                  <ChevronDown className="text-blue-800" size={24} />
                )}
              </button>
              
              {expandedSections['application-timeline'] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-4">Périodes de candidature :</h4>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <div>
                            <p className="font-medium text-blue-700">Candidats en licence</p>
                            <p className="text-blue-600 text-sm">Du 1er décembre au 30 juin</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                          <div>
                            <p className="font-medium text-green-700">Candidats en master</p>
                            <p className="text-green-600 text-sm">Du 1er décembre au 1er mars</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Application Procedures */}
            <motion.div
              id="application-procedures"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleSection('application-procedures')}
                className="w-full flex items-center justify-between text-left"
              >
                <h2 className="text-2xl font-bold text-blue-800 flex items-center">
                  <Settings className="mr-3" size={28} />
                  PROCÉDURE DE CANDIDATURE
                </h2>
                {expandedSections['application-procedures'] ? (
                  <ChevronUp className="text-blue-800" size={24} />
                ) : (
                  <ChevronDown className="text-blue-800" size={24} />
                )}
              </button>
              
              {expandedSections['application-procedures'] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-4">
                      <MessageCircle className="text-green-600" size={24} />
                      <div>
                        <p className="text-green-800 font-semibold mb-2">Pour postuler, veuillez nous contacter via :</p>
                        <a 
                          href="https://wa.me/237693461841" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <Phone size={18} />
                          <span>+237 693 461 841</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Application Documents */}
            <motion.div
              id="application-documents"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleSection('application-documents')}
                className="w-full flex items-center justify-between text-left"
              >
                <h2 className="text-2xl font-bold text-blue-800 flex items-center">
                  <FileText className="mr-3" size={28} />
                  DOCUMENTS DE CANDIDATURE
                </h2>
                {expandedSections['application-documents'] ? (
                  <ChevronUp className="text-blue-800" size={24} />
                ) : (
                  <ChevronDown className="text-blue-800" size={24} />
                )}
              </button>
              
              {expandedSections['application-documents'] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  <ol className="space-y-6 text-gray-700">
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">1.</span>
                      <div>
                        <p className="font-medium">Formulaire de demande de bourse du gouvernement de Chengdu</p>
                        <p className="text-sm text-gray-600 mt-1">Deux exemplaires, avec photos de 2,5 cm, rédigés en chinois ou en anglais</p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">2.</span>
                      <div>
                        <p className="font-medium">Deux lettres de recommandation</p>
                        <p className="text-sm text-gray-600 mt-1">Rédigées en chinois ou en anglais, uniquement pour les étudiants de troisième cycle. Les candidats doivent soumettre deux lettres de recommandation signées par un professeur ou un professeur associé.</p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">3.</span>
                      <p className="font-medium">Lettre d'admission ou avis d'admission de l'UESTC</p>
                    </li>
                    
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">4.</span>
                      <p className="font-medium">Relevés de notes des études supérieures (photocopie notariée)</p>
                    </li>
                    
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">5.</span>
                      <div>
                        <p className="font-medium">Diplôme d'études supérieures (photocopie notariée)</p>
                        <p className="text-sm text-gray-600 mt-1">Les candidats au diplôme doivent fournir un document officiel délivré par leur établissement actuel prouvant leur statut d'étudiant ou la date prévue d'obtention du diplôme.</p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">6.</span>
                      <div>
                        <p className="font-medium">Formulaire d'examen médical pour étrangers (photocopie)</p>
                        <div className="bg-yellow-50 p-3 rounded border border-yellow-200 mt-2">
                          <p className="text-yellow-800 text-sm">
                            <strong>Important :</strong> L'examen médical doit couvrir tous les points énumérés dans le formulaire d'examen médical pour étrangers. Les formulaires incomplets ou dépourvus de la signature du médecin traitant, du cachet officiel de l'hôpital ou d'une photo cachetée du candidat seront considérés comme non valides. Veuillez planifier soigneusement votre rendez-vous d'examen médical, car les résultats ne sont valables que 6 mois.
                          </p>
                        </div>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">7.</span>
                      <div>
                        <p className="font-medium">Plan d'études à Chengdu</p>
                        <p className="text-sm text-gray-600 mt-1">Rédigé en chinois ou en anglais. Ce document doit comporter au moins 800 mots.</p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">8.</span>
                      <div>
                        <p className="font-medium">Articles ou communications rédigés ou publiés</p>
                        <p className="text-sm text-gray-600 mt-1">Réservé aux étudiants de troisième cycle</p>
                      </div>
                    </li>
                    
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">9.</span>
                      <div>
                        <p className="font-medium">Certificat de résidence de votre ville</p>
                        <p className="text-sm text-gray-600 mt-1">Lettre de confirmation de la ville jumelle (photocopie)</p>
                      </div>
                    </li>
                  </ol>
                </motion.div>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              id="contact-info"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleSection('contact-info')}
                className="w-full flex items-center justify-between text-left"
              >
                <h2 className="text-2xl font-bold text-blue-800 flex items-center">
                  <Phone className="mr-3" size={28} />
                  CONTACTS
                </h2>
                {expandedSections['contact-info'] ? (
                  <ChevronUp className="text-blue-800" size={24} />
                ) : (
                  <ChevronDown className="text-blue-800" size={24} />
                )}
              </button>
              
              {expandedSections['contact-info'] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <div className="flex items-center justify-center space-x-4">
                      <MessageCircle className="text-green-600" size={24} />
                      <div className="text-center">
                        <p className="text-green-800 font-semibold mb-2">Pour toute question ou candidature</p>
                        <a 
                          href="https://wa.me/237693461841" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <Phone size={18} />
                          <span>+237 693 461 841</span>
                        </a>
                        <p className="text-green-700 text-sm mt-2">WhatsApp uniquement</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center pt-12 pb-8 border-t border-gray-200 mt-12"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Building2 className="text-blue-600" size={24} />
                <Heart className="text-red-500" size={20} />
                <Globe className="text-green-600" size={24} />
              </div>
              <p className="text-gray-600 text-lg font-semibold">
                Gouvernement populaire municipal de Chengdu
              </p>
              <p className="text-gray-500">
                Bourse gouvernementale pour les étudiants internationaux des villes jumelées
              </p>
              <p className="text-gray-500 text-sm">
                Université des sciences et technologies électroniques de Chine (UESTC)
              </p>
              <div className="flex items-center justify-center space-x-2 mt-4">
                <MessageCircle className="text-green-600" size={20} />
                <a 
                  href="https://wa.me/237693461841" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  +237 693 461 841
                </a>
              </div>
            </div>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
}

export default ScholarshipsCities;