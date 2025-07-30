import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Composant Hero - Section principale avec carrousel d'images en plein écran
const Hero: React.FC = () => {
  // Récupération des traductions depuis le contexte de langue
  const { translations } = useLanguage();
  
  // État pour suivre quelle diapositive est actuellement affichée (commence à 0)
  const [currentSlide, setCurrentSlide] = useState(0);

  // État pour détecter si on est sur mobile ou desktop
  const [isMobile, setIsMobile] = useState(false);

  // Tableau contenant toutes les diapositives avec leurs images pour desktop et mobile
  const slides = [
    {
      // Image pour desktop (1920x1080 recommandé)
      imageDesktop: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1920',
      // Image pour mobile (800x1200 recommandé) - pour l'instant même chemin
      imageMobile: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: translations.hero.title,
      subtitle: translations.hero.subtitle
    },
    {
      // Image desktop
      imageDesktop: 'https://images.pexels.com/photos/33146162/pexels-photo-33146162.jpeg', // Future image desktop
      // Image mobile  
      imageMobile: 'https://images.pexels.com/photos/33146162/pexels-photo-33146162.jpeg',   // Future image mobile
      title: 'Excellence Académique',
      subtitle: 'Rejoignez des milliers d\'étudiants qui ont réalisé leurs rêves'
    },
    {
      // Image desktop
      imageDesktop: 'https://images.pexels.com/photos/33090082/pexels-photo-33090082.jpeg', // Future image desktop
      // Image mobile
      imageMobile: 'https://images.pexels.com/photos/33090082/pexels-photo-33090082.jpeg',   // Future image mobile
      title: 'Votre Avenir International',
      subtitle: 'Des opportunités d\'études dans les meilleures universités mondiales'
    }
  ];

  // Hook pour détecter la taille d'écran et déterminer si on est sur mobile
  useEffect(() => {
    // Fonction qui vérifie la taille de l'écran
    const checkIfMobile = () => {
      // Considère comme mobile si la largeur est inférieure à 768px (breakpoint Tailwind md)
      setIsMobile(window.innerWidth < 768);
    };

    // Vérifie au chargement initial
    checkIfMobile();

    // Ajoute un écouteur pour les changements de taille d'écran
    window.addEventListener('resize', checkIfMobile);

    // Nettoie l'écouteur quand le composant est démonté
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Effet qui change automatiquement la diapositive toutes les 5 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      // Passe à la diapositive suivante, revient à 0 quand on atteint la fin
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    // Nettoie le timer quand le composant est démonté pour éviter les fuites mémoire
    return () => clearInterval(timer);
  }, [slides.length]);

  // Fonction pour aller à la diapositive suivante manuellement
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Fonction pour aller à la diapositive précédente manuellement
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    // Section principale - prend toute la hauteur de l'écran
    <section 
      id="home" 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      
      {/* CONTENEUR DES IMAGES DE FOND */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          // Chaque diapositive est positionnée en absolu pour se superposer
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              // Seule la diapositive active est visible (opacity-100), les autres sont transparentes
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* IMAGE DE FOND - Sélection automatique desktop/mobile */}
            <img
              // Sélectionne l'image appropriée selon le type d'écran
              src={isMobile ? slide.imageMobile : slide.imageDesktop}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              // object-cover : l'image garde ses proportions et remplit tout l'espace
              // w-full h-full : prend 100% de la largeur et hauteur du conteneur parent
            />
            
            {/* OVERLAY SOMBRE - améliore la lisibilité du texte par-dessus l'image */}
            <div className="absolute inset-0 bg-black/40"></div>
            {/* bg-black/40 = arrière-plan noir avec 40% d'opacité */}
          </div>
        ))}
      </div>

      {/* FLÈCHE DE NAVIGATION GAUCHE */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-10 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
        // z-10 : s'assure que le bouton est au-dessus des images
        // backdrop-blur-sm : effet de flou sur l'arrière-plan du bouton
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* FLÈCHE DE NAVIGATION DROITE */}
      <button
        onClick={nextSlide}
        className="absolute right-4 z-10 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* INDICATEURS DE DIAPOSITIVES (points en bas) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {/* left-1/2 + -translate-x-1/2 = centre horizontalement */}
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              // Point actif = blanc, autres points = blanc semi-transparent
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* CONTENU TEXTUEL PRINCIPAL */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        {/* z-10 : s'assure que le texte est au-dessus des images */}
        
        {/* SECTION LOGO ET DÉCORATION */}
        <div className="mb-8">
          {/* Conteneur circulaire pour le logo avec dégradé */}
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <img src="/images/logo_version_blanc.png" alt="Logo" className="max-w-full max-h-full" />
          </div>
          
          {/* Ligne décorative sous le logo */}
          <div className="mb-4">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* TITRE PRINCIPAL - responsive (plus petit sur mobile) */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {/* text-4xl sur mobile, text-6xl sur desktop (md: = medium screens et plus) */}
          {slides[currentSlide].title}
        </h1>
        
        {/* SOUS-TITRE */}
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
          {slides[currentSlide].subtitle}
        </p>

        {/* BOUTONS D'ACTION */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* flex-col sur mobile (boutons empilés), flex-row sur tablet+ (boutons côte à côte) */}
          
          {/* Bouton "Nous contacter" */}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
            // w-full sur mobile (bouton prend toute la largeur), w-auto sur desktop
            // transform hover:scale-105 = agrandit légèrement au survol
          >
            {translations.hero.cta}
          </button>
          
          {/* Bouton WhatsApp */}
          <a
            href="https://wa.me/237693461841"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base"
          >
            <span>{translations.hero.whatsapp}</span>
            <Play className="w-3 h-3 sm:w-4 sm:h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;