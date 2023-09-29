import { Select } from '@types';
import { NotionNode } from './nodeTypes';

export interface INotionContext {
  nodes: NotionNode[];
  postTags?: string[];
  postSeries?: Select[];
}
