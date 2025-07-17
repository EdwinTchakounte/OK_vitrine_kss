import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { translations } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: translations.hero.title,
      subtitle: translations.hero.subtitle
    },
    {
      image: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Excellence Académique',
      subtitle: 'Rejoignez des milliers d\'étudiants qui ont réalisé leurs rêves'
    },
    {
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Votre Avenir International',
      subtitle: 'Des opportunités d\'études dans les meilleures universités mondiales'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 z-10 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 z-10 p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">KS</span>
          </div>
          <div className="mb-4">
            <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full"></div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {slides[currentSlide].title}
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
          {slides[currentSlide].subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105"
          >
            {translations.hero.cta}
          </button>
          
          <a
            href="https://wa.me/237693461841"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-all duration-200 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>{translations.hero.whatsapp}</span>
            <Play className="w-4 h-4" />
          </a>
        </div>

        {/* African Pattern Decoration */}
        <div className="absolute -top-20 -left-20 w-40 h-40 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-400">
            <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="currentColor" />
            <path d="M50 25 L75 50 L50 75 L25 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        
        <div className="absolute -bottom-20 -right-20 w-32 h-32 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full text-red-400">
            <circle cx="50" cy="50" r="40" fill="currentColor" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;