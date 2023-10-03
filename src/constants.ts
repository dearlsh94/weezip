import { Filter } from './types';

export const isDebug = false;

export const GNB_MENUS = Object.freeze([
  { url: '/', title: 'Home', isOutLink: false },
  { url: '/list', title: 'List', isOutLink: false },
  { url: '/list?series=review', title: '문화소비자시점', isOutLink: false },
  { url: 'https://treefeely.com', title: 'Treefeely', isOutLink: true },
]);

export const CATEGORY_FILTERS: readonly Filter[] = Object.freeze([
  {
    type: 'category',
    key: 'write',
    name: 'Write',
    color: 'brown',
  },
  {
    type: 'category',
    key: 'explain',
    name: 'Explain',
    color: 'orange',
  },
  {
    type: 'category',
    key: 'edit',
    name: 'Edit',
    color: 'yellow',
  },
  {
    type: 'category',
    key: 'zip',
    name: 'Zip',
    color: 'blue',
  },
]);

export const RECOMMEND_TAGS = Object.freeze([
  {
    url: 'list/?series=review',
    name: '문화소비자시점',
  },
  {
    url: 'list/?tag=dev',
    name: 'Dev',
  },
  {
    url: 'list/?tag=essay',
    name: 'Essay',
  },
]);

export const OWNER_EMAIL = Object.freeze('weezip.ethan@gmail.com');
export const CONFIG_THEME_KEY = Object.freeze('weezip-theme');
