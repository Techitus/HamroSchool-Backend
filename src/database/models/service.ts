import { UUID } from 'crypto'
import {
    Table, 
    Column,
     Model,
     DataType} from 'sequelize-typescript'
@Table({
    tableName:"services",
    modelName:"Service",
    timestamps:true
})

class Service extends Model{
    @Column({
        type:DataType.UUID,
        primaryKey:true,
        defaultValue:DataType.UUIDV4
        })
    declare id: string
    
    @Column({
        type:DataType.STRING,

    })
    declare serviceTitle: string

     @Column({
        type:DataType.STRING,
    
    })
    declare serviceIcon :boolean
    @Column({
        type:DataType.STRING,

    })
     declare description: string

   
   
}

export default Service