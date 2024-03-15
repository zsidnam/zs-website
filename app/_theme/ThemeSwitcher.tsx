'use client';

import { useThemeStore } from '@/_theme/ThemeStoreContext';
import { TWProps } from '@/_types/client';

export function ThemeSwitcher({ className }: TWProps) {
  const { toggleTheme } = useThemeStore((state) => state.actions);

  return (
    <button className={className} onClick={toggleTheme}>
      Theme
    </button>
  );
}
