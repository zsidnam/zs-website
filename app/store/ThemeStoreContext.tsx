'use client';

import { createContext, useContext, useRef } from 'react';
import { StoreApi, useStore } from 'zustand';

import {
  ThemeStore,
  createThemeStore,
  initThemeStore,
} from '@/app/store/createThemeStore';
import { ParentProps } from '@/app/util/types';

const ThemeStoreContext = createContext<StoreApi<ThemeStore>>(null!);

/**
 * Context Provider to expose zustand theme store on a per-request basis.
 */
export function ThemeStoreProvider({ children }: ParentProps) {
  const storeRef = useRef<StoreApi<ThemeStore>>();
  if (!storeRef.current) {
    storeRef.current = createThemeStore(initThemeStore());
  }

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
