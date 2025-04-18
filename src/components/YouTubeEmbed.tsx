
import React, { useState } from 'react';
import { VideoOff } from 'lucide-react';

interface YouTubeEmbedProps {
  embedId: string;
  title?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ embedId, title }) => {
  const [videoError, setVideoError] = useState(false);
  const fallbackImageUrl = `/images/video-thumbnail-${embedId}.jpg`;
  
  if (videoError) {
    return (
      <div className="relative overflow-hidden w-full pt-[56.25%] bg-mjblack-light flex items-center justify-center">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
          <VideoOff size={48} className="mb-2" />
          <p className="text-sm">Video unavailable</p>
          <p className="text-xs mt-1">{title}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden w-full pt-[56.25%]">
      <iframe
        className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        title={title || "YouTube video player"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        onError={() => setVideoError(true)}
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;

