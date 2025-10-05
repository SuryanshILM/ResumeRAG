"""
Database configuration for ResumeRAG

SQLAlchemy async setup with pgvector support.
"""
import logging
from typing import AsyncGenerator

from sqlalchemy import event, text
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import declarative_base
from sqlalchemy.pool import StaticPool

from app.core.config import get_settings

logger = logging.getLogger(__name__)
settings = get_settings()

# Create async engine
engine = create_async_engine(
    settings.get_database_url(),
    echo=settings.DATABASE_ECHO,
    poolclass=StaticPool,
    connect_args={
        "command_timeout": 60,
        "server_settings": {
            "application_name": "ResumeRAG-API",
        },
    },
)

# Create session factory
AsyncSessionLocal = async_sessionmaker(
    engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autoflush=False,
    autocommit=False,
)

# Base class for SQLAlchemy models
Base = declarative_base()


@event.listens_for(engine.sync_engine, "connect")
def enable_pgvector(dbapi_connection, connection_record):
    """Enable pgvector extension on new connections."""
    try:
        with dbapi_connection.cursor() as cursor:
            cursor.execute("CREATE EXTENSION IF NOT EXISTS vector")
    except Exception as e:
        logger.warning(f"Could not enable pgvector extension: {e}")


async def get_db() -> AsyncGenerator[AsyncSession, None]:
    """
    Dependency to get database session.
    
    Yields:
        AsyncSession: Database session
    """
    async with AsyncSessionLocal() as session:
        try:
            yield session
        except Exception as e:
            logger.error(f"Database session error: {e}")
            await session.rollback()
            raise
        finally:
            await session.close()


async def init_db() -> None:
    """Initialize database tables."""
    async with engine.begin() as conn:
        # Import all models here to ensure they are registered
        from app.models import user, resume, job  # noqa
        
        # Create all tables
        await conn.run_sync(Base.metadata.create_all)
        
        # Enable pgvector extension
        await conn.execute(text("CREATE EXTENSION IF NOT EXISTS vector"))
        
        logger.info("✅ Database initialized successfully")