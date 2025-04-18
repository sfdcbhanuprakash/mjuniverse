
import React, { useState } from 'react';
import PageBanner from '@/components/PageBanner';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { VIDEO_CATEGORIES, VIDEO_COLLECTION, GALLERY_IMAGES } from '@/lib/constants';
import { Play } from 'lucide-react';

const Media = () => {
  const [activeTab, setActiveTab] = useState("videos");
  const [videoCategory, setVideoCategory] = useState("performances");
  const [galleryFilter, setGalleryFilter] = useState("all");
  
  const filteredImages = galleryFilter === "all" 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === galleryFilter);
  
  const galleryCategories = [
    { id: "all", name: "All Images" },
    { id: "early", name: "Early Years" },
    { id: "thriller", name: "Thriller Era" },
    { id: "bad", name: "Bad Era" },
    { id: "dangerous", name: "Dangerous Era" },
    { id: "performance", name: "Performances" }
  ];

  return (
    <div>
      <PageBanner 
        title="Media Gallery" 
        subtitle="Explore Michael's iconic videos, performances, and images"
        backgroundImage="/images/media-banner.jpg"
      />
      
      <section className="py-16 bg-mjblack">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="videos" onValueChange={value => setActiveTab(value)}>
            <TabsList className="w-full flex justify-center mb-8">
              <TabsTrigger value="videos" className="text-lg px-8">Videos</TabsTrigger>
              <TabsTrigger value="images" className="text-lg px-8">Images</TabsTrigger>
            </TabsList>
            
            <TabsContent value="videos" className="animate-fade-in">
              <div className="mb-8 flex justify-center">
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {VIDEO_CATEGORIES.map(category => (
                    <button
                      key={category.id}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        videoCategory === category.id
                          ? 'bg-gold text-black font-semibold'
                          : 'bg-mjblack-light text-gray-300 hover:bg-mjblack-light/80'
                      }`}
                      onClick={() => setVideoCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {VIDEO_COLLECTION[videoCategory as keyof typeof VIDEO_COLLECTION].map(video => (
                  <div key={video.id} className="bg-mjblack-light border border-gold-dark rounded-lg overflow-hidden hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-shadow">
                    <YouTubeEmbed embedId={video.embedId} title={video.title} />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gold">{video.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center text-gray-400">
                <p>
                  All videos are embedded from YouTube under fair use guidelines. 
                  <br />
                  MJ Universe does not host any video content directly.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="images" className="animate-fade-in">
              <div className="mb-8 flex justify-center">
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {galleryCategories.map(category => (
                    <button
                      key={category.id}
                      className={`px-4 py-2 rounded-full transition-colors ${
                        galleryFilter === category.id
                          ? 'bg-gold text-black font-semibold'
                          : 'bg-mjblack-light text-gray-300 hover:bg-mjblack-light/80'
                      }`}
                      onClick={() => setGalleryFilter(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="gallery-grid">
                {filteredImages.map(image => (
                  <div 
                    key={image.id} 
                    className="overflow-hidden rounded-lg border border-gold-dark hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all hover:scale-[1.02] duration-300"
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center text-gray-400">
                <p>
                  All images are either in the public domain or used under fair use guidelines.
                  <br />
                  If you believe any content infringes copyright, please contact us for removal.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <section className="py-16 bg-mjblack-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-heading">Most Iconic Performance</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Michael Jackson's performance of "Billie Jean" at the Motown 25 celebration in 1983 changed 
            music history forever. It was during this performance that he debuted the moonwalk, 
            instantly creating one of the most iconic moments in entertainment history.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <YouTubeEmbed embedId="g3t9-jNjK-A" title="Michael Jackson - Billie Jean (Motown 25)" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
