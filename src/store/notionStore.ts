import { MultiSelect } from '@types';
import { create } from 'zustand';

interface EveryPostTagNamesState {
  everyPostTagNames: string[];
  set: (everyPostTagNames: string[]) => void;
}
export const useEveryPostTagNamesStore = create<EveryPostTagNamesState>(set => ({
  everyPostTagNames: [],
  set: everyPostTagNames => set(() => ({ everyPostTagNames: everyPostTagNames })),
}));

interface EveryPostSeriesState {
  everyPostSeries: MultiSelect;
  set: (everyPostSeries: MultiSelect) => void;
}

export const useEverySeriesNamesStore = create<EveryPostSeriesState>(set => ({
  everyPostSeries: [],
  set: everyPostSeries => set(() => ({ everyPostSeries: everyPostSeries })),
}));
