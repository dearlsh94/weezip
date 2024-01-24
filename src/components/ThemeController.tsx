import * as React from 'react';

import { IconDarkTheme, IconLightTheme } from '@components/icon';
import useTheme from '@hooks/useTheme';

const ThemeController = () => {
  const { theme, changeAndSaveDark, changeAndSaveLight } = useTheme();

  return theme === 'light' ? (
    <IconLightTheme onClick={changeAndSaveDark} />
  ) : (
    <IconDarkTheme onClick={changeAndSaveLight} />
  );
};

export default ThemeController;
