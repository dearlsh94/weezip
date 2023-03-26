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
  let write: Children[] = []
  let explain: Children[] = []
  let edit: Children[] = []
  let zip: Children[] = []
  nodes.map(node => {
    const json = nodeToJson(node)
    json.properties?.category?.multi_select?.map(select => {
      if (select?.name?.toUpperCase().includes('WRITE')) {
        write.push(json)
      } else if (select?.name?.toUpperCase().includes('EXPLAIN')) {
        explain.push(json)
      } else if (select?.name?.toUpperCase().includes('EDIT')) {
        edit.push(json)
      } else if (select?.name?.toUpperCase().includes('ZIP')) {
        zip.push(json)
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
