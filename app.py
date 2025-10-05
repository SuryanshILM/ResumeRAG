import streamlit as st
import requests
import io
from PIL import Image

st.set_page_config(
    page_title="ResumeRAG - AI Resume Matching",
    page_icon="📄",
    layout="wide"
)

st.title("🤖 ResumeRAG - AI-Powered Resume Matching")
st.markdown("### Upload your resume and find the perfect job match!")

# Sidebar for navigation
st.sidebar.title("Navigation")
page = st.sidebar.radio("Choose a page:", ["Resume Upload", "Job Matching", "About"])

if page == "Resume Upload":
    st.header("📤 Upload Your Resume")
    
    uploaded_file = st.file_uploader(
        "Choose your resume file",
        type=['pdf', 'docx', 'txt'],
        help="Upload your resume in PDF, DOCX, or TXT format"
    )
    
    if uploaded_file is not None:
        st.success(f"File uploaded: {uploaded_file.name}")
        
        # Display file details
        file_details = {
            "Filename": uploaded_file.name,
            "File size": f"{uploaded_file.size} bytes",
            "File type": uploaded_file.type
        }
        st.json(file_details)
        
        if st.button("Process Resume"):
            with st.spinner("Processing your resume..."):
                # Simulate processing
                st.success("Resume processed successfully!")
                st.balloons()

elif page == "Job Matching":
    st.header("🎯 Find Matching Jobs")
    
    col1, col2 = st.columns(2)
    
    with col1:
        st.subheader("Job Preferences")
        job_title = st.text_input("Job Title", placeholder="e.g., Software Engineer")
        location = st.text_input("Location", placeholder="e.g., New York, NY")
        experience = st.selectbox("Experience Level", ["Entry Level", "Mid Level", "Senior Level", "Executive"])
        salary_min = st.number_input("Minimum Salary ($)", min_value=0, value=50000)
    
    with col2:
        st.subheader("Skills")
        skills = st.text_area(
            "Key Skills (comma-separated)",
            placeholder="e.g., Python, Machine Learning, Docker"
        )
        
        if st.button("Find Matches", type="primary"):
            with st.spinner("Searching for job matches..."):
                # Simulate job matching
                st.success("Found 5 matching jobs!")
                
                # Display sample matches
                matches = [
                    {"title": "Senior ML Engineer", "company": "TechCorp", "match": 95},
                    {"title": "Data Scientist", "company": "DataInc", "match": 88},
                    {"title": "Python Developer", "company": "StartupXYZ", "match": 82},
                    {"title": "AI Engineer", "company": "AILabs", "match": 79},
                    {"title": "Backend Developer", "company": "DevCorp", "match": 75}
                ]
                
                for i, match in enumerate(matches, 1):
                    with st.expander(f"{i}. {match['title']} at {match['company']} ({match['match']}% match)"):
                        st.write(f"**Company:** {match['company']}")
                        st.write(f"**Position:** {match['title']}")
                        st.write(f"**Match Score:** {match['match']}%")
                        st.progress(match['match']/100)

else:  # About page
    st.header("ℹ️ About ResumeRAG")
    
    st.markdown("""
    **ResumeRAG** is an AI-powered resume matching platform that uses advanced semantic search 
    and natural language processing to connect job seekers with their ideal positions.
    
    ### 🚀 Key Features:
    - **AI-Powered Matching**: Uses state-of-the-art embeddings for semantic similarity
    - **Multi-Format Support**: Handles PDF, DOCX, and TXT resume formats
    - **Real-time Processing**: Fast document parsing and analysis
    - **Semantic Search**: Goes beyond keyword matching to understand context
    - **Vector Database**: Powered by PostgreSQL with pgvector for efficient similarity search
    
    ### 🛠️ Technology Stack:
    - **Frontend**: Next.js with TypeScript
    - **Backend**: FastAPI with Python
    - **Database**: PostgreSQL with pgvector extension
    - **AI/ML**: Sentence Transformers, spaCy, scikit-learn
    - **Document Processing**: PDFMiner, python-docx, Tesseract OCR
    
    ### 👨‍💻 Developer:
    Built with ❤️ by the ResumeRAG Team
    
    [🔗 View on GitHub](https://github.com/SuryanshILM/ResumeRAG)
    """)
    
    # Add some metrics
    col1, col2, col3 = st.columns(3)
    with col1:
        st.metric("Resumes Processed", "1,234", "12")
    with col2:
        st.metric("Job Matches Found", "5,678", "45")
    with col3:
        st.metric("Success Rate", "94.5%", "2.1%")

# Footer
st.markdown("---")
st.markdown(
    "<div style='text-align: center'>Made with Streamlit • "
    "<a href='https://github.com/SuryanshILM/ResumeRAG'>GitHub</a></div>", 
    unsafe_allow_html=True
)