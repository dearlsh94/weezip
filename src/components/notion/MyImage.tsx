import * as React from 'react'
import '@scss/components.scss'
import { Children, Image } from '../../types'

interface Props {
  imageBlock: Children
}

const MyImage = ({ imageBlock }: Props) => {
  const { id, image } = imageBlock
  const url = image
    ? `https://squary.notion.site/image/${encodeURIComponent(image.file.url)}?table=block&id=${id}&cache=v2`
    : ``
  return (
    <React.Fragment>
      {id && image && (
        <div className={`block-image`}>
          <img
            srcSet={`${url}&width=540 380w,
            ${url}&width=1140 760w,
            ${url}&width=1536 1024w,`}
            sizes="100vw"
            src={`${url}`}
            alt={image.caption?.length > 0 ? image.caption[0]?.plain_text : ''}
          />
          <p>{image.caption?.length > 0 ? image.caption[0]?.plain_text : ''}</p>
        </div>
      )}
    </React.Fragment>
  )
}

export default MyImage
