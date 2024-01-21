export const GNB_MENUS = Object.freeze([
  { url: '/', title: 'Home', isOutLink: false },
  { url: '/list', title: 'List', isOutLink: false },
  { url: `/list/?series=${encodeURIComponent('트리피디아')}`, title: '트리피디아', isOutLink: false },
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
