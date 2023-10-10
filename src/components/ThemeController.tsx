import * as React from 'react';
import IconLightTheme from './icon/IconLightTheme';
import IconDarkTheme from './icon/IconDarkTheme';
import useTheme from '@src/hooks/useTheme';

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

  return <>{theme === 'light' ? <IconLightTheme handleClick={setDark} /> : <IconDarkTheme handleClick={setLight} />}</>;
};

export default ThemeController;
