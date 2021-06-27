import express from "express"
import { protect } from "../middleware/authMiddleWare.js"
import {
    authUser,
    getUserProfile,
    registerUser,
} from "../controllers/userController.js"
const router = express.Router()
router.route("/").post(registerUser)
router.post("/login", authUser)
router.route("/profile").get(protect, getUserProfile)

export default router
