import mongoose from "mongoose";

const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("connecte to database");
  } catch (error) {
    console.log("error connecting", error);
  }
};

export default connectMongoDb;
