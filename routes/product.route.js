import express from "express";
import { adminAuthMiddleware } from "../middlewares/auth.middleware.js";
import upload from '../config/multer.config.js'
import { createProduct } from "../controller/product.controller.js";

const route = express.Router();

route.use(adminAuthMiddleware)

route.post('/create',upload.single('product_image'),createProduct)

export default route;