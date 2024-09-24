import { Response } from "express";
import Page from "../database/models/page";
import { AuthRequest } from "../middleware/authMiddleware";

class PageController{
    public static async addPage(req:AuthRequest,res:Response):Promise<void>{
       const {title,description,banner} = req.body;
       let fileName
       if(req.file){
           fileName = req.file.originalname;
       }
       const page = await Page.create({
           title,
           description,
           banner : fileName
       })
       res.status(201).json({
           message:"Page Added Successfully",
           data:page
       })
   
    }
    public static async getPage(req:AuthRequest,res:Response):Promise<void>{
        const page = await Page.findAll({   })
        res.status(200).json({
            message:"Page Fetched Successfully",
            data:page
        })
    }
    public static async updatePage(req:AuthRequest,res:Response):Promise<void>{
        const {id} = req.params;
        const {title,description,banner} = req.body;
        let fileName
        if(req.file){
            fileName = req.file.originalname;
        }
        const updated = await Page.update({
            title,
            description,
            banner : fileName
        },{
            where:{
                id
            }
        })    
        res.status(200).json({  
            message:"Page Updated Successfully",
            data:updated
        })
    }
    public static async deletePage(req:AuthRequest,res:Response):Promise<void>{
        const {id} = req.params;
        const page = await Page.destroy({
            where:{
                id
            }
        })
        res.status(200).json({
            message:"Page Deleted Successfully",
        })
    }
}
export default PageController