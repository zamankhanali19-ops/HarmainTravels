import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';
import { blogPosts } from '../data/blogPosts';
import { Calendar, User } from 'lucide-react';

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Travel Insights & Visa Guides | Harmain Travels Blog"
        description="Read expert travel insights, visa guides, and premium package comparisons from Islamabad's leading travel consultants."
        url="https://harmaintravels.com/blog"
      />
      <Navbar />
      
      <section className="pt-48 pb-24 bg-slate-50 text-center px-4">
        <h1 className="text-5xl md:text-8xl font-black text-[#002147] uppercase tracking-tighter mb-6 leading-none">
          Travel <span className="text-[#931328]">Insights</span>
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-medium tracking-widest uppercase">
          Expert Guides, Visa Tips, & Destination Inspiration
        </p>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-[#002147]">
                  Guide
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Calendar size={14} className="text-[#A61D24]" /> {post.date}</span>
                </div>
                <h2 className="text-2xl font-black text-[#002147] mb-4 leading-tight group-hover:text-[#A61D24] transition-colors">{post.title}</h2>
                <p className="text-slate-600 mb-6 flex-grow line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="flex items-center gap-2 text-xs font-bold text-[#002147] uppercase tracking-wider"><User size={14} className="text-[#A61D24]" /> {post.author}</span>
                  <span className="text-xs font-black text-[#A61D24] uppercase tracking-widest">Read More &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
