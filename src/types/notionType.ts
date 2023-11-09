export interface Properties {
  id: Property;
  title: Property;
  url: Property;
  remark: Property;
  created_date: Property;
  edited_date: Property;
  series: Property;
  tag: Property;
}

export interface Property {
  type: 'unique_id' | 'title' | 'multi_select' | 'rich_text' | 'date' | 'select' | 'number';
  unique_id?: UniqueId;
  title?: TextItem;
  multi_select?: MultiSelect;
  rich_text?: RichText;
  date: PropDate;
  select: Select;
  number: number;
}

export type MultiSelect = Select[];
export type RichText = TextItem[];
export type Caption = TextItem[];

export interface WorkBy {
  object: string;
  id: string;
}

export interface UniqueId {
  prefix: string;
  number: number;
}

export interface Select {
  id: string;
  name: string;
  color: string;
}

export interface TextItem {
  type: string;
  text: Text;
  annotations: Annotations;
  plain_text: string;
  href?: string;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface Url {
  id: string;
  type: string;
  rich_text: string;
}

export interface Text {
  content: string;
  link: any;
}

export interface Heading {
  color: string;
  rich_text: RichText;
}

export interface TextBlock {
  color: string;
  rich_text: RichText;
}

export interface Todo extends TextBlock {
  checked: boolean;
}

export interface CalloutIcon {
  emoji: string;
  type: 'emoji';
}
export interface Callout extends TextBlock {
  icon: CalloutIcon;
}

export interface Bookmark {
  caption: Caption;
  url: string;
}

export interface Code {
  caption: Caption;
  language: string;
  rich_text: RichText;
}

export interface Image {
  caption: Caption;
  file: ImageFile;
  type: 'file';
}

export interface ImageFile {
  expiry_time: string;
  url: string;
}

export interface PropDate {
  end: string;
  start: string;
  time_zone?: string;
}
