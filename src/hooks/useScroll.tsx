import { useEffect, useRef, useState } from 'react';

import { throttle } from '@utils/common';

const useScroll = (delay = 10) => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const lastScrollTop = useRef(0);

  const handleScroll = throttle(() => {
    setScrollY(window.scrollY);

    const currentScroll = window.scrollY;
    setIsScrollingUp(currentScroll < lastScrollTop.current);
    lastScrollTop.current = currentScroll;
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
    isScrollingUp,
  };
};

export default useScroll;
