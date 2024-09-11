import {
    Table, 
    Column,
     Model,
     DataType} from 'sequelize-typescript'
@Table({
    tableName:"testimonials",
    modelName:"Testimonial",
    timestamps:true
})

class Testimonial extends Model{
    @Column({
        type:DataType.UUID,
        primaryKey:true,
        defaultValue:DataType.UUIDV4
        })
    declare id: string
    
    @Column({
        type:DataType.STRING,

    })
    declare name: string

    @Column({
        type:DataType.STRING,
    })
     declare surName: string

     @Column({
        type:DataType.INTEGER,
    
    })
    declare rank :number
    @Column({
        type:DataType.STRING,

    })
    declare description: string
    @Column({
        type:DataType.STRING,

    })
    declare image: string
   
}

export default Testimonial