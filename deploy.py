#!/usr/bin/env python3
"""
Automated deployment script for ResumeRAG Streamlit app
"""
import subprocess
import sys
import webbrowser
import time

def main():
    print("🚀 ResumeRAG Deployment Script")
    print("=" * 40)
    
    # The app is already configured for Streamlit Community Cloud
    print("\n📋 Your ResumeRAG app is ready for deployment!")
    print("\n🌐 To deploy to Streamlit Community Cloud:")
    print("1. Visit: https://share.streamlit.io/")
    print("2. Sign in with GitHub")
    print("3. Click 'New app'")
    print("4. Select repository: SuryanshILM/ResumeRAG")
    print("5. Main file path: app.py")
    print("6. Click 'Deploy!'")
    
    print("\n✨ Your app will be live at:")
    print("🔗 https://resumerag-app.streamlit.app/")
    
    # Alternative free platforms
    print("\n🚀 Alternative deployment options:")
    print("• Heroku (free tier)")
    print("• Railway.app (free tier)")  
    print("• Render.com (free tier)")
    print("• PythonAnywhere (free tier)")
    
    # Open browser to Streamlit Community Cloud
    try:
        webbrowser.open("https://share.streamlit.io/")
        print("\n🌐 Opening Streamlit Community Cloud in your browser...")
    except:
        print("\n💡 Please manually visit: https://share.streamlit.io/")

if __name__ == "__main__":
    main()