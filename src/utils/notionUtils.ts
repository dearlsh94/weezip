import { PageContent } from '../types/contentType'
import { NotionNode } from '../types/nodeTypes'

export const getContentNode = (nodes: NotionNode[], url: string): PageContent | null => {
  const node = nodes.find(n => n.title === url)
  return node ? JSON.parse(node?.json) : null
}

export const getMDContentNode = (nodes: NotionNode[], url: string): string => {
  const node = nodes.find(n => n.title === url)
  return node ? node.markdownString : '';
}
