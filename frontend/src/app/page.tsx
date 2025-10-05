'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HomePage() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleUploadClick = () => {
    console.log('✅ Upload button clicked!');
    router.push('/upload');
  };

  const handleSearchClick = () => {
    console.log('✅ Search button clicked!');
    router.push('/search');
  };

  const handleInsightsClick = () => {
    console.log('✅ Insights button clicked!');
    router.push('/insights');
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0b14 0%, #1a1b2e 50%, #16213e 100%)',
      color: '#ffffff',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: 50,
        background: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '0 2rem'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '80px'
        }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(251, 191, 36, 0.4)'
            }}>
              <span style={{ color: '#000', fontWeight: 'bold', fontSize: '18px' }}>R</span>
            </div>
            <span style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#fbbf24'
            }}>
              ResumeRAG
            </span>
          </div>

          {/* Desktop Navigation */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {[
              { label: 'Home', href: '/', active: true },
              { label: 'Upload', href: '/upload' },
              { label: 'Search', href: '/search' },
              { label: 'Insights', href: '/insights' }
            ].map(item => (
              <button
                key={item.label}
                onClick={() => {
                  console.log(`Navigation: ${item.label} clicked`);
                  if (item.href === '/upload') handleUploadClick();
                  else if (item.href === '/search') handleSearchClick();
                  else if (item.href === '/insights') handleInsightsClick();
                }}
                style={{
                  padding: '8px 16px',
                  borderRadius: '12px',
                  border: 'none',
                  background: item.active ? 'rgba(251, 191, 36, 0.2)' : 'transparent',
                  color: item.active ? '#fbbf24' : 'rgba(255, 255, 255, 0.8)',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (!item.active) {
                    e.target.style.color = '#ffffff';
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!item.active) {
                    e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Get Started Button */}
          <button
            onClick={handleUploadClick}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              border: 'none',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              color: '#000',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(251, 191, 36, 0.4)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px) scale(1.05)';
              e.target.style.boxShadow = '0 8px 20px rgba(251, 191, 36, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 4px 12px rgba(251, 191, 36, 0.4)';
            }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ position: 'relative', zIndex: 10, paddingTop: '80px' }}>
        {/* Hero Section */}
        <section style={{
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '4rem 2rem'
        }}>
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: 'bold',
              lineHeight: '1.1',
              marginBottom: '2rem',
              color: '#ffffff'
            }}>
              AI-Powered Resume Matching<br />
              <span style={{ color: '#22d3ee' }}>
                for the Next Generation
              </span>
            </h1>

            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '800px',
              margin: '0 auto 3rem',
              lineHeight: '1.6'
            }}>
              Transform your hiring process with cutting-edge AI technology.{' '}
              <span style={{ color: '#fbbf24', fontWeight: '600' }}>Upload resumes</span>,{' '}
              <span style={{ color: '#22d3ee', fontWeight: '600' }}>search candidates</span>, and{' '}
              <span style={{ color: '#a855f7', fontWeight: '600' }}>discover perfect matches</span>{' '}
              in seconds.
            </p>

            {/* Action Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem',
              maxWidth: '1000px',
              margin: '0 auto 4rem'
            }}>
              {/* Upload Card */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '24px',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.4s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)';
                e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(251, 191, 36, 0.3)';
                e.target.style.borderColor = 'rgba(251, 191, 36, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = 'none';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }}
              onClick={handleUploadClick}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  boxShadow: '0 8px 24px rgba(251, 191, 36, 0.4)',
                  fontSize: '2.5rem'
                }}>
                  📤
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>
                  Upload Resumes
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '2rem', lineHeight: '1.6' }}>
                  Upload and analyze resumes with our advanced AI system for instant insights and intelligent matching.
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleUploadClick();
                  }}
                  style={{
                    width: '100%',
                    padding: '16px 24px',
                    borderRadius: '12px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                    color: '#000',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(251, 191, 36, 0.4)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 20px rgba(251, 191, 36, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 12px rgba(251, 191, 36, 0.4)';
                  }}
                >
                  Start Uploading
                </button>
              </div>

              {/* Search Card */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '24px',
                padding: '2rem',
                textAlign: 'center',
                transition: 'all 0.4s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-8px) scale(1.02)';
                e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(34, 211, 238, 0.3)';
                e.target.style.borderColor = 'rgba(34, 211, 238, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = 'none';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
              }}
              onClick={handleSearchClick}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  boxShadow: '0 8px 24px rgba(34, 211, 238, 0.4)',
                  fontSize: '2.5rem'
                }}>
                  🔍
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>
                  Search Candidates
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '2rem', lineHeight: '1.6' }}>
                  Find perfect candidates using intelligent search and advanced matching algorithms powered by AI.
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSearchClick();
                  }}
                  style={{
                    width: '100%',
                    padding: '16px 24px',
                    borderRadius: '12px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)',
                    color: '#fff',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(34, 211, 238, 0.4)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 20px rgba(34, 211, 238, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 12px rgba(34, 211, 238, 0.4)';
                  }}
                >
                  Search Now
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto 4rem'
            }}>
              {[
                {
                  icon: '🤖',
                  title: 'AI-Powered Analysis',
                  description: 'Advanced machine learning algorithms analyze resumes and match candidates with unprecedented accuracy.',
                },
                {
                  icon: '⚡',
                  title: 'Lightning Fast Results',
                  description: 'Get comprehensive analysis and matching results in seconds, not hours. Speed meets precision.',
                },
                {
                  icon: '🎯',
                  title: 'Precision Matching',
                  description: 'Our smart algorithms ensure perfect candidate-job matches based on skills, experience, and culture fit.',
                }
              ].map((feature, index) => (
                <div
                  key={feature.title}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    padding: '2rem',
                    textAlign: 'center',
                    transition: 'all 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px) scale(1.02)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '1rem'
                  }}>
                    {feature.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#fff' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div style={{ textAlign: 'center' }}>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                marginBottom: '2rem',
                color: '#fff'
              }}>
                Ready to revolutionize your hiring?
              </h2>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  onClick={handleUploadClick}
                  style={{
                    padding: '16px 32px',
                    borderRadius: '12px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                    color: '#000',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(251, 191, 36, 0.4)',
                    transition: 'all 0.3s ease',
                    minWidth: '200px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.boxShadow = '0 12px 32px rgba(251, 191, 36, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = '0 8px 24px rgba(251, 191, 36, 0.4)';
                  }}
                >
                  Get Started Free
                </button>
                <button
                  onClick={handleInsightsClick}
                  style={{
                    padding: '16px 32px',
                    borderRadius: '12px',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease',
                    minWidth: '200px'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-3px) scale(1.05)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                >
                  📊 View Insights
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{
        background: 'rgba(0, 0, 0, 0.3)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '4rem 2rem 2rem',
        marginTop: '4rem'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: '#000', fontWeight: 'bold' }}>R</span>
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24' }}>
                ResumeRAG
              </span>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
              AI-powered resume matching for the next generation of hiring.
            </p>
          </div>

          <div>
            <h4 style={{ fontWeight: '600', color: '#fff', marginBottom: '1rem' }}>Product</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Features', 'Pricing', 'API', 'Enterprise'].map(link => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#fbbf24'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontWeight: '600', color: '#fff', marginBottom: '1rem' }}>Support</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Documentation', 'Help Center', 'Contact', 'Status'].map(link => (
                <a
                  key={link}
                  href="#"
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    textDecoration: 'none',
                    fontSize: '14px',
                    fontWeight: '500',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#22d3ee'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ color: 'rgba(255, 255, 255, 0.6)', fontSize: '14px' }}>
            © 2024 ResumeRAG. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy', 'Terms', 'Security'].map(link => (
              <a
                key={link}
                href="#"
                style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#fff'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.6)'}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}