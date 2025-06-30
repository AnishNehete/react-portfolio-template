import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilePic from '../assets/images/AnishNeheteLinkedin.jpeg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/AnishNehete" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/anishnehete/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Anish Nehete</h1>
          <p>Data Scientist and Engineer</p>
          <p style={{ marginTop: '1em' }}>
            Anish Nehete is a data-driven engineer and builder with experience in developing intelligent, real-world systems at the intersection of AI, machine learning, and software engineering.
          </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/AnishNehete" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/anishnehete/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;