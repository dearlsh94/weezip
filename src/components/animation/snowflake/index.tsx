import React, { useState, useEffect } from 'react';
import './index.scss';
import { useSnowflakeStore } from '@store/configStore';
import { IconSnow } from '@components/icon';

interface Snowflake {
  left: number;
  fallDelay: string;
  shakeDelay: number;
  blur: number;
  opacity: number;
  size: number;
}

export default function Snowflakes() {
  const SNOW_COUNT = 18;
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const { isShow } = useSnowflakeStore();

  useEffect(() => {
    const newSnowflakes = Array.from({ length: SNOW_COUNT }).map(() => {
      const fallDelay = (Math.random() * 15).toFixed(1);
      return {
        left: Math.floor(Math.random() * 100),
        fallDelay: fallDelay,
        shakeDelay: Math.min(Number.parseFloat((Math.random() * 10).toFixed(1)), Number.parseFloat(fallDelay) - 0.1),
        blur: (Math.floor(Math.random() * 4) + 2) / 10,
        opacity: Math.round((Math.random() * 0.4 + 0.55) * 100) / 100,
        size: Math.floor(Math.random() * (18 - 12 + 1)) + 12,
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
