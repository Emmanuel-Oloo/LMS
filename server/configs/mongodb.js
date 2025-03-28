import mongoose from "mongoose";

const MONGODB_URI = 'mongodb+srv://Emmanuel:Emmanuel2001@cluster0.r2nont6.mongodb.net/lms?retryWrites=true&w=majority';

// Connect to MongoDB Atlas
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("✅ Database connected successfully");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1);
    }
};

// Export the function
export default connectDB;
