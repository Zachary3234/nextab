import { useState } from 'react';

export function Wallpaper() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoSources = [
    '/wallpapers/09.mp4'
  ];

  return (
    <video 
      key={videoSources[currentVideo]}
      autoPlay 
      loop 
      muted
      controls={false}
      className="absolute pointer-events-none inset-0 min-w-full min-h-full object-cover z-0"
    >
      <source src={videoSources[currentVideo]} type="video/mp4" />
    </video>
  )
}