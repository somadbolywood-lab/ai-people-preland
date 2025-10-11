'use client';

import { useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  youtubeChannel?: string;
}

export default function VideoModal({ isOpen, onClose, videoSrc, youtubeChannel = 'https://youtube.com/@ai_people_io' }: VideoModalProps) {
  // Блокировка скролла при открытой модалке
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Закрытие по клавише Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Кнопка закрытия */}
        <button 
          className="video-modal-close" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Видео контейнер */}
        <div className="video-modal-content">
          <video 
            className="video-modal-player"
            controls
            autoPlay
            playsInline
            src={videoSrc}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Кнопка YouTube */}
        <a 
          href={youtubeChannel}
          target="_blank"
          rel="noopener noreferrer"
          className="video-modal-youtube-btn"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span data-lang-en="Watch on YouTube" data-lang-ru="Смотреть на YouTube">Watch on YouTube</span>
        </a>
      </div>
    </div>
  );
}

