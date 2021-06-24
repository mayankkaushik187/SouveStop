import mongoose from "mongoose"
import colors from "colors"
import users from "./data/users.js"
import dotenv from "dotenv"
import products from "./data/products.js"
import Product from "./models/productModel.js"
import User from "./models/userModel.js"
import Order from "./models/orderModel.js"
import connectDB from "./config/db.js"

dotenv.config()
connectDB()

const importData = async () => {
    try {
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser } // add adminUser to the user
        })

        await Product.insertMany(sampleProducts)

        console.log("Data is Imported".green.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}
const destroyData = async () => {
    try {
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()
        console.log("Data is Destroyed!".red.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === "-d") {
    destroyData()
} else {
    importData()
}
