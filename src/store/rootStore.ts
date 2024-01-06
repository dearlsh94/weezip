import React from 'react';
import { INotionContext } from '@types';

export const NotionContext = React.createContext<INotionContext>({
  nodes: [],
  everyPostsTags: [],
  everyPostsSeries: [],
});
