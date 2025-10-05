'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpTrayIcon, MagnifyingGlassIcon, SparklesIcon, BoltIcon } from '@heroicons/react/24/outline';
import gsap from 'gsap';
import { HeroCard } from '../ui/GlassCard';
import SimpleButton from '../ui/SimpleButton';
import FloatingParticles from '../ui/FloatingParticles';

interface HeroProps {
  onUploadClick?: () => void;
  onSearchClick?: () => void;
}

const Hero = ({ onUploadClick, onSearchClick }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const floatingShapesRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main timeline
      const tl = gsap.timeline();
      
      // Animate heading with split text effect
      if (headingRef.current) {
        gsap.set(headingRef.current, { opacity: 0 });
        tl.to(headingRef.current, {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        });
      }

      // Animate tagline
      if (taglineRef.current) {
        gsap.set(taglineRef.current, { opacity: 0, y: 30 });
        tl.to(taglineRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out"
        }, "-=0.4");
      }

      // Animate buttons
      if (buttonsRef.current) {
        gsap.set(buttonsRef.current.children, { opacity: 0, y: 20, scale: 0.9 });
        tl.to(buttonsRef.current.children, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)"
        }, "-=0.3");
      }

      // Animate floating shapes
      if (floatingShapesRef.current) {
        const shapes = floatingShapesRef.current.children;
        
        Array.from(shapes).forEach((shape, index) => {
          gsap.set(shape, { opacity: 0, scale: 0 });
          gsap.to(shape, {
            opacity: 1,
            scale: 1,
            duration: 1,
            delay: index * 0.2,
            ease: "back.out(1.7)"
          });

          // Continuous floating animation
          gsap.to(shape, {
            y: "random(-20, 20)",
            x: "random(-10, 10)",
            rotation: "random(-15, 15)",
            duration: "random(3, 6)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
          });
        });
      }

      // Magnetic effect for buttons
      const buttons = buttonsRef.current?.querySelectorAll('button');
      buttons?.forEach(button => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = button.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const deltaX = e.clientX - centerX;
          const deltaY = e.clientY - centerY;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
          const maxDistance = 100;
          
          if (distance < maxDistance) {
            const factor = (maxDistance - distance) / maxDistance;
            gsap.to(button, {
              x: deltaX * factor * 0.3,
              y: deltaY * factor * 0.3,
              duration: 0.3,
              ease: "power2.out"
            });
          }
        };

        const handleMouseLeave = () => {
          gsap.to(button, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.8)"
          });
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          button.removeEventListener('mousemove', handleMouseMove);
          button.removeEventListener('mouseleave', handleMouseLeave);
        };
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ y, opacity }}
    >
      {/* Background Effects */}
      <FloatingParticles count={50} speed={25} opacity={0.4} />
      
      {/* Floating Shapes */}
      <div ref={floatingShapesRef} className="absolute inset-0 pointer-events-none">
        {/* Golden Shape */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gold-gradient rounded-full blur-xl opacity-20 animate-liquid-float" />
        
        {/* Cyan Shape */}
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-cyan-gradient rounded-2xl blur-lg opacity-25 animate-liquid-pulse" />
        
        {/* Purple Shape */}
        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-md opacity-20 animate-float-delayed" />
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/2 right-1/3 w-16 h-16 border-2 border-gold-400/30 rounded-xl rotate-45 animate-rotate-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border border-cyan-400/40 rounded-full animate-scale-pulse" />
      </div>

      {/* Main Content */}
      <div className="container-premium text-center relative z-10">
        <HeroCard className="max-w-5xl mx-auto">
          {/* Main Heading */}
          <motion.h1 
            ref={headingRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-center"
            initial={{ opacity: 0 }}
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFFFFF 50%, #00FFFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            <span className="block mb-4">
              AI-powered Resume Matching
            </span>
            <span className="block">
              for the Next Generation
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            ref={taglineRef}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
          >
            Transform your hiring process with cutting-edge AI technology. 
            <span className="text-yellow-400 font-semibold"> Upload resumes</span>, 
            <span className="text-cyan-400 font-semibold"> search candidates</span>, and 
            <span className="text-purple-400 font-semibold"> discover perfect matches</span> 
            in seconds.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0 }}
          >
            <SimpleButton
              variant="gold"
              size="lg"
              icon={<ArrowUpTrayIcon className="w-6 h-6" />}
              onClick={() => {
                console.log('Upload button clicked!');
                onUploadClick?.();
              }}
            >
              Upload Resume
            </SimpleButton>

            <SimpleButton
              variant="cyan"
              size="lg"
              icon={<MagnifyingGlassIcon className="w-6 h-6" />}
              onClick={() => {
                console.log('Search button clicked!');
                onSearchClick?.();
              }}
            >
              Search Candidates
            </SimpleButton>
          </motion.div>

          {/* Feature Pills */}
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {[
              { icon: SparklesIcon, text: 'AI-Powered Analysis' },
              { icon: BoltIcon, text: 'Instant Results' },
              { icon: MagnifyingGlassIcon, text: 'Smart Search' }
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                className="flex items-center gap-2 px-4 py-2 glass-card border-glass-border rounded-2xl text-sm font-medium text-white/80"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transition: { duration: 0.2 }
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 1.4 + index * 0.1, 
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 400,
                  damping: 25
                }}
              >
                <feature.icon className="w-4 h-4 text-gold-400" />
                {feature.text}
              </motion.div>
            ))}
          </motion.div>
        </HeroCard>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <motion.div 
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div 
              className="w-1 h-3 bg-white/60 rounded-full"
              animate={{ 
                y: [0, 12, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;