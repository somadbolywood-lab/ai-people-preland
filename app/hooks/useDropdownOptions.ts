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
  // Use global language state from useLanguage hook
  const { currentLanguage } = useLanguage();
  const effectiveLanguage = forceLanguage || currentLanguage;

  const getTranslatedOptions = useMemo(() => {
    return (options: DropdownOption[]): TranslatedOption[] => {
      console.log('[useDropdownOptions] forceLanguage:', forceLanguage);
      console.log('[useDropdownOptions] currentLanguage:', currentLanguage);
      console.log('[useDropdownOptions] effectiveLanguage:', effectiveLanguage);
      console.log('[useDropdownOptions] options count:', options.length);
      const translated = options.map(option => ({
        value: option.value,
        label: effectiveLanguage === 'ru' && option.labelRu ? option.labelRu : option.label
      }));
      console.log('[useDropdownOptions] translated options:', translated.slice(0, 3)); // Show first 3
      return translated;
    };
  }, [forceLanguage, currentLanguage, effectiveLanguage]);

  return { getTranslatedOptions, currentLanguage: effectiveLanguage };
}
