import {
    Table, 
    Column,
     Model,
     DataType} from 'sequelize-typescript'
@Table({
    tableName:"hometestimonials",
    modelName:"HomeTestimonial",
    timestamps:true
})

class HomeTestimonial extends Model{
    @Column({
        type:DataType.UUID,
        primaryKey:true,
        defaultValue:DataType.UUIDV4
        })
    declare id: string
    
    @Column({
        type:DataType.STRING,

    })
    declare title: string

    
    @Column({
        type:DataType.STRING,

    })
    declare description: string

   @ Column({
        type:  DataType.ENUM( 'show', 'hide'),
        allowNull:false,
        defaultValue:'show'

    })
    declare status: string
   
}

export default HomeTestimonial