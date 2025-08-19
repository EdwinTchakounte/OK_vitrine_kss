import React, { useState, useEffect } from 'react';
import { Users, GraduationCap, Heart, FileCheck, Calendar, MapPin, Clock, TrendingUp, Sparkles, User } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, subtitle, delay = 0, color, bgColor }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 100);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 ease-out`}>
      <div className={`${bgColor} rounded-3xl p-4 sm:p-6 md:p-8 shadow-sm hover:shadow-lg border border-gray-100/50 transition-all duration-300 hover:-translate-y-1 group`}>
        <div className="flex items-center justify-between mb-3 sm:mb-4 md:mb-6">
          <div className={`p-2 sm:p-3 md:p-4 rounded-2xl ${color} bg-opacity-10 group-hover:bg-opacity-15 transition-all duration-300`}>
            <Icon size={20} className={`sm:w-6 sm:h-6 md:w-7 md:h-7 ${color.replace('bg-', 'text-')}`} />
          </div>
          <div className="flex-1">
            <div className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light ${color.replace('bg-', 'text-')} tracking-tight`}>
              {value}
            </div>
            <h3 className="text-slate-600 text-sm font-medium">
              {title}
            </h3>
          </div>
        </div>
        
        {subtitle && (
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

const StatGroup = ({ title, icon: Icon, children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 200);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} transition-all duration-700 ease-out`}>
      <div className="bg-gradient-to-br from-gray-50/80 to-blue-50/30 rounded-2xl p-6 border border-blue-100/30 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-white shadow-sm border border-blue-100/50">
            <Icon size={20} className="text-blue-600" />
          </div>
          <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
            {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function StatsDashboard() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const contactStats = [
    {
      icon: Users,
      title: "Étudiants contactés",
      value: "+4K",
      color: "bg-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100/50"
    },
    {
      icon: GraduationCap,
      title: "Élèves contactés",
      value: "+213",
      color: "bg-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100/50"
    },
    {
      icon: Heart,
      title: "Parents intéressés",
      value: "+260",
      color: "bg-blue-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100/40"
    },
    {
      icon: Calendar,
      title: "Rendez-vous bureau",
      value: "+163",
      color: "bg-green-500",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100/40"
    }
  ];

  const programStats = [
    {
      icon: FileCheck,
      title: "Souscriptions programme",
      value: "53",
      subtitle: "GMP-IUT, CGE-FSEGA",
      color: "bg-green-700",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100/60"
    },
    {
      icon: MapPin,
      title: "Étudiants en Chine",
      value: "+15",
      color: "bg-blue-700",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100/60"
    },
    {
      icon: Clock,
      title: "Procédures en cours",
      value: "07",
      color: "bg-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100/50"
    }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto p-8">
        {/* Header épuré */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl mb-8 shadow-lg shadow-blue-500/25">
            <Sparkles className="text-white w-10 h-10" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-green-600 to-blue-700 bg-clip-text text-transparent mb-4 tracking-tight">
            Statistiques
          </h1>
          
          <div className="text-3xl md:text-4xl font-light text-gray-700 mb-6">
            2024/2025
          </div>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Tableau de bord des performances académiques et suivi des résultats
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {/* Groupe 1: Contact & Engagement */}
          <StatGroup title="Contact & Engagement" icon={Users} delay={0}>
            {contactStats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                title={stat.title}
                value={stat.value}
                subtitle={stat.subtitle}
                color={stat.color}
                bgColor={stat.bgColor}
                delay={index + 1}
              />
            ))}
          </StatGroup>

          {/* Groupe 2: Programmes & Réussites */}
          <StatGroup title="Programmes & Réussites" icon={TrendingUp} delay={1}>
            {programStats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                title={stat.title}
                value={stat.value}
                subtitle={stat.subtitle}
                color={stat.color}
                bgColor={stat.bgColor}
                delay={index + 5}
              />
            ))}
          </StatGroup>

          {/* Résumé simplifié */}
          <div className="bg-gradient-to-r from-blue-50/30 via-green-50/30 to-blue-50/30 rounded-2xl p-8 border border-blue-100/50">
            <div className="flex items-center justify-center mb-8">
              <TrendingUp className="text-green-600 w-6 h-6 mr-3" />
              <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent">
                Résumé global
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center bg-white rounded-xl p-4 border border-blue-100/50 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 lg:p-8 shadow-sm border border-blue-100/50 hover:shadow-md transition-all duration-300">
                  <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-blue-600 mb-1 sm:mb-2 md:mb-3">4.2K+</div>
                  <p className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Contacts totaux</p>
                  <div className="w-6 sm:w-8 md:w-12 h-0.5 bg-blue-500 mx-auto mt-1 sm:mt-2 md:mt-4"></div>
                </div>
              </div>
              <div className="text-center bg-white rounded-xl p-4 border border-green-100/50 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 lg:p-8 shadow-sm border border-green-100/50 hover:shadow-md transition-all duration-300">
                  <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-green-600 mb-1 sm:mb-2 md:mb-3">20.4%</div>
                  <p className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Taux de conversion</p>
                  <div className="w-6 sm:w-8 md:w-12 h-0.5 bg-green-500 mx-auto mt-1 sm:mt-2 md:mt-4"></div>
                </div>
              </div>
              <div className="text-center bg-white rounded-xl p-4 border border-blue-100/50 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 md:p-6 lg:p-8 shadow-sm border border-blue-100/50 hover:shadow-md transition-all duration-300">
                  <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-blue-600 mb-1 sm:mb-2 md:mb-3">97%</div>
                  <p className="text-gray-600 font-medium text-xs sm:text-sm md:text-base">Taux de réussite</p>
                  <div className="w-6 sm:w-8 md:w-12 h-0.5 bg-blue-500 mx-auto mt-1 sm:mt-2 md:mt-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-slate-100">
          <p className="text-gray-400 text-sm">
            Données en temps réel • Année académique 2024/2025
          </p>
        </div>
      </div>
    </div>
  );
}