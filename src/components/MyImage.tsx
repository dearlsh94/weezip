import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import '../scss/components.scss'
import { Image } from '../types'

interface Props {
  image: Image
}

const MyImage = ({ image }: Props) => {
  const { url } = image.file
  const alt = image.caption?.length > 0 ? image.caption[0]?.plain_text : ''
  console.log({ url, alt })
  return (
    <React.Fragment>
      <div className={`block-image`}>
        <img src={url} alt={alt} />
      </div>
    </React.Fragment>
  )
}

export default MyImage
