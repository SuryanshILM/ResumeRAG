"""
Welcome endpoint for ResumeRAG API.

Provides a simple welcome message with request logging.
"""
from fastapi import APIRouter, Request

from app.core.logging import get_logger

router = APIRouter()

logger = get_logger(__name__)


@router.get("/welcome")
async def welcome(request: Request):
    """
    Returns a welcome message for the ResumeRAG API.
    """
    logger.info("Request received", method=request.method, path=request.url.path)
    return {"message": "Welcome to the ResumeRAG API!"}
