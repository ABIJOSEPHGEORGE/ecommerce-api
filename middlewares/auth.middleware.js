import jwt from 'jsonwebtoken'
import { userSchema } from '../model/user.model.js';
export const userAuthMiddleware = async (req,res,next) => {
    try{
        let tokenFromHeaders = req.headers.authorization;
        if(!tokenFromHeaders){
            return res.status(403).json('Invalid token provided');
        }
        tokenFromHeaders = tokenFromHeaders.replace('Bearer', '').replace(/"/g, '').trim();
        const verifiedToken = jwt.verify(tokenFromHeaders,process.env.JWT_SECRET);
        const user = await userSchema.findOne({email:verifiedToken.user});
        if(!user || verifiedToken.role !== 'user'){
            return res.status(403).json({msg:"Invalid token, Please login again"})
        }
        req.user = user.email;
        next();
    }catch(err){
        res.status(500).json(err);
    }
}

export const adminAuthMiddleware = async (req,res,next) => {
    try{
        let tokenFromHeaders = req.headers.authorization;
        if(!tokenFromHeaders){
            return res.status(403).json('Invalid token provided');
        }
        tokenFromHeaders = tokenFromHeaders.replace('Bearer', '').replace(/"/g, '').trim();
        const verifiedToken = jwt.verify(tokenFromHeaders,process.env.JWT_SECRET);
        if(verifiedToken.role !== 'admin' || verifiedToken.user !== process.env.ADMIN_EMAIL){
            return res.status(403).json({msg:"Invalid token, Please login again"})
        }
        req.admin = verifiedToken.user;
        next();
    }catch(err){
        res.status(500).json(err);
    }
}