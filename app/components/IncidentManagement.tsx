import React, { useState } from "react";
import { motion } from "framer-motion";

interface Task {
  id: string;
  title: string;
  status: 'in_progress' | 'completed' | 'blocked' | 'review';
  priority: 'critical' | 'high' | 'medium' | 'low';
  timestamp: string;
  assignee: string;
  project: string;
  progress: number;
  dueDate: string;
}

const TaskManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'active_tasks' | 'completed'>('active_tasks');

  const tasks: Task[] = [
    {
      id: '1',
      title: 'Redesign user onboarding flow',
      status: 'in_progress',
      priority: 'critical',
      timestamp: '2 hours ago',
      assignee: 'Sarah Chen',
      project: 'Product Redesign',
      progress: 75,
      dueDate: 'Today'
    },
    {
      id: '2',
      title: 'Implement real-time notifications',
      status: 'review',
      priority: 'high',
      timestamp: '4 hours ago',
      assignee: 'Alex Rodriguez',
      project: 'Core Features',
      progress: 90,
      dueDate: 'Tomorrow'
    },
    {
      id: '3',
      title: 'Database optimization for reports',
      status: 'blocked',
      priority: 'high',
      timestamp: '1 day ago',
      assignee: 'Marcus Johnson',
      project: 'Performance',
      progress: 45,
      dueDate: 'This Week'
    },
    {
      id: '4',
      title: 'Mobile app dark mode',
      status: 'completed',
      priority: 'medium',
      timestamp: '2 days ago',
      assignee: 'Elena Vasquez',
      project: 'Mobile App',
      progress: 100,
      dueDate: 'Completed'
    },
    {
      id: '5',
      title: 'API rate limiting system',
      status: 'in_progress',
      priority: 'high',
      timestamp: '3 hours ago',
      assignee: 'David Kim',
      project: 'Backend Infrastructure',
      progress: 60,
      dueDate: 'Next Week'
    },
    {
      id: '6',
      title: 'User analytics dashboard',
      status: 'review',
      priority: 'medium',
      timestamp: '5 hours ago',
      assignee: 'Rachel Green',
      project: 'Analytics Platform',
      progress: 85,
      dueDate: 'Friday'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in_progress':
        return 'text-amber-400 bg-amber-400/20 border-amber-400/30';
      case 'completed':
        return 'text-emerald-400 bg-emerald-400/20 border-emerald-400/30';
      case 'blocked':
        return 'text-red-400 bg-red-400/20 border-red-400/30';
      case 'review':
        return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'text-red-500 bg-red-500/20';
      case 'high':
        return 'text-orange-500 bg-orange-500/20';
      case 'medium':
        return 'text-yellow-500 bg-yellow-500/20';
      case 'low':
        return 'text-green-500 bg-green-500/20';
      default:
        return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'in_progress':
        return (
          <div className="w-5 h-5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'completed':
        return (
          <div className="w-5 h-5 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'blocked':
        return (
          <div className="w-5 h-5 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 008.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd" />
            </svg>
          </div>
        );
      case 'review':
        return (
          <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
        );
    }
  };

  return (
    <section className="pt-8 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
              <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                Task Titan Dashboard
              </span>
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Supercharge your productivity with intelligent task management
          </p>
        </motion.div>

        {/* Team Performance Overview */}
        <motion.div
          className="bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-indigo-900/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Team Performance</h3>
                <p className="text-sm text-gray-400">6 active projects • 24 tasks in progress</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 text-sm font-medium">All Systems Operational</span>
            </div>
          </div>
          
          {/* Performance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-white mb-1">87%</div>
              <div className="text-sm text-gray-400">On-time Delivery</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-white mb-1">24</div>
              <div className="text-sm text-gray-400">Active Tasks</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-white mb-1">6</div>
              <div className="text-sm text-gray-400">Team Members</div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-4">
              <div className="text-2xl font-bold text-white mb-1">92%</div>
              <div className="text-sm text-gray-400">Productivity Score</div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"
                initial={{ width: 0 }}
                animate={{ width: '87%' }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
            </div>
            <motion.div
              className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-emerald-400 rounded-full border-2 border-gray-900 shadow-lg"
              style={{ left: '87%' }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex space-x-1 bg-gray-800/50 rounded-xl p-1">
            <button
              onClick={() => setActiveTab('active_tasks')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'active_tasks'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              Active Tasks
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === 'completed'
                  ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg'
                  : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
              }`}
            >
              Completed
            </button>
          </div>
          
          <div className="flex items-center space-x-3">
            <motion.button
              className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              <span>New Task</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Tasks Table */}
        <motion.div
          className="bg-gradient-to-br from-gray-900/40 via-gray-800/40 to-gray-900/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Table Header */}
          <div className="bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-indigo-600/20 border-b border-gray-700/50">
            <div className="grid grid-cols-12 gap-4 p-6">
              <div className="col-span-1 flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full"></div>
              </div>
              <div className="col-span-4 text-sm font-semibold text-gray-200 uppercase tracking-wider">
                Task Details
              </div>
              <div className="col-span-2 text-sm font-semibold text-gray-200 uppercase tracking-wider">
                Assignee
              </div>
              <div className="col-span-2 text-sm font-semibold text-gray-200 uppercase tracking-wider">
                Progress
              </div>
              <div className="col-span-2 text-sm font-semibold text-gray-200 uppercase tracking-wider">
                Due Date
              </div>
              <div className="col-span-1 text-sm font-semibold text-gray-200 uppercase tracking-wider">
                Actions
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-700/30">
            {tasks.filter(task => activeTab === 'active_tasks' ? task.status !== 'completed' : task.status === 'completed').map((task, index) => (
              <motion.div
                key={task.id}
                className="grid grid-cols-12 gap-4 p-6 hover:bg-gradient-to-r hover:from-purple-900/10 hover:to-blue-900/10 transition-all duration-300 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                {/* Status Icon */}
                <div className="col-span-1 flex items-center">
                  {getStatusIcon(task.status)}
                </div>

                {/* Task Details */}
                <div className="col-span-4">
                  <h4 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors">
                    {task.title}
                  </h4>
                  <div className="flex items-center space-x-3">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${getStatusColor(task.status)}`}>
                      {task.status.replace('_', ' ').toUpperCase()}
                    </span>
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${getPriorityColor(task.priority)}`}>
                      {task.priority.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    Project: <span className="text-gray-300">{task.project}</span>
                  </p>
                </div>

                {/* Assignee */}
                <div className="col-span-2 flex items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                      {task.assignee.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{task.assignee}</p>
                      <p className="text-gray-400 text-xs">{task.timestamp}</p>
                    </div>
                  </div>
                </div>

                {/* Progress */}
                <div className="col-span-2 flex items-center">
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-white">{task.progress}%</span>
                      <span className="text-xs text-gray-400">Complete</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          task.progress === 100 
                            ? 'bg-gradient-to-r from-emerald-400 to-green-500' 
                            : task.progress >= 75 
                            ? 'bg-gradient-to-r from-blue-400 to-purple-500'
                            : task.progress >= 50
                            ? 'bg-gradient-to-r from-yellow-400 to-orange-500'
                            : 'bg-gradient-to-r from-red-400 to-pink-500'
                        }`}
                        initial={{ width: 0 }}
                        animate={{ width: `${task.progress}%` }}
                        transition={{ duration: 1, delay: 0.2 * index }}
                      />
                    </div>
                  </div>
                </div>

                {/* Due Date */}
                <div className="col-span-2 flex items-center">
                  <div className="text-center">
                    <p className="text-white font-medium text-sm">{task.dueDate}</p>
                    <p className="text-gray-400 text-xs">
                      {task.status === 'completed' ? 'Finished' : 'Deadline'}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="col-span-1 flex items-center justify-center">
                  <motion.button
                    className="w-8 h-8 bg-gray-700 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Task Analytics Footer */}
        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-emerald-900/30 to-green-800/30 border border-emerald-500/30 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Completed This Week</h3>
            </div>
            <p className="text-3xl font-bold text-emerald-400 mb-2">18 Tasks</p>
            <p className="text-sm text-gray-400">+23% from last week</p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/30 to-indigo-800/30 border border-blue-500/30 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Average Completion</h3>
            </div>
            <p className="text-3xl font-bold text-blue-400 mb-2">3.2 Days</p>
            <p className="text-sm text-gray-400">-0.8 days improvement</p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-pink-800/30 border border-purple-500/30 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white">Team Efficiency</h3>
            </div>
            <p className="text-3xl font-bold text-purple-400 mb-2">94%</p>
            <p className="text-sm text-gray-400">+7% this month</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TaskManagement;
