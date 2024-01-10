import { CONFIG_THEME_KEY } from '@src/constants';
import { useLocalStorage } from '@src/hooks/useLocalStorage';
import { useThemeStore } from '@store/configStore';
import * as React from 'react';
import { useRef, useEffect } from 'react';

const Giscus = () => {
  const { theme } = useThemeStore();
  const { getConfig } = useLocalStorage();
  const giscusRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const configTheme = getConfig(CONFIG_THEME_KEY);

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'dearlsh94/WeeZip');
    script.setAttribute('data-repo-id', 'R_kgDOJJ6Gag');
    script.setAttribute('data-category', 'Comments');
    script.setAttribute('data-category-id', 'DIC_kwDOJJ6Gas4CaACb');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', configTheme && configTheme === 'dark' ? 'dark' : 'light');
    script.setAttribute('data-lang', 'ko');
    script.setAttribute('cross-origin', 'anonymous');
    script.async = true;

    if (giscusRef.current) {
      giscusRef.current.appendChild(script);
    }
  }, []);

  useEffect(() => {
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

  return <div className="giscus-container" ref={giscusRef} />;
};

export default Giscus;
