import React from 'react';
import Portfolio from '../components/Portfolio';

const PortfolioPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Portfolio</h1>
          <p className="page-subtitle">
            Explore our latest projects and see how we bring ideas to life
          </p>
        </div>
      </div>
      <Portfolio />
    </div>
  );
};

export default PortfolioPage; 