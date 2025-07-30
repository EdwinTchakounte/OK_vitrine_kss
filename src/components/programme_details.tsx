import { ArrowLeft } from "lucide-react";

  const ProgramDetail = ({ program }) => (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <button 
            onClick={() => setSelectedProgram(null)}
            className="flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour aux programmes
          </button>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
              <program.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">{program.title}</h1>
              <p className="text-blue-100 text-lg">{program.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Éligibilité */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">Critères d'éligibilité</h2>
            </div>
            <ul className="space-y-3">
              {program.eligibility.map((criterion, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{criterion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Couverture */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="w-6 h-6 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Couverture & Avantages</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">{program.coverage}</p>
          </div>

          {/* Calendrier */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-6 h-6 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">Calendrier</h2>
            </div>
            <ul className="space-y-3">
              {program.dates.map((date, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 border border-blue-100">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Prêt à candidater ?</h3>
              <p className="text-gray-600 mb-4">Contactez notre équipe pour commencer votre dossier</p>
              <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-green-700 transition-all flex items-center space-x-2 mx-auto">
                <span>Commencer ma candidature</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );