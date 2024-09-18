import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import News from "../database/models/news";

class newsController {
    public static async addNews(req:AuthRequest,res:Response):Promise<void>{
        try{
            const {newsTitle,description, date,status} = req.body
            const news = await News.create({
                newsTitle,
                description,
                date,
                status
            })
            res.status(201).json({
                message:"News added successfully",
                news
            })

        }catch(err){
            res.status(500).json({
                message:"Error while adding news",
                error:err
            })  
        }
    }
    public static async  getNews(req:AuthRequest,res:Response):Promise<void>{
        try{
            const news = await News.findAll()    
            res.status(200).json({
                message:"News fetched successfully",
                news
            })
        }catch(err){
            res.status(500).json({
                message:"Error while getting news",
                error:err
            })  
        }

    }
    public static async getSingleNews(req:AuthRequest,res:Response):Promise<void>{
        try{
            const {id} = req.params
            const singleNews= await News.findByPk(id)
            res.status(200).json({
                message:"News fetched successfully",
                singleNews
            })

        }catch(err){
            res.status(500).json({
                message:"Error while getting news",
                error:err
            })  
        }
    }
 public static async updateNews(req:AuthRequest,res:Response):Promise<void>{
    try{
        const {id} = req.params
        const {newsTitle,description, date,status} = req.body
        
        const updated = await News.update({
            newsTitle,
            description,
            date,
            status
        },{
            where:{
                id:id
            }
        })
        res.status(200).json({
            message:"Service Updated Successfully",
            updated
        })
   
}catch(err){
    res.status(500).json({
        message:"Error while updating news",
        error:err
    })
}
 }
 public static async deleteNews(req:AuthRequest,res:Response):Promise<void>{
    try{
        const {id} = req.params
        const news = await News.findByPk(id)
        if(!news){
            res.status(404).json({
                message:"News not found"
            })
            return
        }
        await news.destroy()
        res.status(200).json({
            message:"News deleted successfully",
        })
    }catch(err){
        res.status(500).json({
            message:"Error while deleting news",
            error:err
        })
    }       
}
}
export default newsController