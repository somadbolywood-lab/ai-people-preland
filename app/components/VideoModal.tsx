"use client";
import { useEffect, useRef } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string; // YouTube video ID
  channelUrl?: string; // Optional YouTube channel URL
}

export default function VideoModal({ isOpen, onClose, videoId, channelUrl = "https://www.youtube.com/@YourChannel" }: VideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Block body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      // Focus trap
      modalRef.current?.focus();
    } else {
      // Restore body scroll
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Close on overlay click
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="video-modal-overlay" 
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div 
        ref={modalRef}
        className="video-modal-container"
        tabIndex={-1}
      >
        {/* Close Button */}
        <button 
          className="video-modal-close" 
          onClick={onClose}
          aria-label="Close video"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Video Container */}
        <div className="video-modal-content">
          <iframe
            ref={iframeRef}
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0&enablejsapi=1`}
            title="AI-People Presentation Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="video-modal-iframe"
          ></iframe>
        </div>

        {/* YouTube Logo (clickable) */}
        <a 
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="video-modal-youtube-logo"
          aria-label="Visit YouTube channel"
        >
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M47.52 14.4c-.48-1.92-1.92-3.36-3.84-3.84C40.32 9.6 24 9.6 24 9.6s-16.32 0-19.68.96c-1.92.48-3.36 1.92-3.84 3.84C0 17.76 0 24 0 24s0 6.24.48 9.6c.48 1.92 1.92 3.36 3.84 3.84C7.68 38.4 24 38.4 24 38.4s16.32 0 19.68-.96c1.92-.48 3.36-1.92 3.84-3.84.48-3.36.48-9.6.48-9.6s0-6.24-.48-9.6z" fill="#FF0000"/>
            <path d="M19.2 30.72L31.68 24 19.2 17.28v13.44z" fill="#FFFFFF"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

