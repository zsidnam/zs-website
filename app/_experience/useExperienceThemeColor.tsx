'use client';

import {
  EXPERIENCE_THEME_COLORS,
  ExperienceColors,
} from '@/_styles/experience';
import { useThemeStore } from '@/_theme/ThemeStoreContext';

export function useExperienceThemeColors(): ExperienceColors {
  const theme = useThemeStore((state) => state.theme);
  return EXPERIENCE_THEME_COLORS[theme];
}
