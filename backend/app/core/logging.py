"""
Logging configuration for ResumeRAG

Structured logging with JSON output for production.
"""
import logging
import logging.config
import sys
from typing import Any, Dict

import structlog
from structlog.stdlib import BoundLogger

from app.core.config import get_settings

settings = get_settings()


def setup_logging() -> None:
    """Setup structured logging configuration."""
    
    # Configure structlog
    shared_processors = [
        structlog.stdlib.filter_by_level,
        structlog.stdlib.add_logger_name,
        structlog.stdlib.add_log_level,
        structlog.stdlib.PositionalArgumentsFormatter(),
        structlog.processors.TimeStamper(fmt="iso"),
        structlog.processors.StackInfoRenderer(),
        structlog.processors.format_exc_info,
        structlog.processors.UnicodeDecoder(),
    ]

    if settings.ENVIRONMENT == "development":
        # Pretty printing for development
        shared_processors.append(structlog.dev.ConsoleRenderer())
    else:
        # JSON output for production
        shared_processors.append(structlog.processors.JSONRenderer())

    structlog.configure(
        processors=shared_processors,
        wrapper_class=structlog.stdlib.BoundLogger,
        logger_factory=structlog.stdlib.LoggerFactory(),
        context_class=dict,
        cache_logger_on_first_use=True,
    )

    # Configure standard library logging
    log_level = "DEBUG" if settings.ENVIRONMENT == "development" else "INFO"
    
    logging_config: Dict[str, Any] = {
        "version": 1,
        "disable_existing_loggers": False,
        "formatters": {
            "default": {
                "format": "%(asctime)s - %(name)s - %(levelname)s - %(message)s",
            },
        },
        "handlers": {
            "default": {
                "formatter": "default",
                "class": "logging.StreamHandler",
                "stream": sys.stdout,
            },
        },
        "root": {
            "level": log_level,
            "handlers": ["default"],
        },
        "loggers": {
            "uvicorn": {"level": log_level, "handlers": ["default"], "propagate": False},
            "uvicorn.error": {"level": log_level, "handlers": ["default"], "propagate": False},
            "uvicorn.access": {"level": "INFO", "handlers": ["default"], "propagate": False},
            "sqlalchemy": {"level": "WARNING", "handlers": ["default"], "propagate": False},
        },
    }

    logging.config.dictConfig(logging_config)


def get_logger(name: str) -> BoundLogger:
    """Get a structured logger instance."""
    return structlog.get_logger(name)