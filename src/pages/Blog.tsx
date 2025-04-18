
import React from 'react';
import { Link } from 'react-router-dom';
import PageBanner from '@/components/PageBanner';
import BlogPostCard from '@/components/BlogPostCard';
import { BLOG_POSTS } from '@/lib/constants';
import { Search } from 'lucide-react';

const Blog = () => {
  return (
    <div>
      <PageBanner 
        title="Fan Blog" 
        subtitle="Stories, tributes, and insights from the MJ community"
        backgroundImage="/images/blog-banner.jpg"
      />
      
      <section className="py-16 bg-mjblack">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-3/4">
              <h2 className="section-heading mb-8">Latest Stories</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {BLOG_POSTS.map(post => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
              
              <div className="mt-12">
                <h2 className="section-heading mb-8">Featured Articles</h2>
                
                <div className="space-y-8">
                  {[
                    {
                      id: 4,
                      title: "Top 10 Michael Jackson Dance Moves That Changed Pop Culture",
                      excerpt: "From the moonwalk to the anti-gravity lean, these iconic moves revolutionized dance and inspired generations of performers.",
                      author: "Dance Historian",
                      date: "March 15, 2025",
                      imageUrl: "/images/blog-dance-moves.jpg"
                    },
                    {
                      id: 5,
                      title: "The Fashion Evolution of Michael Jackson",
                      excerpt: "Exploring how Michael's distinctive style evolved through the decades and continues to influence fashion today.",
                      author: "Fashion Critic",
                      date: "March 10, 2025",
                      imageUrl: "/images/blog-fashion.jpg"
                    }
                  ].map(post => (
                    <div key={post.id} className="flex flex-col md:flex-row gap-6 bg-mjblack-light border border-gold-dark rounded-lg overflow-hidden hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-shadow">
                      <div className="md:w-1/3">
                        <img 
                          src={post.imageUrl} 
                          alt={post.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h3 className="text-xl font-bold mb-2 text-gold">{post.title}</h3>
                        <p className="text-gray-300 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                          <span>{post.author}</span>
                          <span>{post.date}</span>
                        </div>
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="glow-button"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="md:w-1/4">
              <div className="sticky top-8">
                <div className="bg-mjblack-light border border-gold-dark rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gold">Search Articles</h3>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="mj-input pl-10"
                    />
                    <Search className="absolute top-3 left-3 text-gray-500" size={16} />
                  </div>
                </div>
                
                <div className="bg-mjblack-light border border-gold-dark rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-gold">Categories</h3>
                  <ul className="space-y-2">
                    {['Performance', 'Music', 'Fashion', 'Legacy', 'Humanitarian Work', 'Tributes'].map(category => (
                      <li key={category}>
                        <Link to={`/blog/category/${category.toLowerCase()}`} className="fancy-link">
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-mjblack-light border border-gold-dark rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4 text-gold">Submit Your Story</h3>
                  <p className="text-gray-300 mb-4">
                    Have a Michael Jackson story or tribute to share? We'd love to hear from you!
                  </p>
                  <Link to="/contact" className="glow-button w-full text-center">
                    Submit Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
