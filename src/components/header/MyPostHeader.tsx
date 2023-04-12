import * as React from 'react'
import '../../scss/components.scss'
import { Helmet } from 'react-helmet'

interface Props {
  title: string
  desc?: string
}

const MyPostHeader = ({ title, desc }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      {/* TODO Set Canonical URL */}
      <link rel="canonical" href="" />
      <meta name="description" content={desc} />
      <meta name="og:description" content={desc} />
      <meta name="author" content="WeeZip.Ethan" />
    </Helmet>
  )
}

export default MyPostHeader
