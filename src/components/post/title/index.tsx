import React from 'react';
import './Title.scss';

interface TitleProps {
  title: string;
  slug: string;
}

export default function Title({ title, slug }: TitleProps) {
  return (
    <a className="post__title" href={`https://weezip.treefeely.com${slug}`}>
      <h1 className="title">{title}</h1>
    </a>
  );
}
