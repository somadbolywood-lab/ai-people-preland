"use client";

import { useState, useRef, useEffect } from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface CustomDropdownProps {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  placeholderEn?: string;
  placeholderRu?: string;
  disabled?: boolean;
}

export default function CustomDropdown({ 
  options, 
  value, 
  onChange, 
  placeholder = "Select an option",
  placeholderEn,
  placeholderRu,
  disabled = false 
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(option => option.value === value);
  
  // Determine current language and appropriate placeholder
  const getCurrentPlaceholder = () => {
    if (typeof window === 'undefined') return placeholder;
    
    // Check if body has ru-optimized class (indicates Russian language)
    const isRussian = document.body.classList.contains('ru-optimized');
    
    if (isRussian && placeholderRu) {
      return placeholderRu;
    } else if (!isRussian && placeholderEn) {
      return placeholderEn;
    }
    
    return placeholder;
  };
  
  const currentPlaceholder = getCurrentPlaceholder();
  
  // Debug logging
  useEffect(() => {
    console.log('[CustomDropdown] Options updated:', options.length, 'options');
    console.log('[CustomDropdown] Current value:', value, '(type:', typeof value, ')');
    console.log('[CustomDropdown] Selected option:', selectedOption);
    console.log('[CustomDropdown] Current placeholder:', currentPlaceholder);
    console.log('[CustomDropdown] Will show:', selectedOption ? selectedOption.label : currentPlaceholder);
    
    // Check if any option has empty value
    const emptyValueOption = options.find(opt => opt.value === '');
    console.log('[CustomDropdown] Empty value option:', emptyValueOption);
    
    // Check if value matches any option exactly
    const exactMatch = options.find(opt => opt.value === value);
    console.log('[CustomDropdown] Exact match for value:', exactMatch);
  }, [options, value, selectedOption, currentPlaceholder]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Listen for language changes to update placeholder
  useEffect(() => {
    const handleLanguageChange = () => {
      // Force re-render by updating state
      const newPlaceholder = getCurrentPlaceholder();
      if (newPlaceholder !== currentPlaceholder) {
        // Trigger re-render by updating a dummy state
        setIsOpen(prev => prev);
      }
    };

    window.addEventListener('languageChange', handleLanguageChange);
    return () => {
      window.removeEventListener('languageChange', handleLanguageChange);
    };
  }, [currentPlaceholder]);

  const handleOptionClick = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <button
        type="button"
        className={`dropdown-trigger ${isOpen ? 'open' : ''} ${disabled ? 'disabled' : ''}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="dropdown-value">
          {selectedOption ? selectedOption.label : currentPlaceholder}
        </span>
        <svg 
          className={`dropdown-arrow ${isOpen ? 'open' : ''}`}
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <polyline points="6,9 12,15 18,9"></polyline>
        </svg>
      </button>
      
      {isOpen && (
        <div className="dropdown-menu" role="listbox">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              className={`dropdown-option ${value === option.value ? 'selected' : ''}`}
              onClick={() => handleOptionClick(option.value)}
              role="option"
              aria-selected={value === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
