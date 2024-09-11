import {
    Table, 
    Column,
     Model,
     DataType} from 'sequelize-typescript'
@Table({
    tableName:"menus",
    modelName:"Menu",
    timestamps:true
})

class Menu extends Model{
    @Column({
        type:DataType.UUID,
        primaryKey:true,
        defaultValue:DataType.UUIDV4
        })
    declare id: string
    
    @Column({
        type:DataType.STRING,

    })
    declare menuTitle: string

    @Column({
        type:DataType.STRING,
    })
     declare position: string

     @Column({
        type:DataType.BOOLEAN,
    
    })
    declare publish :boolean
    @Column({
        type:DataType.STRING,

    })
    declare parentMenu: string
    
}

export default Menu