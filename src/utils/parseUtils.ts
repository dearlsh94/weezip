import { Children, ContentValue } from '@types'
import { convertDatetimeFormat } from './convertUtils'

export const parseLocationQuery = (search = '') => {
  let params = search.replace('?', '').split('&')
  let res: { [key: string]: any } = {}
  params.forEach(p => {
    let keyValue = p.split('=')
    const key = keyValue[0]
    const value = keyValue[1]

    // 중복 key가 있으면 배열로 저장
    if (res[key]) {
      if (Array.isArray(res[key])) {
        res[key].push(value)
      } else {
        res[key] = [res[key], value]
      }
    } else {
      res[key] = decodeURIComponent(value)
    }
  })
  return res
}

export const parseContentValue = (content: Children): ContentValue => {
  const remark = content.properties.remark.rich_text || ''
  const category = content.properties.category.select || {}
  const tag = content.properties.tag.multi_select || []
  const cover = content.cover || []
  const last_edited_item = content.properties.edited_date.date.start || ''
  const created_time = content.properties.created_date.date.start || ''
  const notionUrl = content.url || ''
  const series = content.properties.series.rich_text || ''
  return {
    remark,
    category,
    cover,
    lastEditedTime: convertDatetimeFormat(last_edited_item),
    createdTime: convertDatetimeFormat(created_time),
    notionUrl,
    tag,
    series,
  }
}

/**
 * @param url : /post/{id} 형태의 URL. id는 series-type-number로 되어 있다.
 * @returns series code
 */
export const getSeriesCodeByURL = (url: string) => {
  const pattern = /\b\d{2}(?=-\d{2}-\d+)/
  const match = url.match(pattern)
  if (match) {
    return match[0] // seriesCode
  } else {
    return 0
  }
}
