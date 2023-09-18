import { create } from 'zustand'

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
