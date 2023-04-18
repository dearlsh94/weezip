import * as React from 'react'
import '../../scss/components.scss'

interface Props {
  title?: string
  desc?: string
}

const MyHead = ({
  title = 'Weezip',
  desc = '글쓰는 프론트엔드 개발자의 블로그. 편하고 예쁜 걸 좋아합니다.',
}: Props) => {
  return (
    <>
      <title>{title}</title>
      <link rel="canonical" href={`https://weezip.freefeely.com`} />
      <meta name="title" property="og:title" content="Weezip" />
      <meta name="description" property="og:description" content={desc || title} />
      {/* <meta name="image" property="og:image" content="" /> */}
      {/* <meta name="url" property="og:url" content="" /> */}
    </>
  )
}

export default MyHead
