import { create } from 'zustand';

import { Themes } from '@src/constants';

import { MultiSelect } from '@types';

interface SnowflakeState {
  isShow: boolean;
  toggle: () => void;
}

export const useSnowflakeStore = create<SnowflakeState>(set => ({
  // 1월, 2월, 12월만 기본값 true로 설정
  isShow: [0, 1, 11].includes(new Date().getMonth()),
  toggle() {
    set(({ isShow }) => ({ isShow: !isShow }));
  },
}));

interface ShowSNBState {
  isShow: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}
export const useShowSNBStore = create<ShowSNBState>((set, get) => ({
  isShow: false,
  toggle() {
    const { isShow, close, open } = get();
    isShow ? close() : open();
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

interface ShowSearchState {
  isShow: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void;
}
export const useShowSearchStore = create<ShowSearchState>((set, get) => ({
  isShow: false,
  toggle() {
    const { isShow, close, open } = get();
    isShow ? close() : open();
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
