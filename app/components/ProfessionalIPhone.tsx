import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Incident {
  id: string;
  title: string;
  status: 'investigating' | 'resolved' | 'monitoring' | 'identified';
  severity: 'major' | 'partial' | 'minor';
  timestamp: string;
  description?: string;
  affected?: string[];
  icon?: 'error' | 'warning' | 'check';
}

const ProfessionalIPhone: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'incidents' | 'maintenance'>('incidents');
  const [currentTime, setCurrentTime] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle mouse wheel scrolling when over the phone
  const handleWheel = (e: React.WheelEvent) => {
    if (scrollContainerRef.current) {
      e.preventDefault();
      e.stopPropagation();
      const scrollAmount = e.deltaY * 0.5; // Smooth scrolling
      scrollContainerRef.current.scrollTop += scrollAmount;
    }
  };

  const incidents: Incident[] = [
    {
      id: '1',
      title: 'https://stardesk.com is down',
      status: 'investigating',
      severity: 'major',
      timestamp: 'less than a minute ago',
      description: 'INVESTIGATING https://stardesk.com is down at the moment. This incident was automatically created by Instatus monitoring.',
      affected: ['Stardesk'],
      icon: 'error'
    },
    {
      id: '2',
      title: 'Database connection timeout',
      status: 'investigating',
      severity: 'major',
      timestamp: '5 minutes ago',
      description: 'Multiple database connection timeouts detected across all regions.',
      affected: ['Database', 'API'],
      icon: 'error'
    },
    {
      id: '3',
      title: 'Payment processing delays',
      status: 'monitoring',
      severity: 'partial',
      timestamp: '30 minutes ago',
      description: 'Some payment transactions are experiencing delays.',
      affected: ['Payments'],
      icon: 'warning'
    },
    {
      id: '4',
      title: 'Issue with API',
      status: 'resolved',
      severity: 'major',
      timestamp: 'about 2 hours ago',
      icon: 'check'
    },
    {
      id: '5',
      title: 'Dashboard Performance Degradation',
      status: 'resolved',
      severity: 'partial',
      timestamp: '1 day ago',
      icon: 'check'
    },
    {
      id: '6',
      title: 'Background Jobs Failing',
      status: 'resolved',
      severity: 'partial',
      timestamp: '2 days ago',
      icon: 'check'
    },
    {
      id: '7',
      title: 'Email service disruption',
      status: 'resolved',
      severity: 'minor',
      timestamp: '3 days ago',
      icon: 'check'
    },
    {
      id: '8',
      title: 'CDN performance issues',
      status: 'resolved',
      severity: 'partial',
      timestamp: '1 week ago',
      icon: 'check'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'investigating':
        return 'text-red-400';
      case 'resolved':
        return 'text-green-400';
      case 'monitoring':
        return 'text-yellow-400';
      case 'identified':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'major':
        return 'MAJOR OUTAGE';
      case 'partial':
        return 'PARTIAL OUTAGE';
      case 'minor':
        return 'MINOR OUTAGE';
      default:
        return 'OUTAGE';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'major':
        return 'text-red-400';
      case 'partial':
        return 'text-yellow-400';
      case 'minor':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  const getStatusIcon = (incident: Incident) => {
    if (incident.status === 'investigating') {
      return (
        <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      );
    } else if (incident.status === 'resolved') {
      return (
        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      );
    }
    return <div className="w-4 h-4 bg-gray-400 rounded-full"></div>;
  };

  return (
    <div className="flex justify-center items-center min-h-[600px] bg-transparent p-8">
      {/* iPhone Frame */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        onWheel={handleWheel}
        style={{ isolation: 'isolate' }}
      >
        {/* iPhone Outer Frame */}
        <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-[60px] p-2 shadow-2xl relative">
          {/* iPhone Screen */}
          <div className="bg-black rounded-[50px] overflow-hidden relative" style={{ width: '375px', height: '812px' }}>
            
            {/* Status Bar */}
            <div className="flex justify-between items-center px-6 pt-3 pb-2 text-white">
              <div className="flex items-center space-x-1">
                <span className="text-sm font-medium">{currentTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                {/* Signal, WiFi, Battery Icons */}
                <div className="flex space-x-1">
                  <div className="w-4 h-3 border border-white rounded-sm">
                    <div className="bg-white w-1 h-1 rounded-full mt-0.5 ml-0.5"></div>
                    <div className="bg-white w-2 h-1 rounded-full mt-0.5 ml-0.5"></div>
                    <div className="bg-white w-3 h-1 rounded-full mt-0.5 ml-0.5"></div>
                  </div>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.24 0 1 1 0 01-1.415-1.414 5 5 0 017.07 0 1 1 0 01-1.415 1.414zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  <div className="w-6 h-3 border border-white rounded-sm relative">
                    <div className="bg-white w-4 h-1.5 rounded-sm mt-0.5 ml-0.5"></div>
                    <div className="w-1 h-1 bg-white rounded-sm absolute -right-0.5 top-1"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="text-white text-sm font-semibold"># incidents</div>
                  <div className="text-gray-400 text-xs">4 members</div>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex px-6 py-3 border-b border-gray-800">
              <button
                onClick={() => setActiveTab('incidents')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === 'incidents'
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                Incidents
              </button>
              <button
                onClick={() => setActiveTab('maintenance')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ml-2 ${
                  activeTab === 'maintenance'
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                Maintenance
              </button>
              <button className="ml-auto bg-teal-600 text-white px-3 py-1.5 rounded-lg text-sm flex items-center space-x-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                <span>Add Incident</span>
              </button>
            </div>

            {/* System Status Bar */}
            <div className="px-6 py-4 bg-gray-900/50">
              <div className="relative">
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-teal-500 via-yellow-500 to-red-500" 
                    style={{ width: '75%' }}
                  />
                </div>
                <div 
                  className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full border-2 border-black"
                  style={{ left: '75%' }}
                />
              </div>
            </div>

            {/* Scrollable Content Container */}
            <div 
              ref={scrollContainerRef}
              className="overflow-y-auto scrollbar-hide bg-black"
              style={{ 
                height: 'calc(812px - 320px)', // Precise calculation for available space
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {/* Table Headers */}
              <div className="grid grid-cols-12 gap-2 px-6 py-2 text-xs text-gray-400 font-medium border-b border-gray-800 sticky top-0 bg-black z-10">
                <div className="col-span-1"></div>
                <div className="col-span-4">INCIDENT</div>
                <div className="col-span-3">DETAILS</div>
                <div className="col-span-3">STARTED</div>
                <div className="col-span-1"></div>
              </div>

              {/* Incidents List */}
              <div className="px-6 py-2 space-y-2">
                <AnimatePresence>
                  {incidents.map((incident, index) => (
                    <motion.div
                      key={incident.id}
                      className="grid grid-cols-12 gap-2 items-center py-2 hover:bg-gray-800/30 rounded-lg transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {/* Status Icon */}
                      <div className="col-span-1 flex justify-center">
                        {getStatusIcon(incident)}
                      </div>

                      {/* Incident Info */}
                      <div className="col-span-4">
                        <div className="text-white text-xs font-medium">
                          {incident.title.length > 25 ? incident.title.substring(0, 25) + '...' : incident.title}
                        </div>
                        <div className={`text-[10px] uppercase font-medium ${getStatusColor(incident.status)}`}>
                          {incident.status}
                        </div>
                      </div>

                      {/* Details */}
                      <div className="col-span-3">
                        <div className={`text-[10px] font-medium ${getSeverityColor(incident.severity)}`}>
                          {incident.severity.toUpperCase()}
                        </div>
                      </div>

                      {/* Timestamp */}
                      <div className="col-span-3">
                        <div className="text-xs text-gray-400">
                          {incident.timestamp}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="col-span-1 flex justify-center">
                        <button className="text-gray-400 hover:text-white">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Instatus Notification Card */}
                <motion.div 
                  className="bg-teal-600/20 border border-teal-500/30 rounded-xl p-4 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                    <span className="text-teal-400 text-sm font-semibold">Instatus</span>
                    <span className="text-gray-400 text-xs">APP</span>
                    <span className="text-gray-400 text-xs ml-auto">{currentTime} PM</span>
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-2">
                    https://stardesk.com is down
                  </h4>
                  <p className="text-gray-300 text-xs mb-3">
                    <span className="text-red-400 font-semibold">INVESTIGATING</span> https://stardesk.com is 
                    down at the moment. This incident was automatically created by Instatus monitoring.
                  </p>
                  <div className="text-xs text-gray-400 mb-3">
                    <strong>Affected:</strong><br />
                    Stardesk
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-gray-700 hover:bg-gray-600 text-white text-xs px-3 py-1.5 rounded-lg transition-colors">
                      View Incident
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white text-xs px-3 py-1.5 rounded-lg transition-colors">
                      Acknowledge
                    </button>
                  </div>
                </motion.div>

                {/* Message Input */}
                <div className="mt-6">
                  <button className="w-full bg-gray-800 hover:bg-gray-700 text-teal-400 text-sm py-3 rounded-xl flex items-center justify-center space-x-2 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                    <span>Message #incidents</span>
                  </button>
                </div>

                {/* Bottom padding for scrolling */}
                <div className="h-6"></div>
              </div>
            </div>

            {/* Bottom Navigation - Fixed positioning */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-around items-center py-4 px-6 border-t border-gray-800 bg-black">
              {[
                { name: 'Home', active: true },
                { name: 'DMs', active: false },
                { name: 'Activity', active: false },
                { name: 'More', active: false }
              ].map((item) => (
                <motion.div 
                  key={item.name} 
                  className="text-center"
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`w-6 h-6 rounded-lg mx-auto mb-1 flex items-center justify-center ${
                    item.active ? 'bg-teal-600' : 'bg-gray-700'
                  }`}>
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                  <span className={`text-xs ${item.active ? 'text-white' : 'text-gray-400'}`}>
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Home Indicator */}
            <div className="flex justify-center pb-2">
              <div className="w-32 h-1 bg-white rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        {/* iPhone Side Buttons */}
        <div className="absolute left-0 top-24 w-1 h-8 bg-gray-700 rounded-r-sm"></div>
        <div className="absolute left-0 top-36 w-1 h-12 bg-gray-700 rounded-r-sm"></div>
        <div className="absolute left-0 top-52 w-1 h-12 bg-gray-700 rounded-r-sm"></div>
        <div className="absolute right-0 top-36 w-1 h-16 bg-gray-700 rounded-l-sm"></div>
      </motion.div>
    </div>
  );
};

export default ProfessionalIPhone;
