
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => {
  return (
    <img 
      src="/assets/Logo-DHJ.png" 
      alt="Deutsches Haus Jaounde Logo" 
      className={className}
    />
  );
};

export default Logo;
