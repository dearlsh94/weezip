import React from 'react';
import '@scss/module/PostCaution.scss';
import IconCaution from '@components/icon/IconCaution';

interface PostCautionProps {
  lastEditedDate: Date;
}
export default function PostCaution({ lastEditedDate }: PostCautionProps) {
  const today = new Date();
  const diff: number = Math.floor((today.getTime() - lastEditedDate.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <>
      {diff > 180 && (
        <aside className="post-notice">
          <IconCaution color={'white'} />
          <p>
            <em>{diff}</em>일 전에 마지막으로 수정된 글입니다.
          </p>
        </aside>
      )}
    </>
  );
}
