import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import Service from "../database/models/service";

class ServiceController{
    public static async addSercive(req:AuthRequest, res:Response):Promise<void>{
        const { serviceTitle, serviceIcon, description } = req.body;
        let fileName
        if(! req.file){
            fileName = null
        }
        const service = await Service.create({
            serviceTitle,
            serviceIcon : fileName,
            description,
            
        })
        res.status(201).json({
            message:"Service Added Successfully",
            service
        })
    }
    public static async getService(req:AuthRequest, res:Response):Promise<void>{
        try{
            const service = await Service.findAll()
            res.status(200).json({
                message:"Service Fetched Successfully",
                service
            })
        

        }catch(err){
            res.status(500).json({
                message:"Internal Server Error"
            })
        }
    }
     public static async updateService(req:AuthRequest, res:Response):Promise<void>{
        const { serviceTitle, serviceIcon, description } = req.body;
        const {id} = req.params
        let fileName
        if(! req.file){
            fileName = null
        }
        try{
            await Service.update({
                serviceTitle,
                serviceIcon : fileName,
                description,
                
            },{
                where:{
                    id:id
                }
            })
            res.status(200).json({
                message:"Service Updated Successfully"
            })
        }catch(err){
            res.status(500).json({
                message:"Internal Server Error"
            })
        }
    }
   public static async deleteService(req:AuthRequest, res:Response):Promise<void>{
       const {id} = req.params    
       try{
           const service = await Service.findAll({
               where:{
                   id:id
               }
           })
           if(service.length > 0){
               await Service.destroy({
                   where:{
                       id:id
                   }
               })
               res.status(200).json({
                   message:"Service Deleted Successfully"
               })
           }
       }catch(err){
           res.status(500).json({
               message:"Internal Server Error"
           })
       }
    }
    
    }
export default ServiceController