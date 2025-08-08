import { useState } from "react";

interface WallpaperProps {
  mediaSource?: string;
  mediaType?: 'video' | 'image';
  onLoad?: () => void;
  onError?: (error: Event | string) => void;
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
  onLoad,
  onError
}: WallpaperProps) {
  const [mediaUrl] = useState(mediaSource);
  const resolvedType = mediaType || detectMediaType(mediaUrl);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {resolvedType === 'video' ? (
        <video
          autoPlay
          loop
          muted
          controls={false}
          src={mediaUrl}
          className="w-full h-full pointer-events-none object-cover"
          onLoadedData={onLoad}
          onError={(e) => onError?.(e.nativeEvent)}
        />
      ) : (
        <img
          src={mediaUrl}
          className="w-full h-full pointer-events-none object-cover"
          onLoad={onLoad}
          onError={(e) => onError?.(e.nativeEvent)}
        />
      )}
    </div>
  );
}