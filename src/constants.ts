import { Filter } from './types'

export const isDebug = false

export const GNB_MENUS = [
  { url: '/', title: 'Home', isOutLink: false },
  { url: '/list', title: 'List', isOutLink: false },
  { url: '/list?series=60', title: '문화소비자시점', isOutLink: false },
  { url: 'https://treefeely.com', title: 'Treefeely', isOutLink: true },
]

export const CATEGORY_FILTERS: Filter[] = [
  {
    type: 'category',
    key: '10',
    name: 'Write',
    color: 'brown-3-border',
  },
  {
    type: 'category',
    key: '20',
    name: 'Explain',
    color: 'orange-border',
  },
  {
    type: 'category',
    key: '30',
    name: 'Edit',
    color: 'yellow-border',
  },
  {
    type: 'category',
    key: '40',
    name: 'Zip',
    color: 'blue-border',
  },
]

export const SERIES_FILTERS: Filter[] = [
  {
    type: 'series',
    key: '60',
    name: '문화 소비자 시점',
    color: 'blue-border',
  },
  {
    type: 'series',
    key: '52',
    name: '본업으로 하는 독서',
    color: 'purple-border',
  },
  {
    type: 'series',
    key: '51',
    name: '삽질견문록',
    color: 'bluepurple-border',
  },
  {
    type: 'series',
    key: '50',
    name: '블로그를 만들려는 히치하이커를 위한 안내서',
    color: 'pink-5-border',
  },
]

export const mail = 'weezip.ethan@gmail.com'
