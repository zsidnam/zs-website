import { createStore } from 'zustand/vanilla';

export interface ThemeState {
  theme: 'light' | 'dark';
}

export interface ThemeActions {
  actions: {
    toggleTheme: () => void;
  };
}

export type ThemeStore = ThemeState & ThemeActions;

export function initThemeStore(): ThemeState {
  return {
    theme: 'light',
  };
}

const defaultInitState = initThemeStore();

/**
 * Creates a new vanilla zustand store for managing the theme state.
 */
export const createThemeStore = (initState: ThemeState = defaultInitState) => {
  return createStore<ThemeStore>()((set) => ({
    ...initState,
    actions: {
      toggleTheme: () =>
        set((prev) => {
          const nextTheme = prev.theme === 'light' ? 'dark' : 'light';

          document.documentElement.setAttribute('data-theme', nextTheme);

          return { theme: nextTheme };
        }),
    },
  }));
};
