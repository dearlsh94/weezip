import { create } from 'zustand';

interface SnowflakeState {
  isShow: boolean;
  change: () => void;
}
export const useSnowflakeStore = create<SnowflakeState>(set => ({
  isShow: true,
  change: () => set(({ isShow }) => ({ isShow: !isShow })),
}));

export const enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}
interface ThemeState {
  theme: Themes;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}
export const useThemeStore = create<ThemeState>(set => ({
  theme: Themes.LIGHT,
  setDarkTheme: () => set(() => ({ theme: Themes.DARK })),
  setLightTheme: () => set(() => ({ theme: Themes.LIGHT })),
}));
