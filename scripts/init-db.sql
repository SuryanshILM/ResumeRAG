-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- Create additional indexes for better performance
-- These will be created by SQLAlchemy models, but we can add custom ones here if needed

-- Example: Create a GIN index for full-text search if needed
-- CREATE EXTENSION IF NOT EXISTS pg_trgm;

-- Set default timezone
SET timezone = 'UTC';

-- Create custom functions if needed
-- This file is executed when the database is initialized