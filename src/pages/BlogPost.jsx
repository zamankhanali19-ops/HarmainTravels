import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/common/SEO';
import { blogPosts } from '../data/blogPosts';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

// A simple Markdown parser to render HTML for this specific use case
const renderMarkdown = (content) => {
  let html = content
    .replace(/^### (.*$)/gim, '<h3 class="text-2xl md:text-3xl font-black text-brand-white mt-10 mb-4 tracking-tighter uppercase">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-3xl md:text-4xl font-black text-brand-white mt-12 mb-6 tracking-tighter uppercase">$1</h2>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/^\* (.*$)/gim, '<li class="ml-6 mb-2 list-disc">$1</li>')
    .replace(/^- (.*$)/gim, '<li class="ml-6 mb-2 list-disc">$1</li>')
    .replace(/^\d\. (.*$)/gim, '<li class="ml-6 mb-2 list-decimal font-bold text-brand-red"><span class="font-normal text-brand-silver">$1</span></li>')
    .replace(/\n\n/gim, '</p><p class="mb-6 leading-relaxed">')
    .replace(/<\/p><p class="mb-6 leading-relaxed"><li/gim, '<ul class="mb-6"><li')
    .replace(/<\/li><\/p>/gim, '</li></ul>');

  // Wrap the content with an initial <p> if it doesn't start with a heading or list
  if (!html.startsWith('<h') && !html.startsWith('<ul') && !html.startsWith('<ol')) {
      html = `<p class="mb-6 leading-relaxed">${html}</p>`;
  }
  
  return html;
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-brand-bg-secondary flex flex-col items-center justify-center p-8">
        <h2 className="text-3xl font-black text-brand-white mb-4 uppercase tracking-tighter">Article Not Found</h2>
        <Link to="/blog" className="btn-primary !px-6 !py-3">Go Back to Insights</Link>
      </div>
    );
  }

  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "description": post.author.bio
    },
    "publisher": {
      "@type": "Organization",
      "name": "Harmain Travels",
      "logo": {
        "@type": "ImageObject",
        "url": "https://harmaintravels.com/logo.png"
      }
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg-secondary">
      <SEO 
        title={`${post.title} | Harmain Travels`}
        description={post.excerpt}
        url={`https://harmaintravels.com/blog/${post.slug}`}
        image={post.image}
        schema={post.customSchema ? [postSchema, post.customSchema] : postSchema}
      />
      <Navbar />
      
      {/* Article Header */}
      <section className="pt-40 pb-12 bg-brand-bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-muted hover:text-brand-red transition-colors mb-8">
            <ArrowLeft size={16} /> Back to All Insights
          </Link>
          <div className="flex items-center gap-6 text-xs font-bold text-brand-muted mb-6 uppercase tracking-wider">
            <span className="flex items-center gap-2 bg-brand-bg-secondary px-4 py-2 rounded-full shadow-sm"><Calendar size={14} className="text-brand-red" /> {post.date}</span>
            <span className="flex items-center gap-2 bg-brand-bg-secondary px-4 py-2 rounded-full shadow-sm"><User size={14} className="text-brand-red" /> {post.author.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-white uppercase tracking-tighter leading-tight mb-8">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover rounded-[2rem] md:rounded-[3rem] shadow-2xl"
        />
      </div>

      {/* Article Content */}
      <section className="py-20 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className="prose prose-invert prose-lg max-w-none prose-headings:text-brand-white prose-a:text-brand-red hover:prose-a:text-brand-red-light prose-strong:text-brand-white"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />

          {/* Author Bio Section */}
          <div className="mt-16 p-8 rounded-3xl bg-brand-bg-secondary border border-white/5 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-20 h-20 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
              <User size={32} className="text-brand-red" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-white mb-2 uppercase tracking-wide">Written by {post.author.name}</h3>
              <p className="text-brand-muted leading-relaxed">{post.author.bio}</p>
            </div>
          </div>
        
        {/* Share & Tags */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xs font-black uppercase tracking-widest text-brand-white">Share this guide:</span>
            <button className="w-10 h-10 bg-brand-bg-primary rounded-full flex items-center justify-center text-brand-muted hover:bg-brand-bg-primary hover:text-white transition-all">
              <Share2 size={16} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
