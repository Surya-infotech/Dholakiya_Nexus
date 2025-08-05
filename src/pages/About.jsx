import About from '../components/About';

const AboutPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            Learn more about our mission, values, and the team behind Dholakiya Nexus
          </p>
        </div>
      </div>
      <About />
    </div>
  );
};

export default AboutPage; 