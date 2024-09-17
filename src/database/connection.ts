import { Sequelize } from 'sequelize-typescript';
import gallaryCategory from './models/gallaryCategory';
import Gallary from './models/gallary';


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

gallaryCategory.hasMany(Gallary, {foreignKey: 'galCatId'})
Gallary.belongsTo(gallaryCategory, {foreignKey: 'galCatId'})


export default sequelize