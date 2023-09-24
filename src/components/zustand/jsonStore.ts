import { create } from "zustand";
import { DataItem } from "../../type/types";

type Data = DataItem[];

interface Store {
    data: Data;
    setData: (data: Data) => void;
}

export const useStore = create<Store>((set) => ({
    data: [],  
    setData: (data) => set({ data })
}));