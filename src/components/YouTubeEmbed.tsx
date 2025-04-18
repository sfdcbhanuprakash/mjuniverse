
import React from 'react';

interface YouTubeEmbedProps {
  embedId: string;
  title?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ embedId, title }) => {
  return (
    <div className="relative overflow-hidden w-full pt-[56.25%]">
      <iframe
        className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        title={title || "YouTube video player"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
