import express from "express";
import { createOrder, orderHistory } from "../controller/order.controller.js";
import { userAuthMiddleware } from "../middlewares/auth.middleware.js";
const route = express.Router();

route.use(userAuthMiddleware)

route.get('/orders',orderHistory);

route.post('/order',createOrder);

export default route;