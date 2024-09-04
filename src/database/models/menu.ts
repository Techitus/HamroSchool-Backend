import {
    Table, 
    Column,
     Model,
     DataType,
     CreatedAt} from 'sequelize-typescript'
@Table({
    tableName:"menus",
    modelName:"Menu",
    timestamps:true
})

class Menu extends Model{
    
    @Column({
        type:DataType.STRING,

    })
    declare title: string

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