import React from 'react';
import { MultiSelect, NotionNode } from '@types';

export interface INotionContext {
  nodes: NotionNode[];
  everyPostsTags?: string[];
  everyPostsSeries?: MultiSelect;
}
export const NotionContext = React.createContext<INotionContext>({
  nodes: [],
  everyPostsTags: [],
  everyPostsSeries: [],
});
