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

export const classifyCategory = (nodes: NotionNode[]) => {
  let write: NotionNode[] = []
  let explain: NotionNode[] = []
  let edit: NotionNode[] = []
  let zip: NotionNode[] = []
  nodes.map(node => {
    const json = nodeToJson(node)
    json.properties?.category?.multi_select?.map(select => {
      if (select?.name?.toUpperCase().includes('WRITE')) {
        write.push(node)
      } else if (select?.name?.toUpperCase().includes('EXPLAIN')) {
        explain.push(node)
      } else if (select?.name?.toUpperCase().includes('EDIT')) {
        edit.push(node)
      } else if (select?.name?.toUpperCase().includes('ZIP')) {
        zip.push(node)
      }
    })
  })
  return {
    write,
    explain,
    edit,
    zip,
  }
}
