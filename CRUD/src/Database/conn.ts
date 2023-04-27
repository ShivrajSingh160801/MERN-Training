import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://0.0.0.0:27017/CustomerManagement');
    console.log("MongoDB Connected");
  } catch (error:any) {
    console.error(`Error: ${error.message}`);
  }
};

export default connectDB;
