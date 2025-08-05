import React, { useState } from 'react';
import { OpenInNew, Visibility } from '@mui/icons-material';
import './Portfolio.scss';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      image: "https://via.placeholder.com/400x300/2563eb/ffffff?text=E-Commerce",
      description: "A modern e-commerce platform built with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "mobile",
      image: "https://via.placeholder.com/400x300/059669/ffffff?text=Banking+App",
      description: "Secure mobile banking application for iOS and Android",
      technologies: ["React Native", "Firebase", "Redux", "Biometrics"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Healthcare Management System",
      category: "web",
      image: "https://via.placeholder.com/400x300/ea580c/ffffff?text=Healthcare",
      description: "Complete healthcare practice management solution",
      technologies: ["Vue.js", "Laravel", "MySQL", "HIPAA"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "IoT Smart Home App",
      category: "mobile",
      image: "https://via.placeholder.com/400x300/0891b2/ffffff?text=Smart+Home",
      description: "Mobile app for controlling smart home devices",
      technologies: ["Flutter", "Firebase", "MQTT", "IoT"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Portfolio</h2>
          <p className="section-subtitle">
            Explore our latest projects and see how we've helped businesses achieve their goals
          </p>
        </div>

        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div className="portfolio-card" key={project.id}>
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <a href={project.liveUrl} className="overlay-btn" title="Live Demo">
                    <OpenInNew />
                  </a>
                  <a href={project.githubUrl} className="overlay-btn" title="Source Code">
                    <Visibility />
                  </a>
                </div>
              </div>
              
              <div className="portfolio-content">
                <div className="portfolio-category">
                  {project.category === 'web' ? 'Web Development' : 'Mobile Development'}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="portfolio-tech">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-cta">
          <div className="cta-content">
            <h3>Have a Project in Mind?</h3>
            <p>Let's discuss how we can bring your ideas to life</p>
            <button 
              className="btn"
              onClick={() => scrollToSection('contact')}
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio; 