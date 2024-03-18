import { Theme } from '@/_theme/createThemeStore';

export interface ExperienceColors {
  background: string;
  foreground: string;
}

export const EXPERIENCE_THEME_COLORS = {
  light: {
    foreground: '#ff0000',
    background: '#ff0000',
  },
  dark: {
    foreground: '#0000ff',
    background: '#0000ff',
  },
} satisfies Record<Theme, ExperienceColors>;
