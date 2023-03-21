export interface PageContent {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: CreatedBy
  last_edited_by: LastEditedBy
  cover: any
  icon: any
  parent: Parent
  archived: boolean
  properties: Properties
  url: string
  children: Children[]
}

export interface CreatedBy {
  object: string
  id: string
}

export interface LastEditedBy {
  object: string
  id: string
}

export interface Parent {
  type: string
  database_id: string
}

export interface Properties {
  URL: Url
  선택: GeneratedType
  이름: GeneratedType2
}

export interface Url {
  id: string
  type: string
  rich_text: string
}

export interface GeneratedType {
  id: string
  type: string
  multi_select: MultiSelect[]
}

export interface MultiSelect {
  id: string
  name: string
  color: string
}

export interface GeneratedType2 {
  id: string
  type: string
  title: Title[]
}

export interface Title {
  type: string
  text: Text
  annotations: Annotations
  plain_text: string
  href: any
}

export interface Text {
  content: string
  link: any
}

export interface Annotations {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export interface Children {
  object: string
  id: string
  parent: Parent2
  created_time: string
  last_edited_time: string
  created_by: CreatedBy2
  last_edited_by: LastEditedBy2
  has_children: boolean
  archived: boolean
  type: string
  paragraph: Paragraph
}

export interface Parent2 {
  type: string
  page_id: string
}

export interface CreatedBy2 {
  object: string
  id: string
}

export interface LastEditedBy2 {
  object: string
  id: string
}

export interface Paragraph {
  color: string
  text: Text2[]
}

export interface Text2 {
  type: string
  text: Text3
  annotations: Annotations2
  plain_text: string
  href: any
}

export interface Text3 {
  content: string
  link: any
}

export interface Annotations2 {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}
