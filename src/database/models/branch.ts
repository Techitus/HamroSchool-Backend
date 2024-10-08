import { UUID } from 'crypto'
import {
    Table, 
    Column,
     Model,
     DataType} from 'sequelize-typescript'
@Table({
    tableName:"branches",
    modelName:"Branch",
    timestamps:true
})

class Branch extends Model{
    @Column({
        type:DataType.UUID,
        primaryKey:true,
        defaultValue:DataType.UUIDV4
        })
    declare id: string
    
    @Column({
        type:DataType.STRING,

    })
    declare branchName: string

     @Column({
        type:DataType.STRING,
    
    })
    declare schoolName :string
    @Column({
        type:DataType.STRING,

    })
    declare email: string
    @Column({
        type:  DataType.STRING,
        allowNull:false,
        validate :{
            len : {
                args : [10,10],
                msg : "Phone number must be 10 digits"
            }
        }
    })
    declare mobileNo : string
    @Column({
        type:DataType.STRING,

    })
    declare address: string
    @Column({
        type:DataType.STRING,

    })
    declare systemLogo: string
    
}

export default Branch