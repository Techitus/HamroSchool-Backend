import {
    Table, 
    Column,
     Model,
     DataType} from 'sequelize-typescript'
@Table({
    tableName:"news",
    modelName:"News",
    timestamps:true
})

class News extends Model{
    @Column({
        type:DataType.UUID,
        primaryKey:true,
        defaultValue:DataType.UUIDV4
        })
    declare id: string
    
    @Column({
        type:DataType.STRING,

    })
    declare newsTitle: string

    @Column({
        type:DataType.DATE,
    })
     declare Date: Date

     @Column({
        type:  DataType.ENUM( 'show', 'hide'),
        allowNull:false,
        defaultValue:'show'

    })
    declare status: string
    @Column({
        type:DataType.STRING,

    })
    declare description: string
    
}

export default News