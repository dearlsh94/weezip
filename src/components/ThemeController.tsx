import * as React from 'react';
import useTheme from '@src/hooks/useTheme';
import { IconDarkTheme, IconLightTheme } from '@components/icon';

const ThemeController = () => {
  const { theme, setLight, setDark } = useTheme();

  React.useEffect(() => {
    // Giscus 모듈 처리
    const iframe = document.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
    iframe?.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme: theme,
          },
        },
      },
      'https://giscus.app'
    );
  }, [theme]);

  return <>{theme === 'light' ? <IconLightTheme onClick={setDark} /> : <IconDarkTheme onClick={setLight} />}</>;
};

export default ThemeController;
