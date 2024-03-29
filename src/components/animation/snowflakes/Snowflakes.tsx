import React, { useState, useEffect } from 'react';

import './Snowflakes.scss';
import { IconSnow } from '@components/icon';
import { useSnowflakeStore } from '@store/config';
import { getRandomNumber } from '@utils/math';

interface Snowflakes {
  left: number;
  fallDelay: number;
  shakeDelay: number;
  blur: number;
  opacity: number;
  size: number;
}

interface SnowflakesProps {
  count?: number; // 눈송이 개수
}

export default function Snowflakes({ count = 17 }: SnowflakesProps) {
  const [snowflake, setSnowflake] = useState<Snowflakes[]>([]);
  const { isVisibility } = useSnowflakeStore();

  // 클라이언트 사이드에서만 실행되도록.
  useEffect(() => {
    const newSnowflake = Array.from({ length: count }).map(() => {
      const fallDelay = getRandomNumber(0, 15, { fixed: 2 });
      const shakeDelay = Math.min(
        getRandomNumber(0, 10, { fixed: 1 }),
        Number.parseFloat((fallDelay - 0.07).toFixed(1))
      ); // fallDelay보다 무조건 길어야 한다. 그렇지 않으면 일부 구간 눈송이가 일자로 내리게 된다.
      return {
        left: getRandomNumber(0, 100),
        fallDelay,
        shakeDelay,
        blur: getRandomNumber(0.2, 0.5, { fixed: 1 }),
        opacity: getRandomNumber(0.55, 0.95, { fixed: 2 }),
        size: getRandomNumber(12, 18),
      };
    });
    setSnowflake(newSnowflake);
  }, []);

  return (
    <div aria-hidden="true" className={`snowflake ${isVisibility && snowflake.length ? 'visible' : 'hidden'}`}>
      {snowflake.map((flake, index) => (
        <div
          key={`flake-${index}`}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            filter: `blur(${flake.blur}px)`,
            opacity: `${flake.opacity}`,
            animationDelay: `${flake.fallDelay}s, ${flake.shakeDelay}s`,
            WebkitAnimationDelay: `${flake.fallDelay}s, ${flake.shakeDelay}s`,
          }}
        >
          <IconSnow color={'primary'} size={flake.size} />
        </div>
      ))}
    </div>
  );
}
