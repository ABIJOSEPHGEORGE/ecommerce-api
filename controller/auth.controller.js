import { userSchema } from "../model/user.model.js";
import {hash, compare} from 'bcrypt'
import schema from "../utils/validations/validations.js";
import jwt from 'jsonwebtoken';

export const userSignUp = async (req,res) => {
    try{
        const {error, value } = schema.signupSchema.validate(req.body);
        const {email, password} = value;
        
        if(error){
            return res.status(400).json({msg:error.details[0].message});
        } 
        const isExist = await userSchema.findOne({email});
        if(isExist){
            return res.status(403).json({msg:"User already exist"})
        }
        value.hashedPassword =  await hash(password,10);
        const user = await userSchema.create(value);
        res.status(201).json({msg:"CREATED",user});
    }catch(err){
        res.status(500).json({msg:"Something wen't wrong",err})
    }
}

export const userLogin = async (req,res) => {
    try{
       const {error, value} = schema.loginSchema.validate(req.body);
       const {email, password} = value;
       if(error){
        return res.status(400).json({msg:error.details[0].message});
       }

       const user = await userSchema.findOne({email});
       if(!user) {
        return res.status(403).json({msg:'User not found'});
       }
       //comparing the password
       const comparePassword = await compare(password,user.hashedPassword);
       if(!comparePassword) {
        return res.status(403).json({msg:'Invalid password, Please try again'});
       }
       const token = jwt.sign({user:user.email,role:'user'}, process.env.JWT_SECRET, {
        expiresIn:process.env.TOKEN_EXP,
      });
       res.status(200).json({msg:'OK',token:`Bearer ${token}`});
    }catch(err){
        res.status(500).json({msg:"Something wen't wrong",err})
    }
}

// Admin Authentication

export const adminLogin = async (req,res) => {
    try{
        const {error, value} = schema.adminLoginSchema.validate(req.body);
        if(error){
            return res.status(400).json({msg:error.details[0].message});
        }
        if(value.email !== process.env.ADMIN_EMAIL || value.password !== process.env.ADMIN_PASS){
            return res.status(403).json({msg:'Inavlid Email or Password'});
        }

        const token = jwt.sign({user:process.env.ADMIN_EMAIL,role:'admin'}, process.env.JWT_SECRET, {
            expiresIn:process.env.TOKEN_EXP,
          });
        res.status(200).json({msg:'OK',token:`Bearer ${token}`});
    }catch(err){
        res.status(500).json({msg:"Something wen't wrong",err})
    }
}