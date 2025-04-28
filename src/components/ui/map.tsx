
import { useState, useEffect } from 'react';

interface MapProps {
  location: string;
  mapUrl: string;
}

export function Map({ location, mapUrl }: MapProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Create a sanitized Google Maps embed URL from the shared map URL
  const getEmbedUrl = () => {
    // Extract the coordinates from the Google Maps URL
    // This is a simplified version - in a real app, you'd want more robust parsing
    if (mapUrl.includes('goo.gl')) {
      // For short URLs, we'll use a default embed with the location as query
      return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(location)}`;
    }
    
    // Default fallback
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodeURIComponent(location)}`;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden relative shadow-md">
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          <div className="text-muted-foreground">Chargement de la carte...</div>
        </div>
      )}
      <iframe
        src={getEmbedUrl()}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={() => setIsLoaded(true)}
        className={`${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}
      ></iframe>
      
      {/* Add a subtle overlay gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background/30 to-transparent pointer-events-none"></div>
    </div>
  );
}
