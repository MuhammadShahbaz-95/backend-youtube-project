import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
try {
    const connectinInstant = await mongoose.connect(
        `${process.env.MONGODB_URI}/${DB_NAME}`
    )
    console.log("Connecting to Mongo success", connectinInstant);
} catch (error) {
    console.log("connecting error:", error);
    process.exit(1);
}
}

