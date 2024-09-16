import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import gallaryCategory from "../database/models/gallaryCategory";

class galCatController{
    public static async addGallaryCategory(req:AuthRequest, res:Response):Promise<void>{
        const { galCategory } = req.body;
        try {
             await gallaryCategory.create({
                galCategory
                
            })
            res.status(201).json({
                message:"Gallary Category Added Successfully",
                gallaryCategory
            })
        }catch(err){
            res.status(500).json({
                message:"Internal Server Error"
            })
        }
    }
     public static async getGallaryCategory(req:AuthRequest, res:Response):Promise<void>{
        try{
            const gallaryCategoryData = await gallaryCategory.findAll()
            res.status(200).json({
                message:"Gallary Category Fetched Successfully",
                gallaryCategoryData
            })
        

        }catch(err){
            res.status(500).json({
                message:"Internal Server Error"
            })
        }
    }
   public static async updateGallaryCategory(req:AuthRequest, res:Response):Promise<void>{
        const { galCategory } = req.body;
        const {id} = req.params
        try{
            
      const updatedData = await gallaryCategory.update({
        galCategory,
                
            },{
                where:{
                    id:id
                }
            })
            res.status(200).json({
                message:"Gallary Category Updated Successfully",
                updatedData
            })
        }catch(err){
            res.status(500).json({
                message:"Internal Server Error"
            })
        }
    }
   public static async deleteGallaryCategory(req:AuthRequest, res:Response):Promise<void>{
       const {id} = req.params    
       try{
           const gallaryCategoryData = await gallaryCategory.findAll({
               where:{
                   id:id
               }
           })
           if(gallaryCategoryData.length > 0){
               await gallaryCategory.destroy({
                   where:{
                       id:id
                   }
               })
               res.status(200).json({
                   message:"Gallary Category Deleted Successfully"
               })
           }
       }catch(err){
           res.status(500).json({
               message:"Internal Server Error"
           })
       }
    }
    
    
}
export default galCatController