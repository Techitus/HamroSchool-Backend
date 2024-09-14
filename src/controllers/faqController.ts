import { Response } from "express";
import { AuthRequest } from "../middleware/authMiddleware";
import Faq from "../database/models/faq";

class FaqController {
    public static async addFaq(req:AuthRequest, res:Response):Promise<void>{
        const { faqTitle, description } = req.body;
       try{
        const faq = await Faq.create({
            faqTitle,
            description
        })
        res.status(201).json({
            message:"Faq Added Successfully",
            faq
        })
       }catch(err){
           res.status(500).json({
               message:"Internal Server Error"
           })
       }

                
    }
     public static async getFaq(req:AuthRequest, res:Response):Promise<void>{
        try{
            const faq = await Faq.findAll()
            res.status(200).json({
                message:"Faq Fetched Successfully",
                faq
            })
        

        }catch(err){
            res.status(500).json({
                message:"Internal Server Error"
            })
        }
    }
   
     public static async updateFaq(req:AuthRequest, res:Response):Promise<void>{
        const { faqTitle, description } = req.body;
        const {id} = req.params
        try{
            
      const updated = await Faq.update({
                faqTitle,
                description,
                
            },{
                where:{
                    id:id
                }
            })
            res.status(200).json({
                message:"Faq Updated Successfully",
                updated
            })
        }catch(err){
            res.status(500).json({
                message:"Internal Server Error"
            })
        }
    }
    public static async deleteFaq(req:AuthRequest, res:Response):Promise<void>{
       const {id} = req.params    
       try{
           const faq = await Faq.findAll({
               where:{
                   id:id
               }
           })
           if(faq.length > 0){
               await Faq.destroy({
                   where:{
                       id:id
                   }
               })
               res.status(200).json({
                   message:"Faq Deleted Successfully"
               })
           }
       }catch(err){ 
           res.status(500).json({
               message:"Internal Server Error"
           })
       }
    }
}

export default FaqController