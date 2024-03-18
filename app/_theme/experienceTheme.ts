import { Theme } from '@/_theme/createThemeStore';

export interface ExperienceColors {
  background: string;
  foreground: string;
}

export const EXPERIENCE_THEME_COLORS = {
  light: {
    foreground: '#128A63',
    background: '#ff0000',
  },
  dark: {
    foreground: '#27FFC9',
    background: '#0000ff',
  },
} satisfies Record<Theme, ExperienceColors>;
