import { create } from 'zustand'

let url = '/api/products/'

const useStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    saveItem: async (newItem) => {
        const saveItems = await fetch('http://localhost:5000/api/products/', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newItem)
        })
        const res = await saveItems.json()
        set((state) => ({ products: [...state.products, res.data]}) )
        return res
    },
    fetchProducts: async () => {
        const fetchedProducts = await fetch(url)
        const data = await fetchedProducts.json()
        set({ products: data.data })
    }, 
}))

export default useStore;