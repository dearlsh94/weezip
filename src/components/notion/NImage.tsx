import * as React from 'react';
import '@scss/notion.scss';
import { Children } from '@types';
import NParagraph from './NParagraph';

interface NImageProps {
  imageBlock: Children;
}

export default function MyImage({ imageBlock }: NImageProps) {
  const { id, image } = imageBlock;
  const url = image
    ? `https://squary.notion.site/image/${encodeURIComponent(image.file.url)}?table=block&id=${id}&cache=v2`
    : ``;
  const captionText = image?.caption.reduce((acc, item) => {
    return acc + ` ${item.plain_text}`;
  }, '');

  return (
    <>
      {id && image && (
        <div className={`block-image`}>
          <img
            srcSet={`${url}&width=540 380w,
            ${url}&width=1140 760w,
            ${url}&width=1536 1024w,`}
            sizes="100vw"
            src={`${url}`}
            alt={captionText}
          />
          <div className="caption-box">
            <NParagraph text={image.caption} />
          </div>
        </div>
      )}
    </>
  );
}
