import {
    Table, 
    Column,
     Model,
     DataType} from 'sequelize-typescript'
@Table({
    tableName:"sliders",
    modelName:"Slider",
    timestamps:true
})

class Slider extends Model{
    
    @Column({
        type:DataType.STRING,

    })
    declare sliderTitle: string

    @Column({
        type:DataType.STRING,
    })
     declare position: string

     @Column({
        type:DataType.STRING,
    
    })
    declare buttonText1 :string
    @Column({
        type:DataType.STRING,

    })
    declare buttonText2: string
    @Column({
        type:DataType.STRING,

    })
    declare buttonUrl1: string
   @Column({
       type:DataType.STRING,
    })
    declare buttonUrl2: string
    @Column({
        type:DataType.STRING,

    })
    declare description: string
    @Column({
        type:DataType.STRING,

    })
    declare sliderImage: string
}

export default Slider