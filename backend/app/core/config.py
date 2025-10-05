"""
Configuration settings for ResumeRAG API

Uses Pydantic settings for environment variable management.
"""
from functools import lru_cache
from typing import List, Optional

from pydantic import Field
from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Application settings."""
    
    # API Configuration
    API_V1_STR: str = "/api/v1"
    PROJECT_NAME: str = "ResumeRAG"
    ENVIRONMENT: str = Field(default="development", env="ENVIRONMENT")
    
    # Security
    SECRET_KEY: str = Field(..., env="SECRET_KEY")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = Field(default=60 * 24 * 8, env="ACCESS_TOKEN_EXPIRE_MINUTES")  # 8 days
    REFRESH_TOKEN_EXPIRE_MINUTES: int = Field(default=60 * 24 * 30, env="REFRESH_TOKEN_EXPIRE_MINUTES")  # 30 days
    ALGORITHM: str = "HS256"
    
    # CORS
    ALLOWED_ORIGINS: List[str] = Field(
        default=["http://localhost:3000", "http://localhost:8000"],
        env="ALLOWED_ORIGINS"
    )
    
    # Database
    DATABASE_URL: str = Field(..., env="DATABASE_URL")
    DATABASE_ECHO: bool = Field(default=False, env="DATABASE_ECHO")
    
    # Redis (for caching and Celery)
    REDIS_URL: str = Field(default="redis://localhost:6379/0", env="REDIS_URL")
    
    # MinIO/S3 Storage
    MINIO_ENDPOINT: str = Field(default="localhost:9000", env="MINIO_ENDPOINT")
    MINIO_ACCESS_KEY: str = Field(..., env="MINIO_ACCESS_KEY")
    MINIO_SECRET_KEY: str = Field(..., env="MINIO_SECRET_KEY")
    MINIO_BUCKET_NAME: str = Field(default="resumerag", env="MINIO_BUCKET_NAME")
    MINIO_USE_SSL: bool = Field(default=False, env="MINIO_USE_SSL")
    
    # AI/ML Configuration
    EMBEDDING_MODEL: str = Field(default="all-MiniLM-L6-v2", env="EMBEDDING_MODEL")
    EMBEDDING_DIMENSION: int = Field(default=384, env="EMBEDDING_DIMENSION")
    MAX_SEQUENCE_LENGTH: int = Field(default=512, env="MAX_SEQUENCE_LENGTH")
    
    # OpenAI Configuration (optional)
    OPENAI_API_KEY: Optional[str] = Field(default=None, env="OPENAI_API_KEY")
    
    # File Processing
    MAX_FILE_SIZE_MB: int = Field(default=10, env="MAX_FILE_SIZE_MB")
    ALLOWED_FILE_TYPES: List[str] = Field(
        default=["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "text/plain"],
        env="ALLOWED_FILE_TYPES"
    )
    
    # OCR Configuration
    TESSERACT_CMD: Optional[str] = Field(default=None, env="TESSERACT_CMD")
    
    # Celery Configuration
    CELERY_BROKER_URL: str = Field(default="redis://localhost:6379/1", env="CELERY_BROKER_URL")
    CELERY_RESULT_BACKEND: str = Field(default="redis://localhost:6379/1", env="CELERY_RESULT_BACKEND")
    
    # Rate Limiting
    RATE_LIMIT_PER_MINUTE: int = Field(default=60, env="RATE_LIMIT_PER_MINUTE")
    
    # Monitoring
    SENTRY_DSN: Optional[str] = Field(default=None, env="SENTRY_DSN")
    ENABLE_METRICS: bool = Field(default=True, env="ENABLE_METRICS")
    
    # Search Configuration
    DEFAULT_SEARCH_RESULTS: int = Field(default=20, env="DEFAULT_SEARCH_RESULTS")
    MAX_SEARCH_RESULTS: int = Field(default=100, env="MAX_SEARCH_RESULTS")
    
    # Vector Search
    VECTOR_SEARCH_K: int = Field(default=200, env="VECTOR_SEARCH_K")  # Initial vector search results
    HYBRID_SEARCH_WEIGHTS: dict = Field(
        default={"vector": 0.6, "keyword": 0.25, "recency": 0.1, "preference": 0.05},
        env="HYBRID_SEARCH_WEIGHTS"
    )
    
    class Config:
        env_file = ".env"
        case_sensitive = True
        
    def get_database_url(self) -> str:
        """Get async database URL."""
        if self.DATABASE_URL.startswith("postgresql://"):
            return self.DATABASE_URL.replace("postgresql://", "postgresql+asyncpg://", 1)
        return self.DATABASE_URL



@lru_cache()
def get_settings() -> Settings:
    """Get cached settings instance."""
    return Settings()
