# 🚀 Getting Started with ResumeRAG

Welcome to **ResumeRAG** - the AI-powered resume matching platform with a beautiful dark liquid theme and advanced semantic search capabilities.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18+ and npm
- **Python** 3.11+
- **Docker** and **Docker Compose**
- **Git**

## 🎯 Quick Start (Recommended)

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd ResumeRAG
```

### 2. Setup Environment Variables
```bash
# Copy environment files
cp .env.example .env
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env

# Edit .env files with your settings (see configuration section below)
```

### 3. Start with Docker (Easiest)
```bash
# Start all services (PostgreSQL, Redis, MinIO, Backend, Frontend)
npm run dev

# View logs
npm run dev:logs

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:8000
# API Docs: http://localhost:8000/docs
# MinIO Console: http://localhost:9001 (minioadmin/minioadmin123)
```

### 4. Initialize Database
```bash
# Run database migrations
npm run db:migrate
```

That's it! 🎉 Your ResumeRAG application should now be running with the dark liquid theme.

## 🛠 Manual Development Setup

If you prefer to run services individually:

### Backend Setup
```bash
cd backend

# Create virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
# OR
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt

# Download spaCy model
python -m spacy download en_core_web_sm

# Start PostgreSQL and Redis via Docker
docker-compose up -d postgres redis minio

# Run migrations
alembic upgrade head

# Start FastAPI server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start Next.js development server
npm run dev
```

## ⚙️ Configuration

### Environment Variables

#### Backend (.env)
```env
# Required
SECRET_KEY=your-super-secret-key-here
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/resumerag
MINIO_ACCESS_KEY=minioadmin
MINIO_SECRET_KEY=minioadmin123

# Optional
OPENAI_API_KEY=your-openai-key-for-llm-features
SENTRY_DSN=your-sentry-dsn-for-monitoring
```

#### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## 🎨 Features Showcase

### Dark Liquid Theme
- **Glass morphism** cards with backdrop blur
- **Gradient accents** in warm gold tones
- **GSAP animations** with scroll triggers
- **Reduced motion** support for accessibility

### Key Components Created
- `HeroLiquid` - Animated hero section with character-by-character reveal
- `AnimatedButton` - Interactive buttons with ripple effects and scaling
- `WithGSAP` - HOC for safe client-side animations
- Global liquid background with floating orbs

### Animation Features
- Character-by-character text reveal
- Staggered element animations
- Floating background orbs
- Button hover and press effects
- Scroll-triggered animations (ready for expansion)

## 🧪 Testing the Application

### Frontend
```bash
cd frontend
npm test
```

### Backend
```bash
cd backend
pytest
```

### Full Test Suite
```bash
npm run test
```

## 📁 Project Structure Overview

```
ResumeRAG/
├── frontend/                 # Next.js 13+ with App Router
│   ├── src/
│   │   ├── app/             # App router pages
│   │   ├── components/      # React components
│   │   │   ├── ui/         # Base UI components
│   │   │   ├── features/   # Feature-specific components
│   │   │   └── layout/     # Layout components
│   │   ├── lib/            # Utilities
│   │   └── styles/         # Global styles
│   ├── tailwind.config.ts  # Tailwind with liquid theme
│   └── package.json
├── backend/                 # FastAPI application
│   ├── app/
│   │   ├── api/           # API endpoints
│   │   ├── core/          # Configuration & database
│   │   ├── models/        # SQLAlchemy models
│   │   ├── services/      # Business logic
│   │   └── utils/         # Utilities
│   ├── requirements.txt
│   └── Dockerfile.dev
├── docker-compose.yml      # Development environment
└── package.json           # Root scripts
```

## 🔧 Development Commands

```bash
# Start all services
npm run dev

# View logs
npm run dev:logs

# Stop all services
npm run stop

# Clean up (removes volumes)
npm run clean

# Run frontend only
npm run dev:frontend

# Run backend only
npm run dev:backend

# Database operations
npm run db:migrate          # Apply migrations
npm run db:reset           # Reset database

# Code quality
npm run lint               # Frontend linting
npm run format            # Backend formatting
```

## 🎯 Next Steps

1. **Upload Feature**: Implement resume upload and parsing
2. **Search Interface**: Create the semantic search UI
3. **Candidate Cards**: Build animated candidate result cards
4. **Job Posting**: Add job creation and management
5. **User Authentication**: Implement JWT auth flow
6. **Admin Dashboard**: Create analytics and management interface

## 🐛 Troubleshooting

### Common Issues

1. **Port conflicts**: Make sure ports 3000, 8000, 5432, 6379, 9000 are available
2. **Docker permissions**: On Linux, you may need to run `sudo docker-compose up`
3. **Node version**: Ensure you're using Node 18+ (`node --version`)
4. **Python version**: Ensure you're using Python 3.11+ (`python --version`)

### Logs

```bash
# View all logs
npm run dev:logs

# View specific service logs
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f postgres
```

## 📖 Additional Resources

- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Next.js 13+ Documentation](https://nextjs.org/docs)
- [GSAP Documentation](https://greensock.com/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [pgvector Documentation](https://github.com/pgvector/pgvector)

---

**Happy coding!** 🎉 If you encounter any issues, please check the logs and feel free to create an issue in the repository.