import { Facebook, Instagram, KeyboardArrowUp, LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = () => {
    // Scroll to top when navigating from footer
    window.scrollTo(0, 0);
  };

  const footerLinks = {
    services: [
      { name: "Web Development", url: "/services" },
      { name: "Mobile Development", url: "/services" },
      { name: "IT Consulting", url: "/services" }
    ],
    company: [
      { name: "About Us", url: "/about" },
      { name: "Portfolio", url: "/portfolio" },
      // { name: "Careers", url: "#" },
      // { name: "Blog", url: "/blog" },
      { name: "Contact", url: "/contact" }
    ],
    resources: [
      { name: "Privacy Policy", url: "#" },
      { name: "Terms of Service", url: "#" }
    ]
  };

  const socialLinks = [
    { icon: LinkedIn, url: "#", label: "LinkedIn" },
    { icon: Facebook, url: "#", label: "Facebook" },
    { icon: Instagram, url: "#", label: "Instagram" }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section company-info">
            <div className="company-logo">
              <img src="/MiniLogo.png" alt="Dholakiya Nexus" />
              <div className="logo-text">
                <span className="company-name-dholakiya">Dholakiya</span>
                <span className="company-name-nexus">Nexus</span>
              </div>
            </div>
            <p>
              Empowering businesses with innovative technology solutions.
              We specialize in web development, mobile apps, and IT consulting.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} onClick={handleNavClick}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.url} onClick={handleNavClick}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section contact-info">
            <h4>Contact Info</h4>
            <div className="contact-details">
              <p><strong>Location:</strong><br />Surat, Gujarat, India</p>
              <p><strong>Email:</strong><br />info@dholakiyanexus.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 Dholakiya Nexus. All rights reserved.</p>
            <div className="footer-bottom-links">
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>

      <button className="scroll-to-top" onClick={scrollToTop}>
        <KeyboardArrowUp />
      </button>
    </footer>
  );
};

export default Footer; 