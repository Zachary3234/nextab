import { useState } from "react";

interface WallpaperProps {
  mediaSource?: string;
  mediaType?: 'video' | 'image';
}

const detectMediaType = (url?: string) => {
  if (!url) {
    return 'image';
  }
  const ext = url.split('.').pop()?.toLowerCase();
  return ['mp4','webm','mov'].includes(ext!) ? 'video' : 'image';
};

export function Wallpaper({
  mediaSource,
  mediaType,
}: WallpaperProps) {
  const resolvedType = mediaType || detectMediaType(mediaSource);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {resolvedType === 'video' ? (
        <video
          autoPlay
          loop
          muted
          controls={false}
          src={mediaSource}
          className="w-full h-full pointer-events-none object-cover"
        />
      ) : (
        <img
          src={mediaSource}
          className="w-full h-full pointer-events-none object-cover"
        />
      )}
    </div>
  );
}