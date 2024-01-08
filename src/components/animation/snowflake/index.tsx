import React, { useState, useEffect } from 'react';
import './index.scss';
import { useSnowflakeStore } from '@store/configStore';
import { IconSnow } from '@components/icon';
import { getRandomFloat, getRandomInt } from '@utils/math';

interface Snowflake {
  left: number;
  fallDelay: number;
  shakeDelay: number;
  blur: number;
  opacity: number;
  size: number;
}

interface SnowflakesProps {
  count: number; // 눈송이 개수
}

export default function Snowflakes({ count = 18 }: SnowflakesProps) {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const { isShow } = useSnowflakeStore();

  useEffect(() => {
    const newSnowflakes = Array.from({ length: count }).map(() => {
      const fallDelay = getRandomFloat(0, 15, 1);
      const shakeDelay = Math.min(getRandomFloat(0, 10, 1), Number.parseFloat((fallDelay - 0.1).toFixed(1)));
      return {
        left: getRandomInt(0, 100),
        fallDelay,
        shakeDelay,
        blur: getRandomFloat(0.2, 0.5, 1),
        opacity: getRandomFloat(0.55, 0.95, 2),
        size: getRandomInt(12, 18),
      };
    });
    setSnowflakes(newSnowflakes);
  }, []);

  return (
    <div className={`snowflakes ${isShow ? 'visible' : 'hidden'}`} aria-hidden="true">
      {snowflakes.map((flake, index) => (
        <div
          key={index}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            filter: `blur(${flake.blur}px)`,
            opacity: `${flake.opacity}`,
            animationDelay: `${flake.fallDelay}s, ${flake.shakeDelay}s`,
            WebkitAnimationDelay: `${flake.fallDelay}s, ${flake.shakeDelay}s`,
          }}
        >
          <IconSnow size={flake.size} color={'primary'} />
        </div>
      ))}
    </div>
  );
}
