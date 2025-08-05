import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected!");
    } catch (error) {
        console.error("Error connecting to Database:", error);
        process.exit(1); // Exit the process with failure
    }
}