import { throttle } from '@utils/commonUtils';
import { useEffect, useState } from 'react';

const useScroll = (delay = 30) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = throttle(() => {
    setScrollY(window.scrollY);
  }, delay);

  useEffect(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    scrollY,
  };
};

export default useScroll;
