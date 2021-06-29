import express from "express"
import { protect } from "../middleware/authMiddleWare.js"
import { addOrderItems } from "../controllers/orderController.js"
const router = express.Router()

router.route("/").post(protect, addOrderItems)

export default router
