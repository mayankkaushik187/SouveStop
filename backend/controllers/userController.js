import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import generateToken from "../utils/generateToken.js"
// @desc   Authenticate the User & GET token
// @routes POST /api/users/login
// @access PUBLIC
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error("Invalid Credentials")
    }
})

// @desc   GET user profile
// @routes POST /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(401)
        throw new Error("user not found")
    }
})
export { authUser, getUserProfile }
