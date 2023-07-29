import { Filter } from './types'

export const isDebug = false

export const GNB_MENUS = [
  { url: '/', title: 'Home', isOutLink: false },
  { url: '/list', title: 'List', isOutLink: false },
  { url: '/list?series=review', title: '문화소비자시점', isOutLink: false },
  { url: 'https://treefeely.com', title: 'Treefeely', isOutLink: true },
]

export const CATEGORY_FILTERS: Filter[] = [
  {
    type: 'category',
    key: 'write',
    name: 'Write',
    color: 'brown-3-border',
  },
  {
    type: 'category',
    key: 'explain',
    name: 'Explain',
    color: 'orange-border',
  },
  {
    type: 'category',
    key: 'edit',
    name: 'Edit',
    color: 'yellow-border',
  },
  {
    type: 'category',
    key: 'zip',
    name: 'Zip',
    color: 'blue-border',
  },
]

export const SERIES_FILTERS: Filter[] = [
  {
    type: 'series',
    key: 'review',
    name: '문화 소비자 시점',
    color: 'blue-border',
  },
  {
    type: 'series',
    key: 'read',
    name: '본업으로 하는 독서',
    color: 'purple-border',
  },
  {
    type: 'series',
    key: 'weezip',
    name: '블로그를 만들려는 히치하이커를 위한 안내서',
    color: 'pink-5-border',
  },
]

export const RECOMMEND_TAGS = [
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
]

export const mail = 'weezip.ethan@gmail.com'
