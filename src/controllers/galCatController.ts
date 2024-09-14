import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import galaryCategory from "../database/models/gallaryCategory";

class galCatController{
    public static async addGallaryCategory(req:AuthRequest, res:Response):Promise<void>{
        const { category } = req.body;
        try {
            const gallaryCategory = await galaryCategory.create({
    category
                
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
            const gallaryCategory = await galaryCategory.findAll()
            res.status(200).json({
                message:"Gallary Category Fetched Successfully",
                gallaryCategory
            })
        

        }catch(err){
            res.status(500).json({
                message:"Internal Server Error"
            })
        }
    }
   public static async updateGallaryCategory(req:AuthRequest, res:Response):Promise<void>{
        const { category } = req.body;
        const {id} = req.params
        try{
            
      const updated = await galaryCategory.update({
                category,
                
            },{
                where:{
                    id:id
                }
            })
            res.status(200).json({
                message:"Gallary Category Updated Successfully",
                updated
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
           const gallaryCategory = await galaryCategory.findAll({
               where:{
                   id:id
               }
           })
           if(gallaryCategory.length > 0){
               await galaryCategory.destroy({
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