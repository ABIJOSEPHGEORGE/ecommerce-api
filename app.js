import express from 'express';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';


import authRoute from './routes/auth.route.js';
import adminAuth from './routes/admin.auth.route.js';
import productRoute from './routes/product.route.js';
import indexRoute from './routes/index.route.js';
import userRoute from './routes/user.route.js';

import connectDb from './config/db.js';

const __dirname = path.resolve()

const app = express();
connectDb();
dotenv.config()
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/',indexRoute);
app.use('/auth',authRoute);
app.use('/admin',adminAuth);
app.use('/admin/product',productRoute);
app.use('/user',userRoute);


const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
})