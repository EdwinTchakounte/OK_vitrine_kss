import React, { useState, useEffect } from 'react';
import { Users, GraduationCap, Heart, FileCheck, Calendar, MapPin, Clock, TrendingUp, Sparkles } from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, color, gradient, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 100);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`relative group ${isVisible ? 'animate-pulse' : 'opacity-0'} transition-all duration-700`}>
      {/* Glow effect */}
      <div className={`absolute -inset-1 ${gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
      
      {/* Main card */}
      <div className="relative bg-black/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
        {/* Floating particles */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-white/20 rounded-full animate-ping"></div>
        <div className="absolute top-4 right-6 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-300"></div>
        
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl ${gradient} shadow-lg`}>
            <Icon size={24} className="text-white" />
          </div>
          <div className="text-right">
            <div className={`text-2xl md:text-3xl font-black ${color} mb-1 tracking-tight`}>
              {value}
            </div>
          </div>
        </div>
        
        <h3 className="text-white/90 font-semibold text-sm md:text-base leading-tight">
          {title}
        </h3>
        
        {/* Progress bar simulation */}
        <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className={`h-full ${gradient} rounded-full animate-pulse`} style={{width: Math.random() * 100 + '%'}}></div>
        </div>
      </div>
    </div>
  );
};

const FloatingElement = ({ children, delay = 0 }) => (
  <div 
    className="animate-bounce"
    style={{
      animationDelay: `${delay}s`,
      animationDuration: '3s'
    }}
  >
    {children}
  </div>
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
      color: "text-blue-400",
      gradient: "bg-gradient-to-r from-blue-500 to-blue-700"
    },
    {
      icon: GraduationCap,
      title: "Élèves contactés",
      value: "+213",
      color: "text-emerald-400",
      gradient: "bg-gradient-to-r from-emerald-500 to-green-600"
    },
    {
      icon: Heart,
      title: "Parents intéressés",
      value: "+260",
      color: "text-teal-400",
      gradient: "bg-gradient-to-r from-teal-500 to-cyan-600"
    },
    {
      icon: FileCheck,
      title: "Parents engagés",
      value: "53",
      color: "text-green-400",
      gradient: "bg-gradient-to-r from-green-500 to-emerald-600"
    },
    {
      icon: Calendar,
      title: "Rendez-vous bureau",
      value: "+163",
      color: "text-cyan-400",
      gradient: "bg-gradient-to-r from-cyan-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Étudiants en Chine",
      value: "+15",
      color: "text-blue-300",
      gradient: "bg-gradient-to-r from-blue-600 to-indigo-700"
    },
    {
      icon: Clock,
      title: "Procédures en cours",
      value: "07",
      color: "text-emerald-300",
      gradient: "bg-gradient-to-r from-emerald-600 to-teal-700"
    }
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingElement delay={0}>
          <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-600 rotate-45"></div>
        </FloatingElement>
        <FloatingElement delay={1}>
          <div className="absolute top-40 right-32 w-6 h-6 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full"></div>
        </FloatingElement>
        <FloatingElement delay={2}>
          <div className="absolute bottom-32 left-40 w-3 h-3 bg-gradient-to-r from-teal-400 to-blue-600 rotate-12"></div>
        </FloatingElement>
        <FloatingElement delay={1.5}>
          <div className="absolute top-60 right-60 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full opacity-70"></div>
        </FloatingElement>
      </div>

      <div className="relative z-10 p-6 md:p-12">
        <div className="max-w-7xl mx-auto">
          {/* Futuristic Header */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-black/50 backdrop-blur-xl rounded-full p-6 border border-white/20">
                <Sparkles className="text-white w-12 h-12" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent mb-4 tracking-tight">
              STATS 2024/25
            </h1>
            
            <div className="relative">
              <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide">
                Performance Dashboard
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
            </div>
          </div>

          {/* Neon Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                title={stat.title}
                value={stat.value}
                color={stat.color}
                gradient={stat.gradient}
                delay={index}
              />
            ))}
          </div>

          {/* Futuristic Summary */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-teal-500 to-emerald-500 rounded-3xl blur-xl opacity-20"></div>
            <div className="relative bg-black/80 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="flex items-center justify-center mb-8">
                <TrendingUp className="text-emerald-400 w-8 h-8 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Performance Analytics
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="relative mb-4">
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative bg-black/50 rounded-2xl p-6 border border-blue-500/20">
                      <div className="text-4xl md:text-5xl font-black text-blue-400 mb-2">4.2K+</div>
                      <p className="text-white/70 font-medium">Total Reach</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-4">
                    <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-green-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative bg-black/50 rounded-2xl p-6 border border-emerald-500/20">
                      <div className="text-4xl md:text-5xl font-black text-emerald-400 mb-2">20.4%</div>
                      <p className="text-white/70 font-medium">Conversion</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-4">
                    <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    <div className="relative bg-black/50 rounded-2xl p-6 border border-teal-500/20">
                      <div className="text-4xl md:text-5xl font-black text-teal-400 mb-2">97%</div>
                      <p className="text-white/70 font-medium">Success Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Neon Footer */}
          <div className="text-center mt-12">
            <p className="text-white/50 font-light tracking-wide">
              ◦ Real-time Data • Live Analytics • 2024/25 Academic Year ◦
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}