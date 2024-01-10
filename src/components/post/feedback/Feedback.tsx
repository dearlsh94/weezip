import React from 'react';
import { moveToBottom } from '@utils/scroll';
import './Feedback.scss';

export default function Feedback() {
  return (
    <div className="feedback-box" onClick={moveToBottom}>
      <p>
        피드백을 기다리고 있어요!
        <br />
        연락 방법은 페이지 제일 하단을 확인해주세요.👇
      </p>
    </div>
  );
}
