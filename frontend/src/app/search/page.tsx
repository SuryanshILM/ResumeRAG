'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Candidate {
  id: string;
  name: string;
  title: string;
  location: string;
  experience: string;
  skills: string[];
  matchScore: number;
  avatar: string;
  summary: string;
}

const mockCandidates: Candidate[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Senior Full Stack Developer',
    location: 'San Francisco, CA',
    experience: '8 years',
    skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'GraphQL'],
    matchScore: 96,
    avatar: '👩‍💻',
    summary: 'Passionate full-stack developer with expertise in modern web technologies and cloud architecture.'
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'Machine Learning Engineer',
    location: 'Seattle, WA',
    experience: '6 years',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'AWS', 'Docker'],
    matchScore: 94,
    avatar: '👨‍💻',
    summary: 'ML engineer specializing in computer vision and natural language processing applications.'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    title: 'DevOps Engineer',
    location: 'Austin, TX',
    experience: '5 years',
    skills: ['Kubernetes', 'Docker', 'AWS', 'Terraform', 'Jenkins'],
    matchScore: 91,
    avatar: '👩‍🔧',
    summary: 'DevOps engineer focused on automation, scalability, and cloud infrastructure optimization.'
  },
  {
    id: '4',
    name: 'David Park',
    title: 'Product Manager',
    location: 'New York, NY',
    experience: '7 years',
    skills: ['Product Strategy', 'Agile', 'Analytics', 'UX Design', 'SQL'],
    matchScore: 89,
    avatar: '👨‍💼',
    summary: 'Strategic product manager with a track record of launching successful digital products.'
  }
];

export default function SearchPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchState, setSearchState] = useState<'idle' | 'loading' | 'results'>('idle');

  const handleSearch = () => {
    if (!searchQuery.trim()) return;
    
    console.log('✅ Search clicked for:', searchQuery);
    setIsLoading(true);
    setSearchState('loading');
    
    // Simulate API call
    setTimeout(() => {
      setCandidates(mockCandidates);
      setIsLoading(false);
      setSearchState('results');
    }, 1500);
  };

  const handleContactCandidate = (candidateId: string) => {
    console.log('✅ Contact candidate:', candidateId);
    alert('Contact feature will be implemented!');
  };

  const resetSearch = () => {
    console.log('✅ Reset search');
    setSearchQuery('');
    setCandidates([]);
    setSearchState('idle');
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
              { label: 'Upload', href: '/upload' },
              { label: 'Search', href: '/search', active: true },
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
                  background: item.active ? 'rgba(34, 211, 238, 0.2)' : 'transparent',
                  color: item.active ? '#22d3ee' : 'rgba(255, 255, 255, 0.8)',
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
              color: '#22d3ee'
            }}>
              Search Candidates
            </h1>
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Find the perfect candidates using our AI-powered semantic search. Search by skills, experience, location, or any combination.
            </p>
          </div>

          {/* Search Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '24px',
            padding: '3rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '2rem',
              alignItems: 'center'
            }}>
              <div style={{ position: 'relative', flex: 1 }}>
                <div style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '1.5rem'
                }}>
                  🔍
                </div>
                <input
                  type="text"
                  placeholder="Search by skills, job titles, or requirements..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  style={{
                    width: '100%',
                    padding: '16px 16px 16px 60px',
                    fontSize: '1.125rem',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: '#fff',
                    outline: 'none'
                  }}
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={!searchQuery.trim() || isLoading}
                style={{
                  padding: '16px 32px',
                  borderRadius: '12px',
                  border: 'none',
                  background: searchQuery.trim() ? 'linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)' : 'rgba(255, 255, 255, 0.1)',
                  color: searchQuery.trim() ? '#fff' : 'rgba(255, 255, 255, 0.5)',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  cursor: searchQuery.trim() ? 'pointer' : 'not-allowed',
                  boxShadow: searchQuery.trim() ? '0 4px 12px rgba(34, 211, 238, 0.4)' : 'none',
                  transition: 'all 0.3s ease',
                  minWidth: '140px'
                }}
                onMouseEnter={(e) => {
                  if (searchQuery.trim()) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 20px rgba(34, 211, 238, 0.6)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (searchQuery.trim()) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 12px rgba(34, 211, 238, 0.4)';
                  }
                }}
              >
                {isLoading ? 'Searching...' : 'Search'}
              </button>
            </div>

            {candidates.length > 0 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {candidates.length} candidates found
                </p>
                <button
                  onClick={resetSearch}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Clear Search
                </button>
              </div>
            )}
          </div>

          {/* Results */}
          {searchState === 'loading' && (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                background: 'linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 2rem',
                boxShadow: '0 8px 24px rgba(34, 211, 238, 0.4)',
                fontSize: '2.5rem',
                animation: 'pulse 2s infinite'
              }}>
                🔍
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Searching candidates...
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Our AI is analyzing thousands of profiles to find the best matches.
              </p>
            </div>
          )}

          {searchState === 'results' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '2rem'
            }}>
              {candidates.map((candidate) => (
                <div
                  key={candidate.id}
                  style={{
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '20px',
                    padding: '2rem',
                    transition: 'all 0.4s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-5px) scale(1.02)';
                    e.target.style.borderColor = 'rgba(34, 211, 238, 0.3)';
                    e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        background: 'linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem'
                      }}>
                        {candidate.avatar}
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fff', marginBottom: '0.25rem' }}>
                          {candidate.name}
                        </h3>
                        <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                          {candidate.title}
                        </p>
                      </div>
                    </div>
                    
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24' }}>
                        {candidate.matchScore}%
                      </div>
                      <div style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.6)' }}>
                        match
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p style={{ 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    fontSize: '14px', 
                    lineHeight: '1.5', 
                    marginBottom: '1.5rem' 
                  }}>
                    {candidate.summary}
                  </p>

                  {/* Details */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '1rem' }}>📍</span>
                      <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                        {candidate.location}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1rem' }}>💼</span>
                      <span style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                        {candidate.experience} experience
                      </span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {candidate.skills.slice(0, 4).map((skill) => (
                        <span
                          key={skill}
                          style={{
                            padding: '4px 8px',
                            background: 'rgba(34, 211, 238, 0.2)',
                            color: '#22d3ee',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: '500'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                      {candidate.skills.length > 4 && (
                        <span style={{ 
                          padding: '4px 8px', 
                          color: 'rgba(255, 255, 255, 0.6)', 
                          fontSize: '12px' 
                        }}>
                          +{candidate.skills.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                      onClick={() => handleContactCandidate(candidate.id)}
                      style={{
                        flex: 1,
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: 'none',
                        background: 'linear-gradient(135deg, #22d3ee 0%, #0891b2 100%)',
                        color: '#fff',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(34, 211, 238, 0.4)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-1px)';
                        e.target.style.boxShadow = '0 6px 16px rgba(34, 211, 238, 0.6)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 12px rgba(34, 211, 238, 0.4)';
                      }}
                    >
                      Contact
                    </button>
                    <button
                      style={{
                        flex: 1,
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        background: 'rgba(255, 255, 255, 0.1)',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                        e.target.style.color = '#fff';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.color = 'rgba(255, 255, 255, 0.8)';
                      }}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {searchState === 'idle' && (
            <div style={{
              textAlign: 'center',
              padding: '4rem 2rem'
            }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '2rem'
              }}>
                🔍
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                Start your search
              </h3>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                Enter your search criteria above to find the perfect candidates.
              </p>
            </div>
          )}
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