import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage, languages } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { currentLanguage, translations, switchLanguage } = useLanguage();

  const navigation = [
    { name: translations.nav.home, href: '#home' },
    { name: translations.nav.about, href: '#about' },
    { name: translations.nav.programs, href: '#programs' },
    { name: translations.nav.steps, href: '#steps' },
    { name: translations.nav.gallery, href: '#gallery' },
    { name: translations.nav.testimonials, href: '#testimonials' },
    { name: translations.nav.partners, href: '#partners' },
    { name: translations.nav.faq, href: '#faq' },
    { name: translations.nav.contact, href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">KS</span>
              </div>
              <div className="ml-3 hidden sm:block">
                <h1 className="text-sm font-bold text-gray-900">Khriststephen Saba</h1>
                <p className="text-xs text-gray-600">International Education</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Language Switcher & WhatsApp */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                <span>{currentLanguage.flag}</span>
                <span className="hidden sm:inline">{currentLanguage.name}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => {
                        switchLanguage(language);
                        setIsLanguageOpen(false);
                      }}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-md last:rounded-b-md"
                    >
                      <span>{language.flag}</span>
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              href="https://wa.me/237693461841"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-lg hover:bg-green-600 transition-colors duration-200"
            >
              {translations.hero.whatsapp}
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-2">
              <a
                href="https://wa.me/237693461841"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-3 py-2 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 transition-colors duration-200"
              >
                {translations.hero.whatsapp}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;