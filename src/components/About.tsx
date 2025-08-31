import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { translations } = useLanguage();

  const features = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: 'Mission',
      content: translations.about.mission
    },
    {
      icon: <Eye className="w-8 h-8 text-green-500" />,
      title: 'Vision',
      content: translations.about.vision
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Valeurs',
      content: translations.about.values
    }
  ];

  return (
    <section id="about" className="relative py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/30 overflow-hidden">
      {/* Enhanced Background Elements - School Tools & Education */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Luminous Books */}
        <div className="absolute top-20 left-16 opacity-10">
          <svg width="50" height="40" viewBox="0 0 80 60" className="text-blue-400 animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}>
            <rect x="10" y="15" width="50" height="40" fill="currentColor" opacity="0.7" rx="3"/>
            <rect x="15" y="20" width="40" height="30" fill="currentColor" opacity="0.5" rx="2"/>
            <rect x="20" y="25" width="30" height="20" fill="currentColor" opacity="0.8" rx="1"/>
            <circle cx="25" cy="35" r="8" fill="#3B82F6" opacity="0.9"/>
            <circle cx="25" cy="35" r="4" fill="#1D4ED8" opacity="1"/>
            <path d="M20,35 L30,35 M22,30 L28,30 M22,40 L28,40" stroke="#2563EB" strokeWidth="1" opacity="0.8"/>
          </svg>
        </div>
        
        {/* Luminous Pencil */}
        <div className="absolute top-60 right-24 opacity-10">
          <svg width="45" height="45" viewBox="0 0 70 70" className="text-green-400 animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}>
            <rect x="10" y="30" width="50" height="8" fill="currentColor" opacity="0.8" rx="4"/>
            <polygon points="60,30 70,34 60,38" fill="#10B981" opacity="0.9"/>
            <rect x="10" y="32" width="8" height="4" fill="#059669" opacity="1"/>
            <circle cx="35" cy="34" r="12" fill="#22C55E" opacity="0.7"/>
            <circle cx="35" cy="34" r="6" fill="#16A34A" opacity="0.9"/>
            <path d="M15,34 L55,34" stroke="#15803D" strokeWidth="2" opacity="0.8"/>
          </svg>
        </div>

        {/* Luminous Calculator */}
        <div className="absolute bottom-32 left-1/4 opacity-10">
          <svg width="40" height="55" viewBox="0 0 60 80" className="text-blue-400 animate-pulse" style={{ animationDelay: '1s', animationDuration: '6s' }}>
            <rect x="5" y="5" width="50" height="70" fill="currentColor" opacity="0.7" rx="8"/>
            <rect x="10" y="10" width="40" height="12" fill="#E0E7FF" opacity="0.9" rx="2"/>
            <circle cx="20" cy="35" r="4" fill="#60A5FA" opacity="0.8"/>
            <circle cx="30" cy="35" r="4" fill="#60A5FA" opacity="0.8"/>
            <circle cx="40" cy="35" r="4" fill="#60A5FA" opacity="0.8"/>
            <circle cx="20" cy="50" r="4" fill="#60A5FA" opacity="0.8"/>
            <circle cx="30" cy="50" r="4" fill="#60A5FA" opacity="0.8"/>
            <circle cx="40" cy="50" r="4" fill="#60A5FA" opacity="0.8"/>
            <circle cx="30" cy="65" r="8" fill="#3B82F6" opacity="1"/>
            <circle cx="30" cy="65" r="4" fill="#1D4ED8" opacity="1"/>
          </svg>
        </div>

        {/* Luminous Ruler */}
        <div className="absolute top-32 right-1/3 opacity-10">
          <svg width="65" height="15" viewBox="0 0 100 20" className="text-green-400 animate-pulse" style={{ animationDelay: '0s', animationDuration: '7s' }}>
            <rect x="0" y="5" width="100" height="10" fill="currentColor" opacity="0.7" rx="2"/>
            <path d="M10,5 L10,15 M20,7 L20,13 M30,5 L30,15 M40,7 L40,13 M50,5 L50,15 M60,7 L60,13 M70,5 L70,15 M80,7 L80,13 M90,5 L90,15" stroke="#22C55E" strokeWidth="1" opacity="0.9"/>
            <circle cx="50" cy="10" r="8" fill="#10B981" opacity="0.6"/>
            <circle cx="50" cy="10" r="4" fill="#059669" opacity="0.8"/>
          </svg>
        </div>

        {/* Luminous Globe */}
        <div className="absolute bottom-40 right-1/5 opacity-10">
          <svg width="50" height="50" viewBox="0 0 80 80" className="text-blue-400 animate-pulse" style={{ animationDelay: '3s', animationDuration: '8s' }}>
            <circle cx="40" cy="40" r="35" fill="currentColor" opacity="0.6"/>
            <circle cx="40" cy="40" r="30" fill="#3B82F6" opacity="0.7"/>
            <path d="M10,40 Q40,20 70,40 Q40,60 10,40" fill="#60A5FA" opacity="0.8"/>
            <path d="M40,5 Q50,40 40,75 Q30,40 40,5" fill="#2563EB" opacity="0.8"/>
            <circle cx="40" cy="40" r="20" fill="#DBEAFE" opacity="0.4"/>
            <circle cx="40" cy="40" r="10" fill="#93C5FD" opacity="0.6"/>
          </svg>
        </div>

        {/* Luminous School Bag */}
        <div className="absolute top-1/2 left-1/8 opacity-10">
          <svg width="45" height="60" viewBox="0 0 70 90" className="text-green-400 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '9s' }}>
            <rect x="10" y="25" width="50" height="55" fill="currentColor" opacity="0.7" rx="8"/>
            <rect x="15" y="15" width="40" height="15" fill="#34D399" opacity="0.8" rx="4"/>
            <circle cx="35" cy="50" r="15" fill="#10B981" opacity="0.6"/>
            <circle cx="35" cy="50" r="8" fill="#059669" opacity="0.8"/>
            <rect x="20" y="35" width="30" height="3" fill="#3B82F6" opacity="0.9" rx="1"/>
            <rect x="25" y="45" width="20" height="3" fill="#3B82F6" opacity="0.9" rx="1"/>
            <rect x="20" y="55" width="30" height="3" fill="#3B82F6" opacity="0.9" rx="1"/>
          </svg>
        </div>

        {/* Luminous Compass */}
        <div className="absolute bottom-48 left-1/3 opacity-10">
          <svg width="40" height="40" viewBox="0 0 60 60" className="text-blue-400 animate-pulse" style={{ animationDelay: '4s', animationDuration: '7s' }}>
            <circle cx="30" cy="30" r="25" fill="currentColor" opacity="0.6"/>
            <circle cx="30" cy="30" r="20" fill="#3B82F6" opacity="0.7"/>
            <circle cx="30" cy="30" r="15" fill="#1D4ED8" opacity="0.8"/>
            <path d="M30,10 L35,25 L30,30 L25,25 Z" fill="#10B981" opacity="0.9"/>
            <path d="M30,50 L35,35 L30,30 L25,35 Z" fill="#059669" opacity="0.9"/>
            <circle cx="30" cy="30" r="5" fill="#1F2937" opacity="1"/>
            <circle cx="30" cy="30" r="2" fill="#F3F4F6" opacity="1"/>
          </svg>
        </div>

        {/* Luminous Apple */}
        <div className="absolute top-40 left-1/5 opacity-10">
          <svg width="35" height="42" viewBox="0 0 50 60" className="text-green-500 animate-pulse" style={{ animationDelay: '2.5s', animationDuration: '6s' }}>
            <path d="M25,15 Q35,10 40,20 Q45,40 25,55 Q5,40 10,20 Q15,10 25,15" fill="currentColor" opacity="0.8"/>
            <path d="M25,8 Q22,5 20,8 Q22,12 25,10" fill="#10B981" opacity="0.9"/>
            <circle cx="25" cy="35" r="15" fill="#22C55E" opacity="0.7"/>
            <circle cx="25" cy="35" r="8" fill="#16A34A" opacity="0.9"/>
            <ellipse cx="20" cy="25" rx="4" ry="6" fill="#3B82F6" opacity="0.6"/>
          </svg>
        </div>

        {/* Traditional Chinese Architecture */}
        <div className="absolute top-32 right-1/4 opacity-8">
          <svg width="60" height="45" viewBox="0 0 90 70" className="text-blue-300 animate-pulse" style={{ animationDelay: '0s', animationDuration: '7s' }}>
            <polygon points="45,8 15,28 75,28" fill="currentColor" opacity="0.7"/>
            <rect x="20" y="28" width="50" height="35" fill="currentColor" opacity="0.5"/>
            <rect x="30" y="38" width="8" height="18" fill="currentColor" opacity="0.8"/>
            <rect x="52" y="38" width="8" height="18" fill="currentColor" opacity="0.8"/>
            <polygon points="45,12 20,26 70,26" fill="currentColor" opacity="0.4"/>
            <rect x="35" y="42" width="20" height="12" fill="currentColor" opacity="0.6"/>
            <circle cx="45" cy="48" r="3" fill="currentColor" opacity="0.9"/>
          </svg>
        </div>

        {/* Chinese Cultural Elements */}
        <div className="absolute top-40 right-1/6 opacity-8">
          <svg width="45" height="45" viewBox="0 0 70 70" className="text-green-400 animate-pulse" style={{ animationDelay: '2.5s', animationDuration: '6s' }}>
            <circle cx="35" cy="35" r="30" fill="currentColor" opacity="0.3"/>
            <circle cx="35" cy="35" r="20" fill="currentColor" opacity="0.5"/>
            <circle cx="35" cy="35" r="10" fill="currentColor" opacity="0.7"/>
            <path d="M35,15 Q45,25 35,35 Q25,25 35,15" fill="currentColor" opacity="0.6"/>
            <path d="M35,35 Q45,45 35,55 Q25,45 35,35" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>

        {/* Flowing Chinese Characters */}
        <div className="absolute top-24 right-1/5 text-5xl text-blue-200 opacity-8 animate-pulse select-none font-serif">学</div>
        <div className="absolute bottom-48 left-1/4 text-4xl text-green-200 opacity-8 animate-pulse select-none font-serif" style={{ animationDelay: '1s' }}>教</div>
        <div className="absolute top-1/2 right-1/8 text-4xl text-blue-200 opacity-8 animate-pulse select-none font-serif" style={{ animationDelay: '2s' }}>育</div>
        <div className="absolute top-1/3 left-1/6 text-3xl text-green-300 opacity-8 animate-pulse select-none font-serif" style={{ animationDelay: '3s' }}>智</div>
        <div className="absolute bottom-1/3 right-1/4 text-4xl text-blue-300 opacity-8 animate-pulse select-none font-serif" style={{ animationDelay: '4s' }}>慧</div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-1/4 left-1/8 w-24 h-24 border-2 border-blue-200 rounded-full opacity-10 animate-spin" style={{ animationDuration: '30s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border-2 border-green-200 rounded-full opacity-10 animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}></div>
        
        {/* Flowing Lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,25 Q25,5 50,25 T100,25" stroke="rgba(59, 130, 246, 0.08)" strokeWidth="0.8" fill="none">
            <animate attributeName="d" dur="12s" repeatCount="indefinite" values="M0,25 Q25,5 50,25 T100,25;M0,30 Q25,10 50,30 T100,30;M0,25 Q25,5 50,25 T100,25" />
          </path>
          <path d="M0,75 Q25,95 50,75 T100,75" stroke="rgba(34, 197, 94, 0.08)" strokeWidth="0.8" fill="none">
            <animate attributeName="d" dur="15s" repeatCount="indefinite" values="M0,75 Q25,95 50,75 T100,75;M0,70 Q25,90 50,70 T100,70;M0,75 Q25,95 50,75 T100,75" />
          </path>
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 blur-3xl rounded-full scale-150"></div>
            
            <div className="relative">
              {/* Decorative elements around title */}
              <div className="absolute -top-8 -left-8 w-12 h-12 border-2 border-blue-400 rounded-full opacity-30 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute -top-6 -right-6 w-10 h-10 border-2 border-green-400 rounded-full opacity-30 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-blue-400 rounded-full opacity-30 animate-ping"></div>
              <div className="absolute -bottom-6 -right-6 w-10 h-10 border-2 border-green-400 rounded-full opacity-30 animate-pulse"></div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-blue-700 mb-6 leading-tight relative tracking-tight">
                <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-green-500 bg-clip-text text-transparent">{translations.about.title}</span>
              </h2>
              
              {/* Enhanced decorative underline */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <div className="w-40 h-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-full shadow-lg">
                  <div className="w-full h-full bg-gradient-to-r from-green-600 to-blue-600 rounded-full animate-pulse opacity-80"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-0.5 bg-white rounded-full opacity-70 shadow-inner"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced subtitle */}
          <div className="mt-10">
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Obtenez votre passeport pour la Chine
            </p>
          </div>
        </div>

        {/* Horizontal Post-it Notes Features - Compact */}
        <div className="relative mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="relative group"
                style={{
                  transform: `rotate(${index === 0 ? '1.5deg' : index === 1 ? '-1deg' : '0.5deg'})`,
                  transformOrigin: 'center top'
                }}
              >
                {/* Post-it Note */}
                <div className="relative bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-50 p-6 rounded-lg shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border-l-4 border-yellow-300 min-h-[220px]"
                     style={{
                       background: `linear-gradient(135deg, 
                         #fefefe 0%, 
                         #f8fafc 25%, 
                         #f1f5f9 50%, 
                         #e2e8f0 75%, 
                         #cbd5e1 100%)`,
                       backgroundSize: '100% 100%',
                       filter: 'drop-shadow(4px 4px 12px rgba(0,0,0,0.15))'
                     }}>
                  
                  {/* Green Pin */}
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative">
                      {/* Pin Shadow */}
                      <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-black/20 rounded-full blur-sm"></div>
                      
                      {/* Pin Head with Enhanced Glow */}
                      <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg border-2 border-green-300 relative">
                        <div className="absolute inset-0.5 bg-gradient-to-br from-green-300 to-green-500 rounded-full"></div>
                        <div className="absolute inset-0.5 bg-gradient-to-br from-green-200 to-green-400 rounded-full"></div>
                        <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full opacity-90"></div>
                        {/* Luminous effect */}
                        <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
                      </div>
                      
                      {/* Pin Needle */}
                      <div className="absolute top-2.5 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-gradient-to-b from-gray-400 to-gray-600 shadow-sm"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative pt-4">
                    {/* Icon with Enhanced Glow */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-blue-200/40 group-hover:scale-110 transition-all duration-300 relative">
                        {feature.icon}
                        {/* Luminous ring around icon */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-xl animate-pulse"></div>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-black text-gray-800 mb-3 leading-tight font-serif tracking-tight text-center">
                      {feature.title}
                    </h3>
                    
                    {/* Content */}
                    <p className="text-gray-700 leading-relaxed text-sm lg:text-base font-medium text-center">
                      {feature.content}
                    </p>
                  </div>
                  
                  {/* Enhanced paper texture overlay */}
                  <div className="absolute inset-0 opacity-20 rounded-lg pointer-events-none"
                       style={{
                         backgroundImage: `radial-gradient(circle at 25% 25%, transparent 0%, transparent 2%, rgba(59,130,246,0.1) 2%, rgba(59,130,246,0.1) 4%, transparent 4%), 
                                         radial-gradient(circle at 75% 75%, transparent 0%, transparent 2%, rgba(147,197,253,0.08) 2%, rgba(147,197,253,0.08) 4%, transparent 4%)`,
                         backgroundSize: '15px 15px'
                       }}>
                  </div>
                </div>
                
                {/* Enhanced hover effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/0 to-blue-300/0 group-hover:from-blue-200/10 group-hover:to-blue-300/15 rounded-lg transition-all duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Founder Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-white/90 to-green-600/5 blur-sm"></div>
          <div 
            className="relative bg-gradient-to-br from-white/95 via-blue-50/70 to-green-50/70 backdrop-blur-xl p-8 md:p-10 lg:p-12 overflow-hidden group hover:shadow-3xl transition-all duration-700 rounded-2xl shadow-2xl border border-white/50"
            style={{ clipPath: 'polygon(0% 10%, 90% 0%, 100% 90%, 10% 100%)' }}
          >
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-6">
              <div className="absolute top-6 right-12 text-6xl lg:text-8xl text-blue-600 select-none animate-pulse font-serif" style={{ animationDelay: '1s' }}>智</div>
              <div className="absolute bottom-6 left-12 text-5xl lg:text-7xl text-green-600 select-none animate-pulse font-serif" style={{ animationDelay: '2s' }}>慧</div>
              
              {/* Additional decorative elements */}
              <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-blue-300 rounded-full opacity-15 animate-spin" style={{ animationDuration: '40s' }}></div>
              <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border-2 border-green-300 rounded-full opacity-15 animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}></div>
            </div>
            
            <div className="relative flex flex-col items-center text-center space-y-6">
              {/* Enhanced Avatar */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-green-500/30 blur-2xl rounded-full scale-150"></div>
                <div className="w-32 h-32 lg:w-36 lg:h-36 bg-gradient-to-br from-blue-600 to-green-600 p-1.5 group-hover:rotate-3 transition-transform duration-500 shadow-2xl rounded-2xl"
                     style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}>
                  <div className="w-full h-full bg-gradient-to-br from-white via-blue-50 to-green-50 flex items-center justify-center rounded-2xl" 
                       style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}>
                    <img src="ceo.PNG" alt="" />
                  </div>
                </div>
                {/* Enhanced floating elements */}
                <div className="absolute -top-3 -right-3 w-4 h-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-1/2 -right-4 w-3 h-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-full animate-ping shadow-lg" style={{ animationDelay: '2s' }}></div>
              </div>
              
              {/* Enhanced Content */}
              <div className="flex-grow">
                <h4 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-700 to-green-700 bg-clip-text text-transparent mb-4 leading-tight">
                  {translations.about.founderName}
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed text-base lg:text-lg font-medium max-w-2xl mx-auto">
                  {translations.about.founderTitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;