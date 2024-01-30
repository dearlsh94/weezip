import { create } from 'zustand';

import { Themes } from '@src/constants';

import { MultiSelect } from '@types';

interface SnowflakeState {
  isShow: boolean;
  change: () => void;
}
export const useSnowflakeStore = create<SnowflakeState>(set => ({
  isShow: true,
  change() {
    set(({ isShow }) => ({ isShow: !isShow }));
  },
}));

interface ShowSNBState {
  isShow: boolean;
  change: () => void;
  open: () => void;
  close: () => void;
}
export const useShowSNBStore = create<ShowSNBState>((set, get) => ({
  isShow: false,
  change() {
    get().isShow ? get().close() : get().open();
  },
  open() {
    document.body.style.overflow = 'hidden';
    set(() => ({ isShow: true }));
  },
  close() {
    document.body.style.overflow = 'auto';
    set(() => ({ isShow: false }));
  },
}));

interface ThemeState {
  theme: Themes;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}
export const useThemeStore = create<ThemeState>(set => ({
  theme: Themes.LIGHT,
  setDarkTheme() {
    set(() => ({ theme: Themes.DARK }));
  },
  setLightTheme() {
    set(() => ({ theme: Themes.LIGHT }));
  },
}));

interface EveryPostsTagNamesState {
  everyPostsTagNames: string[];
  set: (everyPostsTagNames: string[]) => void;
}
export const useEveryPostsTagNamesStore = create<EveryPostsTagNamesState>(set => ({
  everyPostsTagNames: [],
  set: everyPostsTagNames => set(() => ({ everyPostsTagNames })),
}));

interface EveryPostSeriesState {
  everyPostSeries: MultiSelect;
  set: (everyPostSeries: MultiSelect) => void;
}
export const useEverySeriesNamesStore = create<EveryPostSeriesState>(set => ({
  everyPostSeries: [],
  set: everyPostSeries => set(() => ({ everyPostSeries: everyPostSeries })),
}));
