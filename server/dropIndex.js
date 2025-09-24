import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const dropIndex = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
    
    const db = mongoose.connection.db;
    await db.collection('workouts').dropIndex('workoutName_1');
    console.log("Dropped workoutName_1 index successfully");
    
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
};

dropIndex();