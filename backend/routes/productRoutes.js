import express from "express"
import {
    getProductById,
    getProducts,
} from "../controllers/productController.js"
const router = express.Router()

// @desc Fetch all products
// @routes GET /api/products
// @access PUBLIC
router.route("/").get(getProducts)

// @desc Fetch single product
// @routes GET /api/products/:id
// @access PUBLIC
router.route("/:id").get(getProductById)

export default router
