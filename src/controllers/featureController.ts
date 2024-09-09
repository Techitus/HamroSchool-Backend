import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import Feature from "../database/models/features";

class featureController{
public static async addFeature(req:AuthRequest,res:Response):Promise<void>{11
        const {featureTitle,buttonText,buttonUrl,icon,description} = req.body
        try{
            const feature = await Feature.create({
                featureTitle,
                buttonText,
                buttonUrl,
                icon,
                description
            })
            res.status(200).json({
                message : "Feature added successfully",
                feature
            })
        }catch(err){
        res.status(500).json({
            message : "Internal Server Error"
        })
    }
}
public static async updateFeature(req:AuthRequest,res:Response):Promise<void>{
    const {featureTitle,buttonText,buttonUrl,icon,description} = req.body
    const {id} = req.params
    try{
        await Feature.update({
            featureTitle,
            buttonText,
            buttonUrl,
            icon,
            description
        },{
            where:{
                id:id
            }
        })
        res.status(200).json({
            message : "Feature updated successfully"
        })
    }catch(err){
        res.status(500).json({
            message : "Internal Server Error"
        })
    

}
}
public static async fetchFeature(req:AuthRequest,res:Response):Promise<void>{
    try{
        const feature = await Feature.findAll()
        res.status(200).json({
            message : "Feature fetched successfully",
            feature
        })
    }catch(err){
        res.status(500).json({
            message : "Internal Server Error"
        })
    }

}
public static async deleteFeature(req:AuthRequest,res:Response):Promise<void>{
    const {id} = req.params
    try{
        const feature = await Feature.findAll({
            where:{
                id:id
            }
        })
        if(feature.length > 0){
            await Feature.destroy({
                where:{
                    id:id
                }
            })
            res.status(200).json({
                message : "Feature deleted successfully"
            })
        }
    }catch(err){
        res.status(500).json({
            message : "Internal Server Error"
        })
    }
}
}
export default featureController