'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function InsightsPage() {
  const router = useRouter();

  const mockMetrics = [
    { label: 'Total Resumes Processed', value: '1,247', icon: '📄', color: '#fbbf24' },
    { label: 'Successful Matches', value: '892', icon: '✅', color: '#10b981' },
    { label: 'Active Searches', value: '67', icon: '🔍', color: '#22d3ee' },
    { label: 'AI Accuracy Rate', value: '94.3%', icon: '🎯', color: '#a855f7' }
  ];

  const recentActivity = [
    { action: 'Resume uploaded', candidate: 'John Smith - Software Engineer', time: '2 minutes ago', status: 'success' },
    { action: 'Search completed', query: 'Python developers in SF', time: '5 minutes ago', status: 'success' },
    { action: 'Match found', candidate: 'Sarah Johnson - Full Stack Developer', time: '12 minutes ago', status: 'success' },
    { action: 'Analysis completed', candidate: 'Michael Chen - ML Engineer', time: '18 minutes ago', status: 'success' }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0b14 0%, #1a1b2e 50%, #16213e 100%)',
      color: '#ffffff',
      position: 'relative'
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

          {/* Navigation */}
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {[
              { label: 'Home', href: '/' },
              { label: 'Upload', href: '/upload' },
              { label: 'Search', href: '/search' },
              { label: 'Insights', href: '/insights', active: true }
            ].map(item => (
              <button
                key={item.label}
                onClick={() => {
                  console.log(`Navigation: ${item.label} clicked`);
                  router.push(item.href);
                }}
                style={{
                  padding: '8px 16px',
                  borderRadius: '12px',
                  border: 'none',
                  background: item.active ? 'rgba(168, 85, 247, 0.2)' : 'transparent',
                  color: item.active ? '#a855f7' : 'rgba(255, 255, 255, 0.8)',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Back Button */}
          <button
            onClick={() => router.push('/')}
            style={{
              padding: '12px 24px',
              borderRadius: '12px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              background: 'rgba(255, 255, 255, 0.1)',
              color: '#fff',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Back to Home
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ paddingTop: '80px', minHeight: '100vh', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#a855f7'
            }}>
              Analytics & Insights
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Get deep insights into your hiring process with AI-powered analytics and real-time performance metrics.
            </p>
          </div>

          {/* Metrics Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {mockMetrics.map((metric, index) => (
              <div
                key={metric.label}
                style={{
                  background: 'rgba(255, 255, 255, 0.08)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '20px',
                  padding: '2rem',
                  textAlign: 'center',
                  transition: 'all 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-5px) scale(1.02)';
                  e.target.style.borderColor = `${metric.color}50`;
                  e.target.style.boxShadow = `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px ${metric.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: `linear-gradient(135deg, ${metric.color} 0%, ${metric.color}80 100%)`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '1.5rem'
                }}>
                  {metric.icon}
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: metric.color,
                  marginBottom: '0.5rem'
                }}>
                  {metric.value}
                </div>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}>
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
            gap: '2rem'
          }}>
            {/* Recent Activity */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '20px',
              padding: '2rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#fff',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                📊 Recent Activity
              </h3>
              <div style={{ space: '1rem' }}>
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '1rem',
                      marginBottom: '1rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.transform = 'translateX(0)';
                    }}
                  >
                    <div style={{
                      width: '8px',
                      height: '8px',
                      background: activity.status === 'success' ? '#10b981' : '#fbbf24',
                      borderRadius: '50%',
                      marginRight: '1rem',
                      flexShrink: 0
                    }} />
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontWeight: '600',
                        color: '#fff',
                        marginBottom: '0.25rem'
                      }}>
                        {activity.action}
                      </div>
                      <div style={{
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.7)',
                        marginBottom: '0.25rem'
                      }}>
                        {activity.candidate || activity.query}
                      </div>
                      <div style={{
                        fontSize: '12px',
                        color: 'rgba(255, 255, 255, 0.5)'
                      }}>
                        {activity.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '20px',
              padding: '2rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#fff',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                ⚡ Quick Actions
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button
                  onClick={() => {
                    console.log('✅ Generate Report clicked');
                    alert('Report generation feature will be implemented!');
                  }}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: 'none',
                    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                    color: '#000',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(251, 191, 36, 0.4)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
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
                  📈 Generate Report
                </button>
                
                <button
                  onClick={() => {
                    console.log('✅ Export Data clicked');
                    alert('Data export feature will be implemented!');
                  }}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: '2px solid rgba(34, 211, 238, 0.3)',
                    background: 'rgba(34, 211, 238, 0.1)',
                    color: '#22d3ee',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(34, 211, 238, 0.2)';
                    e.target.style.borderColor = 'rgba(34, 211, 238, 0.5)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(34, 211, 238, 0.1)';
                    e.target.style.borderColor = 'rgba(34, 211, 238, 0.3)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  📊 Export Data
                </button>

                <button
                  onClick={() => {
                    console.log('✅ View Analytics clicked');
                    alert('Advanced analytics feature will be implemented!');
                  }}
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: '2px solid rgba(168, 85, 247, 0.3)',
                    background: 'rgba(168, 85, 247, 0.1)',
                    color: '#a855f7',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(168, 85, 247, 0.2)';
                    e.target.style.borderColor = 'rgba(168, 85, 247, 0.5)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(168, 85, 247, 0.1)';
                    e.target.style.borderColor = 'rgba(168, 85, 247, 0.3)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  🔬 Advanced Analytics
                </button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{
            textAlign: 'center',
            marginTop: '4rem',
            padding: '3rem',
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '24px',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: '#fff'
            }}>
              Ready to optimize your hiring process?
            </h2>
            <p style={{
              color: 'rgba(255, 255, 255, 0.7)',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem'
            }}>
              Use our AI-powered insights to make better hiring decisions and find the perfect candidates faster.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => router.push('/upload')}
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
                  minWidth: '180px'
                }}
              >
                Upload Resume
              </button>
              <button
                onClick={() => router.push('/search')}
                style={{
                  padding: '16px 32px',
                  borderRadius: '12px',
                  border: '2px solid rgba(34, 211, 238, 0.3)',
                  background: 'rgba(34, 211, 238, 0.1)',
                  color: '#22d3ee',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  minWidth: '180px'
                }}
              >
                Search Candidates
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}