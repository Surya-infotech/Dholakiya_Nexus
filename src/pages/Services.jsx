import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default ServicesPage; 