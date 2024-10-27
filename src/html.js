import React from 'react';
import PropTypes from 'prop-types';
export default function HTML(props) {
  const scriptTheme = `
    const configKey = 'WEEZIP_CONFIG';
    const themeKey = 'weezip-theme';
    const storage = localStorage.getItem(configKey);
    const theme = storage ? JSON.parse(storage)[themeKey] : null;
    const preferDarkQuery = '(prefers-color-scheme: dark)';
    const preferDark = window.matchMedia(preferDarkQuery).matches;
    const finalTheme = theme || (preferDark ? 'dark' : 'light');
    document.documentElement.setAttribute(themeKey, finalTheme);
  `;
  return (
    <html {...props.htmlAttributes} lang="ko-KR">
      <script dangerouslySetInnerHTML={{ __html: scriptTheme }} />
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
        <meta content="ethan" name="author" />
        <meta content="ko_KR" property="og:locale" />
        <meta content="Weezip" property="og:site_name" />
        <meta content="website" property="og:type" />
        <meta content="ie=edge;chrome=1" httpEquiv="x-ua-compatible" />
        <meta content="all" name="robots" />
        <meta content="f51d65952b7df29d7c83ce742d8b9285921a0508" name="naver-site-verification" />
        <meta content="#5e8b7e" media="(prefers-color-scheme: light)" name="theme-color" />
        <meta content="#bcead5" media="(prefers-color-scheme: dark)" name="theme-color" />
        <link
          as="style"
          crossOrigin="true"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard-dynamic-subset.min.css"
          rel="stylesheet"
        />
        {/* <script src="https://developers.kakao.com/sdk/js/kakao.js" /> */}
        <script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1622942491482378"
          crossOrigin="anonymous"
          async
        />
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
        <div key={`body`} dangerouslySetInnerHTML={{ __html: props.body }} id="___gatsby" />
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
