"use client";

import Image from "next/image";

export default function OfflinePage() {
  return (
    <div className="container offline-page">
      <div className="offline-content">
        <div className="offline-icon">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </div>
        
        <h1 className="offline-title">
          <span className="gradient-text">You're Offline</span>
        </h1>
        
        <p className="offline-description">
          Don't worry! You can still browse cached content while you're offline. 
          Some features may be limited until you reconnect to the internet.
        </p>
        
        <div className="offline-actions">
          <button 
            className="btn primary"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
          
          <button 
            className="btn secondary"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
        
        <div className="offline-features">
          <h3>Available Offline:</h3>
          <ul>
            <li>✅ Browse cached AI models</li>
            <li>✅ Read saved articles</li>
            <li>✅ View FAQ</li>
            <li>✅ Access main navigation</li>
          </ul>
        </div>
        
        <div className="offline-tip">
          <p>
            <strong>Tip:</strong> Install AI-People as an app for better offline experience!
          </p>
        </div>
      </div>
    </div>
  );
}
