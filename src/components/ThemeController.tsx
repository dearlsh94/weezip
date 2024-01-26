import * as React from 'react';

import { IconDarkTheme, IconLightTheme } from '@components/icon';
import useTheme from '@hooks/useTheme';
import { ARIA_LABEL } from '@src/constants';

const ThemeController = () => {
  const { theme, changeAndSaveDark, changeAndSaveLight } = useTheme();

  return theme === 'light' ? (
    <IconLightTheme aria-label={`라이트 모드로 ${ARIA_LABEL.EDIT}`} onClick={changeAndSaveDark} />
  ) : (
    <IconDarkTheme aria-label={`다크 모드로 ${ARIA_LABEL.EDIT}`} onClick={changeAndSaveLight} />
  );
};

export default ThemeController;
