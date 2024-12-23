import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";  // Import DB_NAME

// Database connection function
const connectDB = async () => {
  try {
     const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`
    // // ,{  useNewUrlParser: true, useUnifiedTopology: true, }
     );

    console.log(`MongoDB Connected to database: ${DB_NAME} at ${connection.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
