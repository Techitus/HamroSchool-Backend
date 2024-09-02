import express from 'express';
const app = express();
import dotenv from 'dotenv';
import adminSeeder from './adminSeeder';
dotenv.config()
require('./database/connection')


adminSeeder()


















app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})