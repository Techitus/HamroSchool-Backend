import { Request, Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import Gallary from "../database/models/gallary";
import gallaryCategory from "../database/models/gallaryCategory";

class gallaryController {
   
    public static async addGallary(req:AuthRequest,res:Response):Promise<void>{
        try{
        const {gallaryTitle,description,thumbImage, status,galCatId} = req.body
        let fileName
        if(req.file){
            fileName = req.file.originalname
        }

        const gallary = await Gallary.create({
            gallaryTitle,
            description,
            status,
            thumbImage : fileName,
             galCatId 
        })
        res.status(201).json({
            message:"Gallary added successfully",
            gallary
        })
   }catch(err){
    res.status(500).json({
        message:"Error while adding gallary",
        error:err
    })
   }
    
}
public static async getGallary(req:AuthRequest, res:Response):Promise<void>{
    try{
      const gallary = await Gallary.findAll(
        {
            include : {
                model : gallaryCategory,
              attributes : ['id','galCategory']
            }
        }
      )

    res.status(200).json({
        message:"Gallary fetched successfully",
        gallary
    })
    }catch(err){
        res.status(500).json({
            message:"Error while getting gallary",
            
        })
    }


}
public static async updateGallary(req:AuthRequest,res:Response):Promise<void>{
   try{
    const {id} = req.params

       const gallary = await Gallary.findByPk(id)
       if(!gallary){
           res.status(404).json({
               message:"Gallary not found"
           })
           return
       }
       const {gallaryTitle,description,thumbImage, status} = req.body
       let fileName
       if(req.file){
           fileName = req.file.originalname
       }
       gallary.update({
           gallaryTitle,
           description,
           status,
           thumbImage : fileName
       })
       res.status(200).json({
           message:"Gallary updated successfully",
       })
   }catch(err){
       res.status(500).json({
           message:"Error while updating gallary",
           error:err
       })
   }    
}
public static async deleteGallary(req:AuthRequest,res:Response):Promise<void>{
   try{
       const {id} = req.params
       const gallary = await Gallary.findByPk(id)
       if(!gallary){
           res.status(404).json({
               message:"Gallary not found"
           })
           return
       }
       await gallary.destroy()
       res.status(200).json({
           message:"Gallary deleted successfully",
       })
   }catch(err){
       res.status(500).json({
           message:"Error while deleting gallary",
           error:err
       })
   }
}
}
export default gallaryController