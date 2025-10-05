'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MagnifyingGlassIcon as Search, 
  ArrowLeftIcon as ArrowLeft, 
  FunnelIcon as Filter,
  MapPinIcon as MapPin,
  ClockIcon as Clock,
  StarIcon as Star,
  UserIcon as User,
  CpuChipIcon as Brain,
  BriefcaseIcon as Briefcase,
  AcademicCapIcon as GraduationCap,
  EnvelopeIcon as Mail,
  PhoneIcon as Phone,
  TrophyIcon as Award
} from '@heroicons/react/24/outline';

interface PremiumSearchProps {
  onBack: () => void;
}

const mockCandidates = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Full Stack Developer",
    location: "San Francisco, CA",
    experience: "7 years",
    matchScore: 96,
    skills: ["React", "Node.js", "TypeScript", "AWS", "MongoDB"],
    education: "MS Computer Science - Stanford",
    avatar: "SJ",
    lastActive: "2 days ago",
    summary: "Experienced full-stack developer with expertise in modern web technologies and cloud architecture."
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Frontend Engineer",
    location: "Austin, TX",
    experience: "5 years",
    matchScore: 89,
    skills: ["Vue.js", "React", "CSS3", "JavaScript", "Docker"],
    education: "BS Software Engineering - UT Austin",
    avatar: "MC",
    lastActive: "1 week ago",
    summary: "Creative frontend developer specializing in user experience and modern JavaScript frameworks."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "DevOps Engineer",
    location: "Seattle, WA",
    experience: "6 years",
    matchScore: 92,
    skills: ["Kubernetes", "AWS", "CI/CD", "Python", "Terraform"],
    education: "MS Information Systems - University of Washington",
    avatar: "ER",
    lastActive: "3 days ago",
    summary: "DevOps specialist with strong background in cloud infrastructure and automation pipelines."
  }
];

const PremiumSearch = ({ onBack }: PremiumSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [candidates, setCandidates] = useState(mockCandidates);
  const [filteredCandidates, setFilteredCandidates] = useState(mockCandidates);
  const [selectedFilters, setSelectedFilters] = useState({
    experience: '',
    location: '',
    skills: ''
  });

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredCandidates(candidates);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const filtered = candidates.filter(candidate =>
        candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        candidate.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        candidate.skills.some(skill => 
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setFilteredCandidates(filtered);
      setIsSearching(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [searchQuery, candidates]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
  };

  return (
    <div className="min-h-screen p-4 relative overflow-hidden">
      <div className="container-premium relative z-10">
        {/* Header */}
        <motion.div 
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            onClick={onBack}
            className="btn-magnetic flex items-center gap-2 px-4 py-2"
            whileHover={{ x: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </motion.button>
          <h1 className="heading-lg text-center flex-1">Search Candidates</h1>
          <div className="w-20" />
        </motion.div>

        {/* Search Bar */}
        <motion.form 
          onSubmit={handleSearch}
          className="glass-card p-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-cyan-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, skills, or job title..."
              className="w-full pl-12 pr-4 py-4 bg-transparent border border-glass-border rounded-2xl text-white placeholder-white/50 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
            />
            {isSearching && (
              <motion.div
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Search className="w-5 h-5 text-cyan-400" />
              </motion.div>
            )}
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-3 mt-4">
            {['React', 'Python', 'Senior', 'Remote', 'Full-time'].map((filter, index) => (
              <motion.button
                key={filter}
                type="button"
                className="px-4 py-2 bg-glass-light border border-glass-border rounded-full text-sm text-white/80 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.form>

        {/* Results */}
        <motion.div 
          className="flex items-center justify-between mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="text-white/70">
            {filteredCandidates.length} candidate{filteredCandidates.length !== 1 ? 's' : ''} found
          </p>
          <button className="btn-magnetic flex items-center gap-2 text-sm">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </motion.div>

        {/* Candidate Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCandidates.map((candidate, index) => (
              <motion.div
                key={candidate.id}
                className="feature-card p-6 hover:scale-105 cursor-pointer group"
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -50, scale: 0.9 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -8 }}
              >
                {/* Match Score Badge */}
                <div className="absolute top-4 right-4">
                  <motion.div 
                    className="px-3 py-1 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full text-xs font-bold text-primary-900"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                  >
                    {candidate.matchScore}% Match
                  </motion.div>
                </div>

                {/* Avatar & Basic Info */}
                <div className="flex items-start gap-4 mb-4">
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {candidate.avatar}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-xl text-white group-hover:text-gradient transition-colors duration-300">
                      {candidate.name}
                    </h3>
                    <p className="text-cyan-400 font-medium">{candidate.title}</p>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {candidate.summary}
                </p>

                {/* Details Grid */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span className="text-white/80">{candidate.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="w-4 h-4 text-green-400" />
                    <span className="text-white/80">{candidate.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="w-4 h-4 text-yellow-400" />
                    <span className="text-white/80">{candidate.education}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-white/80">Active {candidate.lastActive}</span>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {candidate.skills.slice(0, 3).map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-cyan-300 text-xs font-medium"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05 + 0.5 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                    {candidate.skills.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 border border-white/20 rounded-lg text-white/60 text-xs">
                        +{candidate.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <motion.button
                    className="flex-1 btn-gradient-premium text-sm py-2 px-4 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail className="w-4 h-4" />
                    Contact
                  </motion.button>
                  <motion.button
                    className="btn-neon text-sm py-2 px-4 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <User className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* No Results */}
        {filteredCandidates.length === 0 && !isSearching && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Brain className="w-16 h-16 text-white/30 mx-auto mb-4" />
            <h3 className="font-heading font-bold text-2xl text-white/70 mb-2">
              No candidates found
            </h3>
            <p className="text-white/50">
              Try adjusting your search terms or filters
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PremiumSearch;