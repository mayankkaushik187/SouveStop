import express from "express"
import { protect } from "../middleware/authMiddleWare.js"
import {
    authUser,
    getUserProfile,
    registerUser,
    updateUserProfile,
} from "../controllers/userController.js"
const router = express.Router()
router.route("/").post(registerUser)
router.post("/login", authUser)
router
    .route("/profile")
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

export default router
