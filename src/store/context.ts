import React from 'react';
import { MultiSelect } from '@types';

export interface NotionContextProps {
  everyPostsTags?: string[];
  everyPostsSeries?: MultiSelect;
}
export const NotionContext = React.createContext<NotionContextProps>({
  everyPostsTags: [],
  everyPostsSeries: [],
});
