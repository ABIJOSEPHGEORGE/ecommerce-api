import mongoose from "mongoose";

export const userSchema =  mongoose.model('userSchema',new mongoose.Schema({
    first_name:{
        type:String,
        required:true,
    },
    last_name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
    },
    hashedPassword:{
        type:String,
        required:true,
    }
}))