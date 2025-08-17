"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/navbar";
import PageWrapper from "./components/page-wrapper";
import Features from "./components/feautres";
import ProfessionalFooter from "./components/ProfessionalFooter";
import SpaceBackground from "./components/SpaceBackground";
import IncidentManagement from "./components/IncidentManagement";
import IPhoneFramedInterface from "./components/IPhoneFramedInterface";
import { Button } from "@nextui-org/react";
import NextLink from "next/link";
import {
  fadeInUp,
  fadeInLeft,
} from "../app/components/animations/variants";
import { useInViewAnimation } from "../app/components/hooks/useInViewAnimation";

export default function Home() {
  // Animation hooks for core sections only
  const heroControls = useInViewAnimation();
  const featuresControls = useInViewAnimation();
  const ctaControls = useInViewAnimation();

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-black text-white force-light-text relative overflow-x-hidden">
      {/* Spectacular Universal Space Background */}
      <SpaceBackground />
      
      <Navbar />
      <PageWrapper delay={0.5}>
        {/* Enhanced Professional Hero Section */}
        <motion.div
          className="container flex-col mt-20 sm:mt-24 md:mt-32 text-center max-w-6xl relative px-4"
          ref={heroControls.ref}
          initial="hidden"
          animate={heroControls.controls}
          variants={fadeInUp}
        >
          {/* Advanced Professional Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            {/* Main gradient orbs with enhanced animations */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-40 sm:w-60 md:w-80 h-40 sm:h-60 md:h-80 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-2xl md:blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.7, 0.3],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-r from-purple-500/12 to-cyan-500/12 rounded-full blur-2xl md:blur-3xl"
              animate={{
                scale: [1.2, 0.8, 1.2],
                opacity: [0.4, 0.2, 0.4],
                x: [0, -40, 0],
                y: [0, 20, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/2 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-full blur-2xl md:blur-3xl -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.5, 0.2],
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4,
              }}
            />

          
            

            {/* Professional floating particles */}
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 sm:w-2 sm:h-2 rounded-full`}
                style={{
                  left: `${15 + (i * 10)}%`,
                  top: `${25 + (i * 6)}%`,
                  background: i % 3 === 0 
                    ? 'rgba(59, 130, 246, 0.4)' 
                    : i % 3 === 1 
                    ? 'rgba(168, 85, 247, 0.4)' 
                    : 'rgba(6, 182, 212, 0.4)',
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0, 1, 0],
                  scale: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 8 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Shimmer lines */}
            <motion.div
              className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 1,
              }}
            />

            <motion.div
              className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-purple-400/30 to-transparent"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: 4,
              }}
            />
          </div>

          {/* Floating badge */}
          <motion.div
            className="inline-flex items-center px-3 sm:px-4 py-2 mb-6 md:mb-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full mx-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.span
              className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs sm:text-sm font-medium text-blue-300">
              ✨ Next-Generation Task Management
            </span>
          </motion.div>

          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-6 md:mb-8 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }}
          >
            <motion.span 
              className="block gradient-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.6, 0.01, 0.05, 0.9] }}
            >
              Enterprise Task
            </motion.span>
            <motion.span 
              className="block gradient-text mt-1 md:mt-2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: [0.6, 0.01, 0.05, 0.9] }}
            >
              Management
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed font-medium px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }}
          >
            Streamline your workflow with intelligent task management. 
            Built for teams that demand excellence.
          </motion.p>

          {/* Enhanced CTA buttons with animations */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 md:mb-16 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.6, 0.01, 0.05, 0.9] }}
          >
            <NextLink href="pages/auth/signup" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="relative overflow-hidden bg-neutral-900 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-12 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
                >
                  <span className="relative z-10 ">Start Free Trial</span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20"
                    initial={false}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </Button>
              </motion.div>
            </NextLink>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="bordered"
                className="border-gray-600 text-gray-300 hover:border-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/20 py-4 px-12 rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                View Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated trust indicators */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            {[
              { icon: "✓", text: "14-day free trial", color: "text-green-400" },
              { icon: "⚡", text: "Lightning fast", color: "text-blue-400" },
              { icon: "🔒", text: "Enterprise security", color: "text-purple-400" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className={item.color}>{item.icon}</span>
                <span className="text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </PageWrapper>

      {/* Enhanced Features Section */}
      <PageWrapper delay={1}>
        <motion.div
          id="features"
          className="container text-center mt-20 sm:mt-24 md:mt-32 max-w-6xl relative px-4"
          ref={featuresControls.ref}
          initial="hidden"
          animate={featuresControls.controls}
          variants={fadeInLeft}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Built for Performance
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-12 md:mb-16 font-medium px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Enterprise-grade features designed for teams that need to get things done.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto px-4">
            {[
              {
                icon: "⚡",
                title: "Fast & Reliable",
                description: "Sub-second response times with 99.9% uptime guarantee.",
                gradient: "from-blue-500 to-purple-500",
                hoverColor: "hover:border-blue-500/50",
              },
              {
                icon: "🔒",
                title: "Enterprise Security",
                description: "SOC 2 compliant with end-to-end encryption.",
                gradient: "from-purple-500 to-pink-500",
                hoverColor: "hover:border-purple-500/50",
              },
              {
                icon: "📊",
                title: "Real-time Analytics",
                description: "Track progress and optimize workflows with live insights.",
                gradient: "from-cyan-500 to-blue-500",
                hoverColor: "hover:border-cyan-500/50",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className={`group bg-gray-900/40 backdrop-blur-sm rounded-xl p-8 border border-gray-800 ${feature.hoverColor} transition-all duration-300 hover:shadow-lg hover:shadow-gray-800/50 hover:-translate-y-2`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl">{feature.icon}</span>
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </PageWrapper>

      {/* Enhanced Professional CTA Section */}
      <PageWrapper delay={1.5}>
        <motion.div
          className="container text-center mt-20 sm:mt-24 md:mt-32 mb-12 md:mb-20 max-w-4xl relative px-4"
          ref={ctaControls.ref}
          initial="hidden"
          animate={ctaControls.controls}
          variants={fadeInUp}
        >
          {/* Animated background glow */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Ready to Transform
            <motion.span
              className="block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Your Workflow?
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-200 mb-8 md:mb-12 max-w-2xl mx-auto font-medium px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Join industry leaders who trust Task Titan for their project management needs.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6 md:mb-8 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <NextLink href="pages/auth/signup" passHref>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="relative overflow-hidden bg-neutral-900 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-12 rounded-xl shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group"
                >
                  <span className="relative z-10">Start Free Trial</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-30"
                    animate={{ 
                      background: [
                        "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                        "linear-gradient(135deg, #8b5cf6, #3b82f6)",
                        "linear-gradient(45deg, #3b82f6, #8b5cf6)",
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </Button>
              </motion.div>
            </NextLink>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="bordered"
                className="border-gray-600 text-gray-300 hover:border-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/20 py-4 px-12 rounded-xl transition-all duration-300 backdrop-blur-sm"
              >
                Contact Sales
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[
              { icon: "✓", text: "14-day free trial", color: "text-green-400" },
              { icon: "💳", text: "No setup fees", color: "text-blue-400" },
              { icon: "🔄", text: "Cancel anytime", color: "text-purple-400" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className={item.color}>{item.icon}</span>
                <span className="text-gray-300">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </PageWrapper>



      {/* Stats Section */}
      <PageWrapper delay={2}>
        <motion.div
          className="container text-center mt-20 sm:mt-24 md:mt-32 max-w-6xl px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 md:mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Trusted by Teams Worldwide
          </motion.h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-4">
            {[
              { number: "50K+", label: "Active Users", color: "from-blue-400 to-cyan-400" },
              { number: "99.9%", label: "Uptime", color: "from-green-400 to-emerald-400" },
              { number: "2M+", label: "Tasks Completed", color: "from-purple-400 to-pink-400" },
              { number: "150+", label: "Countries", color: "from-orange-400 to-red-400" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </PageWrapper>

      {/* Testimonials Section */}
      <PageWrapper delay={2.2}>
        <motion.div
          id="testimonials"
          className="container text-center mt-20 sm:mt-24 md:mt-32 max-w-6xl px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 md:mb-16 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            What Our Customers Say
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
            {[
              {
                quote: "Task Titan transformed how our team collaborates. The intuitive interface and powerful features make project management effortless.",
                author: "Sarah Chen",
                role: "Product Manager",
                company: "TechCorp",
                avatar: "SC"
              },
              {
                quote: "The analytics and reporting features are game-changing. We've improved our delivery time by 40% since switching to Task Titan.",
                author: "Michael Rodriguez",
                role: "Engineering Lead",
                company: "InnovateLab",
                avatar: "MR"
              },
              {
                quote: "Outstanding customer support and enterprise-grade security. Task Titan scales perfectly with our growing organization.",
                author: "Emma Thompson",
                role: "Operations Director",
                company: "GlobalTech",
                avatar: "ET"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-yellow-400 text-xl"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.2 + i * 0.1, duration: 0.3 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-gray-300 text-sm">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </PageWrapper>

      {/* Integration Section */}
      <PageWrapper delay={2.4}>
        <motion.div
          id="integrations"
          className="container text-center mt-20 sm:mt-24 md:mt-32 max-w-6xl px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Seamless Integrations
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-200 mb-12 md:mb-16 max-w-3xl mx-auto font-medium px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Connect with the tools your team already loves and streamline your workflow.
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300 px-4">
            {[
              { name: "Slack", icon: "💬" },
              { name: "Google", icon: "🔗" },
              { name: "Microsoft", icon: "📊" },
              { name: "Jira", icon: "🎯" },
              { name: "GitHub", icon: "⚡" },
              { name: "Figma", icon: "🎨" },
            ].map((integration, index) => (
              <motion.div
                key={integration.name}
                className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-3xl mb-2">{integration.icon}</span>
                <span className="text-gray-300 font-medium text-sm">{integration.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </PageWrapper>

      {/* FAQ Section */}
      <PageWrapper delay={2.6}>
        <motion.div
          className="container mt-20 sm:mt-24 md:mt-32 max-w-4xl px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4 md:space-y-6 px-4">
            {[
              {
                question: "How secure is my data with Task Titan?",
                answer: "We use enterprise-grade security with SOC 2 compliance, end-to-end encryption, and regular security audits to ensure your data is always protected."
              },
              {
                question: "Can I integrate Task Titan with my existing tools?",
                answer: "Yes! Task Titan integrates with over 50+ popular tools including Slack, Google Workspace, Microsoft Teams, Jira, and many more."
              },
              {
                question: "What support options are available?",
                answer: "We offer 24/7 customer support, dedicated account managers for enterprise clients, comprehensive documentation, and video tutorials."
              },
              {
                question: "Is there a mobile app available?",
                answer: "Yes, Task Titan is available on iOS and Android with full feature parity, offline sync, and push notifications to keep you productive anywhere."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-200 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </PageWrapper>

    
      <IncidentManagement />
  {/* Mobile App Coming Soon Section */}
  <PageWrapper delay={1.8}>
        <motion.div
          className="container text-center mt-16 sm:mt-20 mb-6 md:mb-8 max-w-5xl relative px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-64 bg-gradient-to-r from-indigo-500/10 via-purple-500/15 to-pink-500/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <motion.div
            className="bg-gradient-to-r from-gray-900/60 via-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                📱 Mobile App
              </div>
            </motion.div>

            <motion.h3
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Coming Soon to Mobile
              </span>
            </motion.h3>

            <motion.p
              className="text-base sm:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              Take Task Titan with you anywhere. Manage your projects, track progress, and collaborate with your team on the go.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              {/* App Store Badge */}
              <motion.div
                className="group cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-xl p-6 border border-gray-600 hover:border-blue-500/50 transition-all duration-300 min-w-[200px]">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-gray-400 text-xs uppercase tracking-wider">Coming Soon</div>
                      <div className="text-white font-semibold">App Store</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Google Play Badge */}
              <motion.div
                className="group cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 rounded-xl p-6 border border-gray-600 hover:border-green-500/50 transition-all duration-300 min-w-[200px]">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-gray-400 text-xs uppercase tracking-wider">Coming Soon</div>
                      <div className="text-white font-semibold">Google Play</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <p className="text-sm text-gray-400 mb-4">
                Be the first to know when our mobile apps launch
              </p>
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium px-6 py-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Notify Me
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </PageWrapper>

      {/* Task Management Section */}
      {/* iPhone Framed Interface */}
      <IPhoneFramedInterface />

      {/* Professional Footer */}
      <ProfessionalFooter />
    </main>
  );
}
