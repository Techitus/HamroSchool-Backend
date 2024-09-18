import express from 'express';
const app = express();
import dotenv from 'dotenv';
import adminSeeder from './adminSeeder';
import userRoutes from './routes/userRoutes';
import settingRoutes from './routes/settingRoutes';
import menuRoutes from './routes/menuRoutes';
import sliderRoutes from './routes/sliderRouter';
import featureRoutes from './routes/featureRoute';
import testimonialRoutes from './routes/testimonialRoute';
import serviceRoutes from './routes/serviceRoute';
import faqRoutes from './routes/faqRoutes';
import galCatRoutes from './routes/galCatRoutes';
import gallaryRoutes from './routes/gallaryRoutes';
import newsRoutes from './routes/newsRoutes';
dotenv.config()
require('./database/connection')
app.use(express.json())
app.use("", userRoutes)
app.use("/admin/setting", settingRoutes)
app.use("/admin/menu", menuRoutes)
app.use("/admin/slider", sliderRoutes)
app.use("/admin/feature", featureRoutes)
app.use("/admin/testimonial", testimonialRoutes)
app.use("/admin/service", serviceRoutes)
app.use("/admin/faq", faqRoutes)
app.use("/admin/gallaryCategory", galCatRoutes)
app.use("/admin/gallary", gallaryRoutes)
app.use("/admin/news", newsRoutes)
adminSeeder()




app.listen(process.env.PORT , ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})