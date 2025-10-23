"use client";

import Image from "next/image";
import { useState } from "react";

interface LogoImageProps {
  className?: string;
  priority?: boolean;
  animated?: boolean;
}

export default function LogoImage({ 
  className = "logo-img", 
  priority = false,
  animated = false 
}: LogoImageProps) {
  const [logoLoaded, setLogoLoaded] = useState(false);

  const handleLoad = () => {
    setLogoLoaded(true);
  };

  return (
    <Image 
      src="/faq/AI-people Logo.png" 
      alt="AI-People" 
      className={`${className} ${logoLoaded ? 'loaded' : 'loading'} ${animated ? 'animated' : ''}`}
      width={180} 
      height={75}
      priority={priority}
      quality={75}
      unoptimized={false}
      onLoad={handleLoad}
    />
  );
}
