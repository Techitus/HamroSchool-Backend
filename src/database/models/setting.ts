import {
    Table, 
    Column,
     Model,
     DataType,
     CreatedAt} from 'sequelize-typescript'

@Table({
    tableName:"setting",
    modelName:"Setting",
    timestamps:true
})

class Setting extends Model{
    @Column({
        primaryKey:true,
        type:DataType.UUID,
        defaultValue:DataType.UUIDV4

    })
    declare id:string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    declare title: string

    @Column({
        type:DataType.STRING,
        allowNull:false
    })
     declare onlineAdmission: string

     @Column({
        type:DataType.STRING,
    })
     declare recieveEmail: string

     @Column({
        type:DataType.STRING,
    })
     declare workingHours: string
     @Column({
        type:DataType.STRING,
        allowNull:false
    })
     declare logo: string

     @Column({
        type:DataType.STRING,
    })
     declare address: string

     @Column({
        type:DataType.STRING,
        allowNull : false
    })
     declare themeOptions: string

     @Column({
        type:DataType.STRING,
    })
     declare borderRadius: string

     @Column({
        type:DataType.STRING,
    })
     declare mobileNo: string

     @Column({
        type:DataType.STRING,
    })
     declare email: string

     @Column({
        type:DataType.STRING,
    })
     declare footerText: string

     @Column({
        type:DataType.STRING,
    })
     declare copyrightText: string

     @Column({
        type:DataType.STRING,
    })
     declare facebookUrl: string

     @Column({
        type:DataType.STRING,
    })
     declare youtubeurl: string


}

export default Setting