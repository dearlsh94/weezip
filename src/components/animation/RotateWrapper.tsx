import React, { useEffect, PropsWithChildren } from 'react';

export default function RotateWrapper({ className, children }: PropsWithChildren<React.HTMLProps<HTMLDivElement>>) {
  useEffect(() => {
    const el = document.querySelector<HTMLImageElement>(`.rotate-wrapper.${className}`);

    const handleHover = function (e: MouseEvent) {
      if (el) {
        const { width, height, left, top } = el.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;

        const rotateX = (y / height) * 60 * -1; // Y축을 중심으로 회전
        const rotateY = (x / width) * -60 * -1; // X축을 중심으로 회전

        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    const handleOut = function () {
      if (el) {
        el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      }
    };

    if (el) {
      el.addEventListener('mousemove', handleHover);
      el.addEventListener('mouseleave', handleOut);
    }

    return () => {
      if (el) {
        el.removeEventListener('mousemove', handleHover);
        el.removeEventListener('mouseleave', handleOut);
      }
    };
  }, []);
  return (
    <div
      className={`rotate-wrapper ${className}`}
      style={{
        transition: `transform 0.2s`,
        transformStyle: `preserve-3d`,
      }}
    >
      {children}
    </div>
  );
}
