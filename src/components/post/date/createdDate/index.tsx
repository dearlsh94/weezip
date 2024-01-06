import React from 'react';
import './CreatedDate.scss';

interface CreateDateProps {
  strDate: string;
}
export default function CreatedDate({ strDate }: CreateDateProps) {
  return <>{strDate && <span className="created-date">작성 : {strDate}</span>}</>;
}
