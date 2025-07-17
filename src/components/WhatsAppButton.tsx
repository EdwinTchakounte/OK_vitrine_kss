import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/237693461841"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <MessageCircle className="w-6 h-6" />
        <span className={`font-medium transition-all duration-200 ${
          isHovered ? 'opacity-100 w-auto' : 'opacity-0 w-0'
        } overflow-hidden whitespace-nowrap`}>
          WhatsApp
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;