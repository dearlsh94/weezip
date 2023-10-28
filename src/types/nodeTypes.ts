import { NotionColumn } from './contentType';

export interface NotionNode {
  id: string;
  databaseName: string;
  title: string;
  json: string;
  createdAt: string;
  updatedAt: string;
  notionColumn: NotionColumn;
}
