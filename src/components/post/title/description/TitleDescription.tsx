import { CreateDate, EditDate } from '@components/post';
import useClipboard from '@src/hooks/useClipboard';
import { DateProperty, MultiSelect } from '@types';
import React from 'react';
import './TitleDescription.scss';
import { IconCopyLink } from '@components/icon';
import { Tags } from '@components/post/Tags';

interface TitleDescriptionProps {
  tag: MultiSelect;
  createdDate: DateProperty;
  editedDate: DateProperty;
  useCopy?: boolean;
  useTagLink?: boolean;
}
export default function TitleDescription({
  tag,
  createdDate,
  editedDate,
  useCopy = true,
  useTagLink = false,
}: TitleDescriptionProps) {
  const { copyToClipboard } = useClipboard();

  const handleCopy = async () => {
    await copyToClipboard(location.href);
    alert('현재 게시글 주소가 복사되었습니다.');
  };
  return (
    <div className="post__description">
      <Tags tag={tag} useLink={useTagLink} />
      <div className="post__description__right">
        {useCopy && <IconCopyLink size={18} color="secondary" onClick={handleCopy} />}
        <CreateDate strDate={createdDate?.date?.start} />
        <EditDate strDate={editedDate?.date?.start} />
      </div>
    </div>
  );
}
