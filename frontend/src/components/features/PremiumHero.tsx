'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpTrayIcon as Upload, 
  MagnifyingGlassIcon as Search, 
  SparklesIcon as Sparkles, 
  BoltIcon as Zap, 
  ShieldCheckIcon as Shield, 
  CpuChipIcon as Brain 
} from '@heroicons/react/24/outline';

interface PremiumHeroProps {
  onUploadClick?: () => void;
  onSearchClick?: () => void;
}

const PremiumHero = ({ onUploadClick, onSearchClick }: PremiumHeroProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  // Liquid canvas background effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Liquid particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      hue: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        hue: Math.random() * 60 + 180, // Cyan to blue range
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 2
      );
      gradient.addColorStop(0, `hsla(${200 + Math.sin(time) * 20}, 70%, 10%, 0.1)`);
      gradient.addColorStop(1, `hsla(${220 + Math.cos(time) * 15}, 80%, 5%, 0.05)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Animate particles
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx + Math.sin(time + index) * 0.1;
        particle.y += particle.vy + Math.cos(time + index) * 0.1;

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = particle.opacity * (0.8 + Math.sin(time + index) * 0.2);
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${particle.hue + Math.sin(time) * 30}, 70%, 60%)`;
        ctx.fill();

        // Add glow effect
        ctx.shadowColor = `hsl(${particle.hue}, 70%, 60%)`;
        ctx.shadowBlur = 20;
        ctx.fill();
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    setIsLoaded(true);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Mouse tracking for magnetic effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleUpload = () => {
    console.log('🚀 Upload feature activated!');
    onUploadClick?.();
  };

  const handleSearch = () => {
    console.log('🔍 Search interface loading...');
    onSearchClick?.();
  };

  return (
    <div ref={heroRef} className="relative min-h-screen overflow-hidden">
      
      {/* Liquid Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: -1 }}
      />

      <div className="container-premium relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <AnimatePresence>
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Main Heading */}
              <motion.h1 
                className="heading-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              >
                ResumeRAG
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed font-body"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              >
                <span className="text-gradient">AI-powered resume matching</span> that understands talent beyond keywords.
                <br />
                Discover perfect fits with <span className="text-glow">semantic search</span> and explainable insights.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              >
                <motion.button
                  onClick={handleUpload}
                  className="btn-gradient-premium flex items-center gap-3 min-w-[240px] group"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Upload className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  Upload Resume
                  <Sparkles className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
                </motion.button>
                
                <motion.button
                  onClick={handleSearch}
                  className="btn-neon flex items-center gap-3 min-w-[240px] group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Search className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  Search Candidates
                </motion.button>
              </motion.div>

              {/* Feature Cards */}
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1, ease: "easeOut" }}
              >
                {[
                  {
                    icon: Brain,
                    title: "Semantic Matching",
                    description: "Advanced AI understands skills beyond keywords",
                    gradient: "from-purple-500/20 to-pink-500/20"
                  },
                  {
                    icon: Zap,
                    title: "Lightning Fast",
                    description: "Search thousands of resumes in milliseconds",
                    gradient: "from-yellow-500/20 to-orange-500/20"
                  },
                  {
                    icon: Shield,
                    title: "Explainable AI",
                    description: "Understand exactly why candidates match",
                    gradient: "from-cyan-500/20 to-blue-500/20"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="feature-card group cursor-pointer"
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: 1.4 + index * 0.2, 
                      duration: 0.6, 
                      ease: "easeOut" 
                    }}
                    whileHover={{ y: -8, scale: 1.02 }}
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-gradient transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 font-body leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PremiumHero;