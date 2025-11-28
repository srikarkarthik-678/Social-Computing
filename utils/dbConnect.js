import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  throw new Error("Please define MONGO_URL in .env.local");
}

async function dbConnect() {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(MONGO_URL);
}

export default dbConnect;
