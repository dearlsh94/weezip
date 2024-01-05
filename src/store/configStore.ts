import { create } from 'zustand';

interface SnowflakeState {
  isShow: boolean;
  change: () => void;
}
export const useSnowflakeStore = create<SnowflakeState>(set => ({
  isShow: true,
  change: () => set(({ isShow }) => ({ isShow: !isShow })),
}));
