import React, { useState, useEffect } from 'react';
import { Users, GraduationCap, Heart, FileCheck, Calendar, MapPin, Clock, TrendingUp, Sparkles } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, color, bgColor, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 150);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-700 ease-out`}>
      <div className={`${bgColor} rounded-3xl p-8 shadow-sm hover:shadow-lg border border-gray-100/50 transition-all duration-300 hover:-translate-y-1 group`}>
        <div className="flex items-center justify-between mb-6">
          <div className={`p-4 rounded-2xl ${color} bg-opacity-10 group-hover:bg-opacity-15 transition-all duration-300`}>
            <Icon size={28} className={`${color.replace('bg-', 'text-')}`} />
          </div>
          <div className="text-right">
            <div className={`text-3xl md:text-4xl font-light ${color.replace('bg-', 'text-')} tracking-tight`}>
              {value}
            </div>
          </div>
        </div>
        
        <h3 className="text-gray-700 font-medium text-base leading-relaxed">
          {title}
        </h3>
        
        {/* Subtle progress indicator */}
        <div className="mt-6 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`} 
            style={{
              width: isVisible ? `${Math.floor(Math.random() * 40) + 60}%` : '0%'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

const FloatingShape = ({ className, delay = 0 }) => (
  <div 
    className={`absolute opacity-30 animate-pulse ${className}`}
    style={{
      animationDelay: `${delay}s`,
      animationDuration: '4s'
    }}
  />
);

export default function StatsDashboard() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    {
      icon: Users,
      title: "Étudiants contactés",
      value: "+4K",
      color: "bg-blue-500",
      bgColor: "bg-blue-50/30"
    },
    {
      icon: GraduationCap,
      title: "Élèves contactés",
      value: "+213",
      color: "bg-emerald-500",
      bgColor: "bg-emerald-50/30"
    },
    {
      icon: Heart,
      title: "Parents intéressés",
      value: "+260",
      color: "bg-teal-500",
      bgColor: "bg-teal-50/30"
    },
    {
      icon: FileCheck,
      title: "Parents engagés",
      value: "53",
      color: "bg-green-500",
      bgColor: "bg-green-50/30"
    },
    {
      icon: Calendar,
      title: "Rendez-vous bureau",
      value: "+163",
      color: "bg-cyan-500",
      bgColor: "bg-cyan-50/30"
    },
    {
      icon: MapPin,
      title: "Étudiants en Chine",
      value: "+15",
      color: "bg-blue-600",
      bgColor: "bg-blue-50/40"
    },
    {
      icon: Clock,
      title: "Procédures en cours",
      value: "07",
      color: "bg-emerald-600",
      bgColor: "bg-emerald-50/40"
    }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <FloatingShape 
          className="top-20 left-20 w-32 h-32 bg-blue-100/40 rounded-full blur-xl" 
          delay={0} 
        />
        <FloatingShape 
          className="top-40 right-32 w-24 h-24 bg-emerald-100/40 rounded-full blur-xl" 
          delay={1} 
        />
        <FloatingShape 
          className="bottom-32 left-40 w-28 h-28 bg-teal-100/40 rounded-full blur-xl" 
          delay={2} 
        />
        <FloatingShape 
          className="top-1/2 right-20 w-20 h-20 bg-green-100/40 rounded-full blur-xl" 
          delay={1.5} 
        />
      </div>

      <div className="relative z-10 p-8 md:p-16">
        <div className="max-w-7xl mx-auto">
          {/* Clean Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full mb-8 shadow-lg">
              <Sparkles className="text-white w-10 h-10" />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light text-gray-800 mb-6 tracking-tight">
              Statistiques
              <span className="block text-4xl md:text-5xl bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent font-normal mt-2">
                2024/2025
              </span>
            </h1>
            
            <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
              Tableau de bord des performances académiques
            </p>
            
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto mt-8"></div>
          </div>

          {/* Clean Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                title={stat.title}
                value={stat.value}
                color={stat.color}
                bgColor={stat.bgColor}
                delay={index}
              />
            ))}
          </div>

          {/* Minimalist Summary */}
          <div className="bg-gray-50/50 rounded-3xl p-12 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-center mb-12">
              <TrendingUp className="text-emerald-500 w-8 h-8 mr-4" />
              <h2 className="text-3xl md:text-4xl font-light text-gray-800">
                Résumé des performances
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 group-hover:shadow-md transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-light text-blue-600 mb-3">4.2K+</div>
                  <p className="text-gray-600 font-medium">Contacts totaux</p>
                  <div className="w-12 h-0.5 bg-blue-500 mx-auto mt-4"></div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 group-hover:shadow-md transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-light text-emerald-600 mb-3">20.4%</div>
                  <p className="text-gray-600 font-medium">Taux de conversion</p>
                  <div className="w-12 h-0.5 bg-emerald-500 mx-auto mt-4"></div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 group-hover:shadow-md transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-light text-teal-600 mb-3">97%</div>
                  <p className="text-gray-600 font-medium">Taux de réussite</p>
                  <div className="w-12 h-0.5 bg-teal-500 mx-auto mt-4"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Simple Footer */}
          <div className="text-center mt-16">
            <p className="text-gray-400 font-light">
              Données en temps réel • Année académique 2024/2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}