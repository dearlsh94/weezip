import { IconCopyLink } from '@components/icon';
import { CreatedDate, EditedDate } from '@components/post/date';
import useClipboard from '@src/hooks/useClipboard';
import { DateProperty, MultiSelectProperty } from '@types';
import React from 'react';
import './index.scss';
import Tags from '@components/post/tags';

interface TitleDescriptionProps {
  tag: MultiSelectProperty;
  createdDate: DateProperty;
  editedDate: DateProperty;
}
export default function TitleDescription({ tag, createdDate, editedDate }: TitleDescriptionProps) {
  const { copyToClipboard } = useClipboard();

  const handleCopy = async () => {
    await copyToClipboard(location.href);
    alert('현재 게시글 주소가 복사되었습니다.');
  };
  return (
    <div className="post__description">
      <Tags tag={tag} />
      <div className="post__description__right">
        <IconCopyLink size={18} color="secondary" handleClick={handleCopy} />
        <CreatedDate strDate={createdDate?.date?.start} />
        <EditedDate strDate={editedDate?.date?.start} />
      </div>
    </div>
  );
}
