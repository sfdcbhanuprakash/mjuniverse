
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  autoPlayInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ 
  images, 
  autoPlayInterval = 5000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlayInterval) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);
    
    return () => clearInterval(interval);
  }, [autoPlayInterval, images.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden h-[500px]">
      {/* Images */}
      <div className="h-full w-full">
        {images.map((image, index) => (
          <div 
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover"
            />
            {image.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4">
                <p className="text-white text-center">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <button 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-colors"
        onClick={goToPrevious}
      >
        <ChevronLeft size={24} />
      </button>
      
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-75 transition-colors"
        onClick={goToNext}
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Dots */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
