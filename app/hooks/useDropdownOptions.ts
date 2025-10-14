"use client";

import { useMemo } from 'react';
import { useLanguage } from './useLanguage';

interface DropdownOption {
  value: string;
  label: string;
  labelRu?: string;
}

interface TranslatedOption {
  value: string;
  label: string;
}

export function useDropdownOptions(forceLanguage?: 'en' | 'ru') {
  // Use forceLanguage directly, don't rely on useLanguage
  const effectiveLanguage = forceLanguage || 'en';

  const getTranslatedOptions = useMemo(() => {
    return (options: DropdownOption[]): TranslatedOption[] => {
      console.log('[useDropdownOptions] forceLanguage:', forceLanguage);
      console.log('[useDropdownOptions] effectiveLanguage:', effectiveLanguage);
      console.log('[useDropdownOptions] options count:', options.length);
      const translated = options.map(option => ({
        value: option.value,
        label: effectiveLanguage === 'ru' && option.labelRu ? option.labelRu : option.label
      }));
      console.log('[useDropdownOptions] translated options:', translated.slice(0, 3)); // Show first 3
      return translated;
    };
  }, [forceLanguage, effectiveLanguage]);

  return { getTranslatedOptions, currentLanguage: effectiveLanguage };
}
