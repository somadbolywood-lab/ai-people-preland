"use client";

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

  const getTranslatedOptions = (options: DropdownOption[]): TranslatedOption[] => {
    return options.map(option => ({
      value: option.value,
      label: currentLanguage === 'ru' && option.labelRu ? option.labelRu : option.label
    }));
  };

  return { getTranslatedOptions, currentLanguage };
}
