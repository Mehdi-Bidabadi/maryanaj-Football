import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb+srv://footballmaryanaj:12345@cluster0.xogapnh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  console.log("Connected to DB");
}

export default connectDB;