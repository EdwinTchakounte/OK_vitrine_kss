import React, { useState } from 'react';
import {
  Award,
  Star,
  Trophy,
  Users,
  MessageCircle,
  BookOpen,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  Smartphone,
} from 'lucide-react';

const FormationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'infos' | 'contenu' | 'avantages'>('infos');

  const contenusBonus = [
    {
      title: "Développement Mobile Flutter",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Créer des applications Android & iOS avec Flutter.",
    },
    {
      title: "Développement Web Full‑Stack",
      icon: <Globe className="w-8 h-8" />,
      description: "Construire des applications web complètes modernes.",
    },
    {
      title: "Cybersécurité & Audit",
      icon: <Shield className="w-8 h-8" />,
      description: "Protéger et auditer les systèmes informatiques.",
    },
    {
      title: "Design Graphique Professionnel",
      icon: <Award className="w-8 h-8" />,
      description: "Créer des visuels pour applications web & mobiles.",
    },
  ];

  const avantagesBonus = [
    {
      icon: <Star className="w-12 h-12 text-yellow-500" />,
      title: "Compétences recherchées",
      description: "Des compétences prisées sur le marché technologique.",
    },
    {
      icon: <Trophy className="w-12 h-12 text-green-500" />,
      title: "Préparation au marché du travail",
      description: "Être mieux armé(e) pour votre prochaine carrière.",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Soutien personnalisé",
      description: "Accompagnement par nos experts durant la formation.",
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-500" />,
      title: "Certification",
      description: "Certification reconnue pour chaque module validé.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50" id="bonus-ksies">
      {/* Hero Section */}
      <div className="p-[2px] rounded-2xl bg-gradient-to-br from-blue-600 to-green-600 m-4">
        <div className="max-w-6xl mx-auto px-6 py-16 text-white">
          <h1 className="text-5xl font-bold mb-6">
            Bonus de formation intégrée en technologie  pour <span className="text-yellow-300">étudiant KSIES</span>
          </h1>
          <p className="text-xl mb-4 opacity-90">
            Dans le but de mieux préparer nos étudiants, nous sommes ravis de vous annoncer qu’en tant qu’étudiant KSIES, vous bénéficiez d’un programme bonus pour développer vos compétences technologiques.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex space-x-8">
            {[
              { id: 'infos', label: 'Qu’est-ce ?' },
              { id: 'contenu', label: 'Contenu' },
              { id: 'avantages', label: 'Avantages' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-4 px-2 border-b-2 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {activeTab === 'infos' && (
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Qu’est-ce que ce bonus ?</h2>
            <p className="text-xl text-gray-600">
              Le bonus de formation intégrée en technologie est un programme complémentaire pour :
              <ul className="list-disc pl-6 mt-4 text-gray-600">
                <li>Développer vos compétences techniques (mobile, web, cybersécurité, design).</li>
                <li>Accéder à un accompagnement personnalisé et des modules certifiants.</li>
                <li>Mieux vous positionner sur le marché du travail.</li>
              </ul>
            </p>
          </div>
        )}

        {activeTab === 'contenu' && (
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Contenu du bonus</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {contenusBonus.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center mb-4 gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'avantages' && (
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Avantages exclusifs KSIES</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {avantagesBonus.map((adv, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="mb-6 flex justify-center">
                    {adv.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{adv.title}</h3>
                  <p className="text-gray-600">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-center py-12">
        <h3 className="text-3xl font-bold mb-4">Exclusif aux étudiants KSIES</h3>
        <p className="text-xl mb-6">Cliquez ci‑dessous pour accéder à votre bonus et commencer votre formation.</p>
        <a
          href="mailto:contact@ksies.com"
          className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-colors gap-2"
        >
          <MessageCircle className="w-5 h-5" /> Contacter le support
        </a>
      </div>
    </div>
  );
};

export default FormationPage;
