import { Children } from '../types/contentType'
import { NotionNode } from '../types/nodeTypes'

const nodeToJson = (node?: NotionNode): Children => {
  return node ? JSON.parse(node?.json) : null
}

export const getContentNode = (nodes: NotionNode[], url: string): Children | null => {
  const node = nodes.find(n => n.title === url)
  return nodeToJson(node)
}

export const getMDContentNode = (nodes: NotionNode[], url: string): string => {
  const node = nodes.find(n => n.title === url)
  return node ? node.markdownString : ''
}

export const classifyCategory = (nodes: NotionNode[]) => {
  let writes: Children[] = []
  let explains: Children[] = []
  let edits: Children[] = []
  let zips: Children[] = []
  nodes.map(node => {
    const json = nodeToJson(node)
    json.properties?.category?.multi_select?.map(select => {
      if (select?.name?.toUpperCase().includes('WRITE')) {
        writes.push(json)
      } else if (select?.name?.toUpperCase().includes('EXPLAIN')) {
        explains.push(json)
      } else if (select?.name?.toUpperCase().includes('EDIT')) {
        edits.push(json)
      } else if (select?.name?.toUpperCase().includes('ZIP')) {
        zips.push(json)
      }
    })
  })
  return {
    writes,
    explains,
    edits,
    zips,
  }
}
