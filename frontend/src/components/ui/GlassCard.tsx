'use client';

import { motion } from 'framer-motion';
import { ReactNode, HTMLAttributes, forwardRef } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'light' | 'medium' | 'heavy' | 'premium';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  hover?: boolean;
  glow?: boolean;
  border?: boolean;
  rounded?: 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({
    children,
    variant = 'medium',
    size = 'md',
    hover = true,
    glow = false,
    border = true,
    rounded = '3xl',
    blur = 'xl',
    shadow = 'lg',
    animated = true,
    className = '',
    ...props
  }, ref) => {
    // Base classes
    const baseClasses = 'relative overflow-hidden transition-all duration-300';

    // Variant classes for different glass intensities
    const variantClasses = {
      light: 'bg-glass-light backdrop-blur-md',
      medium: 'bg-glass-medium backdrop-blur-lg',
      heavy: 'bg-glass-heavy backdrop-blur-xl',
      premium: 'bg-gradient-to-br from-glass-medium to-glass-light backdrop-blur-2xl'
    };

    // Size classes
    const sizeClasses = {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
      xl: 'p-10'
    };

    // Border classes
    const borderClasses = border ? {
      light: 'border border-glass-border',
      medium: 'border border-glass-border',
      heavy: 'border-2 border-glass-heavy',
      premium: 'border border-glass-border'
    }[variant] : '';

    // Rounded classes
    const roundedClasses = {
      md: 'rounded-xl',
      lg: 'rounded-2xl',
      xl: 'rounded-3xl',
      '2xl': 'rounded-4xl',
      '3xl': 'rounded-5xl'
    };

    // Shadow classes
    const shadowClasses = {
      sm: 'shadow-glass',
      md: 'shadow-glass-lg',
      lg: 'shadow-glass-xl',
      xl: 'shadow-premium'
    };

    // Blur classes
    const blurClasses = {
      sm: 'backdrop-blur-sm',
      md: 'backdrop-blur-md',
      lg: 'backdrop-blur-lg',
      xl: 'backdrop-blur-xl'
    };

    // Hover classes
    const hoverClasses = hover ? 'hover:shadow-glass-xl hover:border-glass-heavy hover:bg-glass-heavy hover:scale-[1.02] hover:-translate-y-1' : '';

    // Glow classes
    const glowClasses = glow ? 'shadow-cyan-glow hover:shadow-cyan-glow-lg' : '';

    const combinedClasses = `
      ${baseClasses}
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      ${borderClasses}
      ${roundedClasses[rounded]}
      ${shadowClasses[shadow]}
      ${blurClasses[blur]}
      ${hoverClasses}
      ${glowClasses}
      ${className}
    `.replace(/\s+/g, ' ').trim();

    const cardContent = (
      <>
        {/* Gradient overlay for premium variant */}
        {variant === 'premium' && (
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-cyan-500/5 rounded-inherit pointer-events-none" />
        )}
        
        {/* Top highlight line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-glass-border to-transparent" />
        
        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Shimmer effect on hover */}
        {hover && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full pointer-events-none" />
        )}
      </>
    );

    if (animated) {
      return (
        <motion.div
          ref={ref}
          className={`${combinedClasses} group`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.23, 1, 0.32, 1] 
          }}
          whileHover={hover ? { 
            scale: 1.02, 
            y: -4,
            transition: { type: 'spring', stiffness: 400, damping: 25 }
          } : undefined}
          {...props}
        >
          {cardContent}
        </motion.div>
      );
    }

    return (
      <div
        ref={ref}
        className={`${combinedClasses} group`}
        {...props}
      >
        {cardContent}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export default GlassCard;

// Pre-configured card variants for common use cases
export const HeroCard = ({ children, ...props }: Omit<GlassCardProps, 'variant'>) => (
  <GlassCard variant="premium" size="xl" glow shadow="xl" {...props}>
    {children}
  </GlassCard>
);

export const FeatureCard = ({ children, ...props }: Omit<GlassCardProps, 'variant'>) => (
  <GlassCard variant="medium" size="lg" hover glow={false} {...props}>
    {children}
  </GlassCard>
);

export const StatCard = ({ children, ...props }: Omit<GlassCardProps, 'variant'>) => (
  <GlassCard variant="light" size="md" hover glow={false} rounded="2xl" {...props}>
    {children}
  </GlassCard>
);

export const ContentCard = ({ children, ...props }: Omit<GlassCardProps, 'variant'>) => (
  <GlassCard variant="medium" size="lg" hover={false} {...props}>
    {children}
  </GlassCard>
);