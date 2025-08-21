import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Calendar, FileText, Settings, Info, ChevronDown, ChevronUp, Globe, BookOpen, Clock, Phone, MessageCircle, Award, MapPin, DollarSign, CheckCircle, UserCheck } from 'lucide-react';

function enseignant_chine() {
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
          behavior: "smooth", // ou "auto" si tu veux direct
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
              Bourse internationale pour les enseignants de langue chinoise
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
                    href="https://wa.me/237694048581" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <Phone size={18} />
                    <span>+237 694 048 581</span>
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
              <p className="text-gray-700 leading-relaxed mb-6">
                Afin de répondre à la demande internationale croissante d'enseignants de langue chinoise, de faciliter l'enseignement de la langue chinoise dans le monde entier et de soutenir le développement professionnel des enseignants de langue chinoise, le Centre pour l'enseignement des langues et la coopération (CLEC) a créé la bourse internationale pour les enseignants de langue chinoise (ci-après dénommée la bourse) pour les enseignants de langue chinoise éligibles en dehors de la Chine.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Les instituts Confucius, les salles de classe Confucius indépendantes, certains centres d'examen HSK, les établissements d'enseignement étrangers, les programmes de formation des enseignants de langue chinoise/départements chinois dans les universités étrangères, les associations professionnelles pour l'enseignement de la langue chinoise, les ambassades (consulats) de Chine à l'étranger peuvent recommander des étudiants exceptionnels et des enseignants de langue chinoise en service pour poursuivre leurs études dans l'enseignement international de la langue chinoise et les programmes connexes dans les universités chinoises.
              </p>
            </div>
          </motion.section>

          {/* Content List */}
          <div className="space-y-8">
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
                  ÉLIGIBILITÉ
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
                      <p>Être un citoyen non chinois</p>
                    </li>
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">2.</span>
                      <p>Soyez amical avec la Chine, n'ayez pas de casier judiciaire, respectez les lois et règlements de la Chine et les règles et règlements de l'Université</p>
                    </li>
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">3.</span>
                      <p>Être en bonne santé physique et mentale, avoir de bons résultats scolaires et comportementaux</p>
                    </li>
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">4.</span>
                      <p>S'intéresser à l'enseignement de la langue chinoise et au travail connexe</p>
                    </li>
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">5.</span>
                      <div>
                        <p>Être âgé de 18 à 35 ans (au 1er septembre 2025)</p>
                        <p className="text-sm text-green-700 mt-1 italic">La limite d'âge maximale pour les enseignants de chinois en poste peut être portée à 45 ans.</p>
                      </div>
                    </li>
                  </ol>
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
                  TYPES DE BOURSES ET QUALIFICATIONS
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
                  <div className="space-y-8">
                    {/* Master's Scholarship */}
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-blue-700 mb-3">Bourse d'études pour une maîtrise en enseignement international de la langue chinoise</h3>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                        <p className="text-blue-800 font-medium mb-2">Durée et début :</p>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• Programme commence en septembre</li>
                          <li>• Bourse accordée pour un maximum de deux années académiques</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <p className="text-green-800 font-medium mb-2">Qualifications requises :</p>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• Être titulaire d'un baccalauréat</li>
                          <li>• Score minimum de 210 au test HSK (niveau 5)</li>
                          <li>• Score minimum de 60 au test HSKK (niveau intermédiaire)</li>
                          <li>• Priorité aux candidats avec contrat de travail post-études</li>
                        </ul>
                      </div>
                    </div>

                    {/* One Year Program */}
                    <div className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-xl font-semibold text-green-700 mb-3">Bourse pour un programme d'études d'un an (langue et littérature chinoises)</h3>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200 mb-4">
                        <p className="text-green-800 font-medium mb-2">Durée et début :</p>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• Programme commence en septembre</li>
                          <li>• Bourse fournie pour un maximum de onze mois</li>
                          <li>• Candidats avec bourse similaire dans les 3 ans non éligibles</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="text-blue-800 font-medium mb-2">Qualifications requises :</p>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• Score minimum de 180 au test HSK (niveau 4)</li>
                          <li>• Score minimum de 60 au test HSKK (niveau intermédiaire)</li>
                        </ul>
                      </div>
                    </div>

                    {/* Semester Program */}
                    <div className="border-l-4 border-yellow-500 pl-6">
                      <h3 className="text-xl font-semibold text-yellow-700 mb-3">Bourse pour un programme d'études d'un semestre (langue et littérature chinoises)</h3>
                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-4">
                        <p className="text-yellow-800 font-medium mb-2">Durée et début :</p>
                        <ul className="text-yellow-700 text-sm space-y-1">
                          <li>• Programme commence en septembre ou mars 2026</li>
                          <li>• Bourse fournie pour un maximum de cinq mois</li>
                          <li>• Candidats avec bourse similaire dans les 3 ans non éligibles</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <p className="text-blue-800 font-medium mb-2">Qualifications requises :</p>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• Score minimum de 180 au test HSK (niveau 3)</li>
                          <li>• Score au test HSKK requis</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Coverage and Criteria */}
            <motion.div
              id="coverage-criteria"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleSection('coverage-criteria')}
                className="w-full flex items-center justify-between text-left"
              >
                <h2 className="text-2xl font-bold text-blue-800 flex items-center">
                  <DollarSign className="mr-3" size={28} />
                  COUVERTURE ET CRITÈRES DE LA BOURSE
                </h2>
                {expandedSections['coverage-criteria'] ? (
                  <ChevronUp className="text-blue-800" size={24} />
                ) : (
                  <ChevronDown className="text-blue-800" size={24} />
                )}
              </button>
              
              {expandedSections['coverage-criteria'] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="text-xl font-semibold text-green-800 mb-4">La bourse offre une couverture complète :</h3>
                    <ul className="space-y-3 text-green-700">
                      <li className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span><strong>Frais de scolarité</strong> - Prise en charge complète</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span><strong>Frais d'hébergement</strong> - Logement universitaire ou allocation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span><strong>Allocation de subsistance</strong> - Montant mensuel pour les dépenses courantes</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={16} />
                        <span><strong>Assurance médicale complète</strong> - Couverture santé intégrale</span>
                      </li>
                    </ul>
                    <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                      <p className="text-blue-800 text-sm">
                        <strong>Note :</strong> Pour plus de détails sur les montants spécifiques, contactez-nous via WhatsApp.
                      </p>
                    </div>
                  </div>
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
                  QUAND POSTULER (heure de Beijing)
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
                    <p className="text-gray-700 text-lg font-medium">
                      L'inscription est ouverte à partir d'aujourd'hui
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-800 mb-3">Dates limites pour postuler :</h4>
                      <ul className="space-y-2 text-blue-700">
                        <li className="flex items-center">
                          <Calendar className="mr-2" size={16} />
                          <strong>15 mai</strong> - Pour les programmes commençant en septembre 2025
                        </li>
                        <li className="flex items-center">
                          <Calendar className="mr-2" size={16} />
                          <strong>31 octobre</strong> - Pour le programme d'études d'un semestre commençant en mars 2026 seulement
                        </li>
                      </ul>
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
                  PROCÉDURES DE CANDIDATURE
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
                          href="https://wa.me/237694048581" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <Phone size={18} />
                          <span>+237 694 048 581</span>
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
                  DOCUMENTS RELATIFS À LA DEMANDE
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
                  <div className="space-y-8">
                    {/* Documents for all candidates */}
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-blue-700 mb-4">Pour tous les candidats :</h3>
                      <ol className="space-y-4 text-gray-700">
                        <li className="flex">
                          <span className="font-semibold text-blue-800 mr-3 mt-1">1.</span>
                          <div>
                            <p className="font-medium">Une copie scannée de la page photo du passeport</p>
                            <p className="text-sm text-gray-600 mt-1">(le passeport doit être valide avant le 1er mars 2026)</p>
                          </div>
                        </li>
                        <li className="flex">
                          <span className="font-semibold text-blue-800 mr-3 mt-1">2.</span>
                          <div>
                            <p className="font-medium">Une copie scannée des attestations de score des tests HSK et HSKK</p>
                            <p className="text-sm text-gray-600 mt-1">(pendant la validité de deux ans)</p>
                          </div>
                        </li>
                        <li className="flex">
                          <span className="font-semibold text-blue-800 mr-3 mt-1">3.</span>
                          <p className="font-medium">Une lettre de recommandation du chef des institutions de recommandation</p>
                        </li>
                      </ol>
                    </div>

                    {/* Documents for Master's candidates */}
                    <div className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-xl font-semibold text-green-700 mb-4">Pour les candidats à la bourse de maîtrise en enseignement international de la langue chinoise :</h3>
                      <ol className="space-y-4 text-gray-700">
                        <li className="flex">
                          <span className="font-semibold text-green-800 mr-3 mt-1">1.</span>
                          <div>
                            <p className="font-medium">Certificats du diplôme le plus élevé</p>
                            <p className="text-sm text-gray-600 mt-1">Ceux qui fournissent un certificat de pré-diplôme ou un certificat de statut d'étudiant lors de la demande DOIVENT fournir un diplôme de baccalauréat au plus tard lors de l'inscription.</p>
                          </div>
                        </li>
                        <li className="flex">
                          <span className="font-semibold text-green-800 mr-3 mt-1">2.</span>
                          <p className="font-medium">Relevés de notes académiques pendant les études de baccalauréat</p>
                        </li>
                        <li className="flex">
                          <span className="font-semibold text-green-800 mr-3 mt-1">3.</span>
                          <div>
                            <p className="font-medium">Déclaration personnelle, en chinois</p>
                            <p className="text-sm text-gray-600 mt-1">Doit inclure l'expérience d'étude et de travail, les raisons de la candidature et la proposition d'étude. Pas moins de 1500 mots.</p>
                          </div>
                        </li>
                        <li className="flex">
                          <span className="font-semibold text-green-800 mr-3 mt-1">4.</span>
                          <div>
                            <p className="font-medium">Deux lettres de recommandation de professeurs titulaires ou de professeurs agrégés</p>
                            <p className="text-sm text-gray-600 mt-1">En chinois ou en anglais. (La signature des professeurs, leur numéro de téléphone et leur adresse électronique doivent être apposés sur la lettre.)</p>
                          </div>
                        </li>
                        <li className="flex">
                          <span className="font-semibold text-green-800 mr-3 mt-1">5.</span>
                          <div>
                            <p className="font-medium">Articles académiques publiés ou autres réalisations académiques</p>
                            <p className="text-sm text-gray-600 mt-1">(Le cas échéant)</p>
                          </div>
                        </li>
                        <li className="flex">
                          <span className="font-semibold text-green-800 mr-3 mt-1">6.</span>
                          <div>
                            <p className="font-medium">2025 version du formulaire d'acceptation provisoire d'un étudiant international par Superviseur</p>
                            <p className="text-sm text-gray-600 mt-1">(Le cas échéant) - Les candidats doivent fournir le formulaire ci-dessus aux professeurs à remplir.</p>
                          </div>
                        </li>
                        <li className="flex">
                          <span className="font-semibold text-green-800 mr-3 mt-1">7.</span>
                          <div>
                            <p className="font-medium">Contrat de travail notarié avec les établissements d'enseignement</p>
                            <p className="text-sm text-gray-600 mt-1">(Le cas échéant)</p>
                          </div>
                        </li>
                        <li className="flex">
                          <span className="font-semibold text-green-800 mr-3 mt-1">8.</span>
                          <div>
                            <p className="font-medium">Photocopie du formulaire d'examen physique des étrangers</p>
                            <p className="text-sm text-gray-600 mt-1">L'original doit être conservé par le demandeur. Ce formulaire est imprimé uniformément par le département chinois de la santé et de la quarantaine et doit être rempli en anglais. Les examens médicaux doivent porter sur tous les éléments énumérés dans le formulaire d'examen physique des étrangers. Les dossiers incomplets ou ceux qui n'ont pas la signature du médecin traitant, le cachet officiel de l'hôpital ou une photographie scellée des demandeurs sont invalides. Compte tenu du fait que les résultats de l'examen sont valables 6 mois, les candidats sont priés d'aménager raisonnablement le moment de leur examen physique en conséquence.</p>
                          </div>
                        </li>
                        <li className="flex">
                          <span className="font-semibold text-green-800 mr-3 mt-1">9.</span>
                          <div>
                            <p className="font-medium">Certificat de non-casier judiciaire</p>
                            <p className="text-sm text-gray-600 mt-1">Valable 6 mois</p>
                          </div>
                        </li>
                        <li className="flex">
                          <span className="font-semibold text-green-800 mr-3 mt-1">10.</span>
                          <div>
                            <p className="font-medium">Engagements pour la demande de master de l'Université</p>
                            <p className="text-sm text-gray-600 mt-1">La version PDF des engagements doit être clairement et complètement remplie et signée à la main. Les demandes sans les engagements ne seront pas acceptées.</p>
                          </div>
                        </li>
                      </ol>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Special Policies */}
            <motion.div
              id="special-policies"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleSection('special-policies')}
                className="w-full flex items-center justify-between text-left"
              >
                <h2 className="text-2xl font-bold text-blue-800 flex items-center">
                  <Users className="mr-3" size={28} />
                  POLITIQUES CONCERNANT LES ENSEIGNANTS DE LANGUE CHINOISE EN FORMATION CONTINUE ET LES GAGNANTS DU CHINOIS BRIDGE
                </h2>
                {expandedSections['special-policies'] ? (
                  <ChevronUp className="text-blue-800" size={24} />
                ) : (
                  <ChevronDown className="text-blue-800" size={24} />
                )}
              </button>
              
              {expandedSections['special-policies'] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6"
                >
                  <div className="space-y-6">
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h3 className="text-xl font-semibold text-blue-700 mb-3">Enseignants de chinois en poste</h3>
                      <p className="text-gray-700">
                        Les enseignants de chinois en poste doivent fournir une preuve d'emploi et une lettre de recommandation de l'employeur.
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-xl font-semibold text-green-700 mb-3">Vainqueurs du bridge chinois</h3>
                      <p className="text-gray-700">
                        Les candidats qui ont reçu le certificat de bourse internationale pour les enseignants de langue chinoise lors des compétitions de passerelle chinoise doivent soumettre leurs documents de candidature ainsi que leurs certificats de bourse sur le site Web des bourses internationales pour les enseignants de langue chinoise.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Other Information */}
            <motion.div
              id="other-information"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleSection('other-information')}
                className="w-full flex items-center justify-between text-left"
              >
                <h2 className="text-2xl font-bold text-blue-800 flex items-center">
                  <Info className="mr-3" size={28} />
                  AUTRES INFORMATIONS
                </h2>
                {expandedSections['other-information'] ? (
                  <ChevronUp className="text-blue-800" size={24} />
                ) : (
                  <ChevronDown className="text-blue-800" size={24} />
                )}
              </button>
              
              {expandedSections['other-information'] && (
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
                      <p>Les étudiants sont soumis à l'évaluation annuelle conformément aux procédures d'évaluation annuelle de la bourse internationale des enseignants de langue chinoise.</p>
                    </li>
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">2.</span>
                      <p>Les étudiants qui ne réussissent pas l'examen médical de pré-inscription, se retirent de l'école avant d'avoir terminé le programme, ne s'inscrivent pas à l'université sans autorisation préalable ou suspendent leurs études seront disqualifiés pour la bourse.</p>
                    </li>
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">3.</span>
                      <div>
                        <p>Pour l'inscription et d'autres questions, veuillez contacter :</p>
                        <div className="mt-2">
                          <a 
                            href="https://wa.me/237694048581" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700 transition-colors"
                          >
                            <Phone size={14} />
                            <span>+237 694 048 581</span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="flex">
                      <span className="font-semibold text-blue-800 mr-3 mt-1">4.</span>
                      <p>Les candidats admis au programme international d'enseignement de la langue chinoise sont tenus de fournir les copies originales des certificats de diplôme académique ; Ceux qui ne fournissent pas les copies originales seront disqualifiés pour l'inscription.</p>
                    </li>
                  </ol>
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
              <p className="text-gray-600 text-lg font-semibold">
                Centre pour l'enseignement des langues et la coopération (CLEC)
              </p>
              <p className="text-gray-500">
                Bourse internationale pour les enseignants de langue chinoise
              </p>
              <div className="flex items-center justify-center space-x-2 mt-4">
                <MessageCircle className="text-green-600" size={20} />
                <a 
                  href="https://wa.me/237694048581" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 font-medium"
                >
                  +237 694 048 581
                </a>
              </div>
            </div>
          </motion.footer>
        </motion.div>
      </div>
    </div>
  );
}

export default enseignant_chine;