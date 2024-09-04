import { Response } from "express"
import Menu from "../database/models/menu"
import { AuthRequest } from "../middleware/authMiddleware"

class menuController {
    public static async addMenu(req:AuthRequest,res:Response):Promise<void>{
        const {menuTitle,position,publish,parentMenu} = req.body
        try{
            Menu.create({
                menuTitle,
                position,
                publish,
                parentMenu
            })
            res.status(200).json({
                message : "Menu added successfully"
            })
        }catch(err){
            res.status(500).json({
                message : "unable to create menu"
            })
        }
    }
    public static async editMenu(req:AuthRequest,res:Response):Promise<void>{
        const {id} = req.params
        const {menuTitle,position,publish,parentMenu} = req.body
        
   Menu.update({
        menuTitle,
        position,   
        publish,
        parentMenu
    },{
        where:{
            id:id
        },
    })
res.status(200).json({
    message : "Menu updated successfully"

})   

      
    }
    public static async fetchAllMenus(req:AuthRequest,res:Response):Promise<void>{
      try{
   const menus = await Menu.findAll()
   res.status(200).json({
        message : "Menu fetched successfully",
        menus
   })
      }catch(err){
        res.status(500).json({
            message : "Internal Server Error"
        })
      }
    }
    public static async deleteMenu(req:AuthRequest,res:Response):Promise<void>{
        try{
            const {id} = req.params
            const menu = await Menu.findAll({
                where : {
                    id:id
                }

            })
            if(!menu){
                res.status(400).json({
                    message : "Menu not found"
                })
            }else{
                await Menu.destroy({
                    where:{
                        id:id

                    }

                })
                res.status(200).json({
                    message : "Menu deleted successfully"

                })
            }

        }catch(err){
            res.status(500).json({
                message : "Internal Server Error"
            })
        }
    }
    public static async fetchSingleMenu(req:AuthRequest,res:Response):Promise<void>{
        try{
            const {id} = req.params
            const menu = await Menu.findAll({
                where : {
                    id:id
                }
            })
            res.status(200).json({
                message : "Menu fetched successfully",
                menu
            })

        }catch(err){
            res.status(500).json({
                message : "Internal Server Error"
            })
        }

    }
}
export default menuController