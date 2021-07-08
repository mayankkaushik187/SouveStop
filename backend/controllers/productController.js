import e from "express"
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

// @desc Create single product
// @routes POST /api/products
// @access PRivate/Admin
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: "Sample name",
        price: 0,
        user: req.user._id,
        image: "/images/sample.jpg",
        brand: "Sample Brand",
        category: "Sampole Category",
        countInStock: 0,
        numReviews: 0,
        description: "Sample desc",
    })
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})

// @desc Update single product
// @routes PUT /api/products/:id
// @access PRivate/Admin
const updateProduct = asyncHandler(async (req, res) => {
    const { name, price, description, image, brand, category, countInStock } =
        req.body

    const product = await Product.findById(req.params.id)

    if (product) {
        product.name = name
        product.price = price
        product.description = description
        product.image = image
        product.brand = brand
        product.category = category
        product.countInStock = countInStock

        const updatedProduct = await product.save()
        res.json(updatedProduct)
    } else {
        res.status(401)
        throw new Error("Product Not Found")
    }
})

export {
    getProductById,
    getProducts,
    deleteProduct,
    updateProduct,
    createProduct,
}
