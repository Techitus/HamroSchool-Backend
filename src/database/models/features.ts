import {
    Table, 
    Column,
     Model,
     DataType} from 'sequelize-typescript'
@Table({
    tableName:"features",
    modelName:"Feature",
    timestamps:true
})

class Feature extends Model{
    
    @Column({
        type:DataType.STRING,

    })
    declare featureTitle: string

     @Column({
        type:DataType.STRING,
    
    })
    declare buttonText :boolean
    @Column({
        type:DataType.STRING,

    })
    declare buttonUrl: string
    @Column({
        type:DataType.STRING,

    })
    declare icon: string
    @Column({
        type:DataType.STRING,

    })
    declare description: string
    
}

export default Feature