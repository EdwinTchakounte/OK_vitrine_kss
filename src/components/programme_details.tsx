import { ArrowLeft, Award, BookOpen, Brain, Calendar, CheckCircle, ExternalLink, Globe, GraduationCap, Target, Users } from "lucide-react";
import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { ScholarshipDisplay } from "./scholarship";
// const onBack(){
//   return (console.log("ok"));
// }
// Composant Page de Détail


export const ProgramDetailPage = ({  }) => {
const { title, type } = useParams();
const navigate = useNavigate();

const datasheet = [
  {
    id: "fulbright",
    title: "Bourse internationale pour les enseignants de langue chinoise",
    description: "Afin de répondre à la demande internationale croissante d'enseignants de langue chinoise, de faciliter l'enseignement de la langue chinoise dans le monde entier et de soutenir le développement professionnel des enseignants de langue chinoise, le Centre pour l'enseignement des langues et la coopération (CLEC) a créé cette bourse pour les enseignants de langue chinoise éligibles en dehors de la Chine.",
    eligibility: [
      "Être un citoyen non chinois",
      "Être amical avec la Chine, n'avoir aucun casier judiciaire, respecter les lois et règlements de la Chine et les règles de l'Université",
      "Être en bonne santé physique et mentale, avoir de bons résultats scolaires et comportementaux",
      "S'intéresser à l'enseignement de la langue chinoise et au travail connexe",
      "Être âgé de 18 à 35 ans (au 1er septembre 2025). La limite d'âge maximale pour les enseignants de chinois en poste peut être portée à 45 ans"
    ],
    scholarshipTypes: [
      {
        type: "Bourse d'études pour une maîtrise en enseignement international de la langue chinoise",
        duration: "Commence en septembre, accordée pour un maximum de deux années académiques",
        requirements: "Baccalauréat, HSK niveau 5 (score minimum 210), HSKK niveau intermédiaire (score minimum 60)",
        priority: "Priorité donnée aux candidats pouvant fournir un contrat de travail avec un établissement d'enseignement à l'issue de leurs études"
      },
      {
        type: "Bourse pour un programme d'études d'un an (langue et littérature chinoises)",
        duration: "Commence en septembre, fournie pour un maximum de onze mois",
        requirements: "HSK niveau 4 (score minimum 180), HSKK niveau intermédiaire (score minimum 60)",
        priority: "Les candidats ayant reçu une bourse similaire dans les trois ans ne sont pas éligibles"
      },
      {
        type: "Bourse pour un programme d'études d'un semestre (langue et littérature chinoises)",
        duration: "Commence en septembre ou mars 2026, fournie pour un maximum de cinq mois",
        requirements: "HSK niveau 3 (score minimum 180), score HSKK requis",
        priority: "Les candidats ayant reçu une bourse similaire dans les trois ans ne sont pas éligibles"
      }
    ],
    coverage: {
      description: "La bourse offre une couverture complète des frais de scolarité, des frais d'hébergement, de l'allocation de subsistance et des frais d'assurance médicale complets.",
      contactLink: "#"
    },
    applicationDates: {
      openingMessage: "L'inscription est ouverte à partir d'aujourd'hui.",
      deadlines: [
        "15 mai (pour les programmes commençant en septembre 2025)",
        "31 octobre (pour le programme d'études d'un semestre commençant en mars 2026 seulement)"
      ]
    },
    applicationProcedure: {
      description: "Pour postuler, veuillez nous contacter via le lien fourni.",
      contactLink: "#"
    },
    documents: {
      general: [
        "Une copie scannée de la page photo du passeport (le passeport doit être valide avant le 1er mars 2026)",
        "Une copie scannée des attestations de score des tests HSK et HSKK (pendant la validité de deux ans)",
        "Une lettre de recommandation du chef des institutions de recommandation"
      ],
      masters: [
        "Certificats du diplôme le plus élevé",
        "Relevés de notes académiques pendant les études de baccalauréat",
        "Déclaration personnelle, en chinois, incluant l'expérience d'étude et de travail, les raisons de la candidature et la proposition d'étude (minimum 1500 mots)",
        "Deux lettres de recommandation de professeurs titulaires ou agrégés, en chinois ou anglais",
        "Articles académiques publiés ou autres réalisations académiques (le cas échéant)",
        "Formulaire d'acceptation provisoire d'un étudiant international (le cas échéant)",
        "Contrat de travail notarié avec les établissements d'enseignement (le cas échéant)",
        "Photocopie du formulaire d'examen physique des étrangers",
        "Certificat de non-casier judiciaire, valable 6 mois",
        "Engagements pour la demande de master de l'Université (version PDF complètement remplie et signée à la main)"
      ]
    },
    specialPolicies: {
      inServiceTeachers: {
        title: "Enseignants de chinois en poste",
        description: "Les enseignants de chinois en poste doivent fournir une preuve d'emploi et une lettre de recommandation de l'employeur."
      },
      bridgeWinners: {
        title: "Vainqueurs du Chinese Bridge",
        description: "Les candidats ayant reçu le certificat de bourse internationale lors des compétitions Chinese Bridge doivent soumettre leurs documents avec leurs certificats de bourse."
      }
    },
    additionalInfo: [
      "Les étudiants sont soumis à l'évaluation annuelle conformément aux procédures d'évaluation de la bourse",
      "Les étudiants qui ne réussissent pas l'examen médical, se retirent avant la fin du programme, ou suspendent leurs études seront disqualifiés",
      "Les candidats admis au programme de maîtrise doivent fournir les copies originales des certificats de diplôme"
    ],
    contact: "Pour l'inscription et d'autres questions, veuillez utiliser les liens de contact fournis."
  },

  /***** NOUVELLE ENTREE : BOURSE DU GOUVERNEMENT CHINOIS (CSC) *****/
  {
    id: "csc",
    title: "Bourse du Gouvernement Chinois (CSC)",
    description: "Afin de promouvoir la compréhension mutuelle, la coopération et les échanges dans les domaines de la politique, de l’économie, de la culture, de l’éducation et du commerce entre la Chine et d’autres pays, le gouvernement chinois parraine des étudiants, enseignants et universitaires internationaux pour étudier et mener des recherches dans des universités chinoises. Le China Scholarship Council (CSC), mandaté par le Ministère de l’Éducation, administre ces programmes.",
    eligibility: [
      "Citoyen non chinois (sauf cas particuliers précisés par le programme)",
      "Bonne santé physique et mentale (examen médical exigé pour séjours > 6 mois)",
      "Conformité aux exigences académiques et linguistiques propres à chaque programme",
      "Respect des lois et règlements de la Chine et des règles de l'université d'accueil"
    ],
    scholarshipTypes: [
      {
        type: "Programme de premier cycle (undergraduate)",
        duration: "3 à 5 ans selon la spécialité",
        requirements: "Diplôme de fin d'études secondaires, documents académiques et parfois HSK selon l'université",
        note: "Les cursus de premier cycle enseignés en chinois nécessitent souvent une année préparatoire de langue"
      },
      {
        type: "Programme de master",
        duration: "2 à 3 ans",
        requirements: "Licence, relevés de notes, plan d'étude/projet de recherche, lettres de recommandation"
      },
      {
        type: "Programme de doctorat",
        duration: "3 à 4 ans (variable)",
        requirements: "Master ou équivalent, proposition de recherche détaillée, lettres de recommandation"
      },
      {
        type: "Programme d'échanges/scholars (chercheurs invités)",
        duration: "Quelques mois à 1 an (selon dossier)",
        requirements: "CV académique, projet de recherche, lettre d'invitation d'une université chinoise (si possible)"
      },
      {
        type: "Programme préparatoire de langue (classe préparatoire)",
        duration: "1 à 2 ans",
        requirements: "Destiné aux candidats devant suivre des cours de chinois avant d'entamer les études principales"
      },
      {
        type: "Programmes spécialisés (arts, musique, etc.)",
        duration: "Variable (annuel ou pluriannuel)",
        requirements: "Dépôt d'œuvres (CD, portfolio), exigences spécifiques selon la discipline"
      },
      {
        type: "Other CSC sub-programs",
        duration: "Variable",
        requirements: "Varient selon le sous-programme et l'université d'accueil"
      }
    ],
    coverage: {
      description: "La bourse standard CSC peut couvrir un ou plusieurs éléments : frais de scolarité, hébergement (dortoir universitaire ou subvention logement), allocation mensuelle, et assurance médicale. Le niveau de couverture dépend du type (complète/partielle) et de la catégorie d'études.",
      details: {
        fullScholarship: {
          tuition: "Exonération totale des frais de scolarité",
          accommodation: "Dortoir universitaire gratuit OU subvention pour logement hors campus",
          monthlyStipend: {
            undergraduate: "2 500 CNY / mois",
            master: "3 000 CNY / mois",
            phd_research: "3 500 CNY / mois"
          },
          medicalInsurance: "Assurance médicale complète selon la politique 'Comprehensive Insurance & Protection Scheme for Foreigners Staying in China'"
        },
        partialScholarship: "Peut couvrir seulement une partie des éléments ci-dessus (ex. frais de scolarité uniquement)"
      }
    },
    applicationDates: {
      openingMessage: "Les candidatures se font généralement une fois par an.",
      periods: [
        "Période d'application générale : janvier à avril chaque année",
        "Certaines universités peuvent avoir des fenêtres spécifiques — vérifier le calendrier de l'université d'accueil"
      ]
    },
    applicationProcedure: {
      description: "Candidature en ligne via le portail CSC et/ou via l'université d'accueil. Le numéro d'agence (agency number) de la structure locale peut être requis pour l'inscription en ligne. Les candidats doivent rassembler les documents exigés et les soumettre dans l'ordre requis.",
      notes: [
        "Vérifier si l'université d'accueil exige une lettre de pré-admission ; certaines invitations accélèrent le traitement",
        "S'assurer d'avoir les traductions notariées pour tout document rédigé dans une langue autre que l'anglais ou le chinois"
      ],
      contactLink: "#"
    },
    documents: {
      general: [
        "Formulaire de demande de la bourse du gouvernement chinois (en chinois ou en anglais)",
        "Diplôme le plus élevé notarié (photocopie) — ou preuve officielle de statut étudiant pour les diplômés imminents",
        "Relevés de notes académiques (en chinois ou en anglais; traductions notariées si nécessaire)",
        "Plan d'étude ou proposition de recherche (minimums recommandés : 200 mots pour undergraduate, 500 mots pour non-degree, 800 mots pour gradué)",
        "Deux lettres de recommandation (pour master/doctorat : signées par un professeur ou professeur agrégé)",
        "CD/portfolio d'œuvres (pour les disciplines artistiques/musicales)",
        "Documents des tuteurs en Chine (pour candidats < 18 ans)",
        "Formulaire d'examen médical pour étrangers (photocopie) — requis pour séjours > 6 mois",
        "Copie de la lettre de pré-admission de l'université chinoise (si disponible)",
        "Certificat HSK (si requis par le programme)"
      ],
      packagingInstruction: "Tous les documents doivent être reliés ensemble dans le coin supérieur gauche dans l'ordre indiqué par les instructions officielles (habituellement 1 → 10)."
    },
    duration: {
      description: "La durée varie selon la catégorie (undergraduate, master, doctorat, préparation linguistique, etc.). Voir les tableaux récapitulatifs spécifiques au programme et à l'université d'accueil.",
      note: "Les cours de langue préparatoires peuvent durer 1 à 2 ans selon la spécialité et exigences linguistiques."
    },
    languageOfInstruction: {
      undergraduate: "Principalement en chinois ; une année préparatoire de langue est souvent requise pour les boursiers entrant dans des programmes enseignés en chinois.",
      graduate_and_nonDegree: "Peut être enseigné en chinois ou en anglais selon le programme et l'université ; les candidats doivent vérifier la langue d'enseignement choisie."
    },
    coverageAndStandard: {
      note: "La bourse standard couvre : frais de scolarité, hébergement (ou subvention), allocation mensuelle et assurance. Des barèmes et montants différenciés existent selon les domaines d'études (I, II, III) et le niveau académique.",
      domainGroups: {
        I: "Économie, gestion, droit, éducation, arts libéraux, histoire, philosophie",
        II: "Sciences, ingénierie, agriculture",
        III: "Beaux-Arts, médecine"
      }
    },
    specialPolicies: {
      preparatoryExemptions: "Les boursiers de premier cycle peuvent demander exemption des cours préparatoires si leurs études secondaires ont été effectuées en chinois ou s'ils possèdent un certificat HSK répondant aux exigences.",
      languageFailure: "Les boursiers ne maîtrisant pas une langue d'instruction requise peuvent se voir demander de suivre des cours de langue (1 à 2 ans maximum selon la discipline); un échec aux exigences linguistiques peut entraîner la résiliation de la bourse."
    },
    additionalInfo: [
      "Le numéro d'agence (agency number) est requis pour certaines candidatures en ligne — vérifier auprès de l'institution locale en charge",
      "Les examens médicaux valables seulement 6 mois : planifier en conséquence",
      "La bourse peut être partielle ou complète — vérifier les détails spécifiques au programme choisi"
    ],
    contact: "Pour candidature et informations détaillées, consulter le portail officiel du China Scholarship Council (CSC) ou contacter l'université chinoise d'accueil. (lien/contact à ajouter selon le besoin)"
  }
];

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
      title: 'Bourse du Gouvernement Chinois (CSC)',
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
      title: 'Bourse internationale pour les enseignants de langue chinoise',
      icon: Target,
      summary: 'Échanges éducatifs avec les États-Unis',
      description: 'Afin de répondre à la demande internationale croissante d\'enseignants de langue chinoise, de faciliter l\'enseignement de la langue chinoise dans le monde entier et de soutenir le développement professionnel des enseignants de langue chinoise, le Centre pour l\'enseignement des langues et la coopération (CLEC) a créé cette bourse pour les enseignants de langue chinoise éligibles en dehors de la Chine.',
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

  function getProgramById(id){
      return datasheet.find(program => program.id === id);
  }  
  function getProgramByTitle(title, type,studyPrograms,scholarshipPrograms) {
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    console.log(type);
    if(type==1){
      console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    console.log(type);
      return studyPrograms.find(program => program.title === title);
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

  function ScholarshipPreview(programId) {
  const scholarship = getProgramById(programId);
  console.log("ScholarshipPreview called with programId:", programId);

  if (!scholarship) {
    return <p>Aucune donnée disponible</p>;
  }

  return <ScholarshipDisplay scholarshipData={scholarship} />;
}


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header avec gradient */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-10 py-20">
          <button 
           onClick={() => navigate('/')}
            className="flex items-center text-white/80 hover:text-white mb-6 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour aux programmes 
          </button>
          
          <div className="flex items-center space-x-6">

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
      {ScholarshipPreview(program.id)}
      {/* <ScholarshipDisplay scholarshipData={getProgramById(program.id)} /> */}
      </div>

      
   
  );
};




