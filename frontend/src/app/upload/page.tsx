'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadPage() {
  const router = useRouter();
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'success'>('idle');
  const [fileName, setFileName] = useState('');
  const [progress, setProgress] = useState(0);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log('✅ File selected:', file.name);
      setFileName(file.name);
      setUploadState('uploading');
      setProgress(0);
      
      // Simulate upload progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setUploadState('success');
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  const resetUpload = () => {
    console.log('✅ Reset upload clicked');
    setUploadState('idle');
    setFileName('');
    setProgress(0);
  };

  const handleViewAnalysis = () => {
    console.log('✅ View analysis clicked');
    router.push('/insights');
  };

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
              { label: 'Upload', href: '/upload', active: true },
              { label: 'Search', href: '/search' },
              { label: 'Insights', href: '/insights' }
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
                  background: item.active ? 'rgba(251, 191, 36, 0.2)' : 'transparent',
                  color: item.active ? '#fbbf24' : 'rgba(255, 255, 255, 0.8)',
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
      <main style={{ paddingTop: '80px', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '600px', width: '100%' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: '#fbbf24'
            }}>
              Upload Your Resume
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '1.6'
            }}>
              Our AI will analyze your resume and extract key insights to help match you with perfect opportunities.
            </p>
          </div>

          {/* Upload Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '24px',
            padding: '3rem',
            textAlign: 'center'
          }}>
            {uploadState === 'idle' && (
              <div>
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  boxShadow: '0 8px 24px rgba(251, 191, 36, 0.4)',
                  fontSize: '3rem'
                }}>
                  📤
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
                  Select Your Resume
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '2rem' }}>
                  Choose a PDF, DOC, DOCX, or TXT file to upload
                </p>
                
                <input
                  type="file"
                  id="resume-upload"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFileSelect}
                  style={{ display: 'none' }}
                />
                <label
                  htmlFor="resume-upload"
                  style={{
                    display: 'inline-block',
                    padding: '16px 32px',
                    background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                    color: '#000',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(251, 191, 36, 0.4)',
                    transition: 'all 0.3s ease',
                    border: 'none'
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
                  Select Resume File
                </label>
                
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem', fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>
                  <span>PDF</span> • <span>DOC</span> • <span>DOCX</span> • <span>TXT</span>
                </div>
              </div>
            )}

            {uploadState === 'uploading' && (
              <div>
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  boxShadow: '0 8px 24px rgba(34, 211, 238, 0.4)',
                  fontSize: '3rem',
                  animation: 'pulse 2s infinite'
                }}>
                  ✨
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1rem' }}>
                  Analyzing Resume...
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '2rem' }}>
                  {fileName}
                </p>
                
                <div style={{
                  width: '100%',
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                  marginBottom: '1.5rem',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    background: 'linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)',
                    borderRadius: '4px',
                    width: `${progress}%`,
                    transition: 'width 0.3s ease'
                  }} />
                </div>
                
                <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>
                  {progress}% complete
                </p>
              </div>
            )}

            {uploadState === 'success' && (
              <div>
                <div style={{
                  width: '100px',
                  height: '100px',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)',
                  fontSize: '3rem'
                }}>
                  ✅
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981', marginBottom: '1rem' }}>
                  Upload Complete!
                </h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '2rem' }}>
                  Your resume has been successfully analyzed.
                </p>
                
                <div style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  marginBottom: '2rem',
                  textAlign: 'left'
                }}>
                  <h4 style={{ fontWeight: '600', color: '#fff', marginBottom: '1rem' }}>Analysis Results</h4>
                  <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.6' }}>
                    <p>• Skills detected: JavaScript, React, Node.js, Python</p>
                    <p>• Experience level: 5+ years</p>
                    <p>• Match score: 92%</p>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                  <button 
                    onClick={handleViewAnalysis}
                    style={{
                      padding: '16px 24px',
                      background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                      color: '#000',
                      fontSize: '1rem',
                      fontWeight: '600',
                      borderRadius: '12px',
                      border: 'none',
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
                    View Full Analysis
                  </button>
                  <button 
                    onClick={resetUpload}
                    style={{
                      padding: '16px 24px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: '2px solid rgba(255, 255, 255, 0.2)',
                      color: '#fff',
                      fontSize: '1rem',
                      fontWeight: '600',
                      borderRadius: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    }}
                  >
                    Upload Another
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}