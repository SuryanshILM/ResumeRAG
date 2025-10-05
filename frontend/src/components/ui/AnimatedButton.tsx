'use client';

import { motion } from 'framer-motion';
import { ReactNode, ButtonHTMLAttributes, forwardRef } from 'react';

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'cyan' | 'glass' | 'outline' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  isLoading?: boolean;
  glowEffect?: boolean;
  magnetic?: boolean;
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({
    variant = 'gold',
    size = 'md',
    children,
    icon,
    iconPosition = 'left',
    isLoading = false,
    glowEffect = false,
    magnetic = false,
    className = '',
    disabled,
    ...restProps
  }, ref) => {
    // Remove custom props that shouldn't be passed to DOM
    const {
      magnetic: _magnetic,
      glowEffect: _glowEffect,
      isLoading: _isLoading,
      icon: _icon,
      iconPosition: _iconPosition,
      ...props
    } = restProps as any;
    const baseClasses = 'relative inline-flex items-center justify-center font-semibold transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variantClasses = {
      gold: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0',
      cyan: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0',
      glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 shadow-lg',
      outline: 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 shadow-md',
      gradient: 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold shadow-lg hover:shadow-xl'
    };

    const sizeClasses = {
      sm: 'px-4 py-2.5 text-sm rounded-lg gap-2 min-h-[36px]',
      md: 'px-6 py-3 text-base rounded-xl gap-3 min-h-[44px]',
      lg: 'px-8 py-4 text-lg rounded-xl gap-3 min-h-[52px]',
      xl: 'px-10 py-5 text-xl rounded-2xl gap-4 min-h-[60px]'
    };

    const glowClasses = glowEffect 
      ? variant === 'gold' 
        ? 'animate-gold-glow' 
        : variant === 'cyan' 
          ? 'animate-cyan-glow' 
          : 'animate-glow-pulse'
      : '';

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${glowClasses} ${className}`;

    const buttonContent = (
      <>
        {/* Shimmer effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-500 group-hover:translate-x-full" />
        
        {/* Loading spinner */}
        {isLoading && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}

        {/* Content */}
        <div className={`flex items-center justify-center gap-inherit ${isLoading ? 'invisible' : 'visible'}`}>
          {icon && iconPosition === 'left' && (
            <motion.span
              className="flex-shrink-0"
              animate={isLoading ? { scale: 0 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {icon}
            </motion.span>
          )}
          
          <span className="relative z-10 font-inherit">
            {children}
          </span>
          
          {icon && iconPosition === 'right' && (
            <motion.span
              className="flex-shrink-0"
              animate={isLoading ? { scale: 0 } : { scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              {icon}
            </motion.span>
          )}
        </div>
      </>
    );

    if (magnetic) {
      return (
        <motion.button
          ref={ref}
          className={`${combinedClasses} group`}
          whileHover={{ 
            scale: 1.05, 
            y: -2,
            transition: { type: 'spring', stiffness: 400, damping: 25 }
          }}
          whileTap={{ 
            scale: 0.95,
            transition: { type: 'spring', stiffness: 400, damping: 25 }
          }}
          disabled={disabled || isLoading}
          {...props}
        >
          {buttonContent}
        </motion.button>
      );
    }

    return (
      <motion.button
        ref={ref}
        className={`${combinedClasses} group`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        disabled={disabled || isLoading}
        {...props}
      >
        {buttonContent}
      </motion.button>
    );
  }
);

AnimatedButton.displayName = 'AnimatedButton';

export default AnimatedButton;
