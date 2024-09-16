import {
    Table, 
    Column,
     Model,
     DataType} from 'sequelize-typescript'
@Table({
    tableName:"gallaries",
    modelName:"Gallary",
    timestamps:true
})

class Gallary extends Model{
    @Column({
        type:DataType.UUID,
        primaryKey:true,
        defaultValue:DataType.UUIDV4
        })
    declare id: string
    
    @Column({
        type:DataType.STRING,

    })
    declare gallaryTitle: string

    @Column({
        type:DataType.STRING,
    })
     declare description: string
     @Column({
        type:  DataType.ENUM( 'show', 'hide'),
        allowNull:false,
        defaultValue:'show'

    })
    declare status: string
    @Column({
        type:DataType.STRING,

    })
    declare thumbImage: string
    
}

export default Gallary