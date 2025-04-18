import React, { useState } from 'react';
import PageBanner from '@/components/PageBanner';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  VIDEO_CATEGORIES, 
  VIDEO_COLLECTION, 
  GALLERY_IMAGES,
  ALBUM_COLLECTION,
  LIVE_PERFORMANCES 
} from '@/lib/constants';
import { Play, Disc, Mic } from 'lucide-react';

const Media = () => {
  const [activeTab, setActiveTab] = useState("videos");
  const [videoCategory, setVideoCategory] = useState("albums");
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

  const allVideoCategories = [
    { id: "albums", name: "Albums", icon: <Disc className="w-4 h-4" /> },
    { id: "live", name: "Live Shows", icon: <Mic className="w-4 h-4" /> },
    ...VIDEO_CATEGORIES.map(cat => ({ ...cat, icon: <Play className="w-4 h-4" /> }))
  ];

  const getVideoContent = () => {
    switch(videoCategory) {
      case "albums":
        return ALBUM_COLLECTION;
      case "live":
        return LIVE_PERFORMANCES;
      default:
        return VIDEO_COLLECTION[videoCategory as keyof typeof VIDEO_COLLECTION];
    }
  };

  return (
    <div>
      <PageBanner 
        title="Media Gallery" 
        subtitle="Explore Michael's iconic albums, performances, and images"
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
                  {allVideoCategories.map(category => (
                    <button
                      key={category.id}
                      className={`px-4 py-2 rounded-full transition-colors inline-flex items-center gap-2 ${
                        videoCategory === category.id
                          ? 'bg-gold text-black font-semibold'
                          : 'bg-mjblack-light text-gray-300 hover:bg-mjblack-light/80'
                      }`}
                      onClick={() => setVideoCategory(category.id)}
                    >
                      {category.icon}
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getVideoContent().map(video => (
                  <div key={video.id} className="bg-mjblack-light border border-gold-dark rounded-lg overflow-hidden hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-shadow">
                    <YouTubeEmbed embedId={video.embedId} title={video.title} />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gold">{video.title}</h3>
                      {video.year && (
                        <p className="text-sm text-gray-400 mt-1">{video.year}</p>
                      )}
                      {video.description && (
                        <p className="text-gray-300 mt-2 text-sm">{video.description}</p>
                      )}
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
