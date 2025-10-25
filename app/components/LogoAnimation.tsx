"use client";

import { useEffect } from "react";

export default function LogoAnimation() {
  useEffect(() => {
    const logoImg = document.querySelector('.logo-img') as HTMLImageElement;
    const picture = document.querySelector('picture');
    
    if (logoImg) {
      const handleLoad = () => {
        logoImg.classList.add('loaded');
      };
      
      // Handle both img load and picture load events
      const handlePictureLoad = () => {
        logoImg.classList.add('loaded');
      };
      
      if (logoImg.complete) {
        // Image already loaded
        handleLoad();
      } else {
        // Listen to both img and picture load events
        logoImg.addEventListener('load', handleLoad);
        if (picture) {
          picture.addEventListener('load', handlePictureLoad);
        }
        
        // Fallback: show logo after 500ms even if not loaded
        const fallbackTimer = setTimeout(() => {
          logoImg.classList.add('loaded');
        }, 500);
        
        return () => {
          logoImg.removeEventListener('load', handleLoad);
          if (picture) {
            picture.removeEventListener('load', handlePictureLoad);
          }
          clearTimeout(fallbackTimer);
        };
      }
    }
  }, []);

  // This component doesn't render anything, it just handles the animation
  return null;
}
