'use client';

import { motion } from 'framer-motion';
import { ReactNode, ButtonHTMLAttributes } from 'react';

interface SimpleButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  variant?: 'gold' | 'cyan' | 'glass' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
  loading?: boolean;
}

export default function SimpleButton({
  variant = 'gold',
  size = 'md',
  children,
  icon,
  loading = false,
  className = '',
  disabled,
  onClick,
  ...props
}: SimpleButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 overflow-hidden focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    gold: 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]',
    cyan: 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]',
    glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 hover:border-white/30 shadow-lg hover:scale-[1.02]',
    outline: 'border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 shadow-md hover:scale-[1.02]'
  };

  const sizeClasses = {
    sm: 'px-4 py-2.5 text-sm rounded-lg gap-2',
    md: 'px-6 py-3 text-base rounded-xl gap-3',
    lg: 'px-8 py-4 text-lg rounded-xl gap-3'
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!disabled && !loading && onClick) {
      onClick(e);
    }
  };

  return (
    <motion.button
      className={combinedClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      whileHover={{ 
        y: -2, 
        scale: 1.02,
        transition: { type: 'spring', stiffness: 400, damping: 25 }
      }}
      whileTap={{ 
        y: 0, 
        scale: 0.98,
        transition: { type: 'spring', stiffness: 600, damping: 30 }
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      {...props}
    >
      {/* Loading spinner */}
      {loading && (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      )}
      
      {/* Icon */}
      {icon && !loading && (
        <span className="flex-shrink-0">
          {icon}
        </span>
      )}
      
      {/* Content */}
      <span className={loading ? 'opacity-70' : ''}>
        {children}
      </span>
    </motion.button>
  );
}