import { UUID } from 'crypto'
import {
    Table, 
    Column,
     Model,
     DataType} from 'sequelize-typescript'
@Table({
    tableName:"teachers",
    modelName:"Teachers",
    timestamps:true
})

class Teachers extends Model{
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
    @Column({
        type:DataType.STRING,

    })
    declare photo: string
    @Column({
        type:  DataType.ENUM( 'show', 'hide'),
        allowNull:false,
        defaultValue:'show'

    })
    declare status: string
}

export default Teachers