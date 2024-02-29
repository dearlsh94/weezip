export const HOST_DOMAIN = 'weezip.treefeely.com';

export const GNB_MENUS = Object.freeze([
  { url: '/', title: 'Home', isOutLink: false },
  { url: '/list', title: 'List', isOutLink: false },
  { url: `/treepedia`, title: '트리피디아', isOutLink: false },
  { url: 'https://treefeely.com', title: 'Treefeely', isOutLink: true },
]);

export const RECOMMEND_TAGS = Object.freeze([
  {
    url: `/list/?series=${encodeURIComponent('트리피디아')}`,
    name: '트리피디아',
  },
  {
    url: `/list/?tag=${encodeURIComponent('개발')}`,
    name: '개발',
  },
  {
    url: '/list/?tag=essay',
    name: 'Essay',
  },
]);

export const OWNER_EMAIL = Object.freeze('weezip.ethan@gmail.com');
export const CONFIG_THEME_KEY = Object.freeze('weezip-theme');

export const enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

export const enum ARIA_LABEL {
  MOVE = '이동하기',
  EDIT = '변경하기',
  OPEN = '열기',
  CLOSE = '닫기',
  SEND = '보내기',
  COPY = '복사하기',
  RESET = '초기화하기',
  SEARCH = '검색하기',
  TOGGLE_ON = '켜기',
  TOGGLE_OFF = '끄기',
  EXPAND_ON = '펼치기',
  EXPAND_OFF = '접기',
}
