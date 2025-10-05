#!/usr/bin/env python3
"""
Startup script to ensure all required models are downloaded.
"""
import subprocess
import sys

def download_spacy_model():
    """Download spaCy English model if not already present."""
    try:
        import spacy
        try:
            # Try to load the model
            spacy.load("en_core_web_sm")
            print("✅ spaCy model 'en_core_web_sm' is already available")
        except OSError:
            # Model not found, download it
            print("📥 Downloading spaCy model 'en_core_web_sm'...")
            subprocess.check_call([sys.executable, "-m", "spacy", "download", "en_core_web_sm"])
            print("✅ spaCy model 'en_core_web_sm' downloaded successfully")
    except ImportError:
        print("⚠️ spaCy not installed, skipping model download")
    except Exception as e:
        print(f"❌ Error downloading spaCy model: {e}")
        # Don't fail startup if model download fails
        pass

if __name__ == "__main__":
    print("🚀 Running startup checks...")
    download_spacy_model()
    print("✅ Startup checks completed")