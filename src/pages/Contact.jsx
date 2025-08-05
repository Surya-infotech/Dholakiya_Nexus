import React from 'react';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Contact Us</h1>
          <p className="page-subtitle">
            Get in touch with us to discuss your project requirements
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default ContactPage; 