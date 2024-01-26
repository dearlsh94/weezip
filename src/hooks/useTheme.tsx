import { useEffect } from 'react';

import { CONFIG_THEME_KEY, Themes } from '@src/constants';
import { useThemeStore } from '@store/config';

import { useLocalStorage } from './useLocalStorage';

const useTheme = () => {
  const { setConfig, getConfig } = useLocalStorage();
  const { theme, setDarkTheme, setLightTheme } = useThemeStore();

  useEffect(() => {
    const configTheme = getConfig(CONFIG_THEME_KEY);
    if (configTheme === Themes.DARK) {
      changeAndSaveDark();
    } else if (configTheme === Themes.LIGHT) {
      changeAndSaveLight();
    } else if (window.matchMedia('(prefers-color-scheme: dark').matches) {
      changeDark();
    } else {
      changeLight();
    }
  }, []);

  const changeLight = () => {
    document.documentElement.setAttribute(CONFIG_THEME_KEY, Themes.LIGHT);
    setLightTheme();
  };
  const changeAndSaveLight = () => {
    changeLight();
    setConfig(CONFIG_THEME_KEY, Themes.LIGHT);
  };

  const changeDark = () => {
    document.documentElement.setAttribute(CONFIG_THEME_KEY, Themes.DARK);
    setDarkTheme();
  };
  const changeAndSaveDark = () => {
    changeDark();
    setConfig(CONFIG_THEME_KEY, Themes.DARK);
  };

  return { theme, changeAndSaveDark, changeAndSaveLight };
};

export default useTheme;
