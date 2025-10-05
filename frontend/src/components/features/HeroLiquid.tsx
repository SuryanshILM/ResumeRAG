'use client';

import { useEffect, useRef } from 'react';
import { ArrowRightIcon, DocumentArrowUpIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import AnimatedButton from '@/components/ui/AnimatedButton';
import WithGSAP from '@/components/ui/WithGSAP';
import { cn } from '@/lib/utils';

interface HeroLiquidProps {
  onUploadClick?: () => void;
  onSearchClick?: () => void;
}

export default function HeroLiquid({ onUploadClick, onSearchClick }: HeroLiquidProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  const heroAnimation = async (element: HTMLElement) => {
    const { gsap } = await import('gsap');
    
    const tl = gsap.timeline();
    
    // Animate title characters
    if (titleRef.current) {
      const chars = titleRef.current.textContent?.split('') || [];
      titleRef.current.innerHTML = chars.map(char => 
        char === ' ' ? ' ' : `<span style="display: inline-block; opacity: 0;">${char}</span>`
      ).join('');
      
      tl.to(titleRef.current.querySelectorAll('span'), {
        opacity: 1,
        y: 0,
        duration: 0.05,
        stagger: 0.02,
        ease: 'power2.out'
      });
    }
    
    // Animate subtitle
    tl.fromTo(subtitleRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    );
    
    // Animate buttons
    tl.fromTo(buttonsRef.current?.children,
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.7)' },
      '-=0.2'
    );
    
    // Floating animation for the entire hero
    gsap.to(element, {
      y: -10,
      duration: 4,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1
    });
  };

  return (
    <WithGSAP animation={heroAnimation} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-gold-400/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-gold-500/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-accent-gold-300/4 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main heading */}
          <h1 
            ref={titleRef}
            className={cn(
              "text-6xl md:text-7xl lg:text-8xl font-bold",
              "bg-gradient-to-r from-white via-white to-accent-gold-400 bg-clip-text text-transparent",
              "leading-tight tracking-tight"
            )}
          >
            ResumeRAG
          </h1>
          
          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl lg:text-3xl text-foreground-muted max-w-3xl mx-auto leading-relaxed"
          >
            AI-powered resume matching that understands talent beyond keywords. 
            <span className="text-accent-gold-400"> Discover perfect fits</span> with 
            semantic search and explainable insights.
          </p>
          
          {/* CTA Buttons */}
          <div 
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <AnimatedButton
              variant="gradient"
              size="lg"
              onClick={onUploadClick}
              className="group flex items-center gap-3 min-w-[200px]"
            >
              <DocumentArrowUpIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Upload Resume
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </AnimatedButton>
            
            <AnimatedButton
              variant="glass"
              size="lg"
              onClick={onSearchClick}
              className="group flex items-center gap-3 min-w-[200px]"
            >
              <MagnifyingGlassIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
              Search Candidates
            </AnimatedButton>
          </div>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 text-sm text-foreground-muted">
            <div className="glass p-6 rounded-2xl hover:bg-glass-medium transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent-gold-400/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-accent-gold-400/20 transition-colors">
                <svg className="w-6 h-6 text-accent-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Semantic Matching</h3>
              <p>Advanced AI understands skills and experience beyond exact keywords</p>
            </div>
            
            <div className="glass p-6 rounded-2xl hover:bg-glass-medium transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent-gold-400/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-accent-gold-400/20 transition-colors">
                <svg className="w-6 h-6 text-accent-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Lightning Fast</h3>
              <p>Search through thousands of resumes in milliseconds</p>
            </div>
            
            <div className="glass p-6 rounded-2xl hover:bg-glass-medium transition-all duration-300 group">
              <div className="w-12 h-12 bg-accent-gold-400/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-accent-gold-400/20 transition-colors">
                <svg className="w-6 h-6 text-accent-gold-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Explainable AI</h3>
              <p>Understand exactly why candidates match your requirements</p>
            </div>
          </div>
        </div>
      </div>
    </WithGSAP>
  );
}