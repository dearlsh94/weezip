import * as React from 'react'
import '../../scss/components.scss'

interface Props {
  title: string
  desc?: string
}

const MyListHead = ({ title, desc }: Props) => {
  return (
    <>
      <title>{title}</title>
      <link rel="canonical" href={`https://weezip.freefeely.com/list`} />
      <meta name="title" property="og:title" content={title} />
      <meta name="description" property="og:description" content={desc || title} />
      {/* <meta name="keywords" content={keywords} /> */}
      {/* <meta name="image" property="og:image" content="" /> */}
      {/* <meta name="url" property="og:url" content="" /> */}
    </>
  )
}

export default MyListHead
