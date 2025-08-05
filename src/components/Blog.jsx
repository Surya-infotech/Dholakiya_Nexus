import { ArrowForward, CalendarToday, Person, Search } from '@mui/icons-material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Blog.scss';

const Blog = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      excerpt: "Explore the latest trends and technologies shaping the future of web development, from AI integration to advanced frameworks.",
      category: "Web Development",
      author: "Rahul Dholakiya",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://via.placeholder.com/400x250/2563eb/ffffff?text=Web+Dev+2024",
      featured: true
    },
    {
      id: 2,
      title: "Building Scalable Mobile Applications",
      excerpt: "Learn the best practices for creating mobile apps that can handle millions of users and complex business logic.",
      category: "Mobile Development",
      author: "Vikram Mehta",
      date: "March 12, 2024",
      readTime: "7 min read",
      image: "https://via.placeholder.com/400x250/059669/ffffff?text=Mobile+Apps"
    },
    {
      id: 3,
      title: "Digital Transformation Strategies for SMEs",
      excerpt: "Discover how small and medium enterprises can leverage technology to compete with larger corporations.",
      category: "IT Consulting",
      author: "Priya Sharma",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "https://via.placeholder.com/400x250/7c3aed/ffffff?text=Digital+Transformation"
    },
    {
      id: 4,
      title: "React vs Vue.js: Which Framework to Choose?",
      excerpt: "A comprehensive comparison of React and Vue.js to help you make the right choice for your next project.",
      category: "Web Development",
      author: "Amit Patel",
      date: "March 8, 2024",
      readTime: "8 min read",
      image: "https://via.placeholder.com/400x250/dc2626/ffffff?text=React+vs+Vue"
    },
    {
      id: 5,
      title: "Flutter vs React Native: Cross-Platform Showdown",
      excerpt: "Compare Flutter and React Native to understand which framework is better for your mobile app development needs.",
      category: "Mobile Development",
      author: "Vikram Mehta",
      date: "March 5, 2024",
      readTime: "9 min read",
      image: "https://via.placeholder.com/400x250/ea580c/ffffff?text=Flutter+vs+RN"
    },
    {
      id: 6,
      title: "Cybersecurity Best Practices for Web Applications",
      excerpt: "Essential security measures every web developer should implement to protect user data and prevent breaches.",
      category: "IT Consulting",
      author: "Priya Sharma",
      date: "March 3, 2024",
      readTime: "6 min read",
      image: "https://via.placeholder.com/400x250/0891b2/ffffff?text=Cybersecurity"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Development' },
    { id: 'consulting', name: 'IT Consulting' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' ||
      post.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <section className="blog" id="blog">
      <div className="container">
        {isHomePage && (
          <div className="section-header">
            <h2 className="section-title">Our Blog</h2>
            <p className="section-subtitle">
              Insights, tutorials, and industry trends from our team of experts
            </p>
          </div>
        )}

        {/* Search and Filter */}
        <div className="blog-controls">
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="featured-post">
            <div className="featured-content">
              <div className="featured-badge">Featured</div>
              <h3 className="featured-title">{featuredPost.title}</h3>
              <p className="featured-excerpt">{featuredPost.excerpt}</p>
              <div className="featured-meta">
                <span className="meta-item">
                  <Person />
                  {featuredPost.author}
                </span>
                <span className="meta-item">
                  <CalendarToday />
                  {featuredPost.date}
                </span>
                <span className="read-time">{featuredPost.readTime}</span>
              </div>
              <button className="btn btn-primary">
                Read More
                <ArrowForward />
              </button>
            </div>
            <div className="featured-image">
              <img src={featuredPost.image} alt={featuredPost.title} />
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="blog-grid">
          {filteredPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <div className="category-tag">{post.category}</div>
              </div>
              <div className="blog-content">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-meta">
                  <span className="meta-item">
                    <Person />
                    {post.author}
                  </span>
                  <span className="meta-item">
                    <CalendarToday />
                    {post.date}
                  </span>
                  <span className="read-time">{post.readTime}</span>
                </div>
                <button className="read-more-btn">
                  Read More
                  <ArrowForward />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="load-more">
          <button className="btn btn-outline">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog; 