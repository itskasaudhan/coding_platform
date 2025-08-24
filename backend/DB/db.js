import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();

const connection=async()=>{
   try {
     await mongoose.connect(process.env.DB_URL);
   } catch (error) {
    console.log("connection invalid",error);
    
   }
}
export default connection;