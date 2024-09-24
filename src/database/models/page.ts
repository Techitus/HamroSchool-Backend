import {
    Table, 
    Column,
     Model,
     DataType} from 'sequelize-typescript'
@Table({
    tableName:"pages",
    modelName:"Page",
    timestamps:true
})

class Page extends Model{
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
    declare banner: string
}

export default Page