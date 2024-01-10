import React from 'react';
import './EditDate.scss';

interface EditDateProps {
  strDate: string;
}
export default function EditDate({ strDate }: EditDateProps) {
  return <>{strDate && <span className="edited-date">수정 : {strDate}</span>}</>;
}
