import React from 'react';
import { Rocket, ArrowForward, Code, PhoneAndroid } from '@mui/icons-material';
import './Hero.scss';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Transforming Ideas Into
              <span style={{ color: 'var(--secondary-color)' }}> Digital Reality</span>
            </h1>
            <p>
              We are a leading IT company specializing in innovative software solutions, 
              web development, and digital transformation services that drive business growth.
            </p>
            
            <div className="hero-buttons">
              <button 
                className="btn btn-primary hero-btn"
                onClick={() => scrollToSection('services')}
              >
                <Rocket />
                Get Started
                <ArrowForward />
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-graphic">
              <div className="floating-card card-1">
                <div className="card-icon">
                  <Code />
                </div>
                <span>Web Development</span>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">
                  <PhoneAndroid />
                </div>
                <span>Mobile Apps</span>
              </div>
              <div className="main-graphic">
                <img src="/MainLogo.png" alt="Dholakiya Nexus" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 