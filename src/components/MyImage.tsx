import * as React from 'react'
import '../scss/components.scss'
import { Image } from '../types'

interface Props {
  image: Image
}

const MyImage = ({ image }: Props) => {
  const { url } = image.file
  const alt = image.caption?.length > 0 ? image.caption[0]?.plain_text : ''
  return (
    <React.Fragment>
      <div className={`block-image`}>
        <img src={url} alt={alt} />
        <p>{alt}</p>
      </div>
    </React.Fragment>
  )
}

export default MyImage
