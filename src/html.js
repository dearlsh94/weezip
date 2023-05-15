import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="ko-KR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="ethan" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="og:site_name" content="Weezip" />
        <meta property="og:type" content="website" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge;chrome=1" />
        <meta name="robots" content="all" />
        <meta name="naver-site-verification" content="f51d65952b7df29d7c83ce742d8b9285921a0508" />
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
