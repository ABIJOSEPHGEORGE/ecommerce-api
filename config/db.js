import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config()

const connectDb = async () => {
  try{
    await mongoose.connect(
        process.env.DB_URL,
        { useNewUrlParser: true, useUnifiedTopology: true },
      );
      console.log('connected to database');
  }catch(err){
    console.log(err)
  }
};

export default connectDb;
