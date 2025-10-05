"""
Embedding service for text vectorization using sentence transformers.
"""
import logging
from typing import List, Optional

from sentence_transformers import SentenceTransformer

from app.core.config import get_settings

logger = logging.getLogger(__name__)
settings = get_settings()


class EmbeddingService:
    """Service for generating text embeddings."""
    
    def __init__(self):
        self.model: Optional[SentenceTransformer] = None
        self.dimension = settings.EMBEDDING_DIMENSION
    
    async def initialize(self) -> None:
        """Initialize the embedding model."""
        try:
            self.model = SentenceTransformer(settings.EMBEDDING_MODEL)
            logger.info(f"✅ Embedding model '{settings.EMBEDDING_MODEL}' loaded successfully")
        except Exception as e:
            logger.error(f"❌ Failed to load embedding model: {e}")
            raise
    
    async def encode_text(self, text: str) -> List[float]:
        """Generate embedding for a single text."""
        if not self.model:
            raise RuntimeError("Embedding model not initialized")
        
        try:
            embedding = self.model.encode(text, convert_to_numpy=False).tolist()
            return embedding
        except Exception as e:
            logger.error(f"Error encoding text: {e}")
            raise
    
    async def encode_texts(self, texts: List[str]) -> List[List[float]]:
        """Generate embeddings for multiple texts."""
        if not self.model:
            raise RuntimeError("Embedding model not initialized")
        
        try:
            embeddings = self.model.encode(texts, convert_to_numpy=False).tolist()
            return embeddings
        except Exception as e:
            logger.error(f"Error encoding texts: {e}")
            raise
