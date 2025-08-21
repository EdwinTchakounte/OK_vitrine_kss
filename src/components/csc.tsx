import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Calendar, FileText, Settings, Info, ChevronDown, ChevronUp, Globe, BookOpen, Clock, Phone, MessageCircle, Award, MapPin, DollarSign } from 'lucide-react';

function CSC() {
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
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 lg:px-20 py-20">
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
                Bourse du gouvernement chinois (CSC)
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
                  Afin de promouvoir la compréhension mutuelle, la coopération et les échanges dans les domaines de la politique, de l'économie, de la culture, de l'éducation et du commerce entre la Chine et d'autres pays, le gouvernement chinois a mis en place une série de programmes de bourses pour parrainer des étudiants, des enseignants et des universitaires internationaux afin qu'ils étudient et mènent des recherches dans les universités chinoises.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Le Conseil chinois des bourses d'études (ci-après dénommé CSC), mandaté par le ministère de l'Éducation de la République populaire de Chine (ci-après dénommé MEO), est responsable de l'inscription et de l'administration des programmes de bourses du gouvernement chinois. 279 universités chinoises désignées offrent une grande variété de programmes académiques en sciences, ingénierie, agriculture, médecine, droit, économie, gestion, éducation, arts libéraux, philosophie, histoire et beaux-arts pour les boursiers de tous niveaux.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  La bourse du gouvernement chinois comprend les 7 programmes suivants :
                </p>
                
                {/* Tableau des 7 programmes */}
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-red-50">
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-800">Programme</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-800">Description</th>
                        <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-800">Candidats</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">Programme bilatéral</td>
                        <td className="border border-gray-300 px-4 py-3">Basé sur les accords éducatifs entre gouvernements</td>
                        <td className="border border-gray-300 px-4 py-3">Étudiants recommandés par les autorités nationales</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">Programme des universités chinoises</td>
                        <td className="border border-gray-300 px-4 py-3">Bourses pour étudier dans des universités spécifiques</td>
                        <td className="border border-gray-300 px-4 py-3">Candidature directe aux universités</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">Programme de la Route de la Soie</td>
                        <td className="border border-gray-300 px-4 py-3">Initiative Belt and Road pour les pays participants</td>
                        <td className="border border-gray-300 px-4 py-3">Pays de la Belt and Road Initiative</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">Programme ASEAN</td>
                        <td className="border border-gray-300 px-4 py-3">Spécifique aux pays membres de l'ASEAN</td>
                        <td className="border border-gray-300 px-4 py-3">Citoyens des pays ASEAN</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">Programme du Pacifique</td>
                        <td className="border border-gray-300 px-4 py-3">Pour les îles du Pacifique</td>
                        <td className="border border-gray-300 px-4 py-3">Pays insulaires du Pacifique</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="border border-gray-300 px-4 py-3 font-medium">Programme WMO</td>
                        <td className="border border-gray-300 px-4 py-3">Organisation météorologique mondiale</td>
                        <td className="border border-gray-300 px-4 py-3">Professionnels en météorologie</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-3 font-medium">Programme UNESCO</td>
                        <td className="border border-gray-300 px-4 py-3">Coopération avec l'UNESCO</td>
                        <td className="border border-gray-300 px-4 py-3">Candidats recommandés par l'UNESCO</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.section>

            {/* Content List */}
            <div className="space-y-8">
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
                    MOMENT DE L'APPLICATION
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
                        Généralement de janvier à avril chaque année
                      </p>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-3">Calendrier détaillé :</h4>
                        <ul className="space-y-2 text-blue-700">
                          <li>• <strong>Janvier :</strong> Ouverture des candidatures en ligne</li>
                          <li>• <strong>Février-Mars :</strong> Période principale de soumission</li>
                          <li>• <strong>Avril :</strong> Date limite de candidature</li>
                          <li>• <strong>Mai-Juin :</strong> Évaluation des dossiers</li>
                          <li>• <strong>Juillet :</strong> Annonce des résultats</li>
                          <li>• <strong>Septembre :</strong> Début des études</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Host Institutions */}
              <motion.div
                id="host-institutions"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
              >
                <button
                  onClick={() => toggleSection('host-institutions')}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h2 className="text-2xl font-bold text-blue-800 flex items-center">
                    <GraduationCap className="mr-3" size={28} />
                    INSTITUTIONS D'ACCUEIL
                  </h2>
                  {expandedSections['host-institutions'] ? (
                    <ChevronUp className="text-blue-800" size={24} />
                  ) : (
                    <ChevronDown className="text-blue-800" size={24} />
                  )}
                </button>
                
                {expandedSections['host-institutions'] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6"
                  >
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Au total, 279 universités chinoises sont approuvées par le ministère de l'Éducation pour accepter les étudiants boursiers du gouvernement chinois.
                       <p className='font-bold'>en savoir plus 👉<a href='https://forms.gle/8yDCw8iLs8a5hRYp8'><span className='text-red-700 font-bold'>cliquez ici</span> </a></p>
                    </p>
                    {/* <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-2">Universités de rang A (Double First-Class)</h4>
                        <ul className="text-green-700 text-sm space-y-1">
                          <li>• Université de Pékin</li>
                          <li>• Université Tsinghua</li>
                          <li>• Université Fudan</li>
                          <li>• Université Jiao Tong de Shanghai</li>
                          <li>• Université de Zhejiang</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-2">Universités spécialisées</h4>
                        <ul className="text-blue-700 text-sm space-y-1">
                          <li>• Université de médecine de Pékin</li>
                          <li>• Université d'agriculture de Chine</li>
                          <li>• Université des langues étrangères de Pékin</li>
                          <li>• Université centrale des beaux-arts</li>
                          <li>• Conservatoire central de musique</li>
                        </ul>
                      </div>
                    </div> */}
                  </motion.div>
                )}
              </motion.div>

              {/* Agency Number */}
              {/* <motion.div
                id="agency-number"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
              > */}
                {/* <button
                  onClick={() => toggleSection('agency-number')}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h2 className="text-2xl font-bold text-blue-800 flex items-center">
                    <Settings className="mr-3" size={28} />
                    NUMÉRO D'AGENCE
                  </h2>
                  {expandedSections['agency-number'] ? (
                    <ChevronUp className="text-blue-800" size={24} />
                  ) : (
                    <ChevronDown className="text-blue-800" size={24} />
                  )}
                </button> */}
                
                {/* {expandedSections['agency-number'] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6"
                  >
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Chaque autorité de répartition a son numéro de code qui est appelé numéro d'agence. Il est nécessaire lors des candidatures en ligne.
                    </p>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-green-800 mb-3">Exemples de numéros d'agence :</h4>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-green-700"><strong>Cameroun :</strong> 237</p>
                          <p className="text-green-700"><strong>Sénégal :</strong> 221</p>
                          <p className="text-green-700"><strong>Côte d'Ivoire :</strong> 225</p>
                        </div>
                        <div>
                          <p className="text-green-700"><strong>Gabon :</strong> 241</p>
                          <p className="text-green-700"><strong>Mali :</strong> 223</p>
                          <p className="text-green-700"><strong>Burkina Faso :</strong> 226</p>
                        </div>
                      </div>
                      <p className="text-green-700 text-xs mt-2 italic">
                        Contactez-nous pour connaître le numéro d'agence de votre pays.
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div> */}

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
                    DOCUMENTS DE CANDIDATURE (EN DOUBLE EXEMPLAIRE)
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
                          <p className="font-medium">Formulaire de demande de bourse du gouvernement chinois (écrit en chinois ou en anglais)</p>
                          <p className="text-sm text-gray-600 mt-1">Disponible sur le site officiel du CSC</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="font-semibold text-blue-800 mr-3 mt-1">2.</span>
                        <div>
                          <p className="font-medium">Diplôme le plus élevé notarié (photocopie)</p>
                          <p className="text-sm text-gray-600 mt-1">Les futurs récipiendaires d'un diplôme doivent soumettre un document officiel délivré par votre école actuelle pour prouver votre statut d'étudiant actuel ou la date prévue d'obtention de votre diplôme. Les documents rédigés dans des langues autres que le chinois ou l'anglais doivent être accompagnés de traductions notariées en chinois ou en anglais.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="font-semibold text-blue-800 mr-3 mt-1">3.</span>
                        <div>
                          <p className="font-medium">Relevés de notes académiques (rédigés en chinois ou en anglais)</p>
                          <p className="text-sm text-gray-600 mt-1">Les relevés de notes dans des langues autres que le chinois ou l'anglais doivent être joints avec des traductions notariées en chinois ou en anglais.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="font-semibold text-blue-800 mr-3 mt-1">4.</span>
                        <div>
                          <p className="font-medium">Un plan d'étude ou une proposition de recherche (rédigé en chinois ou en anglais)</p>
                          <p className="text-sm text-gray-600 mt-1">Il doit s'agir d'un minimum de 200 mots pour les étudiants de premier cycle, de 500 mots pour les étudiants non diplômés et de 800 mots pour les étudiants des cycles supérieurs.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="font-semibold text-blue-800 mr-3 mt-1">5.</span>
                        <div>
                          <p className="font-medium">Deux lettres de recommandation (rédigées en chinois ou en anglais)</p>
                          <p className="text-sm text-gray-600 mt-1">Les candidats aux programmes d'études supérieures ou aux programmes de chercheurs seniors doivent soumettre deux lettres de recommandation signées par un professeur ou un professeur agrégé.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="font-semibold text-blue-800 mr-3 mt-1">6.</span>
                        <div>
                          <p className="font-medium">Un CD de vos propres œuvres (requis uniquement pour les étudiants en arts)</p>
                          <p className="text-sm text-gray-600 mt-1">Les candidats aux études musicales sont priés de soumettre un CD de leurs propres œuvres musicales. Les candidats aux programmes de beaux-arts doivent soumettre un CD de leurs propres œuvres qui comprend deux croquis, deux peintures en couleur et deux autres œuvres.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="font-semibold text-blue-800 mr-3 mt-1">7.</span>
                        <div>
                          <p className="font-medium">Documents valides de vos tuteurs légaux en Chine (requis uniquement pour les candidats de moins de 18 ans)</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="font-semibold text-blue-800 mr-3 mt-1">8.</span>
                        <div>
                          <p className="font-medium">Le formulaire d'examen physique des étrangers (photocopie)</p>
                          <p className="text-sm text-gray-600 mt-1">Écrit en anglais, requis uniquement pour les candidats prévoyant de rester en Chine pendant plus de 6 mois. Les examens physiques doivent porter sur tous les éléments énumérés dans le formulaire d'examen physique pour étrangers. Les formulaires incomplets ou sans la signature du médecin traitant, ou le cachet officiel de l'hôpital, ou une photographie scellée du demandeur sont considérés comme non valides. Veuillez planifier soigneusement votre calendrier d'examens physiques, car le résultat n'est valide que pour 6 mois.</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="font-semibold text-blue-800 mr-3 mt-1">9.</span>
                        <div>
                          <p className="font-medium">La copie de la lettre de pré-admission de l'université chinoise désignée (si disponible)</p>
                        </div>
                      </li>
                      <li className="flex">
                        <span className="font-semibold text-blue-800 mr-3 mt-1">10.</span>
                        <div>
                          <p className="font-medium">La copie du certificat HSK (le cas échéant)</p>
                        </div>
                      </li>
                    </ol>
                    
                  </motion.div>
                )}
              </motion.div>

              {/* Duration */}
              <motion.div
                id="duration"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
              >
                <button
                  onClick={() => toggleSection('duration')}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h2 className="text-2xl font-bold text-blue-800 flex items-center">
                    <Clock className="mr-3" size={28} />
                    DURÉE
                  </h2>
                  {expandedSections.duration ? (
                    <ChevronUp className="text-blue-800" size={24} />
                  ) : (
                    <ChevronDown className="text-blue-800" size={24} />
                  )}
                </button>
                
                {expandedSections.duration && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6"
                  >
                    <p className="text-gray-700 leading-relaxed mb-4">
                      La bourse du gouvernement chinois couvre à la fois les études majeures et les études préparatoires en langue chinoise. Le tableau ci-dessous illustre la durée de chaque catégorie.
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                          <tr className="bg-blue-50">
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-800">Niveau d'études</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-800">Durée des études principales</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-800">Préparation linguistique</th>
                            <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-800">Durée totale</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-medium">Premier cycle</td>
                            <td className="border border-gray-300 px-4 py-3">4 ans</td>
                            <td className="border border-gray-300 px-4 py-3">1 an (obligatoire)</td>
                            <td className="border border-gray-300 px-4 py-3">5 ans maximum</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 font-medium">Master</td>
                            <td className="border border-gray-300 px-4 py-3">2-3 ans</td>
                            <td className="border border-gray-300 px-4 py-3">1-2 ans (si nécessaire)</td>
                            <td className="border border-gray-300 px-4 py-3">5 ans maximum</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-medium">Doctorat</td>
                            <td className="border border-gray-300 px-4 py-3">3-4 ans</td>
                            <td className="border border-gray-300 px-4 py-3">1-2 ans (si nécessaire)</td>
                            <td className="border border-gray-300 px-4 py-3">6 ans maximum</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 px-4 py-3 font-medium">Chercheur général</td>
                            <td className="border border-gray-300 px-4 py-3">1 an</td>
                            <td className="border border-gray-300 px-4 py-3">1 an (si nécessaire)</td>
                            <td className="border border-gray-300 px-4 py-3">2 ans maximum</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 font-medium">Chercheur senior</td>
                            <td className="border border-gray-300 px-4 py-3">1 an</td>
                            <td className="border border-gray-300 px-4 py-3">1 an (si nécessaire)</td>
                            <td className="border border-gray-300 px-4 py-3">2 ans maximum</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Language of Instruction */}
              <motion.div
                id="language-instruction"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
              >
                <button
                  onClick={() => toggleSection('language-instruction')}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h2 className="text-2xl font-bold text-blue-800 flex items-center">
                    <Globe className="mr-3" size={28} />
                    LANGUE D'INSTRUCTION
                  </h2>
                  {expandedSections['language-instruction'] ? (
                    <ChevronUp className="text-blue-800" size={24} />
                  ) : (
                    <ChevronDown className="text-blue-800" size={24} />
                  )}
                </button>
                
                {expandedSections['language-instruction'] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6"
                  >
                    <div className="space-y-8">
                      <div className="border-l-4 border-blue-500 pl-6">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">1. Étudiants de premier cycle</h3>
                        <p className="text-gray-700 mb-3">
                          Les lauréats d'une bourse de premier cycle doivent s'inscrire à des cours crédités enseignés en chinois. Ils sont tenus de suivre des cours préparatoires de langue chinoise d'un an dans l'une des neuf universités désignées et de réussir le test requis avant de passer à leurs études principales.
                        </p>
                        <p className="text-gray-700 mb-3 text-sm italic">
                          Confiées par le ministère de l'Éducation.
                        </p>
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <h4 className="font-semibold text-green-800 mb-3">Calendrier détaillé :</h4>
                          <ul className="space-y-2 text-green-700">
                          <ul className="text-green-700 text-sm space-y-1 ml-4">
                            <li>→ terminent leurs études secondaires en chinois.</li>
                            <li>Ou</li>
                            <li>→ avoir un certificat HSK valide qui répond aux exigences de l'université d'accueil.</li>
                          </ul>
                          <p className="text-green-700 text-sm mt-2">
                            Les documents officiels des écoles secondaires ou une photocopie du certificat HSK valide doivent être soumis pour la demande de dispense de cours préparatoire. Veuillez NOTER que les résultats HSK ne sont valables que 2 ans.
                          </p>
                          </ul>
                        </div>
                      </div>

                      <div className="border-l-4 border-orange-500 pl-6">
                        <h3 className="text-xl font-semibold text-green-700 mb-3">2. Étudiants des cycles supérieurs et étudiants non diplômants</h3>
                        <p className="text-gray-700 mb-3">
                          Les étudiants boursiers des cycles supérieurs et non diplômants peuvent s'inscrire à un programme enseigné en chinois ou à un programme enseigné en anglais, le cas échéant.
                        </p>
                        <p className="text-gray-700 mb-4 text-sm italic">
                          La recherche de programmes peut vous aider à trouver le programme et l'université qui vous intéressent.
                        </p>
                        <div className="space-y-4">
                          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <p className="text-green-800 font-medium mb-2">→ Programmes enseignés en chinois :</p>
                            <p className="text-green-700 text-sm">
                              Les boursiers de programmes enseignés en chinois qui ne maîtrisent pas suffisamment le chinois doivent suivre des cours de chinois pendant un à deux ans pour satisfaire aux exigences linguistiques de leur université d'accueil avant de poursuivre leurs études principales. Le fait de ne pas atteindre les compétences linguistiques requises entraînera la résiliation automatique de la bourse. Les cours de langue chinoise dureront un an pour les majors en sciences, ingénierie, agriculture, médecine occidentale, économie, gestion, droit et beaux-arts, et ne dépasseront pas deux ans pour les majors en arts libéraux, histoire, philosophie et médecine chinoise.
                            </p>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                            <p className="text-blue-800 font-medium mb-2">→ Programmes enseignés en anglais :</p>
                            <p className="text-blue-700 text-sm">
                              Les boursiers de programmes enseignés en anglais ou ceux qui ont une maîtrise adéquate de la langue chinoise n'ont pas besoin de suivre des cours de chinois.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Coverage and Standards */}
              <motion.div
                id="coverage-standards"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-8 shadow-sm border border-gray-200"
              >
                <button
                  onClick={() => toggleSection('coverage-standards')}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h2 className="text-2xl font-bold text-blue-800 flex items-center">
                    <DollarSign className="mr-3" size={28} />
                    COUVERTURE ET NORME
                  </h2>
                  {expandedSections['coverage-standards'] ? (
                    <ChevronUp className="text-blue-800" size={24} />
                  ) : (
                    <ChevronDown className="text-blue-800" size={24} />
                  )}
                </button>
                
                {expandedSections['coverage-standards'] && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6"
                  >
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-semibold text-blue-700 mb-4">Bourse d'études Standard</h3>
                        <div className="overflow-x-auto mb-6">
                          <table className="w-full border-collapse border border-gray-300 text-sm">
                            <thead>
                              <tr className="bg-red-50">
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-800">Catégorie</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-800">Frais de scolarité (CNY/an)</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-800">Allocation mensuelle (CNY)</th>
                                <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-blue-800">Logement</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3 font-medium">Premier cycle</td>
                                <td className="border border-gray-300 px-4 py-3">Gratuit</td>
                                <td className="border border-gray-300 px-4 py-3">2,500</td>
                                <td className="border border-gray-300 px-4 py-3">Gratuit ou 700 CNY/mois</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3 font-medium">Master</td>
                                <td className="border border-gray-300 px-4 py-3">Gratuit</td>
                                <td className="border border-gray-300 px-4 py-3">3,000</td>
                                <td className="border border-gray-300 px-4 py-3">Gratuit ou 700 CNY/mois</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3 font-medium">Doctorat</td>
                                <td className="border border-gray-300 px-4 py-3">Gratuit</td>
                                <td className="border border-gray-300 px-4 py-3">3,500</td>
                                <td className="border border-gray-300 px-4 py-3">Gratuit ou 1,000 CNY/mois</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border border-gray-300 px-4 py-3 font-medium">Chercheur général</td>
                                <td className="border border-gray-300 px-4 py-3">Gratuit</td>
                                <td className="border border-gray-300 px-4 py-3">3,000</td>
                                <td className="border border-gray-300 px-4 py-3">Gratuit ou 700 CNY/mois</td>
                              </tr>
                              <tr>
                                <td className="border border-gray-300 px-4 py-3 font-medium">Chercheur senior</td>
                                <td className="border border-gray-300 px-4 py-3">Gratuit</td>
                                <td className="border border-gray-300 px-4 py-3">3,500</td>
                                <td className="border border-gray-300 px-4 py-3">Gratuit ou 1,000 CNY/mois</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <p className="text-gray-700 text-sm">
                            <strong>Remarque :</strong> Le domaine d'études I comprend l'économie, la gestion, le droit, l'éducation, les arts libéraux, l'histoire et la philosophie ; II comprend les sciences, l'ingénierie et l'agriculture ; III comprend les Beaux-Arts et la Médecine.
                          </p>
                        </div>
                      </div>

                      <div className="border-l-4 border-green-500 pl-6">
                        <h3 className="text-xl font-semibold text-green-700 mb-4">La bourse complète couvre</h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">1. Dispense des frais de scolarité</h4>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">2. Logement : dortoir universitaire gratuit ou subvention pour l'hébergement</h4>
                            <p className="text-gray-700 text-sm mb-2">
                              Si l'université d'accueil exige que les étudiants vivent sur le campus, l'université accueillera les étudiants boursiers dans un dortoir universitaire (généralement une chambre à deux lits) ; si l'université d'accueil autorise les étudiants à vivre hors campus, l'université fournira une subvention mensuelle/trimestrielle pour le logement :
                            </p>
                            <ul className="text-gray-700 text-sm space-y-1 ml-4">
                              <li>• étudiants de premier cycle/étudiants en master/boursiers généraux : 700 CNY par mois</li>
                              <li>• doctorants/chercheurs seniors : 1000 CNY par mois</li>
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">3. Allocation</h4>
                            <ul className="text-gray-700 text-sm space-y-1 ml-4 mb-3">
                              <li>• étudiants de premier cycle : 2 500 CNY par mois</li>
                              <li>• étudiants en master / boursiers généraux : 3 000 CNY par mois</li>
                              <li>• doctorants / chercheurs seniors : 3 500 CNY par mois</li>
                            </ul>
                            <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                              <p className="text-yellow-800 text-sm mb-2">
                                Pendant la durée de la bourse, les étudiants boursiers inscrits recevront une allocation de leur université d'accueil mois par mois.
                              </p>
                              <ul className="text-yellow-700 text-sm space-y-1">
                                <li>• Les étudiants qui s'inscrivent avant le 15 du mois (y compris le 15) recevront l'intégralité de l'allocation de ce mois.</li>
                                <li>• Ceux qui s'inscrivent après le 15 du mois recevront la moitié de l'allocation de ce mois.</li>
                                <li>• Si l'étudiant inscrit reste en dehors de la Chine pendant plus de 15 jours (hors vacances scolaires), son allocation sera arrêtée pendant son départ.</li>
                              </ul>
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">4. Assurance médicale</h4>
                            <p className="text-gray-700 text-sm">
                              Comprehensive Insurance & Protection Scheme for Foreigners Staying in China - Couverture complète des frais médicaux d'urgence et de routine.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="border-l-4 border-orange-500 pl-6">
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">La bourse partielle couvre</h3>
                        <p className="text-gray-700">
                          un ou plusieurs éléments de la bourse complète (frais de scolarité uniquement, ou allocation uniquement, ou logement uniquement, etc.).
                        </p>
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
                <p className="text-gray-600 text-lg font-semibold">
                  Conseil chinois des bourses d'études (CSC)
                </p>
                <p className="text-gray-500">
                  Bourse du gouvernement chinois
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
    </>
  );
}

export default CSC;