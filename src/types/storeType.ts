import { MultiSelect } from '@types';
import { NotionNode } from './nodeTypes';

export interface INotionContext {
  nodes: NotionNode[];
  everyPostsTags?: string[];
  everyPostsSeries?: MultiSelect;
}
