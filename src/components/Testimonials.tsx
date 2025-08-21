import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, GraduationCap, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { translations } = useLanguage();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Mary-wonk',
      country: '(+86 138 9366 6534)',
      university: 'Commerce International - Liaoning University',
      message: 'Grâce à vous, je suis aujourd\'hui en Chine. Rien n\'a été facile, mais avec persévérance et accompagnement, j\'ai atteint mon objectif',
      image: 'images/Bonhomme.png',
      rating: 5
    },
    {
      name: 'Moumbe Noche Alex',
      country: '(+86 166 0582 7697)',
      university: 'Computer sciences-Huzhou University',
      message: 'Vous m\'avez aidé à croire en cette opportunité. Aujourd\'hui, je poursuis mes études à Huzhou. Merci infiniment pour votre soutien.',
      image: 'images/Bonhomme.png',
      rating: 5
    },
    {
      name: 'Kissogole Franck Perez',
      country: '(+86 155 8024 7692)',
      university: 'Mechanical, design, manufacture and automation',
      message: 'Mon rêve d\'étudier en Chine s\'est réalisé grâce à leur expertise. Un service professionnel et efficace.',
      image: 'images/Bonhomme.png',
      rating: 5
    },
    {
      name: 'Yossa Soh Bleriot',
      country: '(+86 150 4262 7741)',
      university: 'Jinzhou University',
      message: 'Tout semblait impossible au départ. Mais grâce à votre programme et vos conseils, je suis maintenant étudiant en Chine',
      image: 'images/Bonhomme.png',
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-24 h-24 bg-blue-100/40 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-green-100/40 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-200/30 rounded-full blur-lg"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl mb-4 shadow-lg">
            <Quote className="w-6 h-6 text-white" />
          </div>
              <h2 className="text-4xl md:text-8xl lg:text-4xl font-black text-blue-700 mb-8 leading-tight relative tracking-tight">
                <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-green-500 bg-clip-text text-transparent">{translations?.testimonials?.title || 'Témoignages'}</span>

              </h2>



          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-green-800 bg-clip-text text-transparent mb-3">
            
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Découvrez les expériences de nos étudiants en Chine
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 group"
          >
            <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-blue-100/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500">
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
            </div>
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 group"
          >
            <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-blue-100/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-500">
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
            </div>
          </button>

          {/* Compact Testimonial Card */}
          <div className="mx-6">
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 transition-all duration-500 hover:shadow-2xl">
              {/* Decorative gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-green-500/5 rounded-2xl"></div>
              
              <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Left: Profile Section */}
                <div className="flex items-center gap-4 md:min-w-0 md:flex-shrink-0">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl p-0.5">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        className="w-full h-full rounded-xl object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center shadow-lg">
                      <GraduationCap className="w-3 h-3 text-white" />
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="min-w-0">
                    <h4 className="text-lg font-bold text-gray-900 mb-1 truncate">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-sm text-gray-600 mb-1 line-clamp-2">
                      {testimonials[currentTestimonial].university}
                    </p>
                    <div className="flex items-center gap-1">
                      <Phone className="w-3 h-3 text-blue-500" />
                      <p className="text-xs font-medium bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                        {testimonials[currentTestimonial].country}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center: Message */}
                <div className="flex-1 min-w-0">
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-500/20" />
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed italic pl-4">
                      "{testimonials[currentTestimonial].message}"
                    </p>
                  </div>
                </div>

                {/* Right: Rating */}
                <div className="flex flex-col items-center md:items-end gap-2 md:min-w-0 md:flex-shrink-0">
                  <div className="flex space-x-1 p-2 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500 font-medium">Excellent</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className="group relative"
              >
                <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-gradient-to-r from-blue-500 to-green-500 scale-125' 
                    : 'bg-gray-300 group-hover:bg-gray-400'
                }`}>
                </div>
                {index === currentTestimonial && (
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-gradient-to-r from-blue-500/30 to-green-500/30 rounded-full animate-ping"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;