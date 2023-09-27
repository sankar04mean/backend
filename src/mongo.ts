import mongoose, { ConnectOptions } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongoURI = process.env.DATABASE_URL;

const options: ConnectOptions = {
  dbName: "mydatabase",
  autoIndex: true,
  autoCreate: true,
};

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI!, options);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(`MongoDB connection error: ${err}`);
    throw err;
  }
};

export default connectToMongoDB;
