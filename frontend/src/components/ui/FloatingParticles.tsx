'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface FloatingParticlesProps {
  count?: number;
  speed?: number;
  opacity?: number;
  colors?: string[];
  sizes?: number[];
  className?: string;
}

const FloatingParticles = ({
  count = 30,
  speed = 20,
  opacity = 0.3,
  colors = ['rgba(251, 191, 36, 0.3)', 'rgba(34, 211, 238, 0.3)', 'rgba(147, 51, 234, 0.2)'],
  sizes = [2, 3, 4, 5, 6],
  className = ''
}: FloatingParticlesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate particles array
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: sizes[Math.floor(Math.random() * sizes.length)],
    color: colors[Math.floor(Math.random() * colors.length)],
    delay: Math.random() * speed,
    duration: speed + Math.random() * 10,
  }));

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: opacity,
          }}
          animate={{
            y: [-20, -100],
            x: [0, Math.sin(particle.id) * 20],
            opacity: [0, opacity, opacity, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;