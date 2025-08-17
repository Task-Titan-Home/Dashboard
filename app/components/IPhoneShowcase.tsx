import React from 'react';
import ProfessionalIPhone from './ProfessionalIPhone';

interface IPhoneShowcaseProps {
  title?: string;
  subtitle?: string;
  showFeatures?: boolean;
  className?: string;
}

const IPhoneShowcase: React.FC<IPhoneShowcaseProps> = ({
  title = "Professional Mobile Interface",
  subtitle = "Experience seamless incident management on mobile devices",
  showFeatures = true,
  className = ""
}) => {
  return (
    <section className={`py-20 px-4 sm:px-6 lg:px-8 bg-black ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* iPhone Component Container */}
        <div className="flex justify-center mb-16 min-h-[900px] items-center">
          <ProfessionalIPhone />
        </div>

        {/* Features Grid */}
        {showFeatures && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-red-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Incident Tracking</h3>
              <p className="text-gray-400 text-sm">
                Real-time monitoring and incident status updates with automated notifications
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-teal-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Status Monitoring</h3>
              <p className="text-gray-400 text-sm">
                Visual system health indicators with progress tracking and severity levels
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Team Communication</h3>
              <p className="text-gray-400 text-sm">
                Integrated chat and collaboration tools for rapid incident response
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-gray-700 transition-colors">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Smart Analytics</h3>
              <p className="text-gray-400 text-sm">
                Detailed incident reports and performance metrics for continuous improvement
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default IPhoneShowcase;
