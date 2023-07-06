import { orderSchema } from "../model/order.model.js"
import { userSchema } from "../model/user.model.js";

export const createOrder = async(req,res) => {
    try{
        const user = await userSchema.findOne({email:req.user});
        req.body.order_date = new Date();
        req.body.userId = user._id;
        const order = await orderSchema.create(req.body);
        res.status(201).json({msg:'CREATED',results:order});
    }catch(err){
        res.status(500).json({msg:"Something wen't wrong",err})
    }
}

export const orderHistory = async(req,res) => {
    try{
        const user = await userSchema.findOne({email:req.user});
        const orders = await orderSchema.find({userId:user._id}).populate('products')
        res.status(200).json({msg:'OK',results:orders});
    }catch(err){
        res.status(500).json({msg:"Something wen't wrong",err})
    }
}