import { UUID } from 'crypto'
import {
    Table, 
    Column,
     Model,
     DataType} from 'sequelize-typescript'
@Table({
    tableName:"faqs",
    modelName:"Faq",
    timestamps:true
})

class Faq extends Model{
    @Column({
        type:DataType.UUID,
        primaryKey:true,
        defaultValue:DataType.UUIDV4
        })
    declare id: string
    
    @Column({
        type:DataType.STRING,

    })
    declare faqTitle: string

     
    @Column({
        type:DataType.STRING,

    })
     declare description: string

   
   
}

export default Faq