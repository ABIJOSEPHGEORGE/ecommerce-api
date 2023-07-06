import express from "express";
import { listProducts, singleProduct } from "../controller/product.controller.js";
const route = express.Router();

route.get('/product/:id',singleProduct);
route.get('/products',listProducts);

export default route;