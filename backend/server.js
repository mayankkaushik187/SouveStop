import express from "express"
import colors from "colors"
import connectDB from "./config/db.js"

import dotenv from "dotenv"

import productRoutes from "./routes/productRoutes.js"
import { notFound, errorHandler } from "./middleware/errorMiddleWare.js"

dotenv.config()

connectDB()

const app = express()

app.get("/", (req, res) => {
    res.send("API is running...")
})

app.use("/api/products", productRoutes)

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
    5000,
    console.log(
        `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
            .yellow.bold
    )
)
