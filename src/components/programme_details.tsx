import { ArrowLeft, Award, BookOpen, Brain, Calendar, CheckCircle, ExternalLink, Globe, GraduationCap, Target, Users } from "lucide-react";
import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
// const onBack(){
//   return (console.log("ok"));
// }
// Composant Page de Détail


export const ProgramDetailPage = ({  }) => {
const { title, type } = useParams();
const navigate = useNavigate();
  // Données des programmes d'études

  const studyPrograms = [
    {
      id: 'prepa',
      title: 'Prépa-Licence',
      icon: BookOpen,
      summary: 'Programme préparatoire aux études supérieures avec accompagnement personnalisé',
      description: 'Un programme d\'excellence pour préparer votre entrée dans les meilleures universités',
      eligibility: ['Baccalauréat ou équivalent', 'Motivation académique forte', 'Projet d\'études défini'],
      coverage: 'Support pédagogique, orientation, préparation aux concours',
      dates: ['Rentrée septembre 2025', 'Candidatures ouvertes jusqu\'au 15 juillet'],
      type: 'study'
    },
    {
      id: 'licence',
      title: 'Licence',
      icon: GraduationCap,
      summary: 'Formation de premier cycle dans diverses disciplines académiques',
      description: 'Obtenez votre diplôme de licence dans l\'université de vos rêves',
      eligibility: ['Baccalauréat validé', 'Dossier académique solide', 'Niveau de langue requis'],
      coverage: 'Frais de scolarité, support administratif, accompagnement',
      dates: ['Rentrée février/septembre 2025', 'Inscriptions en cours'],
      type: 'study'
    },
    {
      id: 'master',
      title: 'Master',
      icon: Brain,
      summary: 'Programmes de master spécialisés dans les meilleures universités',
      description: 'Spécialisez-vous dans votre domaine avec nos programmes master',
      eligibility: ['Licence ou équivalent', 'Excellence académique', 'Projet professionnel clair'],
      coverage: 'Frais de scolarité, accompagnement recherche, networking',
      dates: ['Rentrée septembre 2025', 'Candidatures jusqu\'au 31 mai'],
      type: 'study'
    },
        {
      id: 'MBA',
      title: 'MBA',
      icon: Brain,
      summary: 'Programmes de MBA spécialisés dans les meilleures universités',
      description: 'Spécialisez-vous dans votre domaine avec nos programmes master',
      eligibility: ['Licence ou équivalent', 'Excellence académique', 'Projet professionnel clair'],
      coverage: 'Frais de scolarité, accompagnement recherche, networking',
      dates: ['Rentrée septembre 2025', 'Candidatures jusqu\'au 31 mai'],
      type: 'study'
    },
    {
      id: 'doctorat',
      title: 'Doctorat',
      icon: Target,
      summary: 'Recherche doctorale avec encadrement de qualité internationale',
      description: 'Menez vos recherches doctorales dans un environnement d\'excellence',
      eligibility: ['Master ou équivalent', 'Projet de recherche approuvé', 'Directeur de thèse identifié'],
      coverage: 'Financement recherche, laboratoires, publications',
      dates: ['Rentrée flexible', 'Candidatures permanentes'],
      type: 'study'
    },
       {
      id: 'Langue Chinoise',
      title: 'Langue Chinoise',
      icon: Target,
      summary: 'Langue Chinoise avec encadrement de qualité internationale',
      description: 'Menez vos recherches doctorales dans un environnement d\'excellence',
      eligibility: ['Master ou équivalent', 'Projet de recherche approuvé', 'Directeur de thèse identifié'],
      coverage: 'Financement recherche, laboratoires, publications',
      dates: ['Rentrée flexible', 'Candidatures permanentes'],
      type: 'study'
    },

     {
      id: 'Stage Academique',
      title: 'Stage Academique',
      icon: Target,
      summary: 'Stage Academique avec encadrement de qualité internationale',
      description: 'Menez vos recherches doctorales dans un environnement d\'excellence',
      eligibility: ['Master ou équivalent', 'Projet de recherche approuvé', 'Directeur de thèse identifié'],
      coverage: 'Financement recherche, laboratoires, publications',
      dates: ['Rentrée flexible', 'Candidatures permanentes'],
      type: 'study'
    },
    

  ];




  // Données des programmes de bourses
  const scholarshipPrograms = [
    {
      id: 'csc',
      title: 'CSC Scholarship',
      icon: Globe,
      summary: 'Bourse du gouvernement chinois pour études en Chine',
      description: 'Programme prestigieux du China Scholarship Council pour excellents étudiants africains',
      eligibility: ['Nationalité non-chinoise', 'Excellence académique', 'Bonne santé', 'Âge : 18-35 ans'],
      coverage: 'Frais de scolarité, hébergement, allocation mensuelle, assurance médicale',
      dates: ['Candidatures : 15 janvier - 15 mai 2025', 'Rentrée : septembre 2025'],
      type: 'scholarship'
    },
    {
      id: 'sigma',
      title: 'SIGMA-MBA',
      icon: Award,
      summary: 'Programme MBA avec bourse complète pour leaders africains',
      description: 'Formation executive MBA dédiée aux futurs leaders du continent africain',
      eligibility: ['5 ans d\'expérience professionnelle', 'Potentiel de leadership', 'Projet d\'impact'],
      coverage: 'Formation complète, logement, networking international',
      dates: ['Candidatures ouvertes', 'Sessions trimestrielles'],
      type: 'scholarship'
    },
    {
      id: 'erasmus',
      title: 'Bourses Universitaire du recrutement independant',
      icon: Users,
      summary: 'Mobilité académique en Europe avec financement UE',
      description: 'Opportunités d\'échanges et de formations en Europe via Erasmus+',
      eligibility: ['Inscription dans université partenaire', 'Niveau linguistique B2', 'Projet académique'],
      coverage: 'Transport, hébergement, allocation mensuelle, frais d\'inscription',
      dates: ['2 sessions par an', 'Prochaine deadline : 15 mars 2025'],
      type: 'scholarship'
    },
    {
      id: 'commonwealth',
      title: 'Bourses Universitaire du recrutement dependant',
      icon: GraduationCap,
      summary: 'Bourses prestigieuses pour études au Royaume-Uni',
      description: 'Programme d\'excellence pour études supérieures dans les universités britanniques',
      eligibility: ['Citoyenneté pays Commonwealth', 'First class honours', 'Projet de développement'],
      coverage: 'Frais universitaires, voyage, allocation, frais personnels',
      dates: ['Candidatures annuelles', 'Deadline : 15 décembre 2024'],
      type: 'scholarship'
    },
    {
      id: 'chevening',
      title: 'Bourses d\'etudes provinciale',
      icon: Brain,
      summary: 'Bourses du gouvernement britannique pour futurs leaders',
      description: 'Programme prestigieux pour études de master au Royaume-Uni',
      eligibility: ['Citoyenneté éligible', '2 ans d\'expérience professionnelle', 'Leadership potentiel'],
      coverage: 'Frais universitaires complets, allocation mensuelle, voyage',
      dates: ['Candidatures : septembre - novembre', 'Rentrée : septembre suivant'],
      type: 'scholarship'
    },
    {
      id: 'daad',
      title: 'Bourse d\'études universitaire',
      icon: Globe,
      summary: 'Bourses allemandes pour études et recherche',
      description: 'Programme du service allemand d\'échanges académiques',
      eligibility: ['Diplôme universitaire', 'Projet d\'études en Allemagne', 'Niveau d\'allemand/anglais'],
      coverage: 'Allocation mensuelle, assurance, cours de langue',
      dates: ['Plusieurs sessions par an', 'Candidatures en ligne'],
      type: 'scholarship'
    },
    {
      id: 'fulbright',
      title: 'International scholarships Chinese teacher',
      icon: Target,
      summary: 'Échanges éducatifs avec les États-Unis',
      description: 'Programme d\'échanges académiques et culturels USA-Afrique',
      eligibility: ['Excellence académique', 'Projet d\'études aux USA', 'Leadership communautaire'],
      coverage: 'Frais de scolarité, allocation, voyage, assurance',
      dates: ['Candidatures annuelles', 'Deadline pays-spécifique'],
      type: 'scholarship'
    },
    {
      id: 'australia-awards',
      title: 'Cities sister Scholarships',
      icon: Users,
      summary: 'Bourses australiennes pour le développement',
      description: 'Programme de bourses pour études en Australie',
      eligibility: ['Citoyenneté pays éligible', 'Expérience professionnelle', 'Engagement développement'],
      coverage: 'Frais universitaires, allocation, voyage, assurance santé',
      dates: ['Candidatures annuelles', 'Février - avril selon pays'],
      type: 'scholarship'
    }
  ];

   const [program,setProgram] = useState(getProgramByTitle(title, type,studyPrograms,scholarshipPrograms));

     
  function getProgramByTitle(title, type,studyPrograms,scholarshipPrograms) {
    if(type==1){
      return studyPrograms.find(program => program.id === title);
    }
  return scholarshipPrograms.find(program => program.title === title);
}
  if (!program) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Programme non trouvé</h2>
          <button 
           // onClick={onBack}
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all"
          >
            Retour aux programmes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <button 
           onClick={() => navigate('/')}
            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour aux programmes 
          </button>
          
          <div className="flex items-center space-x-6">
            <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <program.icon className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-4xl font-bold">{program.title}</h1>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  program.type === 'study' 
                    ? 'bg-blue-500/20 text-blue-100' 
                    : 'bg-green-500/20 text-green-100'
                }`}>
                  {program.type === 'study' ? 'Programme d\'études' : 'Programme de bourse'}
                </span>
              </div>
              <p className="text-blue-100 text-xl leading-relaxed">{program.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Critères d'éligibilité */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Critères d'éligibilité</h2>
              </div>
              
              <div className="space-y-4">
                {program.eligibility.map((criterion, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium">{criterion}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Couverture et avantages */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Couverture & Avantages</h2>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
                <p className="text-gray-800 text-lg leading-relaxed">{program.coverage}</p>
              </div>
            </div>

            {/* Calendrier */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Calendrier Important</h2>
              </div>
              
              <div className="space-y-4">
                {program.dates.map((date, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-800 font-medium">{date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action principale */}
            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-6 text-white">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Prêt à candidater ?</h3>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Commencez votre candidature dès maintenant et rejoignez notre communauté d'étudiants d'excellence.
                </p>
                <button className="w-full bg-white text-blue-600 py-3 px-6 rounded-xl font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">
                  Commencer ma candidature
                </button>
              </div>
            </div>

            {/* Informations de contact */}
            {/* <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Besoin d'aide ?</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">programmes@academi.cm</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <Phone className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 font-medium">+237 6XX XXX XXX</span>
                </div>
              </div> */}
            </div>

            {/* Statistiques */}
            {/* <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Statistiques</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Candidats acceptés</span>
                  <span className="font-bold text-green-600">89%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Satisfaction</span>
                  <span className="font-bold text-blue-600">4.8/5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Anciens étudiants</span>
                  <span className="font-bold text-purple-600">2,500+</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* Section témoignages */}
        {/* <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Ce que disent nos étudiants
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl border border-blue-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Marie K.</h4>
                    <p className="text-sm text-gray-600">Étudiante en Master</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Grâce à ce programme, j'ai pu réaliser mon rêve d'étudier à l'international. 
                  L'accompagnement a été exceptionnel du début à la fin."
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl border border-green-100">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Jean-Paul M.</h4>
                    <p className="text-sm text-gray-600">Doctorant</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Une expérience transformatrice ! Le réseau d'anciens étudiants 
                  m'a ouvert de nombreuses portes professionnelles."
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
   
  );
};