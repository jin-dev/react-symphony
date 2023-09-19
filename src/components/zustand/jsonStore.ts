import { create } from "zustand";

interface Sent {
    subject: string;
    content: string;
    emails: string[];
}

interface DataItem {
    created_at: number;
    key: string;
    expires_at: number;
    download_count: number;
    count: number;
    size: number;
    summary: string;
    thumbnailUrl: string;
    files: [];
    sent: Sent;
}

type Data = DataItem[];

interface Store {
    data: Data;
    setData: (data: Data) => void;
}

export const useStore = create<Store>((set) => ({
    data: [],  
    setData: (data) => set({ data })
}));