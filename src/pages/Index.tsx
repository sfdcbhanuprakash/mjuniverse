
import React from 'react';
import { Link } from 'react-router-dom';
import ImageCarousel from '@/components/ImageCarousel';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import BlogPostCard from '@/components/BlogPostCard';
import { CAROUSEL_IMAGES, HERO_TITLE, FEATURED_VIDEOS, BIO_CONTENT, BLOG_POSTS } from '@/lib/constants';
import { ArrowRight, Music, Calendar, Film, Users } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <ImageCarousel images={CAROUSEL_IMAGES} />
        <div className="absolute inset-0 flex items-center justify-center flex-col bg-black bg-opacity-40 text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center gold-shimmer text-transparent bg-clip-text">{HERO_TITLE}</h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl text-center">Celebrating the life, music, and legacy of the King of Pop</p>
          <Link to="/about" className="glow-button text-lg">
            Start the Journey
          </Link>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-16 bg-mjblack">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <h2 className="section-heading">The Legend Lives On</h2>
              <p className="text-gray-300 mb-6">{BIO_CONTENT.intro}</p>
              <p className="text-gray-300 mb-6">{BIO_CONTENT.impact}</p>
              <Link to="/about" className="fancy-link flex items-center gap-2">
                Explore the full biography <ArrowRight size={16} />
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-md p-1 bg-gold-gradient rounded-lg">
                <img 
                  src="/images/mj-portrait.jpg" 
                  alt="Michael Jackson Portrait" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-16 bg-mjblack-dark">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Iconic Performances</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_VIDEOS.map((video) => (
              <div key={video.id} className="bg-mjblack border border-gold-dark rounded-lg overflow-hidden hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-shadow">
                <YouTubeEmbed embedId={video.embedId} title={video.title} />
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 text-gold">{video.title}</h3>
                  <p className="text-gray-300 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/media" className="glow-button">
              View Media Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Latest from the Blog */}
      <section className="py-16 bg-mjblack">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Fan Tributes & Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/blog" className="glow-button">
              Read More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Sections */}
      <section className="py-16 bg-mjblack-dark">
        <div className="container mx-auto px-4">
          <h2 className="section-heading text-center mb-12">Explore the Universe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Music className="text-gold h-10 w-10 mb-4" />, 
                title: "The Music", 
                description: "Discover the revolutionary albums and songs that defined generations",
                link: "/media"
              },
              { 
                icon: <Film className="text-gold h-10 w-10 mb-4" />, 
                title: "The Videos", 
                description: "Experience the groundbreaking visual artistry of Michael's music videos",
                link: "/media"
              },
              { 
                icon: <Calendar className="text-gold h-10 w-10 mb-4" />, 
                title: "The Journey", 
                description: "Follow Michael's extraordinary life and career through our interactive timeline",
                link: "/timeline"
              },
              { 
                icon: <Users className="text-gold h-10 w-10 mb-4" />, 
                title: "The Community", 
                description: "Connect with fellow fans and share your own Michael Jackson memories",
                link: "/contact"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-mjblack p-6 border border-gold-dark rounded-lg text-center hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-shadow"
              >
                {item.icon}
                <h3 className="text-xl font-bold mb-2 text-gold">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <Link to={item.link} className="fancy-link">
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
