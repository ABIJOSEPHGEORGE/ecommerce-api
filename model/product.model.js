import mongoose from 'mongoose';

const productSchema = mongoose.model('productSchema',new mongoose.Schema({
    product_title:{
        type:String,
        required:true,
    },
    product_description:{
        type:String,
        required:true,
    },
    product_image:{
        type:String,
        required:true,
    },
    product_price:{
        type:String,
        required:true,
    },
}))

export default productSchema;