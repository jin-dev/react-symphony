import { create } from 'zustand'
/*
interface DATA {
    data: string
    setData: () => void
}

const dataStore = create<DATA>((set) => ({
    data: 'init',
    setData: () => {
        set(() => ({ data: 'new value' }))
    },
}))
export default dataStore

*/

interface Data {
    name: string;
    age: number;
    address: {
        city: string;
        country: string;
    };
}

interface Store {
    data: Data;
    setData: (data: Partial<Data>) => void;
    resetData: () => void;
}

export const useStore = create<Store> ((set) => ({
    data: {
        name: 'Jin Park',
        age: 35,
        address: {
            city: 'Seoul',
            country: 'Korea',
        },
    },
    setData: (data) => {
        set((state) => ({
            data: {
                ...state.data
            }
        }))
    },
    resetData: () => {
        set({
            data: {
                name: 'reset',
                age: 0,
                address: {
                    city: 'unknown',
                    country: 'unknown',
                }
            }
        })
    }
}));

