import mongoose from "mongoose";
import { DB_NAME } from "./../constants.js";

const connectDB = async () => {
    try {

        const DB_URL = `${process.env.MONGODB_URI}/${DB_NAME}`;
        const CONNECTION_INSTANCE =  await mongoose.connect(DB_URL);
        console.log(`MongoDB Connected. Connection Host : ${CONNECTION_INSTANCE.connection.host}`);

    } catch (error) {

        console.error(`MongoDB connection failed. [[File name = index.db.js]] Error: ${error}`);
        process.exit(1);

    }
}

export default connectDB;