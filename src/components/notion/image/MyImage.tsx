import * as React from 'react';

import './MyImage.scss';
import { NParagraph } from '../paragraph';

import { ImageChildren } from '@types';


interface NImageProps {
  imageBlock: ImageChildren;
}

export default function MyImage({ imageBlock }: NImageProps) {
  const { id, image } = imageBlock;
  const url = image
    ? `https://treefeely.notion.site/image/${encodeURIComponent(image.file.url)}?table=block&id=${id}&cache=v2`
    : ``;
  const captionText = image?.caption.reduce((acc, item) => {
    return acc + ` ${item.plain_text}`;
  }, '');

  return (
    <>
      {id && image && (
        <figure className={`block-image`}>
          <img
            srcSet={`${url}&width=540 380w,
            ${url}&width=1140 760w,
            ${url}&width=1536 1024w,`}
            sizes="100vw"
            src={`${url}`}
            alt={captionText}
          />
          <figcaption className="caption-box">
            <NParagraph richText={image.caption} />
          </figcaption>
        </figure>
      )}
    </>
  );
}
