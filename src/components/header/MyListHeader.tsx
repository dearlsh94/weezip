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
      {/* SSR 시 location 참조하지 못해 생기는 오류로 인한 주석처리 */}
      {/* <link rel="canonical" href={`${location.origin}/list`} /> */}
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
