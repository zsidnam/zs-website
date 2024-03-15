'use client';

import { useThemeStore } from '@/app/theme/ThemeStoreContext';
import { TWProps } from '@/app/util/clientTypes';

export function ThemeSwitcher({ className }: TWProps) {
  const { toggleTheme } = useThemeStore((state) => state.actions);

  return (
    <button className={className} onClick={toggleTheme}>
      Theme
    </button>
  );
}
