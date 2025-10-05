'use client';

import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '@/lib/utils';

interface WithGSAPProps {
  children: React.ReactNode;
  animation?: (element: HTMLElement) => void;
  className?: string;
}

/**
 * Higher-order component for GSAP animations
 * Safely handles client-side only animations
 */
export default function WithGSAP({ children, animation, className }: WithGSAPProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animation || !elementRef.current) return;
    
    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion()) return;

    // Import GSAP dynamically for client-side only
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      
      gsap.registerPlugin(ScrollTrigger);
      
      if (elementRef.current) {
        animation(elementRef.current);
      }
    };

    loadGSAP();
  }, [animation]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}