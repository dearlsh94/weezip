import { WorkBy, Properties, Heading, Paragraph } from './componentType'

export interface PageContent {
  object: 'block'
  id: string
  created_time: string
  last_edited_time: string
  created_by: WorkBy
  last_edited_by: WorkBy
  cover: any
  icon: any
  parent: Parent
  archived: boolean
  properties: Properties
  url: string
  children: Children[]
}

export interface Parent {
  type: string
  database_id: string
}

export interface Children {
  object: string
  id: string
  parent: Parent
  created_time: string
  last_edited_time: string
  created_by: WorkBy
  last_edited_by: WorkBy
  has_children: boolean
  archived: boolean
  // NOTE Block Types
  type: 'paragraph' | 'numbered_list_item'
  paragraph?: Paragraph
  heading_1?: Heading
}
