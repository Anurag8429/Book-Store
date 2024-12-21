import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected...");
  } catch (error) {
    console.error("Database Connection Failed...", error.message);
    process.exit(1); // Exit the process with failure code
  }
};

export default connectDB;
