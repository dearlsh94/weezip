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
    color: 'brown-3_border',
  },
  {
    type: 'category',
    key: '20',
    name: 'Explain',
    color: 'orange_border',
  },
  {
    type: 'category',
    key: '30',
    name: 'Edit',
    color: 'yellow_border',
  },
  {
    type: 'category',
    key: '40',
    name: 'Zip',
    color: 'blue_border',
  },
]

export const SERIES_FILTERS: Filter[] = [
  {
    type: 'series',
    key: '50',
    name: '블로그를 만들려는 히치하이커를 위한 안내서',
    color: 'pink-5_border',
  },
  {
    type: 'series',
    key: '51',
    name: '삽질견문록',
    color: 'bluepurple-color_border',
  },
  {
    type: 'series',
    key: '52',
    name: '살다가 한 번쯤은 Clean Code를 읽어보자.',
    color: 'purple_border',
  },
  {
    type: 'series',
    key: '60',
    name: '문화 소비자 시점',
    color: 'blue_border',
  },
]

export const mail = 'weezip.ethan@gmail.com'
