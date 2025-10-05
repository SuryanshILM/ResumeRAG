"""
API router for v1 endpoints.

Includes all API endpoints for the ResumeRAG application.
"""
from fastapi import APIRouter
from app.api.v1.endpoints import welcome

api_router = APIRouter()

api_router.include_router(welcome.router, tags=["welcome"])
