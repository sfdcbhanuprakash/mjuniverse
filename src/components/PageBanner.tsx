
import React from 'react';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageBanner: React.FC<PageBannerProps> = ({ 
  title, 
  subtitle,
  backgroundImage 
}) => {
  const bgStyle = backgroundImage 
    ? { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})` } 
    : { background: 'linear-gradient(to right, #121212, #222222)' };

  return (
    <div 
      className="py-16 md:py-24 bg-cover bg-center bg-no-repeat"
      style={bgStyle}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gold-light">{title}</h1>
        {subtitle && (
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default PageBanner;
