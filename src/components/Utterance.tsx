import * as React from 'react';
import { useRef, useEffect } from 'react';

const Utterance = () => {
  const utteranceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://utteranc.es/client.js';
    script.setAttribute('repo', 'dearlsh94/WeeZip');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'github-light');
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

export default Utterance;
