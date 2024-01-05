import { IconCopyLink } from '@components/icon';
import TagBadges from '@components/post/TagBadges';
import { CreatedDate, EditedDate } from '@components/ui/date';
import useClipboard from '@src/hooks/useClipboard';
import { DateProperty, MultiSelectProperty } from '@types';
import React from 'react';
import './Description.scss';

interface TitleDescriptionProps {
  tag: MultiSelectProperty;
  createdDate: DateProperty;
  editedDate: DateProperty;
}
export default function TitleDescription({ tag, createdDate, editedDate }: TitleDescriptionProps) {
  const tagNames = tag?.multi_select?.map(t => t.name);
  const { copyToClipboard } = useClipboard();

  const handleCopy = async () => {
    await copyToClipboard(location.href);
    alert('현재 게시글 주소가 복사되었습니다.');
  };
  return (
    <div className="post__description">
      <TagBadges tagNames={tagNames} />
      <div className="post__description__right">
        <div className="copy-box" onClick={handleCopy} onKeyDown={handleCopy}>
          <IconCopyLink size={18} color="secondary" />
        </div>
        <div className="date-box">
          <CreatedDate strDate={createdDate?.date?.start} />
          <EditedDate strDate={editedDate?.date?.start} />
        </div>
      </div>
    </div>
  );
}
