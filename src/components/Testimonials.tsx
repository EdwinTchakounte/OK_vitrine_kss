import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { translations } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Mary-wonk ',
      country: ' (+86 138 9366 6534)',
      university: 'Commerce International - Liaoning University ',
      message: 'Grâce à Khrist\'stephen Saba, j\'ai obtenu une bourse complète pour étudier en Chine. L\'accompagnement a été exceptionnel du début à la fin.',
      image: 'images/Bonhomme.png',
      rating: 5
    },
    {
      name: 'Moumbe Noche Alex',
      country: '(+86 166 0582 7697)',
      university: 'Computer sciences-Huzhou University',
      message: 'Le processus était complexe, mais l\'équipe m\'a guidé à chaque étape. Je recommande vivement leurs services.',
      image: 'images/Bonhomme.png',
      rating: 5
    },
    {
      name: 'Kissogole Franck Perez',
      country: '(+86 155 8024 7692)',
      university: 'Mechanical ,design,manufacture and automation',
      message: 'Mon rêve d\'étudier en Allemagne s\'est réalisé grâce à leur expertise. Un service professionnel et efficace.',
      image: 'images/Bonhomme.png',
      rating: 5
    },
    {
      name: 'Yossa Soh Bleriot',
      country: '(+86 150 4262 7741)',
      university: 'Jinzhou University',
      message: 'L\'équipe a été d\'une aide précieuse pour préparer mon dossier. Je suis maintenant étudiant au Canada.',
      image: 'images/Bonhomme.png',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {translations.testimonials.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 mx-4">
            <div className="flex items-center justify-center mb-8">
              <Quote className="w-12 h-12 text-blue-600 opacity-20" />
            </div>

            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-xl text-gray-600 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].message}"
              </p>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <h4 className="text-lg font-semibold text-gray-900">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-sm text-gray-600">
                  {testimonials[currentTestimonial].university}
                </p>
                <p className="text-sm text-blue-600 font-medium">
                  {testimonials[currentTestimonial].country}
                </p>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <p className="text-gray-600">Étudiants accompagnés</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-500 mb-2">95%</div>
            <p className="text-gray-600">Taux de réussite</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-red-500 mb-2">50+</div>
            <p className="text-gray-600">Universités partenaires</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;