import express from 'express';
import { adminLogin } from '../controller/auth.controller.js';
const route = express.Router();

route.post('/login',adminLogin)

export default route;