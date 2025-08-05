import React from 'react';
import { 
  Lightbulb, 
  Group, 
  EmojiEvents, 
  Handshake
} from '@mui/icons-material';
import './About.scss';

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions"
    },
    {
      icon: Group,
      title: "Collaboration",
      description: "Working together with clients to achieve shared success"
    },
    {
      icon: EmojiEvents,
      title: "Excellence",
      description: "Committed to delivering the highest quality in everything we do"
    },
    {
      icon: Handshake,
      title: "Integrity",
      description: "Building trust through transparent and honest partnerships"
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Dholakiya Nexus</h2>
            <div className="about-description">
              <p>
                Founded with a vision to bridge the gap between technology and business success, 
                Dholakiya Nexus has grown into a trusted partner for companies seeking innovative 
                digital solutions. Our team of experienced developers, designers, and consultants 
                work together to deliver exceptional results.
              </p>
              
              <p>
                We believe in the power of technology to transform businesses and create meaningful 
                impact. From startups to enterprise-level organizations, we provide tailored solutions 
                that drive growth, efficiency, and competitive advantage.
              </p>
            </div>

            <div className="values-grid">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div className="value-item" key={index}>
                    <div className="value-icon">
                      <IconComponent />
                    </div>
                    <div className="value-content">
                      <h4>{value.title}</h4>
                      <p>{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="about-cta">
              <button 
                className="btn"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="about-image">
            <div className="image-container">
              <img src="/MainLogo.png" alt="Dholakiya Nexus Team" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 