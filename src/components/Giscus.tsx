import * as React from 'react';
import { useRef, useEffect } from 'react';

const Giscus = () => {
  const utteranceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'ko');
    script.setAttribute('cross-origin', 'anonymous');
    script.async = true;

    if (utteranceRef.current) {
      utteranceRef.current.appendChild(script);
    }
  }, []);

  return (
    <div id="utterance-box">
      <div ref={utteranceRef} />
    </div>
  );
};

export default Giscus;
