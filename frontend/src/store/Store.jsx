import { create } from 'zustand'

const useStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    fetchProducts: async () => {
        const fetchedProducts = await fetch('/api/products/')
        const data = await fetchedProducts.json()
        set({ products: data.data })
    },
}))

export default useStore;