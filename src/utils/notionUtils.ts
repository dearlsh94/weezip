import { Children } from '../types/contentType'
import { NotionNode } from '../types/nodeTypes'

export const nodeToJson = (node?: NotionNode): Children => {
  return node ? JSON.parse(node?.json) : null
}

export const findContentNode = (nodes: NotionNode[], url: string): Children | null => {
  const node = nodes.find(n => n.title === url)
  return nodeToJson(node)
}

export const findMDContentNode = (nodes: NotionNode[], url: string): string => {
  const node = nodes.find(n => n.title === url)
  return node ? node.markdownString : ''
}

export const classifyTags = (nodes: NotionNode[]) => {
  const tagMap = new Map<string, NotionNode[]>()
  nodes.map(node => {
    if (node?.title?.toUpperCase()?.includes('POST')) {
      const json = nodeToJson(node)
      if (!node.title.startsWith('/post')) return
      json.properties?.tag?.multi_select?.map(v => {
        const e = tagMap.get(v.name)
        if (e && e.length > 0) {
          tagMap.set(v.name, [...e, node])
        } else {
          tagMap.set(v.name, [node])
        }
      })
    }
  })
  return tagMap
}
