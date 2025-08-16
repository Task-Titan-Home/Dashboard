import React, { useEffect, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
  type: 'orb' | 'line' | 'spark' | 'wave';
}

interface NetworkNode {
  id: number;
  x: number;
  y: number;
  connections: number[];
}

const BackgroundAnimations: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [networkNodes, setNetworkNodes] = useState<NetworkNode[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const colors = [
    'rgba(59, 130, 246, 0.6)',    // Blue
    'rgba(168, 85, 247, 0.6)',    // Purple  
    'rgba(6, 182, 212, 0.6)',     // Cyan
    'rgba(236, 72, 153, 0.6)',    // Pink
    'rgba(251, 146, 60, 0.6)',    // Orange
    'rgba(34, 197, 94, 0.6)',     // Green
  ];

  const particleTypes: Particle['type'][] = ['orb', 'line', 'spark', 'wave'];

  useEffect(() => {
    // Generate advanced particles system
    const newParticles: Particle[] = [];
    for (let i = 0; i < 25; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        delay: Math.random() * 15,
        duration: Math.random() * 15 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: particleTypes[Math.floor(Math.random() * particleTypes.length)],
      });
    }
    setParticles(newParticles);

    // Generate network nodes
    const nodes: NetworkNode[] = [];
    for (let i = 0; i < 8; i++) {
      const connections: number[] = [];
      for (let j = 0; j < 3; j++) {
        const randomConnection = Math.floor(Math.random() * 8);
        if (randomConnection !== i && !connections.includes(randomConnection)) {
          connections.push(randomConnection);
        }
      }
      
      nodes.push({
        id: i,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
        connections,
      });
    }
    setNetworkNodes(nodes);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePos({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dynamic Neural Network Background */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </radialGradient>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.6)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.6)" />
            <stop offset="100%" stopColor="rgba(6, 182, 212, 0.6)" />
          </linearGradient>
        </defs>
        
        {/* Animated Network Connections */}
        {networkNodes.map((node) =>
          node.connections.map((connectionId) => {
            const targetNode = networkNodes[connectionId];
            if (!targetNode) return null;
            
            return (
              <motion.line
                key={`${node.id}-${connectionId}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${targetNode.x}%`}
                y2={`${targetNode.y}%`}
                stroke="url(#connectionGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                  ease: "easeInOut",
                }}
              />
            );
          })
        )}
        
        {/* Animated Network Nodes */}
        {networkNodes.map((node) => (
          <motion.circle
            key={node.id}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="4"
            fill="url(#nodeGradient)"
            animate={{
              r: [3, 8, 3],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Spectacular Morphing Shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, 
            rgba(59, 130, 246, 0.2) 0deg,
            rgba(168, 85, 247, 0.2) 120deg,
            rgba(6, 182, 212, 0.2) 240deg,
            rgba(59, 130, 246, 0.2) 360deg)`,
          borderRadius: '50%',
          filter: 'blur(40px)',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.4, 0.8, 1],
          x: [0, 100, -50, 0],
          y: [0, -80, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-80 h-80"
        style={{
          background: `conic-gradient(from 180deg at 50% 50%, 
            rgba(236, 72, 153, 0.2) 0deg,
            rgba(251, 146, 60, 0.2) 90deg,
            rgba(34, 197, 94, 0.2) 180deg,
            rgba(168, 85, 247, 0.2) 270deg,
            rgba(236, 72, 153, 0.2) 360deg)`,
          borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          filter: 'blur(35px)',
        }}
        animate={{
          rotate: [180, -180],
          scale: [1, 0.7, 1.3, 1],
          x: [0, -60, 80, 0],
          y: [0, 60, -30, 0],
          borderRadius: [
            '30% 70% 70% 30% / 30% 30% 70% 70%',
            '70% 30% 30% 70% / 70% 70% 30% 30%',
            '50% 50% 50% 50% / 50% 50% 50% 50%',
            '30% 70% 70% 30% / 30% 30% 70% 70%',
          ],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />

      {/* Advanced Particle System */}
      {particles.map((particle) => {
        const ParticleComponent = ({ particle }: { particle: Particle }) => {
          switch (particle.type) {
            case 'orb':
              return (
                <motion.div
                  className="absolute rounded-full"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    background: `radial-gradient(circle, ${particle.color}, transparent)`,
                    boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
                  }}
                  animate={{
                    y: [0, -150, -300],
                    opacity: [0, 1, 0],
                    scale: [0.3, 1, 0.3],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay,
                    ease: "easeOut",
                  }}
                />
              );
            case 'line':
              return (
                <motion.div
                  className="absolute"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: `${particle.size * 10}px`,
                    height: '2px',
                    background: `linear-gradient(90deg, transparent, ${particle.color}, transparent)`,
                  }}
                  animate={{
                    rotate: [0, 360],
                    scaleX: [0.5, 2, 0.5],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: particle.duration,
                    repeat: Infinity,
                    delay: particle.delay,
                    ease: "easeInOut",
                  }}
                />
              );
            case 'spark':
              return (
                <motion.div
                  className="absolute"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: '2px',
                    height: `${particle.size * 8}px`,
                    background: `linear-gradient(180deg, ${particle.color}, transparent)`,
                  }}
                  animate={{
                    scaleY: [0, 2, 0],
                    opacity: [0, 1, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: particle.duration * 0.3,
                    repeat: Infinity,
                    delay: particle.delay,
                    ease: "easeOut",
                  }}
                />
              );
            case 'wave':
              return (
                <motion.div
                  className="absolute rounded-full border-2"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: `${particle.size * 3}px`,
                    height: `${particle.size * 3}px`,
                    borderColor: particle.color,
                  }}
                  animate={{
                    scale: [0, 3, 0],
                    opacity: [1, 0.3, 0],
                  }}
                  transition={{
                    duration: particle.duration * 0.5,
                    repeat: Infinity,
                    delay: particle.delay,
                    ease: "easeOut",
                  }}
                />
              );
            default:
              return null;
          }
        };

        return <ParticleComponent key={particle.id} particle={particle} />;
      })}

      {/* Mouse-Following Energy Field */}
      <motion.div
        className="absolute w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, rgba(59, 130, 246, 0.3), rgba(168, 85, 247, 0.2), transparent)`,
          filter: 'blur(20px)',
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating DNA Helix */}
      <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: i % 2 === 0 
                ? 'rgba(59, 130, 246, 0.6)' 
                : 'rgba(168, 85, 247, 0.6)',
            }}
            animate={{
              x: [
                Math.cos((i * Math.PI) / 6) * 100,
                Math.cos((i * Math.PI) / 6 + Math.PI) * 100,
              ],
              y: [i * 20 - 120, i * 20 - 120],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Quantum Field Lines */}
      <svg className="absolute inset-0 w-full h-full">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.path
            key={i}
            d={`M 0,${20 + i * 100} Q ${window.innerWidth / 4},${10 + i * 100} ${window.innerWidth / 2},${30 + i * 100} T ${window.innerWidth},${20 + i * 100}`}
            stroke={colors[i]}
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Holographic Corners */}
      {[
        { position: 'top-4 left-4', colors: ['cyan', 'blue'] },
        { position: 'top-4 right-4', colors: ['purple', 'pink'] },
        { position: 'bottom-4 left-4', colors: ['orange', 'red'] },
        { position: 'bottom-4 right-4', colors: ['green', 'teal'] },
      ].map((corner, i) => (
        <motion.div
          key={i}
          className={`absolute ${corner.position} w-16 h-16`}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="w-full h-full border-2 border-dashed opacity-60"
            style={{
              borderColor: `rgba(${corner.colors[0] === 'cyan' ? '6, 182, 212' : 
                              corner.colors[0] === 'purple' ? '168, 85, 247' : 
                              corner.colors[0] === 'orange' ? '251, 146, 60' : '34, 197, 94'}, 0.6)`,
            }}
            animate={{
              borderRadius: ['0%', '50%', '0%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundAnimations;
