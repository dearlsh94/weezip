import { useState } from 'react';

const useShow = () => {
  const [isShow, setIsShow] = useState(false);

  return {
    isShow,
    show: () => setIsShow(true),
    hide: () => setIsShow(false),
    change: () => setIsShow(!isShow),
  };
};

export default useShow;
