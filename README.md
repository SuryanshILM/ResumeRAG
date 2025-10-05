# ResumeRAG - AI-Powered Resume Matching Platform

🚀 **LIVE DEMOS - DEPLOY NOW:**
- **Streamlit Cloud**: [👉 DEPLOY HERE](https://share.streamlit.io/) - 2 minutes setup!
- **Hugging Face Spaces**: [👉 DEPLOY HERE](https://huggingface.co/new-space) - Perfect for AI demos!
- **Railway**: [👉 DEPLOY FULL-STACK](https://railway.app/) - Complete app with database!

⚡ **Quick Deploy Instructions:**
1. **Streamlit**: Go to share.streamlit.io → New app → Repository: `SuryanshILM/ResumeRAG` → Main file: `app.py` → Deploy!
2. **HuggingFace**: Create new Space → Upload `app.py` + `requirements.txt` → Auto-deploy!
3. **Railway**: Connect GitHub → Deploy full Next.js + FastAPI + PostgreSQL stack!

## Features

✨ **AI-Powered Resume Analysis** - Advanced ML algorithms analyze resumes instantly  
🔍 **Intelligent Candidate Search** - Find perfect matches using semantic search  
📊 **Real-Time Analytics** - Get insights into your hiring process  
⚡ **Lightning Fast** - Results in seconds, not hours  
🎯 **Precision Matching** - Highly accurate candidate-job matching  

## Tech Stack

### Frontend
- **Next.js 15** with TypeScript
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **Heroicons** for icons

### Backend
- **FastAPI** with Python
- **PostgreSQL** database
- **OpenAI** for AI processing
- **SQLAlchemy** ORM

## Quick Start

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

## Deployment

- **Frontend:** Deployed on Vercel
- **Backend:** Deployed on Railway
- **Database:** PostgreSQL on Railway

## License

MIT License - see LICENSE file for details

---

**Built with ❤️ for the next generation of hiring**

# ResumeRAG - AI-Powered Resume Matching Platform

> **Production-ready web application** for semantic resume search and job matching using advanced RAG (Retrieval-Augmented Generation) with a beautiful dark liquid theme.

## 🚀 Overview

ResumeRAG is a sophisticated hiring platform that leverages AI to match resumes with job descriptions using semantic search, vector embeddings, and explainable AI. Built for recruiters, placement officers, and hiring managers who need intelligent candidate discovery.

### Key Features

- **Smart Resume Parsing**: PDF/DOCX/TXT ingestion with OCR fallback
- **Semantic Search**: Vector-based matching with hybrid ranking
- **Explainable AI**: LLM-generated match explanations and interview questions
- **Dark Liquid Theme**: High-polish UI with GSAP animations and glass morphism
- **Advanced Filtering**: Skills, experience, location, education filters
- **Real-time Processing**: Async pipeline with progress tracking

## 🛠 Tech Stack

### Frontend
- **Next.js 13+** with App Router
- **TailwindCSS** + Custom CSS for liquid effects
- **GSAP + ScrollTrigger** for smooth animations
- **TypeScript** for type safety
- **React Query** for server state management

### Backend
- **FastAPI** (Python) for high-performance API
- **PostgreSQL** with **pgvector** extension
- **Sentence Transformers** for embeddings
- **Celery** for async processing
- **Redis** for caching and task queue

### Infrastructure
- **Docker** + Docker Compose
- **MinIO** for file storage (S3-compatible)
- **GitHub Actions** for CI/CD
- **Sentry** for error monitoring

## 📁 Project Structure

```
ResumeRAG/
├── frontend/                 # Next.js application
│   ├── app/                 # App router pages
│   ├── components/          # Reusable UI components
│   ├── lib/                 # Utilities and configurations
│   └── styles/              # Global styles and animations
├── backend/                 # FastAPI application
│   ├── app/
│   │   ├── api/            # API endpoints
│   │   ├── core/           # Configuration and security
│   │   ├── models/         # Database models
│   │   ├── services/       # Business logic
│   │   └── utils/          # Utilities
│   └── requirements.txt
├── docker-compose.yml       # Development environment
├── docker-compose.prod.yml  # Production environment
└── docs/                   # Documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Python 3.11+
- Docker & Docker Compose
- Git

### 1. Clone and Setup
```bash
git clone <repository-url>
cd ResumeRAG
```

### 2. Environment Setup
```bash
# Copy environment files
cp .env.example .env
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env
```

### 3. Start Development Environment
```bash
# Start all services
docker-compose up -d

# Or start individually
npm run dev:frontend
npm run dev:backend
```

### 4. Initialize Database
```bash
# Run migrations
docker-compose exec backend alembic upgrade head

# Seed sample data (optional)
docker-compose exec backend python scripts/seed_data.py
```

## 🎨 Design System

### Color Palette
- **Background**: `#0b0f12` (Deep charcoal)
- **Glass Cards**: `rgba(255,255,255,0.02)` with backdrop blur
- **Accent Gradient**: `linear-gradient(90deg,#ffd27a,#ffb86b,#ffd27a)`
- **Text**: `#ffffff`, `#94a3b8` (muted)

### Animation Principles
- **GSAP Timelines** for complex animations
- **ScrollTrigger** for reveal animations
- **Reduced Motion** support
- **60fps** performance target

## 📖 API Documentation

Once the backend is running, visit:
- **Interactive Docs**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

### Key Endpoints
- `POST /api/v1/resumes/upload` - Upload and parse resume
- `POST /api/v1/jobs` - Create job posting
- `POST /api/v1/jobs/{job_id}/match` - Find matching candidates
- `GET /api/v1/search` - Search candidates

## 🧪 Testing

```bash
# Frontend tests
cd frontend && npm test

# Backend tests
cd backend && pytest

# E2E tests
npm run test:e2e
```

## 🚀 Deployment

### Development
```bash
docker-compose up -d
```

### Production
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Environment Variables
See `.env.example` for required configuration.

## 🔒 Security Features

- JWT authentication with refresh tokens
- Password hashing (bcrypt)
- Rate limiting
- File upload validation
- PII encryption at rest
- CORS configuration
- SQL injection prevention

## 📊 Monitoring & Analytics

- **Error Tracking**: Sentry integration
- **Performance**: Built-in metrics
- **Analytics**: Admin dashboard
- **Logs**: Structured logging with rotation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation in `/docs`
- Review the FAQ section

---

Built with ❤️ for modern hiring teams