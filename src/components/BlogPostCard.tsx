
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  imageUrl: string;
}

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <div className="bg-mjblack-light border border-gold-dark rounded-lg overflow-hidden hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-shadow">
      <img 
        src={post.imageUrl} 
        alt={post.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gold">{post.title}</h3>
        <p className="text-gray-300 mb-4">{post.excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
        <Link 
          to={`/blog/${post.id}`} 
          className="mt-4 inline-block glow-button"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogPostCard;
