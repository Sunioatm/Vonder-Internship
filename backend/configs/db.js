const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const {MONGO_URI} = process.env

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI)
        console.log(`MongoDB Connected : ${conn.connection.host}`);
    }catch{
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports = {
    connectDB : connectDB
}