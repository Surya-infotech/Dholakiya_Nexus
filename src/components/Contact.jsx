import { Close, Email, Facebook, Instagram, LinkedIn, LocationOn, Schedule, Send } from '@mui/icons-material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Contact.scss';

const Contact = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setShowSuccessPopup(true);
      setFormData({ name: '', email: '', service: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
  };

  const contactInfo = [
    {
      icon: Email,
      title: "Email Address",
      details: "info@dholakiyanexus.com"
    },
    {
      icon: LocationOn,
      title: "Location",
      details: "Surat, Gujarat, India"
    },
    {
      icon: Schedule,
      title: "Working Hours",
      details: "Mon - Fri: 9AM - 6PM"
    }
  ];

  const socialLinks = [
    { icon: LinkedIn, url: "#", title: "LinkedIn" },
    { icon: Facebook, url: "#", title: "Facebook" },
    { icon: Instagram, url: "#", title: "Instagram" }
  ];

  const services = ["Web Development", "Mobile Development", "IT Consulting"];

  return (
    <>
      {showSuccessPopup && (
        <div className="success-popup-overlay">
          <div className="success-popup">
            <button className="close-btn" onClick={closeSuccessPopup}>
              <Close />
            </button>
            <div className="success-content">
              <div className="success-icon">✓</div>
              <h3>Message Sent Successfully!</h3>
              <p>Thank you for your message! We will get back to you soon.</p>
            </div>
          </div>
        </div>
      )}

      <section className="contact" id="contact">
        <div className="container">
          {isHomePage && (
            <div className="section-header">
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-subtitle">
                Ready to start your next project? Let's discuss how we can help you achieve your goals
              </p>
            </div>
          )}

          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-details">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div className="contact-item" key={index}>
                      <div className="contact-icon">
                        <IconComponent />
                      </div>
                      <div className="contact-content">
                        <h4>{info.title}</h4>
                        <p>{info.details}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-grid">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        title={social.title}
                      >
                        <IconComponent />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="contact-form">
              <h4>Send us a Message</h4>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      autoComplete='off'
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete='off'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    autoComplete='off'
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact; 