import * as React from 'react';
import useTheme from '@src/hooks/useTheme';
import { IconDarkTheme, IconLightTheme } from '@components/icon';

const ThemeController = () => {
  const { theme, changeAndSaveDark, changeAndSaveLight } = useTheme();

  return (
    <>
      {theme === 'light' ? (
        <IconLightTheme onClick={changeAndSaveDark} />
      ) : (
        <IconDarkTheme onClick={changeAndSaveLight} />
      )}
    </>
  );
};

export default ThemeController;
