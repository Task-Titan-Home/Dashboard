import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TaskItem {
  id: string;
  title: string;
  status: 'in_progress' | 'completed' | 'blocked' | 'review';
  priority: 'high' | 'medium' | 'low';
  due: string;
  description?: string;
  project?: string;
}

const IPhoneFramedInterface: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tasks' | 'projects'>('tasks');
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

  const tasks: TaskItem[] = [
    {
      id: '1',
      title: 'Fix billing webhook failures',
      status: 'in_progress',
      priority: 'high',
      due: 'today 5:00 PM',
      description: 'Investigate Stripe webhook retries and stabilize billing pipeline.',
      project: 'Payments Platform'
    },
    {
      id: '2',
      title: 'API response caching',
      status: 'review',
      priority: 'high',
      due: 'tomorrow',
      project: 'Core API'
    },
    {
      id: '3',
      title: 'Dashboard performance audit',
      status: 'completed',
      priority: 'medium',
      due: '1 day ago',
      project: 'Dashboard'
    },
    {
      id: '4',
      title: 'Background jobs retry policy',
      status: 'completed',
      priority: 'medium',
      due: '2 days ago',
      project: 'Worker Fleet'
    },
    {
      id: '5',
      title: 'User authentication refactor',
      status: 'in_progress',
      priority: 'high',
      due: 'tomorrow 3:00 PM',
      description: 'Migrate from JWT to session-based auth.',
      project: 'Security'
    },
    {
      id: '6',
      title: 'Mobile app navigation redesign',
      status: 'blocked',
      priority: 'medium',
      due: 'next week',
      project: 'Mobile App'
    },
    {
      id: '7',
      title: 'Database migration script',
      status: 'review',
      priority: 'high',
      due: 'today 11:00 PM',
      project: 'Infrastructure'
    },
    {
      id: '8',
      title: 'Email notification service',
      status: 'in_progress',
      priority: 'low',
      due: 'next month',
      project: 'Communications'
    },
    {
      id: '9',
      title: 'API rate limiting implementation',
      status: 'completed',
      priority: 'medium',
      due: '3 days ago',
      project: 'Core API'
    },
    {
      id: '10',
      title: 'User profile image upload',
      status: 'in_progress',
      priority: 'medium',
      due: 'Friday',
      project: 'User Management'
    },
    {
      id: '11',
      title: 'Search functionality optimization',
      status: 'blocked',
      priority: 'low',
      due: 'next sprint',
      project: 'Search Engine'
    },
    {
      id: '12',
      title: 'Payment gateway integration',
      status: 'review',
      priority: 'high',
      due: 'end of week',
      project: 'Payments Platform'
    }
  ];

  const projects = [
    { id: '1', name: 'Payments Platform', tasks: 3, progress: 65, color: 'bg-blue-500' },
    { id: '2', name: 'Core API', tasks: 5, progress: 80, color: 'bg-green-500' },
    { id: '3', name: 'Dashboard', tasks: 2, progress: 90, color: 'bg-purple-500' },
    { id: '4', name: 'Mobile App', tasks: 4, progress: 45, color: 'bg-yellow-500' },
    { id: '5', name: 'Security', tasks: 3, progress: 30, color: 'bg-red-500' },
    { id: '6', name: 'Infrastructure', tasks: 6, progress: 75, color: 'bg-indigo-500' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'in_progress':
        return <div className="w-3 h-3 bg-amber-400 rounded-full"></div>;
      case 'completed':
        return (
          <div className="w-3 h-3 bg-green-500 rounded-full flex items-center justify-center">
            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'blocked':
        return <div className="w-3 h-3 bg-red-500 rounded-full"></div>;
      case 'review':
        return <div className="w-3 h-3 bg-blue-400 rounded-full"></div>;
      default:
        return <div className="w-3 h-3 bg-gray-400 rounded-full"></div>;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'text-red-400';
      case 'medium':
        return 'text-yellow-400';
      case 'low':
        return 'text-blue-400';
      default:
        return 'text-gray-400';
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'HIGH PRIORITY';
      case 'medium':
        return 'MEDIUM PRIORITY';
      case 'low':
        return 'LOW PRIORITY';
      default:
        return 'PRIORITY';
    }
  };

  return (
    <div className="flex justify-center items-center py-20 bg-black">
      {/* iPhone Frame */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: [40, 0, -6, 0], scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ y: -6 }}
        onWheel={handleWheel}
        style={{ isolation: 'isolate' }}
      >
        {/* iPhone Outer Frame - Realistic dimensions */}
        <div className="relative p-3 rounded-[58px] shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
          {/* Metallic rim */}
          <div className="absolute inset-0 rounded-[58px] bg-gradient-to-b from-zinc-300/30 via-zinc-600/30 to-zinc-900/40"></div>
          {/* Subtle highlight ring */}
          <div className="absolute inset-[2px] rounded-[56px] bg-gradient-to-b from-white/10 via-transparent to-white/5"></div>
          {/* Edge inner shadow to separate from background */}
          <div className="absolute inset-0 rounded-[58px] ring-1 ring-black/60"></div>

          {/* Frame body */}
          <div className="relative bg-gradient-to-b from-neutral-800 via-neutral-900 to-black rounded-[55px] p-2 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]">
          
          {/* iPhone Screen */}
          <motion.div
            className="bg-black rounded-[47px] overflow-hidden relative ring-1 ring-white/5"
            style={{ width: '390px', height: '844px' }}
            initial={{ boxShadow: '0 0 0 rgba(0,0,0,0)' }}
            animate={{ boxShadow: ['0 0 0 rgba(0,0,0,0)', '0 20px 60px rgba(0,0,0,0.55)'] }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            
            {/* Dynamic Island / Notch */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-full z-10"></div>
            
            {/* Status Bar */}
            <div className="flex justify-between items-center px-6 pt-4 pb-2 text-white relative z-20">
              <div className="flex items-center space-x-1">
                <span className="text-sm font-semibold">{currentTime}</span>
              </div>
              <div className="flex items-center space-x-1">
                {/* Signal Bars */}
                <div className="flex space-x-0.5">
                  <div className="w-1 h-2 bg-white rounded-full"></div>
                  <div className="w-1 h-3 bg-white rounded-full"></div>
                  <div className="w-1 h-4 bg-white rounded-full"></div>
                  <div className="w-1 h-5 bg-white rounded-full"></div>
                </div>
                {/* WiFi Icon */}
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.24 0 1 1 0 01-1.415-1.414 5 5 0 017.07 0 1 1 0 01-1.415 1.414zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                {/* Battery */}
                <div className="w-6 h-3 border border-white rounded-sm relative">
                  <div className="bg-white w-4 h-1.5 rounded-sm mt-0.5 ml-0.5"></div>
                  <div className="w-0.5 h-1.5 bg-white rounded-sm absolute -right-1 top-0.5"></div>
                </div>
              </div>
            </div>

            {/* App Header */}
            <div className="flex items-center px-6 py-3 border-b border-gray-800">
              <svg className="w-5 h-5 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <div>
                <div className="text-blue-400 text-sm font-semibold"># tasks</div>
                <div className="text-gray-400 text-xs">Team · Task Titan</div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-between items-center px-6 py-3 border-b border-gray-800">
              <div className="flex space-x-4">
                <button
                  onClick={() => setActiveTab('tasks')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === 'tasks'
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-400'
                  }`}
                >
                  My Tasks
                </button>
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === 'projects'
                      ? 'bg-gray-700 text-white'
                      : 'text-gray-400'
                  }`}
                >
                  Projects
                </button>
              </div>
              <button className="bg-teal-600 text-white px-3 py-1.5 rounded-lg text-xs flex items-center space-x-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                <span>{activeTab === 'tasks' ? 'New Task' : 'New Project'}</span>
              </button>
            </div>

            {/* Status Progress Bar */}
            <div className="px-6 py-4 bg-gray-900/30">
              <div className="relative">
                <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500" 
                    style={{ width: '75%' }}
                  />
                </div>
                <div 
                  className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full border border-black"
                  style={{ left: '75%' }}
                />
              </div>
            </div>

            {/* Scrollable Content Container */}
            <div 
              ref={scrollContainerRef}
              className="overflow-y-auto scrollbar-hide bg-black"
              style={{ 
                height: 'calc(844px - 300px)', // Precise calculation for available space
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {activeTab === 'tasks' ? (
                <>
                  {/* Tasks Table Headers */}
                  <div className="grid grid-cols-12 gap-2 px-6 py-3 text-xs text-gray-400 font-medium border-b border-gray-800 sticky top-0 bg-black z-10">
                    <div className="col-span-4">TASK</div>
                    <div className="col-span-3">PRIORITY</div>
                    <div className="col-span-4">DUE</div>
                    <div className="col-span-1"></div>
                  </div>

                  {/* Tasks List */}
                  <div className="px-6 py-2 space-y-3">
                    {tasks.map((task, index) => (
                      <motion.div
                        key={task.id}
                        className="grid grid-cols-12 gap-2 items-center py-3 hover:bg-gray-800/30 rounded-lg transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        {/* Status Icon & Title */}
                        <div className="col-span-4 flex items-center space-x-2">
                          {getStatusIcon(task.status)}
                          <div>
                            <div className="text-white text-xs font-medium">
                              {task.title.length > 20 ? task.title.substring(0, 20) + '...' : task.title}
                            </div>
                            <div className="text-gray-400 text-[10px] uppercase font-medium">
                              {task.status.replace('_', ' ')}
                            </div>
                          </div>
                        </div>

                        {/* Priority */}
                        <div className="col-span-3">
                          <div className={`text-[10px] font-medium ${getPriorityColor(task.priority)}`}>
                            {task.priority.toUpperCase()}
                          </div>
                        </div>

                        {/* Due Date */}
                        <div className="col-span-4">
                          <div className="text-xs text-gray-400">
                            {task.due}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="col-span-1 flex justify-center">
                          <button className="text-gray-400 hover:text-white transition-colors">
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </button>
                        </div>
                      </motion.div>
                    ))}

                    {/* Task Titan Quick Action Card */}
                    <motion.div 
                      className="bg-indigo-600/15 border border-indigo-500/30 rounded-xl p-4 mt-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                          <span className="text-indigo-300 text-xs font-semibold">Task Titan</span>
                          <span className="text-gray-400 text-xs">Assistant</span>
                        </div>
                        <span className="text-gray-400 text-xs">{currentTime}</span>
                      </div>
                      
                      <h4 className="text-white font-semibold text-sm mb-2">
                        Daily Focus: Complete billing webhook fix
                      </h4>
                      
                      <p className="text-gray-300 text-xs mb-3">
                        I grouped related tasks, prioritized blockers, and set reminders.
                        Want me to create a subtask checklist?
                      </p>
                      
                      <div className="flex space-x-2">
                        <button className="bg-gray-700 hover:bg-gray-600 text-white text-xs px-3 py-1.5 rounded-lg transition-colors">
                          Open Task
                        </button>
                        <button className="bg-gray-700 hover:bg-gray-600 text-white text-xs px-3 py-1.5 rounded-lg transition-colors">
                          Add Subtasks
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </>
              ) : (
                <>
                  {/* Projects View */}
                  <div className="px-6 py-4">
                    <div className="text-xs text-gray-400 font-medium mb-4">ACTIVE PROJECTS</div>
                    
                    {projects.map((project, index) => (
                      <motion.div
                        key={project.id}
                        className="bg-gray-800/30 rounded-xl p-4 mb-4 hover:bg-gray-800/50 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 rounded-full ${project.color}`}></div>
                            <div>
                              <div className="text-white text-sm font-medium">{project.name}</div>
                              <div className="text-gray-400 text-xs">{project.tasks} tasks</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-white text-sm font-medium">{project.progress}%</div>
                            <div className="text-gray-400 text-xs">complete</div>
                          </div>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className={`h-full ${project.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${project.progress}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
              
              {/* Bottom Spacer */}
              <div className="h-6"></div>
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
              <div className="w-32 h-1 bg-white/60 rounded-full"></div>
            </div>
          </motion.div>
          {/* close frame body */}
          </div>
          {/* close outer frame container */}
        </div>

        {/* iPhone Physical Buttons */}
        <div className="absolute left-0 top-20 w-1 h-8 bg-gray-600 rounded-r-sm"></div>
        <div className="absolute left-0 top-32 w-1 h-12 bg-gray-600 rounded-r-sm"></div>
        <div className="absolute left-0 top-48 w-1 h-12 bg-gray-600 rounded-r-sm"></div>
        <div className="absolute right-0 top-32 w-1 h-16 bg-gray-600 rounded-l-sm"></div>
      </motion.div>
    </div>
  );
};

export default IPhoneFramedInterface;
