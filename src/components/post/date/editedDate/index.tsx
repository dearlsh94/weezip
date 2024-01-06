import React from 'react';
import './EditedDate.scss';

interface EditedDateProps {
  strDate: string;
}
export default function EditedDate({ strDate }: EditedDateProps) {
  return <>{strDate && <span className="edited-date">수정 : {strDate}</span>}</>;
}
