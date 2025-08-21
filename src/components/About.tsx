import React from 'react';
import { Target, Eye, Heart, User, Phone } from 'lucide-react';
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
    <section id="about" className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-green-50/30 overflow-hidden">
      {/* Enhanced Background Elements - Chinese Culture & Education */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Graduation Caps */}
        <div className="absolute top-20 left-16 opacity-8">
          <svg width="60" height="50" viewBox="0 0 60 50" className="text-blue-400 animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }}>
            <polygon points="30,5 5,20 55,20" fill="currentColor" opacity="0.6"/>
            <rect x="28" y="20" width="4" height="15" fill="currentColor" opacity="0.8"/>
            <circle cx="32" cy="22" r="2" fill="currentColor" opacity="0.9"/>
            <path d="M32,22 Q40,25 45,30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7"/>
          </svg>
        </div>
        
        <div className="absolute top-60 right-24 opacity-8">
          <svg width="50" height="42" viewBox="0 0 50 42" className="text-green-400 animate-pulse" style={{ animationDelay: '2s', animationDuration: '5s' }}>
            <polygon points="25,4 4,16 46,16" fill="currentColor" opacity="0.6"/>
            <rect x="23" y="16" width="4" height="12" fill="currentColor" opacity="0.8"/>
            <circle cx="27" cy="18" r="2" fill="currentColor" opacity="0.9"/>
            <path d="M27,18 Q35,21 40,26" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7"/>
          </svg>
        </div>

        <div className="absolute bottom-32 left-1/4 opacity-8">
          <svg width="55" height="46" viewBox="0 0 55 46" className="text-blue-300 animate-pulse" style={{ animationDelay: '1s', animationDuration: '6s' }}>
            <polygon points="27,3 3,17 51,17" fill="currentColor" opacity="0.6"/>
            <rect x="25" y="17" width="4" height="14" fill="currentColor" opacity="0.8"/>
            <circle cx="29" cy="19" r="2" fill="currentColor" opacity="0.9"/>
            <path d="M29,19 Q37,22 42,27" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.7"/>
          </svg>
        </div>

        {/* Traditional Chinese Architecture */}
        <div className="absolute top-32 right-1/3 opacity-8">
          <svg width="90" height="70" viewBox="0 0 90 70" className="text-red-300 animate-pulse" style={{ animationDelay: '0s', animationDuration: '7s' }}>
            <polygon points="45,8 15,28 75,28" fill="currentColor" opacity="0.7"/>
            <rect x="20" y="28" width="50" height="35" fill="currentColor" opacity="0.5"/>
            <rect x="30" y="38" width="8" height="18" fill="currentColor" opacity="0.8"/>
            <rect x="52" y="38" width="8" height="18" fill="currentColor" opacity="0.8"/>
            <polygon points="45,12 20,26 70,26" fill="currentColor" opacity="0.4"/>
            <rect x="35" y="42" width="20" height="12" fill="currentColor" opacity="0.6"/>
            <circle cx="45" cy="48" r="3" fill="currentColor" opacity="0.9"/>
          </svg>
        </div>
        
        <div className="absolute bottom-40 left-1/6 opacity-8">
          <svg width="75" height="58" viewBox="0 0 75 58" className="text-green-300 animate-pulse" style={{ animationDelay: '3s', animationDuration: '8s' }}>
            <polygon points="37,6 12,22 62,22" fill="currentColor" opacity="0.7"/>
            <rect x="17" y="22" width="40" height="28" fill="currentColor" opacity="0.5"/>
            <rect x="25" y="30" width="7" height="15" fill="currentColor" opacity="0.8"/>
            <rect x="43" y="30" width="7" height="15" fill="currentColor" opacity="0.8"/>
            <polygon points="37,10 17,20 57,20" fill="currentColor" opacity="0.4"/>
            <rect x="30" y="34" width="15" height="10" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>

        <div className="absolute top-1/2 left-1/8 opacity-8">
          <svg width="80" height="62" viewBox="0 0 80 62" className="text-blue-400 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '9s' }}>
            <polygon points="40,5 15,24 65,24" fill="currentColor" opacity="0.7"/>
            <rect x="20" y="24" width="40" height="30" fill="currentColor" opacity="0.5"/>
            <rect x="28" y="32" width="8" height="16" fill="currentColor" opacity="0.8"/>
            <rect x="44" y="32" width="8" height="16" fill="currentColor" opacity="0.8"/>
            <polygon points="40,9 20,22 60,22" fill="currentColor" opacity="0.4"/>
            <rect x="32" y="36" width="16" height="12" fill="currentColor" opacity="0.6"/>
            <circle cx="40" cy="42" r="2" fill="currentColor" opacity="0.9"/>
          </svg>
        </div>

        {/* Chinese Cultural Elements */}
        <div className="absolute top-40 right-1/5 opacity-8">
          <svg width="70" height="70" viewBox="0 0 70 70" className="text-red-400 animate-pulse" style={{ animationDelay: '2.5s', animationDuration: '6s' }}>
            <circle cx="35" cy="35" r="30" fill="currentColor" opacity="0.3"/>
            <circle cx="35" cy="35" r="20" fill="currentColor" opacity="0.5"/>
            <circle cx="35" cy="35" r="10" fill="currentColor" opacity="0.7"/>
            <path d="M35,15 Q45,25 35,35 Q25,25 35,15" fill="currentColor" opacity="0.6"/>
            <path d="M35,35 Q45,45 35,55 Q25,45 35,35" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>

        {/* Flowing Chinese Characters - Larger and More Prominent */}
        <div className="absolute top-24 right-1/4 text-8xl text-blue-200 opacity-12 animate-pulse select-none font-serif">学</div>
        <div className="absolute bottom-48 left-1/3 text-7xl text-green-200 opacity-12 animate-pulse select-none font-serif" style={{ animationDelay: '1s' }}>教</div>
        <div className="absolute top-1/2 right-1/6 text-6xl text-red-200 opacity-12 animate-pulse select-none font-serif" style={{ animationDelay: '2s' }}>育</div>
        <div className="absolute top-1/3 left-1/5 text-5xl text-blue-300 opacity-12 animate-pulse select-none font-serif" style={{ animationDelay: '3s' }}>智</div>
        <div className="absolute bottom-1/3 right-1/3 text-7xl text-green-300 opacity-12 animate-pulse select-none font-serif" style={{ animationDelay: '4s' }}>慧</div>
        
        {/* Geometric Patterns */}
        <div className="absolute top-1/4 left-1/6 w-40 h-40 border-2 border-blue-200 rounded-full opacity-15 animate-spin" style={{ animationDuration: '30s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 border-2 border-green-200 rounded-full opacity-15 animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}></div>
        
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
        {/* Enhanced Header - More Prominent */}
        <div className="text-center mb-24">
          <div className="relative inline-block">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 blur-3xl rounded-full scale-150"></div>
            
            <div className="relative">
              {/* Decorative elements around title */}
              <div className="absolute -top-12 -left-12 w-20 h-20 border-3 border-blue-400 rounded-full opacity-40 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute -top-8 -right-8 w-16 h-16 border-3 border-green-400 rounded-full opacity-40 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border-2 border-purple-400 rounded-full opacity-40 animate-ping"></div>
              <div className="absolute -bottom-8 -right-10 w-14 h-14 border-2 border-blue-400 rounded-full opacity-40 animate-pulse"></div>
              
              <h2 className="text-4xl md:text-8xl lg:text-4xl font-black text-blue-700 mb-8 leading-tight relative tracking-tight">
                <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-green-500 bg-clip-text text-transparent">{translations.about.title}</span>
                {/* Multiple glow layers for depth */}
              
                
              </h2>
              
              {/* Enhanced decorative underline with multiple layers */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-60 h-3 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-full shadow-lg">
                  <div className="w-full h-full bg-gradient-to-r from-green-600 via-purple-600 to-blue-600 rounded-full animate-pulse opacity-80"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-1 bg-white rounded-full opacity-70 shadow-inner"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-0.5 bg-gradient-to-r from-blue-200 to-green-200 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced subtitle */}
          <div className="mt-16">
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Obtenez votre passeport pour la Chine
            </p>
          </div>
        </div>

        {/* Main Content - Professional Layout */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Enhanced Image with sophisticated styling */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-green-600/20 blur-2xl rounded-full scale-110 group-hover:scale-125 transition-transform duration-700"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-700" 
                 style={{ clipPath: 'polygon(0% 0%, 85% 0%, 100% 15%, 100% 100%, 15% 100%, 0% 85%)' }}>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Education"
                className="w-full h-96 lg:h-[28rem] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-green-900/10"></div>
            </div>
            {/* Floating decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full opacity-80 animate-bounce shadow-xl" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full opacity-80 animate-bounce shadow-xl" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full opacity-70 animate-ping shadow-lg" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* Post-it Notes Features */}
          <div className="relative">
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="relative group"
                  style={{
                    transform: `rotate(${index % 2 === 0 ? '2deg' : '-1.5deg'})`,
                    transformOrigin: 'center top'
                  }}
                >
                  {/* Post-it Note */}
                  <div className="relative bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-50 p-8 rounded-lg shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 border-l-4 border-yellow-300"
                       style={{
                         background: `linear-gradient(135deg, 
                           #fefefe 0%, 
                           #f8fafc 25%, 
                           #f1f5f9 50%, 
                           #e2e8f0 75%, 
                           #cbd5e1 100%)`,
                         backgroundSize: '100% 100%',
                         filter: 'drop-shadow(4px 4px 8px rgba(0,0,0,0.15))'
                       }}>
                    
                    {/* Green Pin */}
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="relative">
                        {/* Pin Shadow */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black/20 rounded-full blur-sm"></div>
                        
                        {/* Pin Head */}
                        <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-lg border-2 border-green-300 relative">
                          <div className="absolute inset-0.5 bg-gradient-to-br from-green-300 to-green-500 rounded-full"></div>
                          <div className="absolute inset-1 bg-gradient-to-br from-green-200 to-green-400 rounded-full"></div>
                          <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full opacity-80"></div>
                        </div>
                        
                        {/* Pin Needle */}
                        <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-gradient-to-b from-gray-400 to-gray-600 shadow-sm"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative pt-4">
                      {/* Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-blue-200/40 group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        
                        {/* Subtle pattern */}
                        <div className="text-blue-400/30 text-2xl font-bold select-none">
                          {index === 0 && '📌'}
                          {index === 1 && '👁️'}
                          {index === 2 && '💝'}
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-2xl lg:text-3xl font-black text-gray-800 mb-4 leading-tight font-serif tracking-tight">
                        {feature.title}
                      </h3>
                      
                      {/* Content */}
                      <p className="text-gray-700 leading-relaxed text-base lg:text-lg font-medium">
                        {feature.content}
                      </p>
                    </div>
                    
                    {/* Subtle paper texture overlay */}
                    <div className="absolute inset-0 opacity-20 rounded-lg pointer-events-none"
                         style={{
                           backgroundImage: `radial-gradient(circle at 25% 25%, transparent 0%, transparent 2%, rgba(59,130,246,0.1) 2%, rgba(59,130,246,0.1) 4%, transparent 4%), 
                                           radial-gradient(circle at 75% 75%, transparent 0%, transparent 2%, rgba(147,197,253,0.08) 2%, rgba(147,197,253,0.08) 4%, transparent 4%)`,
                           backgroundSize: '20px 20px'
                         }}>
                    </div>
                  </div>
                  
                  {/* Hover effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200/0 to-blue-300/0 group-hover:from-blue-200/10 group-hover:to-blue-300/15 rounded-lg transition-all duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Founder Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-white/90 to-green-600/5 blur-sm"></div>
          <div 
            className="relative bg-gradient-to-br from-white/95 via-blue-50/70 to-green-50/70 backdrop-blur-xl p-12 md:p-16 lg:p-20 overflow-hidden group hover:shadow-3xl transition-all duration-700 rounded-3xl shadow-2xl border border-white/50"
            style={{ clipPath: 'polygon(0% 10%, 90% 0%, 100% 90%, 10% 100%)' }}
          >
            {/* Enhanced Background Pattern */}
            <div className="absolute inset-0 opacity-6">
              <div className="absolute top-8 right-16 text-9xl lg:text-[12rem] text-blue-600 select-none animate-pulse font-serif" style={{ animationDelay: '1s' }}>智</div>
              <div className="absolute bottom-8 left-16 text-7xl lg:text-[10rem] text-green-600 select-none animate-pulse font-serif" style={{ animationDelay: '2s' }}>慧</div>
              
              {/* Additional decorative elements */}
              <div className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-blue-300 rounded-full opacity-20 animate-spin" style={{ animationDuration: '40s' }}></div>
              <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border-2 border-green-300 rounded-full opacity-20 animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}></div>
            </div>
            
            <div className="relative flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-16">
              {/* Enhanced Avatar */}
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-green-500/30 blur-2xl rounded-full scale-150"></div>
                <div className="w-44 h-44 lg:w-52 lg:h-52 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 p-1.5 group-hover:rotate-3 transition-transform duration-500 shadow-2xl rounded-3xl"
                     style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}>
                  <div className="w-full h-full bg-gradient-to-br from-white via-blue-50 to-green-50 flex items-center justify-center rounded-3xl" 
                       style={{ clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)' }}>
                    <User className="w-24 h-24 lg:w-28 lg:h-28 text-blue-600" />
                  </div>
                </div>
                {/* Enhanced floating elements */}
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-4 -left-4 w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full animate-bounce shadow-lg" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute top-1/2 -right-6 w-4 h-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full animate-ping shadow-lg" style={{ animationDelay: '2s' }}></div>
              </div>
              
              {/* Enhanced Content */}
              <div className="text-center lg:text-left flex-grow">
                <h3 className="text-2xl lg:text-3xl font-black text-gray-800 mb-4 group-hover:text-blue-700 transition-colors leading-tight">
                  {translations.about.founder}
                </h3>
                <h4 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-700 via-purple-700 to-green-700 bg-clip-text text-transparent mb-6 leading-tight">
                  {translations.about.founderName}
                </h4>
                <p className="text-gray-600 mb-10 leading-relaxed text-base lg:text-lg font-medium">
                  {translations.about.founderTitle}
                </p>
                
                {/* More Subtle Contact Info */}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;