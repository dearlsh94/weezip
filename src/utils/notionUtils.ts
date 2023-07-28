import { Children, NotionNode, Select } from '@types'

export const notionNodeToJson = (node?: NotionNode): Children => {
  return node ? JSON.parse(node?.json) : null
}

export const getNodeJsonByUrl = (nodes: NotionNode[], url: string): Children | null => {
  const node = nodes.find(n => n.title === url)
  return notionNodeToJson(node)
}

export const getNodeMarkdownByUrl = (nodes: NotionNode[], url: string): string => {
  const node = nodes.find(n => n.title === url)
  return node ? node.markdownString : ''
}

export const classifyByTags = (nodes: NotionNode[]) => {
  const tagMap = new Map<string, NotionNode[]>()
  nodes.map(node => {
    if (node?.title?.toUpperCase()?.includes('POST')) {
      const json = notionNodeToJson(node)
      if (!node.title.startsWith('/post')) return
      json.properties?.tag?.multi_select?.map((v: Select) => {
        const key = `${v.name}|${v.color}`
        const e = tagMap.get(key)
        if (e && e.length > 0) {
          tagMap.set(key, [...e, node])
        } else {
          tagMap.set(key, [node])
        }
      })
    }
  })
  return tagMap
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
