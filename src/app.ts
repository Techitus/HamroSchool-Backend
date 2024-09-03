import express from 'express';
const app = express();
import dotenv from 'dotenv';
import adminSeeder from './adminSeeder';
import userRoutes from './routes/userRoutes';
dotenv.config()
require('./database/connection')
app.use(express.json())
app.use("", userRoutes)
adminSeeder()

















app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})