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
      return options.map(option => ({
        value: option.value,
        label: currentLanguage === 'ru' && option.labelRu ? option.labelRu : option.label
      }));
    };
  }, [currentLanguage]);

  return { getTranslatedOptions, currentLanguage };
}
