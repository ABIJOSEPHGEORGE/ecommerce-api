import mongoose from "mongoose";
import { userSchema } from "./user.model.js";
import productSchema from "./product.model.js";

export const orderSchema = mongoose.model('orderSchema',new mongoose.Schema({
    userId:{
        type:mongoose.Types.ObjectId,
        ref:userSchema,
    },
    order_date:{
        type:Date,
        required:true,
    },
    billing_address:{
        type:Object,
        required:true,
    },
    bill_amount:{
        type:Number,
        required:true,
    },
    products : [
        {
            type:mongoose.Types.ObjectId,
            ref:productSchema,
        }
    ],
},{timestamps:true}))