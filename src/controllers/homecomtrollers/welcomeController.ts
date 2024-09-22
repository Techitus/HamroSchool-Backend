import { Response } from "express";
import { AuthRequest } from "../../middleware/authMiddleware";
import WelcomeText from "../../database/models/pagemodels/homemodels/welcome";

class WelcomeController{
    public static async postWelcome(req:AuthRequest,res:Response):Promise<void>{
        const{title,subtitle,description,photo,status} = req.body;
        let fileName
        if(req.file){
            fileName = req.file.originalname;
        }
        const welcome = await WelcomeText.create({
            title,
            subtitle,
            description,
            photo : fileName,
            status
        })
        res.status(201).json({
            message:"Welcome Text Added Successfully",
            data:welcome
        })

    }
    public static async getWelcome(req:AuthRequest,res:Response):Promise<void>{
        const welcome = await WelcomeText.findAll({
            where:{
                status:'show'
            }
        })
        res.status(200).json({
            message:"Welcome Text Fetched Successfully",
            data:welcome
        })
    }
    
    public static async updateWelcome(req:AuthRequest,res:Response):Promise<void>{
        const welcome = await WelcomeText.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({
            message:"Welcome Text Updated Successfully",
            data:welcome
        })
    }
    public static async deleteWelcome(req:AuthRequest,res:Response):Promise<void>{
        const welcome = await WelcomeText.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json({
            message:"Welcome Text Deleted Successfully",
            data:welcome
        })
    }
}
export default WelcomeController