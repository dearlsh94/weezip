import * as React from 'react';

import { IconDarkTheme, IconLightTheme } from '@components/icon';
import useTheme from '@hooks/useTheme';

const ThemeController = () => {
  const { theme, changeAndSaveDark, changeAndSaveLight } = useTheme();

  return theme === 'light' ? (
    <IconLightTheme aria-label="라이트 모드로 변경" onClick={changeAndSaveDark} />
  ) : (
    <IconDarkTheme aria-label="다크 모드로 변경" onClick={changeAndSaveLight} />
  );
};

export default ThemeController;
