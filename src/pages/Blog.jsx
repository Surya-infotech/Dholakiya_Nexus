import React from 'react';
import Blog from '../components/Blog';

const BlogPage = () => {
  return (
    <div className="page-wrapper">
      <div className="page-header">
        <div className="container">
          <h1 className="page-title">Our Blog</h1>
          <p className="page-subtitle">
            Insights, tutorials, and industry trends from our team of experts
          </p>
        </div>
      </div>
      <Blog />
    </div>
  );
};

export default BlogPage; 