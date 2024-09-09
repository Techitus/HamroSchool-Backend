import express from 'express';
const app = express();
import dotenv from 'dotenv';
import adminSeeder from './adminSeeder';
import userRoutes from './routes/userRoutes';
import settingRoutes from './routes/settingRoutes';
import menuRoutes from './routes/menuRoutes';
import sliderRoutes from './routes/sliderRouter';
dotenv.config()
require('./database/connection')
app.use(express.json())
app.use("", userRoutes)
app.use("/admin/setting", settingRoutes)
app.use("/admin/menu", menuRoutes)
app.use("/admin/slider", sliderRoutes)

adminSeeder()

















app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})