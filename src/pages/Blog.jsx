import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogsData } from '../data/blogs';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Blog - Fanny Learn Hub</title>
        <meta name="description" content="Read our latest articles about appliance maintenance, repair tips, and industry news." />
        <link rel="canonical" href="https://fannylearnhub.co/blog" />
      </Helmet>

      <div className="relative bg-white py-32 overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h6 className="text-secondary font-[500]uppercase tracking-widest text-sm mb-4">News & Updates</h6>
          <h1 className="text-4xl md:text-6xl font-heading font-[500]text-gray-900 mb-6">Latest from the Blog</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto font-light">
            Expert advice to help you get the most out of your home appliances.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogsData.map((blog) => (
            <article key={blog.id} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-[500]uppercase tracking-widest text-gray-900">
                  {blog.date}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 text-xs font-[500]text-gray-400 uppercase tracking-wider mb-4">
                  <span className="flex items-center gap-2"><FaUser className="text-secondary" /> {blog.author}</span>
                </div>
                <h3 className="text-2xl font-[500]text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                </h3>
                <p className="text-gray-500 mb-6 line-clamp-3 leading-relaxed">
                  {blog.shortDesc}
                </p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="inline-block text-primary font-[500]border-b-2 border-secondary hover:text-secondary transition-colors"
                >
                  Read Full Article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
