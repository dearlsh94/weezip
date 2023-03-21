import { PageContent } from '../types/contentType'
import { NotionNode } from '../types/notionTypes'

export const getContentNode = (nodes: NotionNode[], url: string): PageContent | null => {
  const node = nodes.find(n => n.title === url)
  return node ? JSON.parse(node?.json) : null
}
