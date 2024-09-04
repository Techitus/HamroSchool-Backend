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
}
export default menuController