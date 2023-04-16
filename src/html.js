import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="ko-KR">
      <head>
        <title>WeeZip</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="title" property="og:title" content="Weezip" />
        <meta
          name="description"
          property="og:description"
          content="글쓰는 프론트엔드 개발자의 블로그. 편하고 예쁜 걸 좋아합니다."
        />
        {/* <meta name="image" property="og:image" content="" /> */}
        {/* <meta name="url" property="og:url" content="" /> */}
        <meta name="author" content="ethan" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="WeeZip" />
        <meta property="og:type" content="website" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge;chrome=1" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
