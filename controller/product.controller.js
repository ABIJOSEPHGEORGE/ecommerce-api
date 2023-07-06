import productSchema from "../model/product.model.js";
import schema from "../utils/validations/validations.js"

export const createProduct = async(req,res) => {
    try{
        req.body.product_image = req.file.path;
        const {error,value} = schema.productSchema.validate(req.body);
        if(error) {
            return res.status(400).json({msg:error.details[0].message})
        }
        await productSchema.create(value);
        res.status(201).json({msg:'CREATED'});
    }catch(err){
        res.status(500).json({msg:"Something wen't wrong",err})
    }
}

export const singleProduct = async(req,res) => {
    try{
        const product = await productSchema.findById(req.params.id);
        res.status(200).json({msg:"OK",results:product});
    }catch(err){
        res.status(500).json({msg:"Something went wrong",err});
    }
}

export const listProducts = async(req,res) => {
    try{
        const products = await productSchema.find();
        res.status(200).json({msg:'OK',result:products});
    }catch(err){
        res.status(500).json({msg:"Something wen't wrong",err})
    }
}