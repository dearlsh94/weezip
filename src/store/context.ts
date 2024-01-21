import React from 'react';
import { MultiSelect, NotionNode } from '@types';

export interface NotionContextProps {
  nodes: NotionNode[];
  everyPostsTags?: string[];
  everyPostsSeries?: MultiSelect;
}
export const NotionContext = React.createContext<NotionContextProps>({
  nodes: [],
  everyPostsTags: [],
  everyPostsSeries: [],
});
