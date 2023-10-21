import { DataItem } from '@src/type/types';
import { create } from 'zustand';

interface Store {
    data: DataItem[];
    // eslint-disable-next-line no-unused-vars
    setData: (data: DataItem[]) => void;
}
// created a custom hook 'useStore' for global state management
export const useStore = create<Store>((set) => ({
    data: [],
    setData: (data) => set({ data }),
}));
