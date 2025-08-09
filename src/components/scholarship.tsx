import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Calendar, Users, FileText, Clock, Award, Globe, User, CheckCircle } from 'lucide-react';

export const ScholarshipDisplay = ({ scholarshipData }) => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionKey) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionKey]: !prev[sectionKey]
    }));
  };

  const Section = ({ title, children, icon: Icon, sectionKey, defaultExpanded = false }) => {
    const isExpanded = expandedSections[sectionKey] ?? defaultExpanded;
    
    return (
      <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-200"
        >
          <div className="flex items-center space-x-3">
            {Icon && <Icon className="h-5 w-5 text-blue-600" />}
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          </div>
          {isExpanded ? 
            <ChevronDown className="h-5 w-5 text-gray-600" /> : 
            <ChevronRight className="h-5 w-5 text-gray-600" />
          }
        </button>
        {isExpanded && (
          <div className="p-6 bg-white">
            {children}
          </div>
        )}
      </div>
    );
  };

  const renderList = (items, ordered = false) => {
    if (!items || !Array.isArray(items)) return null;
    
    const ListComponent = ordered ? 'ol' : 'ul';
    const listClassName = ordered ? "list-decimal list-inside space-y-2" : "space-y-2";
    
    return (
      <ListComponent className={listClassName}>
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-2">
            {!ordered && <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />}
            <span className="text-gray-700 leading-relaxed">{item}</span>
          </li>
        ))}
      </ListComponent>
    );
  };

  const ScholarshipCard = ({ type, duration, requirements, priority }) => (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4 mb-4">
      <h4 className="font-semibold text-amber-800 mb-2 flex items-center">
        <Award className="h-4 w-4 mr-2" />
        {type}
      </h4>
      <div className="space-y-2 text-sm">
        <p className="text-gray-700"><strong>Durée:</strong> {duration}</p>
        <p className="text-gray-700"><strong>Exigences:</strong> {requirements}</p>
        {priority && (
          <div className="bg-blue-100 border border-blue-200 rounded p-2 mt-2">
            <p className="text-blue-800 text-xs"><strong>Priorité:</strong> {priority}</p>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Header */}
      {/* <div className="bg-gradient-to-r  to-indigo-700 text-black p-6">
        <h1 className="text-2xl font-bold mb-2 flex items-center">
          <Globe className="h-6 w-6 mr-3" />
          {scholarshipData.title}
        </h1>
        <p className="text-black-300 leading-relaxed">{scholarshipData.description}</p>
      </div> */}

      <div className="p-6">
        {/* Critères d'éligibilité */}
        <Section 
          title="Critères d'éligibilité" 
          icon={User} 
          sectionKey="eligibility"
          defaultExpanded={true}
        >
          {renderList(scholarshipData.eligibility)}
        </Section>

        {/* Types de bourses */}
        <Section 
          title="Types de bourses et qualifications" 
          icon={Award} 
          sectionKey="scholarshipTypes"
        >
          <div className="space-y-4">
            {scholarshipData.scholarshipTypes?.map((scholarship, index) => (
              <ScholarshipCard key={index} {...scholarship} />
            ))}
          </div>
        </Section>

        {/* Couverture */}
        <Section 
          title="Couverture de la bourse" 
          icon={CheckCircle} 
          sectionKey="coverage"
        >
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-gray-700 mb-3">{scholarshipData.coverage?.description}</p>
            {scholarshipData.coverage?.details && renderList(scholarshipData.coverage.details)}
            {scholarshipData.coverage?.contactLink && (
              <p className="text-sm text-blue-600 mt-3">
                Pour plus de détails: <a href={scholarshipData.coverage.contactLink} className="underline hover:text-blue-800">Voir le site web</a>
              </p>
            )}
          </div>
        </Section>

        {/* Dates importantes */}
        <Section 
          title="Dates importantes" 
          icon={Calendar} 
          sectionKey="dates"
        >
          <div className="space-y-3">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">Période de candidature</h4>
              <p className="text-gray-700 mb-3">{scholarshipData.applicationDates?.openingMessage}</p>
              <div className="space-y-2">
                {scholarshipData.applicationDates?.deadlines?.map((deadline, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-yellow-600" />
                    <span className="text-gray-700">{deadline}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Procédure de candidature */}
        <Section 
          title="Procédure de candidature" 
          icon={FileText} 
          sectionKey="applicationProcedure"
        >
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-gray-700 mb-3">{scholarshipData.applicationProcedure?.description}</p>
            {scholarshipData.applicationProcedure?.contactLink && (
              <a 
                href={scholarshipData.applicationProcedure.contactLink} 
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FileText className="h-4 w-4 mr-2" />
                Postuler maintenant
              </a>
            )}
          </div>
        </Section>

        {/* Documents requis */}
        <Section 
          title="Documents requis" 
          icon={FileText} 
          sectionKey="documents"
        >
          <div className="space-y-6">
            {scholarshipData.documents?.general && (
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Pour tous les candidats:</h4>
                {renderList(scholarshipData.documents.general)}
              </div>
            )}
            
            {scholarshipData.documents?.masters && (
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800 mb-3">
                  Pour les candidats au Master en enseignement international de la langue chinoise:
                </h4>
                {renderList(scholarshipData.documents.masters, true)}
              </div>
            )}
          </div>
        </Section>

        {/* Politiques spéciales */}
        {scholarshipData.specialPolicies && (
          <Section 
            title="Politiques spéciales" 
            icon={Users} 
            sectionKey="specialPolicies"
          >
            <div className="space-y-4">
              {Object.entries(scholarshipData.specialPolicies).map(([key, policy]) => (
                <div key={key} className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">{policy.title}</h4>
                  <p className="text-gray-700">{policy.description}</p>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Informations additionnelles */}
        {scholarshipData.additionalInfo && (
          <Section 
            title="Informations additionnelles" 
            icon={FileText} 
            sectionKey="additionalInfo"
          >
            {renderList(scholarshipData.additionalInfo)}
          </Section>
        )}

        {/* Contact */}
        {scholarshipData.contact && (
          <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-2">Contact</h3>
            <p className="text-gray-700">{scholarshipData.contact}</p>
          </div>
        )}
      </div>
    </div>
  );
};

