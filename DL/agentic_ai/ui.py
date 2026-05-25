from urllib import response

import streamlit as st
from youtube_anaylzer import build_youtube_agent

st.set_page_config(page_title="YouTube Video Analyzer", layout="wide")

st.title("YouTube Video Analyzer")

@st.cache_resource
def get_agent():
    return build_youtube_agent()


agent=get_agent()

#input box
video_url = st.text_input("Enter YouTube Video URL")
button=st.button("analyze video")
if video_url and button:
    with st.spinner("Analyzing video..."):
        response=  agent.run(
            f"Analyze this video: {video_url} ",
            
        )
    st.markdown("Analysis complete! Here are the results:")
    st.markdown(response.content)
 
