import React from 'react';
import './index.scss';
import { IconCaution } from '@components/icon';

interface LastEditedCautionProps {
  lastEditedDate: Date;
}
export default function LastEditedCaution({ lastEditedDate }: LastEditedCautionProps) {
  const today = new Date();
  const diff: number = Math.floor((today.getTime() - lastEditedDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <>
      {diff > 180 && (
        <aside className="last-edited-caution">
          <IconCaution color={'white'} />
          <p>
            <em>{diff}</em>일 전에 마지막으로 수정된 글입니다.
          </p>
        </aside>
      )}
    </>
  );
}
