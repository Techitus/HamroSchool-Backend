import { Sequelize } from 'sequelize-typescript';
import gallaryCategory from './models/gallaryCategory';
import Gallary from './models/gallary';
import Branch from './models/branch';
import Setting from './models/setting';
import Menu from './models/menu';
import Slider from './models/slider';
import Feature from './models/features';
import Testimonial from './models/testamonial';


const sequelize = new Sequelize({
    dialect: 'mysql',
    host : process.env.DB_HOST,
    port : Number(process.env.DB_PORT),
    username : process.env.DB_USER,
    database : process.env.DB_NAME,
    password : process.env.DB_PASSWORD,
    models : [__dirname + '/models']
})

sequelize.authenticate().then(()=>{
    console.log("Database connection successful")
}).catch((err:any)=>{
    console.log("Error while connecting to database",err)
})

sequelize.sync( {force:false} ).then(()=>{
    console.log("Database sync successful")
}).catch((err)=>{    
    console.log("unable to sync database",err)
})

gallaryCategory.hasOne(Gallary, {foreignKey: 'galCatId'})
Gallary.belongsTo(gallaryCategory, {foreignKey: 'galCatId'})

Branch.hasMany(Setting, {foreignKey: 'branchId'})
Setting.belongsTo(Branch, {foreignKey: 'branchId'})

Branch.hasMany(Menu, {foreignKey: 'branchId'})
Menu.belongsTo(Branch, {foreignKey: 'branchId'})

Branch.hasMany(Slider, {foreignKey: 'branchId'})
Slider.belongsTo(Branch, {foreignKey: 'branchId'})


Branch.hasMany(gallaryCategory, {foreignKey: 'branchId'})    
gallaryCategory.belongsTo(Branch, {foreignKey: 'branchId'})

export default sequelize