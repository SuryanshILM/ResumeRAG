# 🚀 ResumeRAG - Live Deployment

## 🌐 Live Application URLs

- **Frontend**: [Coming Soon - Will be deployed to Vercel]
- **Backend API**: [Coming Soon - Will be deployed to Railway]
- **API Documentation**: [Your Railway URL]/docs

## 🎯 Free Deployment Stack

- **Frontend**: Vercel (Free tier)
- **Backend**: Railway (Free tier with PostgreSQL)
- **Database**: PostgreSQL on Railway
- **File Storage**: Railway Volume (or upgrade to AWS S3)

## 📋 Deployment Steps

### 1. Backend Deployment (Railway)
1. Go to [railway.app](https://railway.app)
2. Sign up/Login with GitHub
3. Create new project
4. Connect your GitHub repository
5. Add PostgreSQL service
6. Set environment variables (see below)
7. Deploy!

### 2. Frontend Deployment (Vercel)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Import your repository
4. Set root directory to `frontend`
5. Set environment variables
6. Deploy!

## ⚙️ Environment Variables

### Railway (Backend)
```env
DATABASE_URL=postgresql://[auto-generated-by-railway]
SECRET_KEY=your-super-secret-production-key
ENVIRONMENT=production
ALLOWED_ORIGINS=["https://your-vercel-app.vercel.app"]
```

### Vercel (Frontend)
```env
NEXT_PUBLIC_API_URL=https://your-railway-app.railway.app
```

## 🔧 Production Features
- ✅ Auto-scaling
- ✅ HTTPS enabled
- ✅ Global CDN
- ✅ Automatic deployments on Git push
- ✅ Environment isolation

## 🎨 What's Deployed
Your beautiful ResumeRAG application with:
- Dark liquid theme with animations
- AI-powered resume matching
- Semantic search capabilities
- Real-time file processing
- PostgreSQL vector search

Built with ❤️ for the world to use!