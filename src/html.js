import React from 'react';
import PropTypes from 'prop-types';
export default function HTML(props) {
  const scriptTheme = `
    var storage = localStorage.getItem('WEEZIP_CONFIG');
    if (storage) {
      var storageTheme = JSON.parse(storage)['weezip-theme'];
      if (storageTheme === 'dark') {
        document.documentElement.setAttribute('weezip-theme', 'dark');
      } else {
        document.documentElement.setAttribute('weezip-theme', 'light');
      }
    } else {
      var preferDark = window.matchMedia('(prefers-color-scheme: dark');
      if (preferDark?.matches) {
        document.documentElement.setAttribute('weezip-theme', 'dark');
      } else {
        document.documentElement.setAttribute('weezip-theme', 'light');
      }
    }
  `;
  return (
    <html {...props.htmlAttributes} lang="ko-KR">
      <script dangerouslySetInnerHTML={{ __html: scriptTheme }} />
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
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#5e8b7e" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#bcead5" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="true"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
        />
        {/* <script src="https://developers.kakao.com/sdk/js/kakao.js" /> */}
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <noscript>
          이 웹사이트는 자바스크립트를 지원하지 않는 브라우저에서 제한적인 기능으로 동작할 수 있습니다.
          <br />
          웹 브라우저 설정에서 자바스크립트를 활성화해주세요.
          <br />
          <br />
          This website may function with limited functionality in browsers that do not support JavaScript.
          <br />
          Please enable JavaScript in your web browser settings.
        </noscript>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
