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

export function useDropdownOptions() {
  const { currentLanguage } = useLanguage();

  const getTranslatedOptions = useMemo(() => {
    return (options: DropdownOption[]): TranslatedOption[] => {
      console.log('[useDropdownOptions] currentLanguage:', currentLanguage);
      console.log('[useDropdownOptions] options count:', options.length);
      const translated = options.map(option => ({
        value: option.value,
        label: currentLanguage === 'ru' && option.labelRu ? option.labelRu : option.label
      }));
      console.log('[useDropdownOptions] translated options:', translated.slice(0, 3)); // Show first 3
      return translated;
    };
  }, [currentLanguage]);

  return { getTranslatedOptions, currentLanguage };
}
