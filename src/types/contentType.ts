import {
  WorkBy,
  Properties,
  Heading,
  TextBlock,
  Todo,
  Callout,
  Bookmark,
  Select,
  Code,
  Image,
  MultiSelect,
} from '@types';

export enum BlockType {
  PARAGRAPH = 'paragraph',
  HEADING_1 = 'heading_1',
  HEADING_2 = 'heading_2',
  HEADING_3 = 'heading_3',
  QUOTE = 'quote',
  BULLETED_LIST_ITEM = 'bulleted_list_item',
  NUMBERED_LIST_ITEM = 'numbered_list_item',
  TODO = 'to_do',
  CALLOUT = 'callout',
  TOGGLE = 'toggle',
  BOOKMARK = 'bookmark',
  CODE = 'code',
  IMAGE = 'image',
  DIVIDER = 'divider',
}

interface Children {
  object: 'block';
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: WorkBy;
  last_edited_by: WorkBy;
  cover: any;
  icon: any;
  parent: Parent;
  archived: boolean;
  properties: Properties;
  public_url: string;
  url: string;
  children: NotionChildrenType[];
  has_children: boolean;
  type: BlockType;
}

export interface ParagraphChildren extends Children {
  type: BlockType.PARAGRAPH;
  paragraph: TextBlock;
}
export interface BulletedListItemChildren extends Children {
  type: BlockType.BULLETED_LIST_ITEM;
  bulleted_list_item: TextBlock;
}
export interface NumberedListItemChildren extends Children {
  type: BlockType.NUMBERED_LIST_ITEM;
  numbered_list_item: TextBlock;
}
export interface Heading1Children extends Children {
  type: BlockType.HEADING_1;
  heading_1: Heading;
}
export interface Heading2Children extends Children {
  type: BlockType.HEADING_2;
  heading_2: Heading;
}
export interface Heading3Children extends Children {
  type: BlockType.HEADING_3;
  heading_3: Heading;
}
export interface QuoteChildren extends Children {
  type: BlockType.QUOTE;
  quote: TextBlock;
}
export interface TodoChildren extends Children {
  type: BlockType.TODO;
  to_do: Todo;
}
export interface CalloutChildren extends Children {
  type: BlockType.CALLOUT;
  callout: Callout;
}
export interface ToggleChildren extends Children {
  type: BlockType.TOGGLE;
  toggle: TextBlock;
}
export interface BookmarkChildren extends Children {
  type: BlockType.BOOKMARK;
  bookmark: Bookmark;
}
export interface CodeChildren extends Children {
  type: BlockType.CODE;
  code: Code;
}
export interface ImageChildren extends Children {
  type: BlockType.IMAGE;
  image: Image;
}
export interface DividerChildren extends Children {
  type: BlockType.DIVIDER;
  divider: {};
}

export type NotionChildrenType =
  | ParagraphChildren
  | BulletedListItemChildren
  | NumberedListItemChildren
  | Heading1Children
  | Heading2Children
  | Heading3Children
  | QuoteChildren
  | TodoChildren
  | CalloutChildren
  | ToggleChildren
  | BookmarkChildren
  | CodeChildren
  | ImageChildren
  | DividerChildren;

export interface Parent {
  type: string;
  database_id: string;
}

export interface NotionColumn {
  id: number;
  remark: string;
  lastEditedTime: string;
  createdTime: string;
  notionUrl: string;
  tag?: MultiSelect;
  series?: Select;
}
