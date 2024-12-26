import Product from '../models/product.model.js'
import mongoose from 'mongoose'

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({  sucess: true, data: products})
    } catch (error) {
        console.log('error in fetching products: ', error.message)
        res.status(404).json({ success: false, message: 'Product not Found'})
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params
    const product = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ success: false, message: 'Invalid Product Id'})
    }

    try {
        const updated = await Product.findByIdAndUpdate(id, product, {new: true})
        res.status(200).json({ success: true, data: updated })
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error'})
    }
}

export const deleteProduct = async (req, res) => {
    // destructure the param to get id
    const { id } = req.params
    
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Product Deleted" })
    } catch (error) {
        res.status(404).json({ success: false, message: 'Product not Found'})
    }
}

export const addProduct = async (req, res) => {
    const product = req.body; // user will send this data
    if (!product.name || !product.price || !product.image) {
        return res.status(404).json({ success: false, message: "please provide all fields" })
    }

    const newProduct = new Product(product)

    try {
        await newProduct.save()
        res.status(201).json({ success: true, data: newProduct })
    } catch (error) {
        console.log(`Error in saving product: ${error.message}`)
        res.status(500).json({ success: false, message: 'Internal Server Error' })
    }
}