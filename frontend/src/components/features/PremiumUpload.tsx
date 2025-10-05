'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpTrayIcon as Upload, 
  DocumentTextIcon as FileText, 
  CheckCircleIcon as CheckCircle, 
  XMarkIcon as X, 
  ArrowLeftIcon as ArrowLeft, 
  ArrowPathIcon as Loader2,
  ExclamationCircleIcon as AlertCircle,
  StarIcon as Star,
  CpuChipIcon as Brain,
  MapPinIcon as Target
} from '@heroicons/react/24/outline';

interface PremiumUploadProps {
  onBack: () => void;
}

const PremiumUpload = ({ onBack }: PremiumUploadProps) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [analysisData, setAnalysisData] = useState<any>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setIsUploading(true);
      setUploadProgress(0);

      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 100) {
            clearInterval(progressInterval);
            setIsUploading(false);
            simulateAnalysis();
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);

      console.log(`📄 ${file.name} uploaded successfully!`);
    }
  };

  const simulateAnalysis = () => {
    setTimeout(() => {
      setAnalysisComplete(true);
      setAnalysisData({
        skills: ['React', 'TypeScript', 'Node.js', 'Python', 'Machine Learning'],
        experience: '5+ years',
        score: 92,
        matchingJobs: 15,
        strengths: [
          'Strong technical background in modern web technologies',
          'Excellent problem-solving and analytical skills',
          'Experience with AI/ML technologies'
        ],
        suggestions: [
          'Consider highlighting your leadership experience',
          'Add more quantifiable achievements',
          'Include specific project outcomes'
        ]
      });
      console.log('🧠 AI analysis completed!');
    }, 2000);
  };


  if (analysisComplete && analysisData) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
        <motion.div 
          className="glass-card max-w-4xl w-full p-8 relative z-10"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex items-center justify-between mb-8">
            <motion.button
              onClick={onBack}
              className="btn-magnetic flex items-center gap-2 px-4 py-2"
              whileHover={{ x: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </motion.button>
            <h2 className="heading-lg text-center flex-1">Analysis Complete</h2>
            <div className="w-20" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Score Card */}
            <motion.div 
              className="feature-card text-center p-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="8"
                    fill="none"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="url(#scoreGradient)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={351.86}
                    initial={{ strokeDashoffset: 351.86 }}
                    animate={{ strokeDashoffset: 351.86 - (351.86 * analysisData.score) / 100 }}
                    transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#FF8800" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold text-gradient">{analysisData.score}%</span>
                </div>
              </div>
              <h3 className="font-heading font-bold text-xl mb-2">Match Score</h3>
              <p className="text-white/70">Based on AI analysis</p>
            </motion.div>

            {/* Stats Grid */}
            <div className="space-y-4">
              <motion.div 
                className="feature-card p-4 flex items-center gap-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Matching Jobs</h4>
                  <p className="text-2xl font-bold text-gradient">{analysisData.matchingJobs}</p>
                </div>
              </motion.div>

              <motion.div 
                className="feature-card p-4 flex items-center gap-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <Brain className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Experience Level</h4>
                  <p className="text-2xl font-bold text-gradient">{analysisData.experience}</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Skills */}
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="font-heading font-bold text-xl mb-4">Detected Skills</h3>
            <div className="flex flex-wrap gap-2">
              {analysisData.skills.map((skill: string, index: number) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 text-cyan-300 font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Strengths & Suggestions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <h3 className="font-heading font-bold text-xl mb-4 text-green-400">Strengths</h3>
              <div className="space-y-3">
                {analysisData.strengths.map((strength: string, index: number) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl bg-green-500/10 border border-green-500/20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-white/80 text-sm">{strength}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <h3 className="font-heading font-bold text-xl mb-4 text-yellow-400">Suggestions</h3>
              <div className="space-y-3">
                {analysisData.suggestions.map((suggestion: string, index: number) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.4 + index * 0.1, duration: 0.4 }}
                  >
                    <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <p className="text-white/80 text-sm">{suggestion}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <motion.div 
        className="glass-card max-w-2xl w-full p-8 relative z-10"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between mb-8">
          <motion.button
            onClick={onBack}
            className="btn-magnetic flex items-center gap-2 px-4 py-2"
            whileHover={{ x: -5 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </motion.button>
          <h2 className="heading-lg text-center flex-1">Upload Resume</h2>
          <div className="w-20" />
        </div>

        <AnimatePresence mode="wait">
          {!uploadedFile ? (
            <motion.div
              key="upload"
              className="border-2 border-dashed rounded-3xl p-12 text-center cursor-pointer transition-all duration-300 border-glass-border bg-glass hover:border-cyan-500/50 hover:bg-cyan-500/5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <input 
                type="file" 
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx,.txt"
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <Upload className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                </motion.div>
                
                <h3 className="font-heading font-bold text-2xl mb-2">
                  Upload Your Resume
                </h3>
                <p className="text-white/70 mb-4">
                  Click to browse and select your resume
                </p>
                <p className="text-sm text-white/50">
                  Supports PDF, DOC, DOCX, TXT formats
                </p>
              </label>
            </motion.div>
          ) : (
            <motion.div
              key="uploaded"
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="flex items-center gap-4 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl">
                <FileText className="w-8 h-8 text-green-400" />
                <div className="flex-1">
                  <h4 className="font-semibold">{uploadedFile.name}</h4>
                  <p className="text-sm text-white/70">
                    {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                {!isUploading && uploadProgress === 100 && (
                  <CheckCircle className="w-6 h-6 text-green-400" />
                )}
              </div>

              {isUploading && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Uploading...</span>
                    <span>{Math.round(uploadProgress)}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      initial={{ width: "0%" }}
                      animate={{ width: `${uploadProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              )}

              {!isUploading && uploadProgress === 100 && !analysisComplete && (
                <motion.div 
                  className="text-center space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Loader2 className="w-8 h-8 text-cyan-400 mx-auto animate-spin" />
                  <p className="text-cyan-400">Analyzing resume with AI...</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default PremiumUpload;