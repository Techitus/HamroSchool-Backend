import { Table,Column, Model,DataType, PrimaryKey } from "sequelize-typescript";

@Table({
    tableName : "users",
    modelName : "USer",
    timestamps : true

})
class User extends Model {
    @Column({
        type : DataType.UUID,
        defaultValue : DataType.UUIDV4,
        primaryKey : true

    })
    declare id : string
    @Column({
        type : DataType.STRING,
        allowNull : false

    })
    declare email : string
@Column({
    type : DataType.STRING,
})
declare password : string
}

export default User