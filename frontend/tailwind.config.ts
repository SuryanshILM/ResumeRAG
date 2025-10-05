import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Navy dark background tones
        navy: {
          50: '#f0f4ff',
          100: '#e6ecff',
          200: '#ccdaff',
          300: '#99bdff',
          400: '#5c94ff',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af',
          800: '#1e3a8a',
          900: '#0f172a',
          950: '#020617',
        },
        // Premium gold accents
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        // Cyan accent tones
        cyan: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
          950: '#083344',
        },
        // Glass effect utilities
        glass: {
          DEFAULT: 'rgba(255,255,255,0.03)',
          light: 'rgba(255,255,255,0.05)',
          medium: 'rgba(255,255,255,0.08)',
          heavy: 'rgba(255,255,255,0.12)',
          border: 'rgba(255,255,255,0.15)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        // Premium liquid animations
        'liquid-bg': 'liquidBg 20s linear infinite',
        'liquid-float': 'liquidFloat 8s ease-in-out infinite',
        'liquid-pulse': 'liquidPulse 4s ease-in-out infinite',
        
        // Elegant motion effects
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'gentle-bounce': 'gentleBounce 2s ease-in-out infinite',
        
        // Glow and shimmer effects
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'gold-glow': 'goldGlow 2s ease-in-out infinite',
        'cyan-glow': 'cyanGlow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        
        // Entrance animations
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        
        // Particle and background effects
        'particle-float': 'particleFloat 12s linear infinite',
        'rotate-slow': 'rotateSlow 30s linear infinite',
        'rotate-reverse': 'rotateReverse 25s linear infinite',
      },
      keyframes: {
        // Liquid background movement
        liquidBg: {
          '0%': { 'background-position': '0% 0%, 100% 100%' },
          '25%': { 'background-position': '25% 75%, 75% 25%' },
          '50%': { 'background-position': '50% 50%, 50% 50%' },
          '75%': { 'background-position': '75% 25%, 25% 75%' },
          '100%': { 'background-position': '0% 0%, 100% 100%' },
        },
        liquidFloat: {
          '0%, 100%': { 
            transform: 'translateX(-50%) translateY(-50%) rotate(0deg) scale(1)',
            opacity: '0.6' 
          },
          '33%': { 
            transform: 'translateX(-50%) translateY(-50%) rotate(120deg) scale(1.1)',
            opacity: '0.8' 
          },
          '66%': { 
            transform: 'translateX(-50%) translateY(-50%) rotate(240deg) scale(0.9)',
            opacity: '0.7' 
          },
        },
        liquidPulse: {
          '0%, 100%': { 
            transform: 'scale(1) rotate(0deg)',
            opacity: '0.4' 
          },
          '50%': { 
            transform: 'scale(1.2) rotate(180deg)',
            opacity: '0.8' 
          },
        },
        
        // Elegant floating motion
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-8px) rotate(1deg)' },
          '66%': { transform: 'translateY(-4px) rotate(-0.5deg)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        
        // Glow effects
        glowPulse: {
          '0%, 100%': { 'box-shadow': '0 0 20px rgba(251, 191, 36, 0.3)' },
          '50%': { 'box-shadow': '0 0 40px rgba(251, 191, 36, 0.6), 0 0 60px rgba(251, 191, 36, 0.2)' },
        },
        goldGlow: {
          '0%, 100%': { 
            'box-shadow': '0 0 25px rgba(251, 191, 36, 0.4)',
            opacity: '0.9' 
          },
          '50%': { 
            'box-shadow': '0 0 50px rgba(251, 191, 36, 0.7), 0 0 75px rgba(251, 191, 36, 0.3)',
            opacity: '1' 
          },
        },
        cyanGlow: {
          '0%, 100%': { 
            'box-shadow': '0 0 25px rgba(34, 211, 238, 0.4)',
            opacity: '0.9' 
          },
          '50%': { 
            'box-shadow': '0 0 50px rgba(34, 211, 238, 0.7), 0 0 75px rgba(34, 211, 238, 0.3)',
            opacity: '1' 
          },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        
        // Entrance animations
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        
        // Background effects
        particleFloat: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-10vh) rotate(360deg)', opacity: '0' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotateReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '40px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        // Glass effects
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 20px 60px 0 rgba(31, 38, 135, 0.4)',
        'glass-xl': '0 25px 80px 0 rgba(31, 38, 135, 0.45)',
        'inner-glass': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        
        // Glow effects
        'gold-glow': '0 0 30px rgba(251, 191, 36, 0.3)',
        'gold-glow-lg': '0 0 50px rgba(251, 191, 36, 0.4)',
        'cyan-glow': '0 0 30px rgba(34, 211, 238, 0.3)',
        'cyan-glow-lg': '0 0 50px rgba(34, 211, 238, 0.4)',
        
        // Premium shadows
        'premium': '0 20px 40px -4px rgba(0, 0, 0, 0.8)',
        'premium-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.85)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'glass-border': 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.05) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
        'cyan-gradient': 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 50%, #0891b2 100%)',
        'dark-gradient': 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)',
        'premium-dark': 'radial-gradient(ellipse at top, #1e293b 0%, #0f172a 50%, #020617 100%)',
        'liquid-gradient': 'linear-gradient(45deg, #020617 0%, #0f172a 25%, #1e293b 50%, #0f172a 75%, #020617 100%)',
      },
      perspective: {
        '1000': '1000px',
        '2000': '2000px',
      },
      transformOrigin: {
        'center-bottom': 'center bottom',
      },
    },
  },
  plugins: [
    // Add custom utility classes
    function({ addUtilities }: any) {
      addUtilities({
        '.text-gradient-gold': {
          'background': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'color': 'transparent',
        },
        '.text-gradient-cyan': {
          'background': 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'color': 'transparent',
        },
        '.container-premium': {
          'max-width': '1400px',
          'margin': '0 auto',
          'padding': '0 2rem',
        },
        '.bg-gold-gradient': {
          'background': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        },
        '.bg-cyan-gradient': {
          'background': 'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
        },
      });
    },
  ],
};
export default config;
