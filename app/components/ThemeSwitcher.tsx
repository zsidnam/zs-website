'use client';

import { useThemeStore } from '@/app/store/ThemeStoreContext';
import { TWProps } from '@/app/util/types';

export function ThemeSwitcher({ className }: TWProps) {
  const { toggleTheme } = useThemeStore((state) => state.actions);

  return (
    <button className={className} onClick={toggleTheme}>
      Theme
    </button>
  );
}
