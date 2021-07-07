import asyncHandler from "express-async-handler"
import Product from "../models/productModel.js"
// @desc Fetch all products
// @routes GET /api/products
// @access PUBLIC
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
})
// @desc Fetch single product
// @routes GET /api/products/:id
// @access PUBLIC
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error("Product Not Found")
    }
})

// @desc Delete single product
// @routes DELETE /api/products/:id
// @access PRivate/Admin
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        await product.remove()
        res.json({ message: "Product Removed" })
    } else {
        res.status(404)
        throw new Error("Product Not Found")
    }
})

export { getProductById, getProducts, deleteProduct }
