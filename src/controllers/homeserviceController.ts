import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import HomeService from "../database/models/homeservice";

class HomeServiceController{
    public static async addHomeService(req:AuthRequest,res:Response):Promise<void>{
        const{title,description,status} = req.body;
        const HomeServices = await HomeService.create({
            title,
            description,
            status
        })
        res.status(201).json({
            message:"Home service Added Successfully",
            data:HomeServices
        })
    }
    public static async getHomeService(req:AuthRequest,res:Response):Promise<void>{
        const HomeServices = await HomeService.findAll({
            where:{
                status:'show'
            }
        })
        res.status(200).json({
            message:"Home service Fetched Successfully",
            data:HomeServices
        })
    }
    public static async updateHomeService(req:AuthRequest,res:Response):Promise<void>{
        const {id} = req.params;
        const {title,description,status} = req.body;
        const updated = await HomeService.update({
            title,
            description,
            status
        },{
            where:{
                id
            }
        })    
        res.status(200).json({  
            message:"Welcome Text Updated Successfully",
            data:updated
        })
 
}
public static async deleteHomeService(req:AuthRequest,res:Response):Promise<void>{
    const {id} = req.params;
 await HomeService.destroy({
        where:{
            id
        }
    })
    res.status(200).json({
        message:"Home service Deleted Successfully",
    })
}
}
export default HomeServiceController