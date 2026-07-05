import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("⏳ Attempting to connect to MongoDB...");
    console.log(`   URI: ${process.env.MONGODB_URI?.substring(0, 80)}...`);

    const mongooseOptions: mongoose.ConnectOptions = {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 10000,
      connectTimeoutMS: 10000,
      family: 4, // Use IPv4, skip trying IPv6
    };

    await mongoose.connect(process.env.MONGODB_URI!, mongooseOptions);

    console.log("✅ MongoDB Connected Successfully!");
    console.log(`   Database: ${mongoose.connection.name}`);
    console.log(`   Host: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB Connection Failed!");
    console.error(`   Error: ${error instanceof Error ? error.message : String(error)}`);
    
    // Check if using MongoDB Atlas
    if (process.env.MONGODB_URI?.includes("mongodb+srv")) {
      console.log("\n⚠️  MongoDB Atlas Troubleshooting:");
      console.log("   1. Go to: https://cloud.mongodb.com/v2");
      console.log("   2. Check cluster 'cluster0' is running");
      console.log("   3. Go to Security > Network Access");
      console.log("   4. Add your IP or 0.0.0.0/0 (development only)");
      console.log("   5. Verify credentials: hemanthkodi6_db_user");
    } else {
      console.log("\n⚠️  Local MongoDB Troubleshooting:");
      console.log("   1. Verify MongoDB is running:");
      console.log("      Windows: net start MongoDB");
      console.log("      Mac: brew services start mongodb-community");
      console.log("   2. Test connection: mongosh");
    }
    
    throw error;
  }
};

export default connectDB;