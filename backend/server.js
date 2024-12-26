import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'

import productRoutes from './routes/product.route.js'

dotenv.config()

const app = express()

app.use(express.json()) // middleware that allows us to parse the req.body or accepting json data
app.use("/api/products", productRoutes)

app.listen(5000, () => {
    connectDB()
    console.log('server started at localhost:5000')
})
