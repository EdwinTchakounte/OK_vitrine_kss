import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';


const Footer: React.FC = () => {


  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                <img src="/images/logo.png" alt="Description de l'image" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Khrist'stephen Saba</h3>
                <p className="text-sm text-gray-400">International Education</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Votre partenaire de confiance pour les études internationales. 
              Nous accompagnons les étudiants vers l'excellence académique mondiale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors">Programmes</a></li>
              <li><a href="#steps" className="text-gray-400 hover:text-white transition-colors">Processus</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Témoignages</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Programmes</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-gray-400">📋Bourses D'études</span></li>
              <li><span className="text-gray-400">📚Programmes D'études</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Murcas Building, Akwa Douala, Cameroon</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-400">+237 693 461 841</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-400">+237 651 797 376</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-red-400 flex-shrink-0" />
                <span className="text-gray-400">contact@ksies-scholarships.net</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2024 Khrist'stephen Saba International Education Services. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;