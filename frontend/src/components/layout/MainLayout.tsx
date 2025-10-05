'use client';

import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../ui/Navbar';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isDark, setIsDark] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle theme toggle
  const handleThemeToggle = () => {
    setIsDark(!isDark);
  };

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gold-gradient z-50 origin-left"
        style={{ width: `${scrollProgress}%` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />

      {/* Navigation */}
      <Navbar onThemeToggle={handleThemeToggle} isDark={isDark} />

      {/* Main Content */}
      <main className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={children ? 'content' : 'loading'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <motion.footer 
      className="relative py-16 mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container-premium">
        <div className="glass-card p-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <div className="w-8 h-8 bg-gold-gradient rounded-lg flex items-center justify-center">
                  <span className="text-navy-950 font-bold">R</span>
                </div>
                <span className="text-xl font-heading font-bold text-gradient-gold">
                  ResumeRAG
                </span>
              </div>
              <p className="text-white/60 text-sm">
                AI-powered resume matching for the next generation of hiring.
              </p>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-white">Product</h4>
              <div className="space-y-2">
                {['Features', 'Pricing', 'API', 'Enterprise'].map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="block text-white/80 hover:text-yellow-400 transition-colors duration-300 text-sm font-medium"
                    whileHover={{ x: 4, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="space-y-4">
              <h4 className="font-heading font-semibold text-white">Support</h4>
              <div className="space-y-2">
                {['Documentation', 'Help Center', 'Contact', 'Status'].map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="block text-white/80 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
                    whileHover={{ x: 4, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-glass-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/50 text-sm">
                © 2024 ResumeRAG. All rights reserved.
              </div>
              <div className="flex space-x-6">
                {['Privacy', 'Terms', 'Security'].map((link) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-300 text-sm font-medium"
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
                    }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent pointer-events-none" />
    </motion.footer>
  );
};

export default MainLayout;