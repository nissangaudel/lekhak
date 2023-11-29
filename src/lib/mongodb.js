import mongoose from "mongoose";


const connectDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB")
    } catch (e) {
        console.log(e);
    }
}

export default connectDB;