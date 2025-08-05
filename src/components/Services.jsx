import { ArrowForward, Code, PhoneAndroid, Settings } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import './Services.scss';

const Services = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Node.js, and Python. Responsive, scalable, and user-friendly solutions.",
      features: ["Frontend Development", "Backend Development", "API Integration", "Database Design"]
    },
    {
      icon: PhoneAndroid,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android. We create engaging user experiences that drive engagement.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"]
    },
    {
      icon: Settings,
      title: "IT Consulting",
      description: "Strategic technology consulting to help your business grow. We analyze, plan, and implement technology solutions.",
      features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Technology Audit"]
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        {isHomePage && (
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              We offer comprehensive IT solutions to help your business thrive in the digital age
            </p>
          </div>
        )}

        <div className="services-grid">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div className="service-card" key={index}>
                <div className="service-icon">
                  <IconComponent />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to Transform Your Business?</h3>
            <p>Let's discuss how our services can help you achieve your goals</p>
            <button
              className="btn"
              onClick={() => scrollToSection('contact')}
            >
              Get Free Consultation
              <ArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services; 