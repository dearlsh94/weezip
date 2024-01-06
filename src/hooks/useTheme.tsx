import { useEffect } from 'react';
import { CONFIG_THEME_KEY } from '@src/constants';
import { useLocalStorage } from './useLocalStorage';
import { Themes, useThemeStore } from '@store/configStore';

const useTheme = () => {
  const { theme, setDarkTheme, setLightTheme } = useThemeStore();
  const { setConfig, getConfig } = useLocalStorage();

  useEffect(() => {
    const configTheme = getConfig(CONFIG_THEME_KEY);
    if (configTheme) {
      if (configTheme === Themes.DARK) {
        setDark();
      } else {
        setLight();
      }
    } else {
      const preferDark = window.matchMedia('(prefers-color-scheme: dark');
      if (preferDark?.matches) {
        changeDark();
      } else {
        changeLight();
      }
    }
  }, []);

  const changeLight = () => {
    document.documentElement.setAttribute(CONFIG_THEME_KEY, Themes.LIGHT);
    setLightTheme();
  };
  const setLight = () => {
    changeLight();
    setConfig(CONFIG_THEME_KEY, Themes.LIGHT);
  };

  const changeDark = () => {
    document.documentElement.setAttribute(CONFIG_THEME_KEY, Themes.DARK);
    setDarkTheme();
  };
  const setDark = () => {
    changeDark();
    setConfig(CONFIG_THEME_KEY, Themes.DARK);
  };

  return { theme, setLight, setDark };
};

export default useTheme;
