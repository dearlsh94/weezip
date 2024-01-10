import useClipboard from '@src/hooks/useClipboard';
import React from 'react';
import './Share.scss';
import { IconCopyLink } from '@components/icon';
import { CircleIconWrapper } from '@components/icon/wrapper';

export default function Share() {
  const { copyToClipboard } = useClipboard();

  const handleCopy = async () => {
    await copyToClipboard(location.href);
    alert('현재 게시글 주소가 복사되었습니다.');
  };

  return (
    <div className="share-box">
      <CircleIconWrapper color={'secondary'} onClick={handleCopy}>
        <IconCopyLink />
      </CircleIconWrapper>
    </div>
  );
}
