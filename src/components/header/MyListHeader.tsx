import * as React from 'react'
import '../../scss/components.scss'
import { Helmet } from 'react-helmet'

interface Props {
  title: string
  desc?: string
}

const MyListHeader = ({ title, desc }: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={`${location.origin}/list`} />
      <meta name="title" property="og:title" content={title} />
      <meta name="description" property="og:description" content={desc || title} />
      <meta name="author" content="ethan" />
      {/* <meta name="keywords" content={keywords} /> */}
      {/* <meta name="image" property="og:image" content="" /> */}
      {/* <meta name="url" property="og:url" content="" /> */}
    </Helmet>
  )
}

export default MyListHeader
