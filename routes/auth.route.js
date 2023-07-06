import express from "express";
import { userLogin,userSignUp } from "../controller/auth.controller.js";
const route = express.Router();

route.post('/signup',userSignUp);
route.post('/login', userLogin);


export default route;