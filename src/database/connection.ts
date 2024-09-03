import { Sequelize } from 'sequelize-typescript';


const sequelize = new Sequelize({
    dialect: 'mysql',
    host : process.env.DB_HOST,
    port : Number(process.env.DB_PORT),
    username : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    models : [__dirname + '/models']
})

sequelize.authenticate().then(()=>{
    console.log("Database connection successful")
}).catch((err)=>{
    console.log(err)
})

sequelize.sync({force : false}).then(()=>{
    console.log("Database sync successful")
}).catch((err)=>{    
    console.log(err)
})

export default sequelize