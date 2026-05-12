import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogsData } from '../data/blogs';
import { FaArrowLeft, FaUser, FaCalendarAlt, FaShareAlt } from 'react-icons/fa';

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogsData.find(b => b.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-light">
        <Helmet>
          <title>Blog Not Found - Clear With Us</title>
        </Helmet>
        <div className="text-center">
          <h2 className="text-4xl font-[500]text-primary mb-6">Blog Post Not Found</h2>
          <Link to="/" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-[500]hover:bg-primary-dark transition-all shadow-lg">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen pt-32 pb-24">
      <Helmet>
        <title>{blog.title} - Clear With Us Blog</title>
        <meta name="description" content={blog.shortDesc} />
        <link rel="canonical" href={`https://clearwithus.co/blog/${blog.id}`} />
      </Helmet>

      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/#blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary font-[500]mb-12 transition-colors group">
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to All Articles
        </Link>

        <header className="mb-12" data-aos="fade-up">
          <div className="flex items-center gap-6 text-gray-400 text-xs font-[500]uppercase tracking-[2px] mb-6">
            <span className="flex items-center gap-2">
              <FaUser className="text-secondary" /> {blog.author || 'Admin'}
            </span>
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-secondary" /> {blog.date}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-gray-900 mb-8 leading-tight">
            {blog.title}
          </h1>

          <div className="h-2 w-24 bg-secondary rounded-full"></div>
        </header>

        <div className="relative mb-16" data-aos="zoom-in">
          <img
            src={blog.image}
            className="rounded-[2.5rem] shadow-2xl w-full object-cover max-h-[600px]"
            alt={blog.title}
          />
          <div className="absolute -bottom-6 -right-6">
            <button
              aria-label="Share this blog"
              className="bg-white text-primary p-6 rounded-full shadow-2xl hover:bg-secondary hover:text-white transition-all group active:scale-95"
            >
              <FaShareAlt size={20} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>
        </div>

        <div className="prose prose-xl prose-primary max-w-none mb-20" data-aos="fade-up">
          <div className="blog-content text-gray-600 leading-[1.8] space-y-8 text-lg md:text-xl font-light" dangerouslySetInnerHTML={{ __html: blog.longDesc }} />
        </div>

        <div className="border-t border-gray-100 pt-16 mt-16 text-center bg-gray-50 rounded-[3rem] p-12 shadow-sm border" data-aos="fade-up">
          <h3 className="text-3xl font-[500]text-gray-900 mb-4">Need Technical Data?</h3>
          <p className="text-gray-500 max-w-lg mx-auto mb-10 text-lg">
            Explore our comprehensive archive of hardware specifications and architectural documentation for modern computing systems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              to="/guides"
              className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-2xl font-[500]uppercase tracking-widest shadow-xl hover:-translate-y-1 transition-all"
            >
              Browse Technical Guides
            </Link>
            <Link
              to="/drivers"
              className="bg-white border border-gray-200 text-gray-700 px-10 py-5 rounded-2xl font-[500]uppercase tracking-widest hover:border-secondary hover:text-secondary transition-all shadow-sm"
            >
              Hardware Registry
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogDetails;
