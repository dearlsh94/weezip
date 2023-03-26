import { Children, ContentValue } from '../types'
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
      res[key] = value
    }
  })
  return res
}

export const parseContentValue = (content: Children): ContentValue => {
  const remark = content.properties.remark.rich_text || ''
  const category = content.properties.category.multi_select || []
  const cover = content.cover || []
  const last_edited_item = content.last_edited_time || ''
  const created_time = content.created_time || ''
  const notionUrl = content.url || ''
  return {
    remark,
    category,
    cover,
    lastEditedTime: convertDatetimeFormat(last_edited_item),
    createdTime: convertDatetimeFormat(created_time),
    notionUrl,
  }
}