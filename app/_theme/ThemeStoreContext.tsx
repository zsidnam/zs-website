'use client';

import { createContext, useContext, useEffect, useRef } from 'react';
import { StoreApi, useStore } from 'zustand';

import {
  Theme,
  ThemeStore,
  createThemeStore,
  initThemeStore,
} from '@/_theme/createThemeStore';
import { ParentProps } from '@/_types/client';

const ThemeStoreContext = createContext<StoreApi<ThemeStore>>(null!);

/**
 * Context Provider to expose zustand theme store on a per-request basis.
 */
export function ThemeStoreProvider({ children }: ParentProps) {
  const storeRef = useRef<StoreApi<ThemeStore>>();
  if (!storeRef.current) {
    storeRef.current = createThemeStore(initThemeStore());
  }

  useEffect(() => {
    // By the time the component is mounted, the `setColorThemeScript` has already
    // run and set a theme value on the root element.
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme) {
      // Make sure the store is in sync with the current theme value.
      storeRef.current!.setState({ theme: currentTheme as Theme });
    }
  }, []);

  return (
    <ThemeStoreContext.Provider value={storeRef.current}>
      {children}
    </ThemeStoreContext.Provider>
  );
}

/**
 * Hook to access the theme store instance (via context).
 */
export function useThemeStoreInstance() {
  const themeStore = useContext(ThemeStoreContext);
  if (!themeStore) {
    throw new Error('useThemeStore must be used within a ThemeStoreProvider');
  }

  return themeStore;
}

/**
 * Hook to access the theme store state (via context).
 */
export function useThemeStore<T>(selector: (store: ThemeStore) => T) {
  const themeStore = useThemeStoreInstance();

  return useStore(themeStore, selector);
}
