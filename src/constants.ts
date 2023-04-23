import { Filter } from './types'

export const isDebug = false

export const GNB_MENUS = [
  { url: '/', title: 'Home' },
  { url: '/intro', title: 'Intro' },
  { url: '/list', title: 'List' },
]

export const CATEGORY_FILTERS: Filter[] = [
  {
    type: 'category',
    key: '10',
    name: 'Write',
    color: 'brown_background',
  },
  {
    type: 'category',
    key: '20',
    name: 'Explain',
    color: 'orange_background',
  },
  {
    type: 'category',
    key: '30',
    name: 'Edit',
    color: 'yellow_background',
  },
  {
    type: 'category',
    key: '40',
    name: 'Zip',
    color: 'blue_background',
  },
]

export const SERIES_FILTERS: Filter[] = [
  {
    type: 'series',
    key: '50',
    name: '블로그를 만들려는 히치하이커를 위한 안내서',
    color: 'purple_background',
  },
]

export const mail = 'weezip.ethan@gmail.com'
