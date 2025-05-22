import React from 'react';

interface VideoEmbedProps {
  videoUrl: string;
  className?: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoUrl, className = "" }) => {
  // Determine video type and extract ID
  const getVideoInfo = (url: string): { type: 'youtube' | 'vimeo' | 'unknown', id: string } => {
    // Check for YouTube URL
    const youtubeRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const youtubeMatch = url.match(youtubeRegExp);
    
    if (youtubeMatch && youtubeMatch[2].length === 11) {
      return { type: 'youtube', id: youtubeMatch[2] };
    }
    
    // Check for Vimeo URL
    const vimeoRegExp = /(?:vimeo\.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_-]+)?)/i;
    const vimeoMatch = url.match(vimeoRegExp);
    
    if (vimeoMatch && vimeoMatch[1]) {
      return { type: 'vimeo', id: vimeoMatch[1] };
    }
    
    return { type: 'unknown', id: '' };
  };

  const { type, id } = getVideoInfo(videoUrl);
  
  if (type === 'unknown' || !id) {
    return <div className="text-red-500">Invalid video URL</div>;
  }
  
  let embedUrl = '';
  
  if (type === 'youtube') {
    embedUrl = `https://www.youtube.com/embed/${id}`;
  } else if (type === 'vimeo') {
    embedUrl = `https://player.vimeo.com/video/${id}`;
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`} style={{ paddingTop: '56.25%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full border-0"
        src={embedUrl}
        title="Video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
