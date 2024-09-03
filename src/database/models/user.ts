import {
    Table, 
    Column,
     Model,
     DataType,
     CreatedAt} from 'sequelize-typescript'

@Table({
    tableName:"users",
    modelName:"User",
    timestamps:true
})

class User extends Model{
    @Column({
        primaryKey:true,
        type:DataType.UUID,
        defaultValue:DataType.UUIDV4

    })
    declare id:string

    @Column({
        type:DataType.STRING,

    })
    declare email: string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
     declare password: string

     @Column({
        type:DataType.ENUM('admin','customer'),
        defaultValue:'customer'
    })
    declare role :string

    
}

export default User